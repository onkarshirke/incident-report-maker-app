"use client";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
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

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/submit-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                File Report
              </Link>
              <Link
                href="/track-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Monitor Report
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Overview
              </Link>
              {/*
              <Link
                href="/how-it-works"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Overview
              </Link>
              */}
              <Link
                href="/resources"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Support
              </Link>
            </div>

            {/* Emergency Button */}
            <div className="flex items-center space-x-4">
              <a
                href="https://112.gov.in/psap-address"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </a>
              <button
                onClick={() => window.open("https://112.gov.in", "_blank")}
                className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 text-sm font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                Emergency: 112
              </button>
              <button
                onClick={() => {
                  import("next-auth/react").then(({ signOut }) => {
                    signOut({ callbackUrl: "/auth/signin" });
                  });
                }}
                className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Sign Out
              </button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-zinc-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
