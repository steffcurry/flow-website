import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { useLang } from '../contexts/LanguageContext';
import { pagesT } from '../i18n/pages';

const articles = [
  {
    tag: 'Voice AI',
    title: 'Why 80% of Greek SME Calls Go to Voicemail — and What It Costs You',
    excerpt: 'Most local service businesses lose 3–7 inbound calls per day to missed pickups. At an average ticket of €200, that is €2,000–€4,000 in monthly revenue left on the table.',
    readTime: '5 min read',
    date: 'May 29, 2026',
    slug: 'missed-calls-cost-greek-sme',
  },
  {
    tag: 'Automation Strategy',
    title: 'The 5 Workflows Every Local Business Should Automate Before Hiring',
    excerpt: 'Before you hire a fourth employee to handle volume, ask whether the volume is created by automation gaps. These five workflows eliminate the most common time sinks.',
    readTime: '7 min read',
    date: 'May 29, 2026',
    slug: '5-workflows-automate-local-business',
  },
  {
    tag: 'ROI Analysis',
    title: 'AI Receptionist vs Hiring a Secretary: What Greek Business Owners Actually Pay',
    excerpt: 'A full-time receptionist in Greece costs €1,836/month in real terms. An AI receptionist costs €150–€300. Here is the breakdown by business type — and when hiring still makes sense.',
    readTime: '6 min read',
    date: 'May 29, 2026',
    slug: 'ai-receptionist-vs-hiring-cost',
  },
  {
    tag: 'Lead Qualification',
    title: 'How to Stop Your Best Salespeople From Talking to the Wrong Leads',
    excerpt: 'The cost of unqualified lead calls is not just time — it is morale. AI qualification systems do not replace salespeople. They make sure salespeople only talk to real prospects.',
    readTime: '6 min read',
    date: 'Coming soon',
    slug: null,
  },
];

export default function Insights() {
  const { lang } = useLang();
  const t = pagesT[lang].insights;

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">{t.badge}</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-6">{t.title}</h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">{t.subtitle}</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {articles.map(({ tag, title, excerpt, readTime, date, slug }, i) => (
              <FadeIn key={title} delay={i * 80}>
                <div className="bg-slate-900/40 border border-slate-700/50 rounded-2xl p-7 hover:border-cyan-500/30 transition-colors duration-200 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">{tag}</span>
                    <span className="text-slate-600 text-xs flex items-center gap-1"><Clock size={11} /> {readTime}</span>
                  </div>
                  <h2 className="text-lg font-semibold text-slate-100 mb-3 leading-snug flex-1">{title}</h2>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 text-xs">{date}</span>
                    {slug ? (
                      <Link to={`/insights/${slug}`} className="text-cyan-400 text-sm hover:text-cyan-300 flex items-center gap-1 transition-colors">
                        {t.readMore} <ArrowRight size={13} />
                      </Link>
                    ) : (
                      <span className="text-slate-600 text-xs italic">{t.soon}</span>
                    )}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-3">{t.newsletterTitle}</h2>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">{t.newsletterSub}</p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); window.location.href = '/contact'; }}>
                <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 text-sm" required />
                <button type="submit" className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl transition-opacity hover:opacity-90 text-sm whitespace-nowrap">
                  {t.newsletterBtn}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
