import { motion } from "framer-motion";
import {
  Code2, Database, Globe, Server, Cloud
} from "lucide-react";

const skills = [
  { name: "HTML", icon: Code2, color: "bg-brutal-cyan" },
  { name: "CSS", icon: Code2, color: "bg-brutal-yellow" },
  { name: "JAVASCRIPT", icon: Code2, color: "bg-brutal-magenta" },
  { name: "REACT", icon: Code2, color: "bg-brutal-cyan" },
  { name: "TYPESCRIPT", icon: Code2, color: "bg-brutal-yellow" },
  { name: "MYSQL", icon: Database, color: "bg-brutal-magenta" },
  { name: "FIREBASE", icon: Cloud, color: "bg-brutal-cyan" },
  { name: "VERCEL", icon: Globe, color: "bg-brutal-yellow" },
];

const thud = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl font-black mb-12 text-center"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={thud}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`brutal-card dog-ear bg-card p-6 flex flex-col items-center gap-4 group hover:${skill.color}`}
              style={{ minHeight: 160 }}
            >
              <Icon
                size={36}
                strokeWidth={2.5}
                className="transition-transform group-hover:scale-110"
              />
              <span className="font-heading text-xs font-bold text-center">
                [{skill.name}]
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
