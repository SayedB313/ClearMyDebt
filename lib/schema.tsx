/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * JSON-LD schema generators for SEO/AEO/GEO.
 * Every page should include relevant schema markup.
 *
 * The SchemaOrg component uses dangerouslySetInnerHTML to inject JSON-LD.
 * This is safe because the content is always generated server-side from
 * our own data structures — never from user input.
 */

export function SchemaOrg({ schema }: { schema: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MyClearDebt",
    url: "https://mycleardebt.com",
    logo: "https://mycleardebt.com/logo.png",
    description:
      "MyClearDebt helps consumers compare debt relief options and find verified, licensed providers. Education-first, free for consumers.",
    sameAs: [],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function localBusinessSchema(provider: {
  name: string;
  description?: string;
  address: { city: string; province: string; country: string };
  phone?: string;
  url?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: provider.name,
    description: provider.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: provider.address.city,
      addressRegion: provider.address.province,
      addressCountry: provider.address.country,
    },
    telephone: provider.phone,
    url: provider.url,
  };
}

export function articleSchema(article: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    image: article.image,
    publisher: organizationSchema(),
  };
}

export function howToSchema(howTo: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: howTo.name,
    description: howTo.description,
    step: howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
