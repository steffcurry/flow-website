import { useState, useRef, useEffect } from 'react';
import Vapi from '@vapi-ai/web';
import { Phone, PhoneOff, Mic, MicOff, Building2, Scale, Stethoscope, Sparkles, Hammer, Wrench, Heart, Wind } from 'lucide-react';

const PUBLIC_KEY = '6f1ee533-8616-4e86-8432-cf375ed66d47';

const NICHES = [
  {
    id: 'real-estate',
    label: 'Μεσιτικό Γραφείο',
    assistantId: '2bfbe5b8-67f5-4a91-8d58-e53377dc810f',
    Icon: Building2,
    benefit: 'Απαντά σε ενδιαφερόμενους αγοραστές ακόμα και εκτός ωραρίου — δεν χάνετε κανένα lead.',
  },
  {
    id: 'law-firm',
    label: 'Δικηγορικό Γραφείο',
    assistantId: 'bbd4429d-05b8-4611-953f-db0ff52d118b',
    Icon: Scale,
    benefit: 'Προγραμματίζει συναντήσεις και απαντά επαγγελματικά 24/7 — χωρίς να διακόπτει εσάς.',
  },
  {
    id: 'dental',
    label: 'Οδοντιατρείο',
    assistantId: '4a7e9957-7092-4a89-88cd-a7f04319eeab',
    Icon: Stethoscope,
    benefit: 'Κάθε αναπάντητη κλήση = χαμένο ραντεβού. Ο AI κλείνει ραντεβού 24/7 αντί για εσάς.',
  },
  {
    id: 'aesthetics',
    label: 'Αισθητική Κλινική',
    assistantId: '54566363-e291-4a30-b425-fc5cb21a0b73',
    Icon: Sparkles,
    benefit: 'Κάθε αναπάντητη κλήση = χαμένη συνεδρία. Ο AI γεμίζει το πρόγραμμά σας αυτόματα.',
  },
  {
    id: 'roofing',
    label: 'Στεγοποιός',
    assistantId: '828c3e84-45fa-4e6a-81f4-5945ee7a2178',
    Icon: Hammer,
    benefit: 'Επείγουσες κλήσεις δεν περιμένουν. Ο AI μαζεύει στοιχεία για προσφορά 24/7.',
  },
  {
    id: 'plumbing',
    label: 'Υδραυλικός',
    assistantId: '723b997f-7032-4b69-b812-e988c3ff5119',
    Icon: Wrench,
    benefit: 'Βλάβες δεν γνωρίζουν ωράριο. Ο AI αξιολογεί το επείγον και συντονίζει τον τεχνικό.',
  },
  {
    id: 'medspa',
    label: 'Med Spa',
    assistantId: 'beb14457-85ca-4027-9969-c53e5f8c71cc',
    Icon: Heart,
    benefit: 'Γεμίζει το ημερολόγιό σας 24/7 χωρίς επιπλέον προσωπικό — μόνο με AI.',
  },
  {
    id: 'hvac',
    label: 'Κλιματισμός',
    assistantId: '63feb293-d062-4df2-b555-a55e377829b8',
    Icon: Wind,
    benefit: 'Κλείνει ραντεβού στις ώρες αιχμής αυτόματα — ακόμα και στις 2 τα ξημερώματα.',
  },
];

type CallStatus = 'idle' | 'connecting' | 'active' | 'ended' | 'error';

export default function Demo() {
  const [selectedId, setSelectedId] = useState(NICHES[0].id);
  const [status, setStatus] = useState<CallStatus>('idle');
  const [muted, setMuted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [connectStep, setConnectStep] = useState(0);
  const vapiRef = useRef<Vapi | null>(null);
  const hadErrorRef = useRef(false);
  const stepTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const CONNECT_STEPS = [
    'Σύνδεση με τον διακομιστή...',
    'Εκκίνηση AI βοηθού...',
    'Σχεδόν έτοιμο...',
  ];

  useEffect(() => {
    if (status === 'connecting') {
      setConnectStep(0);
      stepTimerRef.current = setInterval(() => {
        setConnectStep((s) => Math.min(s + 1, CONNECT_STEPS.length - 1));
      }, 2500);
    } else {
      if (stepTimerRef.current) {
        clearInterval(stepTimerRef.current);
        stepTimerRef.current = null;
      }
    }
    return () => {
      if (stepTimerRef.current) clearInterval(stepTimerRef.current);
    };
  }, [status]);

  const niche = NICHES.find((n) => n.id === selectedId)!;

  async function startCall() {
    setStatus('connecting');
    hadErrorRef.current = false;
    setErrorMsg('');
    const vapi = new Vapi(PUBLIC_KEY);
    vapiRef.current = vapi;
    vapi.on('call-start', () => setStatus('active'));
    vapi.on('call-end', () => {
      if (!hadErrorRef.current) setStatus('ended');
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    vapi.on('error', (e: any) => {
      hadErrorRef.current = true;
      const msg = e?.message || e?.error?.message || JSON.stringify(e) || 'Unknown error';
      console.error('[Vapi error]', e);
      setErrorMsg(msg);
      setStatus('error');
    });
    try {
      await vapi.start(niche.assistantId);
    } catch (e: unknown) {
      hadErrorRef.current = true;
      const msg = e instanceof Error ? e.message : String(e);
      console.error('[Vapi start exception]', e);
      setErrorMsg(msg);
      setStatus('error');
    }
  }

  function stopCall() {
    vapiRef.current?.stop();
  }

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
  }

  const calling = status === 'connecting' || status === 'active';

  return (
    <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center mb-10 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Δοκιμάστε τον AI Βοηθό μας
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-8">
          Επιλέξτε τον κλάδο σας και ξεκινήστε μια πραγματική συνομιλία — δωρεάν, απευθείας από τον browser σας.
        </p>
        <div className="flex items-center justify-center gap-8 text-center">
          <div>
            <p className="text-2xl font-bold text-white">8</p>
            <p className="text-slate-500 text-xs mt-0.5">κλάδοι</p>
          </div>
          <div className="w-px h-8 bg-slate-700" />
          <div>
            <p className="text-2xl font-bold text-white">24/7</p>
            <p className="text-slate-500 text-xs mt-0.5">διαθεσιμότητα</p>
          </div>
          <div className="w-px h-8 bg-slate-700" />
          <div>
            <p className="text-2xl font-bold text-white">&lt;10s</p>
            <p className="text-slate-500 text-xs mt-0.5">χρόνος εκκίνησης</p>
          </div>
          <div className="w-px h-8 bg-slate-700" />
          <div>
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-slate-500 text-xs mt-0.5">στα ελληνικά</p>
          </div>
        </div>
      </div>

      {/* Niche selector — hide during/after call */}
      {!calling && status !== 'ended' && status !== 'error' && (
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

      {/* Call card */}
      <div className="w-full max-w-sm bg-slate-800/60 border border-slate-700 rounded-2xl p-8 flex flex-col items-center gap-6">
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
              onClick={startCall}
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

        {status === 'active' && (
          <>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium text-sm">Κλήση σε εξέλιξη</span>
            </div>
            <p className="text-slate-300 text-sm text-center">
              Μιλάτε με τον AI βοηθό για{' '}
              <span className="text-white font-semibold">{niche.label}</span>
            </p>
            <div className="flex gap-3 w-full">
              <button
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
                onClick={stopCall}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-colors"
              >
                <PhoneOff className="w-4 h-4" />
                <span className="text-sm font-medium">Τερματισμός</span>
              </button>
            </div>
          </>
        )}

        {status === 'ended' && (
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-400 rounded-full" />
              <span className="text-blue-400 font-medium text-sm">Η κλήση ολοκληρώθηκε</span>
            </div>
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
              onClick={reset}
              className="text-slate-500 hover:text-slate-300 text-sm transition-colors"
            >
              Δοκιμάστε άλλον κλάδο
            </button>
          </div>
        )}

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
