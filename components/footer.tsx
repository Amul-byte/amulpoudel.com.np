"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { motion } from "framer-motion"
import footerData from "@/data/footer.json"
import type { JSX } from "react"

export default function Footer() {
  // Map icon strings to actual components
  const getIcon = (iconName: string, size = 5) => {
    const icons: Record<string, JSX.Element> = {
      Github: <Github className={`h-${size} w-${size}`} />,
      Linkedin: <Linkedin className={`h-${size} w-${size}`} />,
      Mail: <Mail className={`h-${size} w-${size}`} />,
    }
    return icons[iconName] || <Mail className={`h-${size} w-${size}`} />
  }

  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground">{footerData.copyright}</p>
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>using Next.js & Tailwind CSS</span>
          </motion.div>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {footerData.socialLinks.map((social, index) => (
              <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="rounded-full p-2 bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {getIcon(social.icon)}
                  <span className="sr-only">{social.name}</span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

