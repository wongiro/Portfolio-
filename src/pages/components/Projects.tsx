// ✅ All-in-one Projects section (dark mode supported)

"use client";

import { IoMdCode } from "react-icons/io";
import { FaLocationArrow } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export default function Projects() {
  // ✅ Project data
  const projects: Project[] = [
    {
      title: "XanaHealth",
      description:
        "XanaHealth is an electronic medical records platform designed for resource-constrained environments. It streamlines patient data management and improves healthcare delivery.",
      techStack: ["React", "JS", "Tailwind", "Node.js", "Express"],
      githubUrl: "https://github.com/yourusername/xanahealth",
      liveUrl: "https://xanahealth.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A weather app that displays forecasts for any city using the OpenWeather API.",
      techStack: ["Next.js", "TypeScript", "CSS"],
      githubUrl: "https://github.com/yourusername/weather",
      liveUrl: "https://weather-app.com",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal developer portfolio built using Next.js and Tailwind CSS.",
      techStack: ["Next.js", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://portfolio.com",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Section Title */}
      <h2 className="flex justify-center text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
        Projects
      </h2>

      {/* Project Cards */}
      <div className="flex flex-col w-full gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="p-6 bg-slate-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
          >
            {/* 🔹 Tech stack badges and action icons */}
            <div className="flex justify-between items-start mb-4">
              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub and Live link icons */}
              <div className="flex gap-2">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <IoMdCode className="bg-blue-500 dark:bg-blue-600 p-2 text-white h-8 w-8 rounded-md" />
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <FaLocationArrow className="bg-green-500 dark:bg-green-600 p-2 text-white h-8 w-8 rounded-md" />
                </a>
              </div>
            </div>

            {/* 🔹 Project title & description */}
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
