import { motion } from "framer-motion";
import GroupHeader from "./group/GroupHeader";
import GroupFooter from "./group/GroupFooter";

interface LegalSection {
  title: string;
  content: string[];
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  intro: string;
  sections: LegalSection[];
  closingNote?: string;
  contact?: {
    company: string;
    email: string;
    website: string;
  };
}

const LegalPageLayout = ({
  title,
  lastUpdated,
  intro,
  sections,
  closingNote,
  contact,
}: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GroupHeader />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-surface border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl md:text-5xl font-bold text-heading mb-4"
          >
            {title}
          </motion.h1>
          {lastUpdated && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-sm text-muted-foreground"
            >
              Last Updated: {lastUpdated}
            </motion.p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-body leading-relaxed mb-12"
          >
            {intro}
          </motion.p>

          <div className="space-y-10">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.05 * i }}
              >
                <h2 className="font-heading text-xl font-semibold text-accent mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, j) => (
                    <p key={j} className="text-body text-sm leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {closingNote && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 text-sm text-muted-foreground italic border-l-2 border-accent/40 pl-4"
            >
              {closingNote}
            </motion.p>
          )}

          {contact && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-lg bg-card border border-border/40"
            >
              <h3 className="font-heading text-lg font-semibold text-heading mb-3">
                Contact Information
              </h3>
              <p className="text-body text-sm">{contact.company}</p>
              <p className="text-sm mt-1">
                Email:{" "}
                <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                  {contact.email}
                </a>
              </p>
              <p className="text-sm mt-1">
                Website:{" "}
                <a href={contact.website} className="text-primary hover:underline" target="_blank" rel="noreferrer">
                  {contact.website}
                </a>
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <GroupFooter />
    </div>
  );
};

export default LegalPageLayout;
