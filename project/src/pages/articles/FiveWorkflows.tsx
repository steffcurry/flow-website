import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FadeIn from '../../components/FadeIn';

export default function FiveWorkflows() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <FadeIn>
        <Link to="/insights" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm mb-10 transition-colors">
          <ArrowLeft size={15} /> Back to Insights
        </Link>

        <div className="mb-4">
          <span className="text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">Automation Strategy</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4 leading-tight">
          The 5 Workflows Every Local Business Should Automate Before Hiring
        </h1>

        <div className="flex items-center gap-4 text-slate-500 text-sm mb-10 border-b border-slate-800 pb-8">
          <span>May 29, 2026</span>
          <span>·</span>
          <span>7 min read</span>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed">

          <p className="text-lg text-slate-200 leading-relaxed">
            The most expensive mistake Greek business owners make is hiring a person to do something a system should do. Not because people are expensive — they are — but because the person ends up doing the job inconsistently, and the underlying workflow problem never gets solved.
          </p>

          <p>
            Before you post that job listing for an administrative assistant, ask this: which specific tasks would they handle? Now ask: how many of those tasks could be automated in a week for less than one month's salary?
          </p>

          <p>
            Here are the five highest-leverage workflows to automate first.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">1. Inbound Call Handling and Appointment Booking</h2>

          <p>
            This is the most immediate win for service businesses. A voice AI handles every call that comes in while your staff is with a client or after hours. It books appointments directly into your calendar, answers FAQ, and transfers genuinely complex situations to a human.
          </p>

          <p>
            The math: a dental clinic in Athens gets roughly 25–40 inbound calls per day. Maybe 8 of those happen during peak hours when the front desk is occupied. Automating just those 8 calls, at a 30% booking rate, yields 2–3 extra appointments per day. At €120 average ticket, that is €7,200–€10,800 per month of recovered revenue from a system that costs less than €200/month.
          </p>

          <div className="bg-slate-900/60 border border-slate-700/50 rounded-xl p-5 my-6">
            <p className="text-slate-400 text-sm font-medium mb-2">What to automate</p>
            <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
              <li>Appointment booking (new and existing patients/clients)</li>
              <li>Availability queries ("Do you have anything on Friday afternoon?")</li>
              <li>Address, hours, parking, services FAQ</li>
              <li>After-hours intake with callback scheduling</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">2. Lead Follow-Up Sequences</h2>

          <p>
            Most businesses collect leads — through contact forms, WhatsApp inquiries, social DMs — and then follow up inconsistently. Someone got back to them in 4 hours on a good day. On a bad day, 3 days passed and the lead went cold.
          </p>

          <p>
            An automated follow-up sequence sends an immediate acknowledgment within 60 seconds of the inquiry, follows up at 24 and 72 hours if there is no response, and closes the loop at day 7. The messages are personalized to the inquiry type and channel. The human only steps in when there is a genuine response to handle.
          </p>

          <p>
            For a real estate agency handling 15–20 inquiries per week, automating follow-up alone typically doubles the contact rate within 30 days.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">3. Appointment Reminders and Cancellation Recovery</h2>

          <p>
            No-shows are a silent drain. For a medical clinic, a no-show appointment is not just a missed €150 — it is also a blocked slot that could have gone to a waiting patient. The average no-show rate for Greek healthcare practices is 18–22%.
          </p>

          <p>
            Automated reminders sent at 48 hours, 24 hours, and 2 hours before an appointment drop the no-show rate to under 8% in most deployments. The system also handles cancellations automatically: when a cancellation comes in, it immediately texts the next person on the waitlist and fills the slot within minutes.
          </p>

          <p>
            On a 20-patient day, recovering two no-shows per week generates an additional €15,600 per year for a typical clinic.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">4. Review Collection</h2>

          <p>
            Google reviews drive local search rankings more than almost any other factor for Greek SMEs. Yet most businesses ask for reviews inconsistently, awkwardly, and only in person — which means the only people who leave reviews unprompted are the ones who had a problem.
          </p>

          <p>
            An automated review request goes out via SMS or WhatsApp 2 hours after a completed appointment. It links directly to the Google review page. No login required, no friction. Businesses that implement this see their review velocity increase 4–8x within 60 days.
          </p>

          <p>
            For competitive niches in Athens where the top result has 200 reviews and you have 40, this is one of the fastest ways to close the gap without spending on ads.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">5. New Lead Qualification</h2>

          <p>
            Not all leads are equal, and having a salesperson or senior staff member spend 20 minutes on a call with someone who cannot afford the service or is in the wrong geography is an expensive way to find that out.
          </p>

          <p>
            An automated qualification workflow — triggered by a form submission or initial message — asks 3–5 screening questions, scores the response, and routes the lead accordingly: to a booking link if qualified, to a nurture sequence if not ready, or to a disqualification message if clearly out of scope.
          </p>

          <p>
            For a law firm or medical clinic where consultation time is billed at €150–€300/hour, pre-qualifying 15 leads per week saves 4–6 hours of senior staff time. That is €600–€1,800 per week in recovered billable capacity.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mt-10 mb-4">The Sequencing Question</h2>

          <p>
            Start with inbound call handling. It has the fastest payback and the clearest ROI. Then add appointment reminders — the setup time is minimal and the no-show reduction is immediate. Follow-up sequences and review collection come next. Lead qualification is last because it requires understanding your conversion data first.
          </p>

          <p>
            The businesses that implement all five before hiring their next administrative role typically find they do not need to hire at all. And the ones who hire first spend the next two years training someone to do a job a system would have done better anyway.
          </p>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 mt-12 text-center">
            <h3 className="text-xl font-bold text-slate-100 mb-3">Get a Free Automation Audit</h3>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              We will analyse your current workflows and identify the top 3 automation opportunities with estimated ROI for your specific business type.
            </p>
            <Link
              to="/audit"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all text-sm"
            >
              Request Your Free Audit
            </Link>
          </div>
        </div>
      </FadeIn>
    </article>
  );
}
