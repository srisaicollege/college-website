import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, Trophy, Sparkles, Heart, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/layout/PageWrapper";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const heroImages = [
    {
        url: "/about-us/about-us-1.jpeg",
        caption: "Excellence in Every Dimension"
    },
    {
        url: "/about-us/about-us-2.jpg",
        caption: "Nurturing Global Citizens"
    },
    {
        url: "/about-us/about-us-3.jpeg",
        caption: "A Legacy of Empowerment"
    },
];

const AboutHome = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 });
    const [selectedIndex, setSelectedIndex] = useState(0);

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
            <div className="space-y-4 py-8">
                {/* Standardized Hero Section with Embla */}
                <section className="relative h-[60vh] lg:h-[80vh] min-h-[500px] w-full overflow-hidden rounded-[3rem] lg:rounded-[4rem] group shadow-2xl mx-auto max-w-[1400px]">
                    <div className="absolute inset-0" ref={emblaRef}>
                        <div className="flex h-full">
                            {heroImages.map((image, index) => (
                                <div key={index} className="min-w-full h-full relative">
                                    <img
                                        src={image.url}
                                        alt={`About Hero ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-brand-navy/60" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                            <p className="text-brand-gold font-bold text-xs tracking-[0.4em] uppercase">Institutional Excellence</p>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight text-white"
                        >
                            Sri Sai College <br />
                            <span className="text-brand-gold">for Women</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="max-w-2xl text-blue-100/70 text-lg md:text-xl font-medium tracking-wide"
                        >
                            {heroImages[selectedIndex].caption}
                        </motion.p>
                    </div>

                    {/* Carousel Controls */}
                    <div className="absolute bottom-12 right-12 z-20 hidden lg:flex items-center gap-8">
                        <div className="flex gap-3">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => emblaApi?.scrollTo(index)}
                                    className={`h-2 rounded-full transition-all duration-500 pointer-events-auto ${selectedIndex === index
                                        ? "w-10 bg-blue-500"
                                        : "w-4 bg-white/40 hover:bg-white/70"
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={scrollPrev}
                                className="h-14 w-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all duration-500 backdrop-blur-md pointer-events-auto"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={scrollNext}
                                className="h-14 w-14 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all duration-500 backdrop-blur-md pointer-events-auto"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </section>

                {/* Legacy Overview Section */}
                <Section>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="grid lg:grid-cols-12 gap-16 items-center"
                    >
                        <div className="lg:col-span-12 xl:col-span-7 space-y-12">
                            <SectionHeader
                                title="Our Journey"
                                badge="Legacy of Two Decades"
                                subtitle="Established with a vision to revolutionize women's education, Sri Sai College for Women has evolved into a premier destination for academic rigor and holistic development."
                            />

                            <div className="flex gap-12">
                                <motion.div variants={itemVariants} className="space-y-2">
                                    <p className="text-brand-gold text-5xl lg:text-7xl font-extrabold">20+</p>
                                    <p className="text-[10px] font-bold text-slate-400 tracking-[0.4em] uppercase">Years of Excellence</p>
                                </motion.div>
                            </div>
                        </div>

                        <div className="lg:col-span-12 xl:col-span-5 relative group">
                            <motion.div
                                variants={itemVariants}
                                className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white relative z-10"
                            >
                                <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=800" alt="Students in Campus" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            </motion.div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px] -z-0" />
                        </div>
                    </motion.div>
                </Section>

                <Section className="relative overflow-hidden py-20 lg:py-28 rounded-[60px]">

                    {/* Background Image ONLY */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/background/bg2.jpg"
                            alt="Background"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/20 to-white/50" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <SectionHeader
                            title="Explore Our Institution"
                            highlight="Our"
                            centered
                            badge="Navigation Hub"
                            dark={false}  // IMPORTANT CHANGE
                            className="text-black mb-12"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { title: "Our History", path: "history", icon: Trophy, desc: "Tracing our roots and milestones." },
                                { title: "Founding Light", path: "founders", icon: Sparkles, desc: "Vision of Sri. Y. Ramachandra." },
                                { title: "Vision & Mission", path: "vision-mission", icon: Heart, desc: "Our core ethical principles." },
                                { title: "Chairman", path: "chairman-message", icon: Users, desc: "Leadership and direction." },
                                { title: "Principal", path: "principal-message", icon: Users, desc: "Academic stewardship." },
                                { title: "Director of Studies", path: "director-of-studies", icon: Briefcase, desc: "Academic leadership." },
                            ].map((item, i) => (
                                <Link key={i} to={item.path} className="h-full">
                                    <InfoCard
                                        title={item.title}
                                        description={item.desc}
                                        icon={item.icon}
                                        className="h-full bg-white shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </Section>
            </div>
        </PageWrapper>
    );
};

export default AboutHome;
