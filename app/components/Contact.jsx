"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending…");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully.");
      setTimeout(() => setResult(""), 3000);
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  const fieldClass =
    "w-full rounded-md border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition-shadow focus:border-accent focus:shadow-[var(--soft-shadow)]";

  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <p className="section-label">Connect</p>
        <h2 className="section-title">Get in touch</h2>
        <p className="section-lead">
          Open to roles, freelance work, and collaboration. Send a note and
          I&apos;ll get back to you.
        </p>
      </Reveal>

      <Reveal className="mt-12">
        <form onSubmit={onSubmit} className="max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-wider text-muted-foreground">
                Name
              </span>
              <input
                className={fieldClass}
                type="text"
                placeholder="Your name"
                required
                name="name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm uppercase tracking-wider text-muted-foreground">
                Email
              </span>
              <input
                className={fieldClass}
                type="email"
                placeholder="you@example.com"
                required
                name="email"
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="mb-2 block text-sm uppercase tracking-wider text-muted-foreground">
              Message
            </span>
            <textarea
              className={`${fieldClass} resize-none`}
              rows={6}
              placeholder="How can I help?"
              required
              name="message"
            />
          </label>
          <button
            className="btn-live mt-6 inline-flex cursor-pointer items-center rounded-md bg-accent px-8 py-3.5 text-base font-medium text-accent-foreground soft-depth"
            type="submit"
          >
            Send message
          </button>
          {result ? (
            <p className="mt-4 text-base text-accent" role="status">
              {result}
            </p>
          ) : null}
        </form>
      </Reveal>
    </section>
  );
};

export default Contact;
