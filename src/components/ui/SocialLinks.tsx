"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { socialLinks } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
  "graduation-cap": GraduationCap,
};

interface SocialLinksProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
  showLabels?: boolean;
  variant?: "default" | "compact";
}

const iconSizes = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function SocialLinks({
  className = "",
  iconSize = "md",
  showLabels = false,
  variant = "default",
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((link, index) => {
        const Icon = iconMap[link.icon] || ExternalLink;

        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className={`
              group flex items-center gap-2 text-foreground-muted
              hover:text-foreground transition-colors duration-200
              ${variant === "compact" ? "" : "p-2 rounded-lg hover:bg-white/5"}
            `}
            aria-label={link.name}
          >
            <Icon className={`${iconSizes[iconSize]} transition-transform group-hover:scale-110`} />
            {showLabels && (
              <span className="text-sm font-medium">{link.name}</span>
            )}
          </motion.a>
        );
      })}
    </div>
  );
}
