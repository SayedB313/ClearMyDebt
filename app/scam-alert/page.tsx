import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "How to Spot a Debt Relief Scam in Canada",
  description:
    "Red flags to watch for when seeking debt help. Based on FTC, CFPB, and OSB guidance. Protect yourself from unlicensed operators and upfront-fee scams.",
  path: "/scam-alert",
});

export default function ScamAlertPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">
        How to Spot a Debt Relief Scam
      </h1>
      <p className="mt-4 text-lg text-charcoal-light">
        Debt relief scams cost Canadians millions every year. Before you talk to
        anyone about your debt, learn the warning signs that separate legitimate
        help from predatory operators.
      </p>
    </div>
  );
}
