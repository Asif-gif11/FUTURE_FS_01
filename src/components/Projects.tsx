import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AK SMART TV",
    summary: "A simple, modern website built for a local TV business to showcase products and services.",
    tags: ["REACT", "CSS"],
    demoUrl: "https://aksmart-ten.vercel.app/",
    caseStudyUrl: "https://github.com/Asif-gif11/FUTURE_FS_03",
    imageUrl: "/p2.png",
    imageAlt: "Screenshot of AK Smart TV website",
  },
  {
    id: 2,
    title: "JAPANESE THEMED PORTFOLIO",
    summary: "A visually immersive personal website inspired by Japanese aesthetics and atmosphere.",
    tags: ["NEXT.JS", "CSS"],
    demoUrl: "https://portfolio-umber-omega-54.vercel.app/",
    caseStudyUrl: "https://github.com/Asif-gif11/Japanesethemedportfolio",
    imageUrl: "/portfolio.png",
    imageAlt: "Screenshot of Japanese themed portfolio project",
  },
];

const thud = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 300, damping: 20 } },
};

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl md:text-5xl font-black mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            variants={thud}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="brutal-card bg-card flex flex-col"
          >
            {/* Project tab */}
            <div className="bg-foreground text-secondary px-4 py-2 font-heading text-xs font-bold self-start">
              PROJECT {p.id}
            </div>

            {/* Mock display */}
            <div className="mx-4 mt-4 border-4 border-foreground bg-muted p-2 flex items-center justify-center min-h-[160px]">
              {p.imageUrl ? (
                <img
                  src={p.imageUrl}
                  alt={p.imageAlt ?? `${p.title} preview`}
                  className="w-full h-[160px] object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="grid grid-cols-3 gap-2 w-full max-w-[200px]">
                  {Array.from({ length: 9 }).map((_, j) => (
                    <div
                      key={j}
                      className="aspect-square border-2 border-foreground/30"
                      style={{
                        backgroundColor: j % 3 === 0 ? "hsl(var(--brutal-cyan))" : j % 3 === 1 ? "hsl(var(--brutal-yellow))" : "hsl(var(--brutal-magenta) / 0.4)",
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="font-heading text-base font-bold mb-1">{p.title}</h3>
              <p className="font-heading text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Summary</p>
              <p className="font-mono text-sm text-muted-foreground mb-4 flex-1">{p.summary}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="bg-muted border-2 border-foreground px-2 py-0.5 font-mono text-[10px] font-bold">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="brutal-btn bg-foreground text-secondary flex-1 text-center text-xs"
                  >
                    View Demo
                  </a>
                )}
                {p.caseStudyUrl && (
                  <a
                    href={p.caseStudyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="brutal-btn bg-card text-foreground flex-1 text-center text-xs"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
