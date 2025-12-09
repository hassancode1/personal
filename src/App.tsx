

import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from 'react-router-dom';
import './App.css';

export default function Home() {
 
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Navigation */}
        <nav className="mb-16">
          <div className="terminal-prompt inline-block">~ hassan-iliyasu</div>
          <div className="mt-4 flex gap-6 text-sm">
            <Link to="#" className="link-hover pb-1">
              home
            </Link>
            <Link to="#projects" className="link-hover pb-1">
              projects
            </Link>
            <Link to="#experience" className="link-hover pb-1">
              experience
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary">
            Hassan Iliyasu
            <span className="cursor-blink text-foreground">|</span>
          </h1>

          <div className="space-y-4">
            <div className="terminal-prompt inline-block">$ cat about.md</div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed ml-4">
              Ai Enthusiast | FullStack Engineer |
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-20">
          <div className="terminal-prompt mb-6">$ ls ./contact</div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-4">
            <a
              href="https://github.com/hassancode1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 border border-border rounded hover:border-primary transition-all group bg-card hover:shadow-md"
            >
              <Github className="w-4 h-4 group-hover:text-primary" />
              <span className="text-sm">github.md</span>
            </a>

            <a
              href="https://linkedin.com/in/hassan-jaeh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 border border-border rounded hover:border-primary transition-all group bg-card hover:shadow-md"
            >
              <Linkedin className="w-4 h-4 group-hover:text-primary" />
              <span className="text-sm">linkedin.md</span>
            </a>

            <a
              href="mailto:hassanjaeh@gmail.com"
              className="flex items-center gap-2 px-4 py-3 border border-border rounded hover:border-primary transition-all group bg-card hover:shadow-md"
            >
              <Mail className="w-4 h-4 group-hover:text-primary" />
              <span className="text-sm">mail.txt</span>
            </a>
          </div>
        </section>

        <div className="dotted-separator" />

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
            Projects
          </h2>

          <div className="space-y-8">
            {/* Project 1 */}
            <div className="border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-md bg-card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">YGIT-AI</h3>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/hassancode1/ygit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {/* <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a> */}
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Spearheaded the design and development of YGIT-AI, an AI-based
                platform aimed at democratizing access to tech careers through
                personalized guidance and resources. Achieved high user
                satisfaction with real-time generation of comprehensive career
                development content.
              </p>

              <div className="flex flex-wrap gap-2">
                {["OpenAI API", "GPT-4", "Streamlit", "Python", "Git"].map(
                  (tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Project 3 */}
            <div className="border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-md bg-card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">
                  Hand Sign V2
                </h3>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/hassancode1/hand-sign-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Built a full-stack hand-sign recognition platform with a
                TypeScript client and Node backend. Processes real-time camera
                input, classifies hand gestures, and exposes a clean API layer
                for integrating sign-based interactions into modern web apps.
              </p>

              <div className="flex flex-wrap gap-2">
                {["TypeScript", "React", "Node.js", "Computer Vision"].map(
                  (tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Project 2 */}
            <div className="border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-md bg-card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-primary">
                  Form Render
                </h3>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/hassancode1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Developed a form renderer package that takes a DTO of JSON and
                turns it into a form. Implemented continuous delivery using
                GitHub Actions to build the package upon new release.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express", "PostgreSQL", "React", "Git"].map(
                  (tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 text-right">
            <a
              href="https://github.com/hassancode1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm"
            >
              View more projects
            </a>
          </div>
        </section>

        <div className="dotted-separator" />

        {/* Experience Section */}
        <section id="experience" className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
            Experience
          </h2>

          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="border-l-2 border-primary pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-semibold">Software Engineer</h3>
                <span className="text-sm text-muted-foreground">
                  Jan 2025 – June 2025
                </span>
              </div>
              <div className="text-primary mb-3 text-sm">Hago • Remote</div>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>
                  Architected full-stack marketplace platform supporting
                  thousands of concurrent users
                </li>
                <li>
                  Improved product discovery by 60% with advanced search and
                  filtering capabilities
                </li>
                <li>
                  Built comprehensive escrow payment system reducing transaction
                  disputes by 35%
                </li>
                <li>
                  Developed real-time messaging system reducing response times
                  by 50%
                </li>
                <li>
                  Mentored two junior engineers and improved team velocity
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="border-l-2 border-border hover:border-primary transition-colors pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-semibold">Software Engineer</h3>
                <span className="text-sm text-muted-foreground">
                  June 2024 – Jan 2025
                </span>
              </div>
              <div className="text-primary mb-3 text-sm">Saaspro • Remote</div>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>
                  Sole frontend engineer developing healthcare applications with
                  Next.js and React Native
                </li>
                <li>
                  Built mobile app for secure doctor-patient communication
                </li>
                <li>
                  Ensured HIPAA compliance and maintainable code for medical
                  data handling
                </li>
                <li>
                  Mentored two team members in frontend development best
                  practices
                </li>
              </ul>
            </div>

            {/* Experience 3 */}
            <div className="border-l-2 border-border hover:border-primary transition-colors pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-lg font-semibold">Software Engineer</h3>
                <span className="text-sm text-muted-foreground">
                  Jan 2021 – June 2024
                </span>
              </div>
              <div className="text-primary mb-3 text-sm">
                Flexisaf Edu Soft • Remote
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                <li>Mentored team of 3 frontend developers</li>
                <li>
                  Contributed to SAFapply, onboarding 12 schools and 20,000+
                  applicants
                </li>
                <li>Ensured full responsive design across all devices</li>
                <li>
                  Defined coding standards and best practices for maintainable
                  code
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="dotted-separator" />

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
            Technical Skills
          </h2>

          <div className="space-y-6">
            <div>
              <div className="terminal-prompt mb-3">$ cat languages.txt</div>
              <div className="flex flex-wrap gap-2 ml-4">
                {[
                  "JavaScript",
                  "TypeScript",
                  "SQL",
                  "PostgreSQL",
                  "HTML/CSS",
                ].map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="terminal-prompt mb-3">$ cat frameworks.txt</div>
              <div className="flex flex-wrap gap-2 ml-4">
                {[
                  "React",
                  "Next.js",
                  "React Native",
                  "Node.js",
                  "Express",
                  "Vue.js",
                  "Hono",
                  "Tailwind CSS",
                  "Material-UI",
                  "RTK Query",
                ].map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="terminal-prompt mb-3">$ cat tools.txt</div>
              <div className="flex flex-wrap gap-2 ml-4">
                {[
                  "Git",
                  "Docker",
                  "VS Code",
                  "Figma",
                  "GitHub Actions",
                  "Bash",
                ].map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="terminal-prompt mb-3">$ cat libraries.txt</div>
              <div className="flex flex-wrap gap-2 ml-4">
                {[
                  "ShadCN",
                  "OpenAI API",
                  "GPT-4",
                  "Streamlit",
                  "Prisma",
                  "Drizzle",
                ].map((skill) => (
                  <span key={skill} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="dotted-separator" />

        {/* Awards Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
            Awards
          </h2>

          <div className="border border-border rounded-lg p-6 hover:border-primary transition-all">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold">
                Third Place Winner - C-CODE Hackathon UNIABUJA
              </h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                Nov 2023
              </span>
            </div>
            <p className="text-sm text-primary mb-2">Project: Ed Quest</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Collaborated with Team Cool - Coders to design innovative digital
              solutions aimed at advancing educational development. Awarded
              third place for exceptional skills and dedication in a competitive
              and technology-driven environment.
            </p>
          </div>
        </section>

        <div className="dotted-separator" />

        {/* Education Section */}
        <section className="mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
            Education
          </h2>

          <div className="border-l-2 border-primary pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-lg font-semibold">
                Diploma In Computer Science
              </h3>
              <span className="text-sm text-muted-foreground">June 2024</span>
            </div>
            <div className="text-primary text-sm">
              Institute Of Information Technology Kazaure • Kazaure, Nigeria
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
          <p className="mt-2">© 2025 Hassan Iliyasu. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
