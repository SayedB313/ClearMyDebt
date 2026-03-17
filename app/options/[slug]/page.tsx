interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "consumer-proposal" },
    { slug: "bankruptcy" },
    { slug: "debt-consolidation" },
    { slug: "credit-counseling" },
    { slug: "debt-settlement" },
    { slug: "debt-management-plan" },
  ];
}

export default async function OptionPage({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">{title}</h1>
      <p className="mt-4 text-charcoal-light">
        Detailed guide coming soon.
      </p>
    </div>
  );
}
