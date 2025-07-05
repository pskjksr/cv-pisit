// app/page.js
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-300 text-black px-6 py-10 flex flex-col items-center">
      <nav className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold">PISIT KHUNCHOMKLAOSIRI<span className="text-white">K</span></h1>
        <div className="hidden md:flex gap-6 text-sm"><a href="#">About</a><a href="#">Skills</a><a href="#">Projects</a></div>
        <a href="#" className="bg-black text-white px-4 py-2 rounded text-sm">Contact me</a>
      </nav>

      <div className="text-center mt-20">
        <h2 className="text-6xl md:text-7xl font-black leading-tight">
          <span className="block">THIS</span>
          <span className="block text-white">IS</span>
          <span className="block">WK'S</span>
          <span className="block text-white">STORY</span>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-lg font-medium">
          Welcome to my portfolio! Explore my UX/UI & frontend development work.
        </p>
        <a href="#" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded">About me</a>
        <div className="flex justify-center gap-6 mt-6 text-xl">
          <FaGithub /><FaInstagram /><FaLinkedin /><SiMedium />
        </div>
      </div>
    </main>
  )
}
