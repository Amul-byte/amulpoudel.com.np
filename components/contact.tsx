"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import contactData from "@/data/contact.json"
import Link from "next/link"
import type { JSX } from "react"

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Map icon strings to actual components
  const getIcon = (iconName: string, size = 6) => {
    const icons: Record<string, JSX.Element> = {
      Mail: <Mail className={`h-${size} w-${size} text-primary`} />,
      Phone: <Phone className={`h-${size} w-${size} text-blue-500`} />,
      MapPin: <MapPin className={`h-${size} w-${size} text-violet-500`} />,
      Github: <Mail className={`h-${size} w-${size} text-primary`} />,
      Linkedin: <Phone className={`h-${size} w-${size} text-blue-500`} />,
    }
    return icons[iconName] || <Mail className={`h-${size} w-${size} text-primary`} />
  }

  return (
    <section id="contact" className="section-padding relative py-20">
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <div className="space-y-2">
            <div className="section-subtitle">{contactData.subtitle}</div>
            <h2 className="section-title">{contactData.title}</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">{contactData.description}</p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 space-y-8">
                <h3 className="text-2xl font-bold text-primary">Contact Information</h3>

                {contactData.contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="rounded-full p-3 bg-muted/50">{getIcon(info.icon)}</div>
                    <div>
                      <h3 className="font-medium text-lg">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-4">Follow Me</h3>
                  <div className="flex gap-4">
                    {contactData.socialLinks.map((social, index) => (
                      <Link
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tech-icons w-10 h-10"
                      >
                        {getIcon(social.icon, 5)}
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

