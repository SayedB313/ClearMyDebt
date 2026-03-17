import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How We Make Money — Full Transparency",
  description:
    "MyClearDebt is free for consumers. We make money from provider subscriptions. Here is exactly how our business model works.",
  path: "/how-we-work",
});

export default function HowWeWorkPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">How We Make Money</h1>
      <p className="mt-4 text-charcoal-light">
        MyClearDebt is completely free for consumers. We never charge you a
        penny. Here is exactly how we sustain this service.
      </p>
    </div>
  );
}
