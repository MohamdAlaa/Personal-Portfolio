import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/portfolio-data";
import Reveal from "./Reveal";

const LatestWork = () => {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <p className="section-label">Selected work</p>
        <h2 className="section-title">Projects</h2>
        <p className="section-lead">
          A full catalog of frontend work — from production platforms to
          focused experiments.
        </p>
      </Reveal>

      <ul className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            className="h-full"
            delay={(index % 6) * 70}
            variant="scale"
          >
            <li className="project-card group flex h-full flex-col rounded-lg border border-border bg-card/60 p-3 hover:border-accent/40">
              <div className="relative aspect-video w-full overflow-hidden rounded-md bg-secondary">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="mt-4 flex flex-1 flex-col px-1 pb-1">
                <h3 className="font-display text-2xl text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
                <p className="mt-3 text-sm text-muted-foreground/90 leading-relaxed">
                  {project.key_techs}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap gap-x-5 gap-y-2 text-base">
                  {project.link ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-accent"
                    >
                      Live demo
                    </Link>
                  ) : (
                    <span className="text-muted-foreground">Not public</span>
                  )}
                  {project.github_url ? (
                    <Link
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link text-accent"
                    >
                      Code
                    </Link>
                  ) : (
                    <span className="text-muted-foreground">Private repo</span>
                  )}
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
};

export default LatestWork;
