import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { SchemaOrg, faqSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "How to Spot a Debt Relief Scam in Canada (2026)",
  description:
    "Red flags to watch for when seeking debt help. Based on FTC, CFPB, and OSB guidance. Protect yourself from unlicensed operators and upfront-fee scams.",
  path: "/scam-alert",
});

const scamFaqs = [
  {
    question: "Can a debt relief company charge me upfront fees?",
    answer:
      "In Canada, Licensed Insolvency Trustees include their fees in your consumer proposal or bankruptcy payments — you never pay upfront. In the US, the FTC's Telemarketing Sales Rule prohibits debt relief companies from charging fees before settling or reducing a debt. Any company demanding upfront payment is a major red flag.",
  },
  {
    question: "How do I verify if someone is a Licensed Insolvency Trustee?",
    answer:
      "Search the Office of the Superintendent of Bankruptcy (OSB) public register at ic.gc.ca/bsf-osb. Every licensed trustee in Canada is listed there with their license number, location, and status. If someone claims to be a trustee but isn't on the register, they are not licensed.",
  },
  {
    question: "Are debt settlement companies legitimate?",
    answer:
      "Some are, but the industry has significant problems. In Canada, only Licensed Insolvency Trustees can administer legal debt relief processes like consumer proposals. Debt settlement companies operate outside this framework and cannot provide the same legal protections. Always verify credentials and check for complaints before engaging any service.",
  },
  {
    question: "What should I do if I've been scammed by a debt relief company?",
    answer:
      "Report the scam to your provincial consumer protection office, the Competition Bureau of Canada, and the Better Business Bureau. If you paid by credit card, contact your card issuer to dispute the charges. Document everything — contracts, emails, payment records — and consult a licensed trustee or lawyer about your options.",
  },
];

export default function ScamAlertPage() {
  return (
    <>
      <SchemaOrg schema={faqSchema(scamFaqs)} />

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold text-charcoal md:text-4xl">
            How to Spot a Debt Relief Scam
          </h1>
          <p className="mt-4 text-lg text-charcoal-light">
            Debt relief scams cost Canadians and Americans millions every year,
            targeting people at their most vulnerable. Before you talk to anyone
            about your debt, learn the warning signs that separate legitimate
            help from predatory operators.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-charcoal">
            7 Red Flags That Signal a Scam
          </h2>
          <div className="mt-6 space-y-6">
            {[
              {
                flag: "They charge upfront fees",
                detail:
                  "Legitimate Licensed Insolvency Trustees in Canada never charge upfront fees — their costs are built into your consumer proposal or bankruptcy payments. In the US, the FTC prohibits debt relief companies from charging before settling a debt. If anyone asks for money before doing any work, walk away.",
              },
              {
                flag: "They guarantee specific results",
                detail:
                  'No one can guarantee that creditors will accept a specific deal. Phrases like "We guarantee we\'ll reduce your debt by 70%" are false promises. Legitimate professionals explain likely outcomes without guarantees.',
              },
              {
                flag: "They tell you to stop paying creditors",
                detail:
                  "Some companies instruct you to stop all payments and save money in a separate account. This tanks your credit score, triggers collection calls, and may lead to lawsuits — while the company collects your monthly fees. A legitimate trustee will file a proposal or assignment that legally stops creditor action.",
              },
              {
                flag: "They pressure you to act immediately",
                detail:
                  '"This offer expires today" or "We can only help if you sign now" are high-pressure sales tactics. Legitimate debt professionals give you time to consider your options and encourage you to seek independent advice.',
              },
              {
                flag: "They won't show you their license",
                detail:
                  "In Canada, only Licensed Insolvency Trustees can administer consumer proposals and bankruptcies. They must be registered with the OSB. Lawyers must be members of their provincial law society. If someone can't provide verifiable credentials, they shouldn't be advising you on debt.",
              },
              {
                flag: "They claim to be government-affiliated",
                detail:
                  '"Government debt relief program" and "government-approved debt reduction" are common scam phrases. There is no such government program in Canada or the US. The government licenses professionals (LITs, lawyers) but does not run debt relief services.',
              },
              {
                flag: "They contact you first",
                detail:
                  "Unsolicited calls, texts, or emails offering to eliminate your debt are almost always scams. Legitimate professionals don't cold-call people in debt. If you didn't reach out to them, be extremely cautious.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-cream bg-white p-6"
              >
                <h3 className="text-lg font-semibold text-charcoal">
                  <span className="mr-2 text-amber">{i + 1}.</span>
                  {item.flag}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-charcoal">
            How to Protect Yourself
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                action: "Verify credentials yourself",
                how: "Search the OSB register for Licensed Insolvency Trustees. Check provincial law society directories for lawyers. Don't take their word for it.",
              },
              {
                action: "Get everything in writing",
                how: "Any legitimate provider will give you a written contract detailing services, fees, and timelines before you commit. Read it carefully.",
              },
              {
                action: "Ask about all fees",
                how: 'Ask exactly how much you will pay total, what the fees cover, and when they are due. "Our fee is included in your proposal payments" is the correct answer from a trustee.',
              },
              {
                action: "Get a second opinion",
                how: "Consult at least two providers before making a decision. Initial consultations with Licensed Insolvency Trustees are free by law in Canada.",
              },
              {
                action: "Check for complaints",
                how: "Search the Better Business Bureau, provincial consumer protection websites, and online reviews. Patterns of complaints are a clear warning.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{item.action}</p>
                  <p className="mt-1 text-sm text-charcoal-light">
                    {item.how}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-charcoal">
            Official Resources
          </h2>
          <p className="mt-4 text-charcoal-light">
            These government and regulatory organizations provide reliable
            information about debt relief and consumer protection:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                name: "Office of the Superintendent of Bankruptcy (OSB)",
                description:
                  "Regulates and licenses Insolvency Trustees in Canada",
                url: "https://www.ic.gc.ca/eic/site/bsf-osb.nsf/eng/home",
              },
              {
                name: "CAIRP",
                description:
                  "Canadian Association of Insolvency and Restructuring Professionals",
                url: "https://www.cairp.ca/",
              },
              {
                name: "Consumer Financial Protection Bureau (CFPB)",
                description: "US consumer financial protection agency",
                url: "https://www.consumerfinance.gov/",
              },
              {
                name: "Federal Trade Commission (FTC)",
                description: "US consumer protection and anti-fraud agency",
                url: "https://www.ftc.gov/",
              },
            ].map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-cream bg-white p-4 transition hover:border-teal/30"
              >
                <p className="font-semibold text-teal">{resource.name}</p>
                <p className="mt-1 text-xs text-charcoal-light">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-6">
            {scamFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-cream bg-white p-6"
              >
                <h3 className="font-semibold text-charcoal">{faq.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-cream p-8 text-center">
          <h2 className="text-xl font-bold text-charcoal">
            Find Verified Providers Instead
          </h2>
          <p className="mt-3 text-charcoal-light">
            Every provider on MyClearDebt is cross-referenced against official
            government registers. No exceptions.
          </p>
          <Link
            href="/quiz"
            className="mt-6 inline-block rounded-full bg-teal px-6 py-3 font-semibold text-white hover:bg-teal-dark"
          >
            Find My Options
          </Link>
        </section>
      </article>
    </>
  );
}
