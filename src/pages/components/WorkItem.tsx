import React from "react";

interface WorkItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  logo: string;
  techStack: string[];
}

function WorkItem({
  title,
  company,
  duration,
  description,
  logo,
  techStack,
}: WorkItemProps) {
  return (
    <article className="p-4 gap-4 bg-slate-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm sm:p-8 transition-colors duration-500">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        {/* Logo + Job Info */}
        <div className="flex flex-row gap-3 items-start">
          <figure className="mb-4 sm:mb-0">
            <img
              src={logo}
              alt={`${company} logo`}
              className="rounded-md w-20 h-20 object-contain bg-amber-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2"
            />
          </figure>
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-1">{company}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{duration}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 ml-auto items-start justify-start sm:justify-end">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-300 dark:bg-gray-700 px-3 py-1 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors duration-500"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mt-4 text-left">
        {description}
      </p>
    </article>
  );
}

export default function Work() {
  const workData: WorkItemProps[] = [
    {
      title: "Software Engineer Intern",
      company: "Karisimbi Tech",
      duration: "June 2023 - August 2023",
      logo: "/karisimbi.png",
      techStack: ["React", "Next.js", "TypeScript", "Git"],
      description:
        "During my internship at Karisimbi Tech, I contributed to the development of web applications using React and Next.js. I collaborated with a team of developers to implement new features, fix bugs, and optimize performance.",
    },
    {
      title: "Frontend Apprentice",
      company: "AltSchool Africa",
      duration: "April 2022 - April 2023",
      logo: "/altschool.png",
      techStack: ["Next.js", "Tailwind CSS", "Node.js"],
      description:
        "As a Frontend Apprentice at AltSchool Africa, I worked on building responsive and user-friendly web interfaces while collaborating on team reviews and improving code quality.",
    },
  ];

  return (
    <section
      id="work"
      className="w-full py-8 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <h1 className="flex justify-center text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
        Work
      </h1>
      <div className="grid gap-6 w-full grid-cols-1 md:grid-cols-1">
        {workData.map((job) => (
          <WorkItem key={job.company} {...job} />
        ))}
      </div>
    </section>
  );
}
