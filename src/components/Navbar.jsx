import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 md:px-12 max-w-6xl mx-auto">
      {/* Navigation bar container with warm styled background & subtle frosted glass */}
      <div className="bg-[#EAE4D7]/90 backdrop-blur-md border border-[#DDD6C7] rounded-full px-6 py-3 shadow-[0_4px_20px_-4px_rgba(40,40,30,0.08)] flex items-center justify-between">
        
        {/* Pinterest cursive signature style for 'Jayasakthi' */}
        <a
          href="#"
          className="font-signature text-2xl sm:text-3xl font-bold text-[#24231F] hover:text-[#6E715C] transition-colors leading-none tracking-wide select-none"
        >
          Jayasakthi
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-[#4A4740] hover:text-[#181715] hover:bg-[#DDD7C8]/60 px-3 py-1.5 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs uppercase tracking-wider font-semibold bg-[#6E715C] hover:bg-[#5B5E4A] text-[#F7F4EE] px-4 py-2 rounded-full transition-colors ml-1 shadow-sm"
          >
            Say Hello
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#2D2C27] p-1.5 rounded-lg hover:bg-[#DDD7C8]"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#EAE4D7] rounded-2xl p-6 shadow-xl border border-[#DDD6C7] flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#3A3832] font-medium text-base hover:text-black py-1 px-2 rounded-lg hover:bg-[#DDD7C8]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-center text-xs uppercase tracking-wider font-semibold bg-[#6E715C] hover:bg-[#5B5E4A] text-[#F7F4EE] py-2.5 rounded-xl mt-2 transition-colors"
          >
            Say Hello
          </a>
        </div>
      )}
    </header>
  );
}
