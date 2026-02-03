"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar, GraduationCap, BookOpen, FileText } from "lucide-react";
import { education } from "@/lib/data";
import {
  Section,
  SectionHeader,
  Card,
  Badge,
  FadeInWhenVisible,
} from "@/components/ui";

export function Education() {
  return (
    <Section id="education">
      <SectionHeader
        title="Education"
        subtitle="My academic journey and continuous pursuit of knowledge in computer science and AI."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <FadeInWhenVisible key={edu.id} delay={index * 0.15}>
            <Card
              variant="interactive"
              padding="lg"
              className="h-full group relative overflow-hidden"
            >
              {/* Gradient Border Top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary" />

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7 text-accent-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-accent-primary font-medium">{edu.field}</p>
                </div>
              </div>

              {/* Institution */}
              <div className="mb-4">
                {edu.institutionUrl ? (
                  <a
                    href={edu.institutionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-foreground hover:text-accent-primary transition-colors inline-flex items-center gap-2"
                  >
                    {edu.institution}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-lg font-medium text-foreground">
                    {edu.institution}
                  </span>
                )}
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-foreground-muted">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </div>
                {edu.gpa && (
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-foreground">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                )}
              </div>

              {/* Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-4 h-4 text-foreground-muted" />
                    <span className="text-sm font-medium text-foreground">
                      Relevant Coursework
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <Badge key={course} variant="outline">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="pt-4 border-t border-border">
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-foreground-muted"
                      >
                        <span className="text-accent-primary">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Transcript Link */}
              {edu.transcriptUrl && (
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href={edu.transcriptUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-secondary transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    View Transcript
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </Card>
          </FadeInWhenVisible>
        ))}
      </div>
    </Section>
  );
}
