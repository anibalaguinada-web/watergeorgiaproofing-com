import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Droplets, Hammer, ShieldCheck, Star, Wrench, Phone, Quote, CheckCircle2 } from "lucide-react";
import { Hero3D } from "@/components/Hero3D";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Georgia Waterproofing | Norcross Basement & Foundation Experts" },
      { name: "description", content: "Stop water damage at the source. Basement waterproofing, French drains & crawl space encapsulation in Norcross & Metro Atlanta. Free estimates — (678) 580-5807." },
      { property: "og:title", content: "Georgia Waterproofing — Protect Your Home, Year Round" },
      { property: "og:description", content: "Licensed & insured waterproofing experts trusted across Metro Atlanta." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const projects = [
  { src: project1, label: "French Drain Installation" },
  { src: project2, label: "Crawl Space Encapsulation" },
  { src: project3, label: "Foundation Drainage" },
  { src: project4, label: "Sump Pump System" },
];

const testimonials = [
  {
    quote: "I requested service for a brand new house build I purchased. There were 3 French drains in the backyard placed during the build. The team came out and fixed the drainage issue completely. Highly recommend!",
    name: "Sarah M.",
    where: "Norcross, GA",
  },
  {
    quote: "We had persistent water in our crawlspace after heavy rains. Georgia Waterproofing installed a full encapsulation and sump pump system. It's been bone dry ever since. Great investment.",
    name: "Michael R.",
    where: "Duluth, GA",
  },
  {
    quote: "Exceptional service from start to finish. Honest assessment, fair pricing, and the crew left the yard cleaner than they found it. Already recommended them to my neighbor.",
    name: "James T.",
    where: "Peachtree Corners, GA",
  },
  {
    quote: "After two other companies tried and failed to fix our basement leak, Georgia Waterproofing diagnosed it on the first visit and solved it permanently. Total professionals.",
    name: "Linda B.",
    where: "Roswell, GA",
  },
];

const services = [
  { icon: Droplets, title: "Basement Waterproofing", desc: "Interior & exterior systems that stop seepage at the foundation wall and keep your basement bone dry." },
  { icon: Wrench, title: "French Drain Installation", desc: "Engineered subsurface drainage that redirects groundwater before it reaches your foundation." },
  { icon: ShieldCheck, title: "Crawl Space Encapsulation", desc: "Heavy vapor barriers, dehumidifiers, and sealing that eliminate musty air and protect joists." },
  { icon: Hammer, title: "Sump Pump Systems", desc: "Reliable primary + battery-backup pumps that keep working when the power doesn't." },
];

function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Trusted in Norcross & Metro Atlanta
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Protect Your Home.<br />
              <span className="text-gradient-water">Stop the Water.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              Expert basement waterproofing, French drains, and crawl space encapsulation designed to keep your foundation safe, dry, and built to last — through every Georgia rainstorm.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-water transition hover:scale-105">
                Get Your Free Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <a href="tel:+16785805807" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10">
                <Phone className="h-4 w-4" /> (678) 580-5807
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-accent" /> Licensed & Insured</div>
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-accent" /> Free Estimates</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4 text-accent" /> 5-Star Rated</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Hero3D />
          </motion.div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { v: "15+", l: "Years Experience" },
            { v: "1,200+", l: "Projects Completed" },
            { v: "5.0★", l: "Average Rating" },
            { v: "100%", l: "Satisfaction Promise" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient-water">{s.v}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">What We Do</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Waterproofing solutions built for Georgia weather</h2>
          <p className="mt-4 text-muted-foreground">From sub-foundation drainage to full encapsulation, we engineer permanent fixes — not patches.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-water"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent text-accent-foreground shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
            See all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ============ PROJECTS GALLERY ============ */}
      <section className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Recent Projects</p>
              <h2 className="mt-2 font-display text-4xl font-bold sm:text-5xl">See the work, not the words</h2>
            </div>
            <p className="max-w-md text-muted-foreground">Real installations across Norcross, Duluth, Roswell and surrounding neighborhoods. Every job inspected, permitted where required, and built to last.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-soft"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.src} alt={p.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/95 via-deep/40 to-transparent p-5 pt-16">
                  <div className="text-xs uppercase tracking-wider text-white/60">Project {i + 1}</div>
                  <div className="mt-1 font-display text-base font-semibold text-white">{p.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Customer Stories</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Homeowners who chose dry</h2>
          <div className="mt-4 flex items-center justify-center gap-1 text-accent">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
            <span className="ml-2 text-sm font-medium text-foreground">5.0 average across Google, Yelp & Nextdoor</span>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-card p-7 shadow-soft"
            >
              <Quote className="absolute -top-3 left-6 h-7 w-7 rounded-full bg-gradient-accent p-1.5 text-accent-foreground" />
              <div className="flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent font-display font-bold text-accent-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.where}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ============ LONG-FORM SEO CONTENT ============ */}
      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">The Complete Guide</p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Comprehensive Waterproofing for Metro Atlanta Homes</h2>

          <div className="prose prose-lg mt-8 max-w-none text-foreground/85 space-y-6 leading-relaxed">
            <p>
              At Georgia Waterproofing & Tree Service, we understand that your home is your single largest investment — and the foundation it sits on is what protects every other dollar inside it. Located in Norcross, GA, and proudly serving the greater Metro Atlanta area, we've spent more than a decade engineering waterproofing systems that keep basements, crawl spaces, and foundations bone dry through everything Georgia's climate can throw at them. From the steady spring downpours to the surprise summer thunderstorms and the slow, soaking winter rains, we build solutions designed to perform for decades, not seasons.
            </p>

            <h3 className="font-display text-2xl font-bold pt-4">Why Waterproofing Matters in Georgia</h3>
            <p>
              Metro Atlanta's red clay soil is famously beautiful — and famously bad for drainage. Clay holds water against your foundation wall instead of letting it drain away, building up hydrostatic pressure that pushes moisture through even the smallest crack. Add in our flat lots, heavy rainfall events, and aging gutter systems, and the result is what we see every single week: damp basements, musty crawl spaces, peeling paint near baseboards, white efflorescence on concrete walls, and worst of all, slow but steady damage to the wood framing that holds your house up.
            </p>
            <p>
              Most homeowners don't notice the problem until it becomes visible. By then, repairs are exponentially more expensive. A small unaddressed leak can quietly rot a floor joist, feed a colony of mold behind drywall, attract termites and other pests, and cut a home's resale value by tens of thousands of dollars. The good news: every one of these issues is preventable with the right waterproofing system, installed correctly the first time.
            </p>

            <h3 className="font-display text-2xl font-bold pt-4">Our Approach: Diagnose First, Then Engineer</h3>
            <p>
              Most waterproofing companies sell a single product and try to apply it to every house. That's not how we work. Every property is different — different soil, different grading, different gutter setup, different foundation type. Before we ever quote a job, one of our specialists comes to your home, walks the property, inspects the interior, and identifies exactly where the water is coming from and why. Only then do we recommend a system. That diagnostic-first approach is why our customers' fixes actually stay fixed.
            </p>

            <h3 className="font-display text-2xl font-bold pt-4">French Drain Installation</h3>
            <p>
              French drains are the workhorses of yard and foundation drainage. Our installations involve excavating a trench around the problem area, laying a perforated pipe wrapped in filter fabric, surrounding it with washed gravel, and tying it into a proper discharge point well away from the home. Done correctly, a French drain quietly redirects thousands of gallons of groundwater every storm, before that water ever reaches your foundation wall. Done incorrectly — too shallow, the wrong slope, no filter fabric — it clogs within a year and costs the homeowner twice. We do it right, the first time.
            </p>

            <h3 className="font-display text-2xl font-bold pt-4">Basement Waterproofing</h3>
            <p>
              For homes that already have water intrusion in the basement, we offer both interior and exterior waterproofing systems. Interior systems intercept water at the base of the wall and route it to a sump pit, where a high-capacity pump discharges it safely outside. Exterior systems excavate down to the footing and apply a membrane directly to the foundation wall — the gold standard, when site conditions allow it. We'll walk you through both options honestly, including cost, disruption, and longevity, so you can make the decision that's right for your home.
            </p>

            <h3 className="font-display text-2xl font-bold pt-4">Crawl Space Encapsulation</h3>
            <p>
              An open, vented crawl space is one of the biggest sources of moisture, mold, and energy loss in any Georgia home. Encapsulation seals the crawl space with a heavy 20-mil vapor barrier across the floor and up the walls, seals every vent, and installs a commercial-grade dehumidifier to keep humidity locked below 55%. The result is a clean, conditioned space that protects your wood framing, eliminates the musty smell upstairs, lowers your energy bill, and makes the whole house healthier to live in.
            </p>

            <h3 className="font-display text-2xl font-bold pt-4">Sump Pump Systems with Battery Backup</h3>
            <p>
              A sump pump is only as good as the power feeding it — and in Georgia, power often goes out during the exact storms when you need the pump most. Every sump system we install includes a battery backup that automatically takes over when the grid fails, plus an audible alarm if water levels ever climb above the safe line. It's the kind of detail that separates a professional installation from a hardware-store fix.
            </p>

            <h3 className="font-display text-2xl font-bold pt-4">Why Homeowners Choose Us</h3>
            <p>
              We're a locally owned, family-operated business based right here in Norcross. We answer our own phone, we show up when we say we will, and we stand behind every job we do. Our team is fully licensed, insured, and trained on the latest waterproofing techniques — and our reviews on Google, Yelp, and Nextdoor reflect what our customers actually experience: clear communication, fair pricing, and work that lasts. We don't use pressure tactics, we don't sell systems you don't need, and we don't disappear after the check clears. If you ever have a question or concern about a system we installed, we're a phone call away.
            </p>

            <h3 className="font-display text-2xl font-bold pt-4">Areas We Serve</h3>
            <p>
              We proudly serve homeowners across Norcross, Peachtree Corners, Duluth, Suwanee, Roswell, Alpharetta, Lawrenceville, Dunwoody, Sandy Springs, Tucker, Lilburn, and the entire greater Metro Atlanta region. If your home is in Gwinnett, Fulton, DeKalb, or Cobb County, we can be on-site for a free estimate this week.
            </p>

            <h3 className="font-display text-2xl font-bold pt-4">Get Your Free Estimate Today</h3>
            <p>
              Don't wait for the next big storm to find out where your home is vulnerable. A proactive inspection takes less than an hour, costs nothing, and gives you a clear, honest picture of your home's drainage and waterproofing status. Whether you have an active leak, a long-standing musty smell, or you just want peace of mind before the next rainy season, we'd love the chance to earn your trust.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Ready to Protect Your Property?</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">Free, no-obligation inspections. Honest pricing. Permanent solutions. Call now or request a quote online.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-water transition hover:scale-105">
              Get Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+16785805807" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10">
              <Phone className="h-4 w-4" /> (678) 580-5807
            </a>
          </div>
          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Same-week appointments</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> No-pressure quotes</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Lifetime workmanship guarantee</li>
          </ul>
        </div>
      </section>
    </>
  );
}
