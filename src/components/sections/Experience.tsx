"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar, ChevronRight, Building2 } from "lucide-react";
import { experiences } from "@/lib/data";
import {
  Section,
  SectionHeader,
  Card,
  Badge,
  FadeInWhenVisible,
  GradientThumbnail,
} from "@/components/ui";

// Map company names to categories for gradient theming
const companyCategories: Record<string, string> = {
  aws: "aws",
  "amazon web services": "aws",
  decal: "research",
  "uc davis": "research",
  danske: "bank",
  infosys: "bank",
  upskill: "health",
  meteorological: "systems",
  imd: "systems",
};

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        title="Experience"
        subtitle="My professional journey through industry and research, building impactful solutions at scale."
      />

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-transparent transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <FadeInWhenVisible key={exp.id} delay={index * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent-primary transform -translate-x-1/2 border-4 border-background z-10" />

                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-8 md:pl-0`}>
                  <Card
                    variant="interactive"
                    className="relative overflow-hidden group"
                    hover
                  >
                    {/* Gradient Accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        {/* Company Thumbnail */}
                        <GradientThumbnail
                          text={exp.company}
                          category={Object.entries(companyCategories).find(
                            ([key]) => exp.company.toLowerCase().includes(key)
                          )?.[1]}
                          size="md"
                          icon={<Building2 className="w-5 h-5" />}
                        />
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 flex-wrap">
                            {exp.companyUrl ? (
                              <a
                                href={exp.companyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent-primary hover:text-accent-secondary transition-colors inline-flex items-center gap-1"
                              >
                                {exp.company}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <span className="text-accent-primary">
                                {exp.company}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-foreground-muted">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground-muted mb-4">{exp.description}</p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground-muted"
                        >
                          <ChevronRight className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </Section>
  );
}
