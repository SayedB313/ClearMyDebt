import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "What Debt Relief Option Is Right for Me?",
  description:
    "Answer a few questions about your debt situation and get personalized recommendations for consumer proposals, bankruptcy, consolidation, or counseling.",
  path: "/quiz",
});

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">
        What Are My Options?
      </h1>
      <p className="mt-4 text-charcoal-light">
        Answer a few questions to get personalized recommendations based on your
        debt situation, province, and goals.
      </p>
      <div className="mt-8 rounded-lg border border-cream bg-cream/50 p-8 text-center text-charcoal-light">
        Interactive quiz coming soon.
      </div>
    </div>
  );
}
