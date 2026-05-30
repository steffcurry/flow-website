import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

const TOOL_LISTS = [
  ['n8n', 'Make (Integromat)', 'Zapier', 'ActivePieces'],
  ['OpenAI (GPT-4o)', 'Anthropic (Claude)', 'Google Gemini', 'Mistral', 'Ollama (Private)'],
  ['Vapi', 'ElevenLabs', 'Deepgram', 'Azure Speech', 'Twilio Voice'],
  ['HubSpot', 'Pipedrive', 'Salesforce', 'Zoho CRM', 'Airtable'],
  ['Twilio SMS', 'WhatsApp Business API', 'Slack', 'Telegram', 'SendGrid', 'Mailchimp'],
  ['Google Sheets', 'Google Calendar', 'Google Drive', 'Gmail', 'Google Forms'],
  ['Calendly', 'Cal.com', 'Typeform', 'Jotform', 'TallyForms'],
  ['Supabase', 'PostgreSQL', 'MySQL', 'Qdrant', 'Notion', 'Airtable'],
  ['Stripe', 'PayPal', 'Viva Wallet', 'Revolut Business'],
  ['Shopify', 'WooCommerce', 'Wix', 'Skroutz (GR)'],
];

const COLORS = ['cyan','blue','purple','green','yellow','red','orange','slate','emerald','pink'];

const colorMap: Record<string, string> = {
  cyan: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-300',
  blue: 'border-blue-500/20 bg-blue-500/5 text-blue-300',
  purple: 'border-purple-500/20 bg-purple-500/5 text-purple-300',
  green: 'border-green-500/20 bg-green-500/5 text-green-300',
  yellow: 'border-yellow-500/20 bg-yellow-500/5 text-yellow-300',
  red: 'border-red-500/20 bg-red-500/5 text-red-300',
  orange: 'border-orange-500/20 bg-orange-500/5 text-orange-300',
  slate: 'border-slate-500/20 bg-slate-500/5 text-slate-300',
  emerald: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-300',
  pink: 'border-pink-500/20 bg-pink-500/5 text-pink-300',
};

export default function Integrations() {
  const { lang } = useLang();
  const t = pagesT[lang].integrations;

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">{t.badge}</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6">{t.title}</h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
            </div>
          </FadeIn>

          <div className="space-y-10">
            {t.categories.map(({ name }, i) => (
              <FadeIn key={name} delay={i * 60}>
                <div>
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">{name}</h2>
                  <div className="flex flex-wrap gap-3">
                    {TOOL_LISTS[i].map(tool => (
                      <span key={tool} className={`px-4 py-2 rounded-xl border text-sm font-medium ${colorMap[COLORS[i]]}`}>{tool}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="mt-20 bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-10 text-center">
              <h2 className="text-2xl font-bold text-slate-100 mb-3">{t.notFound}</h2>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">{t.notFoundBody}</p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity hover:opacity-90">
                {t.notFoundBtn} <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
