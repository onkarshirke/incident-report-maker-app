import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import Footer from "../components/Footer";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/signin");
  }

  return (
    <>
      <main className="relative px-6 pt-32">
        <div className="mx-auto max-w-5xl">
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center">
            <h1 className="mt-2 bg-gradient-to-b from-white to-white/80 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
              Report Incident
              <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Ensure Safety
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Help keep your community secure while maintaining your privacy. Our
              cutting-edge encryption guarantees your anonymity.
            </p>

            <div className="inline-flex mt-4 h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-orange-400">
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
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zM12 13c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"
                />
              </svg>
              Safe & Confidential Reporting
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href={"/submit-report"}>
                <button className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-pink-700 to-purple-700 px-8 text-sm font-medium text-white transition-all hover:from-pink-800 hover:to-purple-900">
                  Make Incident Report
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
              <Link href={"/how-it-works"}>
                <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-pink-700 to-purple-700 px-8 text-sm font-medium text-white ring-1 ring-inset ring-purple-900 transition-all hover:from-pink-800 hover:to-purple-900">
                  How it Works
                </button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-40 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Advanced Encryption",
                description:
                  "Your identity is secured using cutting-edge encryption technology",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Immediate Handling",
                description:
                  "Rapid validation and safe delivery of every report with precision",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Protected Interaction",
                description: "Bidirectional confidential link with authorities",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 inline-flex rounded-xl bg-sky-500/10 p-3">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-cyan-400">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-40 rounded-2xl bg-zinc-900 p-8">
            <div className="grid gap-y-8 sm:grid-cols-3">
              {[
                { value: "Over 10K+", label: "Reports Submitted" },
                { value: "Encrypted", label: "Privacy Guaranteed" },
                { value: "24/7 Clock", label: "Assistance Ready" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-40 mb-20 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Trusted by 112 Emergency Services India
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
