import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ekaya Hami — Nepali Folk-Fusion Ensemble",
  description: "Official website of Ekaya Hami, a Nepali folk-fusion musical group from Bhaktapur, Nepal. Signed under donob orie.",
  metadataBase: new URL("https://shrijann.github.io/ekaya-website/"),
  openGraph: {
    title: "Ekaya Hami — Nepali Folk-Fusion Ensemble",
    description: "Official website of Ekaya Hami, a Nepali folk-fusion musical group from Bhaktapur, Nepal. Signed under donob orie.",
    url: "https://shrijann.github.io/ekaya-website/",
    siteName: "Ekaya Hami",
    images: [
      {
        url: "/ekaya-website/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ekaya Hami Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekaya Hami — Nepali Folk-Fusion Ensemble",
    description: "Official website of Ekaya Hami, a Nepali folk-fusion musical group from Bhaktapur, Nepal. Signed under donob orie.",
    images: ["/ekaya-website/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#070708] text-neutral-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}