import Link from "next/link";
import { SchemaOrg } from "@/lib/schema";

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
            "Compare debt relief options, find verified providers, and understand your path out of debt.",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://mycleardebt.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
            Know Before You Owe
          </h1>
          <p className="mt-4 text-lg text-charcoal-light">
            Understand all your debt relief options — costs, timelines, credit
            impact, eligibility — before talking to anyone. No pressure, no
            surprises.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/quiz"
              className="rounded-full bg-teal px-8 py-3 text-lg font-semibold text-white hover:bg-teal-dark"
            >
              What Are My Options?
            </Link>
            <Link
              href="/options"
              className="rounded-full border border-teal px-8 py-3 text-lg font-semibold text-teal hover:bg-teal hover:text-white"
            >
              Compare Options
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-bold text-charcoal">
            Your Debt Relief Options
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                title: "Consumer Proposal",
                description:
                  "Negotiate to pay back a portion of your debt. Keep your assets. Available in Canada.",
                href: "/options/consumer-proposal",
              },
              {
                title: "Bankruptcy",
                description:
                  "Legal process to eliminate most debts. Fresh start with specific rules and timelines.",
                href: "/options/bankruptcy",
              },
              {
                title: "Debt Consolidation",
                description:
                  "Combine multiple debts into one payment, often at a lower interest rate.",
                href: "/options/debt-consolidation",
              },
              {
                title: "Credit Counseling",
                description:
                  "Work with a certified counselor to create a repayment plan and budget.",
                href: "/options/credit-counseling",
              },
              {
                title: "Debt Settlement",
                description:
                  "Negotiate directly with creditors to pay less than what you owe.",
                href: "/options/debt-settlement",
              },
              {
                title: "Debt Management Plan",
                description:
                  "Structured repayment plan managed by a credit counseling agency.",
                href: "/options/debt-management-plan",
              },
            ].map((option) => (
              <Link
                key={option.href}
                href={option.href}
                className="rounded-lg border border-cream bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-teal">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal-light">
                  {option.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-charcoal">
            Every Provider Is Verified
          </h2>
          <p className="mt-4 text-charcoal-light">
            We cross-reference every provider against official government
            registers. Licensed Insolvency Trustees verified through the OSB.
            Lawyers verified through provincial law societies. No exceptions.
          </p>
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <span className="rounded-full bg-white px-4 py-2 text-teal">
              License Verified
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-teal">
              Government Licensed
            </span>
            <span className="rounded-full bg-white px-4 py-2 text-amber">
              MyClearDebt Verified
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
