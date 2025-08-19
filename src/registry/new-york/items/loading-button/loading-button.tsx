"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface iAppProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  onClick: () => Promise<void> | void;
  type?: "button" | "submit" | "reset";
}

export const LoadingButton = ({
  children,
  variant = "default",
  size = "default",
  className,
  onClick,
  type = "button",
}: iAppProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      await onClick?.();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      className={cn("min-w-0", className)}
      disabled={isLoading}
      onClick={handleClick}
      type={type}
      variant={variant}
      size={size}
      style={{ minWidth: isLoading ? undefined : "auto" }}
    >
      <span
        className={cn(
          "flex items-center justify-center",
          isLoading && "invisible"
        )}
      >
        {children}
      </span>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin absolute" />}
    </Button>
  );
};
