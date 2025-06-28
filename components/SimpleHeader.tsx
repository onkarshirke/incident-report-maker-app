"use client";

import Link from "next/link";

export default function SimpleHeader() {
  return (
    <div className="fixed top-0 left-0 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-3">
            <div className="h-9 w-9 rounded-xl border-2 border-red-400 flex items-center justify-center">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#F87171"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a1 1 0 00.86 1.5h18.64a1 1 0 00.86-1.5L13.71 3.86a1 1 0 00-1.72 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <span className="text-lg font-semibold" style={{ color: "#EFDFBB" }}>
              SnapIncident
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
