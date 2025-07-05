import Image from "next/image";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-900 text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 relative shadow-md z-10">
        <div className="text-xl md:text-2xl font-extrabold tracking-widest">
          PISIT <span className="text-blue-400">KHUNCHOMKLAOSIRI</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-6 md:gap-10 text-sm font-medium uppercase">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-blue-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-400 transition">
            Projects
          </a>
        </div>
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md text-sm shadow-md transition"
        >
          Contact me
        </a>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-24 mb-16 max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg tracking-tight">
          Hello, I'm <span className="text-blue-400">Pisit</span>
        </h1>
        <p className="mt-2 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Welcome to my portfolio! Here, you'll find a showcase of my UX/UI
          design and frontend development expertise, all focused on creating
          exceptional user experiences. Feel free to explore my work!
        </p>
        <a
          href="#about"
          className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-base font-semibold shadow-md transition duration-300"
        >
          About me
        </a>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 text-3xl">
          <a
            href="https://github.com/pskjksr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/pisit.kunjomkawsiri/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://mail.google.com/mail/u/2/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <SiGmail />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="w-full bg-blue-100 text-blue-900 py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-12 transition-all duration-500"
      >
        {/* Profile Image */}
        <div className="w-60 h-60 rounded-full overflow-hidden shadow-xl border-4 border-blue-300 hover:scale-105 transition duration-300">
          <Image
            src="/photo1.jpg"
            alt="My portrait"
            width={240}
            height={240}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Content */}
        <div className="max-w-xl text-center md:text-left">
          <h3 className="text-4xl font-bold mb-4 text-blue-900">About Me</h3>
          <p className="text-lg leading-relaxed mb-6">
            Hey, my name is{" "}
            <strong className="text-blue-700">Pisit Khunchomklaosiri</strong>.
            I’m a third-year Software Engineering student at the University of
            Phayao with a strong passion for crafting engaging and intuitive
            user interfaces. I'm seeking an internship in{" "}
            <strong>Front-End Development, UX/UI Design,</strong> or{" "}
            <strong>Business Analysis</strong> from{" "}
            <strong>November 2025 to March 2026</strong>.
          </p>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md font-medium shadow-md transition"
          >
             Resume
          </a>
        </div>
      </section>
    </main>
  );
}
