import { ReportWizard } from "@/components/report/ReportWizard";

export default function SubmitReport() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-8 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
              File a Confidential Report
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Your protection matters. All reports are securely encrypted and kept confidential.
            </p>

            <div className="inline-flex h-9 items-center gap-2 rounded-full border border-orange-500/50 bg-orange-500/10 px-4 text-sm text-orange-400 mt-4">
              <svg
                className="h-4 w-4 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zM5 20a7 7 0 0114 0H5z"
                />
              </svg>
              Protected & Confidential
            </div>
          </div>

          <div className="mt-16 bg-zinc-900/50 rounded-2xl border border-white/5 p-6">
            <ReportWizard />
          </div>
        </div>
      </main>
    </div>
  );
}
