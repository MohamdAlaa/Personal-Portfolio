import { experience } from "@/lib/portfolio-data";
import Reveal from "./Reveal";

const WorkExperience = () => {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <p className="section-label">Career</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-lead">
          Roles across product companies and freelance engagements, focused on
          frontend delivery and collaboration.
        </p>
      </Reveal>

      <ol className="mt-14 border-t border-border">
        {experience.map((job, index) => (
          <Reveal
            key={`${job.company}-${job.period}`}
            delay={index * 90}
            variant="left"
          >
            <li className="timeline-row grid gap-4 border-b border-border py-8 sm:grid-cols-[11rem_1fr] lg:grid-cols-[12rem_1fr_1.4fr] sm:gap-8 rounded-md px-2 -mx-2">
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
                  {job.type}
                </p>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed sm:col-span-2 lg:col-span-1">
                {job.description}
              </p>
              <span className="sr-only">Role {index + 1}</span>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
};

export default WorkExperience;
