import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://supershield.co.in'),
  
  title: {
    default: "Super Shield - Heat Free Sun | Premium Window Films Nagpur",
    template: "%s | Super Shield"
  },
  
  description: "Premium automotive window films, vinyl wrap & paint protection film in Nagpur. 20+ years expertise, UV rejection up to 99%, IR rejection 98%, 60 months warranty.",
  
  keywords: [
    "window film Nagpur",
    "car window tint Nagpur",
    "automotive window film",
    "vinyl wrap Nagpur",
    "paint protection film",
    "PPF Nagpur",
    "UV rejection film",
    "IR rejection film",
    "ceramic window tint",
    "car customization Nagpur",
    "Super Shield",
    "heat rejection film",
    "sunroof tint",
    "automotive films India"
  ],
  
  authors: [{ name: "Super Shield" }],
  creator: "Super Shield",
  publisher: "Super Shield",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://supershield.co.in",
    siteName: "Super Shield",
    title: "Super Shield - Premium Window Films, Vinyl Wrap & PPF Nagpur",
    description: "Premium automotive window films with 20+ years expertise. UV rejection up to 99%, 60 months warranty. Nagpur, Maharashtra.",
    images: [
      {
        url: "/images/cars/desert-red-supercar.jpg",
        width: 1200,
        height: 630,
        alt: "Super Shield Premium Window Films",
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Super Shield - Premium Window Films Nagpur",
    description: "Premium automotive window films, vinyl wrap & PPF. 20+ years expertise, UV rejection up to 99%.",
    images: ["/images/cars/desert-red-supercar.jpg"],
  },
  
  alternates: {
    canonical: "https://supershield.co.in",
  },
  
  category: "Automotive Services",
  
  other: {
    "contact:phone_number": "+91-9370665551",
    "contact:address": "Mayfair Apartment, Near All India Reporter, Dhantoli, Nagpur, Maharashtra 440012",
    "contact:locality": "Nagpur",
    "contact:region": "Maharashtra",
    "contact:country": "India",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#05060a" />
        <link rel="canonical" href="https://supershield.co.in" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
