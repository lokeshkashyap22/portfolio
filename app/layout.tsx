import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lokeshkashyap.me"),
  title: "Lokesh Kashyap | Portfolio",
  description:
    "Welcome to the portfolio of Lokesh Kashyap, a seasoned web developer and software engineer based in New Delhi. Discover innovative projects, insightful blog posts, and a professional journey in technology.",
  authors: [{ name: "Lokesh Kashyap" }],
  keywords: [
    "Lokesh Kashyap",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Projects",
    "Blog",
    "New Delhi",
    "Tech",
    "Programming",
    "Software",
  ],
  robots: "index, follow",
  applicationName: "Lokesh Kashyap Portfolio",
  publisher: "Lokesh Kashyap",
  referrer: "no-referrer-when-downgrade",

  // openGraph Metadata
  openGraph: {
    title: "Lokesh Kashyap | Portfolio",
    description:
      "Discover the portfolio of Lokesh Kashyap, a passionate web developer and software engineer from New Delhi. Dive into projects, read insightful blog posts, and learn more about my journey in tech.",
    images: [
      {
        url: "https://local-projects-lokesh.s3.us-east-1.amazonaws.com/portfolio/Screenshot+(81).png",
        alt: "Lokesh Kashyap Portfolio Open Graph Image",
      },
      {
        url: "https://local-projects-lokesh.s3.us-east-1.amazonaws.com/portfolio/Screenshot+(81).png",
        alt: "Lokesh Kashyap Portfolio Twitter Image",
      },
    ],
    url: "https://www.lokeshkashyap.me",
    type: "website",
  },

  // Additional metadata properties
  generator: "Next.js",
  category: "Technology",
};

export const viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: "no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
