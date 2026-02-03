"use client";

import { forwardRef, HTMLAttributes } from "react";

type BadgeVariant = "primary" | "secondary" | "tertiary" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary:
    "bg-accent-primary/10 text-accent-primary border-accent-primary/20",
  secondary:
    "bg-accent-secondary/10 text-accent-secondary border-accent-secondary/20",
  tertiary:
    "bg-accent-tertiary/10 text-accent-tertiary border-accent-tertiary/20",
  outline: "bg-transparent text-foreground-muted border-border",
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
