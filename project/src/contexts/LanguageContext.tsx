import { createContext, useContext, useState, ReactNode } from 'react';

export type Lang = 'en' | 'gr';

const LanguageContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: 'en',
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try { return (localStorage.getItem('lang') as Lang) || 'en'; } catch { return 'en'; }
  });

  const toggle = () => {
    const next: Lang = lang === 'en' ? 'gr' : 'en';
    try { localStorage.setItem('lang', next); } catch {}
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
