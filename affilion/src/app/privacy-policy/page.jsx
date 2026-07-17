import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-linear-to-br from-orange-50 via-white to-slate-100 text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <section className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-xl shadow-orange-100/60">
          <div className="bg-linear-to-r from-orange-500 to-orange-600 px-6 py-8 text-white sm:px-10">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em]">
              Privacy Policy
            </span>
            <h1 className="mt-4 text-3xl font-bold sm:text-4xl">Privacy Notice for Affilion</h1>
            <p className="mt-3 text-sm text-orange-50 sm:text-base">
              Last updated July 17, 2026
            </p>
          </div>

          <div className="px-6 py-8 sm:px-10">
            <div className="rounded-2xl bg-orange-50 p-5 text-sm leading-7 text-slate-700 sm:p-6">
              <p>
                This Privacy Notice for <strong>Affilion</strong> (“we,” “us,” or “our”) describes how and why we might access, collect, store, use, and/or share your personal information when you use our services.
              </p>
              <p className="mt-3">
                Questions or concerns? Please contact us at <a href="mailto:kumarrmanish030@gmail.com" className="font-semibold text-orange-600 underline">kumarrmanish030@gmail.com</a>.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "What we collect",
                  text: "Names, phone numbers, email addresses, and other information you provide voluntarily when contacting us or using our services.",
                },
                {
                  title: "How we use it",
                  text: "To provide, improve, and administer our services, communicate with you, prevent fraud, and comply with legal obligations.",
                },
                {
                  title: "Your rights",
                  text: "You may request access, correction, deletion, or withdrawal of consent depending on your location and applicable law.",
                },
                {
                  title: "Contact us",
                  text: "Visit our website or email us for any privacy or data-related requests.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm">
                  <h2 className="text-lg font-bold text-orange-600">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-bold text-slate-900">Table of Contents</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "What Information We Collect",
                  "How We Process Your Information",
                  "Legal Bases",
                  "When We Share Information",
                  "Social Logins",
                  "Retention",
                  "Children’s Privacy",
                  "Your Privacy Rights",
                  "Do-Not-Track",
                  "US Residents",
                  "Updates",
                  "Contact",
                  "Review / Delete Data",
                ].map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                    {item}
                  </span>
                ))}
            </div>
            </div>

            <div className="mt-8 space-y-6">
              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">1. What Information Do We Collect?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  We collect personal information that you voluntarily provide when you express interest in our products and services, participate in activities on the Services, or contact us directly.
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  This may include your name, phone number, email address, and profile information if you choose to register using a social media account.
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  We do not process sensitive personal information, and all personal information provided to us must be accurate and complete.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">2. How Do We Process Your Information?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  We process your information to provide, improve, and administer our Services, communicate with you, support security and fraud prevention, and comply with applicable law.
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  We process your personal information only when we have a valid legal reason to do so, such as consent, legal obligations, vital interests, or legitimate business needs.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">3. What Legal Bases Do We Rely On?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  In the EU or UK, we rely on consent, legal obligations, and vital interests where appropriate. In Canada, we may rely on express or implied consent unless a legal exception applies.
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  You can withdraw your consent at any time by contacting us using the details below.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">4. When and With Whom Do We Share Your Personal Information?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  We may share personal information in connection with business transfers, such as mergers, sales of company assets, financing, or acquisitions.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">5. How Do We Handle Your Social Logins?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  If you choose to register or log in using a social media account, we may receive profile information such as your name, email address, friends list, and profile picture from the provider.
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  We only use that information for the purposes described in this policy and recommend reviewing the privacy notice of your social media provider.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">6. How Long Do We Keep Your Information?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  We keep personal information only as long as necessary to fulfill the purposes described in this notice, unless a longer period is required by law.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">7. Do We Collect Information From Minors?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  We do not knowingly collect or market to children under 18 years of age. If we become aware of such data, we will take steps to delete it promptly.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">8. What Are Your Privacy Rights?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Depending on where you live, you may have the right to request access to your personal information, correct inaccuracies, delete data, restrict processing, obtain a copy, or object to automated decision-making.
                </p>
                <p className="mt-3 leading-7 text-slate-700">
                  You may also raise any complaint directly with the relevant data protection authority where applicable.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">9. Controls for Do-Not-Track Features</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  We currently do not respond to Do-Not-Track browser signals because no uniform standard has been finalized.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">10. Do United States Residents Have Specific Privacy Rights?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  If you are a resident of certain US states, you may have rights to know what personal data we process, request access, correct inaccuracies, delete data, obtain a copy, or opt out of certain processing.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">11. Do We Make Updates to This Notice?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Yes. We may update this Privacy Notice from time to time and will indicate changes with a revised date at the top of the notice.
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">12. How Can You Contact Us About This Notice?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  You may contact us by visiting our website, by email at <a href="mailto:kumarrmanish030@gmail.com" className="font-semibold text-orange-600 underline">kumarrmanish030@gmail.com</a>, or by post at:
                </p>
                <p className="mt-3 rounded-xl bg-orange-50 p-4 font-medium text-slate-700">
                  Affilion, Hero Honda Chowk, Gurugram, Haryana 122001, India
                </p>
              </section>

              <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-orange-600">13. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
                <p className="mt-3 leading-7 text-slate-700">
                  Based on your country or state of residence, you may have the right to review, update, or delete your personal information. To request this, please submit a data subject access request through the contact details listed above.
                </p>
              </section>
            </div>

            <div className="mt-8 rounded-3xl bg-slate-900 px-6 py-8 text-center text-white">
              <h2 className="text-2xl font-bold">Thank You for Trusting Affilion</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                We are committed to protecting your privacy and handling your information responsibly.
              </p>
              <Link href="/contact-us" className="mt-5 inline-flex rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
