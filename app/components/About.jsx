import Image from "next/image";
import { profile, technologies } from "@/lib/portfolio-data";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <p className="section-label">Introduction</p>
        <h2 className="section-title">About</h2>
        <p className="section-lead">{profile.summary}</p>
        <p className="mt-4 text-base text-muted-foreground">
          <span className="text-foreground font-medium">Education:</span>{" "}
          {profile.education.degree} — {profile.education.school} (
          {profile.education.period})
        </p>
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-16 items-start">
        <Reveal variant="left" delay={80}>
          <div className="relative aspect-[3/4] w-full max-w-xs mx-auto lg:mx-0 overflow-hidden rounded-lg border border-border soft-depth">
            <Image
              src="/me.jpg"
              alt="Mohamed Alaa"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              sizes="280px"
            />
          </div>
        </Reveal>

        <Reveal variant="right" delay={160}>
          <div>
            <h3 className="font-display text-3xl text-foreground mb-6">
              Technical skills
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-3">
              {technologies.map((tech, index) => (
                <Reveal key={tech.name} delay={80 + index * 40} variant="scale">
                  <li className="tech-chip flex items-center gap-3 rounded-md border border-transparent px-2 py-2 text-base hover:border-border hover:bg-card">
                    {tech.src ? (
                      <Image
                        src={tech.src}
                        alt=""
                        width={22}
                        height={22}
                        className="shrink-0 dark:invert-[0.15]"
                      />
                    ) : (
                      <span className="flex size-[22px] shrink-0 items-center justify-center rounded-sm bg-accent/15 text-[10px] font-semibold text-accent">
                        {tech.short}
                      </span>
                    )}
                    <span className="text-foreground">{tech.name}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
