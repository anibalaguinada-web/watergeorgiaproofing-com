import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Seo } from "@/lib/Seo";
import { Award, HeartHandshake, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";


const values = [
  { icon: ShieldCheck, title: "Integrity", desc: "We never sell what you don't need. Honest assessments, transparent pricing — every single job." },
  { icon: Award, title: "Expertise", desc: "Continuously trained on modern waterproofing methods, drainage engineering, and foundation repair." },
  { icon: HeartHandshake, title: "Reliability", desc: "On time. On budget. No mess left behind. We treat your property like our own." },
  { icon: Sparkles, title: "Craftsmanship", desc: "Permanent solutions, not patches. Every system we install is built to outlast the home it protects." },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us | Georgia Waterproofing — Norcross, GA"
        description="Locally owned waterproofing experts based in Norcross, GA. Honest, licensed, and trusted across Metro Atlanta for over a decade."
        path="/about"
      />
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">About Us</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight sm:text-6xl">
              Norcross-born. Built on <span className="text-gradient-water">trust</span>.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              We're Georgia's go-to waterproofing specialists — a locally owned crew dedicated to protecting Metro Atlanta homes from the ground up.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-4xl font-bold sm:text-5xl">Our Story</h2>
            <div className="mt-6 space-y-4 leading-relaxed text-foreground/85">
              <p>
                Georgia Waterproofing & Tree Service was founded in Norcross on a simple observation: homeowners were constantly battling two interconnected problems — water intrusion and the structural damage that follows.
              </p>
              <p>
                We saw too many neighbors getting sold cheap patches that failed within a season. So we built a different kind of business — one that diagnoses problems before recommending solutions, uses the right materials the first time, and stands behind every job.
              </p>
              <p>
                More than a decade later, we're still locally owned, still answering our own phones, and still earning every five-star review the same way we did on day one: by doing the work properly and treating every customer like a neighbor.
              </p>
            </div>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-water transition hover:scale-105">
              Work with our team <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />
            <img src={heroBg} alt="Our team at work" width={800} height={600} loading="lazy" className="relative w-full rounded-3xl object-cover shadow-water" />
          </motion.div>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Our Core Values</p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">The principles behind every project</h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-background p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-water"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
