import { Briefcase } from "lucide-react";

export default function Experience({ experience }) {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 md:px-16 py-12 md:py-16">
      {/* Container in light cream with subtle border matching the site palette */}
      <div className="bg-[#EAE4D7] border border-[#DDD6C7] rounded-[28px] p-8 md:p-12 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase size={22} className="text-[#6E715C]" />
          <h2 className="font-serif text-3xl md:text-4xl text-[#24231F] font-normal tracking-tight">
            Work experience
          </h2>
        </div>

        <div className="space-y-8">
          {experience.map((job, idx) => (
            <div
              key={idx}
              className="pb-8 border-b border-[#DDD6C7] last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="font-serif text-xl md:text-[22px] text-[#24231F] font-normal">
                  {job.role} · <span className="text-[#6E715C] font-medium">{job.company}</span>
                </h3>
                <span className="inline-block text-xs font-medium text-[#5A574E] bg-[#DDD7C8] px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">
                  {job.period} · {job.location}
                </span>
              </div>

              <p className="text-[#4E4B44] text-[15px] leading-relaxed max-w-3xl font-normal mt-3">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
