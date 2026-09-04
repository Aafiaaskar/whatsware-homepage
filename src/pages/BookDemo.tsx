import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import AIAgentShowcase from "@/components/AIAgentShowcase";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    industry: "",
    company: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#f4fff8] via-white to-white px-5 pb-20 pt-32 sm:px-8 lg:pb-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#159447]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            
            {/* LEFT */}
            <div>
              <div className="mb-5 inline-flex rounded-full border border-[#159447]/20 bg-white px-4 py-2 text-sm font-semibold text-[#159447] shadow-sm">
                Book a Demo
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
                See What WhatsWare
                <span className="block bg-gradient-to-r from-[#159447] via-[#20b957] to-[#0f7c38] bg-clip-text text-transparent">
                  Can Do For You
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Discover how WhatsWare can help your business automate
                conversations, capture leads, support customers, and grow
                faster on WhatsApp.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Personalized product walkthrough",
                  "Solutions tailored to your business",
                  "Get answers from our experts",
                  "No setup fee",
                  "No credit card required",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#159447]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-8">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-bold text-gray-950">
                    Ready to Get Started?
                  </h2>

                  <p className="mt-3 leading-7 text-gray-600">
                    Fill in your details and our team will be in touch within
                    48 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Industry
                      </label>

                      <select
                        name="industry"
                        value={form.industry}
                        onChange={handleChange}
                        required
                        className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition focus:border-[#159447] focus:ring-4 focus:ring-[#159447]/10"
                      >
                        <option value="">Select your industry</option>
                        <option value="B2B Sales">B2B Sales</option>
                        <option value="Travel & Tourism">
                          Travel & Tourism
                        </option>
                        <option value="Restaurant & Food">
                          Restaurant & Food
                        </option>
                        <option value="Spas & Salons">Spas & Salons</option>
                        <option value="Health & Wellness">
                          Health & Wellness
                        </option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Education">Education</option>
                        <option value="Automotive">Automotive</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Company Name
                      </label>

                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        placeholder="Enter your company name"
                        className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#159447] focus:ring-4 focus:ring-[#159447]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#159447] focus:ring-4 focus:ring-[#159447]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#159447] focus:ring-4 focus:ring-[#159447]/10"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="h-12 w-full rounded-xl border border-gray-300 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#159447] focus:ring-4 focus:ring-[#159447]/10"
                      />
                    </div>

                    <label className="flex items-start gap-3 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        required
                        className="mt-1 h-4 w-4 accent-[#159447]"
                      />
                      <span>
                        I agree to the Terms & Conditions
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#159447] px-6 py-3.5 font-semibold text-white transition hover:bg-[#0e7c39] hover:shadow-lg"
                    >
                      Book My Demo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="h-16 w-16 text-[#159447]" />

                  <h2 className="mt-6 text-3xl font-bold text-gray-950">
                    Thank You!
                  </h2>

                  <p className="mt-4 max-w-md leading-7 text-gray-600">
                    Your demo request has been submitted. Our team will be in
                    touch with you within 48 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <AIAgentShowcase />
      <Footer />
    </div>
  );
}