import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import RequestDemoModal from "@/components/RequestDemoModal";
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Layers,
  Network,
  Wrench,
  ShieldCheck,
  Compass,
  LifeBuoy,
  MapPin,
  Settings,
  Monitor,
  Activity,
  Cloud,
  Radio,
  Lock
} from "lucide-react";
import GroupHeader from "@/components/group/GroupHeader";
import GroupFooter from "@/components/group/GroupFooter";

const expertise = [
  {
    icon: Cpu,
    title: "Hardcore Hardware & Firmware",
    desc: "Designing and engineering custom electronics, advanced sensor arrays, and robust embedded systems built to operate reliably in highly unpredictable field environments.",
  },
  {
    icon: Layers,
    title: "Enterprise Infrastructure",
    desc: "Developing high-availability software applications, custom operational dashboards, and resilient cloud architectures explicitly built around complex, high-throughput enterprise workflows.",
  },
  {
    icon: Network,
    title: "Flawless Machine Communication",
    desc: "Architecting secure, end-to-end IoT and telemetry networks that seamlessly bridge the physical and digital worlds across hardware, networking, and data layers.",
  },
  {
    icon: Wrench,
    title: "Commercializing Prototypes",
    desc: "Taking early-stage R&D blueprints or unstable prototypes and hardening them into stable, manufacturable, and regulatory-compliant products optimized for massive scale.",
  },
];

const portfolio = [
  {
    title: "Advanced Telematics & Tracking Systems",
    items: [
      { icon: MapPin, name: "GeoTracker", desc: "Real-time tracking and telemetry systems delivering deep asset location, operational context, and condition metrics under harsh conditions.", href: "#" },
      { icon: Activity, name: "MHITS", desc: "Human and medical intelligence tracking platforms engineered for continuous safety monitoring in high-stakes environments.", href: "/case-studies/biomedical-monitoring" }
    ]
  },
  {
    title: "Industrial Automation & Specialized Electronics",
    items: [
      { icon: Cpu, name: "mFlash", desc: "High-reliability industrial electronics engineered for secure data handling and automation control in demanding processing environments.", href: "#" },
      { icon: Settings, name: "GoKart Servomotor", desc: "Precision digital control systems designed for extreme responsiveness in high-performance motorsport applications.", href: "/case-studies/gokart-track" }
    ]
  },
  {
    title: "Connected Signage & Media Infrastructure",
    items: [
      { icon: Monitor, name: "Billboard Controls", desc: "On-site electronic control modules built to maintain the uptime and reliable power distribution of digital billboard infrastructure.", href: "/case-studies/billboard-network" },
      { icon: Cloud, name: "Billboard Portal", desc: "A centralized, enterprise cloud platform built for real-time monitoring, remote management, and analytics of massive display networks.", href: "/case-studies/billboard-network" }
    ]
  },
  {
    title: "Regulated & Safety-Critical Environments",
    items: [
      { icon: ShieldCheck, name: "BioMed", desc: "Special-purpose biomedical electronics and diagnostic monitoring systems built around absolute data integrity and secure handling.", href: "/case-studies/biomedical-monitoring" },
      { icon: Radio, name: "Radiation Electronics", desc: "Ultra-precise radiation measurement and monitoring arrays engineered for heavily regulated, safety-driven environments.", href: "/case-studies/radiation-safety" },
      { icon: Lock, name: "Laplok", desc: "Smart electronic locking architectures built for high-security asset protection and audited access control.", href: "#" }
    ]
  }
];

const SmartosphereSolutionsLLP = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GroupHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 left-1/3 w-[900px] h-[900px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 28%) 0%, transparent 60%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(32 93% 35%) 0%, transparent 60%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated/50 backdrop-blur-sm mb-6 hover:border-accent/50 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium tracking-wider uppercase text-body">
                Smartosphere Ecosystem · Solutions
              </span>
            </Link>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-[1.05] tracking-tight">
              Smartosphere
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}
              >
                Solutions LLP
              </span>
            </h1>
            <p className="mt-5 text-lg lg:text-xl font-light text-body tracking-wide max-w-xl">
              Building with Precision. Empowering at Scale.
            </p>
            <p className="mt-8 text-base lg:text-lg text-body leading-relaxed max-w-xl">
              Delivering the robust engineering execution required to turn technical blueprints into stable, market-ready products.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_hsl(350_72%_50%/0.45)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
              >
                Start a Discussion
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Hero Visual — system architecture layers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative aspect-square max-w-[520px] mx-auto w-full"
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(350 72% 35%) 0%, transparent 65%)" }}
            />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <linearGradient id="sline" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(32 93% 55%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(350 72% 55%)" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Architecture layers — isometric stack */}
              {[
                { y: 110, label: "Cloud" },
                { y: 170, label: "Software" },
                { y: 230, label: "Firmware" },
                { y: 290, label: "Hardware" },
              ].map((layer, i) => (
                <motion.g
                  key={layer.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                >
                  <path
                    d={`M 100 ${layer.y} L 200 ${layer.y - 30} L 300 ${layer.y} L 200 ${layer.y + 30} Z`}
                    fill="hsl(220 15% 16%)"
                    stroke="url(#sline)"
                    strokeWidth="1.2"
                    opacity={0.95 - i * 0.08}
                  />
                  <text x="200" y={layer.y + 4} textAnchor="middle" fill="hsl(var(--heading))" fontSize="10" fontWeight="600" className="font-heading tracking-widest">
                    {layer.label.toUpperCase()}
                  </text>
                </motion.g>
              ))}

              {/* Vertical connectors */}
              <motion.line x1="200" y1="80" x2="200" y2="320" stroke="url(#sline)" strokeWidth="1" strokeDasharray="3 4" opacity="0.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.9 }} />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Our Role */}
      <section className="py-24 lg:py-28 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="lg:col-span-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Role</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-heading leading-tight">
              Engineering Execution, Not Theoretical Blueprints.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-5 text-lg text-body leading-relaxed"
          >
            <p>
              A pristine architecture or a well-funded vision means nothing without the discipline to build it right. Smartosphere Solutions exists to provide that definitive execution capability. We transform complex software architectures, hardware requirements, and high-stakes operational intent into rugged, enterprise-grade technology systems engineered to perform flawlessly in demanding, real-world environments.
            </p>
            <p>
              Blueprints alone do not scale businesses. What truly brings an innovation to market is execution explicitly paired with deep embedded rigor, resilient cloud infrastructure, and a relentless focus on long-term operational stability. Smartosphere Solutions is uniquely positioned to deliver this precise engineering execution as the foundational building block of the broader Smartosphere network.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-24 lg:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }} className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Focus: Areas of Expertise</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Turning Technical Blueprints into Market-Ready Realities.
            </h2>
          </motion.div>

          <div className="mt-16 flex flex-wrap justify-center gap-6 lg:gap-8">
            {expertise.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(50%-1rem)] group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }} />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/60 mb-6"
                    style={{ boxShadow: "0 0 22px hsl(32 93% 48% / 0.25)" }}>
                    <a.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-heading leading-tight">{a.title}</h3>
                  <p className="mt-4 text-sm text-body leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solutions Portfolio */}
      <section className="py-24 lg:py-32 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "radial-gradient(ellipse at center, hsl(350 72% 18% / 0.4) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">The Solutions Portfolio</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight mb-6">
              Production-Grade Platforms Built for Real Environments.
            </h2>
            <p className="text-lg text-body leading-relaxed mb-16">
              Our engineering team has conceptualized, built, and deployed a proprietary suite of specialized hardware-software platforms designed to solve complex industrial, tracking, and infrastructure challenges.
            </p>
          </motion.div>

          <div className="mt-16 space-y-16">
            {portfolio.map((p, i) => (
              <div key={p.title}>
                <h3 className="font-heading text-2xl font-bold text-heading mb-8">{p.title}</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {p.items.map((item, j) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: j * 0.08 }}
                    >
                      <Link
                        to={item.href || "#"}
                        className="group relative rounded-2xl p-8 border border-transparent bg-[#23272f] hover:border-accent/80 transition-all duration-300 overflow-hidden block hover:shadow-[0_0_30px_hsl(32_93%_48%/0.1)]"
                      >
                        {/* Soft corner radial glow */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                          style={{ background: "radial-gradient(circle, hsl(32 93% 40%) 0%, transparent 70%)" }} />

                        <div className="relative">
                          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-black/20 border border-white/5 mb-6 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(32_93%_48%/0.25)]">
                            <item.icon className="w-5 h-5 text-accent" />
                          </div>
                          <h4 className="font-heading text-xl font-bold text-white leading-tight mb-3">{item.name}</h4>
                          <p className="text-sm text-body leading-relaxed">{item.desc}</p>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Smartosphere Advantage */}
      <section className="py-24 lg:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">The Smartosphere Advantage</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight mb-6">
              Execution Informed by Strategy.
            </h2>
            <p className="text-lg text-body leading-relaxed mb-16">
              Smartosphere Solutions does not build in isolation. Our engineering pipelines are directly integrated with and accelerated by the wider Smartosphere ecosystem:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden text-left"
            >
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }}
              />
              <div className="relative">
                <div
                  className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/60"
                  style={{ boxShadow: "0 0 22px hsl(32 93% 48% / 0.25)" }}
                >
                  <Compass className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-heading leading-tight mb-3">
                  Strategy Validated
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  We build in perfect tandem with <strong className="text-white">Smartosphere Technologies INC</strong>, translating their precise enterprise architectures into production-ready code and hardware without a single ounce of lost context or structural drift.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden text-left"
            >
              <div
                className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                style={{ background: "radial-gradient(circle, hsl(32 93% 40%) 0%, transparent 70%)" }}
              />
              <div className="relative">
                <div
                  className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/60"
                  style={{ boxShadow: "0 0 22px hsl(32 93% 48% / 0.25)" }}
                >
                  <LifeBuoy className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-heading leading-tight mb-3">
                  Capital Optimized
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  We coordinate closely with <strong className="text-white">Smartosphere Capital LLC</strong>, providing their backed ventures with immediate, unhindered access to an elite engineering team, significantly shrinking their time-to-market and de-risking execution timelines.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing / Next Step */}
      <section className="py-28 lg:py-40 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 38%) 0%, transparent 60%)" }}
          />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">Next Step</p>
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-tight">
              From Blueprint to
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}
              >
                Production
              </span>
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-body leading-relaxed max-w-3xl mx-auto">
              Smartosphere Solutions delivers the engineering muscle, but a complete lifecycle requires alignment across the entire ecosystem. See how our specialized entities can further accelerate your vision:
            </p>

            <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8 text-left">
              <div className="p-8 rounded-2xl border border-border bg-surface-elevated/40 backdrop-blur-sm hover:border-accent/40 transition-all flex flex-col h-full">
                <h3 className="font-heading text-2xl font-bold text-heading mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                  Smartosphere Capital LLC
                </h3>
                <p className="text-body leading-relaxed mb-8 flex-1">
                  Pairing targeted capital participation with long-term strategic growth to empower the innovator.
                </p>
                <div className="mt-auto">
                  <Link
                    to="/capital"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-heading text-sm font-semibold hover:border-accent/60 hover:text-accent transition-colors w-full justify-center"
                  >
                    Explore Smartosphere Capital
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-surface-elevated/40 backdrop-blur-sm hover:border-accent/40 transition-all flex flex-col h-full">
                <h3 className="font-heading text-2xl font-bold text-heading mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                  Smartosphere Technologies INC
                </h3>
                <p className="text-body leading-relaxed mb-8 flex-1">
                  Guiding innovators through complex technical landscapes with precise, enterprise-grade technology strategy.
                </p>
                <div className="mt-auto">
                  <Link
                    to="/technologies"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-heading text-sm font-semibold hover:border-accent/60 hover:text-accent transition-colors w-full justify-center"
                  >
                    Explore Smartosphere Technologies
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-20">
              <p className="text-xl font-medium text-heading mb-8">
                Ready to deploy precision engineering at scale?
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_35px_hsl(350_72%_50%/0.5)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
              >
                Discuss an Opportunity
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <GroupFooter />
    </div>
  );
};

export default SmartosphereSolutionsLLP;
