"use client";

import { forwardRef, HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  fullWidth?: boolean;
  withGlow?: boolean;
  withGrid?: boolean;
  className?: string;
  children?: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      id,
      fullWidth = false,
      withGlow = false,
      withGrid = false,
      className = "",
      children,
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        id={id}
        className={`section ${withGlow ? "radial-glow" : ""} ${
          withGrid ? "grid-bg" : ""
        } ${className}`}
      >
        <div className={fullWidth ? "" : "container"}>{children}</div>
      </section>
    );
  }
);

Section.displayName = "Section";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-foreground-muted max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
