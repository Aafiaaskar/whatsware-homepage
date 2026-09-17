import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  MessageCircle,
  Bot,
  Zap,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Login() {
  const [, setLocation] = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!trimmedEmail.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setIsLoading(true);

    // Temporary frontend login.
    // Replace this later with your real authentication API.
    await new Promise((resolve) => setTimeout(resolve, 800));

    localStorage.setItem(
      "whatsware_user",
      JSON.stringify({
        email: trimmedEmail,
        loggedIn: true,
        loggedInAt: new Date().toISOString(),
      }),
    );

    setIsLoading(false);

    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      <div className="flex min-h-screen flex-col lg:flex-row">

        {/* =========================================================
            LEFT BRAND / HERO PANEL
        ========================================================== */}

        <section className="relative hidden overflow-hidden bg-[#075E54] lg:flex lg:w-[52%]">
          
          {/* Background decoration */}
          <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#25D366]/20 blur-3xl" />

          <div className="absolute -bottom-48 -right-32 h-[600px] w-[600px] rounded-full bg-[#25D366]/10 blur-3xl" />

          <div className="absolute left-1/3 top-1/3 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "45px 45px",
            }}
          />

          <div className="relative z-10 flex w-full flex-col justify-between px-10 py-9 xl:px-14 xl:py-10">

            {/* =====================================================
                LOGO
            ====================================================== */}

            <Link href="/" className="inline-flex w-fit">
              <div className="rounded-2xl bg-white px-4 py-2.5 shadow-xl shadow-black/10">
                <img
                  src="/whatsware-logo.png"
                  alt="WhatsWare"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}

            <div className="relative mt-10 max-w-2xl">

              {/* Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-[#25D366]" />
                AI-powered business conversations
              </div>

              <h1 className="max-w-xl text-4xl font-bold leading-[1.1] tracking-tight text-white xl:text-6xl">
                Turn conversations into
                <span className="block text-[#25D366]">
                  business growth.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/70 xl:text-lg">
                Connect with customers, automate conversations,
                qualify leads and grow your business with
                WhatsWare's powerful WhatsApp platform.
              </p>

              {/* =================================================
                  FEATURE PILLS
              ================================================== */}

              <div className="mt-7 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#25D366]" />
                  WhatsApp Automation
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#25D366]" />
                  AI Agents
                </div>

                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-[#25D366]" />
                  Smart Workflows
                </div>
              </div>

              {/* =================================================
                  FLOATING PRODUCT PREVIEW
              ================================================== */}

              <div className="relative mt-10 hidden xl:block">

                {/* Main preview card */}
                <div className="relative w-[410px] overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl">

                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-white">
                          WhatsWare AI
                        </p>

                        <div className="mt-0.5 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                          <span className="text-xs text-white/50">
                            Online
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg bg-white/10 p-2">
                      <Bot className="h-4 w-4 text-[#25D366]" />
                    </div>
                  </div>

                  {/* Chat */}
                  <div className="space-y-3 py-4">

                    <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-[#25D366] px-4 py-3 text-sm text-white shadow-lg">
                      Hi! I want to know more about your products.
                    </div>

                    <div className="max-w-[78%] rounded-2xl rounded-bl-md bg-white/10 px-4 py-3 text-sm leading-5 text-white/85">
                      Absolutely! I can help you find the right
                      WhatsApp solution for your business.
                    </div>

                    <div className="flex gap-2">
                      <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                        AI Agents
                      </div>

                      <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
                        Automation
                      </div>
                    </div>

                  </div>

                  {/* Bottom */}
                  <div className="flex items-center gap-2 rounded-xl bg-black/10 p-2">
                    <div className="h-9 flex-1 rounded-lg bg-white/10" />

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366]">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Floating AI card */}
                <div className="absolute -right-20 -top-8 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/95 px-4 py-3 shadow-2xl">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f9ef]">
                    <Zap className="h-5 w-5 text-[#075E54]" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      Automation active
                    </p>

                    <p className="text-[11px] text-gray-500">
                      24/7 customer engagement
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* =====================================================
                FOOTER
            ====================================================== */}

            <div className="mt-10 flex items-center justify-between gap-4">
              <p className="text-xs text-white/40">
                © {new Date().getFullYear()} WhatsWare. All rights reserved.
              </p>

              <div className="hidden items-center gap-2 text-xs text-white/40 xl:flex">
                <Lock className="h-3.5 w-3.5" />
                Secure access
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================
            RIGHT LOGIN PANEL
        ========================================================== */}

        <section className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8 lg:px-12 xl:px-20">

          <div className="w-full max-w-md">

            {/* =====================================================
                MOBILE LOGO
            ====================================================== */}

            <div className="mb-10 flex justify-center lg:hidden">
              <Link href="/" className="inline-flex">
                <img
                  src="/whatsware-logo.png"
                  alt="WhatsWare"
                  className="h-14 w-auto object-contain"
                />
              </Link>
            </div>

            {/* =====================================================
                HEADING
            ====================================================== */}

            <div className="mb-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#eaf8f0] px-3 py-1.5 text-xs font-semibold text-[#075E54]">
                <MessageCircle className="h-3.5 w-3.5" />
                WhatsWare Account
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Welcome back
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Sign in to your WhatsWare account and continue
                managing your customer conversations.
              </p>
            </div>

            {/* =====================================================
                ERROR
            ====================================================== */}

            {error && (
              <div className="mb-5 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />

                <span>{error}</span>
              </div>
            )}

            {/* =====================================================
                LOGIN CARD
            ====================================================== */}

            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_20px_70px_rgba(0,0,0,0.07)] sm:p-8">

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* =================================================
                    EMAIL
                ================================================== */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email address
                  </label>

                  <div className="relative">

                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="you@company.com"
                      autoComplete="email"
                      className="h-13 w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-12 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-[#075E54] focus:bg-white focus:ring-4 focus:ring-[#075E54]/10"
                    />

                  </div>
                </div>

                {/* =================================================
                    PASSWORD
                ================================================== */}

                <div>

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Password
                    </label>

                    <button
                      type="button"
                      onClick={() => {
                        setError(
                          "Password reset will be connected when we add the authentication backend.",
                        );
                      }}
                      className="text-xs font-semibold text-[#075E54] transition-colors hover:text-[#159447]"
                    >
                      Forgot password?
                    </button>

                  </div>

                  <div className="relative">

                    <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                    <input
                      id="password"
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="h-13 w-full rounded-xl border border-gray-200 bg-gray-50/50 pl-12 pr-12 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 hover:border-gray-300 focus:border-[#075E54] focus:bg-white focus:ring-4 focus:ring-[#075E54]/10"
                    />

                    <button
                      type="button"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                      onClick={() =>
                        setShowPassword(
                          (value) => !value,
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1 text-gray-400 transition-colors hover:text-[#075E54]"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>

                  </div>

                </div>

                {/* =================================================
                    REMEMBER ME
                ================================================== */}

                <div className="flex items-center gap-3">

                  <input
                    id="remember"
                    type="checkbox"
                    defaultChecked
                    className="h-4 w-4 cursor-pointer rounded border-gray-300 accent-[#075E54]"
                  />

                  <label
                    htmlFor="remember"
                    className="cursor-pointer text-sm text-gray-600"
                  >
                    Remember me
                  </label>

                </div>

                {/* =================================================
                    LOGIN BUTTON
                ================================================== */}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#075E54] px-5 text-sm font-semibold text-white shadow-lg shadow-[#075E54]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#064c44] hover:shadow-xl hover:shadow-[#075E54]/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                >

                  {isLoading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      Signing in...
                    </>
                  ) : (
                    <>
                      <span>Sign In</span>

                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </>
                  )}

                </button>

              </form>

              {/* =====================================================
                  DIVIDER
              ====================================================== */}

              <div className="my-7 flex items-center gap-4">

                <div className="h-px flex-1 bg-gray-200" />

                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">
                  Or
                </span>

                <div className="h-px flex-1 bg-gray-200" />

              </div>

              {/* =====================================================
                  GOOGLE
              ====================================================== */}

              <button
                type="button"
                onClick={() =>
                  setError(
                    "Google login will be connected when we add authentication.",
                  )
                }
                className="flex h-13 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 transition-all hover:border-[#c8ddd4] hover:bg-[#f8fcf9] hover:shadow-sm"
              >

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="#4285F4"
                    d="M21.35 12.27c0-.79-.07-1.55-.23-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.7 2.91-4.2 2.91-7.42Z"
                  />

                  <path
                    fill="#34A853"
                    d="M12 21.7c2.63 0 4.84-.87 6.45-2.36l-3.14-2.45c-.87.58-1.98.92-3.31.92-2.55 0-4.71-1.72-5.49-4.03H3.27v2.53A9.74 9.74 0 0 0 12 21.7Z"
                  />

                  <path
                    fill="#FBBC05"
                    d="M6.51 12.86a5.86 5.86 0 0 1 0-3.72V6.61H3.27a9.74 9.74 0 0 0 0 8.78l3.24-2.53Z"
                  />

                  <path
                    fill="#EA4335"
                    d="M12 5.11c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 2.17 14.63 1.3 12 1.3a9.74 9.74 0 0 0-8.73 5.31l3.24 2.53C7.29 6.83 9.45 5.11 12 5.11Z"
                  />
                </svg>

                Continue with Google

              </button>

              {/* =====================================================
                  SIGN UP
              ====================================================== */}

              <p className="mt-8 text-center text-sm text-gray-500">

                Don't have an account?{" "}

                <Link
                  href="/signup"
                  className="font-semibold text-[#075E54] transition-colors hover:text-[#159447]"
                >
                  Create an account
                </Link>

              </p>

            </div>

            {/* =====================================================
                SECURITY
            ====================================================== */}

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">

              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf8f0]">
                <Lock className="h-3 w-3 text-[#075E54]" />
              </div>

              <span>
                Your account information is securely protected
              </span>

            </div>

            {/* =====================================================
                BACK TO WEBSITE
            ====================================================== */}

            <div className="mt-6 text-center">

              <Link
                href="/"
                className="text-sm font-medium text-gray-400 transition-colors hover:text-[#075E54]"
              >
                ← Back to WhatsWare
              </Link>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
}