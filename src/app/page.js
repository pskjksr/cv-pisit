"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  const educationList = [
    {
      icon: <FaUniversity />,
      school: "University of Phayao",
      major: "B.Eng. Software Engineering",
      year: "2022 - Present",
      gpa: "GPA: 3.50",
    },
    {
      icon: <FaUniversity />,
      school: "Chiang Rai Wittayakhom School",
      major: "Science-Math Program",
      year: "2016 - 2021",
      gpa: "GPA: 3.75",
    },
  ];

  const skillList = [
    {
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Tools & Design",
      skills: ["Figma", "Git", "GitHub", "Canva", "VS Code", "Postman"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-900 text-white font-sans scroll-smooth animate-fade-in">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-blue-950/90 backdrop-blur-md shadow-md px-6 py-4 flex justify-center">
        <div className="flex gap-6 md:gap-10 text-sm font-semibold uppercase tracking-wide">
          {["About", "Education", "Skills", "Projects"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group hover:text-blue-400 transition"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-0.5 w-full scale-x-0 group-hover:scale-x-100 bg-blue-400 transition-transform origin-left duration-300"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6">
          Hello, I&apos;m <span className="text-blue-400">Pisit</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          I&apos;m a passionate Software Engineering student who crafts clean,
          engaging, and accessible digital experiences.
        </p>
        <a
          href="#about"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-xl border border-white/10 transition"
        >
          Learn more ↓
        </a>
        <div className="flex justify-center gap-6 mt-10 text-3xl">
          <a href="https://github.com/pskjksr" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-blue-400 transition hover:-translate-y-1" />
          </a>
          <a
            href="https://www.facebook.com/pisit.kunjomkawsiri/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook className="hover:text-blue-400 transition hover:-translate-y-1" />
          </a>
          <a
            href="https://mail.google.com/mail/u/2/#inbox"
            target="_blank"
            rel="noreferrer"
          >
            <SiGmail className="hover:text-blue-400 transition hover:-translate-y-1" />
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-white text-blue-900 py-24 px-6 flex flex-col md:flex-row items-center justify-center gap-12"
      >
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 bg-[#0e0c24] shadow-xl hover:scale-105 transition duration-300 hover:shadow-blue-500/50">
          <Image
            src="/Photo.jpg"
            alt="Pisit portrait"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-[#0e0c24] text-white p-8 rounded-2xl border border-blue-400 shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 inline-block pb-1">
            📘 About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            I&apos;m{" "}
            <strong className="text-blue-400">Pisit Khunchomklaosiri</strong>, a
            3rd-year Software Engineering student at the University of Phayao,
            seeking internship opportunities in{" "}
            <strong className="text-blue-400">Front-End Development</strong>,{" "}
            <strong className="text-blue-400">UX/UI Design</strong>, or{" "}
            <strong className="text-blue-400">Business Analysis</strong> between{" "}
            <strong className="text-blue-400">Nov 2025 - Mar 2026</strong>.
          </p>
          <a
            href="/Resume .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium shadow-md transition"
          >
            📄 Resume
          </a>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-24 px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 border-b-4 border-blue-400 inline-block pb-2">
          🎓 Education
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
          {/* UNIVERSITY */}
          <div className="bg-[#0e0c24]/80 border border-blue-500 p-6 rounded-2xl shadow-xl backdrop-blur-md hover:shadow-blue-500/60 hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <FaUniversity className="text-6xl text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              University of Phayao
            </h3>
            <p className="text-blue-300 font-medium mb-2">
              Bachelor of Engineering (Software Engineering)
            </p>
            <p className="text-sm text-gray-200">GPA: 3.03</p>
          </div>

          {/* SCHOOL */}
          <div className="bg-[#0e0c24]/80 border border-blue-500 p-6 rounded-2xl shadow-xl backdrop-blur-md hover:shadow-blue-500/60 hover:scale-105 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <FaUniversity className="text-6xl text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Phayaophitthayakhom School
            </h3>
            <p className="text-blue-300 font-medium mb-2">Science & Math</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="bg-white text-blue-900 py-24 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-16 border-b-4 border-blue-500 inline-block pb-2 mx-auto">
          🛠 Skills
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {skillList.map(({ title, skills }) => (
            <div
              key={title}
              className="bg-[#0e0c24] border border-blue-400 p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-3xl font-semibold mb-4 pb-2 text-white border-b-2 border-blue-400">
                {title}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-lg text-white text-left">
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-24 px-6 text-center"
      >
        <h2 className="text-4xl font-bold mb-16 border-b-4 border-blue-500 inline-block pb-2">
          💼 My Projects
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              name: "melodytune",
              image: "/Userflow_MelodyTune.png",
              date: "Jul 2024 - Sep 2024",
              tag: "Front-end Development, UX/UI",
              description:
                "In this project, I was responsible for designing the UX/UI for 3 pages and developing the front-end for 1 page.",
            },
            {
              name: "Second-hand IT Equipment Website",
              image: "/Second-hand IT.png",
              date: "Jul 2024 - Sep 2024",
              tag: "Front-end Development, UX/UI",
              description:
                "This project, I was mainly responsible for UX/UI design and front-end development. I primarily used Next.js to build the user interface and styled it with Tailwind CSS.",
            },
            {
              name: "Cookzy",
              image: "/Cookzy.png",
              date: "Dec 2024 - Feb 2025",
              tag: "Front-end Development",
              description:
                "In this project, I mainly worked as a front-end developer using Next.js. My responsibilities focused on building the user interface, and I used Tailwind CSS for styling.",
            },
          ].map((project) => (
            <div
              key={project.name}
              className="cursor-pointer bg-[#0e0c24] border border-blue-400 rounded-2xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              <div className="w-full h-48 bg-gray-800 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="px-6 py-4 text-white text-lg font-semibold border-t border-blue-500">
                {project.name}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-[#0e0c24] text-white p-8 rounded-2xl max-w-xl relative shadow-2xl border border-blue-500 text-left">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-xl hover:text-blue-400 transition"
              >
                ✕
              </button>
              <div className="flex flex-col items-center gap-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  width={500}
                  height={300}
                  className="rounded-lg border border-white object-contain"
                />
                <div className="flex gap-2 text-sm flex-wrap justify-center">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                    {selectedProject.tag}
                  </span>
                  <span className="border border-white px-3 py-1 rounded-full">
                    {selectedProject.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-center">
                  {selectedProject.name}
                </h3>
                <p className="text-gray-300 text-center">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="relative bg-blue-950 text-white pt-16 pb-8 mt-[-1px] overflow-hidden">
        {/* Wave Effect */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66 31.81C912.36 54.1 838.06 70.86 763.75 77.8c-114.54 10.7-229.09-7.63-343.63-20.7-79.1-9.1-158.2-13.5-237.3-4.7C119.42 60.5 59.71 77.8 0 95.1V0h1200v27.35c-71.33 24.48-142.67 49-214.34 59.46z"
              fill="#1e3a8a"
            ></path>
          </svg>
        </div>

        {/* Footer Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6"></div>
      </footer>
    </main>
  );
}
