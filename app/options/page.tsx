import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { SchemaOrg, faqSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Compare All Debt Relief Options in Canada (2026)",
  description:
    "Side-by-side comparison of consumer proposals, bankruptcy, debt consolidation, credit counseling, debt settlement, and debt management plans. Costs, timelines, and credit impact.",
  path: "/options",
});

const comparisonData = [
  {
    option: "Consumer Proposal",
    slug: "consumer-proposal",
    cost: "20-50% of total debt",
    timeline: "Up to 5 years",
    creditImpact: "R7 rating for 3 years after completion",
    bestFor: "Debts over $10,000 with assets to protect",
    availability: "Canada only",
    legalProtection: "Yes — stays of proceedings",
    assetProtection: "Keep all assets",
  },
  {
    option: "Bankruptcy",
    slug: "bankruptcy",
    cost: "$1,800+ (first-time, no surplus)",
    timeline: "9-21 months (first time)",
    creditImpact: "R9 rating for 6-7 years after discharge",
    bestFor: "Overwhelming debt with limited income/assets",
    availability: "Canada & US",
    legalProtection: "Yes — automatic stay",
    assetProtection: "Provincial exemptions apply",
  },
  {
    option: "Debt Consolidation",
    slug: "debt-consolidation",
    cost: "Interest on consolidated loan",
    timeline: "2-5 years",
    creditImpact: "Minimal if payments are on time",
    bestFor: "Good credit, manageable debt, multiple payments",
    availability: "Canada & US",
    legalProtection: "No",
    assetProtection: "May require collateral",
  },
  {
    option: "Credit Counseling",
    slug: "credit-counseling",
    cost: "Reduced interest, small monthly fee",
    timeline: "3-5 years",
    creditImpact: "R7 rating during plan",
    bestFor: "Moderate debt, need structured repayment",
    availability: "Canada & US",
    legalProtection: "No",
    assetProtection: "Keep all assets",
  },
  {
    option: "Debt Settlement",
    slug: "debt-settlement",
    cost: "Negotiated lump sum (typically 40-60%)",
    timeline: "2-4 years",
    creditImpact: "Significant negative impact",
    bestFor: "Lump sum available, want to avoid bankruptcy",
    availability: "Primarily US",
    legalProtection: "No",
    assetProtection: "Keep all assets",
  },
  {
    option: "Debt Management Plan",
    slug: "debt-management-plan",
    cost: "Full principal, reduced interest",
    timeline: "3-5 years",
    creditImpact: "R7 rating during plan",
    bestFor: "Want to repay in full with lower interest",
    availability: "Canada & US",
    legalProtection: "No",
    assetProtection: "Keep all assets",
  },
];

const faqs = [
  {
    question:
      "What is the difference between a consumer proposal and bankruptcy?",
    answer:
      "A consumer proposal lets you negotiate to repay a portion of your debt (typically 20-50%) over up to 5 years while keeping all your assets. Bankruptcy eliminates most debts but may require surrendering non-exempt assets and has a longer credit impact (6-7 years vs 3 years). Consumer proposals are only available in Canada.",
  },
  {
    question: "Which debt relief option has the least credit impact?",
    answer:
      "Debt consolidation has the least negative credit impact because you are taking a new loan to pay off existing debts — no missed payments, no insolvency filing. Credit counseling and debt management plans show as R7 during the plan. Consumer proposals also result in R7 but only for 3 years after completion.",
  },
  {
    question: "Can I choose which option to use?",
    answer:
      "Yes, but eligibility varies. Consumer proposals require unsecured debts under $250,000 (excluding mortgage) and enough income to make payments. Bankruptcy has no debt minimum. Debt consolidation requires good enough credit to qualify for a loan. A Licensed Insolvency Trustee can assess which options are available to you — initial consultations are free.",
  },
];

export default function OptionsPage() {
  return (
    <>
      <SchemaOrg schema={faqSchema(faqs)} />

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl font-bold text-charcoal md:text-4xl">
            Compare All Debt Relief Options
          </h1>
          <p className="mt-4 text-lg text-charcoal-light">
            There are six main ways to deal with unmanageable debt in Canada.
            Each has different costs, timelines, and trade-offs. Understanding
            these differences is the most important step you can take before
            talking to anyone.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-teal/20">
                <th className="px-4 py-3 text-left font-semibold text-charcoal">
                  Option
                </th>
                <th className="px-4 py-3 text-left font-semibold text-charcoal">
                  Typical Cost
                </th>
                <th className="px-4 py-3 text-left font-semibold text-charcoal">
                  Timeline
                </th>
                <th className="px-4 py-3 text-left font-semibold text-charcoal">
                  Credit Impact
                </th>
                <th className="px-4 py-3 text-left font-semibold text-charcoal">
                  Legal Protection
                </th>
                <th className="px-4 py-3 text-left font-semibold text-charcoal">
                  Assets
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr
                  key={row.slug}
                  className={`border-b border-cream ${
                    i % 2 === 0 ? "bg-white" : "bg-cream/30"
                  }`}
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/options/${row.slug}`}
                      className="font-medium text-teal hover:text-teal-dark"
                    >
                      {row.option}
                    </Link>
                    {row.availability !== "Canada & US" && (
                      <span className="ml-2 text-xs text-charcoal-light">
                        ({row.availability})
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-charcoal-light">{row.cost}</td>
                  <td className="px-4 py-3 text-charcoal-light">
                    {row.timeline}
                  </td>
                  <td className="px-4 py-3 text-charcoal-light">
                    {row.creditImpact}
                  </td>
                  <td className="px-4 py-3 text-charcoal-light">
                    {row.legalProtection}
                  </td>
                  <td className="px-4 py-3 text-charcoal-light">
                    {row.assetProtection}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Option Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {comparisonData.map((option) => (
            <Link
              key={option.slug}
              href={`/options/${option.slug}`}
              className="group rounded-xl border border-cream bg-white p-6 transition hover:border-teal/30 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-teal group-hover:text-teal-dark">
                {option.option}
              </h3>
              <p className="mt-2 text-sm text-charcoal-light">
                <strong className="text-charcoal">Best for:</strong>{" "}
                {option.bestFor}
              </p>
              <div className="mt-3 flex flex-wrap gap-3 text-xs text-charcoal-light">
                <span className="rounded bg-cream px-2 py-1">
                  {option.cost}
                </span>
                <span className="rounded bg-cream px-2 py-1">
                  {option.timeline}
                </span>
              </div>
              <p className="mt-3 text-sm font-medium text-teal group-hover:text-teal-dark">
                Read full guide &rarr;
              </p>
            </Link>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-charcoal">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-6">
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-charcoal-light">
            Not sure which option is right for you?
          </p>
          <Link
            href="/quiz"
            className="mt-4 inline-block rounded-full bg-teal px-8 py-3 font-semibold text-white hover:bg-teal-dark"
          >
            Take the 2-Minute Quiz
          </Link>
        </div>
      </section>
    </>
  );
}
