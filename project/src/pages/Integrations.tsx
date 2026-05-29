import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const categories = [
  {
    name: 'Automation Platforms',
    color: 'cyan',
    tools: ['n8n', 'Make (Integromat)', 'Zapier', 'ActivePieces'],
  },
  {
    name: 'AI & Language Models',
    color: 'blue',
    tools: ['OpenAI (GPT-4o)', 'Anthropic (Claude)', 'Google Gemini', 'Mistral', 'Ollama (Private)'],
  },
  {
    name: 'Voice AI',
    color: 'purple',
    tools: ['Vapi', 'ElevenLabs', 'Deepgram', 'Azure Speech', 'Twilio Voice'],
  },
  {
    name: 'CRM & Sales',
    color: 'green',
    tools: ['HubSpot', 'Pipedrive', 'Salesforce', 'Zoho CRM', 'Airtable'],
  },
  {
    name: 'Communications',
    color: 'yellow',
    tools: ['Twilio SMS', 'WhatsApp Business API', 'Slack', 'Telegram', 'SendGrid', 'Mailchimp'],
  },
  {
    name: 'Google Workspace',
    color: 'red',
    tools: ['Google Sheets', 'Google Calendar', 'Google Drive', 'Gmail', 'Google Forms'],
  },
  {
    name: 'Scheduling & Forms',
    color: 'orange',
    tools: ['Calendly', 'Cal.com', 'Typeform', 'Jotform', 'TallyForms'],
  },
  {
    name: 'Database & Storage',
    color: 'slate',
    tools: ['Supabase', 'PostgreSQL', 'MySQL', 'Qdrant', 'Notion', 'Airtable'],
  },
  {
    name: 'Payments',
    color: 'emerald',
    tools: ['Stripe', 'PayPal', 'Viva Wallet', 'Revolut Business'],
  },
  {
    name: 'E-commerce',
    color: 'pink',
    tools: ['Shopify', 'WooCommerce', 'Wix', 'Skroutz (GR)'],
  },
];

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
  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">No Rip-and-Replace</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6">Tools & Integrations</h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                We build automation that connects to your existing stack. If you use it, we can almost certainly integrate with it.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-10">
            {categories.map(({ name, color, tools }, i) => (
              <FadeIn key={name} delay={i * 60}>
                <div>
                  <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">{name}</h2>
                  <div className="flex flex-wrap gap-3">
                    {tools.map(tool => (
                      <span
                        key={tool}
                        className={`px-4 py-2 rounded-xl border text-sm font-medium ${colorMap[color]}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={200}>
            <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 sm:p-10 text-center">
              <h2 className="text-2xl font-bold text-slate-100 mb-3">Don't see your tool?</h2>
              <p className="text-slate-400 mb-6 max-w-md mx-auto">If it has an API, a webhook, or a file export — we can connect to it. Describe your stack and we'll confirm.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-cyan-500/40 transition-all hover:scale-105"
              >
                Ask About Your Stack <ArrowRight size={18} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
