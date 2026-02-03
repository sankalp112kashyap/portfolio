"use client";

import { motion } from "framer-motion";
import {
  Plane,
  BookOpen,
  Camera,
  Quote,
  Music,
  Coffee,
  Mountain,
} from "lucide-react";
import { personalInterests, favoriteQuotes } from "@/lib/data";
import { Section, SectionHeader, Card, FadeInWhenVisible } from "@/components/ui";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  plane: Plane,
  "book-open": BookOpen,
  camera: Camera,
  music: Music,
  coffee: Coffee,
  mountain: Mountain,
};

export function Personal() {
  return (
    <Section id="personal" withGrid>
      <SectionHeader
        title="Beyond Code"
        subtitle="When I'm not coding, you'll find me exploring these passions that keep me inspired and creative."
      />

      {/* Interests */}
      <FadeInWhenVisible className="mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {personalInterests.map((interest, index) => {
            const Icon = iconMap[interest.icon] || Coffee;
            return (
              <motion.div
                key={interest.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card variant="interactive" padding="lg" className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-tertiary/20 to-accent-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-accent-tertiary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {interest.name}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {interest.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </FadeInWhenVisible>

      {/* Favorite Quotes */}
      <FadeInWhenVisible delay={0.2}>
        <div className="relative">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Quote className="w-5 h-5 text-accent-primary" />
            Quotes I Live By
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {favoriteQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-background-secondary border border-border relative group hover:border-accent-primary/30 transition-colors"
              >
                {/* Quote Mark */}
                <span className="absolute top-4 right-4 text-4xl font-serif text-accent-primary/20 group-hover:text-accent-primary/40 transition-colors">
                  "
                </span>

                <blockquote className="text-foreground-muted italic mb-4 relative z-10">
                  "{quote.text}"
                </blockquote>
                <cite className="text-sm text-accent-primary not-italic font-medium">
                  — {quote.author}
                </cite>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Fun Facts / Currently */}
      <FadeInWhenVisible delay={0.3} className="mt-16">
        <div className="p-8 rounded-2xl bg-gradient-to-br from-accent-primary/5 via-transparent to-accent-secondary/5 border border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
            What I'm Up To
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Currently Reading",
                value: "Add your book",
                icon: BookOpen,
              },
              {
                label: "Currently Learning",
                value: "Vision-Language Models",
                icon: Coffee,
              },
              {
                label: "Next Travel Destination",
                value: "Add destination",
                icon: Plane,
              },
              {
                label: "Recent Hobby",
                value: "Add hobby",
                icon: Camera,
              },
            ].map((item, index) => (
              <div key={item.label} className="text-center">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-5 h-5 text-foreground-muted" />
                </div>
                <p className="text-xs text-foreground-muted mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </FadeInWhenVisible>
    </Section>
  );
}
