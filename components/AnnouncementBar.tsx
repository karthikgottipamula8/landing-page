"use client";

import React from "react";
import { CONTENT } from "@/config/content";
import { Sparkles, ArrowRight } from "lucide-react";

interface AnnouncementBarProps {
  onOpenCheckout: () => void;
}

export default function AnnouncementBar({ onOpenCheckout }: AnnouncementBarProps) {
  const { announcement } = CONTENT;

  return (
    <aside aria-label="Announcement" className="bg-charcoal text-paper py-2 px-4 text-xs border-b border-white/10 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
        <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider bg-coral text-white px-2 py-0.5 rounded">
          <Sparkles className="w-3 h-3" />
          {announcement.badge}
        </span>
        <span className="text-white/90 font-medium">
          {announcement.text}
        </span>
        <button
          onClick={onOpenCheckout}
          className="text-coral hover:text-white transition-colors font-bold uppercase text-[11px] tracking-wider inline-flex items-center gap-1 ml-1 underline-offset-4 hover:underline"
        >
          <span>{announcement.actionText}</span>
        </button>
      </div>
    </aside>
  );
}
