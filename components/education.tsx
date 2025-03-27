"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useTheme } from "@/components/theme-provider"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    "Prompt Engineering with ChatGPT",
    "Data Analysis with Python",
    "Scientific Computing with Python",
    "Data Visualization",
  ]

  const awards = ["DEAN's List - Fall 2024"]

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

  const { theme } = useTheme()

  return (
    <section id="education" className="py-20 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <div className="space-y-2">
            <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary dark:bg-primary/20">
              My Journey
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
              Education & Achievements
            </h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">
              My academic background and accomplishments
            </p>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-8 md:grid-cols-2 lg:gap-12">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            <motion.div variants={itemVariants}>
              <Card className="group overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      Texas State University
                    </CardTitle>
                    <Badge className="bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-white">
                      2024-2028
                    </Badge>
                  </div>
                  <CardDescription>Bachelor's degree, Computer Science</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Currently pursuing my degree with a focus on computer science fundamentals, programming, and
                    artificial intelligence. Specializing in data analysis and machine learning.
                  </p>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-500 rounded-full mt-4 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <Card className="group h-full overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Certifications</CardTitle>
                  <CardDescription>Professional development</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      >
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-blue-500"></div>
                        <div className="font-medium">{cert}</div>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-500 rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="group h-full overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">Awards & Honors</CardTitle>
                  <CardDescription>Academic achievements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {awards.map((award, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      >
                        <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-primary"></div>
                        <div className="font-medium">{award}</div>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-primary rounded-full mt-6 group-hover:w-full transition-all duration-500"></div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

