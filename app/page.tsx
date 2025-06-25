import { MobileHeroSection } from "@/components/mobile-hero-section"
import { MobileAboutSection } from "@/components/mobile-about-section"
import { MobileSkillsSection } from "@/components/mobile-skills-section"
import { MobileProjectsSection } from "@/components/mobile-projects-section"
import { MobileExperienceSection } from "@/components/mobile-experience-section"
import { MobileCertificationsSection } from "@/components/mobile-certifications-section"
import { MobileContactSection } from "@/components/mobile-contact-section"
import { MobileNav } from "@/components/mobile-nav"
import { MobileFooter } from "@/components/mobile-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <MobileNav />
      <main role="main" tabIndex={-1}>
        <MobileHeroSection />
        <MobileAboutSection />
        <MobileSkillsSection />
        <MobileProjectsSection />
        <MobileExperienceSection />
        <MobileCertificationsSection />
        <MobileContactSection />
      </main>
      <MobileFooter />
    </div>
  )
}
