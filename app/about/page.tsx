import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About MyClearDebt",
  description:
    "MyClearDebt exists because too many people get ripped off when they are most vulnerable. We are an education-first directory helping consumers find verified debt relief providers.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">About MyClearDebt</h1>
      <p className="mt-4 text-charcoal-light">
        MyClearDebt exists because too many people get ripped off when they are
        most vulnerable. We are an education-first directory — not a debt relief
        company. Our mission is to help every Canadian and American understand
        their options before committing to anything.
      </p>
    </div>
  );
}
