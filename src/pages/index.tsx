"use client";

import React, { useEffect, useState, useRef } from "react";
import { MdLanguage } from "react-icons/md";
import SocialLinks from "./components/SocialLinks";
import DownloadButtons from "./components/DownloadButtons";
import Skills from "./components/Skills";
import Work from "./components/WorkItem";
import Projects from "./components/Projects";
import ThemeToggle from "./components/ThemeToggle";

type SectionId =
  | "home"
  | "projects"
  | "work"
  | "education"
  | "skills"
  | "contact";

export default function Page() {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [mounted, setMounted] = useState(false);

  // Refs for scrolling
  const sectionRefs = {
    home: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    work: useRef<HTMLElement | null>(null),
    education: useRef<HTMLElement | null>(null),
    skills: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  } as Record<SectionId, React.RefObject<HTMLElement>>;

  // ⏰ Time logic
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString());
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  // Set mounted state to prevent hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔍 Observe visible sections to highlight active nav link
  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const section = visible[0].target.getAttribute(
            "data-section"
          ) as SectionId | null;
          if (section) setActiveSection(section);
        }
      },
      { rootMargin: "-20% 0px -40% 0px", threshold: [0.25, 0.5, 0.75] }
    );

    (Object.keys(sectionRefs) as SectionId[]).forEach((id) => {
      const el = sectionRefs[id].current;
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [mounted]);

  // Smooth scroll
  const scrollTo = (id: SectionId) => {
    const el = sectionRefs[id].current;
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const location = "Kampala, Uganda";

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500 dark:text-gray-400">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 scroll-smooth transition-colors duration-300 min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border m-4 md:m-8 rounded-2xl border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm transition-colors duration-300">
        <div className="mx-auto h-16 w-full flex items-center justify-between px-4">
          <button
            onClick={() => scrollTo("home")}
            className="font-bold text-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-transform hover:scale-105"
            aria-label="Scroll to home"
          >
            <MdLanguage className="inline-flex justify-center w-12 h-8 md:w-16 md:h-10 items-center px-3 py-2 text-sm font-medium text-center text-gray-700 dark:text-gray-200 bg-slate-200 dark:bg-gray-700 rounded-lg transition-colors duration-300" />
          </button>

          <ul className="hidden md:flex space-x-2">
            {(["home", "projects", "work", "skills", "contact"] as SectionId[]).map(
              (id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`px-3 py-2 h-10 rounded-md capitalize transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      activeSection === id
                        ? "bg-blue-500 text-white shadow-md scale-105"
                        : "bg-slate-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-slate-200 dark:hover:bg-gray-600 hover:shadow-sm"
                    }`}
                  >
                    {id}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* 🌗 Dark Mode Toggle */}
          <ThemeToggle />
        </div>
      </nav>

      {/* Main content */}
      <main className="max-w-5xl mx-auto pt-24 pb-16 px-4 space-y-16 md:space-y-20">
        {/* Home Section */}
        <section
          ref={sectionRefs.home}
          data-section="home"
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center py-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900 dark:text-white">
            Robinson Rubangakene
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Based in {location} <span className="text-red-400">→</span>{" "}
            <strong className="text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg px-2 py-1">
              {time} GMT+3
            </strong>
          </p>

          <div className="mb-8">
            <SocialLinks />
          </div>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            I am a{" "}
            <strong className="text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg px-2 py-1">
              web developer
            </strong>{" "}
            specializing in creating responsive and user-friendly applications.
          </p>

          <div className="w-full max-w-2xl p-6 bg-slate-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-colors duration-300">
            <div className="mb-6">
              <h5 className="mb-3 text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Resume</h5>
              <p className="text-base text-gray-600 dark:text-gray-400 sm:text-lg">
                Quick download or review resume available:
              </p>
            </div>
            <DownloadButtons />
          </div>
        </section>

        {/* Projects */}
        <section
          ref={sectionRefs.projects}
          data-section="projects"
          id="projects"
          className="scroll-mt-16"
        >
          <Projects />
        </section>

        {/* Work */}
        <section 
          ref={sectionRefs.work} 
          data-section="work" 
          id="work"
          className="scroll-mt-16"
        >
          <Work />
        </section>

        {/* Skills */}
        <section 
          ref={sectionRefs.skills} 
          data-section="skills" 
          id="skills"
          className="scroll-mt-16"
        >
          <h1 className="flex justify-center text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white">
            Skills
          </h1>
          <Skills />
        </section>

        {/* Contact */}
        <section
          ref={sectionRefs.contact}
          data-section="contact"
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center text-center py-8 scroll-mt-16"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white">
            Get in Touch
          </h1>
          <div className="w-full max-w-2xl p-6 bg-slate-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-colors duration-300">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Based in {location}
            </p>
            <div className="flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-600 dark:text-gray-400 py-8 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4">
          <p className="mb-2 font-medium text-gray-700 dark:text-gray-300">Robinson Rubangakene</p>
          <p className="text-sm">
            © {new Date().getFullYear()} Robinson Rubangakene | All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}