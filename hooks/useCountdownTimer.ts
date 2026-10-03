"use client";

import { useState, useEffect } from "react";

export interface CountdownTime {
  hours: number;
  minutes: number;
  seconds: number;
  formattedHours: string;
  formattedMinutes: string;
  formattedSeconds: string;
  isMounted: boolean;
}

const STORAGE_KEY = "sw_launch_timer_v2";
// 6 hours, 48 minutes, 20 seconds initial window (within the 7-hour limit)
const INITIAL_OFFSET_MS = (6 * 3600 + 48 * 60 + 20) * 1000;

export function useCountdownTimer(): CountdownTime {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number }>({
    hours: 6,
    minutes: 48,
    seconds: 20,
  });

  useEffect(() => {
    setMounted(true);

    let targetTime = 0;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = parseInt(stored, 10);
        // If parsed is still in the future and less than 7 hours away, use it
        if (!isNaN(parsed) && parsed > Date.now() && parsed - Date.now() <= 7 * 3600 * 1000) {
          targetTime = parsed;
        } else {
          targetTime = Date.now() + INITIAL_OFFSET_MS;
          localStorage.setItem(STORAGE_KEY, targetTime.toString());
        }
      } else {
        targetTime = Date.now() + INITIAL_OFFSET_MS;
        localStorage.setItem(STORAGE_KEY, targetTime.toString());
      }
    } catch {
      targetTime = Date.now() + INITIAL_OFFSET_MS;
    }

    const calculateTime = () => {
      const diff = Math.max(0, targetTime - Date.now());
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const format2 = (n: number) => n.toString().padStart(2, "0");

  return {
    hours: timeLeft.hours,
    minutes: timeLeft.minutes,
    seconds: timeLeft.seconds,
    formattedHours: format2(timeLeft.hours),
    formattedMinutes: format2(timeLeft.minutes),
    formattedSeconds: format2(timeLeft.seconds),
    isMounted: mounted,
  };
}
