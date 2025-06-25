"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Award, ExternalLink, Calendar, Search, X } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function MobileCertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [filter, setFilter] = useState("")

  const certifications = [
    {
      title: "Linux Kernel Development",
      issuer: "Linux Foundation",
      date: "March 2025",
      image: "/images/linux-certificate.jpg",
      verifyLink: "https://www.credly.com/badges/18fbbdbd-5242-4ac3-8e79-2759792e1a1a/public_url",
      featured: true,
      category: "linux",
    },
    {
      title: "Python Developer",
      issuer: "Sololearn",
      date: "February 2025",
      image: "/images/python-certificate.jpg",
      verifyLink: "https://www.sololearn.com/en/certificates/CC-G2IPXK1S",
      featured: true,
      category: "development",
    },
    {
      title: "AWS re/Start Graduate",
      issuer: "Amazon Web Services",
      date: "February 2021",
      image: "/images/aws-restart.png",
      verifyLink: "https://www.credly.com/badges/a36f4bea-ed7e-49b6-ad77-1cbf0d85a9b7",
      category: "cloud",
    },
    {
      title: "HCIA Routing & Switching",
      issuer: "Huawei",
      date: "March 2024",
      image: "/images/huawei-certificate.jpg",
      verifyLink: "http://support.huawei.com/learning/verifycertificate",
      category: "networking",
    },
    {
      title: "Shell Scripting with Bash",
      issuer: "CodeSignal",
      date: "February 2025",
      image: "/images/bash-certificate.jpg",
      verifyLink: "https://codesignal.com/learn/certificates/cm70f7kww001453413nyrk2bt/courses/559",
      category: "linux",
    },
    {
      title: "Advanced Git Features",
      issuer: "CodeSignal",
      date: "March 2025",
      image: "/images/git-certificate.jpg",
      verifyLink: "https://codesignal.com/learn/certificates/cm70f7kww001453413nyrk2bt/courses/659",
      category: "development",
    },
  ]

  const filteredCertifications = certifications.filter(
    (cert) =>
      cert.title.toLowerCase().includes(filter.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(filter.toLowerCase()),
  )

  return (
    <section id="certifications" className="py-12 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-green-500/5" />

      <div
        ref={ref}
        className="container mx-auto px-4 mobile-safe"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.6s ease-out",
        }}
      >
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center flex items-center justify-center gap-2">
            <span className="text-green-500">#</span> Certifications
          </h2>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search certifications..."
              className="w-full pl-10 pr-10 py-3 bg-gray-900/50 border border-green-500/20 rounded-lg text-white focus:outline-none focus:border-green-500/50"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            {filter && (
              <button onClick={() => setFilter("")} className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <X className="h-4 w-4 text-gray-400 hover:text-white" />
              </button>
            )}
          </div>

          {/* Featured certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-200 flex items-center gap-2">
              <Award className="h-4 w-4 text-green-500" />
              Featured
            </h3>
            <div className="space-y-4">
              {filteredCertifications
                .filter((cert) => cert.featured)
                .map((cert, index) => (
                  <div
                    key={`featured-${index}`}
                    className="mobile-card bg-gray-900/50 border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/40 transition-all duration-300"
                  >
                    <div className="flex">
                      <div className="w-24 h-24 relative flex-shrink-0">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="w-full h-full">
                              <Image
                                src={cert.image || "/placeholder.svg"}
                                alt={cert.title}
                                fill
                                className="object-cover p-2 hover:scale-105 transition-transform cursor-pointer"
                                sizes="96px"
                              />
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-auto p-1">
                            <div className="relative w-full h-[60vh]">
                              <Image
                                src={cert.image || "/placeholder.svg"}
                                alt={cert.title}
                                fill
                                className="object-contain"
                                sizes="90vw"
                              />
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <div className="flex-1 p-4">
                        <h4 className="text-base font-bold text-white mb-1">{cert.title}</h4>
                        <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                        <div className="flex items-center text-gray-400 text-xs mb-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {cert.date}
                        </div>
                        {cert.verifyLink && (
                          <a
                            href={cert.verifyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-green-500 hover:text-green-400 text-xs"
                          >
                            Verify <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* All certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-200">All Certifications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCertifications
                .filter((cert) => !cert.featured)
                .map((cert, index) => (
                  <div
                    key={index}
                    className="mobile-card bg-gray-900/50 border border-green-500/20 rounded-lg overflow-hidden hover:border-green-500/40 transition-all duration-300"
                  >
                    <div className="relative h-32">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="w-full h-full">
                            <Image
                              src={cert.image || "/placeholder.svg"}
                              alt={cert.title}
                              fill
                              className="object-cover p-2 hover:scale-105 transition-transform cursor-pointer"
                              sizes="(max-width: 640px) 100vw, 50vw"
                            />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-auto p-1">
                          <div className="relative w-full h-[60vh]">
                            <Image
                              src={cert.image || "/placeholder.svg"}
                              alt={cert.title}
                              fill
                              className="object-contain"
                              sizes="90vw"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <div className="p-3">
                      <h4 className="text-sm font-bold text-white mb-1">{cert.title}</h4>
                      <p className="text-gray-400 text-xs mb-2">{cert.issuer}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-400 text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {cert.date}
                        </div>
                        {cert.verifyLink && (
                          <a
                            href={cert.verifyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:text-green-400 text-xs"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {filteredCertifications.length === 0 && (
            <div className="text-center py-8 text-gray-400">No certifications found matching your search.</div>
          )}
        </div>
      </div>
    </section>
  )
}
