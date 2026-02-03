"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { personalInfo, navigation } from "@/lib/data";
import { SocialLinks } from "@/components/ui";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl font-bold text-foreground hover:text-accent-primary transition-colors inline-block mb-2"
            >
              <span className="gradient-text">theskdev</span>
            </a>
            <p className="text-sm text-foreground-muted max-w-xs">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <SocialLinks iconSize="sm" variant="compact" />
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Row */}
        <div className="flex flex-col items-center gap-4 text-sm text-foreground-muted">
          <p className="flex items-center gap-1">
            Made with{" "}
            <Heart className="w-4 h-4 text-accent-tertiary fill-accent-tertiary" />{" "}
            by {personalInfo.name}
          </p>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 p-3 rounded-full bg-background-secondary border border-border text-foreground-muted hover:text-foreground hover:border-accent-primary transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  );
}
