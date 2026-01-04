import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SolutionsPage from './pages/SolutionsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ExampleAutomationsPage from './pages/ExampleAutomationsPage';
import TeamPage from './pages/TeamPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'solutions':
        return <SolutionsPage />;
      case 'how-it-works':
        return <HowItWorksPage />;
      case 'examples':
        return <ExampleAutomationsPage />;
      case 'team':
        return <TeamPage />;
      case 'pricing':
        return <PricingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0E1116] text-[#E6E8EB]">
      <Navigation currentPage={currentPage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
