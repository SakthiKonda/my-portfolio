import { useState } from "react";
import { Folder, Code2, Globe, Cpu, Wrench, BookOpen, Layers } from "lucide-react";
import TechIcon from "./TechIcon";

export default function Skills({ skills }) {
  const [activeTab, setActiveTab] = useState(0);

  // Map category to an appropriate icon
  const getTabIcon = (category) => {
    const c = category.toLowerCase();
    if (c.includes("language") || c.includes("programming")) return <Code2 size={16} />;
    if (c.includes("web")) return <Globe size={16} />;
    if (c.includes("data") || c.includes("vision") || c.includes("ai")) return <Cpu size={16} />;
    if (c.includes("tool")) return <Wrench size={16} />;
    if (c.includes("concept") || c.includes("core")) return <BookOpen size={16} />;
    return <Layers size={16} />;
  };

  const currentCategory = skills[activeTab] || skills[0];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 md:px-16 py-16 md:py-24">
      {/* Title */}
      <h2 className="font-serif text-3xl md:text-4xl text-[#24231F] font-normal tracking-tight mb-8">
        Skills & technologies
      </h2>

      {/* Notion/MacOS style tabbed card container matching reference */}
      <div className="bg-[#EAE4D7]/80 border border-[#DDD6C7] rounded-[26px] p-6 md:p-8 shadow-sm">
        
        {/* Header: Folder icon + Skills */}
        <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#24231F]/10">
          <Folder size={18} className="text-[#6E715C] fill-[#6E715C]/20" />
          <span className="font-semibold text-sm md:text-base text-[#24231F] tracking-wide">
            Skills Directory
          </span>
        </div>

        {/* Tab Bar */}
        <div className="flex items-center gap-1 sm:gap-4 overflow-x-auto pb-2 scrollbar-none border-b border-[#DDD6C7]">
          {skills.map((group, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={group.category}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                  isActive
                    ? "border-[#24231F] text-[#24231F] font-semibold"
                    : "border-transparent text-[#706C62] hover:text-[#24231F]"
                }`}
              >
                <span className={isActive ? "text-[#6E715C]" : "text-[#8E8A7E]"}>
                  {getTabIcon(group.category)}
                </span>
                <span>{group.category}</span>
                <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-[#DDD6C7]/60 text-[#5A564C] font-normal">
                  {group.items.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-6">
          {currentCategory.items.map((skill) => (
            <div
              key={skill}
              className="bg-white/95 hover:bg-white rounded-xl px-4 py-3.5 border border-[#DDD6C7]/80 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] flex items-center gap-3.5 hover:shadow-md hover:border-[#6E715C]/50 hover:-translate-y-0.5 transition-all cursor-default"
            >
              {/* Colorful official icon */}
              <TechIcon name={skill} className="w-5 h-5 flex-shrink-0" />
              
              {/* Skill Name */}
              <span className="text-[14px] font-medium text-[#2C2B27] truncate">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Quick summary footer */}
        <div className="mt-8 pt-4 border-t border-[#24231F]/5 flex items-center justify-between text-xs text-[#7A7569]">
          <span>Showing <strong>{currentCategory.items.length}</strong> technologies in {currentCategory.category}</span>
          <span className="hidden sm:inline">Click tabs above to switch categories</span>
        </div>
      </div>
    </section>
  );
}
