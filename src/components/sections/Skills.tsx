"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { Section, SectionHeader, FadeInWhenVisible } from "@/components/ui";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="A comprehensive overview of the technologies and tools I work with across different domains."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <FadeInWhenVisible key={category.name} delay={categoryIndex * 0.1}>
            <div className="p-6 rounded-xl bg-background-secondary border border-border h-full">
              {/* Category Header */}
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
                {category.name}
              </h3>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                    }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-background border border-border text-foreground-muted hover:text-foreground hover:border-accent-primary/50 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>
        ))}
      </div>

      {/* Visual Skills Bar (Optional Enhancement) */}
      <FadeInWhenVisible delay={0.3} className="mt-12">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-accent-secondary/5 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            Core Expertise
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "AI & Machine Learning", level: 90 },
              { name: "Full-Stack Development", level: 85 },
              { name: "Distributed Systems", level: 80 },
              { name: "Research & Publications", level: 75 },
            ].map((expertise, index) => (
              <div key={expertise.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">
                    {expertise.name}
                  </span>
                  <span className="text-sm text-foreground-muted">
                    {expertise.level}%
                  </span>
                </div>
                <div className="h-2 bg-background rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${expertise.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
