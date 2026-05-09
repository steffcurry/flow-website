import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
type Lang = 'el' | 'en';
type Profession = 'physio' | 'dentist';

interface FieldDef {
  type: 'text' | 'email' | 'number' | 'textarea' | 'checkbox' | 'radio';
  name: string;
  label: string;
  ph?: string;
  sub?: string;
  required?: boolean;
  options?: string[];
  withOther?: boolean;
}

interface SectionDef {
  title: string;
  fields: FieldDef[];
}

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  el: {
    prof_label: 'Επιλέξτε την ειδικότητά σας:',
    physio: 'Φυσικοθεραπευτής',
    dentist: 'Οδοντίατρος',
    header_title_pre: 'Ερωτηματολόγιο ',
    header_title_span: 'Διαγνωστικής Ανάλυσης',
    header_sub: 'AI Receptionist — Δωρεάν Diagnostic Report & Δοκιμαστική Εγκατάσταση',
    intro_title: 'Σκοπός του Ερωτηματολογίου',
    intro_p1: 'Σκεφτείτε το όχι απλά ως ερωτήσεις, αλλά ως το «διαγνωστικό» εργαλείο που θα μας επιτρέψει να στήσουμε το σύστημά σας με απόλυτη ακρίβεια. Ο σκοπός μας είναι, με βάση τις απαντήσεις σας, να σας παρουσιάσουμε ένα πλάνο αυτοματισμού που θα σας δείχνει ξεκάθαρα το ROI που μπορείτε να περιμένετε.',
    intro_p2: 'Το report μας περιλαμβάνει: Ανάλυση των σημερινών σας διαδικασιών, εντοπισμό των σημείων που χάνετε ασθενείς ή χρόνο, και συγκεκριμένες προτάσεις για το τι μπορεί να αυτοματοποιηθεί — μαζί με εκτίμηση της απόδοσης επένδυσης.',
    intro_p3: 'Εκτός από το δωρεάν diagnostic report, προσφέρουμε και δοκιμαστική εγκατάσταση AI receptionist. Η εγκατάσταση αυτή δεν είναι υποχρεωτική — το report μπορείτε να το λάβετε κανονικά από μόνο του.',
    intro_est: 'Εκτιμήσεις είναι απολύτως αποδεκτές. Συμπληρώστε όσο καλύτερα μπορείτε.',
    other_label: 'Άλλο / Επιπλέον σχόλιο:',
    other_ph: 'Προσθέστε κάτι που δεν καλύπτουν οι παραπάνω επιλογές...',
    submit_btn: 'Υποβολή Ερωτηματολογίου',
    submit_note: 'Μόλις υποβάλετε, θα επικοινωνήσουμε μαζί σας το συντομότερο.',
    practice_physio: 'Φυσικοθεραπευτηρίου',
    practice_dentist: 'Οδοντιατρείου',
    services_sub_physio: 'π.χ. αποκατάσταση, μυοσκελετικές παθήσεις, αθλητικές κακώσεις, ηλεκτροθεραπεία, manual therapy',
    services_sub_dentist: 'π.χ. καθαρισμός, εμφυτεύματα, ορθοδοντικά, λεύκανση, αισθητική οδοντιατρική',
    therapists_physio: 'Υπάρχουν πολλοί φυσικοθεραπευτές / ημερολόγια;',
    therapists_dentist: 'Υπάρχουν πολλοί οδοντίατροι / ημερολόγια;',
    expand_physio: 'Θέλετε να επεκτείνετε το φυσικοθεραπευτήριο;',
    expand_dentist: 'Θέλετε να επεκτείνετε το οδοντιατρείο;',
    simultaneous_physio: 'Μπορούν να εξυπηρετούνται ταυτόχρονα ασθενείς από διαφορετικούς φυσικοθεραπευτές;',
    simultaneous_dentist: 'Μπορούν να εξυπηρετούνται ταυτόχρονα ασθενείς από διαφορετικούς οδοντιάτρους;',
    practice_name_physio: 'Όνομα Φυσικοθεραπευτηρίου',
    practice_name_dentist: 'Όνομα Οδοντιατρείου',
    tools_sub_physio: 'Google, λογισμικό διαχείρισης κλπ',
    tools_sub_dentist: 'Google, οδοντιατρικό λογισμικό κλπ',
    turnstile_required: 'Παρακαλώ ολοκληρώστε την επαλήθευση ασφαλείας.',
    submitting: 'Αποστολή...',
    sent: '✓ Εστάλη!',
    success_msg: 'Το ερωτηματολόγιο υποβλήθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.',
    error_msg: 'Σφάλμα κατά την αποστολή. Παρακαλώ δοκιμάστε ξανά.',
  },
  en: {
    prof_label: 'Select your specialty:',
    physio: 'Physiotherapist',
    dentist: 'Dentist',
    header_title_pre: 'Questionnaire — ',
    header_title_span: 'Diagnostic Analysis',
    header_sub: 'AI Receptionist — Free Diagnostic Report & Trial Installation',
    intro_title: 'Purpose of the Questionnaire',
    intro_p1: 'Think of this not just as questions, but as the diagnostic tool that will allow us to set up your system with absolute precision. Our goal is to present you with an automation plan that clearly shows the ROI you can expect.',
    intro_p2: 'Our report includes: Analysis of your current processes, identification of where you\'re losing patients or time, and specific proposals for what can be automated — along with an ROI estimate.',
    intro_p3: 'In addition to the free diagnostic report, we also offer a trial AI receptionist installation. This installation is not mandatory — you can receive the report on its own.',
    intro_est: 'Estimates are perfectly acceptable. Fill in as best you can.',
    other_label: 'Other / Additional comment:',
    other_ph: 'Add anything not covered by the options above...',
    submit_btn: 'Submit Questionnaire',
    submit_note: 'Once you submit, we will get back to you as soon as possible.',
    practice_physio: 'Physiotherapy Practice',
    practice_dentist: 'Dental Practice',
    services_sub_physio: 'e.g. rehabilitation, musculoskeletal, sports injuries, electrotherapy, manual therapy',
    services_sub_dentist: 'e.g. cleaning, implants, orthodontics, whitening, aesthetic dentistry',
    therapists_physio: 'Are there multiple physiotherapists / calendars?',
    therapists_dentist: 'Are there multiple dentists / calendars?',
    expand_physio: 'Do you plan to expand the physiotherapy practice?',
    expand_dentist: 'Do you plan to expand the dental practice?',
    simultaneous_physio: 'Can patients be served simultaneously by different physiotherapists?',
    simultaneous_dentist: 'Can patients be served simultaneously by different dentists?',
    practice_name_physio: 'Physiotherapy Practice Name',
    practice_name_dentist: 'Dental Practice Name',
    tools_sub_physio: 'e.g. Google, practice management software etc.',
    tools_sub_dentist: 'e.g. Google, dental software etc.',
    turnstile_required: 'Please complete the security verification.',
    submitting: 'Submitting...',
    sent: '✓ Sent!',
    success_msg: 'Questionnaire submitted successfully! We will get back to you shortly.',
    error_msg: 'Submission failed. Please try again.',
  },
} as const;

// ─── Section builder ──────────────────────────────────────────────────────────
function getSections(lang: Lang, profession: Profession): SectionDef[] {
  const t = T[lang];
  const p = profession;
  const L = (el: string, en: string) => (lang === 'el' ? el : en);
  const pLabel = p === 'dentist' ? t.practice_dentist : t.practice_physio;

  return [
    {
      title: L(`1. Γενική Εικόνα ${pLabel}`, `1. General Overview — ${pLabel}`),
      fields: [
        { type: 'textarea', name: 'services', label: L('Ποιες υπηρεσίες προσφέρετε;', 'What services do you offer?'), sub: t[`services_sub_${p}`] },
        { type: 'textarea', name: 'patient_type', label: L('Ποιος είναι ο βασικός τύπος ασθενών σας;', 'What is your main patient type?'), ph: L('π.χ. αθλητές, ηλικιωμένοι, μετεγχειρητικοί', 'e.g. athletes, elderly, post-surgical') },
        { type: 'number', name: 'monthly_requests', label: L('Πόσα αιτήματα / τηλεφωνήματα λαμβάνετε κατά μέσο όρο τον μήνα;', 'How many inquiries / calls do you receive per month on average?'), ph: '200' },
        { type: 'number', name: 'monthly_patients', label: L('Πόσους ασθενείς εξυπηρετείτε τον μήνα;', 'How many patients do you serve per month?'), ph: '150' },
        { type: 'textarea', name: 'top_revenue', label: L('Ποιες υπηρεσίες σας φέρνουν τα περισσότερα έσοδα;', 'Which services bring the most revenue?') },
        { type: 'textarea', name: 'case_flow', label: L('Πώς εξελίσσεται συνήθως ένα περιστατικό (από πρώτη επικοινωνία μέχρι ολοκλήρωση);', 'How does a case typically progress (from first contact to completion)?') },
      ],
    },
    {
      title: L('2. Κανάλια Επικοινωνίας', '2. Communication Channels'),
      fields: [
        { type: 'checkbox', name: 'channels', label: L('Πώς επικοινωνούν οι ασθενείς μαζί σας;', 'How do patients contact you?'), options: [L('Τηλέφωνο', 'Phone'), 'SMS / Viber / WhatsApp', 'Social Media', 'Website', 'Email'], withOther: true },
        { type: 'text', name: 'biggest_channel', label: L('Ποιο κανάλι έχει τον μεγαλύτερο όγκο;', 'Which channel has the highest volume?'), ph: L('π.χ. Τηλέφωνο', 'e.g. Phone') },
        { type: 'textarea', name: 'comm_delays', label: L('Πού υπάρχουν καθυστερήσεις ή χαμένες επικοινωνίες;', 'Where do delays or missed communications occur?') },
        { type: 'radio', name: 'manual_response', label: L('Απαντάτε χειροκίνητα σε όλα;', 'Do you respond manually to everything?'), options: [L('Ναι', 'Yes'), L('Όχι', 'No'), L('Εν μέρει', 'Partially')], withOther: true },
      ],
    },
    {
      title: L('3. Τηλεφωνικό Σύστημα', '3. Phone System'),
      fields: [
        { type: 'textarea', name: 'phone_numbers', label: L('Τι αριθμούς χρησιμοποιείτε (σταθερό, κινητό);', 'What numbers do you use (landline, mobile)?') },
        { type: 'text', name: 'ai_numbers', label: L('Σε ποιους αριθμούς θέλετε να απαντά το AI;', 'Which numbers should the AI answer?') },
        { type: 'text', name: 'transfer_number', label: L('Σε ποιον αριθμό να γίνεται μεταφορά όταν χρειάζεται άνθρωπος;', 'Which number for human transfer?') },
        { type: 'text', name: 'op_hours', label: L('Ποιες είναι οι ώρες λειτουργίας σας;', 'What are your operating hours?'), ph: L('π.χ. 09:00-17:00 Δευτ-Παρ', 'e.g. 09:00-17:00 Mon-Fri') },
        { type: 'radio', name: 'ai_hours', label: L('Θέλετε λειτουργία:', 'AI operation mode:'), options: [L('Μόνο εντός ωραρίου', 'Within hours only'), '24/7'], withOther: false },
        { type: 'checkbox', name: 'call_types', label: L('Τι είδους κλήσεις δέχεστε κυρίως;', 'What types of calls do you mainly receive?'), options: [L('Κλείσιμο ραντεβού', 'Booking appointments'), L('Ερωτήσεις', 'General questions'), L('Ακυρώσεις / αλλαγές', 'Cancellations / changes'), L('Ερωτήσεις κόστους', 'Pricing inquiries'), L('Επείγοντα', 'Urgent cases')], withOther: true },
        { type: 'textarea', name: 'transfer_conditions', label: L('Πότε πρέπει να γίνεται μεταφορά σε άνθρωπο;', 'When should calls be transferred to a human?') },
      ],
    },
    {
      title: L('4. Προγραμματισμός Ραντεβού', '4. Appointment Scheduling'),
      fields: [
        { type: 'textarea', name: 'sched_process', label: L('Πώς κανονίζονται τα ραντεβού;', 'How are appointments scheduled?') },
        { type: 'text', name: 'calendar', label: L('Χρησιμοποιείτε κάποιο ημερολόγιο;', 'Do you use a calendar / software?'), ph: L('π.χ. Google Calendar, Doctoranytime', 'e.g. Google Calendar, Doctoranytime') },
        { type: 'radio', name: 'appt_flexible', label: L('Μπορούν να αλλάξουν / ακυρωθούν εύκολα;', 'Can appointments be easily changed / cancelled?'), options: [L('Ναι', 'Yes'), L('Όχι', 'No'), L('Με περιορισμούς', 'With restrictions')], withOther: true },
        { type: 'textarea', name: 'sched_rules', label: L('Υπάρχουν κανόνες (ωράρια, διαλείμματα, μέγιστος αριθμός ραντεβού);', 'Are there rules (hours, breaks, max appointments)?') },
        { type: 'textarea', name: 'multi_calendars', label: t[`therapists_${p}`] },
        { type: 'text', name: 'appt_duration', label: L('Πόση διάρκεια έχει ένα ραντεβού;', 'How long is an appointment?'), ph: L('π.χ. 45 λεπτά', 'e.g. 45 minutes') },
        { type: 'radio', name: 'appt_gaps', label: L('Θέλετε κενά μεταξύ ραντεβού;', 'Do you want gaps between appointments?'), options: [L('Ναι', 'Yes'), L('Όχι', 'No')], withOther: true },
        { type: 'textarea', name: 'appt_types', label: L('Τα είδη ραντεβού αντιστοιχούν στις υπηρεσίες σας;', 'Do appointment types correspond to your services?') },
      ],
    },
    {
      title: L('5. Διαχείριση Ασθενών', '5. Patient Management'),
      fields: [
        { type: 'checkbox', name: 'record_system', label: L('Πού καταγράφετε τα στοιχεία ασθενών;', 'Where do you record patient data?'), options: [L('Excel / Sheets', 'Excel / Sheets'), L('Ειδικό λογισμικό', 'Dedicated software'), L('Χαρτί', 'Paper'), L('Cloud (Drive κτλ.)', 'Cloud (Drive etc.)')], withOther: true },
        { type: 'textarea', name: 'patient_tracking', label: L('Πώς παρακολουθείτε την πορεία τους;', 'How do you track patient progress?') },
        { type: 'radio', name: 'followup_yn', label: L('Κάνετε follow-up;', 'Do you do follow-ups?'), options: [L('Ναι', 'Yes'), L('Όχι', 'No')], withOther: false },
        { type: 'textarea', name: 'followup_how', label: L('Πώς γίνεται το follow-up;', 'How do you do follow-ups?'), ph: L('π.χ. τηλέφωνο, SMS, αυτόματα', 'e.g. phone, SMS, automated') },
      ],
    },
    {
      title: L('6. Ψηφιακά Εργαλεία', '6. Digital Tools'),
      fields: [
        { type: 'checkbox', name: 'digital_tools', label: L('Τι εργαλεία χρησιμοποιείτε;', 'What tools do you use?'), sub: t[`tools_sub_${p}`], options: ['Google Workspace', 'Microsoft 365', 'CRM', L('Λογισμικό κλινικής', 'Practice software'), 'Booking platform'], withOther: true },
        { type: 'textarea', name: 'data_storage', label: L('Πού αποθηκεύονται τα δεδομένα;', 'Where is data stored?'), ph: L('π.χ. Cloud, τοπικά, λογισμικό', 'e.g. Cloud, local, software') },
        { type: 'radio', name: 'existing_automation', label: L('Χρησιμοποιείτε αυτοματισμούς;', 'Do you use any automations?'), options: [L('Ναι', 'Yes'), L('Όχι', 'No')], withOther: true },
      ],
    },
    {
      title: L('7. Διαδικασίες', '7. Processes'),
      fields: [
        { type: 'checkbox', name: 'manual_tasks', label: L('Ποιες διαδικασίες γίνονται χειροκίνητα;', 'Which processes are done manually?'), options: [L('Επιβεβαίωση ραντεβού', 'Appointment confirmation'), L('Υπενθυμίσεις', 'Reminders'), L('Follow-up μηνύματα', 'Follow-up messages'), L('Καταχώρηση δεδομένων', 'Data entry'), L('Τιμολόγηση', 'Invoicing')], withOther: true },
        { type: 'textarea', name: 'repetitive_tasks', label: L('Ποιες είναι επαναλαμβανόμενες (π.χ. τηλέφωνα, ραντεβού);', 'Which are repetitive (e.g. calls, appointments)?') },
        { type: 'textarea', name: 'after_new_request', label: L('Τι γίνεται μετά από νέο αίτημα;', 'What happens after a new inquiry?') },
        { type: 'textarea', name: 'after_booking', label: L('Τι γίνεται μετά από νέο ραντεβού;', 'What happens after a new appointment is booked?') },
        { type: 'textarea', name: 'after_cancel', label: L('Τι γίνεται μετά από ακύρωση;', 'What happens after a cancellation?') },
      ],
    },
    {
      title: L('8. Συχνές Ερωτήσεις', '8. Frequently Asked Questions'),
      fields: [
        { type: 'textarea', name: 'faq', label: L('Τι ρωτούν συχνότερα οι ασθενείς;', 'What do patients ask most often?') },
        { type: 'textarea', name: 'pre_booking_info', label: L('Τι πληροφορίες χρειάζονται πριν κλείσουν ραντεβού;', 'What info do they need before booking?'), ph: L('π.χ. κόστος, διαθεσιμότητα, διάρκεια', 'e.g. cost, availability, duration') },
        { type: 'textarea', name: 'sensitive_topics', label: L('Υπάρχουν ευαίσθητα θέματα που πρέπει να χειρίζεται μόνο άνθρωπος;', 'Are there sensitive topics that must be handled by a human only?') },
      ],
    },
    {
      title: L('9. Διαδικασία Κλεισίματος', '9. Booking Process'),
      fields: [
        { type: 'textarea', name: 'booking_process', label: L('Πώς κλείνεται ένα ραντεβού;', 'How is an appointment booked?'), ph: L('Περιγράψτε βήμα προς βήμα', 'Describe step by step') },
        { type: 'textarea', name: 'booking_info', label: L('Τι πληροφορίες χρειάζονται;', 'What information is needed?'), ph: L('π.χ. ονοματεπώνυμο, τηλέφωνο, αιτία επίσκεψης', 'e.g. full name, phone, reason for visit') },
        { type: 'textarea', name: 'billing', label: L('Πώς γίνεται η τιμολόγηση;', 'How does billing work?') },
      ],
    },
    {
      title: L('10. Περιορισμοί', '10. Restrictions'),
      fields: [
        { type: 'checkbox', name: 'ai_restrictions', label: L('Τι δεν πρέπει να κάνει το AI;', 'What should the AI never do?'), options: [L('Να δίνει ιατρικές συμβουλές', 'Give medical advice'), L('Να επιβεβαιώνει διαγνώσεις', 'Confirm diagnoses'), L('Να αλλάζει ραντεβού χωρίς έγκριση', 'Change appointments without approval'), L('Να αναφέρει τιμές χωρίς ενημέρωση', 'Quote prices without prior notice')], withOther: true },
        { type: 'textarea', name: 'human_intervention', label: L('Πότε απαιτείται ανθρώπινη παρέμβαση;', 'When is human intervention required?') },
        { type: 'textarea', name: 'medical_sensitivities', label: L('Υπάρχουν ευαίσθητες / ιατρικές περιπτώσεις που πρέπει να αποφεύγονται;', 'Are there sensitive / medical cases that should be avoided?') },
      ],
    },
    {
      title: L('11. Προβλήματα', '11. Problems'),
      fields: [
        { type: 'checkbox', name: 'patient_loss', label: L('Πού χάνονται ασθενείς;', 'Where do you lose patients?'), options: [L('Αναπάντητες κλήσεις', 'Missed calls'), L('Αργή απόκριση', 'Slow response'), L('Λάθη στα ραντεβού', 'Booking errors'), L('Διπλοκρατήσεις', 'Double bookings'), L('No-shows χωρίς υπενθύμιση', 'No-shows without reminders')], withOther: true },
        { type: 'textarea', name: 'delays', label: L('Πού υπάρχουν καθυστερήσεις;', 'Where do delays occur?') },
        { type: 'textarea', name: 'biggest_pain', label: L('Τι ενοχλεί περισσότερο;', 'What is the biggest pain point?') },
      ],
    },
    {
      title: L('12. Στόχοι', '12. Goals'),
      fields: [
        { type: 'textarea', name: 'success_criteria', label: L('Τι θα θεωρούσατε επιτυχία;', 'What would you consider success?') },
        { type: 'textarea', name: 'improvement_priorities', label: L('Τι θέλετε να βελτιωθεί περισσότερο;', 'What do you most want to improve?') },
      ],
    },
    {
      title: L('13. Πρόσβαση', '13. Access'),
      fields: [
        { type: 'checkbox', name: 'system_access', label: L('Έχετε πρόσβαση σε:', 'Do you have access to:'), options: [L('Τηλεφωνικό σύστημα', 'Phone system'), 'Calendar', L('Σύστημα ασθενών', 'Patient system')], withOther: true },
        { type: 'text', name: 'tech_responsible', label: L('Ποιος είναι υπεύθυνος τεχνικά;', 'Who is technically responsible?'), ph: L('Ονοματεπώνυμο και ρόλος', 'Full name and role') },
      ],
    },
    {
      title: L('14. Σενάρια', '14. Scenarios'),
      fields: [
        { type: 'textarea', name: 'scenario_booking', label: L('Σενάριο 1: Κλείσιμο ραντεβού — ποια είναι η ιδανική απάντηση;', 'Scenario 1: Booking an appointment — what is the ideal response?') },
        { type: 'textarea', name: 'scenario_pricing', label: L('Σενάριο 2: Ερώτηση κόστους — ποια είναι η ιδανική απάντηση;', 'Scenario 2: Pricing question — what is the ideal response?') },
        { type: 'textarea', name: 'scenario_change', label: L('Σενάριο 3: Αλλαγή ραντεβού — ποια είναι η ιδανική απάντηση;', 'Scenario 3: Changing an appointment — what is the ideal response?') },
      ],
    },
    {
      title: L('15. Ανάπτυξη', '15. Growth'),
      fields: [
        { type: 'radio', name: 'expansion', label: t[`expand_${p}`], options: [L('Ναι', 'Yes'), L('Όχι', 'No'), L('Ίσως μελλοντικά', 'Maybe in the future')], withOther: false },
        { type: 'textarea', name: 'staffing_needs', label: L('Θα χρειαστείτε προσωπικό;', 'Will you need additional staff?') },
        { type: 'textarea', name: 'other_automation', label: L('Σας ενδιαφέρει automation και αλλού;', 'Are you interested in automation elsewhere?') },
      ],
    },
    {
      title: L('16. Έσοδα & Απόδοση', '16. Revenue & Performance'),
      fields: [
        { type: 'text', name: 'conversion_rate', label: L('Τι ποσοστό αιτημάτων γίνεται ασθενείς;', 'What percentage of inquiries become patients?'), ph: L('π.χ. 60%', 'e.g. 60%') },
        { type: 'text', name: 'avg_case_value', label: L('Μέση αξία περιστατικού;', 'Average case value?'), ph: L('π.χ. 150€', 'e.g. €150') },
        { type: 'text', name: 'lost_requests', label: L('Πόσα αιτήματα χάνονται;', 'How many inquiries are lost?'), ph: L('π.χ. 20% ή 40 τον μήνα', 'e.g. 20% or 40/month') },
      ],
    },
    {
      title: L('17. Χρόνος & Κόστος', '17. Time & Cost'),
      fields: [
        { type: 'text', name: 'time_calls', label: L('Χρόνος σε κλήσεις / εβδομάδα;', 'Time spent on calls / week?'), ph: L('π.χ. 10 ώρες', 'e.g. 10 hours') },
        { type: 'text', name: 'time_messages', label: L('Χρόνος σε μηνύματα / εβδομάδα;', 'Time on messages / week?'), ph: L('π.χ. 5 ώρες', 'e.g. 5 hours') },
        { type: 'text', name: 'time_appointments', label: L('Χρόνος σε διαχείριση ραντεβού / εβδομάδα;', 'Time on appointment management / week?'), ph: L('π.χ. 8 ώρες', 'e.g. 8 hours') },
        { type: 'text', name: 'staff_involved', label: L('Πόσα άτομα ασχολούνται με αυτά;', 'How many people handle these tasks?'), ph: L('π.χ. 2 άτομα', 'e.g. 2 people') },
        { type: 'text', name: 'hourly_cost', label: L('Πόσο κοστίζει η ώρα;', 'What is the hourly cost?'), ph: L('π.χ. 15€/ώρα', 'e.g. €15/hour') },
      ],
    },
    {
      title: L('18. Χαμένες Ευκαιρίες', '18. Lost Opportunities'),
      fields: [
        { type: 'text', name: 'missed_calls', label: L('Πόσες κλήσεις χάνονται;', 'How many calls are missed?'), ph: L('π.χ. 30% ή 60 τον μήνα', 'e.g. 30% or 60/month') },
        { type: 'text', name: 'booking_conversion', label: L('Από 100 άτομα πόσοι κλείνουν ραντεβού;', 'Out of 100 people, how many book?'), ph: L('π.χ. 65', 'e.g. 65') },
        { type: 'text', name: 'lifetime_value', label: L('Πόσο αποφέρει ένας ασθενής συνολικά (lifetime value);', 'What is the total lifetime value of a patient?'), ph: L('π.χ. 500€', 'e.g. €500') },
      ],
    },
    {
      title: L('19. Απόκριση', '19. Response Time'),
      fields: [
        { type: 'text', name: 'response_time', label: L('Πόσο γρήγορα απαντάτε;', 'How quickly do you respond?'), ph: L('π.χ. εντός 2 ωρών', 'e.g. within 2 hours') },
        { type: 'radio', name: 'delay_loss', label: L('Χάνονται ασθενείς λόγω καθυστέρησης;', 'Do you lose patients due to slow response?'), options: [L('Ναι', 'Yes'), L('Όχι', 'No'), L('Μερικές φορές', 'Sometimes')], withOther: true },
      ],
    },
    {
      title: L('20. Λειτουργικά Θέματα', '20. Operational Issues'),
      fields: [
        { type: 'textarea', name: 'booking_errors', label: L('Υπάρχουν λάθη στα ραντεβού;', 'Are there errors in appointments?'), ph: L('π.χ. λάθος ώρες, παρεξηγήσεις', 'e.g. wrong times, misunderstandings') },
        { type: 'radio', name: 'double_bookings', label: L('Υπάρχουν διπλοκρατήσεις;', 'Do double bookings occur?'), options: [L('Ναι, συχνά', 'Yes, often'), L('Σπάνια', 'Rarely'), L('Όχι', 'No')], withOther: false },
      ],
    },
    {
      title: L('21. Ασθενείς', '21. Patients'),
      fields: [
        { type: 'text', name: 'retention', label: L('Επιστρέφουν ασθενείς; Σε τι ποσοστό;', 'Do patients return? What percentage?'), ph: L('π.χ. 70% επιστρέφουν', 'e.g. 70% return') },
        { type: 'text', name: 'cancellations', label: L('Ποσοστό ακυρώσεων;', 'Cancellation rate?'), ph: L('π.χ. 15%', 'e.g. 15%') },
      ],
    },
    {
      title: L('22. Κλιμάκωση', '22. Scaling'),
      fields: [
        { type: 'textarea', name: 'scaling_requests', label: L('Αν αυξηθούν τα αιτήματα, τι θα γίνει;', 'If inquiries increase, what would happen?') },
        { type: 'textarea', name: 'scaling_staff', label: L('Θα χρειαστείτε προσωπικό;', 'Would you need additional staff?') },
      ],
    },
    {
      title: L('23. Κόστη', '23. Costs'),
      fields: [
        { type: 'textarea', name: 'operating_costs', label: L('Ποια είναι τα βασικά λειτουργικά κόστη;', 'What are the main operating costs?'), ph: L('π.χ. ενοίκιο, προσωπικό, εξοπλισμός', 'e.g. rent, staff, equipment') },
      ],
    },
    {
      title: L('24. Αυτοματοποίηση', '24. Automation Potential'),
      fields: [
        { type: 'text', name: 'auto_calls', label: L('Τι ποσοστό κλήσεων μπορεί να αυτοματοποιηθεί;', 'What % of calls can be automated?'), ph: L('π.χ. 80%', 'e.g. 80%') },
        { type: 'text', name: 'auto_messages', label: L('Τι ποσοστό μηνυμάτων μπορεί να αυτοματοποιηθεί;', 'What % of messages can be automated?'), ph: L('π.χ. 90%', 'e.g. 90%') },
        { type: 'text', name: 'auto_appointments', label: L('Τι ποσοστό διαχείρισης ραντεβού μπορεί να αυτοματοποιηθεί;', 'What % of appointment management can be automated?'), ph: L('π.χ. 75%', 'e.g. 75%') },
      ],
    },
    {
      title: L('25. ROI Βάση', '25. ROI Basis'),
      fields: [
        { type: 'text', name: 'monthly_revenue', label: L('Μηνιαία έσοδα (εκτίμηση);', 'Monthly revenue (estimate)?'), ph: L('π.χ. 15.000€', 'e.g. €15,000') },
        { type: 'text', name: 'monthly_inquiries', label: L('Αιτήματα τον μήνα;', 'Monthly inquiries?'), ph: L('π.χ. 200', 'e.g. 200') },
        { type: 'text', name: 'roi_conversion', label: L('Conversion rate;', 'Conversion rate?'), ph: L('π.χ. 60%', 'e.g. 60%') },
        { type: 'text', name: 'avg_patient_value', label: L('Μέση αξία ασθενή;', 'Average patient value?'), ph: L('π.χ. 150€', 'e.g. €150') },
        { type: 'text', name: 'labor_cost', label: L('Κόστος εργασίας / μήνα;', 'Labor cost / month?'), ph: L('π.χ. 2.000€', 'e.g. €2,000') },
        { type: 'textarea', name: 'expected_improvement', label: L('Εκτιμώμενη βελτίωση;', 'Expected improvement?') },
      ],
    },
    {
      title: L('Επιπλέον Διευκρινίσεις', 'Additional Clarifications'),
      fields: [
        { type: 'textarea', name: 'roi_time_cost', label: L('Πόσο χρόνο αφιερώνεται σε επαναλαμβανόμενα tasks και ποιο είναι το ωριαίο κόστος;', 'How much time is spent on repetitive tasks and what is the hourly cost?') },
        { type: 'radio', name: 'virtual_number', label: L('Μπορεί να χρησιμοποιηθεί ελληνικός virtual αριθμός (~5€/μήνα) για αποφυγή επιπλέον χρεώσεων;', 'Can a Greek virtual number (~€5/month) be used to avoid extra charges?'), options: [L('Ναι', 'Yes'), L('Όχι', 'No'), L('Δεν είμαι σίγουρος/η', 'Not sure')], withOther: false },
        { type: 'textarea', name: 'calendar_access', label: L('Μπορείτε να δώσετε πρόσβαση σε calendar / σύστημα διαχείρισης;', 'Can you provide access to your calendar / management system?') },
        { type: 'radio', name: 'simultaneous', label: t[`simultaneous_${p}`], options: [L('Ναι', 'Yes'), L('Όχι', 'No')], withOther: false },
      ],
    },
    {
      title: L('Στοιχεία Επικοινωνίας', 'Contact Details'),
      fields: [
        { type: 'text', name: 'contact_name', label: L('Ονοματεπώνυμο', 'Full Name'), ph: L('Το όνομά σας', 'Your name'), required: true },
        { type: 'email', name: 'contact_email', label: 'Email', ph: 'email@example.com', required: true },
        { type: 'text', name: 'contact_phone', label: L('Τηλέφωνο', 'Phone'), ph: L('210XXXXXXX', 'e.g. +30 210XXXXXXX'), required: true },
        { type: 'text', name: 'practice_name', label: t[`practice_name_${p}`], ph: L('π.χ. Physio Athens', 'e.g. Physio Athens'), required: true },
        { type: 'textarea', name: 'additional', label: L('Επιπλέον σχόλια (προαιρετικό)', 'Additional comments (optional)'), ph: L('Οτιδήποτε άλλο θέλετε να μας γνωρίσετε...', "Anything else you'd like us to know...") },
      ],
    },
  ];
}

// ─── Declare Turnstile on window ──────────────────────────────────────────────
declare global {
  interface Window {
    turnstile?: {
      reset: (widgetId?: string) => void;
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string;
    };
  }
}

// ─── Field component ──────────────────────────────────────────────────────────
function FormField({
  field,
  value,
  onChange,
  otherValue,
  onOtherChange,
  otherLabel,
  otherPh,
}: {
  field: FieldDef;
  value: string | string[];
  onChange: (val: string | string[]) => void;
  otherValue: string;
  onOtherChange: (val: string) => void;
  otherLabel: string;
  otherPh: string;
}) {
  const baseInput =
    'w-full px-3 py-2.5 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-200 placeholder-slate-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-all duration-200';

  if (field.type === 'textarea') {
    return (
      <textarea
        name={field.name}
        value={value as string}
        onChange={e => onChange(e.target.value)}
        placeholder={field.ph || ''}
        required={field.required}
        className={`${baseInput} min-h-[85px] resize-y mt-1`}
      />
    );
  }

  if (['text', 'email', 'number'].includes(field.type)) {
    return (
      <input
        type={field.type}
        name={field.name}
        value={value as string}
        onChange={e => onChange(e.target.value)}
        placeholder={field.ph || ''}
        required={field.required}
        className={`${baseInput} mt-1`}
      />
    );
  }

  if (field.type === 'checkbox' || field.type === 'radio') {
    const selected = Array.isArray(value) ? value : value ? [value] : [];

    const handleChange = (opt: string, checked: boolean) => {
      if (field.type === 'radio') {
        onChange(checked ? opt : '');
      } else {
        onChange(checked ? [...selected, opt] : selected.filter(v => v !== opt));
      }
    };

    return (
      <div className="mt-2 space-y-1.5">
        {field.options!.map(opt => (
          <label
            key={opt}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-slate-800/60 hover:border-cyan-500/30 hover:bg-slate-800/30 cursor-pointer transition-all duration-200"
          >
            <input
              type={field.type}
              name={field.name}
              value={opt}
              checked={selected.includes(opt)}
              onChange={e => handleChange(opt, e.target.checked)}
              className="accent-cyan-400 flex-shrink-0"
            />
            <span className="text-sm text-slate-300">{opt}</span>
          </label>
        ))}
        {field.withOther && (
          <div className="mt-2 p-3 bg-slate-900/40 rounded-lg border border-dashed border-slate-700/60">
            <p className="text-xs text-slate-500 italic mb-1.5">{otherLabel}</p>
            <textarea
              value={otherValue}
              onChange={e => onOtherChange(e.target.value)}
              placeholder={otherPh}
              className={`${baseInput} min-h-[56px] resize-y text-xs`}
            />
          </div>
        )}
      </div>
    );
  }

  return null;
}

// ─── Main page component ──────────────────────────────────────────────────────
export default function Diagnostic() {
  const [lang, setLang] = useState<Lang>('el');
  const [profession, setProfession] = useState<Profession>('physio');
  const [values, setValues] = useState<Record<string, string | string[]>>({});
  const [otherValues, setOtherValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileToken = useRef<string>('');
  const turnstileWidgetId = useRef<string>('');

  const t = T[lang];

  // Load Turnstile script once
  useEffect(() => {
    if (document.getElementById('cf-turnstile-script')) return;
    const script = document.createElement('script');
    script.id = 'cf-turnstile-script';
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }, []);

  // Render Turnstile widget after script loads
  const renderTurnstile = useCallback(() => {
    if (!turnstileRef.current || !window.turnstile) return;
    // Clear previous widget
    turnstileRef.current.innerHTML = '';
    turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
      sitekey: '0x4AAAAAADMCksx1u1MPvh1o',
      theme: 'dark',
      callback: (token: string) => { turnstileToken.current = token; },
      'expired-callback': () => { turnstileToken.current = ''; },
    });
  }, []);

  useEffect(() => {
    const tryRender = () => {
      if (window.turnstile) {
        renderTurnstile();
      } else {
        setTimeout(tryRender, 300);
      }
    };
    tryRender();
  }, [renderTurnstile]);

  const handleLang = (l: Lang) => {
    setLang(l);
    setValues({});
    setOtherValues({});
  };

  const handleProfession = (p: Profession) => {
    setProfession(p);
    setValues({});
    setOtherValues({});
  };

  const handleSubmit = async () => {
    if (!turnstileToken.current) {
      setStatus('error');
      return;
    }
    setStatus('submitting');

    const sections = getSections(lang, profession);
    const answers: Record<string, { label: string; value: string | string[] }> = {};

    sections.forEach(sec => {
      sec.fields.forEach(f => {
        const val = values[f.name];
        const other = otherValues[f.name] || '';
        let finalVal: string | string[] | undefined = val;

        if (Array.isArray(val) && val.length === 0 && !other) return;
        if (!val && !other) return;

        if (Array.isArray(val) && other) {
          finalVal = [...val, other];
        } else if (!val && other) {
          finalVal = other;
        }

        answers[f.name] = { label: f.label, value: finalVal ?? '' };
      });
    });

    const payload = {
      meta: {
        specialty: T[lang][profession],
        specialty_key: profession,
        language: lang.toUpperCase(),
        submitted_at: new Date().toISOString(),
        practice_name: (values['practice_name'] as string) || '-',
      },
      answers,
      turnstile_token: turnstileToken.current,
    };

    try {
      const res = await fetch(
        'https://n8n.srv1363008.hstgr.cloud/webhook/6db03d46-e198-48ed-a4d3-fba950d7285e',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error(`${res.status}`);
      setStatus('success');
    } catch {
      setStatus('error');
      turnstileToken.current = '';
      if (window.turnstile) window.turnstile.reset(turnstileWidgetId.current);
    }
  };

  const sections = getSections(lang, profession);

  return (
    <div className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* ── Lang toggle ── */}
        <div className="flex justify-between items-center mb-8">
          <span className="text-slate-500 text-sm">Coreflow Automation</span>
          <div className="flex gap-2">
            {(['el', 'en'] as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => handleLang(l)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                  lang === l
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-transparent'
                    : 'border-cyan-500/40 text-slate-400 hover:border-cyan-400/60'
                }`}
              >
                {l === 'el' ? '🇬🇷 Ελληνικά' : '🇬🇧 English'}
              </button>
            ))}
          </div>
        </div>

        {/* ── Profession selector ── */}
        <div className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-5 mb-6">
          <label className="block text-sm font-semibold text-slate-400 mb-3">{t.prof_label}</label>
          <select
            value={profession}
            onChange={e => handleProfession(e.target.value as Profession)}
            className="w-full px-3 py-2.5 bg-slate-900/60 border border-slate-700/60 rounded-lg text-slate-200 text-sm focus:outline-none focus:border-cyan-500/60 cursor-pointer"
          >
            <option value="physio">{t.physio}</option>
            <option value="dentist">{t.dentist}</option>
          </select>
        </div>

        {/* ── Header ── */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-8 mb-6 text-center shadow-xl shadow-cyan-500/5">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-slate-100">
            {t.header_title_pre}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {t.header_title_span}
            </span>
          </h1>
          <p className="text-slate-400 text-sm">{t.header_sub}</p>
        </div>

        {/* ── Intro ── */}
        <div className="bg-slate-900/30 backdrop-blur-sm border-l-4 border-cyan-500 rounded-xl p-6 mb-8">
          <h3 className="text-cyan-400 font-semibold mb-3">{t.intro_title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-2">{t.intro_p1}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-2">{t.intro_p2}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">{t.intro_p3}</p>
          <p className="text-slate-500 text-xs italic">{t.intro_est}</p>
        </div>

        {/* ── Form sections ── */}
        <div className="space-y-6">
          {sections.map((sec, si) => (
            <div
              key={si}
              className="bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
            >
              <h2 className="text-cyan-400 font-bold text-base mb-5 pb-3 border-b border-slate-800/80">
                {sec.title}
              </h2>
              <div className="space-y-5">
                {sec.fields.map((f, fi) => (
                  <div key={fi}>
                    <label className="block text-sm font-semibold text-slate-300 mb-1">
                      {f.label}
                      {f.required && <span className="text-cyan-400 ml-1">*</span>}
                    </label>
                    {f.sub && <p className="text-xs text-slate-500 italic mb-1.5">{f.sub}</p>}
                    <FormField
                      field={f}
                      value={values[f.name] ?? (f.type === 'checkbox' ? [] : '')}
                      onChange={val => setValues(prev => ({ ...prev, [f.name]: val }))}
                      otherValue={otherValues[f.name] ?? ''}
                      onOtherChange={val => setOtherValues(prev => ({ ...prev, [f.name]: val }))}
                      otherLabel={t.other_label}
                      otherPh={t.other_ph}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Submit section ── */}
        <div className="mt-8 bg-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 text-center">
          {/* Turnstile widget */}
          <div className="flex justify-center mb-6">
            <div ref={turnstileRef} />
          </div>

          {status === 'success' ? (
            <div className="space-y-3">
              <p className="text-2xl font-bold text-cyan-400">{t.sent}</p>
              <p className="text-slate-300 text-sm">{t.success_msg}</p>
            </div>
          ) : (
            <>
              {status === 'error' && (
                <p className="text-red-400 text-sm mb-4">
                  {!turnstileToken.current ? t.turnstile_required : t.error_msg}
                </p>
              )}
              <button
                onClick={handleSubmit}
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'submitting' ? t.submitting : t.submit_btn}
              </button>
              <p className="mt-4 text-slate-500 text-xs">{t.submit_note}</p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
