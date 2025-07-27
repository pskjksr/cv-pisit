"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { VscVscode } from "react-icons/vsc";
import { FaFileWord, FaFileExcel, FaFilePowerpoint } from "react-icons/fa";
import {
  SiCanva,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
  SiGmail,
} from "react-icons/si";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaUniversity,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
} from "react-icons/fa";

// Custom hook for modal focus trap (simple version)
function useFocusTrap(isOpen) {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpen && ref.current) {
      ref.current.focus();
    }
  }, [isOpen]);

  return ref;
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const certificateRef = useRef(null);
  const cert1Ref = useRef(null);
  const cert2Ref = useRef(null);
  const cert3Ref = useRef(null);
  const cert4Ref = useRef(null);
  const cert5Ref = useRef(null);

  // Modal refs with focus trap
  const skillModalRef = useFocusTrap(!!selectedSkill);
  const projectModalRef = useFocusTrap(!!selectedProject);

  // Handle ESC key to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (selectedProject) setSelectedProject(null);
        if (selectedSkill) setSelectedSkill(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, selectedSkill]);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (selectedProject || selectedSkill) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject, selectedSkill]);

  // Scroll certificates initial and drag/scroll handlers
  useEffect(() => {
    const slider = certificateRef.current;
    if (!slider) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.classList.add("grabbing");
    };

    const handleMouseLeave = () => {
      isDown = false;
      slider.classList.remove("grabbing");
    };

    const handleMouseUp = () => {
      isDown = false;
      slider.classList.remove("grabbing");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const skills = [
    {
      name: "UX/UI Design (Figma)",
      icon: <SiFigma size={28} />,
      description: "Designing interfaces with Figma",
    },
    {
      name: "Canva",
      icon: <SiCanva size={28} />,
      description: "Graphic design tool for creating visual content",
    },
    {
      name: "Github",
      icon: <FaGithub size={28} />,
      description: "Version control with Git and GitHub",
    },
    {
      name: "Microsoft Office (Word, Excel, PowerPoint)",
      icon: (
        <div className="flex gap-2 text-white">
          <FaFileWord size={24} />
          <FaFileExcel size={24} />
          <FaFilePowerpoint size={24} />
        </div>
      ),
      description: "Microsoft Office Suite tools",
    },
    {
      name: "VS Code",
      icon: <VscVscode size={28} />,
      description: "Popular code editor for web development",
    },
    {
      name: "HTML",
      icon: <FaHtml5 size={28} />,
      description: "Markup language for structuring web content",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss size={28} />,
      description: "Utility-first CSS framework for styling",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt size={28} />,
      description: "Styling language for websites",
    },
    {
      name: "JavaScript (basic)",
      icon: <FaJs size={28} />,
      description: "Basic scripting language for interactivity",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={28} />,
      description: "React framework for server-side rendering",
    },
  ];

  const projectList = [
    {
      name: "melodytune",
      image: "/Userflow_MelodyTune.png",
      date: "Jul 2024 - Sep 2024",
      tag: "UX/UI Design, Front-end",
      description:
        "I was responsible for designing the UX/UI for 3 pages and developing the front-end for 1 page using tools like Figma and Next.js.",
      figmaUrl:
        "https://www.figma.com/board/TGi11Alp8MhroaDeGlyEjB/Userflow_MelodyTune?node-id=0-1&t=MjbozE2iQLfeVGau-1",
    },
    {
      name: "Second-hand IT Equipment Website",
      image: "/Second-hand IT.png",
      date: "Jul 2024 - Sep 2024",
      tag: "UX/UI Design, Front-end",
      description:
        "I handled both UX/UI design and front-end development. I designed the interface with Figma and built it using Next.js and Tailwind CSS.",
      figmaUrl:
        "https://www.figma.com/design/a5H753Sy32naDHeBCoGSMU/Design?node-id=9-706&t=ncYqW9eZ3kbZACQb-1",
    },
    {
      name: "Cookzy",
      image: "/Cookzy.png",
      date: "Dec 2024 - Feb 2025",
      tag: "Front-end Development",
      description:
        "I worked as a front-end developer, building responsive user interfaces using Next.js and styling them with Tailwind CSS.",
      figmaUrl:
        "https://www.figma.com/design/F2e70oBKFuebGMwn7oogPs/Untitled--Copy-?node-id=0-1&t=fF0kat7pMB9OjCXK-1",
    },
    {
      name: "SLRI FLOWER",
      image: "/SLRI FLOWER.png",
      date: "Oct 8 2023 - Oct 9 2023",
      tag: "UX/UI Design",
      description:
        "I was responsible for UX/UI design, focusing on creating a clean and user-friendly interface using tools like Figma.",
      figmaUrl:
        "https://www.figma.com/design/GWdx6Z59agTYB29bk8bU4W/Untitled?node-id=0-1&t=kjmhSdXMMtjFnhkb-1",
    },
  ];

  // Track current section in viewport for navbar aria-current
  const [currentSection, setCurrentSection] = useState("about");
  useEffect(() => {
    const sections = [
      "about",
      "education",
      "skills",
      "projects",
      "certificates",
    ];
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let selected = sections[0];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && scrollY >= el.offsetTop - window.innerHeight / 3) {
          selected = sec;
        }
      }
      setCurrentSection(selected);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-900 text-white font-sans scroll-smooth animate-fade-in">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-blue-950/60 backdrop-blur-md shadow-md px-4 py-3 rounded-b-2xl border-b border-blue-700">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm font-semibold uppercase tracking-wide max-w-full overflow-x-auto overflow-y-hidden whitespace-nowrap">
          {["About", "Education", "Skills", "Projects", "Certificates"].map(
            (item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative group px-2 py-1 text-white hover:text-blue-400 transition-all duration-300 ease-in-out ${
                  currentSection === item.toLowerCase()
                    ? "text-blue-400 font-bold"
                    : ""
                }`}
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            )
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-4xl mx-auto text-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6 animate-float">
          Hello, I&apos;m{" "}
          <span className="text-blue-400 animate-pulse">Pisit</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up animate-delay-300">
          I&apos;m a passionate Software Engineering student who crafts clean,
          engaging, and accessible digital experiences.
        </p>
        <a
          href="#about"
          className="inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
  hover:from-blue-600 hover:to-blue-800 text-white px-6 py-3 rounded-xl font-semibold 
  shadow-xl hover:shadow-blue-500/40 border border-white/10 transition duration-300 
  hover:scale-110 hover:backdrop-blur-md animate-fade-in-up animate-delay-500"
        >
          Learn more ↓
        </a>
        <svg width="0" height="0" style={{ position: "absolute" }}>
          <defs>
            <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
            </clipPath>
          </defs>
        </svg>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-10 animate-fade-in-up">
          {[
            {
              icon: <FaGithub className="h-6 w-6 text-white" />,
              link: "https://github.com/pskjksr",
              color: "from-gray-700 to-gray-900 border-gray-600/50",
            },
            {
              icon: <FaFacebook className="h-6 w-6 text-white" />,
              link: "https://www.facebook.com/pisit.kunjomkawsiri/",
              color: "from-blue-600 to-blue-800 border-blue-500/50",
            },
            {
              icon: <SiGmail className="h-6 w-6 text-white" />,
              link: "https://mail.google.com/mail/u/2/#inbox",
              color: "from-red-600 to-red-800 border-red-500/50",
            },
            {
              icon: <FaInstagram className="h-6 w-6 text-white" />,
              link: "https://www.instagram.com/pisittatt_frd/",
              color: "from-indigo-600 to-indigo-800 border-indigo-500/50",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="relative"
            >
              <div
                style={{ clipPath: "url(#squircleClip)" }}
                className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-md cursor-pointer transition-transform duration-300 ease-out transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg`}
              >
                {item.icon}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-white text-blue-900 py-24 px-6 flex flex-col md:flex-row items-center justify-center gap-12 animate-fade-in-up"
      >
        <div className="w-64 h-64 rounded-full overflow-hidden border-4 bg-[#0e0c24] shadow-xl hover:scale-105 transition duration-300 hover:shadow-blue-500/50 animate-zoom-in">
          <Image
            src="/Pe.jpg"
            alt="Pisit portrait"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="bg-[#0e0c24] text-white p-8 rounded-2xl border border-blue-400 shadow-xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 max-w-xl text-center md:text-left animate-fade-in-up">
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
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md 
  font-medium shadow-md transition animate-zoom-in border border-blue-300 hover:shadow-blue-400/60
  before:absolute before:inset-0 before:rounded-md before:bg-gradient-to-br before:from-white/10 
  before:to-white/0 before:blur-sm before:opacity-60 before:animate-pulse"
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
            <div className="flex justify-center mb-4 animate-float">
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
            <div className="flex justify-center mb-4 animate-float">
              <FaUniversity className="text-6xl text-blue-400" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Phayaophitthayakhom School
            </h3>
            <p className="text-blue-300 font-medium mb-2">Science & Math</p>
          </div>
        </div>
      </section>

      {/* Skill */}
      <section
        id="skills"
        className="bg-white text-blue-500 py-24 px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-blue-900 border-b-4 border-blue-500 inline-block pb-2">
          🛠 Skills
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <button
              key={skill.name}
              onClick={() => setSelectedSkill(skill)}
              role="button"
              tabIndex={0}
              className={`cursor-pointer bg-[#0e0c24] text-white font-semibold rounded-2xl py-6 px-4 
        border border-blue-500 shadow-xl flex flex-col items-center justify-center text-center gap-2 
        opacity-0 hover:shadow-blue-500/60 hover:scale-105 hover:ring-2 hover:ring-blue-400 
        transition-all duration-300`}
              style={{
                animationName: "fade-in-up, float",
                animationDuration: `0.5s, ${3 + (index % 3)}s`,
                animationTimingFunction: "ease-out, ease-in-out",
                animationDelay: `${index * 100}ms, 0s`,
                animationIterationCount: "1, infinite",
                animationFillMode: "forwards, none",
              }}
            >
              <div className="text-2xl">{skill.icon}</div>
              <span className="text-sm sm:text-base">{skill.name}</span>
            </button>
          ))}
        </div>

        {/* Skill Modal */}
        {selectedSkill && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="skill-title"
            aria-describedby="skill-desc"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedSkill(null)}
          >
            <div
              className="bg-[#0e0c24] text-white p-6 rounded-xl w-80 text-center shadow-lg relative border border-blue-500 
        transform scale-95 animate-fade-in-up transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
            >
              <button
                onClick={() => setSelectedSkill(null)}
                aria-label="Close skill details"
                className="absolute top-2 right-3 text-gray-300 hover:text-blue-400 text-xl transition-transform hover:scale-125"
              >
                ×
              </button>
              <div className="flex flex-col items-center gap-2">
                <div className="text-4xl">{selectedSkill.icon}</div>
                <h3 id="skill-title" className="text-2xl font-bold">
                  {selectedSkill.name}
                </h3>
                <p id="skill-desc" className="text-md text-blue-100">
                  {selectedSkill.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="bg-gradient-to-b from-blue-900 to-blue-950 text-white py-24 px-6 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 border-b-4 border-blue-500 inline-block pb-2">
          💼 My Projects
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projectList.map((project) => (
            <div
              key={project.name}
              className="cursor-pointer bg-[#0e0c24] border border-blue-400 rounded-2xl shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 overflow-hidden animate-zoom-in"
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

        {/* Project Modal */}
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-title"
            aria-describedby="project-desc"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-[#0e0c24] text-white p-8 rounded-2xl max-w-xl relative shadow-2xl border border-blue-500 text-left 
        transform scale-95 animate-fade-in-up"
              style={{
                maxHeight:
                  selectedProject.name === "Second-hand IT Equipment Website" ||
                  selectedProject.name === "SLRI FLOWER"
                    ? "auto"
                    : "90vh",
                overflowY:
                  selectedProject.name === "Second-hand IT Equipment Website" ||
                  selectedProject.name === "SLRI FLOWER"
                    ? "visible"
                    : "auto",
              }}
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
            >
              {/* ปุ่มปิด */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-4 right-4 text-white text-xl hover:text-blue-400 transition"
              >
                ✕
              </button>

              {/* เนื้อหา Modal */}
              <div className="flex flex-col items-center gap-6">
                {/* รูปโปรเจกต์ */}
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  width={450}
                  height={300}
                  className="rounded-lg border border-white object-contain"
                />

                {/* tag + date + figma */}
                <div className="flex justify-between items-center w-full flex-wrap gap-2">
                  <div className="flex gap-2 text-sm flex-wrap">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full">
                      {selectedProject.tag}
                    </span>
                    <span className="border border-white px-3 py-1 rounded-full">
                      {selectedProject.date}
                    </span>
                  </div>

                  {selectedProject.figmaUrl && (
                    <a
                      href={selectedProject.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-900 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full font-medium text-sm transition hover:scale-105"
                    >
                      <SiFigma className="text-lg" /> View
                    </a>
                  )}
                </div>

                {/* ชื่อและคำอธิบาย */}
                <h3
                  id="project-title"
                  className="text-2xl font-bold text-center"
                >
                  {selectedProject.name}
                </h3>

                <p id="project-desc" className="text-gray-300 text-center">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Certificates Section */}
      <section
        id="certificates"
        className="bg-white py-20 px-6 text-center text-blue-900 animate-fade-in-up relative"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-16 border-b-4 border-blue-500 inline-block pb-2">
          🏅 Certificates
        </h2>

        <div
          ref={certificateRef}
          className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
        >
          <div className="flex gap-8 w-max px-6 py-2">
            {/* Certificate 1 */}
            <div
              ref={cert1Ref}
              className="flex-shrink-0 w-[380px] md:w-[460px] h-[271px] md:h-[357px] rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white border-4 border-blue-400 overflow-hidden cursor-default"
            >
              <Image
                src="/framework.jpg"
                alt="Certificate 1"
                width={700}
                height={500}
                className="object-contain w-full h-full rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                draggable={false}
              />
            </div>

            {/* Certificate 2 */}
            <div
              ref={cert2Ref}
              className="flex-shrink-0 w-[380px] md:w-[460px] h-[271px] md:h-[357px] rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white border-4 border-blue-400 overflow-hidden cursor-default"
            >
              <Image
                src="/certificate.jpg"
                alt="Certificate 2"
                width={700}
                height={500}
                className="object-contain w-full h-full rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                draggable={false}
              />
            </div>

            {/* Certificate 3 */}
            <div
              ref={cert3Ref}
              className="flex-shrink-0 w-[380px] md:w-[460px] h-[271px] md:h-[357px] rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white border-4 border-blue-400 overflow-hidden cursor-default"
            >
              <Image
                src="/borntodev SQL .png"
                alt="Certificate 3"
                width={700}
                height={500}
                className="object-contain w-full h-full rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                draggable={false}
              />
            </div>

            {/* Certificate 4 */}
            <div
              ref={cert4Ref}
              className="flex-shrink-0 w-[380px] md:w-[460px] h-[271px] md:h-[357px] rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white border-4 border-blue-400 overflow-hidden cursor-default"
            >
              <Image
                src="/borntodev GitHub .png"
                alt="Certificate 4"
                width={700}
                height={500}
                className="object-contain w-full h-full rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                draggable={false}
              />
            </div>
            {/* Certificate 5 */}
            <div
              ref={cert5Ref}
              className="flex-shrink-0 w-[380px] md:w-[460px] h-[271px] md:h-[357px] rounded-2xl shadow-lg bg-gradient-to-br from-blue-50 to-white border-4 border-blue-400 overflow-hidden cursor-default"
            >
              <Image
                src="/certificate LLM.jpg"
                alt="Certificate 5"
                width={700}
                height={500}
                className="object-contain w-full h-full rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ด้านล่างสุดก่อน Footer */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Back to top"
      >
        ↑
      </a>

      {/* Footer */}
      <footer className="relative bg-blue-950 text-white pt-16 pb-8 mt-[-1px] overflow-hidden animate-fade-in-up animate-delay-500">
        {/* Wave Effect */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180 bg-white">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 900 200"
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
