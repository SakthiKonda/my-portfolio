import { ArrowUpRight } from "lucide-react";

export default function Hero({ data }) {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-16 pt-12 md:pt-20 pb-16">
      <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Typography */}
        <div className="md:col-span-7 flex flex-col items-start">
          {/* Prominent, noticeable name tag */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-[2px] bg-[#6E715C] rounded-full"></span>
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold tracking-[0.12em] text-[#24231F] uppercase">
              {data.name}
            </h2>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] leading-[1.12] text-[#24231F] font-normal tracking-tight mb-7">
            Python full-stack<br className="hidden sm:inline" /> developer, exploring<br className="hidden sm:inline" /> AI.
          </h1>

          <p className="text-[#55524B] text-base md:text-[17px] leading-relaxed max-w-xl mb-9 font-normal">
            {data.bio}
          </p>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#24231F] hover:text-[#5E624A] transition-colors pb-1 border-b border-[#24231F]/30 hover:border-[#5E624A]"
          >
            <span>Explore my work</span>
            <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Right Column: Arched Portrait Photo */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[340px] md:max-w-[370px]">
            {/* The arched frame */}
            <div className="w-full aspect-[4/5] rounded-t-[170px] rounded-b-2xl overflow-hidden shadow-sm bg-[#E5DFD3] border border-[#DDD6C8]/60">
              <img
                src={data.photo}
                alt={data.name}
                className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
