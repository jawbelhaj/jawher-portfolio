import { EnterpriseHeroSection } from "@/components/enterprise-hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
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
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
