import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Header Section */}
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              How SnapIncident Operates
              <span className="block text-2xl mt-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Your Protection Comes First
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Discover how we safeguard your privacy while making sure your report
              reaches the proper authorities.
            </p>

            <div className="inline-flex mt-4 h-9 items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 text-sm text-orange-400">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Understanding Our Process
            </div>
          </div>

          {/* Process Steps */}
          <div className="mt-24 grid gap-12">
            {[
              {
                step: "01",
                title: "Report Submission",
                description:
                  "Complete our secure form providing detailed information. Personal details are not necessary. Attach photos, videos, or documents if you have them.",
                icon: (
                  <svg
                    className="h-6 w-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
                    <path d="M16 3h-1a2 2 0 00-2 2v1H9V5a2 2 0 00-2-2H6a2 2 0 00-2 2v1h14V5a2 2 0 00-2-2z" />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "Data Encryption & Privacy",
                description:
                  "Your report is instantly encrypted with top-tier protocols. All identifying metadata, such as IP and device info, is removed from your submission.",
                icon: (
                  <svg
                    className="h-6 w-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="7" width="18" height="10" rx="2" ry="2" />
                    <path d="M7 7V4a5 5 0 0110 0v3" />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Validation & Dispatch",
                description:
                  "The system confirms the report’s jurisdiction and routes it automatically to the correct law enforcement agency, ensuring your anonymity throughout.",
                icon: (
                  <svg
                    className="h-6 w-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                ),
              },
              {
                step: "04",
                title: "Encrypted Communication",
                description:
                  "When necessary, law enforcement can contact you via our secure platform using your anonymous report ID, keeping you in control of the dialogue.",
                icon: (
                  <svg
                    className="h-6 w-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h.01M12 12h.01M16 12h.01" />
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
              >
              <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-orange-400">
                    Step {step.step}
                  </div>
                  <h3 className="mt-2 text-xl font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>

          {/* Security Features */}
          <div className="mt-24 rounded-2xl bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold text-orange-400 text-center mb-8">
              Security Measures
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "End-to-End Encryption",
                  description: "All data is encrypted in transit and at rest",
                icon: (
                  <svg
                    className="h-6 w-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="8" y="11" width="8" height="6" rx="2" ry="2" />
                    <path d="M12 7v4" />
                  </svg>
                ),
                },
                {
                  title: "No Logs Policy",
                  description: "We never store IP addresses or user metadata",
                icon: (
                  <svg
                    className="h-6 w-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                ),
                },
                {
                  title: "Regular Audits",
                  description: "Independent security firms verify our systems",
                  icon: (
                    <svg
                      className="h-6 w-6 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  ),
                },
              ].map((feature, i) => (
                <div key={i} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-24 mb-20 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              Prepared to Make a Report?
            </h2>
            <Link href={"/submit-report"}>
            <button className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-pink-700 to-purple-700 px-8 text-sm font-medium text-white transition-all hover:from-pink-800 hover:to-purple-900">
              Begin Your Confidential Report
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
