import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How We Make Money — Full Transparency",
  description:
    "MyClearDebt is free for consumers. We make money from provider subscriptions. Here is exactly how our business model works.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal md:text-4xl">
        How We Make Money
      </h1>
      <p className="mt-4 text-lg text-charcoal-light">
        We believe you deserve to know exactly how a site that helps you with
        your money actually makes its money. Here is the full picture.
      </p>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-charcoal">
          What We Charge Consumers
        </h2>
        <div className="mt-4 rounded-xl border-2 border-teal bg-teal/5 p-6 text-center">
          <p className="text-3xl font-bold text-teal">$0</p>
          <p className="mt-2 text-charcoal-light">
            Always. We will never charge consumers a fee for using MyClearDebt.
            All our guides, tools, comparisons, and provider information are
            free.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-charcoal">
          How We Actually Make Money
        </h2>
        <p className="mt-4 text-charcoal-light">
          Debt relief providers pay us for enhanced profiles on our directory.
          Here are the tiers:
        </p>
        <div className="mt-6 space-y-4">
          <div className="rounded-lg border border-cream bg-white p-6">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-charcoal">Free Listing</h3>
              <span className="text-lg font-bold text-teal">$0/mo</span>
            </div>
            <p className="mt-2 text-sm text-charcoal-light">
              Basic profile with name, license verification, location, and
              contact information. Every provider starts here.
            </p>
          </div>
          <div className="rounded-lg border border-teal/30 bg-white p-6">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-charcoal">Verified</h3>
              <span className="text-lg font-bold text-teal">$49/mo</span>
            </div>
            <p className="mt-2 text-sm text-charcoal-light">
              Enhanced profile with logo, photos, detailed service descriptions,
              specialties, languages, and a &quot;MyClearDebt Verified&quot;
              badge indicating additional vetting.
            </p>
          </div>
          <div className="rounded-lg border border-amber/30 bg-white p-6">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold text-charcoal">Premium</h3>
              <span className="text-lg font-bold text-amber">$149/mo</span>
            </div>
            <p className="mt-2 text-sm text-charcoal-light">
              Featured placement in search results, inclusion in blog content
              and guides, priority lead alerts, and analytics dashboard.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-charcoal">
          What This Means for You
        </h2>
        <div className="mt-4 space-y-4">
          <div className="flex gap-3">
            <span className="mt-1 text-teal">&#10003;</span>
            <p className="text-charcoal-light">
              <strong className="text-charcoal">
                Paying providers are clearly labeled.
              </strong>{" "}
              Any &quot;Featured&quot; or &quot;Premium&quot; placement is
              clearly marked so you know which providers pay for visibility.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="mt-1 text-teal">&#10003;</span>
            <p className="text-charcoal-light">
              <strong className="text-charcoal">
                Verification is never for sale.
              </strong>{" "}
              License verification is based on government records, not payment
              tier. A free provider with a verified license outranks a paid
              provider without one.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="mt-1 text-teal">&#10003;</span>
            <p className="text-charcoal-light">
              <strong className="text-charcoal">
                Reviews are never hidden.
              </strong>{" "}
              Negative reviews are displayed regardless of a provider&apos;s
              payment tier. Providers can respond to reviews, but they
              can&apos;t remove them.
            </p>
          </div>
          <div className="flex gap-3">
            <span className="mt-1 text-teal">&#10003;</span>
            <p className="text-charcoal-light">
              <strong className="text-charcoal">
                Our guides are unbiased.
              </strong>{" "}
              Our educational content is written without influence from paying
              providers. We recommend options, not specific companies.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-xl bg-cream p-8">
        <h2 className="text-xl font-bold text-charcoal">
          Questions About Our Model?
        </h2>
        <p className="mt-3 text-charcoal-light">
          We&apos;re committed to full transparency. If you have questions about
          how we operate, reach out at{" "}
          <span className="text-teal">info@mycleardebt.com</span>.
        </p>
        <div className="mt-4">
          <Link
            href="/about"
            className="text-sm font-medium text-teal hover:text-teal-dark"
          >
            Learn more about us &rarr;
          </Link>
        </div>
      </section>
    </article>
  );
}
