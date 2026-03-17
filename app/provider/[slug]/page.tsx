interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProviderPage({ params }: Props) {
  const { slug } = await params;
  const title = slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">{title}</h1>
      <p className="mt-4 text-charcoal-light">Provider profile coming soon.</p>
    </div>
  );
}
