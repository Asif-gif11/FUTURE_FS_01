import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Projects", "Skills", "Education"];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary border-b-4 border-foreground">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-heading text-lg font-black tracking-tighter">Mohammed Asif M</span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-heading text-xs font-bold uppercase tracking-widest hover:underline decoration-4 underline-offset-4"
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/Resume.docx"
            download
            className="brutal-btn bg-brutal-magenta text-secondary hidden md:inline-block"
          >
            Download Resume
          </a>
          <button
            className="md:hidden border-4 border-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t-4 border-foreground bg-primary px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left font-heading text-sm font-bold uppercase py-2 border-b-2 border-foreground/20"
            >
              {link}
            </button>
          ))}
          <a
            href="/Resume.docx"
            download
            className="brutal-btn bg-brutal-magenta text-secondary mt-3 inline-block text-center w-full"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
