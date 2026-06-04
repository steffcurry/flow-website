export default function Privacy() {
  return (
    <div className="relative">
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-slate-100">Privacy Policy</h1>
          <p className="text-slate-400 mb-12">Last updated: 04/06/2026</p>

          <div className="space-y-8 text-slate-300">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-100">
                1. Information We Collect
              </h2>
              <p className="mb-4 leading-relaxed">We may collect the following information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name</li>
                <li>Email address</li>
                <li>Business name</li>
                <li>Website URL</li>
                <li>Information submitted through forms or direct communication</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                We only collect information relevant to business communication and service
                evaluation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-100">
                2. How We Use Information
              </h2>
              <p className="mb-4 leading-relaxed">Collected information may be used to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to inquiries or demo requests</li>
                <li>Evaluate operational needs</li>
                <li>Improve our services and systems</li>
                <li>
                  Communicate relevant updates, insights, or offerings related to AI
                  automation
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Communications may include informational, operational, or time-sensitive
                messages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-100">
                3. Business Communications
              </h2>
              <p className="leading-relaxed">
                By submitting your email address, you acknowledge that Coreflow Automation
                may send communications that are relevant to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>Our services</li>
                <li>Industry developments</li>
                <li>Automation opportunities</li>
                <li>Time-sensitive or priority-related information</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                These communications are considered part of a professional business
                relationship. You may opt out of non-essential communications at any time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-100">
                4. Data Sharing
              </h2>
              <p className="leading-relaxed">We do not sell or rent personal data.</p>
              <p className="mt-4 leading-relaxed">
                Information may be shared only with trusted service providers when necessary
                to operate our website, communications, or services, under confidentiality
                obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-100">
                5. Data Security
              </h2>
              <p className="leading-relaxed">
                We take reasonable measures to protect submitted information against
                unauthorized access, misuse, or disclosure. However, no system can be
                guaranteed 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-100">
                6. Data Retention
              </h2>
              <p className="mb-4 leading-relaxed">
                We retain information only as long as necessary for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Legitimate business purposes</li>
                <li>Legal or compliance obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-100">
                7. Your Rights
              </h2>
              <p className="mb-4 leading-relaxed">You may request:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access to your data</li>
                <li>Correction of inaccurate information</li>
                <li>Removal from non-essential communications</li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Requests can be made via our contact form.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-100">
                8. Policy Updates
              </h2>
              <p className="leading-relaxed">
                This Privacy Policy may be updated periodically. Continued use of the
                website constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-slate-100">9. Contact</h2>
              <p className="leading-relaxed">
                For privacy-related questions or requests, contact us through the website
                contact form.
              </p>
            </div>

            {/* ── Art. 14 GDPR — Greek ── */}
            <div className="border-t border-slate-700 pt-10 mt-10">
              <h2 className="text-2xl font-bold mb-2 text-slate-100">
                Πληροφόρηση κατά το άρθρο 14 ΓΚΠΔ
              </h2>
              <p className="text-slate-400 mb-8 text-sm">
                Ενημέρωση για επεξεργασία δεδομένων που δεν συλλέχθηκαν απευθείας από εσάς
              </p>

              <div className="space-y-6 text-slate-300">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-200">Υπεύθυνος Επεξεργασίας</h3>
                  <p className="leading-relaxed">
                    <strong className="text-slate-100">Coreflow Automation</strong> — επαγγελματική δραστηριότητα παροχής υπηρεσιών αυτοματισμού και τεχνητής νοημοσύνης. Επικοινωνία: μέσω της φόρμας επικοινωνίας στο{' '}
                    <a href="https://coreflowautomation.net" className="text-blue-400 hover:underline">coreflowautomation.net</a>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-200">Κατηγορίες Δεδομένων &amp; Πηγή</h3>
                  <p className="leading-relaxed">
                    Επεξεργαζόμαστε επαγγελματικά στοιχεία επικοινωνίας επιχειρήσεων (επωνυμία, διεύθυνση email, τοποθεσία, τηλέφωνο) τα οποία αντλήθηκαν από <strong className="text-slate-100">δημόσια διαθέσιμες πηγές</strong>: Google Maps, ιστοσελίδες επιχειρήσεων και δημόσιους επαγγελματικούς καταλόγους.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-200">Σκοπός Επεξεργασίας</h3>
                  <p className="leading-relaxed">
                    Επικοινωνία με επιχειρήσεις για την παρουσίαση υπηρεσιών αυτοματισμού και τεχνητής νοημοσύνης που μπορούν να βελτιώσουν τη λειτουργία τους.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-200">Νόμιμη Βάση</h3>
                  <p className="leading-relaxed">
                    <strong className="text-slate-100">Έννομο συμφέρον</strong> κατά το άρθρο 6 παρ. 1 στ΄ ΓΚΠΔ. Η εμπορική προώθηση υπηρεσιών προς επιχειρήσεις (B2B) συνιστά έννομο συμφέρον σύμφωνα με την Αιτιολογική Σκέψη 47 ΓΚΠΔ. Έχουμε διενεργήσει εξισορρόπηση συμφερόντων και κρίνουμε ότι η επεξεργασία δεν θίγει δυσανάλογα τα δικαιώματά σας.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-200">Αποδέκτες Δεδομένων</h3>
                  <p className="leading-relaxed">
                    Τα δεδομένα δεν κοινοποιούνται σε τρίτους για εμπορικούς σκοπούς. Χρησιμοποιούμε αξιόπιστους παρόχους υποδομής (φιλοξενία, εργαλεία επικοινωνίας) αποκλειστικά για τη λειτουργία των υπηρεσιών μας, υπό υποχρεώσεις εμπιστευτικότητας.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-200">Διάρκεια Διατήρησης</h3>
                  <p className="leading-relaxed">
                    Τα δεδομένα διατηρούνται για όσο διάστημα υπάρχει νόμιμη βάση επεξεργασίας. Σε περίπτωση εναντίωσης, διαγράφονται αμέσως και οριστικά.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-200">Τα Δικαιώματά Σας (ΓΚΠΔ Άρθρα 15–21)</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong className="text-slate-200">Πρόσβαση</strong> — να ζητήσετε αντίγραφο των δεδομένων σας</li>
                    <li><strong className="text-slate-200">Διόρθωση</strong> — να διορθωθούν ανακριβή στοιχεία</li>
                    <li><strong className="text-slate-200">Διαγραφή</strong> — να διαγραφούν τα δεδομένα σας</li>
                    <li><strong className="text-slate-200">Εναντίωση</strong> — να σταματήσει κάθε επικοινωνία μαζί σας</li>
                    <li><strong className="text-slate-200">Περιορισμός</strong> — να περιοριστεί η επεξεργασία υπό ορισμένες προϋποθέσεις</li>
                  </ul>
                  <p className="mt-4 leading-relaxed">
                    Για εναντίωση (άρθρο 21 ΓΚΠΔ): απαντήστε στο email επικοινωνίας με τη λέξη <strong className="text-slate-100">«διαγραφή»</strong>. Η εναντίωση ικανοποιείται <strong className="text-slate-100">αμέσως και οριστικά</strong> — δεν θα λάβετε καμία επικοινωνία ξανά.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-200">Αρμόδια Εποπτική Αρχή</h3>
                  <p className="leading-relaxed">
                    Έχετε δικαίωμα υποβολής καταγγελίας στην{' '}
                    <strong className="text-slate-100">Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (ΑΠΔΠΧ)</strong>:{' '}
                    <a
                      href="https://www.dpa.gr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      www.dpa.gr
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* ── /Art. 14 ── */}
          </div>
        </div>
      </section>
    </div>
  );
}
