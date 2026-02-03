"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Eye,
  Bot,
  Database,
  FileText,
  ExternalLink,
  Github,
} from "lucide-react";
import { publications, researchInterests } from "@/lib/data";
import {
  Section,
  SectionHeader,
  Card,
  Badge,
  FadeInWhenVisible,
} from "@/components/ui";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  brain: Brain,
  eye: Eye,
  bot: Bot,
  database: Database,
};

export function Research() {
  return (
    <Section id="research" withGlow>
      <SectionHeader
        title="Research"
        subtitle="My research focuses on advancing AI systems, with particular interest in multi-modal understanding and autonomous agents."
      />

      {/* Research Interests */}
      <FadeInWhenVisible className="mb-16">
        <h3 className="text-lg font-semibold text-foreground mb-6">
          Research Interests
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchInterests.map((interest, index) => {
            const Icon = iconMap[interest.icon] || Brain;
            return (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl bg-background-secondary border border-border hover:border-accent-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-accent-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {interest.name}
                </h4>
                <p className="text-sm text-foreground-muted leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </FadeInWhenVisible>

      {/* Publications */}
      {publications.length > 0 && (
        <FadeInWhenVisible delay={0.2}>
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Publications
          </h3>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card
                key={pub.id}
                variant="default"
                padding="lg"
                className="group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6 text-accent-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-primary transition-colors">
                      {pub.title}
                    </h4>
                    <p className="text-sm text-foreground-muted mb-2">
                      {pub.authors}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{pub.venue}</Badge>
                      <Badge variant="outline">{pub.year}</Badge>
                    </div>
                    {pub.abstract && (
                      <p className="text-sm text-foreground-muted line-clamp-2 mb-4">
                        {pub.abstract}
                      </p>
                    )}

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {pub.paperUrl && (
                        <a
                          href={pub.paperUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-accent-primary hover:text-accent-secondary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Paper
                        </a>
                      )}
                      {pub.codeUrl && (
                        <a
                          href={pub.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-accent-primary hover:text-accent-secondary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Coming Soon Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-6 text-center text-sm text-foreground-muted"
          >
            More publications coming soon. Currently working on research at DECAL Lab.
          </motion.p>
        </FadeInWhenVisible>
      )}
    </Section>
  );
}
