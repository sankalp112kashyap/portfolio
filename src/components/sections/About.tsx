"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Award, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Section, SectionHeader, FadeInWhenVisible } from "@/components/ui";

export function About() {
  const stats = [
    { label: "Years of Experience", value: "4+" },
    { label: "Projects Completed", value: "15+" },
    { label: "GPA at UC Davis", value: "4.0" },
    { label: "Companies Worked", value: "5" },
  ];

  return (
    <Section id="about" withGlow>
      <SectionHeader
        title="About Me"
        subtitle="Get to know my journey, passions, and what drives me to build innovative solutions."
      />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Image & Quick Info */}
        <FadeInWhenVisible className="lg:col-span-2">
          <div className="relative">
            {/* Profile Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-background-secondary border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Quick Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 p-4 rounded-xl glass"
            >
              <a
                href={personalInfo.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent-primary transition-colors"
              >
                <MapPin className="w-4 h-4 text-accent-primary" />
                <span className="text-foreground">{personalInfo.location}</span>
                <ExternalLink className="w-3 h-3 text-foreground-muted" />
              </a>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="p-4 rounded-xl bg-background-secondary border border-border text-center"
              >
                <div className="text-2xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-foreground-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeInWhenVisible>

        {/* Bio Content */}
        <FadeInWhenVisible delay={0.2} className="lg:col-span-3 space-y-6">
          <div className="prose prose-invert max-w-none">
            {personalInfo.about.split("\n\n").map((paragraph, index) => (
              <p
                key={index}
                className="text-foreground-muted leading-relaxed text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="pt-6 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Key Highlights
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  title: "AWS DynamoDB Intern",
                  desc: "Designed encryption guardrails for 1M+ customer distributed DB",
                },
                {
                  icon: Award,
                  title: "Star of the Quarter",
                  desc: "Top performer among 1500+ employees at Danske Bank",
                },
                {
                  icon: Award,
                  title: "ISRO Collaboration",
                  desc: "Built satellite control systems for Parikshit nano-satellite",
                },
                {
                  icon: Award,
                  title: "RepoWise @ DECAL Lab",
                  desc: "NSF/Sloan funded LLM tool with 97.6% accuracy",
                },
              ].map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background-secondary/50 border border-border"
                >
                  <div className="p-2 rounded-lg bg-accent-primary/10">
                    <highlight.icon className="w-4 h-4 text-accent-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground text-sm">
                      {highlight.title}
                    </div>
                    <div className="text-xs text-foreground-muted mt-0.5">
                      {highlight.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </Section>
  );
}
