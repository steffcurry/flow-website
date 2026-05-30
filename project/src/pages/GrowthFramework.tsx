import { Link } from 'react-router-dom';
import { TrendingUp, Target, Cog, CheckCircle, ArrowRight } from 'lucide-react';
import { useLang } from '../contexts/LanguageContext';

const EN = {
  title: 'The Growth Framework',
  body: [
    'AI automation only creates leverage when it is treated as operational infrastructure.',
    'Most implementations fail because they focus on tools instead of systems — adding automation on top of workflows that were never designed to scale.',
    'The Growth Framework exists to solve that.',
    'This is a business automation strategy used to design scalable AI automation systems that integrate with existing operations and compound in value over time.',
  ],
  approach: 'It is a structured approach for:',
  approachItems: ['Identifying where automation actually matters','Defining clear system boundaries','Designing AI to operate inside controlled workflows','Deploying systems that remain stable under growth'],
  models: 'Engagement Models',
  roi: { title: '1. ROI Track', sub: 'For businesses that want measurable operational impact.', features: ['We audit workflows','Identify high-leverage bottlenecks','Design automation systems with clear performance objectives','Deploy systems intended to reduce cost, time, or operational load'], focus: 'This track is focused on business outcomes, not feature delivery.', best: 'Best suited for: businesses experiencing operational bottlenecks, scaling challenges, or manual workflow dependencies that limit growth.' },
  custom: { title: '2. Custom System Track', sub: 'For businesses with specific operational requirements.', features: ['You already know what you want automated','We validate feasibility and system boundaries','Design and deploy a custom automation system','Integrate it cleanly into your existing operations'], focus: 'This track prioritizes precision and control.', best: 'Best suited for: businesses with defined automation requirements, specific compliance needs, or complex integration constraints.' },
  diffTitle: 'What Makes This Different',
  diffBody: 'We do not sell tools. We do not sell experiments. Instead, we provide:',
  diffItems: ['Clear system architecture','Defined automation logic','Predictable delivery','Working systems you can evaluate'],
  diffClose: 'You are not asked to trust claims. You are shown how the system works.',
  ctaTitle: 'Next Step',
  ctaBody: 'The entry point to the Growth Framework is an automation audit. You submit your workflows and needs. We evaluate structure, bottlenecks, and feasibility.',
  ctaBtn: 'Start with an Automation Assessment',
};

const GR = {
  title: 'Το Πλαίσιο Ανάπτυξης',
  body: [
    'Η AI αυτοματοποίηση δημιουργεί μόχλευση μόνο όταν αντιμετωπίζεται ως επιχειρησιακή υποδομή.',
    'Οι περισσότερες εφαρμογές αποτυγχάνουν επειδή εστιάζουν σε εργαλεία αντί για συστήματα — προσθέτοντας αυτοματοποίηση πάνω σε ροές εργασίας που δεν σχεδιάστηκαν για κλιμάκωση.',
    'Το Πλαίσιο Ανάπτυξης υπάρχει για να λύσει αυτό.',
    'Αυτή είναι μια στρατηγική επιχειρηματικής αυτοματοποίησης για τον σχεδιασμό επεκτάσιμων συστημάτων AI που ενσωματώνονται με υπάρχουσες λειτουργίες και αυξάνονται σε αξία με τον χρόνο.',
  ],
  approach: 'Είναι μια δομημένη προσέγγιση για:',
  approachItems: ['Εντοπισμό πού η αυτοματοποίηση έχει πραγματικά σημασία','Ορισμό σαφών ορίων συστήματος','Σχεδιασμό AI για λειτουργία σε ελεγχόμενες ροές εργασίας','Ανάπτυξη συστημάτων που παραμένουν σταθερά υπό ανάπτυξη'],
  models: 'Μοντέλα Συνεργασίας',
  roi: { title: '1. ROI Track', sub: 'Για επιχειρήσεις που θέλουν μετρήσιμο λειτουργικό αντίκτυπο.', features: ['Ελέγχουμε τις ροές εργασίας','Εντοπίζουμε σημεία συμφόρησης υψηλής μόχλευσης','Σχεδιάζουμε συστήματα αυτοματοποίησης με σαφείς στόχους απόδοσης','Αναπτύσσουμε συστήματα για μείωση κόστους, χρόνου ή λειτουργικού φόρτου'], focus: 'Αυτό το track εστιάζει σε επιχειρηματικά αποτελέσματα, όχι σε παράδοση χαρακτηριστικών.', best: 'Κατάλληλο για: επιχειρήσεις με λειτουργικά σημεία συμφόρησης, προκλήσεις κλιμάκωσης ή χειροκίνητες εξαρτήσεις ροών εργασίας.' },
  custom: { title: '2. Custom System Track', sub: 'Για επιχειρήσεις με συγκεκριμένες λειτουργικές απαιτήσεις.', features: ['Γνωρίζετε ήδη τι θέλετε να αυτοματοποιήσετε','Επικυρώνουμε τη σκοπιμότητα και τα όρια συστήματος','Σχεδιάζουμε και αναπτύσσουμε εξατομικευμένο σύστημα αυτοματοποίησης','Ενσωματώνουμε τακτικά στις υπάρχουσες λειτουργίες σας'], focus: 'Αυτό το track δίνει προτεραιότητα στην ακρίβεια και τον έλεγχο.', best: 'Κατάλληλο για: επιχειρήσεις με καθορισμένες απαιτήσεις αυτοματοποίησης, ανάγκες συμμόρφωσης ή σύνθετους περιορισμούς ενσωμάτωσης.' },
  diffTitle: 'Τι το Κάνει Διαφορετικό',
  diffBody: 'Δεν πουλάμε εργαλεία. Δεν πουλάμε πειράματα. Αντίθετα, παρέχουμε:',
  diffItems: ['Σαφής αρχιτεκτονική συστήματος','Καθορισμένη λογική αυτοματοποίησης','Προβλέψιμη παράδοση','Λειτουργικά συστήματα που μπορείτε να αξιολογήσετε'],
  diffClose: 'Δεν ζητάμε να εμπιστευτείτε ισχυρισμούς. Σας δείχνουμε πώς λειτουργεί το σύστημα.',
  ctaTitle: 'Επόμενο Βήμα',
  ctaBody: 'Το σημείο εισόδου στο Πλαίσιο Ανάπτυξης είναι ένας έλεγχος αυτοματοποίησης. Υποβάλλετε τις ροές εργασίας και τις ανάγκες σας. Αξιολογούμε δομή, σημεία συμφόρησης και σκοπιμότητα.',
  ctaBtn: 'Ξεκινήστε με Έλεγχο Αυτοματοποίησης',
};

export default function GrowthFramework() {
  const { lang } = useLang();
  const t = lang === 'gr' ? GR : EN;

  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-100 drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">{t.title}</h1>
          </div>

          <div className="space-y-8 mb-16">
            <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              {t.body.map((para, i) => (
                <p key={i} className={`text-lg text-slate-300 leading-relaxed ${i < t.body.length - 1 ? 'mb-6' : 'text-sm text-slate-400'}`}>{para}</p>
              ))}
            </div>
            <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-12">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">{t.approach}</p>
              <ul className="space-y-3">
                {t.approachItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-12 text-slate-100 text-center">{t.models}</h2>

          <div className="space-y-8 mb-16">
            {[
              { data: t.roi, Icon: TrendingUp, border: 'border-cyan-500/20', iconBg: 'from-cyan-500/20 to-blue-500/20', iconBorder: 'border-cyan-500/30', iconColor: 'text-cyan-400' },
              { data: t.custom, Icon: Cog, border: 'border-blue-500/20', iconBg: 'from-blue-500/20 to-violet-500/20', iconBorder: 'border-blue-500/30', iconColor: 'text-blue-400' },
            ].map(({ data, Icon, border, iconBg, iconBorder, iconColor }) => (
              <div key={data.title} className={`bg-slate-900/40 border ${border} rounded-2xl p-8 sm:p-12`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${iconBg} border ${iconBorder} flex items-center justify-center`}>
                    <Icon className={iconColor} size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100">{data.title}</h3>
                    <p className="text-cyan-400 font-medium mt-1">{data.sub}</p>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {data.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle className="text-cyan-400 flex-shrink-0 mt-0.5" size={20} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-400 mb-2 leading-relaxed">{data.focus}</p>
                <p className="text-sm text-slate-500 leading-relaxed">{data.best}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/40 border border-cyan-500/20 rounded-2xl p-8 sm:p-12 mb-16">
            <h2 className="text-2xl font-bold mb-4 text-slate-100 text-center">{t.diffTitle}</h2>
            <p className="text-lg text-slate-300 mb-8 text-center leading-relaxed">{t.diffBody}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {t.diffItems.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-slate-800/30 border border-cyan-500/20 rounded-xl p-4">
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={20} />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-slate-300 text-center leading-relaxed">{t.diffClose}</p>
          </div>

          <div className="bg-slate-900/40 border border-cyan-500/30 rounded-2xl p-8 sm:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <Target className="text-cyan-400" size={28} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-slate-100">{t.ctaTitle}</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">{t.ctaBody}</p>
            <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 shadow-lg shadow-cyan-500/20">
              {t.ctaBtn}<ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
