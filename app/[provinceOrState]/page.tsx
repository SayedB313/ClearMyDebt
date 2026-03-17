interface Props {
  params: Promise<{ provinceOrState: string }>;
}

export default async function ProvinceStatePage({ params }: Props) {
  const { provinceOrState } = await params;
  const title = provinceOrState
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">
        Debt Relief in {title}
      </h1>
      <p className="mt-4 text-charcoal-light">
        Find verified debt relief providers and understand your options in{" "}
        {title}.
      </p>
    </div>
  );
}
