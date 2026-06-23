import { ExperienceCard } from "@/components/ExperienceCard";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillGroup } from "@/components/SkillGroup";
import {
  experiences,
  projects,
  profileLinks,
  skillGroups,
  socialLinks
} from "@/lib/portfolio-data";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="technical-grid pointer-events-none absolute inset-x-0 top-0 h-[620px]" />
      <Navbar />

      <section
        id="home"
        className="section-anchor relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-10"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-line bg-white/5 px-4 py-2 text-sm font-medium text-signal">
              Georgia Tech Electrical Engineering
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
              Aaryan Kulkarni
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-medium text-slate-200 sm:text-2xl">
              Electrical Engineering Student | AI, Hardware, RTL, and Computer Vision
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Building intelligent hardware and real-time engineering systems across AI,
              embedded design, and semiconductor technology.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400">
              I focus on practical engineering systems where software meets hardware:
              AI-assisted safety tools, RISC-V and FPGA design, embedded sensing, and
              research-driven semiconductor work.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  download={link.download ? true : undefined}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="rounded-md border border-line bg-white/7 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-signal/60 hover:bg-signal/10 hover:text-signal"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-line bg-panel/75 p-6 shadow-glow backdrop-blur">
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                ["Focus", "AI hardware"],
                ["Design", "RTL / RISC-V"],
                ["Systems", "FPGA + embedded"],
                ["Research", "Semiconductors"],
                ["Software", "Python / OpenCV"],
                ["Verification", "Testbenches + VCD"]
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-line bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
                  <p className="mt-2 font-semibold text-slate-100">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-line pt-6">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Current trajectory</p>
              <p className="mt-3 text-lg leading-8 text-slate-200">
                Building toward AI hardware, FPGA systems, safety-critical computer vision,
                and semiconductor engineering roles where rigorous design meets real-world impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader eyebrow="About" title="A practical systems builder with an EE foundation." />
        <p className="max-w-4xl text-lg leading-8 text-slate-300">
          I am a Georgia Tech Electrical Engineering student with a 4.0 GPA, focused on
          AI hardware, RISC-V CPUs, FPGA systems, computer vision, embedded systems, and
          semiconductor research. I like building practical systems that combine software,
          hardware, and real-world impact, from real-time safety monitoring to simulation-first
          digital design.
        </p>
      </section>

      <section id="experience" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader eyebrow="Experience" title="Engineering work across AI systems, research, and products." />
        <div className="grid gap-5 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.title} experience={experience} />
          ))}
        </div>
      </section>

      <section id="projects" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader eyebrow="Projects" title="Selected technical builds." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section id="skills" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader eyebrow="Skills" title="A stack spanning silicon-facing design and applied AI." />
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <SkillGroup key={group.title} group={group} />
          ))}
        </div>
      </section>

      <section id="direction" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="rounded-lg border border-line bg-white/[0.04] p-7 sm:p-10">
          <SectionHeader eyebrow="Where I'm Headed" title="Building toward rigorous, impact-driven engineering." />
          <p className="max-w-4xl text-lg leading-8 text-slate-300">
            I am pursuing internships, research, and projects in AI hardware, semiconductor
            technology, FPGA and RTL design, embedded systems, computer vision, and
            safety-critical engineering. My goal is to grow into an engineer who can move
            confidently from device physics and digital architecture to deployed systems that
            people can rely on.
          </p>
        </div>
      </section>

      <section id="resume" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 rounded-lg border border-line bg-panel/70 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionHeader eyebrow="Resume" title="A concise view of experience, projects, and technical range." />
            <p className="max-w-3xl text-slate-300">
              Download a concise resume snapshot covering my experience, projects, and
              technical focus across AI hardware, embedded systems, RTL, computer vision,
              and semiconductor research.
            </p>
          </div>
          <a
            href="/Aaryan_Master.pdf"
            download
            className="inline-flex justify-center rounded-md bg-signal px-6 py-3 text-sm font-bold text-graphite transition hover:-translate-y-0.5 hover:bg-white"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section id="contact" className="section-anchor mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader eyebrow="Contact" title="Interested in collaborating, recruiting, or discussing engineering projects? Let's connect." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a className="rounded-lg border border-line bg-white/[0.04] p-5 transition hover:border-signal/60 hover:bg-signal/10" href={`mailto:${profileLinks.email}`}>
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-2 break-words font-semibold text-white">{profileLinks.email}</p>
          </a>
          <a className="rounded-lg border border-line bg-white/[0.04] p-5 transition hover:border-signal/60 hover:bg-signal/10" href={`tel:${profileLinks.phone.replaceAll("-", "")}`}>
            <p className="text-sm text-slate-500">Phone</p>
            <p className="mt-2 font-semibold text-white">{profileLinks.phone}</p>
          </a>
          <a
            className="rounded-lg border border-line bg-white/[0.04] p-5 transition hover:border-signal/60 hover:bg-signal/10"
            href={profileLinks.linkedin || "#contact"}
            target={profileLinks.linkedin ? "_blank" : undefined}
            rel={profileLinks.linkedin ? "noreferrer" : undefined}
          >
            <p className="text-sm text-slate-500">LinkedIn</p>
            <p className="mt-2 font-semibold text-white">{profileLinks.linkedin ? "View profile" : "Add LinkedIn URL"}</p>
          </a>
          <a
            className="rounded-lg border border-line bg-white/[0.04] p-5 transition hover:border-signal/60 hover:bg-signal/10"
            href={profileLinks.github || "#contact"}
            target={profileLinks.github ? "_blank" : undefined}
            rel={profileLinks.github ? "noreferrer" : undefined}
          >
            <p className="text-sm text-slate-500">GitHub</p>
            <p className="mt-2 font-semibold text-white">{profileLinks.github ? "View code" : "Add GitHub URL"}</p>
          </a>
        </div>
      </section>
    </main>
  );
}
