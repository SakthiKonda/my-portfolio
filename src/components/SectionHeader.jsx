export default function SectionHeader({ label, title, align = "center" }) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  const lineClass = align === "left" ? "mr-auto" : "mx-auto";
  return (
    <div className={`${alignClass} mb-2`}>
      <p className="text-indigo-500 font-semibold text-sm uppercase tracking-widest mb-2">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <div className={`w-12 h-1 bg-indigo-500 rounded-full ${lineClass}`} />
    </div>
  );
}
