import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fffdf5] text-gray-900">
      <Navbar />

      <main className="flex min-h-[70vh] items-center justify-center px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#eaf9ef] text-[#159447]">
            <SearchX className="h-10 w-10" />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#159447]">
            404 — Page Not Found
          </p>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-gray-950 sm:text-6xl">
            Oops! This page doesn't exist.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            The page you're looking for may have been moved, deleted, or the
            URL may be incorrect.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#159447] px-7 font-semibold text-white shadow-lg shadow-[#159447]/20 transition hover:-translate-y-0.5 hover:bg-[#117b3b]"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-7 font-semibold text-gray-700 shadow-sm transition hover:border-[#159447]/30 hover:text-[#159447]"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}