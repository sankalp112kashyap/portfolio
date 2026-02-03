"use client";

import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import {
  Section,
  SectionHeader,
  SocialLinks,
  FadeInWhenVisible,
} from "@/components/ui";

export function Contact() {
  return (
    <Section id="contact" withGlow>
      <SectionHeader
        title="Let's Connect"
        subtitle="Whether you have a project in mind, want to collaborate on research, or just want to say hello — I'd love to hear from you."
        align="center"
      />

      <div className="max-w-2xl mx-auto">
        <FadeInWhenVisible>
          <div className="flex flex-col items-center space-y-8">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 p-4 rounded-xl bg-background-secondary border border-border hover:border-accent-primary/50 transition-colors group w-full max-w-md"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-primary/10 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-accent-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground-muted">Email</p>
                <p className="text-foreground font-medium">
                  {personalInfo.email}
                </p>
              </div>
            </a>

            {/* Location */}
            <a
              href={personalInfo.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-background-secondary border border-border hover:border-accent-primary/50 transition-colors group w-full max-w-md"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-secondary/10 flex items-center justify-center group-hover:bg-accent-secondary/20 transition-colors">
                <MapPin className="w-5 h-5 text-accent-secondary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground-muted">Location</p>
                <p className="text-foreground font-medium">
                  {personalInfo.location}
                </p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-foreground-muted group-hover:text-accent-secondary transition-colors" />
            </a>

            {/* Social Links */}
            <div className="text-center">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Connect Online
              </h3>
              <SocialLinks iconSize="md" />
            </div>

            {/* Availability */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20 max-w-md w-full text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-sm font-medium text-foreground">
                  Open for Collaborations
                </span>
              </div>
              <p className="text-sm text-foreground-muted">
                I'm actively looking for collaborations in AI research
                and building AI-powered products.
              </p>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </Section>
  );
}
