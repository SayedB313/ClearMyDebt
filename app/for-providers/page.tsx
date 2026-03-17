import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "For Providers — Claim Your Profile",
  description:
    "Licensed Insolvency Trustees, bankruptcy lawyers, and credit counselors: claim your free profile on MyClearDebt and connect with consumers seeking help.",
  path: "/for-providers",
});

export default function ForProvidersPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-charcoal">For Providers</h1>
      <p className="mt-4 text-charcoal-light">
        Claim your free profile on MyClearDebt. We verify every license against
        official government registers so consumers know they can trust you.
      </p>
    </div>
  );
}
