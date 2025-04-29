"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Award, ExternalLink, Calendar, CheckCircle2, Search, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All" },
    { id: "linux", name: "Linux" },
    { id: "cloud", name: "Cloud" },
    { id: "development", name: "Development" },
    { id: "devops", name: "DevOps" },
    { id: "networking", name: "Networking" },
  ]

  const certifications = [
    // Featured certifications first
    {
      title: "A Beginner's Guide to Linux Kernel Development (LFD103)",
      issuer: "The Linux Foundation",
      date: "March 10, 2025",
      description:
        "Successfully completed the Linux Kernel Development course, gaining foundational knowledge in Linux kernel architecture and development.",
      image: "/images/linux-certificate.jpg",
      certId: "LF-si2kpas1yb",
      verifyLink: "https://www.credly.com/badges/18fbbdbd-5242-4ac3-8e79-2759792e1a1a/public_url",
      featured: true,
      category: "linux",
    },
    {
      title: "Python Developer",
      issuer: "Sololearn",
      date: "February 20, 2025",
      description:
        "Successfully completed the Python Developer course, demonstrating theoretical and practical understanding of Python programming.",
      image: "/images/python-certificate.jpg",
      certId: "CC-FKITBP6R",
      verifyLink: "https://www.sololearn.com/en/certificates/CC-G2IPXK1S",
      featured: true,
      category: "development",
    },

    // Linux category
    {
      title: "Intermediate Shell Scripting with Bash",
      issuer: "CodeSignal",
      date: "February 24, 2025",
      description:
        "Successfully completed the Intermediate Shell Scripting with Bash course as part of the 'Mastering Shell Scripting with Bash' learning path.",
      image: "/images/bash-certificate.jpg",
      certId: "cm70f7kww001453413nyrk2bt/courses/559",
      verifyLink: "https://codesignal.com/learn/certificates/cm70f7kww001453413nyrk2bt/courses/559",
      category: "linux",
    },

    // Development category
    {
      title: "Advanced Git Features",
      issuer: "CodeSignal",
      date: "March 13, 2025",
      description:
        "Successfully completed the Advanced Git Features course as part of the 'Git Version Control for Beginners' learning path.",
      image: "/images/git-certificate.jpg",
      certId: "cm70f7kww001453413nyrk2bt/courses/659",
      verifyLink: "https://codesignal.com/learn/certificates/cm70f7kww001453413nyrk2bt/courses/659",
      category: "development",
    },
    {
      title: "Introduction to Front-end Development with ReactJS",
      issuer: "Coursera",
      date: "August 23, 2020",
      description:
        "Successfully completed the online non-credit project authorized by Deprecated Guided Projects and offered through Coursera.",
      image: "/images/reactjs-certificate.jpg",
      certId: "",
      verifyLink: "https://coursera.org/verify/ZQDX8GPMHULH",
      category: "development",
    },
    {
      title: "Big Data Engineer v2 Mastery Award",
      issuer: "IBM Skills Academy",
      date: "February 1, 2021",
      description:
        "Successfully passed the IBM Academic Certificate exam for Big Data Engineer v2, earning a Mastery Award Badge.",
      image: "/images/big-data-engineer.jpg",
      certId: "1058-1612-1716-1119",
      verifyLink: "https://www.credly.com/badges/e2394306-bab0-4f96-a661-3f78924199f1?source=linked_in_profile",
      category: "development",
    },

    // Cloud category
    {
      title: "AWS re/Start Graduate",
      issuer: "Amazon Web Services Training and Certification",
      date: "February 11, 2021",
      description:
        "Completed the AWS re/Start program, a skills development and job training program that prepares learners for careers in the cloud. Training featured real-world scenario-based learning, hands-on labs, and coursework.",
      image: "/images/aws-restart.png",
      certId: "",
      verifyLink: "https://www.credly.com/badges/a36f4bea-ed7e-49b6-ad77-1cbf0d85a9b7",
      category: "cloud",
    },
    {
      title: "Cloud Application Developer 2019 Mastery Award",
      issuer: "IBM Skills Academy",
      date: "February 10, 2021",
      description:
        "Successfully passed the IBM Academic Certificate exam for Cloud Application Developer, earning a Mastery Award Badge.",
      image: "/images/cloud-application-developer.jpg",
      certId: "6810-1612-9485-8699",
      verifyLink: "https://www.credly.com/badges/f4c9f567-6a5b-4c29-a504-3cd0e9671e5b",
      category: "cloud",
    },

    // DevOps category
    {
      title: "Getting Started with Jenkins",
      issuer: "Simplilearn",
      date: "March 10, 2025",
      description:
        "Successfully completed the Getting Started with Jenkins course, learning CI/CD pipeline creation and automation.",
      image: "/images/jenkins-certificate.jpg",
      certId: "8020515",
      verifyLink: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzM5IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODAyMDUxNV84MzU1MTQ3MTc0MTU3MzEwOTYzMS5wbmciLCJ1c2VybmFtZSI6Ikphd2hlciBCZWxoYWoifQ%3D%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4229%2FGetting-Started-with-Jenkins%2Fcertificate%2Fdownload-skillup&%24web_only=true",
      category: "devops",
    },
    {
      title: "Getting Started with Ansible",
      issuer: "Simplilearn",
      date: "March 10, 2025",
      description:
        "Successfully completed the Getting Started with Ansible course, learning infrastructure automation and configuration management.",
      image: "/images/ansible-certificate.jpg",
      certId: "8020630",
      verifyLink: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzQwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODAyMDYzMF84MzU1MTQ3MTc0MTU3NjkyNjI4Ni5wbmciLCJ1c2VybmFtZSI6Ikphd2hlciBCZWxoYWoifQ%3D%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4230%2FGetting-Started-with-Ansible%2Fcertificate%2Fdownload-skillup&%24web_only=true",
      category: "devops",
    },

    // Networking category
    {
      title: "HCIA Routing & Switching",
      issuer: "Huawei",
      date: "March 8, 2024",
      description:
        "Successfully completed the Huawei certification requirements and is recognized as a Routing & Switching specialist.",
      image: "/images/huawei-certificate.jpg",
      certId: "010100101808426411409",
      verifyLink: "http://support.huawei.com/learning/verifycertificate",
      category: "networking",
    },
  ]

  // Filter certifications based on search and category
  const filteredCertifications = certifications.filter((cert) => {
    const matchesSearch =
      cert.title.toLowerCase().includes(filter.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(filter.toLowerCase()) ||
      cert.description.toLowerCase().includes(filter.toLowerCase())

    const matchesCategory = activeCategory === "all" || cert.category === activeCategory

    return matchesSearch && matchesCategory
  })

  // Group certifications by year
  const certsByYear = filteredCertifications
    .filter((cert) => !cert.featured)
    .reduce((acc, cert) => {
      const year = new Date(cert.date).getFullYear().toString()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(cert)
      return acc
    }, {})

  // Sort years in descending order
  const sortedYears = Object.keys(certsByYear).sort((a, b) => Number.parseInt(b) - Number.parseInt(a))

  return (
    <section id="certifications" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/3 bg-green-500/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 right-0 w-1/4 h-1/4 bg-purple-500/5 blur-[100px] rounded-full" />

      <div
        ref={ref}
        className="container mx-auto px-4"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <span className="text-green-500">#</span> Professional Certifications
        </h2>

        {/* Search and filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search certifications..."
                className="pl-10 pr-4 py-2 w-full bg-gray-900/50 border border-green-500/20 rounded-md text-white focus:outline-none focus:border-green-500/50"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              {filter && (
                <button onClick={() => setFilter("")} className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <X className="h-4 w-4 text-gray-400 hover:text-white" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    activeCategory === category.id
                      ? "bg-green-500 text-black"
                      : "bg-gray-900 border border-green-500/20 text-gray-300 hover:bg-green-500/10"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured certifications */}
        {filteredCertifications.some((cert) => cert.featured) && (
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-8 text-gray-200 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-green-500" />
              Featured Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredCertifications
                .filter((cert) => cert.featured)
                .map((cert, index) => (
                  <div
                    key={`featured-${index}`}
                    className="bg-gray-900/50 border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)]"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3 relative h-48 md:h-auto">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="w-full h-full">
                              <Image
                                src={cert.image || "/placeholder.svg"}
                                alt={cert.title}
                                fill
                                className="object-cover p-2 hover:scale-105 transition-transform cursor-pointer"
                              />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl w-[90vw] max-h-[90vh] overflow-auto p-1">
                            <div className="relative w-full h-full min-h-[50vh]">
                              <Image
                                src={cert.image || "/placeholder.svg"}
                                alt={cert.title}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                          <Award className="h-5 w-5 text-green-500 flex-shrink-0" />
                        </div>

                        <div className="flex items-center gap-2 mt-2 text-gray-400 text-sm">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {cert.date}
                          </div>
                        </div>

                        <p className="mt-3 text-gray-300">{cert.description}</p>

                        {cert.certId && (
                          <div className="mt-2 text-sm text-gray-400">
                            Certificate ID: <span className="font-mono">{cert.certId}</span>
                          </div>
                        )}

                        {cert.verifyLink && (
                          <Button
                            variant="link"
                            className="mt-3 p-0 h-auto text-green-500 hover:text-green-400"
                            asChild
                          >
                            <a
                              href={cert.verifyLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1"
                            >
                              Verify <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All certifications by year */}
        {sortedYears.length > 0
          ? sortedYears.map((year) => (
              <div key={year} className="mb-12">
                <h3 className="text-xl font-bold mb-6 text-gray-200 border-b border-green-500/20 pb-2">{year}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certsByYear[year].map((cert, index) => (
                    <div
                      key={`${year}-${index}`}
                      className="bg-gray-900/50 border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,0,0.1)]"
                    >
                      <div className="relative h-40">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="w-full h-full">
                              <Image
                                src={cert.image || "/placeholder.svg"}
                                alt={cert.title}
                                fill
                                className="object-cover p-2 hover:scale-105 transition-transform cursor-pointer"
                              />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl w-[90vw] max-h-[90vh] overflow-auto p-1">
                            <div className="relative w-full h-full min-h-[50vh]">
                              <Image
                                src={cert.image || "/placeholder.svg"}
                                alt={cert.title}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                          <Badge variant="outline" className="bg-green-500/10 text-green-400 border-green-500/30">
                            {categories.find((cat) => cat.id === cert.category)?.name}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                          <span>{cert.issuer}</span>
                          <span>•</span>
                          <div className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {cert.date}
                          </div>
                        </div>

                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{cert.description}</p>

                        {cert.certId && (
                          <div className="mt-2 text-xs text-gray-400">
                            ID: <span className="font-mono">{cert.certId}</span>
                          </div>
                        )}

                        {cert.verifyLink && (
                          <div className="mt-2">
                            <Button
                              variant="link"
                              size="sm"
                              className="p-0 h-auto text-green-500 hover:text-green-400 text-xs"
                              asChild
                            >
                              <a
                                href={cert.verifyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1"
                              >
                                Verify <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          : filter && (
              <div className="text-center py-12 text-gray-400">
                No certifications found matching your search criteria.
              </div>
            )}
      </div>
    </section>
  )
}
