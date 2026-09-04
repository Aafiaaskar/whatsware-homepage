import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ArrowRight, Eye, EyeOff, Lock, Mail } from "lucide-react";

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
    // Later this will be replaced with the real API + 2FA request.
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Store a temporary login state so other pages can know the user logged in.
    localStorage.setItem(
      "whatsware_user",
      JSON.stringify({
        email: trimmedEmail,
        loggedIn: true,
        loggedInAt: new Date().toISOString(),
      }),
    );

    setIsLoading(false);

    // Go to homepage after successful login.
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* =========================================================
          MAIN
      ========================================================= */}
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* =======================================================
            LEFT SIDE
        ======================================================= */}
        <div className="relative hidden overflow-hidden bg-[#075E54] lg:flex lg:w-1/2">
          {/* Decorative background */}
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#25D366]/20 blur-3xl" />

          <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-[#25D366]/10 blur-3xl" />

          <div className="relative z-10 flex w-full flex-col justify-between p-12 xl:p-16">
            {/* Logo */}
            <Link href="/" className="inline-flex w-fit items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-lg">
                  <span className="text-2xl font-black text-[#075E54]">
                    W
                  </span>
                </div>

                <span className="text-2xl font-bold tracking-tight text-white">
                  Whatsware
                </span>
              </div>
            </Link>

            {/* Main message */}
            <div className="max-w-xl">
              <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                AI-powered business conversations
              </div>

              <h1 className="text-4xl font-bold leading-tight text-white xl:text-5xl">
                Turn conversations into
                <span className="text-[#25D366]"> business growth.</span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-white/75">
                Connect with your customers, automate conversations, and grow
                your business with Whatsware.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                  ✓ WhatsApp Automation
                </div>

                <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                  ✓ AI Agents
                </div>

                <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white/80">
                  ✓ Smart Workflows
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-sm text-white/50">
              © {new Date().getFullYear()} Whatsware. All rights reserved.
            </p>
          </div>
        </div>

        {/* =======================================================
            RIGHT SIDE
        ======================================================= */}
        <div className="flex flex-1 items-center justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="mb-10 flex justify-center lg:hidden">
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#075E54] shadow-lg">
                  <span className="text-2xl font-black text-white">W</span>
                </div>

                <span className="text-2xl font-bold text-[#075E54]">
                  Whatsware
                </span>
              </Link>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Welcome back
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Sign in to your Whatsware account to continue.
              </p>
            </div>

            {/* ===================================================
                ERROR
            =================================================== */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* ===================================================
                LOGIN FORM
            =================================================== */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
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
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#25D366] focus:ring-4 focus:ring-[#25D366]/10"
                  />
                </div>
              </div>

              {/* Password */}
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
                    className="text-xs font-semibold text-[#075E54] transition-colors hover:text-[#25D366]"
                  >
                    Forgot password?
                  </button>
                </div>

                <div className="relative">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-12 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#25D366] focus:ring-4 focus:ring-[#25D366]/10"
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-[#075E54]"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me */}
              <div className="flex items-center gap-3">
                <input
                  id="remember"
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-300 accent-[#075E54]"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600"
                >
                  Remember me
                </label>
              </div>

              {/* Login button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#075E54] px-5 text-sm font-semibold text-white shadow-lg shadow-[#075E54]/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#064c44] hover:shadow-xl hover:shadow-[#075E54]/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <span>Login</span>

                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            {/* ===================================================
                DIVIDER
            =================================================== */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs font-medium text-gray-400">
                OR
              </span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* ===================================================
                GOOGLE BUTTON
            =================================================== */}
            <button
              type="button"
              onClick={() =>
                setError(
                  "Google login will be connected when we add authentication.",
                )
              }
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white text-sm font-semibold text-gray-700 transition-all hover:border-[#c8ddd4] hover:bg-[#f8fcf9] hover:shadow-sm"
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

            {/* ===================================================
                SIGN UP
            =================================================== */}
            <p className="mt-8 text-center text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-[#075E54] transition-colors hover:text-[#25D366]"
              >
                Create an account
              </Link>
            </p>

            {/* Small security note */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
              <Lock className="h-3.5 w-3.5" />
              <span>Your account is protected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}