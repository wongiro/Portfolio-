"use client";

import { DiJavascript } from "react-icons/di";
import { FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPostgresql, SiPostman, SiMongodb } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { JSX } from "react";

interface SkillCategory {
  title: string;
  skills: { name: string; icon: JSX.Element }[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <RiNextjsFill /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      { name: "HTML / CSS", icon: <DiJavascript /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <DiJavascript /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

export default function Skills() {
  return (
    <div className="flex flex-wrap gap-6 justify-between transition-colors duration-300">
      {skillsData.map((category) => (
        <div
          key={category.title}
          className="bg-slate-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-6 w-full sm:w-72 text-center hover:shadow-md hover:scale-[1.02] transition-all duration-300"
        >
          {/* Category title */}
          <p className="text-2xl font-bold mb-6 pb-2 border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100">
            {category.title}
          </p>

          {/* Skills list */}
          <div className="flex flex-wrap justify-center gap-3 p-3">
            {category.skills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-md text-sm font-medium text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-slate-200 dark:hover:bg-gray-600 transition-colors duration-300"
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
