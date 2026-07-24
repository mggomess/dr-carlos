import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-xl border border-brand-deep/10 bg-white px-4 text-sm text-brand-deep placeholder:text-brand-deep/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
