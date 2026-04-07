import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const thud = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl font-black mb-12 text-center"
      >
        About Me
      </motion.h2>

      <motion.div
        ref={ref}
        variants={thud}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="brutal-card bg-card p-8 md:p-12 max-w-4xl mx-auto"
      >
        <p className="text-lg leading-relaxed text-justify font-mono">
          I'm a{" "}
          <span
            className="highlight-yellow inline"
            style={{
              backgroundImage: "linear-gradient(hsl(51 100% 50%), hsl(51 100% 50%))",
              backgroundRepeat: "no-repeat",
              backgroundSize: inView ? "100% 100%" : "0% 100%",
              transition: "background-size 0.8s ease-out",
              padding: "0 4px",
            }}
          >
            Full-Stack Developer
          </span>{" "}
          who loves the challenge of taking a complex idea and turning it into a functional
          web application. I handle everything from the server logic to the final interface.
          My approach is simple: write clean code, stay organized, and build things that
          actually solve problems for the user.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
