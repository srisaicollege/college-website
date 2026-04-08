import { motion } from "framer-motion";
import {
    ArrowRight,
    BookOpen,
    GraduationCap,
    BarChart3,
    Compass,
    Sparkles,
    CheckCircle2,
    ShieldCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const AcademicsHome = () => {
    const courses = [
        {
            title: 'PUC',
            subtitle: 'Foundation (Science, Commerce)',
            icon: BookOpen,
            path: '/academics/puc',
            desc: 'A robust foundations for professional degree programs and competitive exams.',
            color: 'bg-white',
            iconColor: 'text-brand-gold'
        },
        {
            title: 'BCA',
            subtitle: 'Bachelor of Computer Applications',
            icon: GraduationCap,
            path: '/academics/bca',
            desc: 'Technical proficiency in software, AI, and cloud computing for the digital age.',
            color: 'bg-white',
            iconColor: 'text-brand-gold'
        },
        {
            title: 'B.Com',
            subtitle: 'Bachelor of Commerce',
            icon: ShieldCheck,
            path: '/academics/bcom',
            desc: 'Expertise in finance, accounting, and modern business management.',
            color: 'bg-white',
            iconColor: 'text-brand-gold'
        },
        {
            title: 'B.Com Data Analytics',
            subtitle: 'Specialized Business Analytics',
            icon: BarChart3,
            path: '/academics/bcom-data-analytics',
            desc: 'Modern commerce integrated with big data and business intelligence.',
            color: 'bg-white',
            iconColor: 'text-brand-gold'
        }
    ];

    return (
        <PageWrapper>
            <div className="space-y-16 py-8 max-w-6xl mx-auto overflow-x-hidden">
                {/* Standardized Hero Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative group"
                >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="space-y-6 relative z-10">
                        <motion.div variants={itemVariants} className="flex items-center gap-3">
                            <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                            <p className="text-brand-navy font-black text-xs tracking-[0.4em] uppercase font-display italic">Sri Sai College for Women</p>
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-3xl lg:text-5xl font-black font-display text-brand-navy leading-tight tracking-tight italic">
                            Academic <span className="text-brand-gold">Excellence</span>
                        </motion.h1>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest italic font-display">Industry Oriented</span>
                            </div>
                            <div className="flex items-center gap-2 px-5 py-2 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
                                <Sparkles className="h-4 w-4 text-amber-500" />
                                <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest italic font-display">NEP Aligned</span>
                            </div>
                        </motion.div>
                        <motion.p variants={itemVariants} className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-4xl font-medium  font-display">
                            We offer multi-disciplinary programs designed to transform students into ethically responsible global leaders through innovation, academic rigor, and professional mentoring.
                        </motion.p>
                    </div>
                </motion.div>

                {/* COURSE SECTION WITH BACKGROUND */}
                <div className="relative overflow-hidden py-20 lg:py-28 rounded-[3rem] shadow-sm">

                    {/* BACKGROUND */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/background/bg2.jpg"
                            alt="Background"
                            className="w-full h-full object-cover blur-sm scale-110 opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white/70" />
                    </div>

                    {/* CONTENT */}
                    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

                        {/* OPTIONAL HEADER */}
                        <div className="text-center space-y-4">
                            <p className="text-brand-gold font-black text-xs tracking-[0.3em] uppercase font-display italic">
                                Explore Programs
                            </p>
                            <h2 className="text-3xl lg:text-5xl font-black font-display text-brand-navy italic uppercase">
                                Our Courses
                            </h2>
                            <div className="h-1 w-20 bg-brand-gold mx-auto rounded-full" />
                        </div>

                        {/* GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            {courses.map((course) => (
                                <motion.div
                                    key={course.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportConfig}
                                    variants={itemVariants}
                                >
                                    <Link
                                        to={course.path}
                                        className="group relative block p-6 sm:p-8 
            bg-white/80 backdrop-blur-md 
            border border-white/40 
            rounded-[2rem] 
            transition-all duration-500 
            hover:border-brand-gold hover:shadow-2xl 
            hover:-translate-y-2 active:scale-95 
            overflow-hidden"
                                    >

                                        {/* Glow Effect */}
                                        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                                        {/* ICON */}
                                        <div className={`h-14 w-14 bg-white/70 ${course.iconColor} border border-white/50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-white transition-all`}>
                                            <course.icon className="h-6 w-6" />
                                        </div>

                                        {/* TEXT */}
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="text-xl sm:text-2xl font-black font-display text-brand-navy uppercase italic group-hover:text-brand-gold transition-colors">
                                                    {course.title}
                                                </h3>
                                                <p className="text-brand-gold font-black text-[10px] uppercase tracking-[0.2em]">
                                                    {course.subtitle}
                                                </p>
                                            </div>

                                            <p className="text-slate-600 text-sm leading-relaxed">
                                                {course.desc}
                                            </p>
                                        </div>

                                        {/* FOOTER */}
                                        <div className="mt-6 pt-4 border-t border-white/40 flex items-center justify-between">
                                            <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">
                                                Explore
                                            </span>
                                            <div className="h-9 w-9 bg-white/70 rounded-lg flex items-center justify-center group-hover:bg-brand-gold transition">
                                                <ArrowRight className="h-4 w-4" />
                                            </div>
                                        </div>

                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>

                {/* Academic Ethos Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative bg-brand-navy text-white rounded-[2.5rem] p-8 lg:p-16 overflow-hidden shadow-2xl border-b-[12px] border-brand-gold"
                >
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 space-y-10">
                            <div className="h-16 w-16 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
                                <Compass className="h-8 w-8 text-brand-gold" />
                            </div>
                            <div className="space-y-6">
                                <motion.h2 variants={itemVariants} className="text-3xl lg:text-5xl font-black font-display tracking-tight leading-tight uppercase text-white italic">Our Academic <br /><span className="text-brand-gold">Ethos</span></motion.h2>
                                <motion.p variants={itemVariants} className="text-blue-100/80 text-sm lg:text-base font-bold leading-relaxed max-w-4xl  font-display">
                                    At Sri Sai, we redefine higher education by blending institutional values with modern pedagogy. Our vision is to cultivate an environment where intellectual curiosity meets industrial application.
                                </motion.p>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto flex flex-col items-center lg:items-end gap-10">
                            <motion.div variants={itemVariants} className="text-center lg:text-right space-y-2">
                                <p className="text-brand-gold text-5xl lg:text-7xl font-black font-display italic">100%</p>
                                <p className="text-[10px] font-black text-blue-200 tracking-[0.4em] uppercase font-display  opacity-60">Academic Dedication</p>
                            </motion.div>
                            <motion.div variants={itemVariants} title="enroll in sai-college-women">
                                <Link
                                    to="/contact"
                                    className="w-full lg:w-auto bg-brand-gold text-brand-navy font-black px-8 py-4 rounded-xl hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-yellow-900/20 text-center tracking-[0.3em] uppercase text-[10px] font-display italic active:scale-95"
                                >
                                    Enroll Now
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default AcademicsHome;
