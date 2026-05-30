import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function MissedCallsCost() {
  useEffect(() => {
    document.title = 'Why 80% of Greek SME Calls Go to Voicemail | Coreflow Automation';
    return () => { document.title = 'Coreflow Automation | AI Automation Agency'; };
  }, []);
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <FadeIn>
        <Link to="/insights" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm mb-10 transition-colors">
          <ArrowLeft size={15} /> Back to Insights
        </Link>

        <div className="mb-4">
          <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">Voice AI</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 leading-tight">
          Why 80% of Greek SME Calls Go to Voicemail — and What It Costs You
        </h1>

        <div className="flex items-center gap-4 text-slate-500 text-sm mb-10 border-b border-slate-800 pb-8">
          <span>May 29, 2026</span>
          <span>·</span>
          <span>5 min read</span>
        </div>

        <div className="prose prose-invert prose-slate max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-lg text-slate-200 leading-relaxed">
            Walk into any dental clinic, law office, or aesthetics studio in Athens or Thessaloniki at 2pm on a Tuesday. The front desk is buried. Someone is scheduling a patient, another is on hold, two more calls are ringing. One of those rings ends in voicemail. The caller hangs up and dials the next business in their search results.
          </p>

          <p>
            This is not a staffing problem. It is a math problem. And the math is brutal.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">The Numbers No One Tracks</h2>

          <p>
            Most Greek small business owners do not track how many inbound calls they miss. They do not have a missed-call report on their desk every Monday. They have a vague sense that "sometimes we're too busy," and they move on.
          </p>

          <p>
            Here is what the data shows for typical service businesses in Greece:
          </p>

          <div className="bg-slate-900/60 border border-slate-700 rounded-xl p-6 my-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 font-medium pb-3">Business Type</th>
                  <th className="text-right text-slate-400 font-medium pb-3">Avg Missed Calls/Day</th>
                  <th className="text-right text-slate-400 font-medium pb-3">Avg Ticket (€)</th>
                  <th className="text-right text-slate-400 font-medium pb-3">Monthly Revenue Lost</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                {[
                  ['Dental Clinic', '4–6', '€120', '€1,440–€2,160'],
                  ['Aesthetics Studio', '5–8', '€80', '€1,200–€1,920'],
                  ['Law Firm', '3–5', '€300', '€2,700–€4,500'],
                  ['Med Spa', '6–10', '€150', '€2,700–€4,500'],
                  ['Real Estate Office', '4–7', '€500', '€6,000–€10,500'],
                ].map(([type, calls, ticket, loss]) => (
                  <tr key={type} className="border-b border-slate-800/50">
                    <td className="py-3 text-slate-300">{type}</td>
                    <td className="py-3 text-right text-slate-300">{calls}</td>
                    <td className="py-3 text-right text-slate-300">{ticket}</td>
                    <td className="py-3 text-right text-cyan-400 font-semibold">{loss}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-slate-500 text-xs mt-4">Based on average conversion rates of 30–40% for inbound calls reaching a human vs. voicemail.</p>
          </div>

          <p>
            The dental clinic losing 5 calls per day does not lose 5 patients. It loses 5 opportunities — each of which converts at roughly 35% when a human answers, and at roughly 5% when the call goes to voicemail. That gap is the business you are leaving for your competitor down the street.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">Why Voicemail Does Not Work for Service Businesses</h2>

          <p>
            There is a specific psychology at play when someone calls a service business. They have a problem. A tooth hurts. They need a lawyer. They want to book a laser treatment. They are motivated to act <em>right now</em>.
          </p>

          <p>
            When they hit voicemail, two things happen. First, the urgency evaporates. By the time you call back (often hours later), they have already called someone else or talked themselves out of the appointment. Second, they form an impression: this business is hard to reach. That impression sticks.
          </p>

          <p>
            For a Greek business where reputation and word of mouth carry enormous weight, "I couldn't even get through to them" is a death sentence at the dinner table.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">The After-Hours Problem Is Bigger Than You Think</h2>

          <p>
            Greek consumers do not research and call businesses only during office hours. A significant portion of healthcare and aesthetics searches happen between 8pm and midnight — after dinner, while browsing on a phone. Real estate inquiries peak on weekend afternoons.
          </p>

          <p>
            If your phone goes to voicemail at 9:30pm on a Thursday when someone decides they want to book a consultation, they do not leave a message. They open Instagram, see a sponsored post from a competitor, and book online.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">What a Voice AI Receptionist Actually Does</h2>

          <p>
            A voice AI receptionist answers every call, in Greek, in under two seconds, 24 hours a day. It does not replace your front desk — it handles the calls your front desk cannot get to.
          </p>

          <p>For a typical deployment, the AI handles:</p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
            <li>Appointment booking and availability questions</li>
            <li>FAQ — hours, location, services, pricing</li>
            <li>Pre-qualification ("Is this an emergency? Are you an existing patient?")</li>
            <li>After-hours intake with a callback promise</li>
            <li>Call transfer to a human for complex situations</li>
          </ul>

          <p>
            What it does not do: replace the relationship your staff builds face to face. It is the first gate, not the last.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">The ROI Is Not Close</h2>

          <p>
            If a voice AI receptionist captures one additional new patient per week for a dental clinic — a conservative assumption — at an average lifetime value of €800, that is €41,600 per year in recovered revenue. The system costs a fraction of a part-time salary.
          </p>

          <p>
            The businesses that deploy this first in their local market do not just capture more leads. They change the competitive dynamic. The competitor who still goes to voicemail at 2pm on Tuesday is now visibly inferior in an attribute that patients care about deeply: being available when you need them.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">What to Do Next</h2>

          <p>
            The simplest test: count how many missed calls you had last week. Check your phone system's missed call log, or look at how many voicemails you received. Multiply that by your average ticket value and a 30% conversion rate.
          </p>

          <p>
            If the number is over €1,000 per month, you have a problem worth solving. If it is over €3,000, it is urgent.
          </p>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 mt-12 text-center">
            <h3 className="text-xl font-bold text-slate-100 mb-3">Hear It in Action — Free</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              Call our live AI receptionist demo configured for your industry. Takes 2 minutes. No signup required.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-sm"
            >
              Try the Demo
            </Link>
          </div>
        </div>
      </FadeIn>
    </article>
  );
}
