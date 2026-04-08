import { HeartPulse, Users, ShieldCheck, GraduationCap, CheckCircle, CheckCircle2, Sparkles, Briefcase } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { Link } from "react-router-dom";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import InfoCard from "@/components/ui/InfoCard";

const Welfare = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const services = [
        {
            title: 'Health & Wellness',
            desc: 'Access to on-campus medical checkups and dedicated mental health counselling services.',
            icon: HeartPulse,
            color: "text-rose-600",
            bg: "bg-rose-50"
        },
        {
            title: 'Scholarships',
            desc: 'Financial assistance for meritorious students and those from economically weaker sections.',
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: 'Safety First',
            desc: 'A secure, CCTV-monitored campus with a dedicated 24/7 security team.',
            icon: ShieldCheck,
            color: "text-emerald-600",
            bg: "bg-emerald-50"
        },
        {
            title: 'Career Growth',
            desc: 'Training programs designed to enhance employability and professional etiquette.',
            icon: GraduationCap,
            color: "text-amber-600",
            bg: "bg-amber-50"
        }
    ];

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-16 pb-20"
        >
            {/* Hero Section */}
            {/* <motion.div variants={itemVariants} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 border border-brand-gold/20 rounded-full">
                    <p className="text-brand-gold font-black text-[10px] tracking-[0.2em] uppercase">Student Services</p>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-[#101828] leading-[1.1] tracking-tight italic">
                    Student <br />
                    <span className="text-brand-gold">Welfare</span>
                </h1>
                <p className="text-gray-500 text-lg lg:text-xl max-w-3xl leading-relaxed font-medium">
                    We prioritize the safety, mental health, and professional growth of our students. Sri Sai College for Women provides a nurturing environment where every student can thrive.
                </p>
            </motion.div> */}

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                className="relative group"
            >
                {/* Background Glow */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-6 relative z-10">

                    {/* Top Tag */}
                    <motion.div variants={itemVariants} className="flex items-center gap-3">
                        <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                        <p className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic">
                            Student Services
                        </p>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl lg:text-5xl font-black font-display text-[#101828] leading-tight tracking-tight italic"
                    >
                        Student <span className="text-brand-gold">Welfare</span>
                    </motion.h1>

                    {/* Feature Pills (optional but matches design system) */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
                            <CheckCircle2 className="h-4 w-4 text-blue-600" />
                            <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest italic font-display">
                                Student Safety
                            </span>
                        </div>

                        <div className="flex items-center gap-2 px-5 py-2 bg-gray-50 border border-gray-100 rounded-full shadow-sm">
                            <Sparkles className="h-4 w-4 text-amber-500" />
                            <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest italic font-display">
                                Growth Focused
                            </span>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-4xl font-medium font-display"
                    >
                        We prioritize the safety, mental health, and professional growth of our students. Sri Sai College for Women provides a nurturing environment where every student can thrive.
                    </motion.p>
                </div>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {services.map((s, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        className="p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all group relative overflow-hidden"
                    >
                        <div className={`h-16 w-16 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <s.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-2xl font-black text-[#101828] mb-3 tracking-tight italic uppercase">{s.title}</h3>
                        <p className="text-gray-500 text-base leading-relaxed font-medium">
                            {s.desc}
                        </p>
                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
                            <s.icon size={80} />
                        </div>
                    </motion.div>
                ))}
            </div>


            {/* Quick Links Section */}
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
                        title="Quick Links"
                        highlight="Quick"
                        centered
                        badge="Navigation Hub"
                        dark={false}
                        className="text-black mb-12"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                        {[
                            { title: "Placement Cell", path: "/student-life/placement", icon: GraduationCap, desc: "Explore career opportunities." },
                            { title: "Anti-Ragging", path: "/student-life/anti-ragging", icon: ShieldCheck, desc: "Our commitment to safety." },
                            { title: "Student Welfare", path: "/student-life", icon: HeartPulse, desc: "Holistic student support." },
                            { title: "Admissions", path: "/admissions", icon: Sparkles, desc: "Join our community." },
                            { title: "Infrastructure", path: "/infrastructure", icon: Briefcase, desc: "Our world-class facilities." },
                            { title: "Contact Us", path: "/contact", icon: Users, desc: "Get in touch with us." },
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

            {/* Commitment Section */}
            <motion.div variants={itemVariants} className="bg-brand-navy rounded-[3rem] p-10 lg:p-20 text-white overflow-hidden relative shadow-2xl shadow-brand-navy/20 group">
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:translate-x-1/3 transition-transform duration-1000" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                            <CheckCircle className="h-4 w-4 text-brand-gold" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Our Commitment</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl text-blue-100 tracking-tight leading-[1.1] italic uppercase">
                            Committed to <br className="hidden lg:block" />
                            <span className="text-brand-gold italic">Your</span> Success
                        </h2>
                        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed max-w-2xl font-medium">
                            Our student welfare committee works tirelessly to ensure that your time at Sri Sai College is safe, productive, and memorable.
                        </p>
                    </div>
                </div>
            </motion.div>

        </motion.div>
    );
};

export default Welfare;
