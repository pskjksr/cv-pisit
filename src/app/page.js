// app/page.js หรือ pages/index.js
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';

export default function Home() {
  return (
    <main className="min-h-screen bg-brandYellow text-black flex flex-col items-center justify-between py-10 px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold">WORAPON<span className="text-white">K</span></h1>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
        </div>
        <a href="#" className="bg-black text-white px-4 py-2 rounded text-sm">Contact me</a>
      </nav>

      {/* Hero Section */}
      <div className="text-center mt-20 mb-10">
        <h2 className="text-6xl md:text-7xl font-black leading-tight">
          <span className="block text-black">THIS</span>
          <span className="block text-white">IS</span>
          <span className="block text-black">WK'S</span>
          <span className="block text-white">STORY</span>
        </h2>
        <p className="mt-10 max-w-2xl mx-auto text-lg font-medium">
          Welcome to my portfolio! Here, you'll find a showcase of my UX/UI design and frontend development expertise,
          all focused on creating exceptional user experiences. Feel free to explore my work!
        </p>
        <div className="mt-6">
          <a href="#" className="bg-black text-white px-6 py-2 rounded">About me</a>
        </div>
        <div className="flex justify-center gap-6 mt-6 text-xl">
          <a href="#"><FaGithub /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><SiMedium /></a>
        </div>
      </div>
    </main>
  );
}
