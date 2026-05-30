import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const Solutions          = lazy(() => import('./pages/Solutions'));
const SolutionDetail     = lazy(() => import('./pages/SolutionDetail'));
const HowItWorks         = lazy(() => import('./pages/HowItWorks'));
const Examples           = lazy(() => import('./pages/Examples'));
const Team               = lazy(() => import('./pages/Team'));
const GrowthFramework    = lazy(() => import('./pages/GrowthFramework'));
const Contact            = lazy(() => import('./pages/Contact'));
const Privacy            = lazy(() => import('./pages/Privacy'));
const Terms              = lazy(() => import('./pages/Terms'));
const Pay                = lazy(() => import('./pages/Pay'));
const Form               = lazy(() => import('./pages/Form'));
const Roi                = lazy(() => import('./pages/ROICalculator'));
const TemplatePage       = lazy(() => import('./pages/TemplatePage'));
const Demo               = lazy(() => import('./pages/Demo'));
const Pricing            = lazy(() => import('./pages/Pricing'));
const Industry           = lazy(() => import('./pages/Industry'));
const Receptionist       = lazy(() => import('./pages/Receptionist'));
const Audit              = lazy(() => import('./pages/Audit'));
const Integrations       = lazy(() => import('./pages/Integrations'));
const Insights           = lazy(() => import('./pages/Insights'));
const MissedCallsCost    = lazy(() => import('./pages/articles/MissedCallsCost'));
const FiveWorkflows      = lazy(() => import('./pages/articles/FiveWorkflows'));
const AIReceptionistVsHiring = lazy(() => import('./pages/articles/AIReceptionistVsHiring'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:type" element={<SolutionDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/team" element={<Team />} />
          <Route path="/growth-framework" element={<GrowthFramework />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/form" element={<Form />} />
          <Route path="/roi" element={<Roi />} />
          <Route path="/templates/:id" element={<TemplatePage />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/industries/:niche" element={<Industry />} />
          <Route path="/receptionist" element={<Receptionist />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/missed-calls-cost-greek-sme" element={<MissedCallsCost />} />
          <Route path="/insights/5-workflows-automate-local-business" element={<FiveWorkflows />} />
          <Route path="/insights/ai-receptionist-vs-hiring-cost" element={<AIReceptionistVsHiring />} />
        </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
