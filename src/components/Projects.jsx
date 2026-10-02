import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-16 py-16 md:py-24">
      {/* Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-[#24231F] font-normal tracking-tight">
          Selected projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-6 items-stretch">
        {projects.map((project, idx) => {
          // In reference, middle card has a subtle accent/warm highlight
          const isHighlighted = idx === 1;

          return (
            <div
              key={project.id}
              className={`rounded-[24px] p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                isHighlighted
                  ? "bg-[#DDD7C8] border border-[#CFC7B6]"
                  : "bg-[#EAE4D7] border border-[#DDD6C7]"
              }`}
            >
              <div>
                {/* Number & Title */}
                <h3 className="font-serif text-xl md:text-2xl text-[#24231F] font-normal mb-5 leading-snug">
                  <span className="font-serif text-base text-[#6E6A60] mr-1.5">{project.id} /</span> {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#4E4B44] text-[14px] leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Footer: Tech Stack + Links */}
              <div>
                <p className="text-xs text-[#6A665D] font-medium tracking-wide mb-4">
                  {project.tech}
                </p>

                {(project.github || project.live) && (
                  <div className="flex items-center gap-4 pt-2 border-t border-[#24231F]/10">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#413F38] hover:text-black transition-colors"
                      >
                        <GithubIcon size={13} />
                        <span>Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-[#413F38] hover:text-black transition-colors"
                      >
                        <ExternalLink size={13} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
