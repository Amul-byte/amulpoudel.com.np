"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"
import certificationsData from "@/data/certifications.json"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-amber-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-amber-500/10 text-amber-500 dark:bg-amber-500/20">
              {certificationsData.subtitle}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-primary">
              {certificationsData.title}
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">{certificationsData.description}</p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {certificationsData.certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-amber-500/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-amber-500" />
                      <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/30">
                        {cert.date}
                      </Badge>
                    </div>
                    <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                    </Link>
                  </div>
                  <CardTitle className="text-lg mt-2 group-hover:text-amber-500 transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs border border-border/50 group-hover:border-amber-500/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

