"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import aboutData from "@/data/about.json";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-muted/10 py-20">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <div className="space-y-2">
            <div className="section-subtitle">{aboutData.subtitle}</div>
            <h2 className="section-title">{aboutData.title}</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px]">
              <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border-2 border-blue-500/50 animate-pulse animation-delay-2000"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-primary">
                <div
                  className="w-full h-full bg-muted/50"
                  style={{
                    backgroundImage: "url('/profile.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-primary">I&apos;m {aboutData.name}</h3>
                {aboutData.description.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {aboutData.details.map((detail, index) => (
                    <div key={index}>
                      <h4 className="text-primary font-medium">{detail.label}:</h4>
                      <p className="text-muted-foreground">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
