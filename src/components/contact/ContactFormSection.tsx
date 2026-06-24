"use client";

import React, { useState } from "react";
import {
  Building2,
  Users,
  HeartHandshake,
  Newspaper,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import type { PartnerWithUsContent } from "@/lib/content";
import FadeIn from "@/components/ui/FadeIn";

interface ContactFormSectionProps {
  content: PartnerWithUsContent;
}

type InquiryType = "partner" | "volunteer" | "donate" | "press" | "general";

const inquiryTypes = [
  {
    id: "partner",
    icon: Building2,
    label: "Partner With Us",
    desc: "CSR, NGOs, & Gov",
  },
  { id: "volunteer", icon: Users, label: "Volunteer", desc: "Give your time" },
  {
    id: "donate",
    icon: HeartHandshake,
    label: "Donations",
    desc: "Support our cause",
  },
  {
    id: "press",
    icon: Newspaper,
    label: "Press & Media",
    desc: "Media inquiries",
  },
];

export default function ContactFormSection({
  content,
}: ContactFormSectionProps) {
  const [selectedType, setSelectedType] = useState<InquiryType>("general");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSubmitted(true);
        e.currentTarget.reset();
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Form submission failed:", data);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="collaborate" className="bg-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Column: FAQ Section */}
          <FadeIn direction="left">
            <div className="space-y-10 lg:sticky lg:top-32">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-black [font-family:var(--font-heading)]">
                  Frequently Asked Questions
                </h2>
                <p className="mt-4 text-black/60 tracking-tight [font-family:var(--font-body)]">
                  Quick answers to common inquiries before you reach out.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 transition-all duration-300 hover:border-primary hover:bg-primary">
                  <h3 className="mb-2 text-lg font-semibold text-black [font-family:var(--font-heading)]">
                    How can I volunteer?
                  </h3>
                  <p className="text-sm leading-relaxed tracking-tight text-black/70 [font-family:var(--font-body)]">
                    Select "Volunteer" in the form and tell us about your
                    skills. We are always looking for passionate individuals to
                    join our field operations.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 transition-all duration-300 hover:border-primary hover:bg-primary">
                  <h3 className="mb-2 text-lg font-semibold text-black [font-family:var(--font-heading)]">
                    Are donations tax-exempt?
                  </h3>
                  <p className="text-sm leading-relaxed tracking-tight text-black/70 [font-family:var(--font-body)]">
                    Yes, all donations to Foundation for Innovations in Health
                    are eligible for tax deduction under Section 80G of the
                    Income Tax Act.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 transition-all duration-300 hover:border-primary hover:bg-primary">
                  <h3 className="mb-2 text-lg font-semibold text-black [font-family:var(--font-heading)]">
                    Do you offer CSR partnerships?
                  </h3>
                  <p className="text-sm leading-relaxed tracking-tight text-black/70 [font-family:var(--font-body)]">
                    Absolutely. We work with corporate partners on scalable
                    healthcare and livelihood projects. Select "Partner With Us"
                    to start a conversation.
                  </p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-black/[0.02] p-6 transition-all duration-300 hover:border-primary hover:bg-primary">
                  <h3 className="mb-2 text-lg font-semibold text-black [font-family:var(--font-heading)]">
                    How is my donation used?
                  </h3>
                  <p className="text-sm leading-relaxed tracking-tight text-black/70 [font-family:var(--font-body)]">
                    Donations go directly to our rural health and education
                    programs. We maintain full transparency and provide impact
                    reports to our donors.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Form Area */}
          <FadeIn direction="right">
            <div className="rounded-3xl border border-black/10 bg-white p-6 sm:p-10">
              <div className="mb-8">
                <h3 className="text-3xl font-bold tracking-tight text-black [font-family:var(--font-heading)]">
                  Send a Message
                </h3>
                <p className="mt-2 text-black/60 tracking-tight [font-family:var(--font-body)]">
                  Fill out the form below and we aim to respond within 24-48
                  hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-green-100 bg-green-50 p-12 text-center">
                  <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
                  <h4 className="text-xl font-bold text-green-900 [font-family:var(--font-heading)]">
                    Message Sent Successfully!
                  </h4>
                  <p className="mt-2 text-green-700 tracking-tight [font-family:var(--font-body)]">
                    Thank you for reaching out. Our team will get back to you
                    shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm font-bold text-green-700 underline underline-offset-4 [font-family:var(--font-body)]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Integrated Collaboration Options */}
                  <input type="hidden" name="inquiry_type" value={selectedType} />
                  <div className="space-y-3">
                    <label className="flex gap-1 text-label font-bold uppercase tracking-widest text-black/80 [font-family:var(--font-body)]">
                      How can we collaborate?{" "}
                      <span className="text-primary">*</span>
                    </label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {inquiryTypes.map((type) => {
                        const Icon = type.icon;
                        const isSelected = selectedType === type.id;

                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() =>
                              setSelectedType(type.id as InquiryType)
                            }
                            className={`flex items-start gap-3 rounded-2xl p-6 text-left ring-1 ring-inset ${
                              isSelected
                                ? "bg-primary ring-primary"
                                : "bg-black/[0.02] ring-black/5 hover:bg-primary/5 hover:ring-primary/50"
                            }`}
                          >
                            <Icon
                              className={`mt-0.5 h-5 w-5 shrink-0 ${isSelected ? "text-black" : "text-black/40"}`}
                            />
                            <div>
                              <div
                                className={`text-base font-semibold [font-family:var(--font-body)] ${isSelected ? "text-black" : "text-black/80"}`}
                              >
                                {type.label}
                              </div>
                              <div
                                className={`mt-0.5 text-xs [font-family:var(--font-body)] ${isSelected ? "text-black/80" : "text-black/60"}`}
                              >
                                {type.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2 items-start">
                    <div className="flex flex-col">
                      <label
                        htmlFor="name"
                        className="mb-2 flex gap-1 text-label font-bold uppercase tracking-widest text-black/80 [font-family:var(--font-body)]"
                      >
                        Full Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        type="text"
                        placeholder="Enter your name"
                        className="h-14 w-full rounded-xl border border-black/10 bg-black/[0.02] px-5 text-base outline-0 transition-colors focus:border-primary [font-family:var(--font-body)]"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor="email"
                        className="mb-2 flex gap-1 text-label font-bold uppercase tracking-widest text-black/80 [font-family:var(--font-body)]"
                      >
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="email@example.com"
                        className="h-14 w-full rounded-xl border border-black/10 bg-black/[0.02] px-5 text-base outline-0 transition-colors focus:border-primary [font-family:var(--font-body)]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="mb-2 flex gap-1 text-label font-bold uppercase tracking-widest text-black/80 [font-family:var(--font-body)]"
                    >
                      Phone Number{" "}
                      <span className="font-normal lowercase text-black/40">
                        (Optional)
                      </span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="h-14 w-full rounded-xl border border-black/10 bg-black/[0.02] px-5 text-base outline-0 transition-colors focus:border-primary [font-family:var(--font-body)]"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="message"
                      className="mb-2 flex gap-1 text-label font-bold uppercase tracking-widest text-black/80 [font-family:var(--font-body)]"
                    >
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={
                        selectedType === "volunteer"
                          ? "Tell us a bit about your background and how you'd like to help..."
                          : "Write your message here..."
                      }
                      className="w-full resize-none rounded-xl border border-black/10 bg-black/[0.02] px-5 py-4 text-base outline-0 transition-colors focus:border-primary [font-family:var(--font-body)]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-black py-4 text-base font-bold text-white transition-colors hover:bg-primary hover:text-black disabled:opacity-70 disabled:hover:bg-black disabled:hover:text-white [font-family:var(--font-body)]"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs tracking-tight text-black/40 [font-family:var(--font-body)]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    Your information is kept strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
