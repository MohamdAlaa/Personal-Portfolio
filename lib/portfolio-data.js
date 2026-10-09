export const profile = {
  name: "Mohamed Alaa",
  title: "Front-End Engineer",
  location: "Cairo, Egypt",
  email: "mohamedalaa.connect@gmail.com",
  phone: "01112554334",
  phoneInternational: "2011112554334",

  summary:
    "I approach front-end work as product engineering—not just writing interface code. I dig into how the business operates, clarify real user and stakeholder needs, and design systems that solve the right problem: clear information architecture, reliable data flows, and interfaces that scale with the product. Frameworks and languages are tools I use deliberately; the goal is always a maintainable solution that improves performance, reduces friction, and supports growth. I partner with design, product, and backend teams end-to-end so what ships is coherent, measurable, and built to last.",
  education: {
    degree: "Bachelor's in Computer Science and Information",
    school: "Faculty of Computers and Information, Egypt",
    period: "2016 – 2020",
  },
};

export const technologies = [
  { name: "HTML5", src: "/html.svg", alt: "html5" },
  { name: "CSS3", src: "/css.svg", alt: "css3" },
  { name: "JavaScript", src: "/javascript.svg", alt: "javascript" },
  { name: "TypeScript", src: null, alt: "typescript", short: "TS" },
  { name: "React.js", src: "/react.svg", alt: "react" },
  { name: "Redux", src: null, alt: "redux", short: "Rx" },
  { name: "Next.js", src: "/next.svg", alt: "nextjs" },
  { name: "Vue.js", src: "/vue.svg", alt: "vue" },
  { name: "Nuxt.js", src: "/nuxt.svg", alt: "nuxtjs" },
  { name: "Tailwind CSS", src: "/tailwindcss.svg", alt: "tailwindcss" },
  { name: "Bootstrap", src: "/bootstrap.svg", alt: "bootstrap" },
  { name: "Sass", src: "/sass.svg", alt: "sass" },
  { name: "shadcn/ui", src: null, alt: "shadcn", short: "UI" },
  { name: "TanStack", src: null, alt: "tanstack", short: "TQ" },
  { name: "Firebase", src: null, alt: "firebase", short: "FB" },
  { name: "Material UI", src: null, alt: "mui", short: "MUI" },
  { name: "Git", src: "/git.svg", alt: "git" },
  { name: "GitHub", src: "/github.svg", alt: "github" },
  { name: "Jest", src: "/jest.svg", alt: "jest" },
  { name: "Figma", src: "/figma.svg", alt: "figma" },
];

export const experience = [
  {
    role: "Front-End Developer",
    company: "Petrolife",
    location: "Egypt · Onsite",
    type: "Full Time",
    period: "Apr 2026 – Present",
    stack: "React.js, TypeScript, Tailwind CSS, Firebase, i18next, WebSockets",
    bullets: [
      "Owned front-end for a multi-tenant fuel-ops platform across 3 roles and 100+ routes (fleet, wallet, stations, invoices, subscriptions, admin).",
      "Integrated dozens of REST /api/v1 APIs for auth, wallet, banks, documents, and orders; hardened Firebase Storage upload/download.",
      "Configured 3 environments (local / test / prod) with separate Firebase + API targets and full AR/EN i18n (~80 namespaces).",
      "Leading next-phase subscription features and WebSocket realtime notifications (live updates, admin/special alerts, in-app UX).",
    ],
  },
  {
    role: "Front-End Developer",
    company: "MonetizerEngine",
    location: "United States · Remote",
    type: "Full Time",
    period: "Mar 2026 – Aug 2026",
    stack: "React.js, TypeScript, Tailwind CSS, shadcn/ui, TanStack",
    bullets: [
      "Built and iterated on dashboards and landing pages using Lovable's front-end stack, focusing on responsive UI and fast delivery.",
      "Integrated GoHighLevel as the backend for messaging and notifications, connecting user-facing flows to campaign and alert workflows.",
      "Delivered client-ready web experiences end-to-end—from layout and components to messaging/notification workflows via GoHighLevel.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Masa International",
    location: "Thailand · Remote",
    type: "Full Time",
    period: "Dec 2024 – Aug 2025",
    stack: "Vue.js, Nuxt.js, Bootstrap, Pinia, TypeScript",
    bullets: [
      "Collaborated on multiple dynamic CMS-based web projects with custom Control Panels.",
      "Improved page load times by 30% through performance audits and code optimizations.",
      "Applied component-driven architecture and reusable UI strategies for scalability.",
      "Built dynamic dashboards with charts and progress bars, transforming complex datasets into intuitive, user-friendly visualizations.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Not Found Agency",
    location: "Egypt · Remote",
    type: "Full Time",
    period: "Jan 2024 – May 2024",
    stack: "React.js, Next.js, Sass, Redux, TypeScript",
    bullets: [
      "Developed responsive UIs using React.js and Next.js with a focus on user experience.",
      "Built scalable dashboards using React and Next.js with reusable components (charts, modals, progress indicators), improving data visibility and user interaction.",
      "Integrated REST APIs with pagination, loading states, and error handling, improving performance and user experience across large datasets.",
      "Implemented keyboard navigation and modular CSS for accessibility and maintainability.",
    ],
  },
  {
    role: "Freelance Front-End Developer",
    company: "Self-Employed",
    location: "Remote",
    type: "Freelance",
    period: "Sep 2022 – Dec 2023",
    stack: "React.js, Next.js, TypeScript",
    bullets: [
      "Delivered custom web applications for diverse clients, managing the full development lifecycle from concept to deployment.",
      "Translated client requirements into responsive, high-performance user interfaces and ensuring 100% cross-browser compatibility.",
      "Optimized existing codebases for clients, improving Core Web Vitals and SEO performance by implementing best practices in Next.js.",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Ebda Company",
    location: "Egypt · Hybrid",
    type: "Full Time",
    period: "Jan 2022 – Jun 2022",
    stack: "React.js, Bootstrap, Redux, MUI",
    bullets: [
      "Achieved 100% cross-browser compatibility and mobile responsiveness across 3 major product lines using Bootstrap and MUI.",
      "Contributed to API integration, enhancing frontend-backend communication.",
      "Worked closely with UI/UX designers, mobile developers, and backend teams to deliver unified products.",
    ],
  },
];

export const projects = [
  {
    id: 20,
    title: "Petrolife",
    desc: "Multi-tenant fuel-ops platform covering fleet, wallet, stations, invoices, and admin—100+ routes across 3 roles, REST APIs, Firebase storage, full AR/EN i18n, and realtime WebSocket alerts.",
    img: "/petrolife.jpg",
    link: "https://petrolife.sa/",
    github_url: "",
    key_techs:
      "React.js, TypeScript, Tailwind CSS, Firebase, i18next, WebSockets",
  },
  {
    id: 19,
    title: "Resumind",
    desc: "AI-powered resume analysis with ATS compatibility scores and actionable suggestions tailored to specific job applications.",
    img: "/Resmind.webp",
    link: "https://applicant-tracking-system-ten.vercel.app/",
    github_url: "https://github.com/MohamdAlaa/Applicant-Tracking-System",
    key_techs:
      "React.js 19, React Router v7, Tailwind CSS, TypeScript, Zustand, Puter.js, React Dropzone",
  },
  {
    id: 18,
    title: "CarePlus",
    desc: "Healthcare platform for patient registration, appointment scheduling, medical records, and SMS notifications.",
    img: "/careplus.webp",
    link: "https://patient-management-system-psi.vercel.app/",
    github_url: "https://github.com/MohamdAlaa/Patient-Management-System",
    key_techs:
      "React.js 19, Next.js 15, Tailwind CSS, ShadCN, TypeScript, React Hook Form, Zod, TanStack, Twilio, Appwrite",
  },

  {
    id: 15,
    title: "Safka Market",
    desc: "E-commerce platform with a wide product catalog, user-friendly interface, and secure payment options.",
    img: "/safkamarket.webp",
    link: "https://safkamarket.com/من-نحن",
    github_url: "",
    key_techs: "Vue.js, Nuxt.js, Bootstrap, Chart.js",
  },
  {
    id: 14,
    title: "Thaishop Studio",
    desc: "E-commerce with product catalog, cart, checkout, order management, auth, and search/filtering.",
    img: "/thishop.webp",
    link: "https://thaishopstudio.com",
    github_url: "",
    key_techs: "Vue.js, Nuxt.js, Bootstrap, Chart.js",
  },

  {
    id: 1,
    title: "Next.js Educational Platform",
    desc: "Educational platform with student registration, lessons, auth, and admin statistics charts.",
    img: "/Mromar.webp",
    link: "",
    github_url: "",
    key_techs: "Next.js, Material-UI, React DOM, Charts",
  },







  {
    id: 10,
    title: "React Real Estate",
    desc: "Real estate listing experience with contact form.",
    img: "/8.webp",
    link: "",
    github_url: "https://github.com/MohamdAlaa/Real-Estate-Project",
    key_techs: "React.js, styled-components",
  },


];

export const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/2011112554334",
    icon: "/whatsapp.svg",
  },
  {
    name: "Gmail",
    href: "mailto:mohamedalaa.connect@gmail.com",
    icon: "/gmail.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mohamed-alaa-elmenyawe/",
    icon: "/linkedin.svg",
  },
  {
    name: "GitHub",
    href: "https://github.com/MohamdAlaa",
    icon: "/github.svg",
  },
  {
    name: "X",
    href: "https://x.com/MohamedAla4863",
    icon: "/twitter.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/mohamed.elmnyawe.7",
    icon: "/facebook.svg",
  },
];
