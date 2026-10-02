import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Copy, ArrowUpRight } from "lucide-react";

export default function Contact({ data }) {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Jayasakthi,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${data.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-16 py-16 md:py-24">
      {/* Outer container in the Education section's sage green tone */}
      <div className="bg-[#6E715C] text-[#F7F4EE] rounded-[30px] p-8 md:p-14 shadow-md">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Info */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-[#DDD7CA] uppercase mb-3 block">
                Get in touch
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5] font-normal tracking-tight mb-6">
                Let&apos;s build something intelligent.
              </h2>
              <p className="text-[#E7E2D5] text-[15px] leading-relaxed mb-8 font-light">
                I&apos;m seeking an entry-level Software Engineering or Full Stack role. Open to internships, full-time positions, and collaborations.
              </p>

              <div className="space-y-4 text-sm text-[#F7F4EE]">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#DDD7CA]" />
                  <a
                    href={`mailto:${data.email}`}
                    className="hover:underline text-[#FAF8F5] font-medium"
                  >
                    {data.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    className="text-xs bg-[#5B5E4A] hover:bg-[#505340] px-2.5 py-1 rounded text-[#F7F4EE] inline-flex items-center gap-1 transition-colors"
                    title="Copy email"
                  >
                    {copied ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#DDD7CA]" />
                  <a href={`tel:${data.phone}`} className="hover:underline text-[#FAF8F5]">
                    {data.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#DDD7CA]" />
                  <span>{data.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/20 flex gap-5">
              <a
                href={data.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#E7E2D5] hover:text-white transition-colors"
              >
                GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#E7E2D5] hover:text-white transition-colors"
              >
                LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Form in warm light cream card */}
          <div className="md:col-span-7 bg-[#FAF7F2] rounded-[24px] p-6 md:p-8 text-[#24231F] shadow-lg border border-[#DDD6C7]/50">
            {sent ? (
              <div className="py-12 text-center">
                <h3 className="font-serif text-2xl text-[#24231F] mb-2">Message prepared!</h3>
                <p className="text-sm text-[#5C5951] mb-6">
                  Your email client has opened with your message.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="text-xs font-medium text-[#6E715C] underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#635F55] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#EAE4D7] border border-[#DDD6C7] rounded-xl px-4 py-3 text-sm text-[#24231F] placeholder-[#8C877C] focus:outline-none focus:border-[#6E715C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#635F55] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full bg-[#EAE4D7] border border-[#DDD6C7] rounded-xl px-4 py-3 text-sm text-[#24231F] placeholder-[#8C877C] focus:outline-none focus:border-[#6E715C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#635F55] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your opportunity or project..."
                    className="w-full bg-[#EAE4D7] border border-[#DDD6C7] rounded-xl px-4 py-3 text-sm text-[#24231F] placeholder-[#8C877C] focus:outline-none focus:border-[#6E715C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6E715C] hover:bg-[#5B5E4A] text-[#F7F4EE] rounded-xl py-3.5 px-6 font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm"
                >
                  <span>Send Message</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
