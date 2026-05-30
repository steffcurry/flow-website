import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function AIReceptionistVsHiring() {
  useEffect(() => {
    document.title = 'AI Receptionist vs Hiring a Secretary: What Greek Businesses Pay | Coreflow Automation';
    return () => { document.title = 'Coreflow Automation | AI Automation Agency'; };
  }, []);
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <FadeIn>
        <Link to="/insights" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm mb-10 transition-colors">
          <ArrowLeft size={15} /> Back to Insights
        </Link>

        <div className="mb-4">
          <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">ROI Analysis</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 leading-tight">
          AI Receptionist vs Hiring a Secretary: What Greek Business Owners Actually Pay
        </h1>

        <div className="flex items-center gap-4 text-slate-500 text-sm mb-10 border-b border-slate-800 pb-8">
          <span>May 29, 2026</span>
          <span>·</span>
          <span>6 min read</span>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed">

          <p className="text-lg text-slate-200 leading-relaxed">
            The question Greek business owners ask is usually framed as a people decision: "Should I hire a receptionist?" The right frame is a capacity decision: "What is the cheapest way to ensure no inbound call goes unanswered and no lead falls through?"
          </p>

          <p>
            Once you reframe it that way, the comparison becomes straightforward. Let us run the numbers.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">The Real Cost of a Part-Time Receptionist in Greece</h2>

          <p>
            The gross minimum wage in Greece as of 2025 is €950/month. A trained receptionist for a medical or professional services firm earns €1,100–€1,400 gross. Add employer social insurance contributions (roughly 22% on top of gross) and you land at a real monthly cost of:
          </p>

          <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 my-8">
            <div className="space-y-3">
              {[
                ['Gross salary (mid-range)', '€1,250/month'],
                ['Employer insurance (22%)', '€275/month'],
                ['Annual leave provision (1/12)', '€127/month'],
                ['Holiday bonus provision (1/24 × 2)', '€104/month'],
                ['Onboarding and training (amortized)', '€80/month'],
              ].map(([item, cost]) => (
                <div key={item} className="flex justify-between items-center border-b border-slate-800/50 pb-3 last:border-0 last:pb-0">
                  <span className="text-slate-400 text-sm">{item}</span>
                  <span className="text-slate-300 font-medium text-sm">{cost}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2">
                <span className="text-slate-200 font-semibold">Total real monthly cost</span>
                <span className="text-cyan-400 font-bold text-lg">€1,836/month</span>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-4">This is for a single full-time employee. A part-time receptionist (4 hours/day) costs roughly €960–€1,100 real monthly cost.</p>
          </div>

          <p>
            And that is before you account for what a human receptionist cannot do: answer calls at 9pm on a Sunday, handle three simultaneous inquiries, or never have a bad day.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">What You Get With Each Option</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 font-medium pb-3 pr-4">Capability</th>
                  <th className="text-center text-slate-400 font-medium pb-3 px-4">Human Receptionist</th>
                  <th className="text-center text-cyan-400 font-medium pb-3 pl-4">AI Receptionist</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Availability', '8 hrs/day, 5 days/week', '24/7, 365 days/year'],
                  ['Simultaneous calls', '1 call at a time', 'Unlimited parallel calls'],
                  ['Language', 'Greek (+ limited English)', 'Greek, English, more'],
                  ['Consistency', 'Varies by mood/training', 'Identical every time'],
                  ['Appointment booking', '✓', '✓'],
                  ['FAQ handling', '✓', '✓'],
                  ['Call transfer to human', '✓', '✓'],
                  ['Complex situations', '✓ Best at this', 'Transfers to human'],
                  ['Monthly cost', '€960–€1,836', '€150–€300'],
                ].map(([cap, human, ai]) => (
                  <tr key={cap} className="border-b border-slate-800/50">
                    <td className="py-3 pr-4 text-slate-300">{cap}</td>
                    <td className="py-3 px-4 text-center text-slate-400">{human}</td>
                    <td className="py-3 pl-4 text-center text-cyan-300">{ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">The Case for Combining Both</h2>

          <p>
            The comparison misses something: for most businesses at scale, this is not either/or. It is sequencing.
          </p>

          <p>
            Start with an AI receptionist before you have the volume to justify a human hire. It handles 70–80% of inbound interactions automatically. When volume grows to the point where you genuinely need a human in the chair for relationship management and complex cases — hire. But when you do, the AI still handles overflow, after-hours, and simultaneous call volume that one human physically cannot.
          </p>

          <p>
            The businesses that get this right have one human receptionist supported by AI, rather than two human receptionists doing what one human and AI could do better for less.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">ROI by Business Type</h2>

          <p>
            The ROI of an AI receptionist is driven almost entirely by one number: what is the average value of a client you acquire through inbound calls? Here is how it plays out across common Greek business types:
          </p>

          <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 my-8">
            <div className="space-y-4">
              {[
                {
                  type: 'Aesthetics Clinic',
                  avgValue: '€200/visit, €800 LTV',
                  missedCalls: '5/day',
                  recaptured: '1.5/day',
                  monthly: '€7,200',
                },
                {
                  type: 'Dental Practice',
                  avgValue: '€150/visit, €600 LTV',
                  missedCalls: '4/day',
                  recaptured: '1.2/day',
                  monthly: '€4,320',
                },
                {
                  type: 'Law Firm',
                  avgValue: '€1,500/case',
                  missedCalls: '3/day',
                  recaptured: '0.9/day',
                  monthly: '€24,300',
                },
                {
                  type: 'Med Spa',
                  avgValue: '€300/session, €1,200 LTV',
                  missedCalls: '7/day',
                  recaptured: '2.1/day',
                  monthly: '€15,120',
                },
              ].map(({ type, avgValue, missedCalls, recaptured, monthly }) => (
                <div key={type} className="border border-slate-700/50 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-slate-200">{type}</span>
                    <span className="text-cyan-400 font-bold">{monthly}/mo recovered</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs text-slate-400">
                    <span>Avg value: {avgValue}</span>
                    <span>Missed: {missedCalls}</span>
                    <span>Recaptured: {recaptured}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-4">Assumes 30% conversion rate on recaptured calls. Conservative estimate based on average conversion for inbound calls reaching a live response.</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">The Decision Framework</h2>

          <p>
            Before hiring a receptionist, ask three questions:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 ml-2">
            <li><strong className="text-slate-200">How many inbound calls do you miss per day?</strong> If fewer than 2, an AI receptionist is overkill. If more than 3, it pays for itself within 30 days.</li>
            <li><strong className="text-slate-200">What is your after-hours call volume?</strong> If any meaningful portion of inquiries comes after 6pm or on weekends, a human receptionist cannot solve this. An AI can.</li>
            <li><strong className="text-slate-200">Are your missed calls due to capacity or complexity?</strong> If calls go unanswered because lines are busy or staff are with clients, automation wins. If they go unanswered because the inquiry requires judgment, expertise, or negotiation — that is where the human stays essential.</li>
          </ol>

          <p>
            Most Greek service businesses hit all three criteria. Most are still running on a single human receptionist and a voicemail box.
          </p>

          <p>
            The competitive window for early adoption is closing. The businesses that deploy this in 2025 and 2026 capture the market share of those that wait until it is industry standard.
          </p>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 mt-12 text-center">
            <h3 className="text-xl font-bold text-slate-100 mb-3">Calculate Your Business's ROI</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              Enter your business details and see exactly how many leads you are losing and what recapturing them is worth.
            </p>
            <Link
              to="/roi"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-sm"
            >
              Use the ROI Calculator
            </Link>
          </div>
        </div>
      </FadeIn>
    </article>
  );
}
