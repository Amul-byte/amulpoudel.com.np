"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, FileText, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import heroData from "@/data/hero.json";

// Dynamically import components that use browser APIs
const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  {
    ssr: false,
    loading: () => <div className="h-[60px]">{heroData.roles[0]}</div>,
  }
);

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToAbout = () => {
    if (typeof document !== "undefined") {
      const aboutSection = document.querySelector("#about");
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Create sequence for TypeAnimation from roles
  const sequence = heroData.roles.flatMap((role) => [role, 1000]).flat();

  return (
    <section id="home" className="home-section relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
          <motion.div
            className="space-y-6 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {heroData.greeting}{" "}
              <span className="inline-block animate-wave origin-[70%_70%]">👋🏻</span>
              <br />
              I&apos;m <span className="text-primary">{heroData.name}</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl font-medium text-muted-foreground h-[60px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {isMounted && (
                <TypeAnimation
                  sequence={sequence}
                  wrapper="span"
                  speed={50}
                  repeat={Number.POSITIVE_INFINITY}
                />
              )}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href={heroData.resumeLink} target="_blank" rel="noopener noreferrer">
                <Button className="resume-btn group w-full sm:w-auto">
                  <span className="flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    {heroData.resumeButton}
                  </span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 hover:border-primary hover:text-primary transition-all"
                >
                  <span className="flex items-center">
                    {heroData.contactButton}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="https://github.com/Amul-byte" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="tech-icons"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Github className="h-6 w-6" />
                </motion.div>
              </Link>
              <Link
                href="https://www.linkedin.com/in/amulpoudel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  className="tech-icons"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="h-6 w-6" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          onClick={scrollToAbout}
        >
          <ChevronDown className="h-8 w-8 text-primary animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
