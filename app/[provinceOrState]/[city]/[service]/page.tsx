interface Props {
  params: Promise<{
    provinceOrState: string;
    city: string;
    service: string;
  }>;
}

export default async function CityServicePage({ params }: Props) {
  const { provinceOrState, city, service } = await params;
  const cityTitle = city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const serviceTitle = service
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
  const provinceTitle = provinceOrState
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">
        {serviceTitle} in {cityTitle}, {provinceTitle}
      </h1>
      <p className="mt-4 text-charcoal-light">
        Find verified {serviceTitle.toLowerCase()} providers in {cityTitle}.
        Compare fees, reviews, and credentials.
      </p>
    </div>
  );
}
