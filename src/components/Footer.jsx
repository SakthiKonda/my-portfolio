export default function Footer({ data }) {
  return (
    <footer className="max-w-6xl mx-auto px-6 md:px-16 pt-8 pb-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A756A] border-t border-[#24231F]/10">
      <p>© {new Date().getFullYear()} {data.name}. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <a href="#about" className="hover:text-[#24231F] transition-colors">
          About
        </a>
        <a href="#experience" className="hover:text-[#24231F] transition-colors">
          Experience
        </a>
        <a href="#projects" className="hover:text-[#24231F] transition-colors">
          Projects
        </a>
        <a href="#contact" className="hover:text-[#24231F] transition-colors">
          Contact
        </a>
      </div>
    </footer>
  );
}
