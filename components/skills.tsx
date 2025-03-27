"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Code,
  Database,
  BarChart,
  Terminal,
  Cpu,
  FileCode,
  Server,
  Globe,
  Brain,
  Lightbulb,
  Microscope,
  Network,
} from "lucide-react"
import { useEffect, useState } from "react"
import skillsData from "@/data/skills.json"
import type { JSX } from "react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Map icon strings to actual components
  const getIcon = (iconName: string, size = 30) => {
    const icons: Record<string, JSX.Element> = {
      Code: <Code size={size} />,
      FileCode: <FileCode size={size} />,
      Terminal: <Terminal size={size} />,
      Globe: <Globe size={size} />,
      Database: <Database size={size} />,
      Cpu: <Cpu size={size} />,
      BarChart: <BarChart size={size} />,
      Server: <Server size={size} />,
      Brain: <Brain size={size} />,
      Lightbulb: <Lightbulb size={size} />,
      Microscope: <Microscope size={size} />,
      Network: <Network size={size} />,
    }
    return icons[iconName] || <Code size={size} />
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
    <section id="skills" className="section-padding relative py-20">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <div className="space-y-2">
            <div className="section-subtitle">{skillsData.subtitle}</div>
            <h2 className="section-title">{skillsData.title}</h2>
          </div>
        </motion.div>

        {isMounted && (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            ref={ref}
          >
            {skillsData.techSkills.map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="tech-icons w-20 h-20 mb-2">{getIcon(tech.icon)}</div>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="space-y-2 mb-8">
            <div className="section-subtitle">{skillsData.toolsSubtitle}</div>
            <h2 className="section-title">{skillsData.toolsTitle}</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skillsData.tools.map((tool, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 rounded-full bg-muted/50 text-primary border border-primary/20 hover:bg-primary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

