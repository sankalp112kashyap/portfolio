"use client";

import { forwardRef } from "react";

// Generate a consistent hash from a string
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Predefined gradient pairs that look professional
const gradientPairs = [
  { from: "from-violet-600/30", to: "to-indigo-600/30", accent: "text-violet-400" },
  { from: "from-blue-600/30", to: "to-cyan-600/30", accent: "text-blue-400" },
  { from: "from-emerald-600/30", to: "to-teal-600/30", accent: "text-emerald-400" },
  { from: "from-amber-600/30", to: "to-orange-600/30", accent: "text-amber-400" },
  { from: "from-rose-600/30", to: "to-pink-600/30", accent: "text-rose-400" },
  { from: "from-purple-600/30", to: "to-fuchsia-600/30", accent: "text-purple-400" },
  { from: "from-cyan-600/30", to: "to-blue-600/30", accent: "text-cyan-400" },
  { from: "from-indigo-600/30", to: "to-violet-600/30", accent: "text-indigo-400" },
];

// Category-specific gradients for more semantic meaning
const categoryGradients: Record<string, { from: string; to: string; accent: string }> = {
  aws: { from: "from-orange-600/30", to: "to-amber-600/30", accent: "text-orange-400" },
  research: { from: "from-violet-600/30", to: "to-purple-600/30", accent: "text-violet-400" },
  bank: { from: "from-blue-600/30", to: "to-indigo-600/30", accent: "text-blue-400" },
  ai: { from: "from-purple-600/30", to: "to-pink-600/30", accent: "text-purple-400" },
  web: { from: "from-cyan-600/30", to: "to-blue-600/30", accent: "text-cyan-400" },
  systems: { from: "from-emerald-600/30", to: "to-teal-600/30", accent: "text-emerald-400" },
  satellite: { from: "from-slate-600/30", to: "to-zinc-600/30", accent: "text-slate-400" },
  health: { from: "from-rose-600/30", to: "to-red-600/30", accent: "text-rose-400" },
  blockchain: { from: "from-amber-600/30", to: "to-yellow-600/30", accent: "text-amber-400" },
};

interface GradientThumbnailProps {
  text: string;
  category?: string;
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const GradientThumbnail = forwardRef<HTMLDivElement, GradientThumbnailProps>(
  ({ text, category, size = "md", showIcon = true, icon, className = "" }, ref) => {
    // Determine gradient based on category or text hash
    const gradient = category && categoryGradients[category.toLowerCase()]
      ? categoryGradients[category.toLowerCase()]
      : gradientPairs[hashString(text) % gradientPairs.length];

    const sizeStyles = {
      sm: "w-10 h-10 rounded-lg",
      md: "w-12 h-12 rounded-xl",
      lg: "w-16 h-16 rounded-xl",
    };

    const iconSizeStyles = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-7 h-7",
    };

    // Get initials from text
    const initials = text
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    return (
      <div
        ref={ref}
        className={`${sizeStyles[size]} bg-gradient-to-br ${gradient.from} ${gradient.to} flex items-center justify-center shrink-0 ${className}`}
      >
        {showIcon && icon ? (
          <div className={`${iconSizeStyles[size]} ${gradient.accent}`}>{icon}</div>
        ) : (
          <span className={`text-xs font-semibold ${gradient.accent}`}>{initials}</span>
        )}
      </div>
    );
  }
);

GradientThumbnail.displayName = "GradientThumbnail";

// Larger project thumbnail with abstract pattern
interface ProjectThumbnailProps {
  title: string;
  category?: string;
  className?: string;
}

export const ProjectThumbnail = forwardRef<HTMLDivElement, ProjectThumbnailProps>(
  ({ title, category, className = "" }, ref) => {
    const gradient = category && categoryGradients[category.toLowerCase()]
      ? categoryGradients[category.toLowerCase()]
      : gradientPairs[hashString(title) % gradientPairs.length];

    return (
      <div
        ref={ref}
        className={`relative w-full h-32 rounded-xl overflow-hidden bg-gradient-to-br ${gradient.from} ${gradient.to} ${className}`}
      >
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id={`pattern-${hashString(title)}`}
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.3" />
              </pattern>
            </defs>
            <rect
              width="100"
              height="100"
              fill={`url(#pattern-${hashString(title)})`}
            />
          </svg>
        </div>
        {/* Subtle geometric accent */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white/5" />
        <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-white/5" />
      </div>
    );
  }
);

ProjectThumbnail.displayName = "ProjectThumbnail";
