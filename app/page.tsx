import Link from "next/link";
import { SchemaOrg, organizationSchema, faqSchema } from "@/lib/schema";

const options = [
  {
    title: "Consumer Proposal",
    slug: "consumer-proposal",
    description:
      "Negotiate to repay a portion of your debt through a Licensed Insolvency Trustee. Keep your assets, stop interest, and get creditor protection.",
    pros: ["Keep your assets", "Reduce debt up to 80%", "Stop interest charges"],
    country: "Canada",
  },
  {
    title: "Bankruptcy",
    slug: "bankruptcy",
    description:
      "Legal process to eliminate most unsecured debts. Provides a fresh start with specific rules about assets, income, and credit impact.",
    pros: ["Eliminate most debts", "Fresh financial start", "Creditor protection"],
    country: "Both",
  },
  {
    title: "Debt Consolidation",
    slug: "debt-consolidation",
    description:
      "Combine multiple debts into a single loan with one monthly payment, ideally at a lower interest rate than your current debts.",
    pros: ["One monthly payment", "Lower interest rate", "No credit damage"],
    country: "Both",
  },
  {
    title: "Credit Counseling",
    slug: "credit-counseling",
    description:
      "Work with a certified counselor who negotiates with creditors on your behalf to create a structured repayment plan.",
    pros: ["Professional guidance", "Reduced interest", "Structured plan"],
    country: "Both",
  },
  {
    title: "Debt Settlement",
    slug: "debt-settlement",
    description:
      "Negotiate directly with creditors to accept a lump-sum payment that is less than the total amount you owe.",
    pros: ["Pay less than owed", "Resolve debts faster", "Avoid bankruptcy"],
    country: "Both",
  },
  {
    title: "Debt Management Plan",
    slug: "debt-management-plan",
    description:
      "A structured repayment plan managed by a credit counseling agency that consolidates payments without taking a new loan.",
    pros: ["No new borrowing", "Waived fees", "Single payment"],
    country: "Both",
  },
];

const faqs = [
  {
    question: "What is the best way to get out of debt in Canada?",
    answer:
      "The best option depends on your situation. Consumer proposals let you reduce debt by up to 80% while keeping your assets. Bankruptcy eliminates most debts but has more impact on your credit. Debt consolidation works if you can still make payments. A Licensed Insolvency Trustee can assess your situation for free.",
  },
  {
    question: "How much does a consumer proposal cost?",
    answer:
      "Consumer proposal costs vary based on your total debt, income, and assets. Typically, you repay 20-50% of your total unsecured debt over up to 5 years. The trustee's fees are included in your payments — there are no upfront costs to you.",
  },
  {
    question: "Will bankruptcy ruin my credit forever?",
    answer:
      "No. A first bankruptcy stays on your credit report for 6-7 years after discharge (varies by province). Many people begin rebuilding credit within 2-3 years of discharge using secured credit cards and responsible borrowing.",
  },
  {
    question: "How do I know if a debt relief company is legitimate?",
    answer:
      "In Canada, only Licensed Insolvency Trustees (LITs) can legally administer consumer proposals and bankruptcies. Verify any provider against the Office of the Superintendent of Bankruptcy (OSB) public register. Be wary of companies that charge upfront fees or guarantee specific results.",
  },
];

export default function Home() {
  return (
    <>
      <SchemaOrg
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "MyClearDebt",
          url: "https://mycleardebt.com",
          description:
            "Compare debt relief options, find verified providers, and understand your path out of debt. Free, unbiased, education-first.",
          potentialAction: {
            "@type": "SearchAction",
            target:
              "https://mycleardebt.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <SchemaOrg schema={organizationSchema()} />
      <SchemaOrg schema={faqSchema(faqs)} />

      {/* Hero */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-charcoal md:text-5xl lg:text-6xl">
            Know Before You Owe
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-charcoal-light md:text-xl">
            Understand all your debt relief options — costs, timelines, credit
            impact, eligibility — before talking to anyone. No pressure, no
            surprises, no fees.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/quiz"
              className="rounded-full bg-teal px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-teal-dark hover:shadow-md"
            >
              What Are My Options?
            </Link>
            <Link
              href="/options"
              className="rounded-full border-2 border-teal px-8 py-4 text-lg font-semibold text-teal transition hover:bg-teal hover:text-white"
            >
              Compare All Options
            </Link>
          </div>
          <p className="mt-6 text-sm text-charcoal-light">
            Free for consumers. Always. We never charge you a penny.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-cream bg-white py-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4 text-sm text-charcoal-light">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-teal" />
            Every provider license-verified
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-teal" />
            Cross-referenced against government registers
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-amber" />
            100% free for consumers
          </div>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-charcoal">
              Your Debt Relief Options
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-charcoal-light">
              Each option has different costs, timelines, and credit impact.
              Understanding the differences is your first step toward a clear
              path forward.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {options.map((option) => (
              <Link
                key={option.slug}
                href={`/options/${option.slug}`}
                className="group rounded-xl border border-cream bg-white p-6 shadow-sm transition hover:border-teal/30 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-teal group-hover:text-teal-dark">
                    {option.title}
                  </h3>
                  {option.country === "Canada" && (
                    <span className="rounded-full bg-cream px-2 py-0.5 text-xs text-charcoal-light">
                      Canada only
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                  {option.description}
                </p>
                <ul className="mt-4 space-y-1">
                  {option.pros.map((pro) => (
                    <li
                      key={pro}
                      className="flex items-center gap-2 text-sm text-charcoal"
                    >
                      <span className="text-teal">&#10003;</span>
                      {pro}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm font-medium text-teal group-hover:text-teal-dark">
                  Learn more &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-center text-3xl font-bold text-charcoal">
            How MyClearDebt Works
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Understand Your Options",
                description:
                  "Read our unbiased guides or take our 2-minute quiz. No signup required. No pressure.",
              },
              {
                step: "2",
                title: "Compare Verified Providers",
                description:
                  "Every provider is cross-referenced against official government registers. See fees, reviews, and credentials.",
              },
              {
                step: "3",
                title: "Connect on Your Terms",
                description:
                  "Choose who contacts you. Request a free consultation. No one reaches out unless you ask them to.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-charcoal">
            Every Provider Is Verified
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-charcoal-light">
            We cross-reference every provider against official government
            registers. Licensed Insolvency Trustees verified through the OSB.
            Lawyers verified through provincial law societies. No exceptions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="rounded-lg border border-teal/20 bg-white px-6 py-3">
              <span className="font-medium text-charcoal">
                License Verified
              </span>
              <p className="mt-1 text-xs text-charcoal-light">
                Checked against government register
              </p>
            </div>
            <div className="rounded-lg border border-teal/20 bg-white px-6 py-3">
              <span className="font-medium text-charcoal">
                Government Licensed
              </span>
              <p className="mt-1 text-xs text-charcoal-light">
                Holds required federal/provincial license
              </p>
            </div>
            <div className="rounded-lg border border-amber/30 bg-white px-6 py-3">
              <span className="font-medium text-charcoal">
                MyClearDebt Verified
              </span>
              <p className="mt-1 text-xs text-charcoal-light">
                Passed additional vetting
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-charcoal-light">
            <Link href="/scam-alert" className="text-teal hover:text-teal-dark">
              Learn how to spot a debt relief scam &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-6">
            {faqs.map((faq) => (
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold text-charcoal">
            Ready to Explore Your Options?
          </h2>
          <p className="mt-4 text-charcoal-light">
            Take our 2-minute quiz to get personalized recommendations based on
            your debt situation. No signup required.
          </p>
          <Link
            href="/quiz"
            className="mt-8 inline-block rounded-full bg-teal px-8 py-4 text-lg font-semibold text-white shadow-sm transition hover:bg-teal-dark hover:shadow-md"
          >
            Find My Best Option
          </Link>
        </div>
      </section>
    </>
  );
}
