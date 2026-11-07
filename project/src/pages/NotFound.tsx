import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../contexts/LanguageContext';

const TEXT = {
  en: {
    title: 'Page not found',
    body: "This page doesn't exist or has moved.",
    home: 'Back to home',
  },
  gr: {
    title: 'Η σελίδα δεν βρέθηκε',
    body: 'Αυτή η σελίδα δεν υπάρχει ή έχει μετακινηθεί.',
    home: 'Επιστροφή στην αρχική',
  },
};

/** Shown for unknown URLs and for unknown ids on dynamic pages (templates, industries, solutions). */
export default function NotFound() {
  const { lang } = useLang();
  const t = TEXT[lang];

  useEffect(() => {
    const previous = document.title;
    document.title = `${t.title} | Coreflow Automation`;
    // Keep search engines from indexing unknown URLs (the server still answers 200 for every path).
    const robots = document.createElement('meta');
    robots.name = 'robots';
    robots.content = 'noindex';
    document.head.appendChild(robots);
    return () => {
      document.title = previous;
      robots.remove();
    };
  }, [t.title]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-center">
      <div>
        <p className="text-cyan-400 font-semibold mb-3">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">{t.title}</h1>
        <p className="text-slate-400 mb-8">{t.body}</p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-opacity"
        >
          {t.home}
        </Link>
      </div>
    </div>
  );
}
