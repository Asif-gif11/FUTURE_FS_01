import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const thud = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

const Education = () => {
  return (
    <section id="education" className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl font-black mb-12 text-center"
      >
        Education
      </motion.h2>

      <motion.div
        variants={thud}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="brutal-card bg-card max-w-xl mx-auto overflow-hidden"
      >
        <div className="bg-primary border-b-4 border-foreground px-6 py-4 flex items-center gap-3">
          <GraduationCap size={28} strokeWidth={2.5} />
          <h3 className="font-heading text-lg font-bold">Bachelor of Computer Applications</h3>
        </div>
        <div className="p-6">
          <span className="inline-block bg-brutal-cyan border-2 border-foreground px-3 py-1 font-mono text-xs font-bold mb-3">
            2025 - 2028
          </span>
          <p className="font-mono text-sm text-muted-foreground">
            Focused on web development, databases, and building full-stack applications
            with clean, user-friendly interfaces.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

