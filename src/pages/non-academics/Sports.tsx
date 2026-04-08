import { motion } from "framer-motion";
import {
    Trophy,
    Target,
    Zap,
    Rocket,
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import {
    containerVariants,
    itemVariants,
    viewportConfig,
} from "@/lib/motion";

const Sports = () => {
    const highlights = [
        {
            title: "Regular Practice",
            desc: "Structured training sessions for all skill levels.",
            icon: Zap,
        },
        {
            title: "Tournaments",
            desc: "Active participation in university-level competitions.",
            icon: Trophy,
        },
        {
            title: "Team Strategy",
            desc: "Focus on coordination and leadership skills.",
            icon: Target,
        },
    ];

    return (
        <PageWrapper>
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24 py-8 sm:py-10 lg:py-12">

                {/* HERO */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative"
                >
                    <div className="absolute -top-10 -left-10 w-32 sm:w-40 h-32 sm:h-40 bg-brand-gold/5 rounded-full blur-3xl opacity-50" />

                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative z-10">

                        {/* TEXT */}
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center justify-center lg:justify-start gap-3"
                            >
                                <div className="h-1 w-10 bg-brand-gold rounded-full" />
                                <p className="text-brand-navy font-black text-[10px] sm:text-xs tracking-[0.3em] uppercase font-display italic">
                                    Athletic Excellence
                                </p>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display text-brand-navy leading-tight tracking-tight italic uppercase"
                            >
                                THROW<span className="text-brand-gold">BALL</span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-slate-600 text-base sm:text-lg leading-relaxed font-display max-w-xl mx-auto lg:mx-0"
                            >
                                Throwball holds a special place on our campus, fostering teamwork,
                                discipline, and a healthy competitive spirit.
                            </motion.p>
                        </div>

                        {/* IMAGE */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full max-w-md lg:max-w-xl mx-auto"
                        >
                            <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-6 lg:border-8 border-white relative group">
                                <img
                                    src="/games/game-hero.jpg"
                                    alt="Throwball"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* HIGHLIGHTS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {highlights.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-100 space-y-5 hover:border-brand-gold hover:shadow-xl transition-all duration-300"
                        >
                            <div className="h-14 w-14 bg-gray-50 text-brand-gold rounded-xl flex items-center justify-center border">
                                <item.icon className="h-6 w-6" />
                            </div>

                            <div>
                                <h4 className="font-black text-brand-navy text-lg uppercase italic font-display">
                                    {item.title}
                                </h4>
                                <p className="text-slate-500 text-sm mt-2 font-display">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* GALLERY SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="space-y-10"
                >
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-brand-navy uppercase italic">
                            Game <span className="text-brand-gold">Moments</span>
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            Capturing the energy, teamwork, and passion on the field.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                        {/* BIG IMAGE */}
                        <motion.div
                            variants={itemVariants}
                            className="relative group overflow-hidden rounded-[2rem] lg:rounded-[3rem]"
                        >
                            <img
                                src="/games/game-1.jpeg"
                                alt="Throwball match"
                                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:h-full group-hover:scale-105 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </motion.div>

                        {/* SIDE IMAGES */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">

                            <motion.div
                                variants={itemVariants}
                                className="relative group overflow-hidden rounded-[2rem]"
                            >
                                <img
                                    src="/games/game-2.jpeg"
                                    alt="Team practice"
                                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="relative group overflow-hidden rounded-[2rem]"
                            >
                                <img
                                    src="/games/game-3.jpeg"
                                    alt="Team coordination"
                                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            </motion.div>

                        </div>
                    </div>
                </motion.div>

                {/* MISSION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-16 overflow-hidden relative border-b-[8px] border-brand-gold shadow-xl"
                >
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                    {/* CONTENT */}
                    <div className="relative z-10 text-center lg:text-left space-y-10">

                        {/* ICON */}
                        <motion.div
                            variants={itemVariants}
                            className="h-14 w-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 mx-auto lg:mx-0"
                        >
                            <Rocket className="h-6 w-6 text-brand-gold" />
                        </motion.div>

                        {/* TEXT */}
                        <div className="space-y-4">
                            <motion.h2
                                variants={itemVariants}
                                className="text-2xl sm:text-3xl lg:text-5xl text-blue-100 font-black font-display tracking-tight uppercase italic leading-none"
                            >
                                Our <br />
                                <span className="text-brand-gold">Mission</span>
                            </motion.h2>

                            <motion.p
                                variants={itemVariants}
                                className="text-blue-100/80 font-medium font-display text-sm lg:text-base leading-relaxed max-w-xl mx-auto lg:mx-0"
                            >
                                To promote physical fitness and sportsmanship through student
                                participation, teamwork, and continuous skill development.
                            </motion.p>
                        </div>

                        {/* LIST */}
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                            {[
                                "Training",
                                "Skill Growth",
                                "Team Spirit",
                                "Healthy Life",
                            ].map((item, i) => (
                                <motion.span
                                    key={i}
                                    variants={itemVariants}
                                    className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-bold tracking-wide uppercase"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>

                    </div>
                </motion.div>
                
            </div>
        </PageWrapper>
    );
};

export default Sports;