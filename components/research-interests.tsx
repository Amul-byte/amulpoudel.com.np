"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, Microscope, Lightbulb, Network } from "lucide-react"
import researchData from "@/data/research.json"

export default function ResearchInterests() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Map icon strings to actual components
  const getIcon = (iconName: string, size = 8) => {
    const icons: Record<string, JSX.Element> = {
      Brain: <Brain className={`h-${size} w-${size} text-primary`} />,
      Lightbulb: <Lightbulb className={`h-${size} w-${size} text-blue-500`} />,
      Microscope: <Microscope className={`h-${size} w-${size} text-indigo-500`} />,
      Network: <Network className={`h-${size} w-${size} text-violet-500`} />,
    }
    return icons[iconName] || <Brain className={`h-${size} w-${size} text-primary`} />
  }

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
    <section id="research" className="section-padding relative py-20">
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
            <div className="section-subtitle">{researchData.subtitle}</div>
            <h2 className="section-title">{researchData.title}</h2>
            <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed">{researchData.description}</p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          {researchData.interests.map((interest, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-2">{getIcon(interest.icon)}</div>
                  <CardTitle className="text-xl">{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

