import { experience } from "@/lib/portfolio-data";
import Reveal from "./Reveal";

const WorkExperience = () => {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <p className="section-label">Career</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-lead">
          Experience shaped across different companies, products, and ways of
          working—from corporate teams to freelance clients—each one deepening
          how I engineer solutions for real business problems.
        </p>
      </Reveal>

      <ol className="mt-14 border-t border-border">
        {experience.map((job, index) => (
          <Reveal
            key={`${job.company}-${job.period}`}
            delay={index * 90}
            variant="left"
          >
            <li className="timeline-row grid gap-4 border-b border-border py-8 lg:grid-cols-[12rem_1fr] sm:gap-8 rounded-md px-2 -mx-2">
              <time className="text-base text-accent tabular-nums pt-1 font-medium">
                {job.period}
              </time>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl text-foreground">
                  {job.role}
                </h3>
                <p className="mt-1 text-base text-muted-foreground">
                  {job.company}
                  <span className="mx-2 text-border">·</span>
                  {job.location}
                  <span className="mx-2 text-border">·</span>
                  {job.type}
                </p>
                {job.stack ? (
                  <p className="mt-2 text-sm text-accent/90">
                    Tech stack: {job.stack}
                  </p>
                ) : null}
                <ul className="mt-4 space-y-2.5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span
                        className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="sr-only">Role {index + 1}</span>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
};

export default WorkExperience;
