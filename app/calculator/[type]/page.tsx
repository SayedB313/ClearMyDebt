interface Props {
  params: Promise<{ type: string }>;
}

export async function generateStaticParams() {
  return [
    { type: "consumer-proposal" },
    { type: "bankruptcy-cost" },
    { type: "debt-payoff" },
  ];
}

export default async function CalculatorPage({ params }: Props) {
  const { type } = await params;
  const title = type
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">{title} Calculator</h1>
      <p className="mt-4 text-charcoal-light">Calculator coming soon.</p>
    </div>
  );
}
