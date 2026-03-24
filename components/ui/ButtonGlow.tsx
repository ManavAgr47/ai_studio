"use client";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonGlowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
}

export const ButtonGlow = forwardRef<HTMLButtonElement, ButtonGlowProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    
    const baseStyles = "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 overflow-hidden group outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background";
    
    const variants = {
      primary: "bg-primary text-primary-foreground focus:ring-primary hover:bg-primary/90 box-glow active:scale-95",
      secondary: "bg-secondary text-secondary-foreground focus:ring-secondary hover:bg-secondary/90 box-glow-secondary active:scale-95",
      outline: "bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40 focus:ring-white/50 active:scale-95"
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl"
    };

    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          isDisabled && "opacity-50 cursor-not-allowed transform-none active:scale-100",
          className
        )}
        {...props}
      >
        {variant !== "outline" && !isDisabled && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        )}
        <span className="relative flex items-center gap-2">
          {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
          {children}
        </span>
      </button>
    );
  }
);

ButtonGlow.displayName = "ButtonGlow";

