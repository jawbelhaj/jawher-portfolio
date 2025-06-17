import { EnterpriseHeroSection } from "@/components/enterprise-hero-section"
import { EnhancedAboutSection } from "@/components/enhanced-about-section"
import { EnhancedSkillsSection } from "@/components/enhanced-skills-section"
import { EnhancedProjectsSection } from "@/components/enhanced-projects-section"
import { EnhancedExperienceSection } from "@/components/enhanced-experience-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ContactSection } from "@/components/contact-section"
import { MobileOptimizedNav } from "@/components/ui/mobile-optimized-nav"
import { Footer } from "@/components/footer"
import { Section508SkipLinks } from "@/components/ui/section-508-skip-links"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Section508SkipLinks />
      <MobileOptimizedNav />
      <main role="main" tabIndex={-1}>
        <EnterpriseHeroSection />
        <EnhancedAboutSection />
        <EnhancedSkillsSection />
        <EnhancedProjectsSection />
        <EnhancedExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
