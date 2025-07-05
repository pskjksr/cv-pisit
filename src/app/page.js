import { Span } from "next/dist/trace";

export default function Home() {
  return (
    <main className="min-h-screen bg-amber-400 text-black flex flex-col items-center justify-between py-10 px-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center">
        <h1 className="text-xl font-bold">PISIH KHUNCHOMKLAOSIRI<Span className="text-white">K</Span></h1>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
        </div>
        <a href="#" className="bg-black text-white px-4 py-2 rounded text-sm">Contact me</a>
      </nav>
    </main>
  )
}