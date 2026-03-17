import type { Metadata } from "next";

const BASE_URL = "https://mycleardebt.com";

/**
 * Generate page metadata with hreflang support.
 * Canada (en-CA) is default; US (en-US) added when US pages exist.
 */
export function pageMetadata({
  title,
  description,
  path,
  hasUsVersion = false,
}: {
  title: string;
  description: string;
  path: string;
  hasUsVersion?: boolean;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  const alternates: Metadata["alternates"] = {
    canonical: url,
    languages: {
      "en-CA": url,
      ...(hasUsVersion ? { "en-US": url } : {}),
      "x-default": url,
    },
  };

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
  };
}
