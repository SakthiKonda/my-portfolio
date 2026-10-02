export default function Education({ education }) {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-16 py-6">
      <div className="bg-[#6E715C] text-[#F7F4EE] rounded-[28px] p-8 md:p-12 shadow-sm">
        <h2 className="font-serif text-2xl md:text-3xl font-normal tracking-tight mb-4">
          Education & background
        </h2>

        <div className="space-y-2">
          <p className="font-serif text-lg md:text-xl text-[#FBF9F4]">
            {education.degree}
          </p>
          <p className="text-sm md:text-[15px] text-[#DDD7CA] font-normal">
            {education.institution} · {education.graduationYear}
          </p>
          <p className="text-xs md:text-sm text-[#CDC6B6] pt-1">
            Current CGPA: <span className="font-medium text-[#F7F4EE]">{education.cgpa}</span> · {education.rank}
          </p>
        </div>
      </div>
    </section>
  );
}
