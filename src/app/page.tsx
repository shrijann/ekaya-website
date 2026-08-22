'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Member {
  name: string;
  role: string;
  handle: string;
  link: string;
  img: string;
  bio: string;
  instruments?: string[];
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'popular' | 'recent'>('popular');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStatus, setBookingStatus] = useState('');
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const musicians: Member[] = [
    {
      name: 'Shreejan Shyama',
      role: 'Direction & Sarangi',
      handle: '@shreejanshyamaa',
      link: 'https://www.instagram.com/shreejanshyamaa/',
      img: '/ekaya-website/images/members/shreejanshyama.jpg',
      bio: 'Musical director and Sarangi craftsman. Shreejan blends traditional Nepali melodic structures with modern acoustic arrangements, leading the ensemble’s creative direction.',
      instruments: ['Sarangi', 'Direction', 'Arrangements'],
    },
    {
      name: 'Priya Basnet',
      role: 'Lead Vocalist',
      handle: '@priyaa.basnett',
      link: 'https://www.instagram.com/priyaa.basnett/',
      img: '/ekaya-website/images/members/priya.jpg',
      bio: 'The soulful voice of Ekaya Hami. Priya brings deep emotion and classical precision to folk compositions, weaving timeless vocal stories across modern soundscapes.',
      instruments: ['Lead Vocals'],
    },
    {
      name: 'Shrijan Maharjan',
      role: 'Flutist',
      handle: '@shrijann_',
      link: 'https://www.instagram.com/shrijann_/',
      img: '/ekaya-website/images/members/shrijan.jpg',
      bio: 'Master of classical and folk flute (Bansuri). Shrijan adds airy, transcendent atmospheric layers that define Ekaya Hami’s signature folk-fusion sound.',
      instruments: ['Bansuri (Flute)', 'Woodwinds'],
    },
    {
      name: 'Shreena Tyataa',
      role: 'Guitarist',
      handle: '@shreena.guitarcore',
      link: 'https://www.instagram.com/shreena.guitarcore/',
      img: '/ekaya-website/images/members/shreena.jpg',
      bio: 'Providing harmonic structure and acoustic dynamics, Shreena fuses western fingerstyle techniques with subtle Eastern modal progressions.',
      instruments: ['Acoustic Guitar', 'Rhythm Guitar'],
    },
    {
      name: 'Bishal Basi',
      role: 'Percussionist',
      handle: '@bishalbasii',
      link: 'https://www.instagram.com/bishalbasii/',
      img: '/ekaya-website/images/members/bishalbasi.jpg',
      bio: 'Anchoring the rhythmic energy of the ensemble, Bishal drives the beat with traditional percussion setups and intricate folk polyrhythms.',
      instruments: ['Percussion', 'Drums'],
    },
    {
      name: 'Sudeep Chawal',
      role: 'Effects & Taa',
      handle: '@sudeepchawall',
      link: 'https://www.instagram.com/sudeepchawall/',
      img: '/ekaya-website/images/members/sudeep.jpg',
      bio: 'Merging tradition with electronic ambiance, Sudeep performs traditional Taa while engineering sonic depth and real-time audio effects for live shows.',
      instruments: ['Taa', 'Live Sound Effects'],
    },
    {
      name: 'Amulya Rajchal',
      role: 'Percussionist',
      handle: '@amulya_tuned',
      link: 'https://www.instagram.com/amulya_tuned/',
      img: '/ekaya-website/images/members/amulya.jpg',
      bio: 'Bringing high-octane percussive dynamics and syncopated grooves, Amulya complements the rhythm section with intricate regional drumming styles.',
      instruments: ['Percussion', 'Tuned Rhythm'],
    },
  ];

  const management: Member[] = [
    {
      name: 'Sujal Suwal',
      role: 'Band Manager',
      handle: '@sujalsuwall',
      link: 'https://www.instagram.com/sujalsuwall/',
      img: '/ekaya-website/images/members/sujalsuwal.jpg',
      bio: 'Managing band logistics, tour bookings, and label communications under donob orie. Sujal coordinates all live performances and strategic operations.',
      instruments: ['Management', 'Operations'],
    },
    {
      name: 'Sujan Sujakhu',
      role: 'Crew / Production Team',
      handle: '@sujansujakhuu',
      link: 'https://www.instagram.com/sujansujakhuu/',
      img: '/ekaya-website/images/members/sujansujakhu.jpg',
      bio: 'Overseeing stage setup, technical execution, and audio engineering ensuring seamless live performance quality for every Ekaya show.',
      instruments: ['Stage Tech', 'Production'],
    },
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
    setBookingStatus('Inquiry compiled for Manager Sujal Suwal. Opening mail application...');
    setTimeout(() => {
      window.location.href = `mailto:donoborie@gmail.com?subject=Ekaya Hami Performance Booking Inquiry (Attn: Sujal Suwal - Manager)`;
    }, 1200);
  };

  return (
    <div id="top" className="relative min-h-screen bg-[#070708] text-neutral-100 font-sans selection:bg-amber-500 selection:text-black scroll-smooth overflow-x-hidden">
      
      {/* iOS Ambient Background Animation */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="fixed bottom-1/3 -right-32 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-[#070708]/70 backdrop-blur-xl border-b border-white/10 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto shadow-2xl">
        <a href="#top" className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-500/40 shadow-sm shadow-amber-500/20 group-hover:border-amber-500 transition-colors">
            <Image src="/ekaya-website/images/logo.png" alt="Ekaya Logo" fill className="object-cover" />
          </div>
          <span className="font-bold text-amber-500 tracking-wider text-lg group-hover:text-amber-400 transition-colors">EKAYA HAMI</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-300">
          <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#videos" className="hover:text-amber-500 transition-colors">Music & Videos</a>
          <a href="#members" className="hover:text-amber-500 transition-colors">Band & Crew</a>
          <a href="#booking" className="hover:text-amber-500 transition-colors">Bookings</a>
        </div>

        <div className="flex items-center space-x-4 text-neutral-400">
          <Link href="https://www.instagram.com/ekayahami/" target="_blank" className="hover:text-amber-500 transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </Link>
          <Link href="https://www.youtube.com/@donoborie" target="_blank" className="hover:text-amber-500 transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </Link>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 border-b border-white/5 overflow-hidden">
        <Image src="/ekaya-website/images/ekayaxdonob.jpg" alt="Ekaya Band Cover" fill priority className="object-cover opacity-25 scale-105 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/60 to-[#070708]/30" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl">
          <a href="#top" className="relative group cursor-pointer">
            <div className="relative w-36 h-36 rounded-full p-1 bg-gradient-to-b from-amber-500/50 to-white/10 backdrop-blur-2xl mb-6 shadow-2xl shadow-amber-500/10 group-hover:scale-105 transition-all duration-500">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20">
                <Image src="/ekaya-website/images/logo.png" alt="Ekaya Logo" fill className="object-cover" />
              </div>
            </div>
          </a>

          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-400 px-4 py-1.5 bg-amber-500/10 backdrop-blur-xl rounded-full border border-amber-500/20 mb-4 shadow-inner">
            Signed Under donob orie
          </span>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">EKAYA HAMI</h1>
          <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed">
            Nepali Folk-Fusion Ensemble from Bhaktapur, Nepal
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a href="#videos" className="relative inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-[0_8px_30px_rgb(245,158,11,0.3)] hover:shadow-[0_12px_40px_rgb(245,158,11,0.5)] active:scale-95">
              <span>Watch Videos</span>
            </a>
            
            <button onClick={() => setIsBookingOpen(true)} className="relative inline-flex items-center space-x-2 bg-white/[0.07] hover:bg-white/[0.12] backdrop-blur-xl border border-white/15 hover:border-amber-500/50 text-neutral-100 hover:text-amber-400 font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] active:scale-95">
              <span>Book Live Performance</span>
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-b border-white/5">
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">About The Ensemble</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-6">Reimagining Folk Heritage</h2>
            
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light mb-5">
              <strong>Ekaya</strong> (also known as <strong>Ekaya Hami</strong>) is a premier Nepali folk-fusion ensemble originating from the historic cultural heartland of <strong>Bhaktapur, Nepal</strong>. Signed under the independent record label <strong>donob orie</strong>, the group bridges timeless traditional Nepalese roots with modern musical soundscapes.
            </p>
            
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
              By blending the haunting resonance of the <strong>Sarangi</strong>, airy compositions of the traditional <strong>Flute (Bansuri)</strong>, rhythmic <strong>acoustic guitars</strong>, and vibrant percussive beats like the <strong>Taa</strong> and traditional drums, Ekaya breathes fresh life into classical regional compositions.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Origin</p>
                <p className="text-sm font-semibold text-amber-500 mt-0.5">Bhaktapur, Nepal</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Genre</p>
                <p className="text-sm font-semibold text-amber-500 mt-0.5">Nepali Folk-Fusion</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Record Label</p>
                <p className="text-sm font-semibold text-amber-500 mt-0.5">donob orie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Videos */}
      <section id="videos" className="py-20 px-6 max-w-6xl mx-auto border-b border-white/5">
        <div className="text-center mb-10">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Official YouTube Releases</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Featured Music & Videos</h2>
          
          <div className="inline-flex p-1 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl mt-6 shadow-inner">
            <button onClick={() => setActiveTab('popular')} className={`px-6 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 ${activeTab === 'popular' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-neutral-400 hover:text-white'}`}>
              Popular Releases
            </button>
            <button onClick={() => setActiveTab('recent')} className={`px-6 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 ${activeTab === 'recent' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-neutral-400 hover:text-white'}`}>
              Recent Releases
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(activeTab === 'popular' ? popularVideos : recentVideos).map((video) => (
            <div key={video.id} className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-amber-500/40 transition-all duration-500 group">
              <div className="relative aspect-video w-full bg-neutral-950">
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.id}`} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-white group-hover:text-amber-500 transition-colors text-base sm:text-lg">{video.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{video.desc}</p>
                </div>
                <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="shrink-0 ml-4 p-3 bg-white/[0.05] hover:bg-amber-500 hover:text-black text-neutral-300 rounded-2xl border border-white/10 transition-all" title="Open in YouTube">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Band Members & Descriptions */}
      <section id="members" className="py-20 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Ensemble & Performers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Band Members</h2>
          <p className="text-xs text-neutral-400 mt-2">Click any profile card to read their full bio & role</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {musicians.map((member) => (
            <div
              key={member.name}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer relative bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-2xl border border-white/10 hover:border-amber-500/50 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="relative w-32 h-32 rounded-full overflow-hidden border border-white/20 group-hover:border-amber-500 transition-colors duration-500 mb-4 shadow-xl">
                <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">{member.name}</h3>
              <p className="text-xs text-amber-500 font-medium mt-0.5 uppercase tracking-wider">{member.role}</p>

              <span className="mt-4 px-4 py-1.5 bg-white/[0.05] group-hover:bg-amber-500 group-hover:text-black rounded-full border border-white/10 text-[11px] font-semibold text-neutral-300 transition-all">
                View Bio →
              </span>
            </div>
          ))}
        </div>

        {/* Management & Crew */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Production & Operations</span>
            <h3 className="text-2xl font-bold text-white mt-1">Management & Crew</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {management.map((member) => (
              <div
                key={member.name}
                onClick={() => setSelectedMember(member)}
                className="group cursor-pointer relative bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-2xl border border-white/10 hover:border-amber-500/50 rounded-3xl p-6 w-64 flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
              >
                <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/20 group-hover:border-amber-500 transition-colors duration-500 mb-4 shadow-xl">
                  <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                </div>
                <h4 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">{member.name}</h4>
                <p className="text-xs text-amber-500 font-medium mt-0.5 uppercase tracking-wider">{member.role}</p>

                <span className="mt-4 px-4 py-1.5 bg-white/[0.05] group-hover:bg-amber-500 group-hover:text-black rounded-full border border-white/10 text-[11px] font-semibold text-neutral-300 transition-all">
                  View Profile →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Profile Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div className="bg-[#121215]/90 border border-white/20 max-w-md w-full rounded-3xl p-6 sm:p-8 relative shadow-2xl text-center">
            <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-5 text-neutral-400 hover:text-white text-xl font-bold">
              ✕
            </button>

            <div className="relative w-36 h-36 rounded-full mx-auto overflow-hidden border-2 border-amber-500/80 shadow-2xl mb-4">
              <Image src={selectedMember.img} alt={selectedMember.name} fill className="object-cover" />
            </div>

            <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
            <p className="text-xs text-amber-500 font-bold uppercase tracking-widest mt-1 mb-4">{selectedMember.role}</p>

            <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6 text-left bg-white/[0.03] p-4 rounded-2xl border border-white/10">
              {selectedMember.bio}
            </p>

            {selectedMember.instruments && (
              <div className="mb-6 text-left">
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold block mb-2">Focus & Skillset</span>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.instruments.map((inst) => (
                    <span key={inst} className="text-xs px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full">
                      {inst}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a href={selectedMember.link} target="_blank" rel="noreferrer" className="inline-flex items-center space-x-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-6 py-2.5 rounded-2xl transition-all text-xs">
              <span>Follow on Instagram</span>
              <span>→</span>
            </a>
          </div>
        </div>
      )}

      {/* Booking Section */}
      <section id="booking" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Live Performances & Inquiries</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">Book Ekaya Hami</h2>
          <p className="text-neutral-300 text-xs sm:text-sm max-w-lg mx-auto mb-2">
            Managed by <strong>Sujal Suwal (Band Manager)</strong>.
          </p>
          <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Available for cultural festivals, concert performances, corporate events, and private shows across Nepal & internationally.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <button onClick={() => setIsBookingOpen(true)} className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl shadow-amber-500/20 text-sm">
              Submit Booking Request Form
            </button>
            
            <a href="https://www.instagram.com/sujalsuwall/" target="_blank" rel="noreferrer" className="bg-white/[0.05] hover:bg-white/[0.1] backdrop-blur-xl border border-white/10 hover:border-amber-500/50 text-neutral-200 font-semibold px-8 py-3.5 rounded-2xl transition-all duration-300 transform hover:scale-105 text-sm flex items-center space-x-2">
              <span>Contact Manager on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Glassmorphic Booking Form Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
          <div className="bg-[#101012]/80 backdrop-blur-2xl border border-white/15 w-full max-w-lg rounded-3xl p-6 sm:p-8 relative shadow-2xl">
            <button onClick={() => setIsBookingOpen(false)} className="absolute top-5 right-5 text-neutral-400 hover:text-white text-lg font-bold">
              ✕
            </button>
            <h3 className="text-2xl font-bold text-amber-500 mb-1">Performance Inquiry</h3>
            <p className="text-xs text-neutral-400 mb-6">
              Inquiries are received directly by <strong>Sujal Suwal (Manager)</strong>.
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs text-neutral-300 font-medium mb-1">Your Name / Organization</label>
                <input required type="text" placeholder="Full Name or Event Org" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs text-neutral-300 font-medium mb-1">Email / Phone</label>
                <input required type="text" placeholder="Contact Details" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-300 font-medium mb-1">Event Date</label>
                  <input required type="date" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs text-neutral-300 font-medium mb-1">Event Location</label>
                  <input required type="text" placeholder="City / Venue" className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-neutral-300 font-medium mb-1">Event Type & Details</label>
                <textarea rows={3} placeholder="Festival, Concert, Wedding, Corporate, etc." className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"></textarea>
              </div>

              {bookingStatus && (
                <p className="text-xs text-amber-500 font-medium text-center">{bookingStatus}</p>
              )}

              <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition-all shadow-md shadow-amber-500/20">
                Send Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-xs text-neutral-500 space-y-2">
        <p className="text-sm text-neutral-300 font-medium">For Bookings & Press: Contact Manager Sujal Suwal (@sujalsuwall)</p>
        <p>© {new Date().getFullYear()} Ekaya Hami • Managed under donob orie. All rights reserved.</p>
      </footer>
    </div>
  );
}