import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Cpu, Layers, Wrench, ShieldCheck, Activity, Building2 } from "lucide-react";
import GroupHeader from "@/components/group/GroupHeader";
import GroupFooter from "@/components/group/GroupFooter";
import RequestDemoModal from "@/components/RequestDemoModal";
import ProductPortfolio from "@/components/ProductPortfolio";

const capabilities = [
  { icon: Cpu, title: "Embedded & Hardware", desc: "Custom electronics, sensors, and embedded systems engineered for reliable field operation." },
  { icon: Layers, title: "Software & Cloud", desc: "Applications, dashboards, and cloud platforms built around real operational workflows." },
  { icon: Activity, title: "Connected Systems", desc: "End-to-end IoT and telemetry systems integrating hardware, network, and data layers." },
  { icon: Wrench, title: "Engineering Services", desc: "Productisation, prototyping, and lifecycle support for technology-driven initiatives." },
];

const domains = [
  { title: "Tracking & Monitoring", desc: "GPS, telemetry, and asset-monitoring solutions for fleets, equipment, and remote operations." },
  { title: "Industrial Automation", desc: "Control, instrumentation, and automation engineered for production and field environments." },
  { title: "Media & Display", desc: "Networked control and management systems for distributed display and signage infrastructure." },
  { title: "Biomedical & Safety", desc: "Specialised electronics for healthcare, safety-critical, and regulated environments." },
];

const SmartosphereSolutionsLLP = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GroupHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-[900px] h-[900px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 28%) 0%, transparent 60%)" }} />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(32 93% 35%) 0%, transparent 60%)" }} />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Link to="/" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated/50 backdrop-blur-sm mb-6 hover:border-accent/50 transition-colors">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium tracking-wider uppercase text-body">Smartosphere Group · Solutions LLP</span>
            </Link>
            <h1 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-[1.05] tracking-tight">
              Smartosphere
              <br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}>
                Solutions LLP
              </span>
            </h1>
            <p className="mt-5 text-lg lg:text-xl font-light text-body tracking-wide max-w-xl">
              Engineering practical technology for real-world challenges.
            </p>
            <p className="mt-8 text-base lg:text-lg text-body leading-relaxed max-w-xl">
              Smartosphere Solutions LLP is the engineering and technology development arm of the Smartosphere Group.
              The company designs, builds, and deploys hardware–software systems that operate reliably in real
              environments — across tracking, biomedical, industrial, safety, and infrastructure domains.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://staging.smartospheresolutions.com" target="_blank" rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_hsl(350_72%_50%/0.45)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}>
                Visit Smartosphere Solutions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <button onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-heading text-sm font-semibold hover:border-accent/60 hover:text-accent transition-colors">
                Start a Conversation
              </button>
            </div>
          </motion.div>

          {/* Hero visual — stacked engineering system */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="relative aspect-square max-w-[520px] mx-auto w-full">
            <div className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(350 72% 35%) 0%, transparent 65%)" }} />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <linearGradient id="sline" x1="0" x2="1">
                  <stop offset="0%" stopColor="hsl(32 93% 55%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(350 72% 55%)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {[
                { y: 110, label: "Cloud" },
                { y: 170, label: "Software" },
                { y: 230, label: "Firmware" },
                { y: 290, label: "Hardware" },
              ].map((layer, i) => (
                <motion.g key={layer.label}
                  initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}>
                  <path
                    d={`M 100 ${layer.y} L 200 ${layer.y - 30} L 300 ${layer.y} L 200 ${layer.y + 30} Z`}
                    fill="hsl(220 15% 16%)" stroke="url(#sline)" strokeWidth="1.2" opacity={0.95 - i * 0.08}
                  />
                  <text x="200" y={layer.y + 4} textAnchor="middle" fill="hsl(var(--heading))" fontSize="10" fontWeight="600" className="font-heading tracking-widest">
                    {layer.label.toUpperCase()}
                  </text>
                </motion.g>
              ))}
              <motion.line x1="200" y1="80" x2="200" y2="320" stroke="url(#sline)" strokeWidth="1" strokeDasharray="3 4" opacity="0.5"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.9 }} />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 lg:py-28 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">About</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-heading leading-tight">
              The engineering arm of the Smartosphere Group.
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-8 space-y-5 text-lg text-body leading-relaxed">
            <p>
              Smartosphere Solutions LLP focuses on translating ideas, requirements, and operational challenges into
              deployable technology systems. Work spans embedded electronics, firmware, software platforms, and
              integrated hardware–software products engineered for real operating environments.
            </p>
            <p>
              As part of the Smartosphere Group, Solutions LLP works alongside the group's capital and technical
              advisory entities — providing the engineering capability that turns direction and intent into systems that
              perform in the field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Capabilities</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              End-to-end engineering execution.
            </h2>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
            {capabilities.map((c, i) => (
              <motion.div key={c.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }} />
                <div className="relative flex items-start gap-5">
                  <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/60"
                    style={{ boxShadow: "0 0 22px hsl(32 93% 48% / 0.25)" }}>
                    <c.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-heading leading-tight">{c.title}</h3>
                    <p className="mt-3 text-sm text-body leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains */}
      <section className="py-24 lg:py-32 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "radial-gradient(ellipse at center, hsl(350 72% 18% / 0.4) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Domains</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Where engineering meets the field.
            </h2>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {domains.map((d, i) => (
              <motion.div key={d.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-surface-elevated p-8 hover:bg-card transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-heading text-xs font-bold text-accent/80 tracking-[0.2em]">0{i + 1}</span>
                  <div className="h-px flex-1 bg-border" />
                  <Building2 className="w-4 h-4 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-heading leading-tight">{d.title}</h3>
                <p className="mt-3 text-sm text-body leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Portfolio */}
      <ProductPortfolio />

      {/* Closing */}
      <section className="py-28 lg:py-40 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 38%) 0%, transparent 60%)" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-tight">
              Engineering that
              <br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}>
                ships and scales.
              </span>
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-body leading-relaxed">
              Explore the full Smartosphere Solutions LLP product and engineering portfolio.
            </p>
            <a href="https://staging.smartospheresolutions.com" target="_blank" rel="noopener noreferrer"
              className="mt-12 group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_35px_hsl(350_72%_50%/0.5)]"
              style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}>
              Visit Smartosphere Solutions
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <GroupFooter />
    </div>
  );
};

export default SmartosphereSolutionsLLP;
