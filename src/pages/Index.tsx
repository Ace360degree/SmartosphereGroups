import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Banknote, Compass, Cpu, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import GroupHeader from "@/components/group/GroupHeader";
import GroupFooter from "@/components/group/GroupFooter";
import RequestDemoModal from "@/components/RequestDemoModal";

const entities = [
  {
    icon: Banknote,
    name: "Smartosphere Capital LLC",
    tag: "Capital Participation",
    summary:
      "Supporting innovation through strategic participation and growth-oriented opportunities.",
    cta: "Explore Smartosphere Capital",
    href: "/capital",
  },
  {
    icon: Compass,
    name: "Smartosphere Technologies INC",
    tag: "Technical Direction",
    summary: "Strategic technology direction for complex innovation.",
    cta: "Explore Smartosphere Technologies",
    href: "/technicalities",
  },
  {
    icon: Cpu,
    name: "Smartosphere Solutions LLP",
    tag: "Engineering Execution",
    summary: "Engineering practical technology for real-world challenges.",
    cta: "Explore Smartosphere Solutions LLP",
    href: "/solutions-llp",
  },
];

const approach = [
  {
    icon: Banknote,
    title: "Capital",
    desc: "Supporting innovation opportunities through strategic participation.",
  },
  {
    icon: Compass,
    title: "Technical Direction",
    desc: "Helping organisations make informed technology decisions.",
  },
  {
    icon: Cpu,
    title: "Engineering",
    desc: "Transforming ideas into practical, deployable systems.",
  },
];

const GroupHome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <GroupHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-30 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 35%) 0%, transparent 60%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(32 93% 40%) 0%, transparent 60%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface-elevated/50 backdrop-blur-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-xs font-medium tracking-wider uppercase text-body">Smartosphere Group</span>
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl font-bold text-heading leading-[1.05] tracking-tight">
              Smartosphere
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}
              >
                Group
              </span>
            </h1>
            <p className="mt-5 text-xl lg:text-2xl font-light text-body tracking-wide">
              Supporting Innovation Through Capital, Strategy &amp; Engineering.
            </p>
            <p className="mt-8 text-base lg:text-lg text-body leading-relaxed max-w-xl">
              Smartosphere Group brings together specialised entities focused on innovation enablement, technology
              consulting, and engineering execution. Through a combination of strategic thinking, technical expertise,
              and practical implementation, the group supports organisations, innovators, and technology-driven
              initiatives across different stages of growth and development.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {/* <Link
                to="/capital"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_hsl(350_72%_50%/0.45)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
              >
                Explore Smartosphere Capital
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link> */}
              <a
                href="#entities"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_hsl(350_72%_50%/0.45)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
              >
                View Our Entities
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Hero Visual — connected nodes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative aspect-square max-w-[520px] mx-auto w-full"
          >
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 65%)" }}
            />
            <svg viewBox="0 0 400 400" className="relative w-full h-full">
              <defs>
                <linearGradient id="gedge" x1="80" y1="300" x2="320" y2="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="hsl(32 93% 55%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(350 72% 55%)" stopOpacity="0.8" />
                </linearGradient>
                <radialGradient id="gnodeGlow">
                  <stop offset="0%" stopColor="hsl(32 93% 60%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(350 72% 40%)" stopOpacity="0" />
                </radialGradient>
              </defs>

              <motion.path d="M200 80 L80 300" stroke="url(#gedge)" strokeWidth="1.5" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 0.4 }} />
              <motion.path d="M200 80 L320 300" stroke="url(#gedge)" strokeWidth="1.5" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 0.6 }} />
              <motion.path d="M80 300 L320 300" stroke="url(#gedge)" strokeWidth="1.5" fill="none"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, delay: 0.8 }} />

              <circle cx="200" cy="200" r="60" fill="url(#gnodeGlow)" />
              <motion.circle cx="200" cy="200" r="22" fill="hsl(220 15% 16%)" stroke="hsl(32 93% 55%)" strokeWidth="1.5"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.8 }} style={{ transformOrigin: "200px 200px" }} />
              <text x="200" y="240" textAnchor="middle" fill="hsl(var(--heading))" className="font-heading" fontSize="13" fontWeight="600">
                Clientele
              </text>

              {[
                { cx: 200, cy: 80, label: "Capital" },
                { cx: 80, cy: 300, label: "Technology" },
                { cx: 320, cy: 300, label: "Engineering" },
              ].map((n, i) => (
                <g key={n.label}>
                  <circle cx={n.cx} cy={n.cy} r="40" fill="url(#gnodeGlow)" opacity="0.7" />
                  <motion.circle
                    cx={n.cx} cy={n.cy} r="14"
                    fill="hsl(220 15% 10%)" stroke="hsl(350 72% 55%)" strokeWidth="1.5"
                    initial={{ r: 0 }}
                    animate={{ r: 14 }}
                    transition={{ duration: 0.8, delay: 1 + i * 0.2 }}
                  />
                  <text x={n.cx} y={n.cy + (n.cy < 200 ? -28 : 35)} textAnchor="middle"
                    fill="hsl(var(--heading))" className="font-heading" fontSize="13" fontWeight="600">
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Shared Vision */}
      <section className="py-24 lg:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Vision</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              A Shared Vision for Innovation
            </h2>
            <div className="mt-8 space-y-5 text-lg text-body leading-relaxed">
              <p>
                Innovation requires more than ideas. It requires the ability to evaluate opportunities, make informed
                decisions, and execute effectively.
              </p>
              <p>
                Smartosphere Group was established around this belief, bringing together distinct capabilities that
                address different aspects of innovation and technology development.
              </p>
              <p>
                Each entity within the group focuses on a specific area of expertise while contributing to a broader
                vision of supporting meaningful and sustainable innovation.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Three Entities */}
      <section id="entities" className="py-24 lg:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">The Group</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Three Specialised Entities.
              <br />
              One Shared Vision.
            </h2>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {entities.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }} />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg border border-accent/40 bg-background/50 mb-6"
                    style={{ boxShadow: "0 0 24px hsl(32 93% 48% / 0.25)" }}>
                    <p.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-heading leading-tight">{p.name}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-accent/90">{p.tag}</p>
                  <p className="mt-5 text-sm text-body leading-relaxed">{p.summary}</p>
                  <Link to={p.href} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-heading group-hover:text-accent transition-colors">
                    {p.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="py-24 lg:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Network</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              Organisations Connected Through
              <br />
              Capital, Technology &amp; Engineering
            </h2>
            <div className="mt-6 space-y-4 text-base lg:text-lg text-body leading-relaxed">
              <p>
                Smartosphere Group has worked with, collaborated with, supported, or engaged with organisations across
                technology, engineering, infrastructure, research, and innovation initiatives.
              </p>
              <p>
                These relationships represent a diverse network of entities connected through shared objectives,
                specialised expertise, and real-world execution.
              </p>
            </div>
          </motion.div>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { name: "Innovative Billboards", monogram: "IB", logo: "/network logos/innovativebillboards.avif" },
              { name: "TECHLok", monogram: "TL", logo: "/network logos/techlok-logo.webp" },
              { name: "Pointe Angels", monogram: "PA", logo: "/network logos/pointeangels.png" },
              { name: "LightHanded Enterprises", monogram: "LH", logo: "/network logos/Lighthanded.png" },
              { name: "mQrg", monogram: "mQ", logo: "/network logos/logo-mq.png" },
              { name: "BARC", monogram: "BARC", logo: "/network logos/BARC-Logo.png" },
              { name: "Wherabouts", monogram: "Wa", logo: "/network logos/wherabouts.svg" },
            ].map((o, i) => (
              <motion.div
                key={o.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="group relative rounded-xl p-6 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden text-center"
              >
                <div
                  className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                  style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 70%)" }}
                />
                <div className="relative">
                  <div className="flex items-center justify-center h-16 mb-3 transition-all">
                    {o.logo ? (
                      <img src={o.logo} alt={o.name} className={`max-h-full max-w-[80%] object-contain ${o.invert ? 'invert' : ''}`} />
                    ) : (
                      <span className="font-heading font-bold text-xl text-body group-hover:text-accent transition-colors tracking-wide">
                        {o.monogram}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-medium text-body group-hover:text-heading transition-colors leading-snug">
                    {o.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              to="/network"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_hsl(350_72%_50%/0.45)]"
              style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
            >
              Explore Our Network
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* One Vision. Multiple Capabilities. */}
      <section className="py-24 lg:py-32 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-60"
          style={{ background: "radial-gradient(ellipse at center, hsl(350 72% 18% / 0.4) 0%, transparent 70%)" }} />
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">The Group Model</p>
              <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
                One Vision.
                <br />
                Multiple Capabilities.
              </h2>
              <p className="mt-6 text-lg text-body leading-relaxed">
                Technology innovation often involves multiple disciplines that traditionally operate independently.
              </p>
              <p className="mt-4 text-lg text-body leading-relaxed">
                Smartosphere Group brings together complementary capabilities across investment participation, strategic
                guidance, and engineering execution, creating an environment where opportunities can be explored with
                greater alignment and continuity.
              </p>
              <p className="mt-4 text-lg text-body leading-relaxed">
                This structure enables focused expertise while maintaining a shared commitment to innovation, technology,
                and practical outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square max-w-[500px] mx-auto w-full"
            >
              {[
                { label: "Capital", size: 100, delay: 0, color: "hsl(32 93% 48%)" },
                { label: "Strategy", size: 75, delay: 0.15, color: "hsl(15 80% 50%)" },
                { label: "Engineering", size: 50, delay: 0.3, color: "hsl(350 72% 50%)" },
              ].map((ring) => (
                <motion.div
                  key={ring.label}
                  initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: ring.delay }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ padding: `${(100 - ring.size) / 2}%` }}
                >
                  <div className="w-full h-full rounded-full border flex items-start justify-center pt-4 backdrop-blur-sm"
                    style={{
                      borderColor: ring.color,
                      background: `radial-gradient(circle at center, ${ring.color}10 0%, transparent 70%)`,
                      boxShadow: `inset 0 0 60px ${ring.color}15, 0 0 40px ${ring.color}20`,
                    }}>
                    <span className="text-xs font-heading font-bold uppercase tracking-[0.2em]" style={{ color: ring.color }}>
                      {ring.label}
                    </span>
                  </div>
                </motion.div>
              ))}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_30px_hsl(32_93%_48%)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Smartosphere Approach */}
      <section className="py-24 lg:py-32 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">Our Approach</p>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-heading leading-tight">
              The Smartosphere Approach
            </h2>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
            {approach.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative rounded-2xl p-8 border border-border bg-surface-elevated/60 backdrop-blur-sm hover:border-accent/50 transition-all overflow-hidden"
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

      {/* Final CTA */}
      <section className="py-28 lg:py-40 border-t border-border/50 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, hsl(350 72% 40%) 0%, transparent 60%)" }} />
        </div>
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6">Start Here</p>
            <h2 className="font-heading text-4xl lg:text-6xl font-bold text-heading leading-tight">
              Innovation Begins with
              <br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(120deg, hsl(32 93% 55%), hsl(350 72% 55%))" }}>
                Aligned Capital
              </span>
            </h2>
            <p className="mt-8 text-lg lg:text-xl text-body leading-relaxed">
              Discover how Smartosphere Capital supports technology ventures with strategic participation,
              ecosystem access, and long-term alignment.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/capital"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-lg text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-[0_0_35px_hsl(350_72%_50%/0.5)]"
                style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
              >
                Explore Smartosphere Capital
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-heading text-sm font-semibold hover:border-accent/60 hover:text-accent transition-colors"
              >
                Start a Conversation
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

export default GroupHome;
