'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const members = [
    { name: 'Shreejan Shyama', role: 'Direction & Sarangi', handle: '@shreejanshyamaa', img: '/ekaya-website/images/members/shreejanshyama.jpg' },
    { name: 'Priya Basnet', role: 'Vocals', handle: '@priyaa.basnett', img: '/ekaya-website/images/members/priya.jpg' },
    { name: 'Shrijan Maharjan', role: 'Flutist', handle: '@shrijann_', img: '/ekaya-website/images/members/shrijan.jpg' },
    { name: 'Shreena Tyataa', role: 'Guitarist', handle: '@shreena.guitarcore', img: '/ekaya-website/images/members/shreena.jpg' },
    { name: 'Bishal Basi', role: 'Percussionist', handle: '@bishalbasii', img: '/ekaya-website/images/members/bishalbasi.jpg' },
    { name: 'Sudeep Chawal', role: 'Effects & Taa', handle: '@sudeepchawall', img: '/ekaya-website/images/members/sudeep.jpg' },
    { name: 'Amulya Rajchal', role: 'Percussionist', handle: '@amulya_tuned', img: '/ekaya-website/images/members/amulya.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-neutral-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0d0d0d]/80 backdrop-blur-md border-b border-neutral-900 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-amber-500/30">
            <Image src="/ekaya-website/images/logo.png" alt="Ekaya" fill className="object-cover" />
          </div>
          <span className="font-bold text-amber-500 tracking-wider text-lg">EKAYA HAMI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-300">
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#videos" className="hover:text-amber-500 transition-colors">Videos & Music</a>
          <a href="#ensemble" className="hover:text-amber-500 transition-colors">Ensemble</a>
          <a href="#booking" className="hover:text-amber-500 transition-colors">Booking</a>
        </div>

        <div className="flex items-center space-x-4 text-neutral-400">
          <Link href="https://instagram.com/ekayahami" target="_blank" className="hover:text-amber-500 transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </Link>
          <Link href="https://youtube.com" target="_blank" className="hover:text-amber-500 transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="about" className="relative py-24 px-6 text-center flex flex-col items-center justify-center border-b border-neutral-900/50">
        <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-b from-amber-500/40 to-transparent mb-6">
          <div className="relative w-full h-full rounded-full overflow-hidden border border-neutral-800">
            <Image src="/ekaya-website/images/logo.png" alt="Ekaya Logo" fill className="object-cover" priority />
          </div>
        </div>
        <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20 mb-3">
          OFFICIAL BAND PORTAL
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">EKAYA HAMI</h1>
        <p className="text-lg md:text-xl text-neutral-400 font-light max-w-xl">
          Nepali Folk Fusion Ensemble • Bhaktapur, Nepal
        </p>

        <div className="mt-8 flex items-center space-x-4">
          <a href="#videos" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20">
            ▶ Watch Videos
          </a>
          <a href="#booking" className="border border-neutral-700 hover:border-amber-500/50 hover:bg-neutral-900 text-neutral-200 px-6 py-3 rounded-full transition-all">
            Book Ekaya
          </a>
        </div>
      </header>

      {/* Musicians & Crew Section */}
      <section id="ensemble" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-500 tracking-tight">Musicians & Crew</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="group relative bg-[#121212] border border-neutral-800/80 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-neutral-800 group-hover:border-amber-500 transition-colors duration-300 mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-amber-500 transition-colors">{member.name}</h3>
              <p className="text-sm text-amber-500/90 font-medium mt-0.5">{member.role}</p>
              <p className="text-xs text-neutral-500 mt-2">{member.handle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="booking" className="py-8 border-t border-neutral-900 text-center text-xs text-neutral-600">
        <p>© {new Date().getFullYear()} Ekaya Hami. All rights reserved.</p>
      </footer>
    </div>
  );
}