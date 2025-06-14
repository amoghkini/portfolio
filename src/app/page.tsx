"use client";

import SocialMedia from "@/components/SocialMedia";
import { ThemeToggle } from "@/components/ThemeToggle";
import { AnimateIn } from "@/components/animations/AnimateIn";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  // const initialProjectCount = 2;
  // const visibleProjects = isProjectsExpanded ? projects : projects.slice(0, initialProjectCount);
  const visibleProjects = projects;

  const [isExperienceExpanded, setIsExperienceExpanded] = useState(false);
  const initialExperienceCount = 2;
  const visibleExperience = isExperienceExpanded ? experience : experience.slice(0, initialExperienceCount);

  return (
    <main className="text-zinc-900 dark:text-zinc-100 max-w-xl mx-auto px-4 py-4 mt-16">
      <AnimateIn variant="fadeUp">
        <section className="mb-12">
          <AnimateIn variant="fadeUp" delay={0.2}>
            <h1 className="text-xl font-medium tracking-tight mb-8 flex items-baseline justify-between">
              <span>Hey, I&apos;m Amogh</span>
              <ThemeToggle />
            </h1>
          </AnimateIn>
          <AnimateIn variant="fadeUp" delay={0.4}>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl mb-6">
              London-based full-stack developer passionate about crafting exceptional digital experiences. I transform complex challenges into elegant,
              user-centric solutions.
            </p>
          </AnimateIn>

          <AnimateIn variant="fadeUp" delay={0.6}>
            <div className="flex items-center gap-5">
              <SocialMedia />
            </div>
          </AnimateIn>
        </section>
      </AnimateIn>


      <AnimateIn variant="fadeUp" delay={0.4}>
        <section className="mb-12">
          <AnimateIn variant="reveal" delay={0.5}>
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">Experience</h2>
          </AnimateIn>
          <div className="space-y-8">
            <ul className="space-y-8">
              {visibleExperience.map((job, index) => {
                const delay = 0.5 + (index < initialExperienceCount ? index : index - initialExperienceCount) * 0.1;
                return (
                  <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                    <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-1">
                        <h3 className="text-md font-medium">
                          {job.role} {job.role === "Freelance" ? "" : "at"} {job.company}
                        </h3>
                        <span className="text-xs text-zinc-400 dark:text-zinc-500">{job.period}</span>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                            {tech}
                            {techIndex < job.technologies.length - 1 ? " /" : ""}
                          </span>
                        ))}
                      </div>
                    </li>
                  </AnimateIn>
                );
              })}
            </ul>
            {experience.length > initialExperienceCount && (
              <button
                onClick={() => setIsExperienceExpanded(!isExperienceExpanded)}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mx-auto"
              >
                {isExperienceExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More Experience <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </section>
      </AnimateIn>
      
      <AnimateIn variant="fadeUp" delay={0.2}>
        <section className="mb-12">
          <AnimateIn variant="reveal" delay={0.3}>
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">Projects</h2>
          </AnimateIn>
          <div className="space-y-8">
            <ul className="space-y-8">
              {visibleProjects.map((project, index) => {
                // const delay = 0.3 + (index < initialProjectCount ? index : index - initialProjectCount) * 0.1;
                const delay = 0.3 + index * 0.1;
                return (
                  <AnimateIn key={index} variant="fadeLeft" delay={delay}>
                    <li className="group hover:translate-x-1 transition-all duration-300 ease-out">
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="text-md font-medium">{project.title}</h3>
                        <div className="flex flex-row gap-2">
                          {project.github ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                              GitHub <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null}
                          {project.link ? (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            >
                              View <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : null}
                        </div>
                      </div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs text-zinc-400 dark:text-zinc-500">
                            {tech}
                            {techIndex < project.technologies.length - 1 ? " /" : ""}
                          </span>
                        ))}
                      </div>
                    </li>
                  </AnimateIn>
                );
              })}
            </ul>
            {/* {projects.length > initialProjectCount && (
              <button
                onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mx-auto"
              >
                {isProjectsExpanded ? (
                  <>
                    Show Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Show More Projects <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )} */}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.6}>
        <section className="mb-12">
          <AnimateIn variant="reveal" delay={0.7}>
            <h2 className="text-lg font-medium tracking-tight mb-4 inline-block">Tools & Stack</h2>
          </AnimateIn>
          <div className="grid grid-cols-5 sm:grid-cols-7 gap-y-6 gap-x-4">
            {tools.map(({ logo, title }, index) => (
              <AnimateIn key={index} variant="scale" delay={0.7 + index * 0.03}>
                <div className="flex flex-col items-center group">
                  <div className="relative h-6 w-6 sm:h-8 sm:w-8 mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    <Image src={logo} alt={`${title} logo`} fill className="object-contain drop-shadow-md" loading="eager" />
                  </div>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center whitespace-nowrap">{title}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </section>
      </AnimateIn>

      <AnimateIn variant="fadeUp" delay={0.8}>
        <footer className="pt-4 text-xs text-zinc-400 dark:text-zinc-500 flex justify-between items-center">
          <div>Amogh Kini</div>
        </footer>
      </AnimateIn>
    </main>
  );
}

const projects = [
  {
    title: "oss.now",
    description: "A place to share your open source projects and find new ones.",
    link: "https://oss.now",
    github: "https://github.com/ahmetskilinc/ossdotnow",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Payload CMS", "Postgres"],
  },
  {
    title: "UI Registry",
    description: "A simple UI registry for components and blocks using the shadcn api.",
    link: "https://l.ahmet.studio/ui",
    github: "https://l.ahmet.studio/gh",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    link: "https://payload-ecommerce-app.vercel.app/",
    github: "https://github.com/ahmetskilinc/payload-ecommerce",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Payload CMS", "Stripe"],
  },
  {
    title: "Portfolio Website",
    description: "A minimalist portfolio website showcasing projects and skills with a clean, responsive design.",
    link: "https://dub.sh/ahmet/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Work Hours Tracker - web",
    description: "A collaborative task management web application with real-time updates and team functionality.",
    link: "https://work-hours-tracker-chi.vercel.app/",
    github: "https://github.com/ahmetskilinc/work-hours-web",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web Sockets", "Supabase"],
  },
  {
    title: "Work Hours Tracker - mobile",
    description: "A collaborative task management mobile application with real-time updates and team functionality.",
    github: "https://github.com/ahmetskilinc/work-hours-app",
    technologies: ["Expo", "React Native", "TypeScript", "Web Sockets", "Supabase"],
  },
  {
    title: "Payload CMS Appointment Scheduling Plugin",
    description: "A plugin for Payload CMS that allows users to schedule appointments.",
    github: "https://github.com/ahmetskilinc/payload-appointments-plugin",
    technologies: ["Next.js", "TypeScript", "Payload CMS"],
  },
  {
    title: "Payload CMS Media Grid View Plugin",
    description: "A plugin for Payload CMS that allows users to view media in a grid view.",
    github: "https://github.com/ahmetskilinc/payload-media-grid-plugin",
    technologies: ["Next.js", "TypeScript", "Payload CMS"],
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Zero Email Inc. (US, remote)",
    period: "Feb 2025 - Present",
    description:
      "Software engineer responsible for core features and performance optimisations for an innovative AI-powered email client, focusing on intelligent email processing and real-time collaboration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres", "Google APIs"],
  },
  {
    role: "Freelance Developer",
    period: "Mar 2024 - May 2025",
    description:
      "Delivering custom web solutions for diverse clients, specialising in e-commerce platforms, content management systems, and business automation tools.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres", "MongoDB", "PayloadCMS", "Google APIs"],
  },
  {
    role: "Front End Developer",
    company: "Executives Place",
    period: "Oct 2023 - Feb 2024",
    description: "Developed and maintained multiple features for the SaaS product, from performance improvements to new features.",
    technologies: ["Vue.js", "Node.js", "Laravel", "SQL"],
  },
  {
    role: "Full Stack Developer",
    company: "XLN Telecom (Daisy Comms)",
    period: "Nov 2020 - Aug 2023",
    description: "Developed and maintained the company brochure site to guide and increase sales.",
    technologies: ["Vue.js", "Nuxt.js", "JavaScript", "SQL", "MongoDB", "C#", "ASP.NET", "WordPress"],
  },
  {
    role: "Junior Web Developer",
    company: "Absowebly",
    period: "Jul 2018 - Sep 2018",
    description: "Developing and maintaining client websites with a proprietary CMS.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Sass"],
  },
];

const tools = [
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "NextJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactrouter/reactrouter-original.svg",
    title: "React Router",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    title: "VueJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
    title: "NuxtJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    title: "CSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "Javascript",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: "Typescript",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trpc/trpc-original.svg",
    title: "TRPC",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    title: "Google Cloud",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    title: "AWS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "NodeJS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
    title: "Bun",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    title: "PostgreSQL",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
    title: "Cloudflare",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    title: "Vercel",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    title: "Sass",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    title: "TailwindCSS",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "GIT",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    title: "Figma",
  },
  {
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg",
    title: "Sketch",
  },
];
