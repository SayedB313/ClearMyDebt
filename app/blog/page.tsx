import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Blog — Debt Relief Education & Resources",
  description:
    "Expert articles on consumer proposals, bankruptcy, debt consolidation, credit counseling, and managing debt in Canada and the US.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">Blog</h1>
      <p className="mt-4 text-charcoal-light">
        Expert articles on debt relief options, financial recovery, and
        protecting yourself from scams.
      </p>
    </div>
  );
}
