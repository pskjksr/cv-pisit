"use client";

import Image from "next/image";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-900 text-white font-sans scroll-smooth animate-fade-in">
      {/* Navbar */}
      <nav className="w-full fixed top-0 z-50 bg-blue-950/90 backdrop-blur-md shadow-md px-6 py-4 flex justify-center">
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

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6">
          Hello, I&apos;m <span className="text-blue-400">Pisit</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto delay-200 animate-fade-in-up">
          I&apos;m a passionate Software Engineering student who crafts clean,
          engaging, and accessible digital experiences.
        </p>
        <a
          href="#about"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold shadow-xl backdrop-blur-md border border-white/10 transition"
        >
          Learn more ↓
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 text-3xl animate-fade-in-up delay-300">
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

      {/* About Section */}
      <section
        id="about"
        className="bg-white text-blue-900 py-24 px-6 flex flex-col md:flex-row items-center justify-center gap-12 animate-fade-in-up delay-200"
      >
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 bg-[#0e0c24]  shadow-xl hover:scale-105 transition duration-300 hover:shadow-blue-500/50">
          <Image
            src="/Photo.jpg"
            alt="Pisit portrait"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-[#0e0c24] border border-blue-400 p-8 rounded-2xl shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 ease-in-out max-w-xl text-white text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-500 inline-block pb-1">
            📘 About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            I&apos;m <strong className="text-blue-400">Pisit Khunchomklaosiri</strong>, a
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

      {/* Education Section */}
      <section
        id="education"
        className="bg-blue-900 text-white py-24 px-6 text-center animate-fade-in-up delay-300"
      >
        <h2 className="text-4xl font-bold mb-16 border-b-4 border-blue-400 inline-block pb-2">
          🎓 Education
        </h2>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-stretch gap-10 px-4">
          {/* School Card */}
          <div className="bg-[#0e0c24] border border-blue-400 p-6 rounded-2xl w-full max-w-sm shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
            <div className="text-7xl mb-4">🏫</div>
            <h3 className="text-xl font-semibold mb-1">
              Phayaophitthayakhom School
            </h3>
            <p className="text-blue-400 font-medium mb-1">Science & Math</p>
            <p className="text-sm text-gray-300">2020 - 2023</p>
          </div>

          {/* University Card */}
          <div className="bg-[#0e0c24] border border-blue-400 p-6 rounded-2xl w-full max-w-sm shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
            <div className="text-7xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-1">University of Phayao</h3>
            <p className="text-blue-400 font-medium mb-1">
              Software Engineering
            </p>
            <p className="text-sm">GPA: 3.03</p>
            <p className="text-sm text-gray-300">2023 - Now</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-white text-blue-900 py-24 px-6 text-center animate-fade-in-up delay-400"
      >
        <h2 className="text-4xl font-bold text-center mb-16 border-b-4 border-blue-500 inline-block pb-2 mx-auto">
          🛠 Skills
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-4">
          {/* Computer Skill Card */}
          <div className="bg-[#0e0c24] border border-blue-400 p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-semibold mb-4 pb-2 text-white flex items-center gap-2 border-b-2 border-blue-400">
              💻 Computer Skill
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-lg text-white text-left">
              <li>UX/UI Design (Figma)</li>
              <li>Canva</li>
              <li>Microsoft Office</li>
              <li>VS Code</li>
              <li>GitHub</li>
            </ul>
          </div>

          {/* Coding Skill Card */}
          <div className="bg-[#0e0c24] border border-blue-400 p-6 rounded-2xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300">
            <h3 className="text-3xl font-semibold mb-4 pb-2 text-white flex items-center gap-2 border-b-2 border-blue-400">
              👨‍💻 Coding Skill
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-lg text-white text-left">
              <li>HTML</li>
              <li>CSS</li>
              <li>Next.js</li>
              <li>TailwindCSS</li>
              <li>JavaScript (basic)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-blue-950 text-gray-400 py-10 text-center text-sm mt-20">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 500 80"
            preserveAspectRatio="none"
            className="w-full h-10"
          >
            <path
              d="M0,40 C150,80 350,0 500,40 L500,00 L0,0 Z"
              className="fill-blue-900"
            />
          </svg>
        </div>
      </footer>
    </main>
  );
}
