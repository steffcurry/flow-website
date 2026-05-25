import { useState } from "react";
import { useParams } from "react-router-dom";

const templates: Record<string, string> = {
  "1LzRxKET8P2SBTXgr74cCJKI_dyz024sz": "Generate Scroll-Stopping VSLs in with Google Veo 3.0",
  "18FoMbKpOgejcqKsJ5D6VfQlZTZ-mLN8Q": "Generate addictive ASMR Veo 3 reels",
  "1GD1bh4-FLr0ISM8VBKZGR8K4GG4YumGk": "Generate 24s engaging conspiracy doc reels",
  "134YU6X5MxIMj965w7llQYAillwNTt-wd":  "FB Ad Spy: AI-Powered Competitor Ad Intelligence & Auto-Video Remixer",
  "14TPrE4JSyLr1R_rna3ymyo6g9WsFuQR3":  "Generate AI B-roll clips from videos with Veo 3",
  "1OKm0yFA78aSQ08zS18MIA6VNoGrsgUNE":  "Generate Mind-Bending 'What If' Videos with Google Veo 3",
  "1FeOL0SBWDyRDHxhO7fT4w-_JraUDkpEx": "Generate metaphor-based product video ads Veo 3",
  "1g24F2FMFBMmo3fu9RnUnVCUA10WqEYn6":  "Create cinematic quote videos with Veo 3",
  "1js-yzfB7ncbxxUae3d_IEq-CPdJhF8wx":  "Generate high quality video commercials with Veo 3",
  "1VfRIMVxrdh1TwVQ3qMc5Vj1p9jhq8ogP":  "Generate LinkedIn leads using Google Sheets and Serper API",
  "1XHhHa_gy8JtmK4HCdLuCTXU6ccbS6SiM": "Fetch daily YouTube videos from top AI automators and log them to Google Sheets",
};

const WEBHOOK_URL =
  "https://n8n.srv1363008.hstgr.cloud/webhook/538058c6-624a-4fe4-bc60-02a41b982327";

type Status = "idle" | "loading" | "success" | "error";

export default function TemplatePage() {
  const { id } = useParams<{ id: string }>();
  const templateId = id ?? "";
  const templateName = templates[templateId];

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [invoiceUrl, setInvoiceUrl] = useState<string | null>(null);

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  async function generateInvoice() {
    if (!isValidEmail(email)) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setStatusMessage("Creating your personalized PayPal invoice...");
    setInvoiceUrl(null);

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: templateId, email }),
      });

      if (!res.ok) throw new Error("Server error");

      const data = await res.json();
      if (!data.invoice_url) throw new Error("No invoice URL returned");

      setInvoiceUrl(data.invoice_url);
      setStatus("success");
      setStatusMessage("Invoice generated successfully!");
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  }

  if (!templateName) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={styles.notFound}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1e2d45" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="12" x2="12" y2="16" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
            <p style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>
              Template not found
            </p>
            <p style={{ color: "#4a6080", fontSize: 14 }}>
              This template doesn&apos;t exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.badge}>⚡ n8n Template</div>

        <h1 style={styles.title}>{templateName}</h1>

        <div style={styles.divider} />

        <label style={styles.sectionLabel}>
          <MailIcon />
          Enter your billing email
        </label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && generateInvoice()}
          placeholder="you@example.com"
          style={styles.input}
          onFocus={(e) => (e.currentTarget.style.borderColor = "#00c8ff")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "#1e2d45")}
          disabled={status === "loading" || status === "success"}
        />

        <p style={styles.hint}>
          <InfoIcon />
          Required to generate your PayPal invoice and to receive the template file after payment.
        </p>

        <button
          onClick={generateInvoice}
          disabled={status === "loading" || status === "success"}
          style={{
            ...styles.btnGenerate,
            ...(status === "loading" || status === "success" ? styles.btnDisabled : {}),
          }}
        >
          {status === "loading" ? (
            <><Spinner /> Generating invoice...</>
          ) : status === "success" ? (
            <><CheckIcon color="#3a5070" /> Invoice Generated</>
          ) : (
            <><ReceiptIcon /> Generate My Invoice</>
          )}
        </button>

        {status !== "idle" && (
          <div
            style={{
              ...styles.statusBox,
              ...(status === "loading" ? styles.statusLoading : {}),
              ...(status === "success" ? styles.statusSuccess : {}),
              ...(status === "error" ? styles.statusError : {}),
            }}
          >
            {status === "loading" && <Spinner />}
            {status === "success" && <CheckIcon color="#22d3a0" />}
            {status === "error" && <AlertIcon />}
            {statusMessage}
          </div>
        )}

        {invoiceUrl && (
          <>
            <div style={styles.divider} />
            <label style={styles.sectionLabel}>
              <CheckIcon color="#00c8ff" /> Invoice ready — complete your purchase
            </label>

            <a
              href={invoiceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.btnBuy}
            >
              <PayPalIcon /> Pay with PayPal
            </a>

            <div style={styles.deliveryNote}>
              <p style={{ marginBottom: 4 }}>
                <strong style={{ color: "#00c8ff" }}>✉ Template delivery</strong>
              </p>
              After payment is confirmed, the{" "}
              <strong style={{ color: "#00c8ff" }}>.json</strong> workflow file
              will be sent automatically to your email from{" "}
              <strong style={{ color: "#00c8ff" }}>contact@coreflowautomation.net</strong>.
              <span style={styles.spam}>
                ⚠ Don&apos;t see it? Check your spam or promotions folder.
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#0b0f1a",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    padding: "3rem 1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: "100%",
    maxWidth: 520,
    background: "#111827",
    border: "1px solid #1e2d45",
    borderRadius: 16,
    padding: "2.5rem 2rem",
  },
  badge: {
    display: "inline-block",
    background: "rgba(0,200,255,0.12)",
    color: "#00c8ff",
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "4px 12px",
    borderRadius: 20,
    border: "1px solid rgba(0,200,255,0.25)",
    marginBottom: "1rem",
  },
  title: {
    fontSize: 22,
    fontWeight: 700,
    color: "#fff",
    lineHeight: 1.3,
    marginBottom: "0.5rem",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #1e2d45",
    margin: "1.75rem 0",
  },
  sectionLabel: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 13,
    fontWeight: 600,
    color: "#8aa0be",
    marginBottom: "0.75rem",
  },
  input: {
    width: "100%",
    background: "#0d1520",
    border: "1px solid #1e2d45",
    borderRadius: 10,
    color: "#fff",
    fontSize: 15,
    padding: "13px 16px",
    outline: "none",
    transition: "border-color 0.2s",
    boxSizing: "border-box",
  },
  hint: {
    display: "flex",
    alignItems: "flex-start",
    gap: 5,
    fontSize: 12,
    color: "#4a6080",
    marginTop: 8,
    lineHeight: 1.5,
  },
  btnGenerate: {
    width: "100%",
    marginTop: "1.25rem",
    padding: "14px",
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg, #0094cc, #00c8ff)",
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  btnDisabled: {
    background: "#1a2840",
    color: "#3a5070",
    cursor: "not-allowed",
  },
  statusBox: {
    background: "#0d1520",
    border: "1px solid #1e2d45",
    borderRadius: 10,
    padding: "12px 16px",
    fontSize: 13,
    color: "#8aa0be",
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginTop: "1rem",
  },
  statusLoading: { color: "#00c8ff", borderColor: "rgba(0,200,255,0.25)" },
  statusSuccess: { color: "#22d3a0", borderColor: "rgba(34,211,160,0.25)" },
  statusError: { color: "#f87171", borderColor: "rgba(248,113,113,0.25)" },
  btnBuy: {
    width: "100%",
    padding: "14px",
    borderRadius: 10,
    border: "none",
    background: "linear-gradient(135deg, #0094cc, #00c8ff)",
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    textDecoration: "none",
    boxSizing: "border-box",
  },
  deliveryNote: {
    marginTop: "1.25rem",
    background: "#0d1520",
    border: "1px solid #1e2d45",
    borderRadius: 10,
    padding: "14px 16px",
    fontSize: 13,
    color: "#8aa0be",
    lineHeight: 1.7,
  },
  spam: {
    color: "#4a6080",
    fontSize: 12,
    marginTop: 6,
    display: "block",
  },
  notFound: {
    textAlign: "center",
    padding: "2rem",
    color: "#4a6080",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
};

function Spinner() {
  return (
    <span style={{
      width: 16, height: 16,
      border: "2px solid rgba(0,200,255,0.3)",
      borderTopColor: "#00c8ff",
      borderRadius: "50%",
      display: "inline-block",
      flexShrink: 0,
      animation: "spin 0.7s linear infinite",
    }} />
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00c8ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4a6080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 2 3 6 3 20 21 20 21 6 18 2 6 2" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="12" y1="2" x2="12" y2="6" />
    </svg>
  );
}

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function PayPalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 11C7 11 6 17 11 17H15C17 17 19 15 19 13C19 11 17 9 15 9H9C7 9 6 7 7 5C8 3 10 3 12 3H16" />
    </svg>
  );
}
