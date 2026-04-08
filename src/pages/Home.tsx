import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, GraduationCap, Award, Building2, CheckCircle, Briefcase, Users, Heart, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import useEmblaCarousel from "embla-carousel-react"
import { useEffect, useCallback, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import TiltedCard from '@/components/animations/TiltedCard';
import BlurText from '@/components/animations/BlurTextProps';
import { motion } from 'framer-motion';
import CircularGallery from '@/components/animations/CircularGallery';
import PageWrapper from '@/components/layout/PageWrapper';
import { containerVariants, itemVariants, viewportConfig } from '@/lib/motion';

const heroImages = [
    "/home/hero-1.jpeg",
    "/home/hero-2.jpeg", 
    "/home/hero-3.jpeg",
    "/home/hero-4.jpeg",
    "/home/hero-5.jpeg"
]

const galleryItems = [
    { image: "/other-campus/campus-9.jpg", text: "Vibrant Campus" },
    { image: "/other-campus/campus-10.jpg", text: "Graduation Day" },
    { image: "/other-campus/campus-8.jpg", text: "Central Library" },
    { image: "/other-campus/campus-1.jpg", text: "Student Life" },
    { image: "/other-campus/campus-6.jpg", text: "Collaborative Learning" },
    { image: "/other-campus/campus-11.jpg", text: "Modern Classrooms" },
]

const Home = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        emblaApi.on("select", onSelect)
        onSelect()

        const interval = setInterval(() => {
            emblaApi?.scrollNext()
        }, 6000)

        return () => clearInterval(interval)
    }, [emblaApi, onSelect])

    return (
        <PageWrapper>
            <div className="flex flex-col">
                {/* ================= HERO SECTION ================= */}
                <section className="relative h-[70vh] md:h-screen w-full text-white overflow-hidden bg-brand-navy">
                    {/* Background Carousel */}
                    <div className="absolute inset-0 z-0" ref={emblaRef}>
                        <div className="flex h-full">
                            {heroImages.map((src, index) => (
                                <div key={index} className="min-w-full h-full relative">
                                    <img
                                        src={src}
                                        alt={`Hero ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Clean Overlay */}
                                    <div className="absolute inset-0 bg-black/60" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 flex items-center h-full py-12 md:py-0">
                        <div className="container mx-auto px-6 lg:px-12">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={containerVariants}
                                className="max-w-3xl space-y-8"
                            >
                                <motion.div variants={itemVariants} className="flex items-center gap-3">
                                    <div className="h-1 lg:h-1.5 w-10 bg-brand-gold rounded-full" />
                                    <p className="text-brand-gold font-black text-[10px] tracking-[0.4em] uppercase font-display italic">Excellence in Women's Education</p>
                                </motion.div>

                                {/* Heading */}
                                <motion.h1 variants={itemVariants} className="text-2xl md:text-4xl lg:text-6xl font-black font-display leading-[1.1] text-white italic uppercase tracking-tighter">
                                    <BlurText text="Empowering" delay={150} animateBy="words" />
                                    <br />
                                    <span className="text-brand-gold">Future Leaders</span>
                                </motion.h1>

                                {/* Description */}
                                <motion.div variants={itemVariants}>
                                    <BlurText
                                        text="Sri Sai College for Women nurtures academic rigor and holistic leadership through innovative ecosystems and ethical grounding."
                                        className="text-sm md:text-base text-blue-100/70 max-w-xl leading-relaxed font-bold font-display"
                                        delay={50}
                                        animateBy="words"
                                    />
                                </motion.div>

                                {/* Buttons */}
                                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <Link to="/admissions" className="w-full sm:w-auto">
                                        <Button className="w-full h-11 sm:h-auto bg-brand-gold hover:bg-white text-brand-navy px-8 py-2.5 text-[10px] font-black rounded-2xl transition-all duration-500 shadow-2xl shadow-brand-gold/20 uppercase tracking-widest font-display italic">
                                            APPLY NOW <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>

                                    <Link to="/academics" className="w-full sm:w-auto">
                                        <Button className="w-full h-11 sm:h-auto border border-white/20 text-white hover:bg-white hover:text-brand-navy px-8 py-2.5 text-[10px] font-black rounded-2xl transition-all duration-500 backdrop-blur-md uppercase tracking-widest font-display italic">
                                            EXPLORE PROGRAMS
                                        </Button>
                                    </Link>
                                </motion.div>

                            </motion.div>
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-10 md:right-auto z-20 flex items-center gap-4 p-2 md:p-0">
                        <div className="flex gap-2">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index
                                        ? "w-10 bg-blue-500"
                                        : "w-4 bg-white/40 hover:bg-white/70"
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="flex gap-2 ml-4">
                            <button
                                onClick={scrollPrev}
                                className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>

                            <button
                                onClick={scrollNext}
                                className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/20 transition"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                </section>


                {/* ================= CORE VALUES ================= */}
                <section className="relative py-16 md:py-24 overflow-hidden bg-white">
                    {/* Background Photo */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/background/bg5.jpg')" }}
                    />
                    {/* Overlay — keeps left side light for text, right side more open for the card */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-white/55 via-white/75 to-white/40" />

                    <div className="container mx-auto px-6 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            variants={containerVariants}
                            className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
                        >
                            <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
                                <motion.div variants={itemVariants} className="space-y-4 text-center lg:text-left">
                                    <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">Why Choose sscw?</p>
                                    <h2 className="text-3xl lg:text-6xl font-black text-brand-navy leading-[1.2] lg:leading-[1.1]">
                                        A Tradition of excellence, <br className="hidden md:block" />
                                        A future of innovation.
                                    </h2>
                                </motion.div>
                                <motion.p variants={itemVariants} className="text-base lg:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
                                    We provide a supportive and challenging environment that encourages students to discover their passions, achieve their goals, and make a positive impact on the world.
                                </motion.p>
                                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                    {['Holistic Digital Learning', 'Women Empowerment Focus', 'Placement Assistance', 'Modern Infrastructure'].map(item => (
                                        <div key={item} className="flex items-center gap-3 font-bold text-brand-navy text-sm lg:text-base group">
                                            <div className="h-6 w-6 rounded-full bg-yellow-50 flex items-center justify-center text-brand-gold shrink-0 group-hover:scale-110 transition-transform">
                                                <CheckCircle className="w-4 h-4" />
                                            </div>
                                            {item}
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                            <motion.div variants={itemVariants} className="w-full lg:w-1/2 relative order-1 lg:order-2 px-4 lg:px-0 flex justify-center items-center">
                                <TiltedCard
                                    imageSrc="/home/sai-baba.jpg"
                                    altText="Sri Sai College Students"
                                    containerHeight="min(600px, 145vw)"
                                    containerWidth="100%"
                                    imageHeight="min(525px, 135vw)"
                                    imageWidth="min(350px, 90vw)"
                                    rotateAmplitude={12}
                                    scaleOnHover={1.05}
                                    displayOverlayContent={false}
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* ================= CIRCULAR GALLERY ================= */}
                <section className="h-[300px] md:h-[450px] lg:h-[550px] w-full overflow-hidden relative z-20">
                    <CircularGallery
                        items={galleryItems}
                        bend={1}
                        textColor="var(--color-brand-navy)"
                        borderRadius={0.05}
                        font="bold 24px Inter"
                    />
                </section>

                {/* ================= PROGRAMS GRID ================= */}
                <section className="relative py-16 md:py-24 overflow-hidden">
                    {/* Clean Background Image */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/background/home-page-1.jpeg')" }}
                    />
                    <div className="absolute inset-0 z-0 backdrop-blur-[4px]" />

                    <div className="container relative z-10 mx-auto px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            variants={containerVariants}
                            className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4 md:space-y-6"
                        >
                            <motion.p variants={itemVariants} className="text-brand-navy font-black text-xs tracking-[0.3em] uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">Academic Pathways</motion.p>
                            <motion.h2 variants={itemVariants} className="text-3xl md:text-6xl font-black text-brand-navy drop-shadow-[0_2px_2px_rgba(255,255,255,0.6)] italic">Our <span className="text-brand-gold">Specialized</span> Programs</motion.h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Pre-University (PUC)',
                                    desc: 'Building strong foundations in Science & Commerce for a bright career ahead.',
                                    icon: BookOpen,
                                    color: 'gold'
                                },
                                {
                                    title: 'BCA (Computer App)',
                                    desc: 'Unlock the future of technology with our industry-aligned computer science program.',
                                    icon: GraduationCap,
                                    color: 'gold'
                                },
                                {
                                    title: 'B.Com / Management',
                                    desc: 'Expertise in finance, accounting, and business strategies for future leaders.',
                                    icon: Award,
                                    color: 'gold'
                                },
                            ].map((p, idx) => (
                                <motion.div
                                    key={p.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={viewportConfig}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative bg-brand-navy/85 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20 hover:border-brand-gold transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(234,179,8,0.2)] hover:-translate-y-2 focus-within:ring-2 focus-within:ring-brand-gold focus-within:ring-offset-2"
                                >
                                    <div className="h-16 w-16 bg-brand-gold text-brand-navy rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-yellow-500/20">
                                        <p.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 group-hover:text-brand-gold transition-colors font-display italic">{p.title}</h3>
                                    <p className="text-gray-300 font-medium leading-relaxed mb-8">{p.desc}</p>
                                    <Link to="/academics" className="inline-flex items-center text-sm font-black text-brand-gold tracking-widest hover:text-white transition-colors group/link">
                                        LEARN MORE <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ================= QUICK LINKS ================= */}
                <section className="relative py-16 md:py-28 overflow-hidden">

                    {/* Background */}
                    <div
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/background/bg2.jpg')" }}
                    />

                    {/* Navy Overlay */}
                    <div className="absolute inset-0  backdrop-blur-[2px]" />

                    <div className="container relative z-10 mx-auto px-6">

                        {/* Header */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            variants={containerVariants}
                            className="text-center max-w-3xl mx-auto mb-12 md:mb-20 space-y-4"
                        >
                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl md:text-5xl font-extrabold text-blue-900 font-display"
                            >
                                Quick <span className="text-brand-gold">Links</span>
                            </motion.h2>

                            <motion.p
                                variants={itemVariants}
                                className="text-black text-base md:text-lg font-medium"
                            >
                                Access important academic and campus resources
                            </motion.p>
                        </motion.div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

                            {[
                                {
                                    title: "About Us",
                                    desc: "Learn about our mission, vision and institution values",
                                    icon: Info,
                                    link: "/about-us"
                                },
                                {
                                    title: "Admissions",
                                    desc: "Apply for PUC, BCA and Commerce programs",
                                    icon: GraduationCap,
                                    link: "/admissions"
                                },
                                {
                                    title: "Campus",
                                    desc: "Explore student activities and facilities",
                                    icon: Building2,
                                    link: "/infrastructure"
                                },
                                {
                                    title: "Faculty",
                                    desc: "Meet our experienced teaching staff",
                                    icon: Users,
                                    link: "/faculty"
                                },
                                {
                                    title: "Non-Academics",
                                    desc: "Sports, cultural & extracurricular programs",
                                    icon: Briefcase,
                                    link: "/non-academics"
                                },
                                {
                                    title: "Student Life",
                                    desc: "Counselling and student support services",
                                    icon: Heart,
                                    link: "/student-life"
                                },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={viewportConfig}
                                    transition={{ delay: index * 0.1, ease: "easeOut" }}
                                >
                                    <Link
                                        to={item.link}
                                        className="group block bg-white/95 backdrop-blur-md rounded-3xl p-10 text-center border border-white/20 shadow-xl transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] hover:-translate-y-2 hover:bg-brand-navy hover:border-brand-gold h-full"
                                    >

                                        {/* Icon */}
                                        <div className="mx-auto mb-6 h-20 w-20 rounded-full bg-brand-gold/20 flex items-center justify-center transition-all duration-500 group-hover:bg-brand-gold">
                                            <item.icon className="h-8 w-8 text-brand-navy group-hover:text-brand-navy transition-all duration-500" />
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-brand-navy mb-3 font-display transition-colors duration-500 group-hover:text-white">
                                            {item.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-slate-200">
                                            {item.desc}
                                        </p>

                                    </Link>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default Home;
