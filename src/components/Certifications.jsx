import { Award, CheckCircle2 } from "lucide-react";

export default function Certifications({ certifications }) {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-16 py-12 md:py-16">
      <div className="flex items-center gap-3 mb-10">
        <Award size={24} className="text-[#6E715C]" />
        <h2 className="font-serif text-3xl md:text-4xl text-[#24231F] font-normal tracking-tight">
          Certifications & trainings
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="bg-[#ECE6DA] border border-[#DDD6C7] rounded-2xl p-5 hover:bg-[#E4DECFA0] transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-[11px] font-semibold tracking-wider text-[#6E715C] uppercase bg-[#DDD7C8] px-2.5 py-0.5 rounded-full">
                  {cert.badge}
                </span>
                <CheckCircle2 size={16} className="text-[#6E715C] flex-shrink-0" />
              </div>
              <h3 className="font-serif text-[17px] text-[#24231F] font-normal leading-snug">
                {cert.title}
              </h3>
            </div>
            <p className="text-xs text-[#6F6B61] pt-3 mt-2 border-t border-[#24231F]/10">
              Issued by <span className="font-medium text-[#383630]">{cert.issuer}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
