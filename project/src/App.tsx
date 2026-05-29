import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import HowItWorks from './pages/HowItWorks';
import Examples from './pages/Examples';
import Team from './pages/Team';
import GrowthFramework from './pages/GrowthFramework';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Pay from './pages/Pay';
import Form from './pages/Form';
import Roi from './pages/ROICalculator';
import TemplatePage from './pages/TemplatePage';
import Demo from './pages/Demo';
import Pricing from './pages/Pricing';
import Industry from './pages/Industry';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
