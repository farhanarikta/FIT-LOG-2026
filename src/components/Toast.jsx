"use client";

import { useEffect } from "react";

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-black shadow-lg">
      {message}
    </div>
  );
}