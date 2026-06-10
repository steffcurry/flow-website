import { useState, useRef, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import {
  Phone, PhoneOff, Mic, MicOff, Building2, Scale, Stethoscope,
  Sparkles, Hammer, Wrench, Heart, Wind,
  User, Mail, PhoneCall, Briefcase, ArrowRight, Loader2, CheckCircle2,
} from 'lucide-react';

const PUBLIC_KEY = import.meta.env.VITE_VAPI_PUBLIC_KEY;
const WEBHOOK_URL = 'https://n8n.srv1363008.hstgr.cloud/webhook/0b284ad8-ecf7-43d2-b01a-2ee6634f0712';

const NICHES = [
  { id: 'real-estate',  label: 'Μεσιτικό Γραφείο',   assistantId: '2bfbe5b8-67f5-4a91-8d58-e53377dc810f', Icon: Building2,   benefit: 'Απαντά σε ενδιαφερόμενους αγοραστές ακόμα και εκτός ωραρίου — δεν χάνετε κανένα lead.' },
  { id: 'law-firm',     label: 'Δικηγορικό Γραφείο',  assistantId: 'bbd4429d-05b8-4611-953f-db0ff52d118b', Icon: Scale,        benefit: 'Προγραμματίζει συναντήσεις και απαντά επαγγελματικά 24/7 — χωρίς να διακόπτει εσάς.' },
  { id: 'dental',       label: 'Οδοντιατρείο',         assistantId: '4a7e9957-7092-4a89-88cd-a7f04319eeab', Icon: Stethoscope,  benefit: 'Κάθε αναπάντητη κλήση = χαμένο ραντεβού. Ο AI κλείνει ραντεβού 24/7 αντί για εσάς.' },
  { id: 'aesthetics',   label: 'Αισθητική Κλινική',    assistantId: '54566363-e291-4a30-b425-fc5cb21a0b73', Icon: Sparkles,     benefit: 'Κάθε αναπάντητη κλήση = χαμένη συνεδρία. Ο AI γεμίζει το πρόγραμμά σας αυτόματα.' },
  { id: 'roofing',      label: 'Στεγοποιός',            assistantId: '828c3e84-45fa-4e6a-81f4-5945ee7a2178', Icon: Hammer,       benefit: 'Επείγουσες κλήσεις δεν περιμένουν. Ο AI μαζεύει στοιχεία για προσφορά 24/7.' },
  { id: 'plumbing',     label: 'Υδραυλικός',            assistantId: '723b997f-7032-4b69-b812-e988c3ff5119', Icon: Wrench,       benefit: 'Βλάβες δεν γνωρίζουν ωράριο. Ο AI αξιολογεί το επείγον και συντονίζει τον τεχνικό.' },
  { id: 'medspa',       label: 'Med Spa',                assistantId: 'beb14457-85ca-4027-9969-c53e5f8c71cc', Icon: Heart,        benefit: 'Γεμίζει το ημερολόγιό σας 24/7 χωρίς επιπλέον προσωπικό — μόνο με AI.' },
  { id: 'hvac',         label: 'Κλιματισμός',            assistantId: '63feb293-d062-4df2-b555-a55e377829b8', Icon: Wind,         benefit: 'Κλείνει ραντεβού στις ώρες αιχμής αυτόματα — ακόμα και στις 2 τα ξημερώματα.' },
];

type CallStatus = 'idle' | 'form' | 'submitting' | 'connecting' | 'active' | 'ended' | 'error';

interface LeadData {
  businessName: string;
  fullName: string;
  phone: string;
  email: string;
}

const CONNECT_STEPS = [
  'Σύνδεση με τον διακομιστή...',
  'Εκκίνηση AI βοηθού...',
  'Σχεδόν έτοιμο...',
];

// ── tiny helpers ──────────────────────────────────────────────────────────────
function InputField({
  icon: Icon,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
}: {
  icon: React.ElementType;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-slate-400 text-xs font-medium tracking-wide uppercase">
        {label} {required && <span className="text-blue-400">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full bg-slate-900/70 border border-slate-700 focus:border-blue-500 focus:outline-none rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-slate-600 transition-colors"
        />
      </div>
    </div>
  );
}

// ── main component ────────────────────────────────────────────────────────────
export default function Demo() {
  const [selectedId, setSelectedId]   = useState(NICHES[0].id);
  const [status, setStatus]           = useState<CallStatus>('idle');
  const [muted, setMuted]             = useState(false);
  const [errorMsg, setErrorMsg]       = useState('');
  const [connectStep, setConnectStep] = useState(0);

  // lead form state
  const [lead, setLead] = useState<LeadData>({
    businessName: '',
    fullName: '',
    phone: '',
    email: '',
  });
  const [formError, setFormError] = useState('');
  const [webhookOk, setWebhookOk] = useState<boolean | null>(null);

  const vapiRef       = useRef<Vapi | null>(null);
  const hadErrorRef   = useRef(false);
  const stepTimerRef  = useRef<ReturnType<typeof setInterval> | null>(null);

  // progress animation during connecting
  useEffect(() => {
    if (status === 'connecting') {
      setConnectStep(0);
      stepTimerRef.current = setInterval(() => {
        setConnectStep((s) => Math.min(s + 1, CONNECT_STEPS.length - 1));
      }, 2500);
    } else {
      if (stepTimerRef.current) { clearInterval(stepTimerRef.current); stepTimerRef.current = null; }
    }
    return () => { if (stepTimerRef.current) clearInterval(stepTimerRef.current); };
  }, [status]);

  useEffect(() => {
    document.title = 'Live AI Receptionist Demo — Try It Free | Coreflow Automation';
    return () => { document.title = 'Coreflow Automation | AI Automation Agency'; };
  }, []);

  const niche = NICHES.find((n) => n.id === selectedId)!;
  const inCall = status === 'connecting' || status === 'active';

  // ── form validation ─────────────────────────────────────────────────────────
  function validateForm(): boolean {
    if (!lead.businessName.trim()) { setFormError('Παρακαλώ συμπληρώστε την επωνυμία επιχείρησης.'); return false; }
    if (!lead.fullName.trim())     { setFormError('Παρακαλώ συμπληρώστε το ονοματεπώνυμό σας.'); return false; }
    if (!lead.phone.trim())        { setFormError('Παρακαλώ συμπληρώστε τον αριθμό τηλεφώνου.'); return false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) { setFormError('Παρακαλώ εισάγετε έγκυρο email.'); return false; }
    setFormError('');
    return true;
  }

  // ── FIX: no FormEvent — button is type="button", no <form> wrapper ──────────
  async function handleFormSubmit() {
    if (!validateForm()) return;

    setStatus('submitting');

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...lead,
          niche: niche.label,
          nicheId: niche.id,
          timestamp: new Date().toISOString(),
        }),
      });
      setWebhookOk(true);
    } catch {
      // silently continue even if webhook fails — don't block the demo
      setWebhookOk(false);
    }

    // proceed to call regardless
    await startCall();
  }

  // ── vapi ────────────────────────────────────────────────────────────────────
  async function startCall() {
    setStatus('connecting');
    hadErrorRef.current = false;
    setErrorMsg('');
    const vapi = new Vapi(PUBLIC_KEY);
    vapiRef.current = vapi;
    vapi.on('call-start', () => setStatus('active'));
    vapi.on('call-end', () => { if (!hadErrorRef.current) setStatus('ended'); });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vapi.on('error', (e: any) => {
      hadErrorRef.current = true;
      const msg = e?.message || e?.error?.message || JSON.stringify(e) || 'Unknown error';
      setErrorMsg(msg);
      setStatus('error');
    });
    try {
      await vapi.start(niche.assistantId);
    } catch (e: unknown) {
      hadErrorRef.current = true;
      setErrorMsg(e instanceof Error ? e.message : String(e));
      setStatus('error');
    }
  }

  function stopCall() { vapiRef.current?.stop(); }

  function toggleMute() {
    if (!vapiRef.current) return;
    const next = !muted;
    vapiRef.current.setMuted(next);
    setMuted(next);
  }

  function reset() {
    vapiRef.current = null;
    hadErrorRef.current = false;
    setStatus('idle');
    setMuted(false);
    setErrorMsg('');
    setWebhookOk(null);
  }

  // ── render ──────────────────────────────────────────────────────────────────
  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 py-20">

      {/* hero */}
      <div className="text-center mb-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Δοκιμάστε τον AI Βοηθό μας
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          Επιλέξτε τον κλάδο σας και ξεκινήστε μια πραγματική συνομιλία — δωρεάν, απευθείας από τον browser σας.
        </p>
        <div className="flex items-center justify-center gap-8 text-center">
          {[['8', 'κλάδοι'], ['24/7', 'διαθεσιμότητα'], ['<10s', 'χρόνος εκκίνησης'], ['100%', 'στα ελληνικά']].map(([val, lbl], i, arr) => (
            <div key={lbl} className="flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-white">{val}</p>
                <p className="text-slate-500 text-xs mt-0.5">{lbl}</p>
              </div>
              {i < arr.length - 1 && <div className="w-px h-8 bg-slate-700" />}
            </div>
          ))}
        </div>
      </div>

      {/* niche grid — hide while form / calling / ended / error */}
      {status === 'idle' && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 w-full max-w-2xl">
          {NICHES.map(({ id, label, Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedId(id)}
              className={`flex flex-col items-center gap-3 p-5 rounded-xl border transition-all duration-200 ${
                selectedId === id
                  ? 'border-blue-500 bg-blue-500/10 text-white'
                  : 'border-slate-700 bg-slate-800/40 text-slate-400 hover:border-slate-500 hover:text-white'
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm font-medium text-center leading-tight">{label}</span>
            </button>
          ))}
        </div>
      )}

      {/* ── card ── */}
      <div className="w-full max-w-sm bg-slate-800/60 border border-slate-700 rounded-2xl p-8 flex flex-col items-center gap-6">

        {/* STEP 1 — idle: show benefit + CTA to open form */}
        {status === 'idle' && (
          <>
            <p className="text-slate-400 text-sm text-center">
              Επιλεγμένος βοηθός:{' '}
              <span className="text-white font-semibold">{niche.label}</span>
            </p>
            <p className="text-slate-400 text-xs text-center leading-relaxed bg-slate-700/40 rounded-lg px-4 py-3">
              {niche.benefit}
            </p>
            <button
              onClick={() => setStatus('form')}
              className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              Ξεκινήστε την κλήση
            </button>
            <p className="text-slate-500 text-xs text-center">
              Απαιτείται πρόσβαση στο μικρόφωνο. Η κλήση γίνεται μέσω internet — δωρεάν.
            </p>
          </>
        )}

        {/* STEP 2 — lead-capture form
            FIX: replaced <form onSubmit> with <div> to prevent native form
            submission from firing when the component unmounts mid-async-handler,
            which caused a blank page in some browsers. */}
        {status === 'form' && (
          <div className="w-full flex flex-col gap-4">
            <div className="text-center mb-1">
              <p className="text-white font-semibold text-base">Πριν ξεκινήσουμε…</p>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                Συμπληρώστε τα στοιχεία σας για να συνδεθείτε με τον AI βοηθό.
              </p>
            </div>

            <InputField
              icon={Briefcase}
              label="Επωνυμία Επιχείρησης"
              value={lead.businessName}
              onChange={(v) => setLead((p) => ({ ...p, businessName: v }))}
              placeholder="π.χ. Ακτή Δίκιο & Συνεργάτες"
              required
            />
            <InputField
              icon={User}
              label="Ονοματεπώνυμο"
              value={lead.fullName}
              onChange={(v) => setLead((p) => ({ ...p, fullName: v }))}
              placeholder="π.χ. Γιώργος Παπαδόπουλος"
              required
            />
            <InputField
              icon={PhoneCall}
              label="Τηλέφωνο"
              type="tel"
              value={lead.phone}
              onChange={(v) => setLead((p) => ({ ...p, phone: v }))}
              placeholder="π.χ. 6912345678"
              required
            />
            <InputField
              icon={Mail}
              label="Email"
              type="email"
              value={lead.email}
              onChange={(v) => setLead((p) => ({ ...p, email: v }))}
              placeholder="π.χ. info@example.gr"
              required
            />

            {formError && (
              <p className="text-red-400 text-xs text-center leading-relaxed bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                {formError}
              </p>
            )}

            {/* FIX: type="button" + onClick — no native submit event */}
            <button
              type="button"
              onClick={handleFormSubmit}
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors mt-1"
            >
              <span>Συνέχεια στην κλήση</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="text-slate-500 hover:text-slate-300 text-xs transition-colors text-center"
            >
              ← Επιστροφή
            </button>

            <p className="text-slate-600 text-xs text-center -mt-1">
              Τα στοιχεία σας παραμένουν ασφαλή και δεν μοιράζονται με τρίτους.
            </p>
          </div>
        )}

        {/* STEP 2.5 — submitting (sending webhook + spinning up) */}
        {status === 'submitting' && (
          <div className="flex flex-col items-center gap-4 py-4">
            <Loader2 className="w-8 h-8 text-blue-400 animate-spin" />
            <p className="text-slate-300 text-sm text-center">Καταχώρηση στοιχείων…</p>
          </div>
        )}

        {/* STEP 3 — connecting */}
        {status === 'connecting' && (
          <div className="flex flex-col items-center gap-6 py-4 w-full">
            <div className="flex items-center gap-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
            <p className="text-slate-300 text-sm text-center min-h-[1.25rem] transition-all duration-500">
              {CONNECT_STEPS[connectStep]}
            </p>
            <div className="w-full bg-slate-700 rounded-full h-1 overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-[2400ms] ease-out"
                style={{ width: `${((connectStep + 1) / CONNECT_STEPS.length) * 85}%` }}
              />
            </div>
            <p className="text-slate-600 text-xs text-center">
              Η πρώτη σύνδεση μπορεί να πάρει 5–10 δευτερόλεπτα
            </p>
          </div>
        )}

        {/* STEP 4 — active call */}
        {status === 'active' && (
          <>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium text-sm">Κλήση σε εξέλιξη</span>
            </div>

            {/* greet caller by name */}
            {lead.fullName && (
              <p className="text-slate-400 text-xs text-center">
                Καλωσήρθατε,{' '}
                <span className="text-white font-medium">{lead.fullName.split(' ')[0]}</span>!
              </p>
            )}

            <p className="text-slate-300 text-sm text-center">
              Μιλάτε με τον AI βοηθό για{' '}
              <span className="text-white font-semibold">{niche.label}</span>
            </p>

            <div className="flex gap-3 w-full">
              <button
                type="button"
                onClick={toggleMute}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-colors ${
                  muted
                    ? 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                    : 'border-slate-600 bg-slate-700/50 text-slate-300 hover:border-slate-500'
                }`}
              >
                {muted ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                <span className="text-sm">{muted ? 'Unmute' : 'Mute'}</span>
              </button>
              <button
                type="button"
                onClick={stopCall}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-colors"
              >
                <PhoneOff className="w-4 h-4" />
                <span className="text-sm font-medium">Τερματισμός</span>
              </button>
            </div>
          </>
        )}

        {/* STEP 5 — ended */}
        {status === 'ended' && (
          <div className="flex flex-col items-center gap-4 text-center">
            <CheckCircle2 className="w-8 h-8 text-blue-400" />
            <p className="text-white font-semibold text-lg leading-snug">
              Αυτό μπορεί να απαντά για την επιχείρησή σας κάθε μέρα.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Μιλήστε μαζί μας και ρυθμίζουμε τον δικό σας AI βοηθό σε 48 ώρες.
            </p>
            <a
              href="/contact"
              className="w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
            >
              Κλείστε ένα 15λεπτο call →
            </a>
            <button
              type="button"
              onClick={reset}
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Δοκιμάστε άλλον κλάδο
            </button>
          </div>
        )}

        {/* error */}
        {status === 'error' && (
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-red-400 font-semibold">Αποτυχία σύνδεσης</p>
            {errorMsg && (
              <p className="text-slate-500 text-xs font-mono bg-slate-900 rounded-lg px-3 py-2 break-all">
                {errorMsg}
              </p>
            )}
            <p className="text-slate-400 text-sm leading-relaxed">
              Βεβαιωθείτε ότι έχετε επιτρέψει πρόσβαση στο μικρόφωνο και δοκιμάστε ξανά.
            </p>
            <button
              type="button"
              onClick={reset}
              className="bg-slate-700 hover:bg-slate-600 text-white py-2 px-6 rounded-xl text-sm transition-colors"
            >
              Δοκιμάστε ξανά
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
