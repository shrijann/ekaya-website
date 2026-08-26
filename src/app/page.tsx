'use client';

import { useState, useEffect, useMemo, useCallback, FormEvent } from 'react';
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

interface Video {
  uniqueKey: string;
  title: string;
  id: string;
  desc: string;
  url: string;
}

const NEPAL_LOCATIONS = [
  {
    province: 'Koshi Province',
    locations: [
      'Biratnagar (City)', 'Dharan (City)', 'Itahari (City)', 'Bhojpur', 'Dhankuta', 
      'Ilam', 'Jhapa', 'Khotang', 'Morang', 'Okhaldhunga', 'Panchthar', 
      'Sankhuwasabha', 'Solukhumbu', 'Sunsari', 'Taplejung', 'Udayapur'
    ],
  },
  {
    province: 'Madhesh Province',
    locations: [
      'Janakpur (City)', 'Birgunj (City)', 'Bara', 'Dhanusha', 'Mahottari', 
      'Parsa', 'Rautahat', 'Saptari', 'Sarlahi', 'Siraha'
    ],
  },
  {
    province: 'Bagmati Province',
    locations: [
      'Kathmandu (Capital City)', 'Bhaktapur (City)', 'Lalitpur / Patan (City)', 'Hetauda (City)',
      'Dhading', 'Dolakha', 'Kavrepalanchok', 'Makwanpur', 'Nuwakot', 
      'Ramechhap', 'Rasuwa', 'Sindhuli', 'Sindhupalchok'
    ],
  },
  {
    province: 'Gandaki Province',
    locations: [
      'Pokhara (City)', 'Baglung', 'Gorkha', 'Kaski', 'Lamjung', 
      'Manang', 'Mustang', 'Myagdi', 'Nawalpur (Nawalparasi East)', 'Parbat', 
      'Syangja', 'Tanahu'
    ],
  },
  {
    province: 'Lumbini Province',
    locations: [
      'Butwal (City)', 'Bhairahawa / Siddharthanagar (City)', 'Nepalgunj (City)',
      'Arghakhanchi', 'Banke', 'Bardiya', 'Dang', 'Gulmi', 'Kapilvastu', 
      'Palpa', 'Pyuthan', 'Rolpa', 'Rukum East', 'Rupandehi', 'Parasi (Nawalparasi West)'
    ],
  },
  {
    province: 'Karnali Province',
    locations: [
      'Surkhet / Birendranagar (City)', 'Dailekh', 'Dolpa', 'Humla', 'Jajarkot', 
      'Jumla', 'Kalikot', 'Mugu', 'Rukum West', 'Salyan'
    ],
  },
  {
    province: 'Sudurpashchim Province',
    locations: [
      'Dhangadhi (City)', 'Mahendranagar / Bhimdatta (City)', 'Achham', 'Baitadi', 
      'Bajhang', 'Bajura', 'Dadeldhura', 'Darchula', 'Doti', 'Kailali', 'Kanchanpur'
    ],
  },
];

const MUSICIANS: Member[] = [
  {
    name: 'Shreejan Shyama',
    role: 'Director & Sarangi',
    handle: '@shreejanshyamaa',
    link: 'https://www.instagram.com/shreejanshyamaa/',
    img: '/ekaya-website/images/members/shreejanshyama.jpg',
    bio: 'Founder, composer, and music video director. Shreejan blends traditional Nepali melodic structures with modern acoustic arrangements, leading the ensemble’s creative direction.',
    instruments: ['Sarangi', 'Director', 'Arrangements'],
  },
  {
    name: 'Priya Basnet',
    role: 'Lead Vocalist',
    handle: '@priyaa.basnett',
    link: 'https://www.instagram.com/priyaa.basnett/',
    img: '/ekaya-website/images/members/priya.jpg',
    bio: 'The soulful voice of Ekaya Hami who suggested the name "Ekaya" (meaning Unity). Priya brings deep emotion and classical precision to folk compositions.',
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
    role: 'Percussionist & Madal',
    handle: '@bishalbasii',
    link: 'https://www.instagram.com/bishalbasii/',
    img: '/ekaya-website/images/members/bishalbasi.jpg',
    bio: 'Anchoring the rhythmic energy of the ensemble, Bishal drives the beat with traditional Madal and Dhime patterns and intricate folk polyrhythms.',
    instruments: ['Madal', 'Dhime', 'Percussion'],
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

const MANAGEMENT: Member[] = [
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

const RECENT_VIDEOS: Video[] = [
  {
    uniqueKey: 'rec-1',
    title: 'Jhan Jaka Maya - Ekaya Hami | Live at Asan',
    id: 'OzyBRsBbeNE',
    desc: 'Live performance in Asan, Kathmandu.',
    url: 'https://www.youtube.com/watch?v=OzyBRsBbeNE',
  },
  {
    uniqueKey: 'rec-2',
    title: 'Ratna - Juju Kaji Ranjit with Ekaya Hami | Live at Asan',
    id: '7dtLDBqayCY',
    desc: 'Live collaboration at Kathmandu Film Festival.',
    url: 'https://www.youtube.com/watch?v=7dtLDBqayCY',
  },
  {
    uniqueKey: 'rec-3',
    title: 'Hissi - Ekaya Hami | Official Music Video',
    id: 'OBezCp_2cEY',
    desc: 'Official Music Video release.',
    url: 'https://www.youtube.com/watch?v=OBezCp_2cEY',
  },
  {
    uniqueKey: 'rec-4',
    title: 'Ekaya Hami - Ratna | Cover | donob sessions',
    id: 'KHpnE8_hHts',
    desc: 'Folk-fusion studio cover.',
    url: 'https://www.youtube.com/watch?v=KHpnE8_hHts',
  },
  {
    uniqueKey: 'rec-5',
    title: 'Mayosa - Shreejan, Priya & Ekaya Hami | Lyrics Video',
    id: 'aiz_ivdBRrc',
    desc: 'Official Lyrics Video release.',
    url: 'https://www.youtube.com/watch?v=aiz_ivdBRrc',
  },
];

const POPULAR_VIDEOS: Video[] = [
  {
    uniqueKey: 'pop-1',
    title: 'Ekaya Hami - Asan Twa | donob sessions',
    id: '2HTRkmBVE6w',
    desc: 'Classic folk-fusion rendition.',
    url: 'https://www.youtube.com/watch?v=2HTRkmBVE6w',
  },
  {
    uniqueKey: 'pop-2',
    title: 'Ekaya Hami - Ratna | Cover | donob sessions',
    id: 'KHpnE8_hHts',
    desc: 'Popular studio session performance.',
    url: 'https://www.youtube.com/watch?v=KHpnE8_hHts',
  },
  {
    uniqueKey: 'pop-3',
    title: 'Ekaya Hami - Ghatu | donob sessions',
    id: 'XRpF6H2ZNDQ',
    desc: 'Tribute cover of Late King Ranajit Malla’s composition.',
    url: 'https://www.youtube.com/watch?v=XRpF6H2ZNDQ',
  },
  {
    uniqueKey: 'pop-4',
    title: 'Mayosa - Shreejan, Priya & Ekaya Hami | Official Music Video',
    id: 'fC2TbByrlbA',
    desc: 'Official full production music video.',
    url: 'https://www.youtube.com/watch?v=fC2TbByrlbA',
  },
  {
    uniqueKey: 'pop-5',
    title: 'Hissi - Ekaya Hami | Official Music Video',
    id: 'OBezCp_2cEY',
    desc: 'Official Music Video release.',
    url: 'https://www.youtube.com/watch?v=OBezCp_2cEY',
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<'recent' | 'popular'>('recent');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isManagerContactOpen, setIsManagerContactOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
  const [playingVideoKey, setPlayingVideoKey] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    eventDate: '',
    location: '',
    details: '',
  });
  const [formError, setFormError] = useState('');

  const displayedVideos = useMemo(() => {
    return activeTab === 'recent' ? RECENT_VIDEOS : POPULAR_VIDEOS;
  }, [activeTab]);

  const handleTabChange = useCallback((tab: 'recent' | 'popular') => {
    setPlayingVideoKey(null);
    setActiveTab(tab);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
        setZoomedImage(null);
        setIsBookingOpen(false);
        setIsManagerContactOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getTomorrowDate = useCallback(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  }, []);

  // Direct composition link to Web Gmail bypassing OS handlers and Workspace redirects
  const dispatchToGmailWeb = useCallback((email: string, subject?: string, body?: string) => {
    let targetUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    if (subject) targetUrl += `&su=${encodeURIComponent(subject)}`;
    if (body) targetUrl += `&body=${encodeURIComponent(body)}`;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  }, []);

  const handleBookingSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');

    const cleanContact = formData.contact.trim();

    if (!formData.name.trim() || !cleanContact || !formData.eventDate || !formData.location) {
      setFormError('Please fill out all required fields.');
      return;
    }

    const isPhone = /^\d{10}$/.test(cleanContact);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanContact);

    if (!isPhone && !isEmail) {
      setFormError('Please enter a valid 10-digit mobile number or a valid email address.');
      return;
    }

    const targetEmail = 'donobmail@gmail.com';
    const rawSubject = `Booking Inquiry: ${formData.name}`;
    const rawBody = 
      `Name/Org: ${formData.name}\n` +
      `Contact: ${cleanContact}\n` +
      `Date: ${formData.eventDate}\n` +
      `Location: ${formData.location}\n\n` +
      `Details:\n${formData.details || 'None'}`;

    dispatchToGmailWeb(targetEmail, rawSubject, rawBody);

    setIsBookingOpen(false);
    setFormData({ name: '', contact: '', eventDate: '', location: '', details: '' });
  };

  const handleContactManagerGmail = () => {
    const targetEmail = 'donob.sujal@gmail.com';
    dispatchToGmailWeb(targetEmail);
    setIsManagerContactOpen(false);
  };

  return (
    <div id="top" className="relative min-h-screen bg-[#070708] text-neutral-100 font-sans selection:bg-amber-500 selection:text-black scroll-smooth overflow-x-hidden">

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 bg-[#070708]/90 backdrop-blur-md border-b border-white/10 px-6 py-4 max-w-7xl mx-auto flex items-center justify-between">
        <a href="#top" className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-amber-500/40 group-hover:border-amber-500 transition-colors">
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
          <Link href="https://www.instagram.com/ekayahami/" target="_blank" aria-label="Instagram" className="hover:text-amber-500 transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </Link>
          <Link href="https://www.youtube.com/@donoborie" target="_blank" aria-label="YouTube" className="hover:text-amber-500 transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-amber-500 focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden sticky top-[73px] z-30 bg-[#070708] border-b border-white/10 px-6 py-4 flex flex-col space-y-4 text-center font-medium">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 py-1 transition-colors">About</a>
          <a href="#videos" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 py-1 transition-colors">Music & Videos</a>
          <a href="#members" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 py-1 transition-colors">Band & Crew</a>
          <a href="#booking" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-500 py-1 transition-colors">Bookings</a>
        </div>
      )}

      {/* Hero Header */}
      <header className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 border-b border-white/5 overflow-hidden">
        <Image src="/ekaya-website/images/ekayaxdonob.jpg" alt="Ekaya Band Cover" fill priority className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/60 to-[#070708]/30" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl">
          <a href="#top" className="relative group cursor-pointer">
            <div className="relative w-36 h-36 rounded-full p-1 bg-neutral-800 mb-6 border border-white/20 group-hover:border-amber-500/80 group-hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image src="/ekaya-website/images/logo.png" alt="Ekaya Logo" fill className="object-cover" />
              </div>
            </div>
          </a>

          <div className="relative inline-flex items-center justify-center px-5 py-1.5 rounded-full bg-[#121215] border border-amber-500/40 overflow-hidden shadow-[0_0_15px_rgba(245,158,11,0.2)] mb-4 group cursor-pointer">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent animate-shimmer-wave" />
            <span className="relative text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">
              Signed Under donob orie
            </span>
          </div>

          <div className="relative group cursor-pointer my-2">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <h1 className="relative text-5xl sm:text-7xl font-extrabold tracking-tight text-white group-hover:text-amber-400 group-hover:scale-105 group-hover:drop-shadow-[0_0_25px_rgba(245,158,11,0.6)] transition-all duration-300">
              EKAYA HAMI
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-neutral-300 font-light max-w-2xl leading-relaxed mt-2">
            Nepali Folk-Fusion Ensemble from Bhaktapur, Nepal
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a href="#videos" className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3.5 rounded-2xl transition-all shadow-lg shadow-amber-500/20 hover:scale-105">
              <span>Watch Videos</span>
            </a>
            
            <button type="button" onClick={() => setIsBookingOpen(true)} className="bg-white/10 hover:bg-white/20 border border-white/15 text-neutral-100 font-semibold px-8 py-3.5 rounded-2xl transition-all hover:scale-105">
              <span>Book Live Performance</span>
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 px-6 max-w-5xl mx-auto border-b border-white/5">
        <div className="bg-[#121215] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">About The Ensemble</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#fff] mt-2 mb-6">Reimagining Folk Heritage</h2>
            
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light mb-5">
              The Nepali folk-fusion ensemble <strong>Ekaya Hami</strong> (known as <strong>Ekaya</strong>) was formed in 2024. It was envisioned and created by composer and music video director <strong>Shreejan Shyama</strong> to revive ancient sounds.
            </p>
            
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed mb-6">
              The word <em>"Ekaya"</em> signifies <strong>unity</strong>, a name suggested by vocalist <strong>Priya Basnet</strong>. Ekaya’s signature musical style seamlessly blends traditional Newa and Nepali instruments—such as the <strong>Sarangi</strong>, <strong>Madal</strong>, <strong>Dhime</strong>, and traditional <strong>Flutes (Bansuri)</strong>—with contemporary acoustic textures. Signed under independent label <strong>donob orie</strong>, Ekaya continues to revitalize heritage tunes for audiences worldwide.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Formed</p>
                <p className="text-sm font-semibold text-amber-500 mt-0.5">2024</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Founder</p>
                <p className="text-sm font-semibold text-amber-500 mt-0.5">Shreejan Shyama</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Origin</p>
                <p className="text-sm font-semibold text-amber-500 mt-0.5">Bhaktapur, Nepal</p>
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">Record Label</p>
                <p className="text-sm font-semibold text-amber-500 mt-0.5">donob orie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-center mb-10">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Official Releases</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Featured Music & Videos</h2>
          
          <div className="inline-flex p-1 bg-neutral-900 border border-white/10 rounded-2xl mt-6">
            <button 
              type="button"
              onClick={() => handleTabChange('recent')} 
              className={`px-6 py-2.5 text-xs font-semibold rounded-xl transition-all ${activeTab === 'recent' ? 'bg-amber-500 text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
            >
              Recent Releases
            </button>
            <button 
              type="button"
              onClick={() => handleTabChange('popular')} 
              className={`px-6 py-2.5 text-xs font-semibold rounded-xl transition-all ${activeTab === 'popular' ? 'bg-amber-500 text-black font-bold' : 'text-neutral-400 hover:text-white'}`}
            >
              Popular Releases
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedVideos.map((video) => {
            const isPlaying = playingVideoKey === video.uniqueKey;

            return (
              <div 
                key={video.uniqueKey} 
                className="bg-[#121215] border border-white/10 hover:border-amber-500/50 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
              >
                <div 
                  onClick={() => !isPlaying && setPlayingVideoKey(video.uniqueKey)}
                  className="relative aspect-video w-full bg-neutral-950 cursor-pointer group"
                >
                  {isPlaying ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                      title={video.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img 
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                        alt={video.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-6 h-6 fill-black ml-1" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base line-clamp-2">{video.title}</h3>
                    <p className="text-xs text-neutral-400 mt-1">{video.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-end">
                    <a 
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 text-xs text-neutral-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10"
                    >
                      <span>Watch on YouTube</span>
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z"/>
                        <path d="M5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ensemble & Performers Section */}
      <section id="members" className="py-16 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Ensemble & Performers</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">Band Members</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MUSICIANS.map((member) => (
            <div
              key={member.name}
              className="group relative bg-[#121215] border border-white/10 hover:border-amber-500/50 rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            >
              <div 
                onClick={() => setZoomedImage({ src: member.img, alt: member.name })}
                className="relative w-32 h-32 rounded-full overflow-hidden border border-white/20 group-hover:border-amber-500 transition-all mb-4 cursor-pointer"
              >
                <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform" />
              </div>

              <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">{member.name}</h3>
              <p className="text-xs text-amber-500 font-medium mt-0.5 uppercase tracking-wider">{member.role}</p>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedMember(member);
                }}
                className="mt-5 px-5 py-2 bg-white/5 hover:bg-amber-500 hover:text-black rounded-2xl border border-white/10 text-xs font-semibold text-neutral-200 transition-all"
              >
                View Bio →
              </button>
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
            {MANAGEMENT.map((member) => (
              <div
                key={member.name}
                className="group relative bg-[#121215] border border-white/10 hover:border-amber-500/50 rounded-3xl p-6 w-64 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div 
                  onClick={() => setZoomedImage({ src: member.img, alt: member.name })}
                  className="relative w-28 h-28 rounded-full overflow-hidden border border-white/20 group-hover:border-amber-500 transition-all mb-4 cursor-pointer"
                >
                  <Image src={member.img} alt={member.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>

                <h4 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">{member.name}</h4>
                <p className="text-xs text-amber-500 font-medium mt-0.5 uppercase tracking-wider">{member.role}</p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedMember(member);
                  }}
                  className="mt-5 px-5 py-2 bg-white/5 hover:bg-amber-500 hover:text-black rounded-2xl border border-white/10 text-xs font-semibold text-neutral-200 transition-all"
                >
                  View Profile →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setSelectedMember(null)}>
          <div className="bg-[#121215] border border-white/20 max-w-md w-full rounded-3xl p-6 sm:p-8 relative text-center animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setSelectedMember(null)} aria-label="Close modal" className="absolute top-4 right-5 text-neutral-400 hover:text-white text-xl font-bold p-2">
              ✕
            </button>

            <div 
              onClick={() => setZoomedImage({ src: selectedMember.img, alt: selectedMember.name })}
              className="relative w-32 h-32 rounded-full mx-auto overflow-hidden border-2 border-amber-500/80 mb-4 cursor-pointer hover:scale-105 transition-transform"
            >
              <Image src={selectedMember.img} alt={selectedMember.name} fill className="object-cover" />
            </div>

            <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
            <p className="text-xs text-amber-500 font-bold uppercase tracking-widest mt-1 mb-4">{selectedMember.role}</p>

            <p className="text-sm text-neutral-300 leading-relaxed font-light mb-6 text-left bg-white/5 p-4 rounded-2xl border border-white/10">
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

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setZoomedImage(null)}>
          <div className="relative max-w-3xl max-h-[85vh] w-full h-full flex items-center justify-center p-2 animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setZoomedImage(null)} aria-label="Close image preview" className="absolute top-2 right-2 text-white bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold border border-white/20 z-10">
              ✕
            </button>
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20">
              <Image src={zoomedImage.src} alt={zoomedImage.alt} fill className="object-contain" priority />
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setIsBookingOpen(false)}>
          <div className="bg-[#121215] border border-white/20 max-w-lg w-full rounded-3xl p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setIsBookingOpen(false)} aria-label="Close modal" className="absolute top-4 right-5 text-neutral-400 hover:text-white text-xl font-bold p-2">
              ✕
            </button>

            <span className="text-amber-500 text-xs font-bold uppercase tracking-widest block mb-1">Live Performance Inquiry</span>
            <h3 className="text-2xl font-bold text-white mb-6">Book Ekaya Hami</h3>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              {formError && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-xs text-center font-medium">
                  {formError}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Name / Organization <span className="text-amber-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Acme Events / John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Contact Info (Phone/Email) <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="98XXXXXXXX or mail@gmail.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Event Date <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={getTomorrowDate()}
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  Event Location / District (Nepal) <span className="text-amber-500">*</span>
                </label>
                <select
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-[#18181c] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  <option value="" disabled>Select a District or Major City</option>
                  <option value="International / Outside Nepal">International / Outside Nepal</option>
                  {NEPAL_LOCATIONS.map((group) => (
                    <optgroup key={group.province} label={`--- ${group.province} ---`}>
                      {group.locations.map((loc) => (
                        <option key={loc} value={`${loc} (${group.province})`}>
                          {loc}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">Event Details & Requirements</label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe event type, venue size, acoustic setup..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-3 rounded-xl transition-all shadow-lg shadow-amber-500/20 text-sm mt-2"
              >
                Send via Gmail
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Manager Contact Modal */}
      {isManagerContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" onClick={() => setIsManagerContactOpen(false)}>
          <div className="bg-[#121215] border border-white/20 max-w-sm w-full rounded-3xl p-6 relative text-center animate-in fade-in zoom-in-95 duration-200 shadow-[0_0_30px_rgba(245,158,11,0.15)]" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setIsManagerContactOpen(false)} aria-label="Close modal" className="absolute top-4 right-5 text-neutral-400 hover:text-white text-xl font-bold p-2">
              ✕
            </button>

            <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto mb-3 text-amber-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>

            <h3 className="text-xl font-bold text-white mb-1">Contact Manager</h3>
            <p className="text-xs text-neutral-400 mb-6">Choose how you'd like to reach Sujal Suwal</p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleContactManagerGmail}
                className="w-full flex items-center justify-between p-3.5 bg-white/5 hover:bg-amber-500 hover:text-black border border-white/10 rounded-2xl transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">✉️</span>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white group-hover:text-black transition-colors">Send Email via Gmail</p>
                    <p className="text-[10px] text-neutral-400 group-hover:text-black/80 transition-colors">donob.sujal@gmail.com</p>
                  </div>
                </div>
                <span className="text-xs font-semibold group-hover:translate-x-1 transition-transform">→</span>
              </button>

              <a
                href="tel:+9779800000000"
                className="w-full flex items-center justify-between p-3.5 bg-white/5 hover:bg-amber-500 hover:text-black border border-white/10 rounded-2xl transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">📞</span>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white group-hover:text-black transition-colors">Call Direct (Nepal)</p>
                    <p className="text-[10px] text-neutral-400 group-hover:text-black/80 transition-colors">+977 98XXXXXXXX</p>
                  </div>
                </div>
                <span className="text-xs font-semibold group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Booking Section */}
      <section id="booking" className="py-16 px-6 max-w-4xl mx-auto">
        <div className="bg-[#121215] border border-white/10 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <span className="text-amber-500 text-xs font-bold uppercase tracking-widest">Live Performances & Inquiries</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">Book Ekaya Hami</h2>
          <p className="text-neutral-300 text-xs sm:text-sm max-w-lg mx-auto mb-2">
            Managed by <strong>Sujal Suwal (Band Manager)</strong>.
          </p>
          <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto mb-8">
            Available for cultural festivals, concert performances, corporate events, and private shows across Nepal & internationally.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <button type="button" onClick={() => setIsBookingOpen(true)} className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-3.5 rounded-2xl transition-all text-sm">
              Submit Booking Request Form
            </button>
            
            <button type="button" onClick={() => setIsManagerContactOpen(true)} className="bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold px-8 py-3.5 rounded-2xl transition-all text-sm">
              Contact Manager
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-xs text-neutral-500 space-y-2">
        <p className="text-sm text-neutral-300 font-medium">For Bookings & Press: Contact Manager Sujal Suwal</p>
        <p>© 2024–2026 Ekaya Hami • Managed under donob orie. All rights reserved.</p>
      </footer>
    </div>
  );
}