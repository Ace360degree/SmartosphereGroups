import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import RequestDemoModal from "../RequestDemoModal";

const navLinks = [
  { label: "Capital", href: "/capital" },
  { label: "Technology", href: "/technicalities" },
  { label: "Solutions", href: "/solutions-llp" },
];

const GroupHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(220,15%,8%)/0.95] backdrop-blur-xl border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/Smartoshperegroup-logo.png"
              alt="Smartosphere Group"
              className="h-14 w-auto rounded-sm"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${active ? "text-accent" : "text-body hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden lg:inline-flex items-center px-5 py-2.5 text-primary-foreground text-sm font-semibold rounded-lg hover:shadow-[0_0_20px_hsl(350_72%_50%/0.4)] transition-all"
            style={{ background: "linear-gradient(135deg, hsl(32 93% 48%), hsl(350 72% 50%))" }}
          >
            Start a Conversation
          </button>

          <button className="lg:hidden p-2 text-heading" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-3 py-2.5 text-sm font-medium text-body hover:text-primary rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                className="block mt-3 w-full text-center px-5 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg"
                onClick={() => {
                  setMobileOpen(false);
                  setIsModalOpen(true);
                }}
              >
                Start a Conversation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <RequestDemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default GroupHeader;
