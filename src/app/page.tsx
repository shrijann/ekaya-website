'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'popular' | 'recent'>('popular');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState('');

  const musicians = [
    { name: 'Shreejan Shyama', role: 'Direction & Sarangi', handle: '@shreejanshyamaa', link: 'https://instagram.com/shreejanshyamaa', img: '/ekaya-website/images/members/shreejanshyama.jpg' },
    { name: 'Priya Basnet', role: 'Lead Vocalist', handle: '@priyaa.basnett', link: 'https://instagram.com/priyaa.basnett', img: '/ekaya-website/images/members/priya.jpg' },
    { name: 'Shrijan Maharjan', role: 'Flutist', handle: '@shrijann_', link: 'https://instagram.com/shrijann_', img: '/ekaya-website/images/members/shrijan.jpg' },
    { name: 'Shreena Tyataa', role: 'Guitarist', handle: '@shreena.guitarcore', link: 'https://instagram.com/shreena.guitarcore', img: '/ekaya-website/images/members/shreena.jpg' },
    { name: 'Bishal Basi', role: 'Percussionist', handle: '@bishalbasii', link: 'https://instagram.com/bishalbasii', img: '/ekaya-website/images/members/bishalbasi.jpg' },
    { name: 'Sudeep Chawal', role: 'Effects & Taa', handle: '@sudeepchawall', link: 'https://instagram.com/sudeepchawall', img: '/ekaya-website/images/members/sudeep.jpg' },
    { name: 'Amulya Rajchal', role: 'Percussionist', handle: '@amulya_tuned', link: 'https://instagram.com/amulya_tuned', img: '/ekaya-website/images/members/amulya.jpg' },
  ];

  const management = [
    { name: 'Sujal Suwal', role: 'Band Manager', handle: '@sujal_suwal', link: 'https://instagram.com/sujal_suwal', img: '/ekaya-website/images/members/sujalsuwal.jpg' },
    { name: 'Sujan Sujakhu', role: 'Crew / Production Team', handle: '@sujan_sujakhu', link: 'https://instagram.com/sujan_sujakhu', img: '/ekaya-website/images/members/sujansujakhu.jpg' },
  ];

  const popularVideos = [
    { title: 'Asan Twa - Ekaya Hami | donob sessions', id: '2HTRkmBVE6w', desc: 'A fresh folk-fusion rendition of a classic Newa tune' },
    { title: 'Mayosa - Shreejan, Priya & Ekaya Hami', id: 'fC2TbByrlbA', desc: 'Official Music Video' },
  ];

  const recentVideos = [
    { title: 'Hissi - Ekaya Hami | Official Music Video', id: 'OBezCp_2cEY', desc: 'Latest Single Release' },
    { title: 'Mayosa - Official Lyrics Video', id: 'aiz_ivdBRrc', desc: 'Lyrics & Acoustic Visualizer' },
  ];

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBookingStatus('Thank you! Your booking inquiry has been drafted for Manager Sujal Suwal. Opening mail...');
    setTimeout(() => {
      window.location.href = `mailto:donoborie@gmail.com?subject=Ekaya Hami Performance Booking Inquiry (Attn: Sujal Suwal - Manager)`;
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-900 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-500/40 shadow-sm shadow-amber-500/20">
            <Image src="/ekaya-website/images/logo.png" alt="Ekaya" fill className="object-cover" />
          </div>
          <span className="font-bold text-amber-500 tracking-wider text-lg">EKAYA HAMI</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-300">
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#videos" className="hover:text-amber-500 transition-colors">Music & Videos</a>
          <a href="#members" className="hover:text-amber-500 transition-colors">Band & Crew</a>
          <a href="#booking" className="hover:text-amber-500 transition-colors">Bookings</a>
        </div>

        <div className="flex items-center space-x-4 text-neutral-400">
          <Link href="https://instagram.com/ekayahami" target="_blank" className="hover:text-amber-500 transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </Link>
          <Link href="https://www.youtube.com/@donoborie" target="_blank" className="hover:text-amber-500 transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden border-b border-neutral-900">
        <Image
          src="/ekaya-website/images/ekayaxdonob.jpg"
          alt="Ekaya Band Cover"
          fill
          priority
          className="object-cover opacity-30 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl">
          <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-b from-amber-500/60 to-amber-500/10 mb-6 shadow-2xl shadow-amber-500/10">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-500/30">
              <Image src="/ekaya-website/images/logo.png" alt="Ekaya Logo" fill className="object-cover" />
            </div>
          </div>

          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 px-4 py-1.5 bg-amber-500/10 rounded-full border border-amber-500/20 mb-4 animate-pulse">
            Signed Under donob orie
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-md">EKAYA HAMI</h1>
          <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            Nepali Folk-Fusion Ensemble from Bhaktapur, Nepal
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a href="#videos" className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-7 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-amber-500/20">
              ▶ Watch Videos
            </a>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="border border-neutral-700 hover:border-amber-500/60 hover:bg-neutral-900 text-neutral-200 px-7 py-3 rounded-full transition-all transform hover:scale-105"
            >
              📅 Book Live Performance
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-b border-neutral-900/60">
        <div className="bg-[#121212] border border-neutral-800/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">About The Ensemble</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-6">Reimagining Folk Heritage</h2>
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light mb-6">
              <strong>Ekaya</strong> (also known as <strong>Ekaya Hami</strong>) is a Nepali folk-fusion ensemble originating from <strong>Bhaktapur, Nepal</strong>, signed under <strong>donob orie</strong>.
            </p>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
              The group is known for reimagining traditional regional tunes and classical folk heritage with contemporary instrumentation—blending soulful Sarangi melodies, flute compositions, acoustic strings, and rich percussive rhythms into modern fusion arrangements.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-800">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Origin</p>
                <p className="text-sm font-semibold text-amber-500">Bhaktapur, Nepal</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Genre</p>
                <p className="text-sm font-semibold text-amber-500">Nepali Folk-Fusion</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Record Label</p>
                <p className="text-sm font-semibold text-amber-500">donob orie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Videos Section */}
      <section id="videos" className="py-20 px-6 max-w-6xl mx-auto border-b border-neutral-900/60">
        <div className="text-center mb-10">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Official YouTube Releases</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Featured Music & Videos</h2>
          
          {/* Tab Controls */}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={() => setActiveTab('popular')}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all ${
                activeTab === 'popular'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              🔥 Popular Releases
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all ${
                activeTab === 'recent'
                  ? 'bg-amber-500 text-black shadow-md shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              ✨ Recent Releases
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(activeTab === 'popular' ? popularVideos : recentVideos).map((video) => (
            <div key={video.id} className="bg-[#121212] border border-neutral-800 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500/30 transition-all group">
              <div className="relative aspect-video w-full bg-neutral-950">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-5 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-white group-hover:text-amber-500 transition-colors text-base sm:text-lg">{video.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{video.desc}</p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 ml-4 p-2.5 bg-neutral-900 hover:bg-amber-500 hover:text-black text-neutral-400 rounded-full transition-all"
                  title="Open in YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@donoborie"
            target="_blank"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
          >
            <span>Visit donob orie Official YouTube Channel</span>
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Band Members Section */}
      <section id="members" className="py-20 px-6 max-w-7xl mx-auto border-b border-neutral-900/60">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Ensemble & Performers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Band Members</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {musicians.map((member) => (
            <div
              key={member.name}
              className="group relative bg-[#121212] border border-neutral-800/80 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5"
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
              
              {/* Clickable Instagram Link */}
              <a
                href={member.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 text-xs text-neutral-400 hover:text-amber-500 font-medium mt-3 px-3 py-1 bg-neutral-900/80 rounded-full border border-neutral-800 hover:border-amber-500/40 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                <span>{member.handle}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Management & Sound Team */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Production & Operations</span>
            <h3 className="text-2xl font-bold text-white mt-1">Management & Crew</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {management.map((member) => (
              <div
                key={member.name}
                className="group relative bg-[#121212] border border-neutral-800/80 hover:border-amber-500/40 rounded-2xl p-6 w-64 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-neutral-800 group-hover:border-amber-500 transition-colors duration-300 mb-4">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>
                <h4 className="font-bold text-lg text-white group-hover:text-amber-500 transition-colors">{member.name}</h4>
                <p className="text-sm text-amber-500/90 font-medium mt-0.5">{member.role}</p>

                {/* Clickable Instagram Link */}
                <a
                  href={member.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-neutral-400 hover:text-amber-500 font-medium mt-3 px-3 py-1 bg-neutral-900/80 rounded-full border border-neutral-800 hover:border-amber-500/40 transition-all"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  <span>{member.handle}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Booking & Inquiries Section */}
      <section id="booking" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Live Performances & Inquiries</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">Book Ekaya Hami</h2>
          <p className="text-neutral-300 text-xs sm:text-sm max-w-lg mx-auto mb-2">
            Managed by <strong>Sujal Suwal (Band Manager)</strong>.
          </p>
          <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Available for cultural festivals, concert performances, corporate events, and private shows across Nepal & internationally.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-3.5 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20 text-sm"
            >
              📩 Submit Booking Request Form
            </button>
            
            <a
              href="https://instagram.com/sujal_suwal"
              target="_blank"
              rel="noreferrer"
              className="border border-neutral-700 hover:border-amber-500/60 hover:bg-neutral-900 text-neutral-200 font-semibold px-8 py-3.5 rounded-full transition-all transform hover:scale-105 text-sm flex items-center space-x-2"
            >
              <span>💬 DM Manager on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#141414] border border-neutral-800 w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-amber-500 mb-1">Performance Inquiry</h3>
            <p className="text-xs text-neutral-400 mb-6">
              Inquiries are received directly by <strong>Sujal Suwal (Manager)</strong>.
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs text-neutral-300 font-medium mb-1">Your Name / Organization</label>
                <input required type="text" placeholder="Full Name or Event Org" className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs text-neutral-300 font-medium mb-1">Email / Phone</label>
                <input required type="text" placeholder="Contact Details" className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-300 font-medium mb-1">Event Date</label>
                  <input required type="date" className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-neutral-300 font-medium mb-1">Event Location</label>
                  <input required type="text" placeholder="City / Venue" className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-neutral-300 font-medium mb-1">Event Type & Details</label>
                <textarea rows={3} placeholder="Festival, Concert, Wedding, Corporate, etc." className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"></textarea>
              </div>

              {bookingStatus && (
                <p className="text-xs text-amber-500 font-medium text-center">{bookingStatus}</p>
              )}

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition-all shadow-md shadow-amber-500/20"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-900 text-center text-xs text-neutral-500 space-y-2">
        <p className="text-sm text-neutral-300 font-medium">For Bookings & Press: Contact Manager Sujal Suwal (@sujal_suwal)</p>
        <p>© {new Date().getFullYear()} Ekaya Hami • Managed under donob orie. All rights reserved.</p>
      </footer>
    </div>
  );
}