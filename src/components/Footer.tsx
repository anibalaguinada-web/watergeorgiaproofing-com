import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Georgia Waterproofing & Tree Service" className="h-20 w-auto object-contain" />
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Norcross-based experts in basement waterproofing, French drains, and crawl space encapsulation. Licensed, insured, and trusted across Metro Atlanta.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/services" className="hover:text-accent">Services</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-accent" /><a href="tel:+16785805807" className="hover:text-accent">(678) 580-5807</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-accent" /><a href="mailto:sales@watergeorgiaproofing.com" className="hover:text-accent break-all">sales@watergeorgiaproofing.com</a></li>
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-accent" /><span>1327 Robin Hill Dr<br/>Norcross, GA 30093</span></li>
              <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-accent" /><span>Mon–Fri 8:00 AM – 4:00 PM<br/>Sat–Sun Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Georgia Waterproofing & Tree Service. All rights reserved.</p>
          <p>Licensed & Insured · Serving Metro Atlanta</p>
        </div>
      </div>
    </footer>
  );
}
