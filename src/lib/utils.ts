import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrencyINR(amount: number): string {
  if (amount >= 100000) {
    const lakhs = amount / 100000;
    return `₹${lakhs.toLocaleString("en-IN", { maximumFractionDigits: 2 })} Lakhs`;
  }
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function formatPercentage(value: number): string {
  return `${Math.round(value)}%`;
}

export function getScoreColor(score: number): {
  text: string;
  bg: string;
  border: string;
  badgeBg: string;
} {
  if (score >= 85) {
    return {
      text: "text-gov-green",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      badgeBg: "bg-emerald-100 text-emerald-800"
    };
  }
  if (score >= 70) {
    return {
      text: "text-gov-primary",
      bg: "bg-blue-50",
      border: "border-blue-200",
      badgeBg: "bg-blue-100 text-blue-800"
    };
  }
  if (score >= 50) {
    return {
      text: "text-gov-orange",
      bg: "bg-amber-50",
      border: "border-amber-200",
      badgeBg: "bg-amber-100 text-amber-800"
    };
  }
  return {
    text: "text-gov-red",
    bg: "bg-rose-50",
    border: "border-rose-200",
    badgeBg: "bg-rose-100 text-rose-800"
  };
}
