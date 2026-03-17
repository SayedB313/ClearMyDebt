import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Canadian Debt Report — Quarterly Statistics & Trends",
  description:
    "Quarterly analysis of Canadian insolvency filings, consumer proposals, and bankruptcy trends using official CAIRP and OSB data.",
  path: "/debt-report",
});

export default function DebtReportPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">
        The State of Canadian Debt
      </h1>
      <p className="mt-4 text-charcoal-light">
        Quarterly analysis of insolvency filings, consumer proposals, and
        bankruptcy trends using official CAIRP and OSB data.
      </p>
      <div className="mt-8 rounded-lg border border-cream bg-cream/50 p-8 text-center text-charcoal-light">
        First quarterly report coming soon.
      </div>
    </div>
  );
}
