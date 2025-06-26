import { ResponsiveHeroSection } from "@/components/responsive-hero-section"
import { ResponsiveAboutSection } from "@/components/responsive-about-section"
import { ResponsiveSkillsSection } from "@/components/responsive-skills-section"
import { ResponsiveProjectsSection } from "@/components/responsive-projects-section"
import { ResponsiveExperienceSection } from "@/components/responsive-experience-section"
import { ResponsiveCertificationsSection } from "@/components/responsive-certifications-section"
import { ResponsiveContactSection } from "@/components/responsive-contact-section"
import { ResponsiveNav } from "@/components/responsive-nav"
import { ResponsiveFooter } from "@/components/responsive-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <ResponsiveNav />
      <main role="main" tabIndex={-1}>
        <ResponsiveHeroSection />
        <ResponsiveAboutSection />
        <ResponsiveSkillsSection />
        <ResponsiveProjectsSection />
        <ResponsiveExperienceSection />
        <ResponsiveCertificationsSection />
        <ResponsiveContactSection />
      </main>
      <ResponsiveFooter />
    </div>
  )
}
