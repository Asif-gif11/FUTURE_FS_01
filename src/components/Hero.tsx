import { motion } from "framer-motion";

const thud = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

const Hero = () => {
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Avatar */}
        <motion.div
          variants={thud}
          initial="hidden"
          animate="visible"
          className="brutal-card bg-card p-8 relative mx-auto max-w-sm"
        >
          {/* Tape corners */}
          <div className="tape-corner top-2 left-2 rotate-[-30deg]" />
          <div className="tape-corner top-2 right-2 rotate-[30deg]" />
          <div className="tape-corner bottom-2 left-2 rotate-[30deg]" />
          <div className="tape-corner bottom-2 right-2 rotate-[-30deg]" />

          <img
            src="/asif.jpg"
            alt="Photo of Mohammed Asif M"
            width={512}
            height={512}
            className="w-full h-full object-cover aspect-square"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={thud}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
        >
          <h1 className="font-heading text-4xl md:text-6xl font-black leading-tight mb-6">
            Mohammed Asif M |<br />Full Stack Developer
          </h1>
          <p className="text-lg md:text-xl leading-relaxed font-mono">
            A{" "}
            <span className="highlight-cyan font-bold">FULL-STACK DEVELOPER</span>{" "}
            who turns complex ideas into functional web applications. I cover everything
            from server logic to polished interfaces, with a focus on clean code and
            solutions that actually help users.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="brutal-btn bg-foreground text-secondary">
              View Projects
            </a>
            <a href="#about" className="brutal-btn bg-card text-foreground">
              About Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
