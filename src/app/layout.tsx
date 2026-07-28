import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://yiyixu.com";
const description =
  "Yiyi Xu is a University of Toronto Engineering Science student studying " +
  "robotics and artificial intelligence, currently working on LLMs and drone swarms.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yiyi Xu",
    template: "%s · Yiyi Xu",
  },
  description,
  applicationName: "Yiyi Xu",
  authors: [{ name: "Yiyi Xu", url: siteUrl }],
  creator: "Yiyi Xu",
  keywords: [
    "Yiyi Xu",
    "robotics",
    "artificial intelligence",
    "University of Toronto",
    "Engineering Science",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Yiyi Xu",
    title: "Yiyi Xu",
    description,
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Yiyi Xu — Robotics + AI @ University of Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yiyi Xu",
    description,
    images: ["/og.png"],
  },
};

// Tells Google the site name to show in search results.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Yiyi Xu",
  url: `${siteUrl}/`,
  inLanguage: "en-US",
  author: {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Yiyi Xu",
    alternateName: "徐义一",
    url: `${siteUrl}/`,
    image: `${siteUrl}/images/headshot.jpeg`,
    jobTitle: "Engineering Science student",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Toronto",
    },
    sameAs: [
      "https://github.com/yiyixuu",
      "https://www.linkedin.com/in/yiyi-xuu/",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <ClientBody>
        {children}
      </ClientBody>
    </html>
  );
}
