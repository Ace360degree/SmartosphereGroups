import { Mail, Phone, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const entities = [
  { label: "Smartosphere Capital LLC", href: "/capital" },
  { label: "Smartosphere Technologies INC", href: "/technicalities" },
  { label: "Smartosphere Solutions LLP", href: "/solutions-llp" },
  { label: "Network", href: "/network" },
];

const GroupFooter = () => {
  return (
    <footer className="bg-surface border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link to="/" className="inline-block">
                <img
                  src="/Smartoshperegroup-logo.png"
                  alt="Smartosphere Group"
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            <p className="text-body text-sm leading-relaxed">
              Supporting innovation through capital, strategy, and engineering.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-heading">
              Entities
            </h4>
            <ul className="space-y-2.5">
              {entities.map((e) => (
                <li key={e.href}>
                  <Link to={e.href} className="text-sm text-body hover:text-primary transition-colors">
                    {e.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-heading">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a
                  href="mailto:info@smartospheregroup.com"
                  className="text-sm text-body hover:text-primary transition-colors break-all"
                >
                  info@smartospheregroup.com
                </a>
              </li>
              {/* <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-body">+91-XXXXXXXXXX</span>
              </li> */}
              <li className="flex items-start gap-3">
                <Linkedin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-body hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-5 text-heading">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/privacy-policy" className="text-sm text-body hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="text-sm text-body hover:text-primary transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8 py-6 text-center sm:text-left">
          <p className="text-xs text-muted-foreground">
            © 2026 Smartosphere Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default GroupFooter;
