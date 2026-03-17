import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { SchemaOrg, organizationSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "About MyClearDebt — Our Mission",
  description:
    "MyClearDebt exists because too many people get ripped off when seeking debt help. We are an education-first directory connecting consumers with verified, licensed providers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SchemaOrg schema={organizationSchema()} />

      <section className="bg-cream py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold text-charcoal md:text-4xl">
            About MyClearDebt
          </h1>
          <p className="mt-4 text-lg text-charcoal-light">
            We exist because too many people get ripped off when they are most
            vulnerable.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-charcoal">The Problem</h2>
          <p className="mt-4 leading-relaxed text-charcoal-light">
            When someone is drowning in debt, they are desperate for help. That
            desperation makes them a target. Unlicensed operators charge upfront
            fees for services they never deliver. Companies promise to
            &quot;eliminate&quot; debt through nonexistent government programs.
            Sales-driven firms push people into solutions that benefit the
            company, not the consumer.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal-light">
            Meanwhile, legitimate professionals — Licensed Insolvency Trustees,
            qualified lawyers, certified credit counselors — are harder to find
            because they don&apos;t spend millions on aggressive advertising.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-charcoal">Our Solution</h2>
          <p className="mt-4 leading-relaxed text-charcoal-light">
            MyClearDebt is an education-first directory. We are not a debt
            relief company. We do not provide financial or legal advice. We do
            not negotiate with creditors. We do not charge consumers anything.
          </p>
          <p className="mt-4 leading-relaxed text-charcoal-light">
            Instead, we do three things:
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-lg border border-cream bg-white p-5">
              <h3 className="font-semibold text-teal">1. Educate</h3>
              <p className="mt-2 text-sm text-charcoal-light">
                We publish unbiased, comprehensive guides on every debt relief
                option — consumer proposals, bankruptcy, consolidation,
                counseling, settlement. We explain costs, timelines, credit
                impact, and eligibility so you understand your choices before
                talking to anyone.
              </p>
            </div>
            <div className="rounded-lg border border-cream bg-white p-5">
              <h3 className="font-semibold text-teal">2. Verify</h3>
              <p className="mt-2 text-sm text-charcoal-light">
                We cross-reference every provider against official government
                registers. Licensed Insolvency Trustees are verified through the
                Office of the Superintendent of Bankruptcy. Lawyers are verified
                through provincial law societies. No one appears on our site
                without verifiable credentials.
              </p>
            </div>
            <div className="rounded-lg border border-cream bg-white p-5">
              <h3 className="font-semibold text-teal">3. Connect</h3>
              <p className="mt-2 text-sm text-charcoal-light">
                When you are ready, we help you find verified providers in your
                area. You choose who contacts you. We never share your
                information without your explicit consent, and no one reaches
                out unless you ask them to.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-charcoal">Our Principles</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                principle: "Education before sales",
                detail: "We help you understand before we help you find.",
              },
              {
                principle: "Transparent about everything",
                detail:
                  "Our revenue model, our verification process, our limitations.",
              },
              {
                principle: "Pro-consumer, always",
                detail:
                  "When provider interests conflict with consumer interests, we choose consumers.",
              },
              {
                principle: "Licensed providers only",
                detail:
                  "We don't list anyone who can't prove their credentials against government records.",
              },
              {
                principle: "No dark patterns",
                detail:
                  "No popups, no countdown timers, no fake urgency, no pre-checked consent boxes.",
              },
              {
                principle: "Data-driven, not opinion-driven",
                detail:
                  "Our content cites official sources: OSB, CAIRP, CFPB, FTC. Not our opinions.",
              },
            ].map((item) => (
              <div
                key={item.principle}
                className="rounded-lg border border-cream bg-white p-4"
              >
                <p className="font-semibold text-charcoal">{item.principle}</p>
                <p className="mt-1 text-sm text-charcoal-light">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl bg-cream p-8">
          <h2 className="text-xl font-bold text-charcoal">Get in Touch</h2>
          <p className="mt-3 text-charcoal-light">
            Have questions, feedback, or want to report an issue? Reach us at{" "}
            <span className="text-teal">info@mycleardebt.com</span>.
          </p>
          <div className="mt-4 flex gap-4">
            <Link
              href="/how-we-work"
              className="text-sm font-medium text-teal hover:text-teal-dark"
            >
              How we make money &rarr;
            </Link>
            <Link
              href="/for-providers"
              className="text-sm font-medium text-teal hover:text-teal-dark"
            >
              For providers &rarr;
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
