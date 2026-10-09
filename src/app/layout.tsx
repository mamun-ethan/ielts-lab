import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://ieltslabtangail.com"),
  title:
    "IELTS LAB Tangail | IELTS Training, Spoken English, Kids English & Study Abroad",
  description:
    "Achieve your dream IELTS band score with expert guidance at IELTS LAB Tangail. Offering Academic & General IELTS, Spoken English, Kids English, Mock Tests & Abroad Study Consultancy.",
  keywords: [
    "IELTS LAB Tangail",
    "IELTS coaching Tangail",
    "Spoken English Tangail",
    "Kids English Tangail",
    "Mock test Tangail",
    "Study Abroad Consultancy Tangail",
    "Sohel Rana",
  ],
  openGraph: {
    type: "website",
    url: "https://www.facebook.com/profile.php?id=61577687096983",
    title: "IELTS LAB Tangail | Expert IELTS & Spoken English Training",
    description:
      "Achieve your dream IELTS band score with expert guidance from IELTS LAB. Academic & General IELTS, Kids English, Mock test, Spoken English and personalized feedback.",
    images: [{ url: "/images/hero-banner.png" }],
  },
  icons: {
    icon: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
