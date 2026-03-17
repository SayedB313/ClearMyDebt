import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Debt Relief Options — Compare All Your Choices",
  description:
    "Compare consumer proposals, bankruptcy, debt consolidation, credit counseling, and more. Understand costs, timelines, and credit impact for each option.",
  path: "/options",
});

export default function OptionsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">
        Your Debt Relief Options
      </h1>
      <p className="mt-4 text-charcoal-light">
        Understanding your options is the first step. Each path has different
        costs, timelines, and credit impact. We break it all down so you can
        make an informed decision.
      </p>
    </div>
  );
}
