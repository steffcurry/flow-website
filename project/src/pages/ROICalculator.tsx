import { useState, useCallback } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────

interface Task {
  id: number;
  name: string;
  minsPerHour: string;
}

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
}

interface ContactErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  company?: string;
}

type Lang = "en" | "gr";

// ── Translations ───────────────────────────────────────────────────────────────

const T = {
  en: {
    badge: "ROI Calculator",
    h1a: "How Much Does It Cost",
    h1b: "Doing It All Yourself?",
    subtitle:
      "Find out in under 2 minutes how many hours — and euros — you lose every year to repetitive tasks that can be automated.",
    step1: "Work Schedule",
    hoursDay: "Working hours / day",
    daysWeek: "Working days / week",
    hourlyRate: "Hourly rate (€)",
    hourlyHint: "Use your hourly cost or income",
    step2: "What Do You Handle Yourself?",
    step2hint:
      "Select common tasks or add your own. For each task, set how many minutes per working hour it takes.",
    quickTasks: [
      { label: "📅 Appointments & bookings", task: "Appointments & bookings", mins: "4" },
      { label: "📄 Quotes & invoices", task: "Sending quotes & invoices", mins: "4" },
      { label: "📱 Social media", task: "Social media management", mins: "5" },
      { label: "🎯 Lead follow-up", task: "Lead tracking & follow-up", mins: "4" },
      { label: "📧 Email management", task: "Email management", mins: "5" },
      { label: "📦 Order management", task: "Order management", mins: "3" },
      { label: "📊 Reports & analytics", task: "Reports & analytics", mins: "3" },
      { label: "🔔 Client reminders", task: "Client reminders & notifications", mins: "3" },
    ],
    taskNamePlaceholder: "e.g. Answering emails...",
    taskMinsLabel: "Minutes / working hour",
    addTask: "+ Add custom task",
    calcBtn: "Calculate My ROI →",
    step3: "Get Your Personalised Analysis",
    step3desc:
      "Fill in your details so we can prepare a tailored automation proposal for your business.",
    firstName: "First name",
    lastName: "Last name",
    email: "Email",
    phone: "Mobile phone",
    company: "Business name",
    industry: "Industry",
    industryOptions: [
      "Medical clinic",
      "Dental practice",
      "Legal services",
      "Accounting office",
      "F&B / Catering",
      "Real estate",
      "Trades (electrical / plumbing)",
      "E-commerce",
      "Education / Coaching",
      "Other",
    ],
    submitBtn: "Send My ROI Report →",
    privacyNote: "No spam. Your report is sent instantly.",
    resultTitle: "Annual cost breakdown",
    resWorkHours: "Working hours / year",
    resHoursLost: "Hours lost / year",
    resROI: "Annual automation ROI",
    resTasks: "across {n} repetitive task(s)",
    perTask: "Per task",
    minsPerHour: "min/h →",
    hoursYear: "hrs/year",
    pricingLabel: "One-time system investment (20% of ROI)",
    pricingDesc: "For every €1 invested, you recover €5 in time & revenue",
    ctaTitle: "Ready to automate?",
    ctaDesc:
      "To continue, please book a call directly through our calendar.",
    bookCall: "Book a Call →",
    afterBooking: "After booking, you can send any additional details, documents, or questions to:",
    successTitle: "Your report is on its way!",
    successDesc:
      "You'll receive your full ROI report in a few minutes, along with our automation proposal. We'll call you shortly.",
    required: "Required",
    errRequired: "Required field",
    errEmail: "Please enter a valid email",
    errDuplicate:
      "These details have already been submitted. Contact us directly for a new calculation.",
    fieldErrors: {
      firstName: "Required field",
      lastName: "Required field",
      email: "Please enter a valid email",
      phone: "Required field",
      company: "Required field",
    },
    selectIndustry: "Select...",
    hoursPerDay: "hrs × ",
    daysPerWeek: " days × 52 weeks",
  },
  gr: {
    badge: "Υπολογιστής ROI",
    h1a: "Πόσο Κοστίζει το",
    h1b: "Να Τα Κάνεις Όλα Μόνος;",
    subtitle:
      "Μάθε σε λιγότερο από 2 λεπτά πόσες ώρες — και ευρώ — χάνεις κάθε χρόνο σε επαναλαμβανόμενες εργασίες που μπορεί να αυτοματοποιηθούν.",
    step1: "Ωράριο Εργασίας",
    hoursDay: "Ώρες εργασίας / ημέρα",
    daysWeek: "Εργάσιμες ημέρες / εβδομάδα",
    hourlyRate: "Αξία εργατοώρας (€)",
    hourlyHint: "Χρησιμοποίησε το ωριαίο σου κόστος ή εισόδημα",
    step2: "Τι Κάνεις Μόνος Σου;",
    step2hint:
      "Επέλεξε έτοιμα tasks ή πρόσθεσε δικά σου. Για κάθε task ορίζεις πόσα λεπτά ανά εργάσιμη ώρα.",
    quickTasks: [
      { label: "📅 Ραντεβού & κρατήσεις", task: "Ραντεβού & κρατήσεις", mins: "4" },
      { label: "📄 Προσφορές & τιμολόγια", task: "Αποστολή προσφορών & τιμολογίων", mins: "4" },
      { label: "📱 Social media", task: "Διαχείριση social media", mins: "5" },
      { label: "🎯 Follow-up leads", task: "Παρακολούθηση leads & follow-up", mins: "4" },
      { label: "📧 Διαχείριση email", task: "Διαχείριση email", mins: "5" },
      { label: "📦 Παραγγελίες", task: "Διαχείριση παραγγελιών", mins: "3" },
      { label: "📊 Αναφορές", task: "Αναφορές & αναλύσεις", mins: "3" },
      { label: "🔔 Υπενθυμίσεις", task: "Υπενθυμίσεις & notifications πελατών", mins: "3" },
    ],
    taskNamePlaceholder: "π.χ. Απαντήσεις σε email...",
    taskMinsLabel: "Λεπτά / εργάσιμη ώρα",
    addTask: "+ Προσθήκη custom task",
    calcBtn: "Υπολόγισε το ROI μου →",
    step3: "Λάβε την Προσωποποιημένη σου Ανάλυση",
    step3desc:
      "Συμπλήρωσε τα στοιχεία σου για να ετοιμάσουμε μια εξατομικευμένη πρόταση αυτοματοποίησης.",
    firstName: "Όνομα",
    lastName: "Επίθετο",
    email: "Email",
    phone: "Κινητό τηλέφωνο",
    company: "Επωνυμία επιχείρησης",
    industry: "Κλάδος",
    industryOptions: [
      "Ιατρείο / Κλινική",
      "Οδοντιατρείο",
      "Νομικές υπηρεσίες",
      "Λογιστικό γραφείο",
      "Εστίαση / Catering",
      "Real estate",
      "Ηλεκτρολογία / Υδραυλικά",
      "E-commerce",
      "Εκπαίδευση / Coaching",
      "Άλλο",
    ],
    submitBtn: "Στείλε μου το ROI Report →",
    privacyNote: "Δεν κάνουμε spam. Το report αποστέλλεται άμεσα.",
    resultTitle: "Ανάλυση ετήσιου κόστους",
    resWorkHours: "Ώρες εργασίας / χρόνο",
    resHoursLost: "Ώρες που χάνονται / χρόνο",
    resROI: "Ετήσιο ROI αυτοματοποίησης",
    resTasks: "σε {n} επαναλαμβανόμενα task(s)",
    perTask: "Ανά task",
    minsPerHour: "λεπτ/ώρα →",
    hoursYear: "ώρες/χρόνο",
    pricingLabel: "Εφάπαξ κόστος συστήματος (20% του ROI)",
    pricingDesc: "Για κάθε €1 που επενδύεις, κερδίζεις €5 σε ανακτημένο χρόνο & εισόδημα",
    ctaTitle: "Έτοιμος να αυτοματοποιήσεις;",
    ctaDesc: "Για να συνεχίσεις, κλείσε κατευθείαν ένα call μέσα από το ημερολόγιό μας.",
    bookCall: "Κλείσε Call →",
    afterBooking: "Μετά την κράτηση, μπορείς να στείλεις επιπλέον στοιχεία, έγγραφα ή ερωτήσεις στο:",
    successTitle: "Το report είναι καθ' οδόν!",
    successDesc:
      "Σε λίγα λεπτά θα λάβεις το πλήρες ROI report και την πρότασή μας. Θα σε καλέσουμε σύντομα.",
    required: "Υποχρεωτικό",
    errRequired: "Υποχρεωτικό πεδίο",
    errEmail: "Εισάγετε έγκυρο email",
    errDuplicate:
      "Τα στοιχεία αυτά έχουν ήδη χρησιμοποιηθεί. Επικοινώνησε μαζί μας για νέο υπολογισμό.",
    fieldErrors: {
      firstName: "Υποχρεωτικό πεδίο",
      lastName: "Υποχρεωτικό πεδίο",
      email: "Εισάγετε έγκυρο email",
      phone: "Υποχρεωτικό πεδίο",
      company: "Υποχρεωτικό πεδίο",
    },
    selectIndustry: "Επίλεξε...",
    hoursPerDay: "ω × ",
    daysPerWeek: " μ × 52 εβδ.",
  },
} as const;

// ── Constants ──────────────────────────────────────────────────────────────────

const WEBHOOK = "https://n8n.srv1363008.hstgr.cloud/webhook/e30d362d-e8d7-4af0-9556-d32988d069f4sdag";
const CALENDAR_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1neJ3mZoRmNIZh6hdQ51JefsF3V_C5BUfI22Iyn5IGviu1etX5nMwYlh6op-ZZZhn62huLEZuH";
const CONTACT_EMAIL = "contact@coreflowautomation.net";

const HOURS_QUICK = [8, 10, 12, 15];
const DAYS_QUICK = [5, 6, 7];

const FP_KEY = "cf_submitted_v2";

function loadFingerprints(): Set<string> {
  try {
    const raw = localStorage.getItem(FP_KEY);
    if (raw) return new Set(JSON.parse(raw));
  } catch {}
  return new Set();
}

function saveFingerprint(fp: string) {
  const set = loadFingerprints();
  set.add(fp);
  try {
    localStorage.setItem(FP_KEY, JSON.stringify([...set]));
  } catch {}
}

function makeFingerprint(c: ContactForm) {
  return [c.firstName, c.lastName, c.email, c.phone, c.company]
    .map((v) => v.toLowerCase().replace(/\s/g, ""))
    .join("|");
}

function fmt(n: number) {
  return new Intl.NumberFormat("el-GR", { maximumFractionDigits: 0 }).format(Math.round(n));
}

// ── Styles (inline CSS-in-JS approach) ────────────────────────────────────────

const css = {
  // Colors matching Coreflow site
  bg: "#0A0E1A",
  surface: "#0F1520",
  surface2: "#141B2A",
  border: "rgba(255,255,255,0.07)",
  border2: "rgba(255,255,255,0.13)",
  cyan: "#00C8F0",
  cyanDim: "rgba(0,200,240,0.08)",
  cyanGlow: "rgba(0,200,240,0.15)",
  cyanMid: "rgba(0,200,240,0.3)",
  text: "#F0F4FF",
  text2: "#8A9AB8",
  text3: "#3A4A62",
  danger: "#FF5050",
  accent: "#00C8F0",
} as const;

// ── Sub-components ─────────────────────────────────────────────────────────────

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 0,
        background: css.surface2,
        borderRadius: 100,
        border: `1px solid ${css.border2}`,
        padding: 3,
        userSelect: "none",
      }}
    >
      {(["en", "gr"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            padding: "5px 14px",
            borderRadius: 100,
            border: "none",
            background: lang === l ? css.cyan : "transparent",
            color: lang === l ? "#0A0E1A" : css.text2,
            fontFamily: "inherit",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.08em",
            transition: "all 0.18s",
            textTransform: "uppercase",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function StepDot({ n }: { n: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: css.cyanDim,
        border: `1px solid ${css.cyanMid}`,
        color: css.cyan,
        fontSize: 11,
        fontWeight: 700,
        marginRight: 10,
        flexShrink: 0,
      }}
    >
      {n}
    </span>
  );
}

function Card({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div
      style={{
        background: css.surface,
        border: `1px solid ${accent ? "rgba(0,200,240,0.2)" : css.border}`,
        borderRadius: 14,
        padding: "24px 28px",
        marginBottom: 16,
        position: "relative",
        ...(accent
          ? {
              backgroundImage:
                "linear-gradient(135deg, rgba(0,200,240,0.03) 0%, transparent 60%)",
            }
          : {}),
      }}
    >
      {accent && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            borderRadius: "14px 14px 0 0",
            background: `linear-gradient(90deg, ${css.cyan}, transparent)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

function FieldInput({
  label,
  required,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: 12,
          fontWeight: 500,
          color: css.text2,
          marginBottom: 6,
          letterSpacing: "0.03em",
        }}
      >
        {label}
        {required && <span style={{ color: css.cyan, marginLeft: 3 }}>*</span>}
      </label>
      <input
        {...props}
        style={{
          width: "100%",
          background: css.surface2,
          border: `1px solid ${error ? css.danger : css.border}`,
          borderRadius: 8,
          padding: "10px 14px",
          fontFamily: "inherit",
          fontSize: 14,
          color: css.text,
          outline: "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
          boxSizing: "border-box",
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = css.cyanMid;
          e.currentTarget.style.boxShadow = `0 0 0 3px ${css.cyanGlow}`;
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = error ? css.danger : css.border;
          e.currentTarget.style.boxShadow = "none";
        }}
      />
      {error && (
        <p style={{ fontSize: 11, color: css.danger, marginTop: 4 }}>{error}</p>
      )}
    </div>
  );
}

function FieldSelect({
  label,
  required,
  error,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: 12,
          fontWeight: 500,
          color: css.text2,
          marginBottom: 6,
          letterSpacing: "0.03em",
        }}
      >
        {label}
        {required && <span style={{ color: css.cyan, marginLeft: 3 }}>*</span>}
      </label>
      <select
        {...props}
        style={{
          width: "100%",
          background: css.surface2,
          border: `1px solid ${error ? css.danger : css.border}`,
          borderRadius: 8,
          padding: "10px 14px",
          fontFamily: "inherit",
          fontSize: 14,
          color: css.text,
          outline: "none",
          cursor: "pointer",
          appearance: "none",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M6 8L1 3h10z' fill='%238A9AB8'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
          paddingRight: 36,
          boxSizing: "border-box",
        }}
      >
        {children}
      </select>
      {error && (
        <p style={{ fontSize: 11, color: css.danger, marginTop: 4 }}>{error}</p>
      )}
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function ROICalculator() {
  const [lang, setLang] = useState<Lang>("en");
  const t = T[lang];

  // Work schedule
  const [hoursDay, setHoursDay] = useState(10);
  const [daysWeek, setDaysWeek] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(80);

  // Tasks
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "", minsPerHour: "" },
  ]);
  const [taskCounter, setTaskCounter] = useState(2);
  const [usedQuickTasks, setUsedQuickTasks] = useState<Set<string>>(
    new Set([])
  );

  // Results
  const [results, setResults] = useState<null | {
    totalHoursYear: number;
    totalHoursLost: number;
    totalROI: number;
    investmentCost: number;
    taskBreakdown: { name: string; mins: number; hoursYear: number; roiEur: number }[];
  }>(null);

  // Contact
  const [contact, setContact] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
  });
  const [contactErrors, setContactErrors] = useState<ContactErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [duplicateError, setDuplicateError] = useState(false);

  // ── Handlers ────────────────────────────────────────────────────────────────

  const addTask = useCallback(
    (name = "", mins = "") => {
      setTasks((prev) => [
        ...prev,
        { id: taskCounter, name, minsPerHour: mins },
      ]);
      setTaskCounter((c) => c + 1);
    },
    [taskCounter]
  );

  const removeTask = useCallback((id: number) => {
    setTasks((prev) => {
      const removed = prev.find((t) => t.id === id);
      if (removed) {
        setUsedQuickTasks((s) => {
          const ns = new Set(s);
          ns.delete(removed.name);
          return ns;
        });
      }
      return prev.filter((t) => t.id !== id);
    });
  }, []);

  const updateTask = useCallback(
    (id: number, field: "name" | "minsPerHour", value: string) => {
      setTasks((prev) =>
        prev.map((t) => (t.id === id ? { ...t, [field]: value } : t))
      );
    },
    []
  );

  const addQuickTask = useCallback(
    (qt: { task: string; mins: string }) => {
      if (usedQuickTasks.has(qt.task)) return;
      setUsedQuickTasks((s) => new Set([...s, qt.task]));
      addTask(qt.task, qt.mins);
    },
    [usedQuickTasks, addTask]
  );

  const calculateROI = useCallback(() => {
    const totalHoursYear = hoursDay * daysWeek * 52;
    const validTasks = tasks.filter(
      (t) => t.name.trim() && parseFloat(t.minsPerHour) > 0
    );
    if (validTasks.length === 0) return;

    const taskBreakdown = validTasks.map((t) => {
      const mins = parseFloat(t.minsPerHour);
      const hoursYear = totalHoursYear * (mins / 60);
      const roiEur = hoursYear * hourlyRate;
      return { name: t.name.trim(), mins, hoursYear, roiEur };
    });

    const totalHoursLost = taskBreakdown.reduce((s, t) => s + t.hoursYear, 0);
    const totalROI = taskBreakdown.reduce((s, t) => s + t.roiEur, 0);
    const investmentCost = totalROI * 0.2;

    setResults({
      totalHoursYear,
      totalHoursLost,
      totalROI,
      investmentCost,
      taskBreakdown,
    });
  }, [hoursDay, daysWeek, hourlyRate, tasks]);

  const validateContact = useCallback((): boolean => {
    const errors: ContactErrors = {};
    if (!contact.firstName.trim()) errors.firstName = t.fieldErrors.firstName;
    if (!contact.lastName.trim()) errors.lastName = t.fieldErrors.lastName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim()))
      errors.email = t.fieldErrors.email;
    if (contact.phone.trim().length < 10) errors.phone = t.fieldErrors.phone;
    if (!contact.company.trim()) errors.company = t.fieldErrors.company;
    setContactErrors(errors);
    return Object.keys(errors).length === 0;
  }, [contact, t]);

  const submitForm = useCallback(async () => {
    if (!results) return;
    if (!validateContact()) return;

    const fp = makeFingerprint(contact);
    if (loadFingerprints().has(fp)) {
      setDuplicateError(true);
      return;
    }

    setSubmitting(true);
    const payload = {
      contact: { ...contact },
      roi_analysis: {
        hours_per_day: hoursDay,
        days_per_week: daysWeek,
        hourly_rate_eur: hourlyRate,
        total_working_hours_year: Math.round(results.totalHoursYear),
        tasks: results.taskBreakdown.map((t) => ({
          name: t.name,
          mins_per_hour: t.mins,
          hours_lost_per_year: Math.round(t.hoursYear),
          roi_eur: Math.round(t.roiEur),
        })),
        total_annual_roi_eur: Math.round(results.totalROI),
        system_cost_eur: Math.round(results.investmentCost),
      },
      submitted_at: new Date().toISOString(),
      language: lang,
    };

    try {
      await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors",
      });
      saveFingerprint(fp);
      setSubmitted(true);
    } catch {
      // silent — no-cors fetch always resolves
      saveFingerprint(fp);
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }, [results, contact, validateContact, hoursDay, daysWeek, hourlyRate, lang]);

  // ── Render ───────────────────────────────────────────────────────────────────

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: css.surface2,
    border: `1px solid ${css.border}`,
    borderRadius: 8,
    padding: "10px 14px",
    fontFamily: "inherit",
    fontSize: 14,
    color: css.text,
    outline: "none",
    boxSizing: "border-box",
  };

  const quickBadgeStyle = (used: boolean): React.CSSProperties => ({
    padding: "6px 13px",
    borderRadius: 100,
    background: used ? css.surface2 : css.surface2,
    border: `1px solid ${used ? css.border : css.border2}`,
    color: used ? css.text3 : css.text2,
    fontSize: 12,
    cursor: used ? "default" : "pointer",
    transition: "all 0.15s",
    opacity: used ? 0.45 : 1,
    userSelect: "none",
    whiteSpace: "nowrap",
  });

  const hoursBadgeStyle = (active: boolean): React.CSSProperties => ({
    padding: "5px 12px",
    borderRadius: 100,
    background: active ? css.cyanDim : css.surface2,
    border: `1px solid ${active ? css.cyanMid : css.border}`,
    color: active ? css.cyan : css.text2,
    fontSize: 12,
    cursor: "pointer",
    transition: "all 0.15s",
    userSelect: "none",
  });

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: css.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
          fontFamily:
            "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 480 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: css.cyanDim,
              border: `2px solid ${css.cyanMid}`,
              margin: "0 auto 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
            }}
          >
            ✓
          </div>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 28,
              fontWeight: 800,
              color: css.text,
              marginBottom: 14,
            }}
          >
            {t.successTitle}
          </h2>
          <p style={{ color: css.text2, lineHeight: 1.7 }}>{t.successDesc}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: css.bg,
        fontFamily:
          "'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif",
        color: css.text,
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(0,200,240,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,240,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orb */}
      <div
        style={{
          position: "fixed",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,200,240,0.06) 0%, transparent 70%)",
          top: -250,
          right: -150,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          padding: "0 24px 64px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <header style={{ padding: "48px 0 36px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
              marginBottom: 28,
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: css.cyanDim,
                border: `1px solid rgba(0,200,240,0.2)`,
                borderRadius: 100,
                padding: "6px 16px",
                fontSize: 12,
                fontWeight: 600,
                color: css.cyan,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: css.cyan,
                  display: "inline-block",
                  animation: "pulse 2s infinite",
                }}
              />
              {t.badge}
            </div>
            <LangSwitch lang={lang} setLang={setLang} />
          </div>

          <h1
            style={{
              fontSize: "clamp(30px, 5vw, 50px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: css.text,
              marginBottom: 16,
            }}
          >
            {t.h1a}
            <br />
            <span style={{ color: css.cyan }}>{t.h1b}</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: css.text2,
              maxWidth: 560,
              fontWeight: 300,
              lineHeight: 1.7,
            }}
          >
            {t.subtitle}
          </p>
        </header>

        {/* ── STEP 1: Work schedule ── */}
        <Card>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <StepDot n={1} />
            <span
              style={{ fontSize: 17, fontWeight: 700, color: css.text }}
            >
              {t.step1}
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 16,
            }}
          >
            {/* Hours/day */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 12,
                  color: css.text2,
                  fontWeight: 500,
                  marginBottom: 6,
                }}
              >
                {t.hoursDay}
              </label>
              <input
                type="number"
                value={hoursDay}
                min={1}
                max={24}
                onChange={(e) => setHoursDay(Number(e.target.value))}
                style={inputStyle}
              />
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 8 }}>
                {HOURS_QUICK.map((h) => (
                  <button
                    key={h}
                    onClick={() => setHoursDay(h)}
                    style={hoursBadgeStyle(hoursDay === h)}
                  >
                    {h}h
                  </button>
                ))}
              </div>
            </div>

            {/* Days/week */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 12,
                  color: css.text2,
                  fontWeight: 500,
                  marginBottom: 6,
                }}
              >
                {t.daysWeek}
              </label>
              <input
                type="number"
                value={daysWeek}
                min={1}
                max={7}
                onChange={(e) => setDaysWeek(Number(e.target.value))}
                style={inputStyle}
              />
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginTop: 8 }}>
                {DAYS_QUICK.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDaysWeek(d)}
                    style={hoursBadgeStyle(daysWeek === d)}
                  >
                    {d}d
                  </button>
                ))}
              </div>
            </div>

            {/* Hourly rate */}
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: 12,
                  color: css.text2,
                  fontWeight: 500,
                  marginBottom: 6,
                }}
              >
                {t.hourlyRate}
              </label>
              <input
                type="number"
                value={hourlyRate}
                min={10}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                style={inputStyle}
              />
              <p style={{ fontSize: 11, color: css.text3, marginTop: 7 }}>
                {t.hourlyHint}
              </p>
            </div>
          </div>
        </Card>

        {/* ── STEP 2: Tasks ── */}
        <Card>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
          >
            <StepDot n={2} />
            <span style={{ fontSize: 17, fontWeight: 700, color: css.text }}>
              {t.step2}
            </span>
          </div>
          <p style={{ fontSize: 13, color: css.text2, marginBottom: 14 }}>
            {t.step2hint}
          </p>

          {/* Quick task chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 16 }}>
            {t.quickTasks.map((qt) => {
              const used = usedQuickTasks.has(qt.task);
              return (
                <button
                  key={qt.task}
                  onClick={() => !used && addQuickTask(qt)}
                  style={quickBadgeStyle(used)}
                  onMouseEnter={(e) => {
                    if (!used) {
                      (e.currentTarget as HTMLElement).style.background =
                        css.cyanDim;
                      (e.currentTarget as HTMLElement).style.borderColor =
                        css.cyanMid;
                      (e.currentTarget as HTMLElement).style.color = css.cyan;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!used) {
                      (e.currentTarget as HTMLElement).style.background =
                        css.surface2;
                      (e.currentTarget as HTMLElement).style.borderColor =
                        css.border2;
                      (e.currentTarget as HTMLElement).style.color = css.text2;
                    }
                  }}
                >
                  {qt.label}
                </button>
              );
            })}
          </div>

          {/* Task rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {tasks.map((task, idx) => (
              <div
                key={task.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: idx === 0 ? "1fr 180px" : "1fr 180px 40px",
                  gap: 10,
                  alignItems: "end",
                  background: css.surface2,
                  border: `1px solid ${css.border}`,
                  borderRadius: 10,
                  padding: "14px 16px",
                }}
              >
                <div>
                  <div
                    style={{ fontSize: 11, color: css.text3, marginBottom: 5 }}
                  >
                    {lang === "en" ? "Task description" : "Περιγραφή task"}
                    {idx === 0 && <span style={{ color: css.cyan, marginLeft: 3 }}>*</span>}
                  </div>
                  <input
                    type="text"
                    placeholder={t.taskNamePlaceholder}
                    value={task.name}
                    onChange={(e) => updateTask(task.id, "name", e.target.value)}
                    style={{ ...inputStyle, background: css.surface, fontSize: 13 }}
                  />
                </div>
                <div>
                  <div
                    style={{ fontSize: 11, color: css.text3, marginBottom: 5 }}
                  >
                    {t.taskMinsLabel}
                    {idx === 0 && <span style={{ color: css.cyan, marginLeft: 3 }}>*</span>}
                  </div>
                  <input
                    type="number"
                    placeholder="5"
                    value={task.minsPerHour}
                    min={1}
                    max={60}
                    onChange={(e) =>
                      updateTask(task.id, "minsPerHour", e.target.value)
                    }
                    style={{ ...inputStyle, background: css.surface, fontSize: 13 }}
                  />
                </div>
                {idx !== 0 && (
                  <button
                    onClick={() => removeTask(task.id)}
                    style={{
                      width: 38,
                      height: 38,
                      background: "transparent",
                      border: `1px solid rgba(255,80,80,0.2)`,
                      borderRadius: 8,
                      color: "#FF7070",
                      cursor: "pointer",
                      fontSize: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: 1,
                      flexShrink: 0,
                      alignSelf: "flex-end",
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => addTask()}
            style={{
              width: "100%",
              padding: 12,
              marginTop: 10,
              background: "transparent",
              border: `1px dashed ${css.border2}`,
              borderRadius: 8,
              color: css.text2,
              fontFamily: "inherit",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              letterSpacing: "0.03em",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = css.cyanDim;
              (e.currentTarget as HTMLElement).style.borderColor = css.cyanMid;
              (e.currentTarget as HTMLElement).style.color = css.cyan;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.borderColor = css.border2;
              (e.currentTarget as HTMLElement).style.color = css.text2;
            }}
          >
            {t.addTask}
          </button>
        </Card>

        {/* ── Calculate Button ── */}
        {!results && (
          <button
            onClick={async () => {
              const validTasks = tasks.filter(
                (t) => t.name.trim() && parseFloat(t.minsPerHour) > 0
              );
              if (validTasks.length === 0) return;
              try {
                const res = await fetch(WEBHOOK, { method: "GET" });
                const data = await res.json();
                if (data.status === false) {
                  alert(lang === "gr" ? "Έχεις ήδη υποβάλει αυτή τη φόρμα" : "You have already submitted this form");
                  return;
                }
              } catch {
                // If fetch fails or non-JSON, proceed anyway
              }
              calculateROI();
            }}
            disabled={tasks.filter((t) => t.name.trim() && parseFloat(t.minsPerHour) > 0).length === 0}
            style={{
              width: "100%",
              padding: 16,
              background:
                tasks.filter((t) => t.name.trim() && parseFloat(t.minsPerHour) > 0).length === 0
                  ? css.surface2
                  : css.cyan,
              border: "none",
              borderRadius: 10,
              fontFamily: "inherit",
              fontSize: 16,
              fontWeight: 700,
              color:
                tasks.filter((t) => t.name.trim() && parseFloat(t.minsPerHour) > 0).length === 0
                  ? css.text3
                  : "#0A0E1A",
              cursor:
                tasks.filter((t) => t.name.trim() && parseFloat(t.minsPerHour) > 0).length === 0
                  ? "not-allowed"
                  : "pointer",
              letterSpacing: "0.02em",
              marginBottom: 24,
              transition: "all 0.18s",
            }}
          >
            {t.calcBtn}
          </button>
        )}

        {/* ── RESULTS ── */}
        {results && (
          <Card accent>
            <p style={{ fontSize: 12, color: css.text2, marginBottom: 18, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {t.resultTitle}
            </p>

            {/* Stat cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
                gap: 14,
                marginBottom: 24,
              }}
            >
              {[
                {
                  label: t.resWorkHours,
                  value: `${fmt(results.totalHoursYear)}h`,
                  sub: `${hoursDay}${t.hoursPerDay}${daysWeek}${t.daysPerWeek}`,
                  highlight: false,
                },
                {
                  label: t.resHoursLost,
                  value: `${fmt(results.totalHoursLost)}h`,
                  sub: t.resTasks.replace("{n}", String(results.taskBreakdown.length)),
                  highlight: false,
                },
                {
                  label: t.resROI,
                  value: `€${fmt(results.totalROI)}`,
                  sub: "",
                  highlight: true,
                },
              ].map((card) => (
                <div
                  key={card.label}
                  style={{
                    background: card.highlight ? css.cyanDim : css.surface2,
                    border: `1px solid ${card.highlight ? "rgba(0,200,240,0.25)" : css.border}`,
                    borderRadius: 10,
                    padding: "16px 20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: css.text3,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: 8,
                    }}
                  >
                    {card.label}
                  </div>
                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: 800,
                      color: card.highlight ? css.cyan : css.text,
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {card.value}
                  </div>
                  {card.sub && (
                    <div style={{ fontSize: 11, color: css.text3, marginTop: 6 }}>
                      {card.sub}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Task breakdown */}
            <div
              style={{
                fontSize: 11,
                color: css.text3,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 10,
              }}
            >
              {t.perTask}
            </div>
            {results.taskBreakdown.map((tb, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  borderBottom:
                    i < results.taskBreakdown.length - 1
                      ? `1px solid ${css.border}`
                      : "none",
                }}
              >
                <div>
                  <div style={{ fontSize: 13, color: css.text2 }}>{tb.name}</div>
                  <div style={{ fontSize: 11, color: css.text3, marginTop: 2 }}>
                    {tb.mins} {t.minsPerHour} {fmt(tb.hoursYear)} {t.hoursYear}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: css.cyan,
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  €{fmt(tb.roiEur)}
                </div>
              </div>
            ))}

            {/* Investment cost banner */}
            <div
              style={{
                background: "linear-gradient(135deg, rgba(0,200,240,0.07), rgba(0,160,200,0.04))",
                border: `1px solid rgba(0,200,240,0.18)`,
                borderRadius: 10,
                padding: "18px 22px",
                marginTop: 20,
                display: "flex",
                alignItems: "center",
                gap: 18,
                flexWrap: "wrap",
              }}
            >
              <div style={{ fontSize: 26, flexShrink: 0 }}>💡</div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: css.cyan,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 4,
                  }}
                >
                  {t.pricingLabel}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: css.text,
                    letterSpacing: "-0.02em",
                  }}
                >
                  €{fmt(results.investmentCost)}
                </div>
                <div style={{ fontSize: 12, color: css.text2, marginTop: 4 }}>
                  {t.pricingDesc}
                </div>
              </div>
            </div>

            {/* CTA — Book a Call */}
            <div
              style={{
                marginTop: 24,
                padding: "22px 24px",
                background: css.surface2,
                border: `1px solid ${css.border2}`,
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700, color: css.text, marginBottom: 6 }}>
                {t.ctaTitle}
              </div>
              <p style={{ fontSize: 13, color: css.text2, marginBottom: 16, lineHeight: 1.6 }}>
                {t.ctaDesc}
              </p>
              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "16px 48px",
                  background: css.cyan,
                  borderRadius: 10,
                  color: "#0A0E1A",
                  fontWeight: 700,
                  fontSize: 18,
                  textDecoration: "none",
                  letterSpacing: "0.02em",
                  transition: "background 0.18s",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "#33D6F5";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = css.cyan;
                }}
              >
                {t.bookCall}
              </a>
              <p style={{ fontSize: 12, color: css.text3, marginTop: 14, lineHeight: 1.6 }}>
                {t.afterBooking}{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  style={{ color: css.cyan, textDecoration: "none" }}
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </Card>
        )}


      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        select option { background: #0F1520; color: #F0F4FF; }
      `}</style>
    </div>
  );
}
