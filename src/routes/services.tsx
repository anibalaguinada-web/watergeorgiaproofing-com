import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Wrench, Hammer, Waves, Gauge } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Waterproofing Services | Georgia Waterproofing — Norcross, GA" },
      { name: "description", content: "Basement waterproofing, French drain installation, crawl space encapsulation, and sump pump systems across Metro Atlanta. Free estimates." },
      { property: "og:title", content: "Our Waterproofing Services" },
      { property: "og:description", content: "Comprehensive waterproofing solutions for Metro Atlanta homes." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Droplets,
    title: "Basement Waterproofing",
    desc: "Complete interior and exterior systems engineered to stop water intrusion at the source — not mask it. We install perimeter drains, wall membranes, and pressurized sealing systems that reclaim your basement for good.",
    bullets: ["Interior drain tile systems", "Exterior wall membrane", "Crack injection repair", "Vapor & moisture sealing"],
  },
  {
    icon: Wrench,
    title: "French Drain Installation",
    desc: "Expertly graded and gravel-filled subsurface drainage that redirects surface water and groundwater away from your foundation, eliminating soggy yards and basement leaks for decades.",
    bullets: ["Perforated pipe & filter fabric", "Engineered slope & discharge", "Surface drain integration", "Yard restoration after install"],
  },
  {
    icon: ShieldCheck,
    title: "Crawl Space Encapsulation",
    desc: "Heavy-duty 20-mil vapor barriers, sealed vents, and commercial-grade dehumidifiers to keep your crawl space dry, pest-free, and energy-efficient — and the air above it healthier to breathe.",
    bullets: ["20-mil reinforced vapor barrier", "Vent & rim joist sealing", "Dehumidifier installation", "Air-quality monitoring"],
  },
  {
    icon: Hammer,
    title: "Sump Pump Systems",
    desc: "Primary pumps with battery backup, water-level alarms, and discharge lines built to handle the worst Georgia thunderstorms — without losing a beat when the power goes out.",
    bullets: ["High-capacity primary pump", "Battery backup system", "Alarm + smart monitoring", "Discharge piping to safe drain"],
  },
  {
    icon: Waves,
    title: "Foundation Drainage Repair",
    desc: "Diagnosing and rebuilding failed perimeter drainage around homes whose original systems have collapsed, clogged, or never worked correctly to begin with.",
    bullets: ["Camera inspection of existing drains", "Excavation & line replacement", "Catch basin & inlet repair", "Tie-in to municipal storm drain"],
  },
  {
    icon: Gauge,
    title: "Grading & Surface Drainage",
    desc: "Re-grading lawns, installing swales, and routing downspouts so storm water actually moves away from your foundation instead of pooling against it.",
    bullets: ["Lot regrading", "Downspout extensions", "Catch basin systems", "Permeable hardscape integration"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Services</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight sm:text-6xl">
              Permanent waterproofing for <span className="text-gradient-water">every Georgia home</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/75">
              From foundation drainage to full crawl space encapsulation, we engineer solutions designed to outlast the storm season — and the next one.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-water"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent text-accent-foreground shadow-glow">
                <s.icon className="h-7 w-7" />
              </div>
              <h2 className="font-display text-2xl font-bold">{s.title}</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.desc}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Need a custom solution?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">Every property is different. Book a free on-site assessment and we'll engineer a plan tailored to your home.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-water transition hover:scale-105">
            Request a Free Estimate <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
