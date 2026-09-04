import {
  FormEvent,
  ChangeEvent,
  useState,
} from "react";
import { Link, useLocation } from "wouter";
import {
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function SignUp() {
  const [, navigate] = useLocation();

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.company.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 8) {
      setError(
        "Password must be at least 8 characters."
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match.");
      return;
    }

    /*
     * TODO:
     * Connect this form to your backend/authentication
     * API when the backend is ready.
     */

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4faf7] via-white to-[#eef8f4]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="flex h-20 items-center justify-between border-b border-gray-100 bg-white/90 px-5 backdrop-blur-md sm:px-8">

        <Link
          href="/"
          className="flex items-center"
        >
          <img
            src="/whatsware-logo.png"
            alt="WhatsWare"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="hidden sm:inline">
            Already have an account?
          </span>

          <Link
            href="/login"
            className="font-semibold text-[#075E54] transition-colors hover:text-[#0e7c39]"
          >
            Sign In
          </Link>
        </div>

      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10 sm:px-6">

        <div className="w-full max-w-lg">

          {/* =================================================
              TITLE
          ================================================== */}

          <div className="mb-8 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#075E54] shadow-lg shadow-[#075E54]/20">
              <span className="text-2xl font-bold text-white">
                W
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Create your account
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
              Get started with WhatsWare and grow your
              business with powerful WhatsApp automation.
            </p>

          </div>

          {/* =================================================
              FORM CARD
          ================================================== */}

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8">

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* =================================================
                  FULL NAME
              ================================================== */}

              <div>

                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#075E54] focus:ring-4 focus:ring-[#075E54]/10"
                />

              </div>

              {/* =================================================
                  EMAIL
              ================================================== */}

              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Business Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  autoComplete="email"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#075E54] focus:ring-4 focus:ring-[#075E54]/10"
                />

              </div>

              {/* =================================================
                  PHONE + COMPANY
              ================================================== */}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>

                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#075E54] focus:ring-4 focus:ring-[#075E54]/10"
                  />

                </div>

                <div>

                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Company Name
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    autoComplete="organization"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#075E54] focus:ring-4 focus:ring-[#075E54]/10"
                  />

                </div>

              </div>

              {/* =================================================
                  PASSWORD
              ================================================== */}

              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>

                <div className="relative">

                  <input
                    id="password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    autoComplete="new-password"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 pr-12 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#075E54] focus:ring-4 focus:ring-[#075E54]/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (current) => !current
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-400 transition-colors hover:text-[#075E54]"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>

                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Use at least 8 characters.
                </p>

              </div>

              {/* =================================================
                  CONFIRM PASSWORD
              ================================================== */}

              <div>

                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>

                <div className="relative">

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={
                      formData.confirmPassword
                    }
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 pr-12 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#075E54] focus:ring-4 focus:ring-[#075E54]/10"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-400 transition-colors hover:text-[#075E54]"
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>

                </div>

              </div>

              {/* =================================================
                  ERROR
              ================================================== */}

              {error && (
                <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* =================================================
                  TERMS
              ================================================== */}

              <p className="text-xs leading-5 text-gray-500">

                By creating an account, you agree to
                WhatsWare's{" "}

                <Link
                  href="/terms"
                  className="font-medium text-[#075E54] hover:underline"
                >
                  Terms of Service
                </Link>

                {" "}and{" "}

                <Link
                  href="/privacy"
                  className="font-medium text-[#075E54] hover:underline"
                >
                  Privacy Policy
                </Link>

                .

              </p>

              {/* =================================================
                  CREATE ACCOUNT BUTTON
              ================================================== */}

              <button
                type="submit"
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#075E54] px-5 text-sm font-semibold text-white shadow-lg shadow-[#075E54]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0e7c39] hover:shadow-xl"
              >
                Create Account

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

            </form>

            {/* =================================================
                SIGN IN
            ================================================== */}

            <div className="mt-6 border-t border-gray-100 pt-6 text-center">

              <p className="text-sm text-gray-500">

                Already have an account?{" "}

                <Link
                  href="/login"
                  className="font-semibold text-[#075E54] transition-colors hover:text-[#0e7c39]"
                >
                  Sign In
                </Link>

              </p>

            </div>

          </div>

          {/* =================================================
              BACK TO WEBSITE
          ================================================== */}

          <div className="mt-6 text-center">

            <Link
              href="/"
              className="text-sm text-gray-400 transition-colors hover:text-[#075E54]"
            >
              ← Back to WhatsWare
            </Link>

          </div>

        </div>

      </main>

    </div>
  );
}