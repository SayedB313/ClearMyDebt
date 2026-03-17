import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MyClearDebt — Know Before You Owe",
    template: "%s | MyClearDebt",
  },
  description:
    "Compare debt relief options, find verified providers, and understand your path out of debt. Free, unbiased, education-first.",
  metadataBase: new URL("https://mycleardebt.com"),
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "MyClearDebt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${inter.variable} font-sans antialiased`}>
        <header className="border-b border-cream bg-white">
          <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-bold text-teal">
              My<span className="text-teal-light">Clear</span>Debt
            </Link>
            <div className="flex items-center gap-6 text-sm text-charcoal-light">
              <Link href="/options" className="hover:text-teal">
                Your Options
              </Link>
              <Link href="/quiz" className="hover:text-teal">
                Quiz
              </Link>
              <Link href="/blog" className="hover:text-teal">
                Blog
              </Link>
              <Link href="/scam-alert" className="hover:text-teal">
                Scam Alert
              </Link>
              <Link
                href="/for-providers"
                className="rounded-full bg-teal px-4 py-2 text-white hover:bg-teal-dark"
              >
                For Providers
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="border-t border-cream bg-cream">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div>
                <p className="font-bold text-teal">MyClearDebt</p>
                <p className="mt-2 text-sm text-charcoal-light">
                  Know before you owe.
                </p>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Learn</p>
                <div className="mt-2 flex flex-col gap-1 text-sm text-charcoal-light">
                  <Link href="/options">Your Options</Link>
                  <Link href="/quiz">Find Your Path</Link>
                  <Link href="/guides">Guides</Link>
                  <Link href="/blog">Blog</Link>
                </div>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Trust</p>
                <div className="mt-2 flex flex-col gap-1 text-sm text-charcoal-light">
                  <Link href="/how-we-work">How We Make Money</Link>
                  <Link href="/scam-alert">Spot a Scam</Link>
                  <Link href="/debt-report">Debt Report</Link>
                  <Link href="/about">About Us</Link>
                </div>
              </div>
              <div>
                <p className="font-semibold text-charcoal">Providers</p>
                <div className="mt-2 flex flex-col gap-1 text-sm text-charcoal-light">
                  <Link href="/for-providers">Claim Your Profile</Link>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-charcoal/10 pt-6 text-xs text-charcoal-light">
              <p>
                MyClearDebt is not a debt relief provider. We do not provide
                financial or legal advice. Only Licensed Insolvency Trustees can
                administer consumer proposals and bankruptcies in Canada. We do
                not charge consumers any fees.
              </p>
              <div className="mt-3 flex flex-wrap gap-4">
                <a
                  href="https://www.ic.gc.ca/eic/site/bsf-osb.nsf/eng/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OSB (Canada)
                </a>
                <a
                  href="https://www.consumerfinance.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CFPB (US)
                </a>
                <a
                  href="https://www.ftc.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FTC (US)
                </a>
                <span className="text-charcoal/30">|</span>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
                <Link href="/how-we-work">How We Make Money</Link>
              </div>
              <p className="mt-3">
                &copy; {new Date().getFullYear()} MyClearDebt. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
