import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-white text-zinc-900 hover:bg-zinc-100 focus-visible:ring-white":
              variant === "primary",
            "bg-zinc-800 text-white hover:bg-zinc-700 focus-visible:ring-zinc-500":
              variant === "secondary",
            "text-zinc-400 hover:text-white hover:bg-zinc-800/50 focus-visible:ring-zinc-500":
              variant === "ghost",
            "border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white focus-visible:ring-zinc-500":
              variant === "outline",
          },
          {
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-14 px-8 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
