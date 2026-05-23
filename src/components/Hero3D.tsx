import { motion } from "framer-motion";
import { Droplets, Shield } from "lucide-react";

export function Hero3D() {
  return (
    <div className="relative h-[440px] w-full perspective-1000 sm:h-[520px]">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.85_0.16_215/0.35),transparent_60%)]" />

      {/* Concentric rings */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/30"
          style={{ width: 220 + i * 90, height: 220 + i * 90 }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent shadow-glow" />
        </motion.div>
      ))}

      {/* Ripples */}
      {[0, 1, 2].map((i) => (
        <div
          key={`r-${i}`}
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent/40 animate-ripple"
          style={{ animationDelay: `${i * 1}s` }}
        />
      ))}

      {/* Floating 3D droplet card */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d"
        animate={{ y: [0, -18, 0], rotateX: [0, 6, 0], rotateY: [0, -8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative h-44 w-44 rounded-full bg-gradient-accent shadow-water" style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}>
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/40 to-transparent" style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }} />
          <Droplets className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-white drop-shadow-lg" />
        </div>
      </motion.div>

      {/* Floating chips */}
      <motion.div
        className="absolute left-[10%] top-[18%] rounded-2xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2">
          <Shield className="h-4 w-4 text-accent" />
          <span className="text-xs font-semibold text-foreground">Licensed & Insured</span>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[8%] top-[28%] rounded-2xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="text-xs font-semibold text-foreground">★★★★★ 5-Star Rated</div>
      </motion.div>

      <motion.div
        className="absolute bottom-[12%] left-[14%] rounded-2xl bg-deep/90 px-4 py-3 text-white shadow-water"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="text-xs font-semibold">Free Estimates</div>
      </motion.div>

      <motion.div
        className="absolute bottom-[18%] right-[12%] rounded-2xl bg-white/95 px-4 py-3 shadow-soft backdrop-blur"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <div className="text-xs font-semibold text-foreground">15+ Years Experience</div>
      </motion.div>
    </div>
  );
}
