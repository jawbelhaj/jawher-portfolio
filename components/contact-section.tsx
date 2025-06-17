"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions/contact"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      const result = await submitContactForm(formData)
      setSubmitResult(result)

      if (result.success) {
        // Reset form on success
        const form = document.getElementById("contact-form") as HTMLFormElement
        if (form) {
          form.reset()
        }
      }
    } catch (error) {
      setSubmitResult({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-green-500/5 blur-[100px] rounded-full" />

      <div
        ref={ref}
        className="container mx-auto px-4"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "none" : "translateY(20px)",
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <span className="text-green-500">#</span> Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-lg border border-green-500/20">
                  <Mail className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Email</h4>
                  <a href="mailto:jawbelhaj@gmail.com" className="text-gray-400 hover:text-green-500 transition-colors">
                    jawbelhaj@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-lg border border-green-500/20">
                  <Phone className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Phone</h4>
                  <a href="tel:+21694722173" className="text-gray-400 hover:text-green-500 transition-colors">
                    +216 94722173
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gray-900 p-3 rounded-lg border border-green-500/20">
                  <MapPin className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="text-gray-300 font-medium">Location</h4>
                  <p className="text-gray-400">Tunis, Tunisia</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6 text-white">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/jawbelhaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-3 rounded-lg border border-green-500/20 hover:bg-gray-800 hover:border-green-500/40 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-green-500" />
                </a>
                <a
                  href="https://www.linkedin.com/in/jawher-belhaj-2147031a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 p-3 rounded-lg border border-green-500/20 hover:bg-gray-800 hover:border-green-500/40 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-green-500" />
                </a>
                <a
                  href="https://x.com/Jawher_Belhaj"
                  className="bg-gray-900 p-3 rounded-lg border border-green-500/20 hover:bg-gray-800 hover:border-green-500/40 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-green-500" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Send a Message</h3>

            <form id="contact-form" action={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="bg-gray-900 border-green-500/20 focus:border-green-500/50 text-white"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-gray-900 border-green-500/20 focus:border-green-500/50 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-400">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  className="bg-gray-900 border-green-500/20 focus:border-green-500/50 text-white"
                  placeholder="What is this about?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-400">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="bg-gray-900 border-green-500/20 focus:border-green-500/50 text-white resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              {submitResult && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    submitResult.success
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitResult.success ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                  <span className="text-sm">{submitResult.message}</span>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
