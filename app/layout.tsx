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
  title: "Jawher Belhaj - IT Specialist & Linux Developer",
  description:
    "Professional IT Specialist and Linux Developer with expertise in system administration, network security, and AI development.",
  keywords: ["IT Specialist", "Linux Developer", "System Administration", "Network Security", "AI Development"],
  authors: [{ name: "Jawher Belhaj" }],
  creator: "Jawher Belhaj",
  publisher: "Jawher Belhaj",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#000000",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jawher-belhaj.vercel.app",
    title: "Jawher Belhaj - IT Specialist & Linux Developer",
    description:
      "Professional IT Specialist and Linux Developer with expertise in system administration, network security, and AI development.",
    siteName: "Jawher Belhaj Portfolio",
    images: [
      {
        url: "/images/fortune500-og-image.png",
        width: 1200,
        height: 630,
        alt: "Jawher Belhaj - IT Specialist & Linux Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jawher Belhaj - IT Specialist & Linux Developer | Professional Portfolio",
    description:
      "Professional IT Specialist and Linux Developer with expertise in system administration, network security, and AI development.",
    creator: "@Jawher_Belhaj",
    images: ["/images/fortune500-og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "fortune500-verification-code",
    yandex: "fortune500-yandex-verification",
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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Person", "ProfessionalService", "SoftwareApplication"],
              name: "Jawher Belhaj",
              jobTitle: "IT Specialist & Linux Developer",
              description:
                "Professional IT Specialist and Linux Developer with expertise in system administration, network security, and AI development.",
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
              serviceType: [
                "IT Services",
                "Linux Development",
                "System Administration",
                "Network Security",
                "AI Development",
              ],
              areaServed: ["Global", "Remote Worldwide"],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "IT Specialist",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Linux Development",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "System Administration",
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  name: "Network Security",
                },
              ],
              applicationCategory: "Software",
              operatingSystem: "Cross-platform",
              softwareVersion: "1.0.0",
              releaseNotes: "Initial release",
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
