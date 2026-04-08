import { Beaker, Library as LibraryIcon, Trophy, Utensils, Laptop, ChevronLeft, ChevronRight, CheckCircle2, Heart, Sparkles, ArrowRight, Volume2, VolumeX } from 'lucide-react';
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import DomeGallery from '@/components/animations/DomeGallery';
import BlurText from '@/components/animations/BlurTextProps';
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";
import { useRef } from "react";

const heroImages = [
    {
        url: "/campus/campus-hero-2.jpeg",
        title: "Main Campus",
        subtitle: "A Beacon of Excellence in Women's Education"
    },
    {
        url: "/campus/campus-hero-1.jpeg",
        title: "Innovation Hub",
        subtitle: "Where Technology and Creativity Converge"
    },
    {
        url: "/campus/campus-hero-4.jpeg",
        title: "Knowledge Centre",
        subtitle: "Gateway to Endless Intellectual Growth"
    },
    {
        url: "/campus/campus-hero-3.jpeg",
        title: "Sports Arena",
        subtitle: "Fostering Strength, Speed, and Sportsmanship"
    }
];

const Infrastructure = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };


    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();

        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 6000);

        return () => clearInterval(interval);
    }, [emblaApi, onSelect]);



    return (
        <PageWrapper>
            <div className="flex flex-col space-y-16 md:space-y-24 pb-16 md:pb-24">
                {/* Standardized Hero Section */}
                <section className="relative h-screen w-full overflow-hidden group shadow-2xl">
                    <div className="absolute inset-0" ref={emblaRef}>
                        <div className="flex h-full">
                            {heroImages.map((slide, index) => (
                                <div key={index} className="min-w-full h-full relative">
                                    <img
                                        src={slide.url}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-brand-navy/60" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white pointer-events-none">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-6 md:mb-8">
                            <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                            <p className="text-brand-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase font-display italic">Campus Excellence</p>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-3xl md:text-6xl lg:text-8xl font-black font-display mb-6 md:mb-8 leading-tight tracking-tight italic text-white"
                        >
                            {heroImages[selectedIndex].title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            className="max-w-xl text-blue-100/60 text-[10px] md:text-xl font-bold uppercase tracking-[0.2em] font-display italic"
                        >
                            {heroImages[selectedIndex].subtitle}
                        </motion.p>
                    </div>

                    <div className="absolute bottom-6 left-0 right-0 md:bottom-12 md:right-12 md:left-auto z-20 flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 md:gap-8 px-6 md:px-0">
                        <div className="flex gap-2">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    className={`h-1 rounded-full transition-all duration-300 ${selectedIndex === index
                                        ? "w-10 bg-blue-500"
                                        : "w-4 bg-white/40 hover:bg-white/70"
                                        }`}
                                />
                            ))}
                        </div>
                        <div className="flex gap-2.5 md:ml-4">
                            <button onClick={scrollPrev} className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all duration-500 backdrop-blur-md">
                                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                            <button onClick={scrollNext} className="h-10 w-10 md:h-14 md:w-14 rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all duration-500 backdrop-blur-md">
                                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Simplified Intro */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="container mx-auto px-6 max-w-5xl"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <motion.div variants={itemVariants} className="flex items-center gap-3">
                                <Sparkles className="h-5 w-5 text-brand-gold" />
                                <p className="text-brand-navy font-black text-xs tracking-[0.4em] uppercase font-display italic">
                                    Modern Learning Environment
                                </p>
                            </motion.div>

                            <motion.h2 className="text-4xl md:text-5xl lg:text-7xl font-black font-display text-brand-navy leading-tight italic uppercase">
                                A Living <span className="text-brand-gold">Ecosystem</span>
                            </motion.h2>

                            <motion.p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed font-display">
                                Sri Sai College for Women is spread across a serene, green campus that provides the perfect balance between academic rigor and creative freedom.
                            </motion.p>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 border-white"
                        >
                            {/* VIDEO */}
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                autoPlay
                                loop
                                muted
                                playsInline
                            >
                                <source src="/video/college-video.mp4" type="video/mp4" />
                            </video>

                            {/* SOUND BUTTON */}
                            <button
                                onClick={toggleSound}
                                className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50 hover:scale-105 active:scale-95 transition"
                            >
                                {isMuted ? (
                                    <VolumeX className="h-5 w-5 text-brand-navy" />
                                ) : (
                                    <Volume2 className="h-5 w-5 text-brand-navy" />
                                )}
                            </button>
                        </motion.div>
                    </div>
                </motion.section>
                {/* Dome Gallery Section */}
                <section className="w-full relative py-12 md:py-24 bg-brand-navy overflow-hidden">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="container mx-auto px-6 text-center mb-12 md:mb-16 relative z-10 space-y-4 md:space-y-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-brand-gold font-black text-[10px] md:text-xs tracking-[0.4em] uppercase font-display italic"
                        >
                            Visual Tour
                        </motion.p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-white italic uppercase">
                            <BlurText text="Campus Gallery" delay={150} animateBy="words" />
                        </h2>
                    </div>

                    <div className="w-full h-[400px] md:h-[600px] relative z-10">
                        <DomeGallery
                            images={[
                                "/gallery/g1.jpeg",
                                "/gallery/g2.jpeg",
                                "/gallery/g3.jpeg",
                                "/gallery/g4.jpeg",
                                "/gallery/g5.jpeg",
                                "/gallery/g6.jpeg",
                                "/gallery/g7.jpeg",
                                "/gallery/g8.jpeg",
                                "/gallery/g9.jpeg",
                                "/gallery/g10.jpeg",
                                "/gallery/g11.jpeg",
                                "/gallery/g12.jpeg",
                                "/gallery/g13.jpeg",
                                "/gallery/g14.jpg",
                                "/gallery/g15.jpg",
                                "/gallery/g16.jpg",
                                "/gallery/g17.jpg",
                                "/gallery/g18.jpeg",
                                "/gallery/g19.jpeg",
                                "/gallery/g20.jpg",
                            ]}
                            fit={isMobile ? 0.9 : 0.7}
                            minRadius={isMobile ? 450 : 550}
                            maxVerticalRotationDeg={5}
                            segments={26}
                            dragDampening={1.2}
                            grayscale={false}
                            overlayBlurColor="var(--color-brand-navy)"
                        />
                    </div>
                </section>

                {/* Feature Sections - Immersive & Detailed */}
                <div className="text-center space-y-6 mb-16 md:mb-24 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportConfig}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold border border-brand-gold/20"
                    >
                        <Sparkles className="h-4 w-4" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] font-display italic">Infrastructure Excellence</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black font-display text-brand-navy italic uppercase text-center leading-none">
                        Our <span className="text-brand-gold">Facilities</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-brand-gold mx-auto rounded-full mt-8" />
                </div>

                <section className="container mx-auto px-6 py-14 lg:py-20 relative overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-20 left-1/3 w-72 h-72 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                        {/* LEFT CONTENT */}
                        <div className="space-y-10">

                            {/* Label */}
                            <div className="flex items-center gap-3">
                                <LibraryIcon className="h-5 w-5 text-brand-gold" />
                                <p className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic">
                                    Knowledge Hub
                                </p>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-brand-navy leading-[0.9] italic uppercase">
                                The <span className="text-brand-gold">Library</span>
                            </h2>

                            {/* Description */}
                            <div className="space-y-6">
                                <p className="text-slate-600 text-lg leading-relaxed font-display">
                                    The College houses a well-equipped and resource-rich library designed to support the academic and research needs of both students and faculty.
                                </p>

                                <p className="text-slate-500 text-base leading-relaxed font-display">
                                    Our collection includes a wide range of textbooks, reference materials, academic publications, and scholarly resources across various disciplines. The library subscribes to leading newspapers, reputed journals, technical magazines, and periodicals of both academic and general interest, ensuring that students remain informed and up-to-date. and well-organized environment conducive to focused learning. Our collection includes textbooks, reference materials, academic publications, and scholarly resources across disciplines.
                                </p>

                                <p className="text-slate-500 text-base leading-relaxed font-display">
                                    The fully computerized library system enables efficient access and management of resources. It also features a valuable collection of academic CDs from renowned publishing houses.
                                </p>

                            </div>

                            {/* Feature Pills */}
                            <div className="flex flex-wrap gap-3 pt-4">
                                {[
                                    "Digital Access",
                                    "EDUSAT Learning",
                                    "Research Ready",
                                    "Quiet Environment",
                                ].map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest rounded-full border border-brand-gold/20"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT VISUAL */}
                        <div className="space-y-6">

                            {/* Main Image */}
                            <div className="relative aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                                <img
                                    src="/library/lib-1.jpeg"
                                    alt="Library"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Secondary Row */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src="/library/lib-2.jpeg"
                                        alt="Library Interior"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src="/library/lib-3.jpeg"
                                        alt="Library Digital Section"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* BOTTOM FEATURE STRIP */}
                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {[
                            "Extensive Book Collection",
                            "Computerized System",
                            "Internet Access",
                            "EDUSAT Programs",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                                    <p className="text-sm font-bold text-brand-navy font-display">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </section>

                <section className="container mx-auto px-6 py-14 lg:py-20 relative overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* LEFT VISUAL (Dominant) */}
                        {/* LEFT VISUAL (Enhanced 5 Image Layout) */}
                        <div className="space-y-6">

                            {/* MAIN HERO IMAGE */}
                            <div className="relative aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                                <img
                                    src="/computer_lab/computer-1.jpeg"
                                    alt="Laboratory Main"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>

                            {/* MIDDLE ROW (2 IMAGES) */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-lg group">
                                    <img
                                        src="/labs/lab-chem.jpeg"
                                        alt="Chem Lab"
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-[1.5s]"
                                    />
                                </div>

                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-lg group">
                                    <img
                                        src="/labs/lab-phy.jpeg"
                                        alt="Physics Lab"
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-[1.5s]"
                                    />
                                </div>
                            </div>

                            {/* BOTTOM STRIP (2 SMALL IMAGES) */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-white shadow-md group">
                                    <img
                                        src="/labs/lab-bio.jpeg"
                                        alt="Bio Lab"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-[1.2s]"
                                    />
                                </div>

                                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-white shadow-md group">
                                    <img
                                        src="/computer_lab/computer-2.jpeg"
                                        alt="Comp Lab"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-[1.2s]"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="space-y-10">

                            {/* Label */}
                            <div className="flex items-center gap-3">
                                <Beaker className="h-5 w-5 text-brand-gold" />
                                <p className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic">
                                    Practical Learning
                                </p>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-display text-brand-navy leading-[0.9] italic uppercase">
                                Modern <span className="text-brand-gold">Laboratories</span>
                            </h2>

                            {/* Description */}
                            <div className="space-y-6">
                                <p className="text-slate-600 text-lg leading-relaxed font-display">
                                    The College provides well-equipped and modern laboratory facilities designed to deliver comprehensive practical learning experiences.
                                </p>

                                <p className="text-slate-500 text-base leading-relaxed font-display">
                                    Our laboratories are furnished with the latest instruments, enabling students to gain hands-on exposure and strengthen their conceptual understanding through experimentation and analysis.
                                </p>

                                <p className="text-slate-500 text-base leading-relaxed font-display">
                                    In addition, the institution features a state-of-the-art Computer Laboratory equipped with 40 advanced systems, high-speed internet, and multimedia tools for interactive learning.
                                </p>
                            </div>

                            {/* Departments Grid */}
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                {["Physics", "Chemistry", "Botany", "Zoology"].map((item, i) => (
                                    <div
                                        key={i}
                                        className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 hover:border-brand-gold/30 transition"
                                    >
                                        <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                                        <span className="text-xs font-black text-brand-navy uppercase tracking-widest font-display italic">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM FEATURE STRIP */}
                    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {[
                            "Hands-on Learning",
                            "Advanced Instruments",
                            "Computer Lab Access",
                            "Interactive Teaching",
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition"
                            >
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-brand-gold" />
                                    <p className="text-sm font-bold text-brand-navy font-display">
                                        {item}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </section>

                <section className="relative py-14 lg:py-20 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-brand-gold/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    <div className="container mx-auto px-6 space-y-16">

                        {/* HERO IMAGE */}
                        <div className="relative aspect-[16/7] rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white group">
                            <img
                                src="/canteen/canteen-1.jpg"
                                alt="College Canteen"
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                            {/* Overlay Text */}
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-brand-gold font-display italic">
                                    Campus Life
                                </p>
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black font-display italic uppercase leading-tight text-blue-100">
                                    The <span className="text-brand-gold">Canteen</span>
                                </h2>
                            </div>
                        </div>

                        {/* CONTENT CENTER */}
                        <div className="max-w-4xl mx-auto text-center space-y-8">

                            <p className="text-slate-600 text-lg leading-relaxed font-display">
                                The College provides a well-maintained and hygienic canteen facility that caters to the diverse tastes and nutritional needs of students and staff.
                            </p>

                            <p className="text-slate-500 text-base leading-relaxed font-display">
                                Known for its quality, affordability, and cleanliness, the canteen serves a variety of fresh and wholesome refreshments, making it a trusted and welcoming space on campus.
                            </p>

                            <p className="text-slate-500 text-base leading-relaxed font-display">
                                A special highlight is the beautifully designed Roof Garden seating area, offering a serene and refreshing atmosphere for students to unwind, socialize, and connect.
                            </p>

                        </div>

                        {/* IMAGE HIGHLIGHTS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            {/* Roof Garden */}
                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">
                                <img
                                    src="/canteen/canteen-2.jpg"
                                    alt="Roof Garden"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-xl font-black font-display italic uppercase text-blue-100">
                                        Roof Garden
                                    </h3>
                                    <p className="text-xs opacity-80 text-brand-gold">Relax & Socialize</p>
                                </div>
                            </div>

                            {/* Food Area */}
                            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">
                                <img
                                    src="/canteen/canteen-3.jpg"
                                    alt="Canteen Food"
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                <div className="absolute bottom-6 left-6 text-white">
                                    <h3 className="text-xl font-black font-display italic uppercase text-blue-100">
                                        Fresh & Hygienic
                                    </h3>
                                    <p className="text-xs opacity-80 text-brand-gold">Quality You Can Trust</p>
                                </div>
                            </div>
                        </div>

                        {/* FEATURE STRIP */}
                        <div className="flex flex-wrap justify-center gap-4 pt-6">
                            {[
                                "Hygienic Food",
                                "Affordable Prices",
                                "Roof Garden Seating",
                                "Student Hangout Space",
                            ].map((item, i) => (
                                <span
                                    key={i}
                                    className="px-5 py-2 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest rounded-full border border-brand-gold/20"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                    </div>
                </section>


                {/* Simplified Overview Grid */}
                <section className="bg-brand-navy py-16 md:py-24  relative overflow-hidden">
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="text-center mb-12 md:mb-16 space-y-4">
                            <p className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic">The sscw Experience</p>
                            <h2 className="text-4xl md:text-6xl font-black font-display text-white italic uppercase">Beyond <span className="text-brand-gold">Classrooms</span></h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Auditorium', icon: Trophy, desc: 'Large capacity venue for state-level events.' },
                                { title: 'Seminar Hall', icon: Laptop, desc: 'Smart audio-visual enabled guest lectures.' },
                                { title: 'Cafeteria', icon: Utensils, desc: 'Nutritious & hygienic student hub.' },
                                { title: 'Safe Campus', icon: Heart, desc: '24/7 security with women-first protocols.' }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportConfig}
                                    variants={itemVariants}
                                    className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-brand-gold/50 transition-all group"
                                >
                                    <div className="h-12 w-12 bg-white/10 text-brand-gold rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                                        <item.icon className="h-5 w-5" />
                                    </div>
                                    <h4 className="font-black text-lg font-display text-white mb-2 uppercase italic tracking-tight">{item.title}</h4>
                                    <p className="text-blue-100/40 text-xs font-bold italic font-display leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <Link to="/contact" className="inline-flex items-center gap-4 bg-brand-gold text-brand-navy font-black px-8 py-4 rounded-xl hover:bg-white transition-all text-xs tracking-widest uppercase italic shadow-xl">
                                Visit Our Campus <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default Infrastructure;
