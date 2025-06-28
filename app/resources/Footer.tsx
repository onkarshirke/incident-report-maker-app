import React from "react";

export default function Footer() {
  return (
    <footer className="bg-transparent text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Left side: Logo and Name */}
        <div className="flex items-center space-x-3">
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
          <span className="text-lg font-semibold" style={{ color: "#EFDFBB" }}>SnapIncident</span>
        </div>

        {/* Right side: Call, Mail, Location icons */}
        <div className="flex items-center space-x-6">
          {/* Call Icon */}
          <a href="tel:+112" aria-label="Call" className="hover:text-red-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13 1.21.38 2.39.73 3.5a2 2 0 01-.45 2.11L9.91 10.09a16 16 0 006 6l1.76-1.76a2 2 0 012.11-.45c1.11.35 2.29.6 3.5.73a2 2 0 011.72 2z" />
            </svg>
          </a>

          {/* Mail Icon */}
          <a href="mailto:info@snapincident.com" aria-label="Email" className="hover:text-red-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16v16H4z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>

          {/* Location Icon */}
          <a href="https://maps.google.com/?q=112" target="_blank" rel="noopener noreferrer" aria-label="Location" className="hover:text-red-400 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21c-4.97 0-9-4.03-9-9a9 9 0 0118 0c0 4.97-4.03 9-9 9z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-zinc-400">
        © 2025 onkar.dev. All rights reserved.
      </div>
    </footer>
  );
}
