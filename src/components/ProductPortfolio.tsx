import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Activity,
  Monitor,
  LayoutDashboard,
  Heart,
  Zap,
  Lock,
  Radiation,
  Gauge,
} from "lucide-react";

const products = [
  {
    icon: MapPin,
    name: "GeoTracker",
    desc: "Real-time tracking and monitoring systems that deliver location, condition, and operational context.",
  },
  {
    icon: Activity,
    name: "MHITS",
    desc: "Human and medical intelligence tracking systems for continuous monitoring and safety-critical environments.",
  },
  {
    icon: Monitor,
    name: "Billboard Controls",
    desc: "On-site electronic control systems for reliable operation of digital billboard infrastructure.",
  },
  {
    icon: LayoutDashboard,
    name: "Billboard Portal",
    desc: "A centralised cloud platform for monitoring, managing, and analysing billboard networks.",
  },
  {
    icon: Heart,
    name: "BioMed",
    desc: "Biomedical electronics and monitoring systems focused on accuracy, stability, and secure data handling.",
  },
  {
    icon: Zap,
    name: "mFlash",
    desc: "Industrial electronics for data handling and automation control in demanding environments.",
  },
  {
    icon: Lock,
    name: "Laplok",
    desc: "Smart electronic locking systems for asset safety and controlled access.",
  },
  {
    icon: Radiation,
    name: "Radiation Electronics",
    desc: "Radiation measurement and monitoring systems for regulated and safety-driven environments.",
  },
  {
    icon: Gauge,
    name: "GoKart Servomotor",
    desc: "Precision electronic control systems for GoKart and controlled motorsport applications.",
  },
];

const ProductPortfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            Product Portfolio
          </span>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-4 leading-tight">
            Engineering Solutions Built for Real Environments
          </h2>
          <p className="text-body leading-relaxed text-lg">
            Our portfolio consists of specialized platforms developed to address challenges across tracking, monitoring, industrial automation, biomedical systems, infrastructure management, and safety-critical operations.
          </p>
          <p className="text-body leading-relaxed text-lg mt-4">
            Each solution combines electronics, software, and engineering expertise to deliver reliable performance in demanding real-world environments.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group p-6 lg:p-8 rounded-xl border border-border/50 hover:border-accent/40 bg-card transition-all cursor-pointer group-hover:shadow-[0_0_30px_hsl(32_93%_48%/0.15)]"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-[0_0_15px_hsl(32_93%_48%/0.3)] group-hover:shadow-[0_0_25px_hsl(32_93%_48%/0.5)]">
                <product.icon className="w-6 h-6 text-accent drop-shadow-[0_0_8px_hsl(32_93%_48%/0.8)]" />
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3 text-heading">
                {product.name}
              </h3>
              <p className="text-body text-sm leading-relaxed">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPortfolio;
