import {
  FormEvent,
  ChangeEvent,
  useMemo,
  useState,
} from "react";
import { Link, useLocation } from "wouter";
import {
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Zap,
  Bot,
  BarChart3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function SignUp() {
  const [, navigate] = useLocation();

  const [showPassword, setShowPassword] = useState(false);
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

  /* =========================================================
     HANDLE INPUT
  ========================================================= */

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

  /* =========================================================
     PASSWORD STRENGTH
  ========================================================= */

  const passwordStrength = useMemo(() => {
    const password = formData.password;

    if (!password) {
      return {
        label: "",
        width: "0%",
      };
    }

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) {
      return {
        label: "Weak password",
        width: "25%",
      };
    }

    if (score === 2) {
      return {
        label: "Fair password",
        width: "50%",
      };
    }

    if (score === 3) {
      return {
        label: "Good password",
        width: "75%",
      };
    }

    return {
      label: "Strong password",
      width: "100%",
    };
  }, [formData.password]);

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
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
     * Backend/authentication can be connected here later.
     */

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F5FAF7] text-[#12312C]">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="sticky top-0 z-50 border-b border-[#DDECE5] bg-white/90 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-10">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center"
          >
            <img
              src="/whatsware-logo.png"
              alt="WhatsWare"
              className="h-11 w-auto object-contain sm:h-12"
            />
          </Link>

          {/* SIGN IN */}

          <div className="flex items-center gap-2 text-sm">

            <span className="hidden text-gray-500 sm:inline">
              Already have an account?
            </span>

            <Link
              href="/login"
              className="rounded-full border border-[#CFE3DA] bg-white px-5 py-2.5 font-bold text-[#075E54] transition-all duration-300 hover:border-[#159447] hover:bg-[#F1FAF5]"
            >
              Sign In
            </Link>

          </div>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="relative overflow-hidden">

        {/* Background decorations */}

        <div className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-[#D8F7E9] opacity-60 blur-3xl" />

        <div className="pointer-events-none absolute -right-48 bottom-0 h-[550px] w-[550px] rounded-full bg-[#DDF5EC] opacity-70 blur-3xl" />

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-[1400px] items-center gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-10 lg:py-14">

          {/* =================================================
              LEFT BRAND PANEL
          ================================================== */}

          <section className="hidden lg:block">

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#075E54] p-10 shadow-[0_35px_90px_-30px_rgba(7,94,84,0.5)] xl:p-12">

              {/* Decorative circles */}

              <div className="pointer-events-none absolute -right-28 -top-28 h-80 w-80 rounded-full border-[40px] border-white/5" />

              <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full border-[50px] border-[#159447]/20" />

              <div className="pointer-events-none absolute right-20 top-20 h-32 w-32 rounded-full bg-[#159447]/20 blur-2xl" />


              <div className="relative z-10">

                {/* LOGO */}

                <div className="mb-10 inline-flex rounded-2xl bg-white px-5 py-3 shadow-xl">

                  <img
                    src="/whatsware-logo.png"
                    alt="WhatsWare"
                    className="h-12 w-auto object-contain"
                  />

                </div>


                {/* Heading */}

                <p className="mb-4 flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-emerald-200">

                  <Sparkles className="h-4 w-4" />

                  WhatsApp Business Platform

                </p>


                <h2 className="max-w-xl text-4xl font-black leading-[1.08] tracking-[-0.04em] text-white xl:text-5xl">

                  Turn every WhatsApp conversation into business growth.

                </h2>


                <p className="mt-6 max-w-lg text-base leading-7 text-emerald-50/80">

                  Build smarter customer journeys, automate conversations,
                  capture leads and grow your business with WhatsWare.

                </p>


                {/* =================================================
                    FEATURE CARDS
                ================================================== */}

                <div className="mt-10 space-y-4">

                  <SignupFeature
                    icon={<Bot className="h-5 w-5" />}
                    title="AI-powered conversations"
                    description="Answer customer questions automatically, 24/7."
                  />

                  <SignupFeature
                    icon={<MessageCircle className="h-5 w-5" />}
                    title="WhatsApp automation"
                    description="Create powerful journeys without complicated setup."
                  />

                  <SignupFeature
                    icon={<BarChart3 className="h-5 w-5" />}
                    title="Grow your conversions"
                    description="Capture, qualify and nurture leads at scale."
                  />

                </div>


                {/* =================================================
                    TRUST LINE
                ================================================== */}

                <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/10 pt-7">

                  <div className="flex items-center gap-2 text-sm font-semibold text-white">

                    <ShieldCheck className="h-5 w-5 text-emerald-300" />

                    Secure platform

                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-white">

                    <Zap className="h-5 w-5 text-emerald-300" />

                    Built for SMBs

                  </div>

                </div>

              </div>

            </div>

          </section>


          {/* =================================================
              RIGHT SIGNUP AREA
          ================================================== */}

          <section className="w-full">

            {/* Mobile logo */}

            <div className="mb-8 flex justify-center lg:hidden">

              <Link href="/">

                <img
                  src="/whatsware-logo.png"
                  alt="WhatsWare"
                  className="h-14 w-auto object-contain"
                />

              </Link>

            </div>


            {/* TITLE */}

            <div className="mx-auto mb-8 max-w-xl text-center lg:text-left">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#159447] shadow-sm">

                <span className="h-2 w-2 rounded-full bg-[#159447]" />

                Get started with WhatsWare

              </div>


              <h1 className="text-3xl font-black tracking-[-0.04em] text-[#12312C] sm:text-4xl lg:text-5xl">

                Create your account

              </h1>


              <p className="mt-4 text-sm leading-6 text-gray-500 sm:text-base">

                Start building powerful WhatsApp experiences
                that help your business connect, automate and grow.

              </p>

            </div>


            {/* =================================================
                FORM CARD
            ================================================== */}

            <div className="mx-auto max-w-xl rounded-[2rem] border border-[#DFECE6] bg-white p-6 shadow-[0_30px_80px_-35px_rgba(7,94,84,0.3)] sm:p-8 lg:p-9">

              {/* Card top */}

              <div className="mb-7 flex items-center gap-3 border-b border-gray-100 pb-6">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E1F7EC]">

                  <img
                    src="/whatsware-logo.png"
                    alt=""
                    className="h-7 w-auto object-contain"
                  />

                </div>

                <div>

                  <p className="text-sm font-black text-[#12312C]">
                    Create your WhatsWare account
                  </p>

                  <p className="mt-0.5 text-xs text-gray-400">
                    It only takes a few minutes
                  </p>

                </div>

              </div>


              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* =================================================
                    NAME
                ================================================== */}

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-gray-700"
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
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#FCFEFD] px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#159447] focus:bg-white focus:ring-4 focus:ring-[#159447]/10"
                  />

                </div>


                {/* =================================================
                    EMAIL
                ================================================== */}

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-gray-700"
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
                    className="h-12 w-full rounded-xl border border-gray-200 bg-[#FCFEFD] px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#159447] focus:bg-white focus:ring-4 focus:ring-[#159447]/10"
                  />

                </div>


                {/* =================================================
                    PHONE + COMPANY
                ================================================== */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-gray-700"
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
                      className="h-12 w-full rounded-xl border border-gray-200 bg-[#FCFEFD] px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#159447] focus:bg-white focus:ring-4 focus:ring-[#159447]/10"
                    />

                  </div>


                  <div>

                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-bold text-gray-700"
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
                      className="h-12 w-full rounded-xl border border-gray-200 bg-[#FCFEFD] px-4 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#159447] focus:bg-white focus:ring-4 focus:ring-[#159447]/10"
                    />

                  </div>

                </div>


                {/* =================================================
                    PASSWORD
                ================================================== */}

                <div>

                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-bold text-gray-700"
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
                      className="h-12 w-full rounded-xl border border-gray-200 bg-[#FCFEFD] px-4 pr-12 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#159447] focus:bg-white focus:ring-4 focus:ring-[#159447]/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          (current) => !current
                        )
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-400 transition-colors hover:text-[#075E54]"
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


                  {/* Password strength */}

                  {formData.password && (
                    <div className="mt-3">

                      <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">

                        <div
                          className="h-full rounded-full bg-[#159447] transition-all duration-300"
                          style={{
                            width:
                              passwordStrength.width,
                          }}
                        />

                      </div>

                      <div className="mt-1.5 flex items-center justify-between">

                        <p className="text-xs text-gray-400">
                          Use 8+ characters
                        </p>

                        <p className="text-xs font-semibold text-[#159447]">
                          {passwordStrength.label}
                        </p>

                      </div>

                    </div>
                  )}

                </div>


                {/* =================================================
                    CONFIRM PASSWORD
                ================================================== */}

                <div>

                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-bold text-gray-700"
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
                      className="h-12 w-full rounded-xl border border-gray-200 bg-[#FCFEFD] px-4 pr-12 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#159447] focus:bg-white focus:ring-4 focus:ring-[#159447]/10"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          (current) => !current
                        )
                      }
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-400 transition-colors hover:text-[#075E54]"
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


                  {/* Match indicator */}

                  {formData.confirmPassword && (
                    <div className="mt-2 flex items-center gap-1.5">

                      <CheckCircle2
                        className={`h-4 w-4 ${
                          formData.password ===
                          formData.confirmPassword
                            ? "text-[#159447]"
                            : "text-gray-300"
                        }`}
                      />

                      <span
                        className={`text-xs ${
                          formData.password ===
                          formData.confirmPassword
                            ? "text-[#159447]"
                            : "text-gray-400"
                        }`}
                      >
                        {formData.password ===
                        formData.confirmPassword
                          ? "Passwords match"
                          : "Passwords must match"}
                      </span>

                    </div>
                  )}

                </div>


                {/* =================================================
                    ERROR
                ================================================== */}

                {error && (

                  <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">

                    <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-red-500" />

                    <span>{error}</span>

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
                    className="font-semibold text-[#075E54] hover:underline"
                  >
                    Terms of Service
                  </Link>

                  {" "}and{" "}

                  <Link
                    href="/privacy"
                    className="font-semibold text-[#075E54] hover:underline"
                  >
                    Privacy Policy
                  </Link>

                  .

                </p>


                {/* =================================================
                    CREATE ACCOUNT
                ================================================== */}

                <button
                  type="submit"
                  className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#075E54] px-5 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(7,94,84,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#064C44] hover:shadow-[0_18px_35px_-10px_rgba(7,94,84,0.6)]"
                >

                  Create Account

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />

                </button>

              </form>


              {/* =================================================
                  SIGN IN
              ================================================== */}

              <div className="mt-7 border-t border-gray-100 pt-6 text-center">

                <p className="text-sm text-gray-500">

                  Already have an account?{" "}

                  <Link
                    href="/login"
                    className="font-bold text-[#075E54] transition-colors hover:text-[#159447]"
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
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition-colors hover:text-[#075E54]"
              >
                ← Back to WhatsWare
              </Link>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}


/* =========================================================
   SIGNUP FEATURE
========================================================= */

function SignupFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.11]">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#159447] text-white shadow-lg">

        {icon}

      </div>

      <div>

        <h3 className="text-sm font-black text-white">
          {title}
        </h3>

        <p className="mt-1 text-xs leading-5 text-emerald-100/65">
          {description}
        </p>

      </div>

    </div>
  );
}