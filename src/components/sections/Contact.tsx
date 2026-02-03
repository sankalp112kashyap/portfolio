"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/data";
import {
  Section,
  SectionHeader,
  Button,
  SocialLinks,
  FadeInWhenVisible,
} from "@/components/ui";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    // For now, we'll just simulate a submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <Section id="contact" withGlow>
      <SectionHeader
        title="Let's Connect"
        subtitle="Whether you have a project in mind, want to collaborate on research, or just want to say hello — I'd love to hear from you."
        align="center"
      />

      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <FadeInWhenVisible className="lg:col-span-2 space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Get in Touch
              </h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-background-secondary border border-border hover:border-accent-primary/50 transition-colors group"
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
            </div>

            {/* Location */}
            <a
              href={personalInfo.locationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-background-secondary border border-border hover:border-accent-primary/50 transition-colors group"
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
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Connect Online
              </h3>
              <SocialLinks iconSize="md" className="flex-wrap" />
            </div>

            {/* Availability */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10 border border-accent-primary/20">
              <div className="flex items-center gap-2 mb-2">
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
          </FadeInWhenVisible>

          {/* Contact Form */}
          <FadeInWhenVisible delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent-primary transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background-secondary border border-border text-foreground placeholder:text-foreground-muted focus:outline-none focus:border-accent-primary transition-colors resize-none"
                  placeholder="Tell me about your project, research idea, or just say hello..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                icon={<Send className="w-4 h-4" />}
                iconPosition="right"
                isLoading={isSubmitting}
                className="w-full sm:w-auto"
              >
                Send Message
              </Button>
            </form>

            {/* Quick Links */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-foreground-muted mb-4">
                Want to learn more?
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary border border-border text-sm text-foreground hover:border-accent-primary/50 transition-colors"
                >
                  View Resume
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://linkedin.com/in/sankalp-kashyap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary border border-border text-sm text-foreground hover:border-accent-primary/50 transition-colors"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </Section>
  );
}
