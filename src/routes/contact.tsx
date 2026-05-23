import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { submitContact } from "@/lib/contact.functions";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Georgia Waterproofing — Free Estimates" },
      { name: "description", content: "Request a free waterproofing estimate. Call (678) 580-5807 or use the form. Serving Norcross & Metro Atlanta." },
      { property: "og:title", content: "Contact Georgia Waterproofing" },
      { property: "og:description", content: "Free, no-pressure waterproofing quotes across Metro Atlanta." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Valid phone required").max(30),
  service: z.string().trim().min(1, "Pick a service"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(2000),
});

function ContactPage() {
  const submit = useServerFn(submitContact);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = formSchema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    try {
      await submit({ data: parsed.data });
      setDone(true);
      toast.success("Got it! We'll be in touch within 1 business day.");
      (e.currentTarget as HTMLFormElement).reset();
    } catch {
      toast.error("Something went wrong. Please call (678) 580-5807.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Contact</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight sm:text-6xl">
              Get your free <span className="text-gradient-water">no-pressure quote</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              Tell us what's going on. We'll send a specialist out for a free inspection, usually within the same week.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* INFO */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <h2 className="font-display text-2xl font-bold">Talk to us directly</h2>
              <p className="mt-2 text-sm text-muted-foreground">Fastest response is by phone during business hours.</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground"><Phone className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                    <a href="tel:+16785805807" className="font-semibold text-foreground hover:text-accent">(678) 580-5807</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground"><Mail className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                    <a href="mailto:waterproofingandtreeservices.ga@gmail.com" className="font-semibold text-foreground hover:text-accent break-all">waterproofingandtreeservices.ga@gmail.com</a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground"><MapPin className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Address</div>
                    <div className="font-semibold text-foreground">1327 Robin Hill Dr<br />Norcross, GA 30093</div>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground"><Clock className="h-5 w-5" /></span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                    <div className="font-semibold text-foreground">Mon – Fri: 8:00 AM – 4:00 PM<br />Sat – Sun: Closed</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-dark p-7 text-primary-foreground shadow-water">
              <h3 className="font-display text-xl font-bold">Why neighbors choose us</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent" /> Free, honest on-site inspections</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent" /> Licensed, insured, locally owned</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent" /> 5-star reviews across Google, Yelp & Nextdoor</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-accent" /> Lifetime workmanship guarantee</li>
              </ul>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10">
              {done ? (
                <div className="py-16 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-glow">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-bold">Thanks — we got it.</h2>
                  <p className="mx-auto mt-3 max-w-md text-muted-foreground">A specialist will reach out within one business day. Need it sooner? Call <a href="tel:+16785805807" className="font-semibold text-accent">(678) 580-5807</a>.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold">Request your free quote</h2>
                  <p className="mt-1 text-sm text-muted-foreground">No spam. No pressure. Just an honest assessment.</p>
                  <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" placeholder="Jane Doe" />
                    <Field label="Phone" name="phone" type="tel" placeholder="(678) 555-0123" />
                    <Field label="Email" name="email" type="email" placeholder="you@email.com" className="sm:col-span-2" />
                    <div className="sm:col-span-2">
                      <label className="text-sm font-medium text-foreground">Service needed</label>
                      <select name="service" required defaultValue="" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30">
                        <option value="" disabled>Choose a service…</option>
                        <option>Basement Waterproofing</option>
                        <option>French Drain Installation</option>
                        <option>Crawl Space Encapsulation</option>
                        <option>Sump Pump System</option>
                        <option>Foundation Drainage Repair</option>
                        <option>Grading & Surface Drainage</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-sm font-medium text-foreground">Tell us what's going on</label>
                      <textarea name="message" rows={5} required maxLength={2000} placeholder="E.g. Water in the basement after heavy rain, musty smell in crawl space…" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30" />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-water transition hover:scale-[1.02] disabled:opacity-60"
                    >
                      {submitting ? "Sending…" : <>Send Request <Send className="h-4 w-4" /></>}
                    </button>
                    <p className="sm:col-span-2 text-center text-xs text-muted-foreground">
                      By submitting, you agree we may contact you about your inquiry. We never share your info.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, className = "" }: { label: string; name: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
