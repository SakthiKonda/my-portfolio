import SectionHeader from "./SectionHeader";

export default function About({ data }) {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Decorative block */}
        <div className="relative">
          <div className="w-full aspect-square max-w-sm mx-auto bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-inner">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-xl">
              <span className="text-white text-7xl font-bold">
                {data.name.charAt(0)}
              </span>
            </div>
          </div>
          {/* Floating badges */}
          <div className="absolute -bottom-4 -right-4 md:-right-8 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
            <p className="text-2xl font-bold text-indigo-600">5+</p>
            <p className="text-xs text-gray-500 font-medium">Years Experience</p>
          </div>
          <div className="absolute -top-4 -left-4 md:-left-8 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
            <p className="text-2xl font-bold text-indigo-600">30+</p>
            <p className="text-xs text-gray-500 font-medium">Projects Done</p>
          </div>
        </div>

        {/* Text content */}
        <div>
          <SectionHeader
            label="Get to know me"
            title="About Me"
            align="left"
          />
          <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-8">
            {data.about}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <InfoItem label="Name" value={data.name} />
            <InfoItem label="Email" value={data.email} />
            <InfoItem label="Location" value={data.location} />
            <InfoItem label="Status" value="Open to work 🟢" />
          </div>
          <a
            href="#contact"
            className="mt-8 inline-block px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }) {
  return (
    <div>
      <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-1">
        {label}
      </p>
      <p className="text-gray-800 font-medium text-sm">{value}</p>
    </div>
  );
}
