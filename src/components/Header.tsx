import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={logo} alt="Georgia Waterproofing logo" className="h-12 w-12 object-contain transition-transform group-hover:scale-110" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-base font-bold text-foreground">Georgia Waterproofing</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">& Tree Service</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-medium text-foreground bg-muted" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+16785805807" className="flex items-center gap-2 text-sm font-medium text-foreground">
            <Phone className="h-4 w-4 text-accent" /> (678) 580-5807
          </a>
          <Link to="/contact" className="rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-water transition hover:scale-105">
            Free Quote
          </Link>
        </div>

        <button className="md:hidden rounded-full p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col gap-1 px-4 py-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-base font-medium text-foreground hover:bg-muted">
                {n.label}
              </Link>
            ))}
            <a href="tel:+16785805807" className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-foreground">
              <Phone className="h-4 w-4 text-accent" /> (678) 580-5807
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 rounded-full bg-gradient-accent px-5 py-3 text-center text-sm font-semibold text-accent-foreground">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
