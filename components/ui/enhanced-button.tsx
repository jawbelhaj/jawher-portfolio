"use client"

import { forwardRef } from "react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface EnhancedButtonProps extends ButtonProps {
  glow?: boolean
  pulse?: boolean
}

export const EnhancedButton = forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ className, glow, pulse, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-300",
          glow && "shadow-lg hover:shadow-green-500/25",
          pulse && "animate-pulse",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
          className,
        )}
        {...props}
      />
    )
  },
)

EnhancedButton.displayName = "EnhancedButton"
