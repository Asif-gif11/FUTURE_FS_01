import { useState } from "react";
import { Linkedin, Github, MessageSquare } from "lucide-react";

const notes = [
  { label: "LinkedIn", icon: Linkedin, bg: "bg-brutal-cyan", rotate: "-rotate-2", href: "https://www.linkedin.com/in/mohammed-asif0911" },
  { label: "GitHub", icon: Github, bg: "bg-brutal-yellow", rotate: "rotate-1", href: "https://github.com/Asif-gif11" },
];

const Footer = () => {
  const [jiggling, setJiggling] = useState<string | null>(null);

  return (
    <footer className="mt-16 pb-8 overflow-x-hidden">
      {/* Jagged edge */}
      <div
        className="h-6 bg-card border-t-4 border-foreground"
        style={{
          clipPath: "polygon(0% 0%, 3% 100%, 6% 0%, 9% 100%, 12% 0%, 15% 100%, 18% 0%, 21% 100%, 24% 0%, 27% 100%, 30% 0%, 33% 100%, 36% 0%, 39% 100%, 42% 0%, 45% 100%, 48% 0%, 51% 100%, 54% 0%, 57% 100%, 60% 0%, 63% 100%, 66% 0%, 69% 100%, 72% 0%, 75% 100%, 78% 0%, 81% 100%, 84% 0%, 87% 100%, 90% 0%, 93% 100%, 96% 0%, 100% 100%, 100% 0%)",
        }}
      />

      <div className="bg-card border-b-4 border-foreground px-4 py-12">
        <div className="container mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-black text-center mb-10">
            Let's Connect
          </h2>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12">
            {notes.map((note) => {
              const Icon = note.icon;
              return (
                <a
                  key={note.label}
                  href={note.href}
                  className={`sticky-note ${note.bg} ${note.rotate} w-32 sm:w-36 text-center transition-transform hover:scale-105`}
                  onMouseEnter={() => setJiggling(note.label)}
                  onMouseLeave={() => setJiggling(null)}
                >
                  {/* Tape */}
                  <div
                    className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-4 bg-muted/80 border-2 border-foreground ${jiggling === note.label ? "animate-jiggle" : ""}`}
                  />
                  <Icon size={28} strokeWidth={2.5} className="mx-auto mb-2 mt-2" />
                  <span className="font-heading text-xs font-bold">{note.label}</span>
                </a>
              );
            })}
          </div>

          <p className="text-center font-mono text-xs text-muted-foreground mt-10">
            (c) 2026 Mohammed Asif M
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
