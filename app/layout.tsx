import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { FloatingElements } from "@/components/ui/floating-elements"
import { MatrixRain } from "@/components/ui/matrix-rain"
import { AccessibilityFeatures } from "@/components/ui/accessibility-features"
import { PerformanceMonitor } from "@/components/ui/performance-monitor"
import { ErrorBoundary } from "@/components/ui/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jawher Belhaj - Enterprise Linux Solutions | IT Specialist & AI Developer",
  description:
    "Enterprise-grade Linux solutions and AI development services. Professional IT specialist with 5+ years experience in system administration, network security, and DevOps engineering. Serving Fortune 500 companies and startups.",
  keywords: [
    "Enterprise Linux Developer",
    "IT Specialist",
    "System Administration",
    "Network Security",
    "AI Development",
    "DevOps Engineering",
    "Linux Consultant",
    "Enterprise Solutions",
    "Tunisia",
    "Remote Work",
  ],
  authors: [{ name: "Jawher Belhaj", url: "https://linkedin.com/in/jawher-belhaj-2147031a5" }],
  creator: "Jawher Belhaj",
  publisher: "Jawher Belhaj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jawher-belhaj.vercel.app",
    title: "Jawher Belhaj - Enterprise Linux Solutions",
    description:
      "Professional portfolio showcasing enterprise-grade Linux development, AI solutions, and IT consulting services.",
    siteName: "Jawher Belhaj - Linux Developer",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jawher Belhaj - Enterprise Linux Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawher Belhaj - Enterprise Linux Solutions",
    description:
      "Professional portfolio showcasing enterprise-grade Linux development, AI solutions, and IT consulting services.",
    creator: "@Jawher_Belhaj",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="canonical" href="https://jawher-belhaj.vercel.app" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jawher Belhaj",
              jobTitle: "IT Specialist & Linux Developer",
              description:
                "Enterprise Linux solutions specialist with expertise in system administration, AI development, and DevOps engineering.",
              url: "https://jawher-belhaj.vercel.app",
              sameAs: [
                "https://linkedin.com/in/jawher-belhaj-2147031a5",
                "https://github.com/jawbelhaj",
                "https://twitter.com/Jawher_Belhaj",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Tunis",
                addressCountry: "Tunisia",
              },
              email: "jawbelhaj@gmail.com",
              telephone: "+216-94-722-173",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ScrollProgress />
          <MatrixRain />
          <FloatingElements />
          <AccessibilityFeatures />
          <PerformanceMonitor />
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
