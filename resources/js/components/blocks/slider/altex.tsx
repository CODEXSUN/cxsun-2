// resources/js/components/blocks/slider/altex.tsx
'use client';

import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    ChevronLeft,
    ChevronRight,
    Pause,
    Play,
    Beaker,
    ShieldCheck,
    Clock,
    FileText,
    PhoneCall,
    CheckCircle2,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Slide {
    id: number;
    title: string;
    tagline: string;
    highlights: string[];
    action: {
        text: string;
        href: string;
        icon?: React.ElementType;
    };
    image: string; // Now local path
}

const slides: Slide[] = [
    {
        id: 1,
        title: 'ALTEX Testing Labs',
        tagline: "India's Most Trusted ISO 17025 & NABL Accredited Testing Laboratory",
        highlights: ['3–7 Days Fast Reports', 'Free Sample Pickup Across India', 'Globally Accepted Results'],
        action: { text: 'Get Free Quote Now', href: '/contact', icon: FileText },
        image: '/images/home/slider/textile1.jpg',
    },
    {
        id: 2,
        title: 'Full Compliance Testing',
        tagline: 'OEKO-TEX • REACH • GOTS • ZDHC • Azo Free • California Prop 65',
        highlights: ['100+ International Standards Covered', 'Buyer-Approved Test Reports', 'Digital PDF + Portal Access'],
        action: { text: 'View All Tests', href: '/services' },
        image: '/images/home/slider/textile2.jpg',
    },
    {
        id: 3,
        title: 'Trusted by 5000+ Brands',
        tagline: 'Serving Leading Exporters, Buying Houses & Retail Giants Since 1998',
        highlights: ['H&M • ZARA • GAP • Walmart • Target • Adidas • Levi’s Suppliers', '24/7 WhatsApp & Email Support'],
        action: { text: 'Call +91 98765 43210', href: 'tel:+919876543210', icon: PhoneCall },
        image: '/images/home/slider/textile3.jpg',
    },
    {
        id: 4,
        title: 'Advanced Testing Facility',
        tagline: 'Equipped with Latest Machines & Expert Chemists',
        highlights: ['Martindale Abrasion Tester', 'Tensile Strength Machine', 'GCMS & HPLC Available', 'Climate-Controlled Lab'],
        action: { text: 'Book Lab Tour', href: '/contact' },
        image: '/images/home/slider/textile4.jpg',
    },
    {
        id: 5,
        title: 'Express Testing Available',
        tagline: 'Need Urgent Reports? Get Results in Just 24–48 Hours',
        highlights: ['Same-Day Testing for Critical Samples', 'Dedicated Express Lane', 'Priority Report Delivery'],
        action: { text: 'Request Express Quote', href: '/contact?type=express' },
        image: '/images/home/slider/textile5.jpg',
    },
    {
        id: 6,
        title: 'Free Sample Pickup Service',
        tagline: 'We Collect Your Samples from Anywhere in India & Bangladesh',
        highlights: ['Doorstep Pickup Within 24 Hours', 'Safe & Secure Packaging', 'Real-Time Tracking'],
        action: { text: 'Schedule Pickup Now', href: '/contact?service=pickup' },
        image: '/images/home/slider/textile6.jpg',
    },
];

export default function AltexHeroSlider() {
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);
    const [direction, setDirection] = useState(0);
    // eslint-disable-next-line react-hooks/purity
    const startTime = useRef(Date.now());
    const duration = 7000;

    const next = () => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
        setProgress(0);
        startTime.current = Date.now();
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
        setProgress(0);
        startTime.current = Date.now();
    };

    useEffect(() => {
        if (!isPlaying) return;
        const id = setInterval(next, duration);
        return () => clearInterval(id);
    }, [isPlaying]);

    useEffect(() => {
        if (!isPlaying) return;
        const id = setInterval(() => {
            setProgress(Math.min((Date.now() - startTime.current) / duration, 1));
        }, 16);
        return () => clearInterval(id);
    }, [isPlaying, current]);

    const circumference = 2 * Math.PI * 36;
    const strokeDashoffset = circumference * (1 - progress);

    const variants = {
        enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir < 0 ? '100%' : '-100%', opacity: 0 }),
    };

    const IconComponent = slides[current].action.icon;

    return (
        <div className="relative h-screen overflow-hidden bg-slate-950">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } }}
                    className="absolute inset-0"
                >
                    {/* Local Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${slides[current].image.startsWith('http')
                                ? slides[current].image
                                : slides[current].image}`
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/80 to-blue-800/60" />
                    </div>

                    {/* Content */}
                    <div className="relative flex h-full items-center">
                        <div className="container mx-auto px-6 lg:px-12">
                            <div className="max-w-6xl">
                                {/* Title */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                    className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
                                >
                                    {slides[current].title.split(' ').map((word, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="inline-block mr-3 drop-shadow-2xl"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                                </motion.h1>

                                {/* Tagline */}
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="mt-6 text-xl md:text-2xl lg:text-3xl text-blue-100 font-light max-w-4xl"
                                >
                                    {slides[current].tagline}
                                </motion.p>

                                {/* Highlights */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.1 }}
                                    className="mt-5 sm:mt-10 flex flex-wrap gap-4"
                                >
                                    {slides[current].highlights.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 1.2 + i * 0.1 }}
                                            className="flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 text-blue-50"
                                        >
                                            <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0" />
                                            <span className="font-medium">{item}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* CTA */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.5 }}
                                    className="mt-6 sm:mt-12"
                                >
                                    <Link
                                        href={slides[current].action.href}
                                        className="group inline-flex items-center gap-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-6 text-xl font-bold text-white shadow-2xl transition-all hover:shadow-cyan-500/50 hover:-translate-y-2"
                                    >
                                        {slides[current].action.text}
                                        {IconComponent ? (
                                            <IconComponent className="h-7 w-7 group-hover:animate-pulse" />
                                        ) : (
                                            <ChevronRight className="h-7 w-7 transition-transform group-hover:translate-x-3" />
                                        )}
                                    </Link>
                                </motion.div>

                                {/* Trust Bar */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.8 }}
                                    className="mt-5 sm:mt-16 flex flex-wrap items-center gap-8 text-blue-200 text-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <ShieldCheck className="h-6 w-6 text-cyan-400" /> ISO 17025 Accredited
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Beaker className="h-6 w-6 text-cyan-400" /> 25+ Years Experience
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="h-6 w-6 text-cyan-400" /> Express Service Available
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Play/Pause + Progress Ring */}
            <div className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2">
                <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    className="rotate-[-90deg]"
                >
                    <circle
                        cx="28"
                        cy="28"
                        r="26"
                        stroke="rgba(255,255,255,0.15)"
                        strokeWidth="3"
                        fill="none"
                    />
                    <motion.circle
                        cx="28"
                        cy="28"
                        r="26"
                        stroke="url(#bluegrad)"
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={{ strokeDashoffset }}
                        transition={{ duration: 0, ease: 'linear' }}
                        strokeLinecap="round"
                    />
                    <defs>
                        <linearGradient id="bluegrad">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 flex items-center justify-center text-white transition hover:scale-110"
                >
                    {isPlaying ? (
                        <Pause className="h-5 w-5" />
                    ) : (
                        <Play className="h-5 w-5" />
                    )}
                </button>
            </div>

            {/* Navigation Arrows */}
            <button onClick={prev} className="absolute hidden sm:block left-6 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/20 p-4 backdrop-blur-xl text-white hover:bg-white/30 hover:scale-110 transition">
                <ChevronLeft className="h-8 w-8" />
            </button>
            <button onClick={next} className="absolute hidden sm:block right-6 top-1/2 -translate-y-1/2 z-30 rounded-full bg-white/20 p-4 backdrop-blur-xl text-white hover:bg-white/30 hover:scale-110 transition">
                <ChevronRight className="h-8 w-8" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setDirection(i > current ? 1 : -1);
                            setCurrent(i);
                            setProgress(0);
                            startTime.current = Date.now();
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            i === current ? 'w-12 bg-gradient-to-r from-cyan-500 to-blue-600' : 'w-2 bg-white/40 hover:bg-white/80'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
