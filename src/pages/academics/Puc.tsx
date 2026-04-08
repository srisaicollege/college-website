import { motion } from "framer-motion";
import {
    FlaskConical,
    Calculator,
    Microscope,
    Cpu,
    Target,
    Zap,
    Rocket,
    CheckCircle2,
    ArrowRight,
    Landmark,
    BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const Puc = () => {
    const scienceOverview = {
        title: "Department of Science",
        description: "The Department of Science focuses on developing scientific knowledge, analytical thinking, and research-oriented learning. The department aims to cultivate curiosity, innovation, and practical skills among students to prepare them for careers in science, technology, medicine, and research."
    };

    const scienceCombinations = [
        {
            id: "pcmb",
            title: "PCMB",
            subtitle: "(Physics, Chemistry, Mathematics, Biology)",
            icon: Microscope,
            vision: "To provide a strong scientific foundation for students aspiring to pursue careers in medicine, research, biotechnology, and other life sciences.",
            mission: [
                "To deliver quality science education through theoretical and practical learning.",
                "To develop scientific temperament, curiosity, and analytical thinking.",
                "To prepare students for competitive examinations and higher education in science and medical fields."
            ],
            objectives: [
                "To build strong conceptual knowledge in physics, chemistry, mathematics, and biology.",
                "To develop laboratory skills and scientific research orientation.",
                "To prepare students for professional courses such as medicine, biotechnology, pharmacy, and life sciences."
            ]
        },
        {
            id: "pcmcs",
            title: "PCMCs",
            subtitle: "(Physics, Chemistry, Mathematics, Computer Science)",
            icon: Cpu,
            vision: "To nurture technically skilled students with strong foundations in science and computing, preparing them for careers in engineering, technology, and innovation.",
            mission: [
                "To provide integrated knowledge in physics, chemistry, mathematics, and computer science.",
                "To develop computational thinking and problem-solving abilities.",
                "To encourage innovation and technological learning."
            ],
            objectives: [
                "To build strong foundations in scientific and computational concepts.",
                "To develop programming, analytical, and logical reasoning skills.",
                "To prepare students for careers in engineering, information technology, data science, and related fields."
            ]
        }
    ];

    const commerceOverview = {
        title: "Department of Commerce",
        description: "The Department of Commerce aims to develop competent professionals equipped with strong business knowledge, analytical skills, and ethical values. The department provides a strong foundation in commerce, management, and entrepreneurship while preparing students for higher education and professional careers in business, finance, and corporate sectors.",
        vision: "To nurture responsible and competent commerce graduates who possess strong business acumen, ethical values, and leadership qualities to contribute effectively to the economic and social development of society.",
        mission: [
            "To provide quality commerce education that integrates theoretical knowledge with practical application.",
            "To equip students with essential business, financial, and entrepreneurial skills.",
            "To encourage analytical thinking, innovation, and leadership abilities.",
            "To prepare students for higher education and professional courses in commerce and management."
        ]
    };

    const commerceCombinations = [
        {
            id: "ceba",
            title: "CEBA",
            subtitle: "(Computer Science, Economics, Business Studies, Accountancy)",
            icon: Cpu,
            vision: "To develop commerce students with strong technological understanding and analytical skills who can effectively adapt to the evolving digital business environment.",
            mission: [
                "To integrate commerce education with computer applications and modern business practices.",
                "To build strong foundations in economics, business management, and accounting.",
                "To equip students with technological skills relevant to modern organizations.",
                "To develop analytical and problem-solving abilities for business decision-making."
            ],
            objectives: [
                "To provide strong conceptual knowledge in accounting, business studies, economics, and computer science.",
                "To enhance digital literacy and computer application skills for business operations.",
                "To prepare students for careers in business management, banking, accounting, and IT-enabled services.",
                "To build a foundation for higher education in commerce, management, and computer applications."
            ]
        },
        {
            id: "seba",
            title: "SEBA",
            subtitle: "(Statistics, Economics, Business Studies, Accountancy)",
            icon: BarChart3,
            vision: "To develop analytical thinkers with strong statistical and financial knowledge capable of making data-driven decisions in business and economic environments.",
            mission: [
                "To provide a strong foundation in statistics, economics, and commerce.",
                "To enhance analytical and quantitative reasoning abilities.",
                "To prepare students for careers that require statistical and business analysis skills.",
                "To encourage research-oriented learning and data interpretation."
            ],
            objectives: [
                "To develop statistical and analytical skills required in business decision-making.",
                "To provide strong knowledge in accounting, economics, and business studies.",
                "To train students in interpreting and analyzing business data.",
                "To prepare students for careers in banking, finance, analytics, and research."
            ]
        }
    ];

    return (
        <PageWrapper>
            <div className="space-y-24 py-12 max-w-6xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative group lg:mb-12"
                >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="space-y-6 relative z-10 text-center lg:text-left">
                        <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3">
                            <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                            <p className="text-brand-navy font-black text-[10px] lg:text-xs tracking-[0.4em] uppercase font-display italic">Academic Excellence</p>
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-3xl lg:text-6xl font-black font-display text-brand-navy leading-tight tracking-tight italic uppercase">
                            PUC <span className="text-brand-gold">Programs</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className="text-slate-500 text-sm lg:text-base leading-relaxed max-w-4xl font-medium font-display mx-auto lg:mx-0">
                            Empowering the next generation of innovators, scientists, and business leaders through a rigorous Pre-University curriculum.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Science Stream Section */}
                <div id="science-stream" className="scroll-mt-32 space-y-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="relative bg-brand-navy text-white rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 uppercase tracking-widest text-[9px] lg:text-[10px] font-black italic">
                                    <FlaskConical className="h-4 w-4 text-brand-gold" />
                                    Science stream
                                </div>
                                <h2 className="text-2xl lg:text-4xl font-black font-display italic leading-tight text-blue-100">{scienceOverview.title}</h2>
                                <p className="text-blue-100/70 text-sm lg:text-base font-medium font-display leading-relaxed">
                                    {scienceOverview.description}
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="relative aspect-square lg:aspect-auto h-full min-h-[200px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden p-6 flex flex-col justify-center gap-4 shadow-inner italic">
                                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 transition-all hover:bg-white/20">
                                    <div className="h-10 w-10 bg-brand-gold rounded-xl flex items-center justify-center">
                                        <Target className="h-5 w-5 text-brand-navy" />
                                    </div>
                                    <p className="text-xs font-black text-brand-gold uppercase tracking-[0.2em]">
                                        Innovation Driven
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 transition-all hover:bg-white/20">
                                    <div className="h-10 w-10 bg-brand-gold rounded-xl flex items-center justify-center">
                                        <Zap className="h-5 w-5 text-brand-navy" />
                                    </div>
                                    <p className="text-xs font-black text-brand-gold uppercase tracking-[0.2em]">
                                        Analytical Thinking
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-2xl border border-white/20 transition-all hover:bg-white/20">
                                    <div className="h-10 w-10 bg-brand-gold rounded-xl flex items-center justify-center">
                                        <Rocket className="h-5 w-5 text-brand-navy" />
                                    </div>
                                    <p className="text-xs font-black text-brand-gold uppercase tracking-[0.2em]">
                                        Research Oriented
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-16 lg:gap-24">
                        {scienceCombinations.map((comb, index) => (
                            <motion.section
                                key={comb.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportConfig}
                                variants={containerVariants}
                                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="lg:w-1/2 space-y-8">
                                    <motion.div variants={itemVariants} className="space-y-3">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm">
                                                <comb.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl lg:text-4xl font-black font-display text-brand-navy tracking-tight italic leading-none">{comb.title}</h3>
                                                <p className="text-brand-gold font-black text-[9px] lg:text-[10px] tracking-[0.3em] uppercase italic mt-1">{comb.subtitle}</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="p-6 lg:p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4 relative overflow-hidden group">
                                        <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic">
                                            <Target className="h-3 w-3 text-brand-gold" />
                                            Vision
                                        </h4>
                                        <p className="text-slate-600 text-sm lg:text-base font-bold leading-relaxed italic font-display">
                                            {comb.vision}
                                        </p>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-6">
                                        <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic px-1">
                                            <CheckCircle2 className="h-3 w-3 text-brand-gold" />
                                            Mission
                                        </h4>
                                        <div className="grid gap-3">
                                            {comb.mission.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 p-4 bg-white border border-gray-50 rounded-2xl shadow-sm">
                                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                                                    <p className="text-slate-500 text-[13px] lg:text-sm font-bold  font-display">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.div
                                    variants={itemVariants}
                                    className="lg:w-1/2 w-full relative bg-gradient-to-br from-brand-navy to-[#1c2c47] text-white p-8 lg:p-10 rounded-[2rem] shadow-2xl flex flex-col justify-center space-y-8 overflow-hidden border-b-[12px] border-brand-gold"
                                >
                                    {/* Glow background */}
                                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

                                    <div className="relative z-10 space-y-8">

                                        <div className="space-y-1">
                                            <p className="text-brand-gold font-black text-[9px] tracking-[0.4em] uppercase italic">
                                                Program Essentials
                                            </p>

                                            <h3 className="text-xl lg:text-2xl font-black font-display tracking-tight italic uppercase text-blue-200">
                                                Objectives
                                            </h3>
                                        </div>

                                        <div className="space-y-5">
                                            {comb.objectives.map((obj, idx) => (
                                                <div key={idx} className="flex gap-4 items-start group">

                                                    <div className="mt-0.5 flex-shrink-0 h-8 w-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center">
                                                        <Calculator className="h-4 w-4 text-brand-gold" />
                                                    </div>

                                                    <p className="text-white text-sm lg:text-base font-bold leading-relaxed italic font-display">
                                                        {obj}
                                                    </p>

                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </motion.div>
                            </motion.section>
                        ))}
                    </div>
                </div>

                {/* Commerce Stream Section */}
                <div id="commerce-stream" className="scroll-mt-32 space-y-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="relative bg-brand-navy text-white rounded-[2.5rem] p-8 lg:p-12 overflow-hidden shadow-xl"
                    >
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] bg-brand-gold/10 rounded-full blur-[80px] lg:blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 uppercase tracking-widest text-[9px] lg:text-[10px] font-black italic">
                                    <Landmark className="h-4 w-4 text-brand-gold" />
                                    Commerce stream
                                </div>
                                <h2 className="text-2xl lg:text-4xl font-black font-display italic text-blue-100 leading-tight">{commerceOverview.title}</h2>
                                <p className="text-blue-100/70 text-sm lg:text-base font-medium font-display leading-relaxed">
                                    {commerceOverview.description}
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="relative w-full min-h-[180px] lg:min-h-[220px] bg-white/5 rounded-3xl border border-white/10 overflow-hidden p-6 flex flex-col justify-center gap-4 shadow-inner italic">
                                <div className="space-y-4">
                                    <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] italic">
                                        <Target className="h-3 w-3 text-white" />
                                        Vision
                                    </h4>
                                    <p className="text-white text-[13px] lg:text-sm font-bold italic font-display leading-relaxed">
                                        {commerceOverview.vision}
                                    </p>
                                    <div className="h-px bg-white/10 w-full" />
                                    <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-gold uppercase tracking-[0.3em] italic">
                                        <CheckCircle2 className="h-3 w-3 text-white" />
                                        Our Mission
                                    </h4>
                                    <div className="space-y-2">
                                        {commerceOverview.mission.map((item, idx) => (
                                            <div key={idx} className="flex gap-3 items-center">
                                                <div className="h-1 w-1 rounded-full bg-brand-gold" />
                                                <p className="text-blue-100/80 text-[10px] font-bold font-display  uppercase tracking-wider">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-16 lg:gap-24">
                        {commerceCombinations.map((comb, index) => (
                            <motion.section
                                key={comb.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportConfig}
                                variants={containerVariants}
                                className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="lg:w-1/2 space-y-8">
                                    <motion.div variants={itemVariants} className="space-y-3">
                                        <div className="flex items-center gap-4">
                                            <div className="h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm">
                                                <comb.icon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl lg:text-4xl font-black font-display text-brand-navy tracking-tight italic leading-none">{comb.title}</h3>
                                                <p className="text-brand-gold font-black text-[9px] lg:text-[10px] tracking-[0.3em] uppercase italic  mt-1">{comb.subtitle}</p>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="p-6 lg:p-8 bg-gray-50 rounded-3xl border border-gray-100 space-y-4 relative overflow-hidden group">
                                        <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic">
                                            <Target className="h-3 w-3 text-brand-gold" />
                                            Vision
                                        </h4>
                                        <p className="text-slate-600 text-sm lg:text-base font-bold leading-relaxed italic font-display">
                                            {comb.vision}
                                        </p>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="space-y-6">
                                        <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic px-1">
                                            <CheckCircle2 className="h-3 w-3 text-brand-gold" />
                                            Mission
                                        </h4>
                                        <div className="grid gap-3">
                                            {comb.mission.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 p-4 bg-white border border-gray-50 rounded-2xl shadow-sm">
                                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-gold shrink-0" />
                                                    <p className="text-slate-500 text-[13px] lg:text-sm font-bold  font-display">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                <motion.div
                                    variants={itemVariants}
                                    className="lg:w-1/2 w-full relative bg-gradient-to-br from-brand-navy to-[#1c2c47] text-white p-8 lg:p-10 rounded-[2rem] shadow-2xl flex flex-col justify-center space-y-8 overflow-hidden border-b-[12px] border-brand-gold"
                                >
                                    {/* Glow Background */}
                                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/3 translate-x-1/3" />

                                    <div className="relative z-10 space-y-8">

                                        <div className="space-y-1">
                                            <p className="text-brand-gold font-black text-[9px] tracking-[0.4em] uppercase italic">
                                                Professional Growth
                                            </p>

                                            <h3 className="text-xl lg:text-2xl font-black font-display tracking-tight italic uppercase text-blue-200">
                                                Objectives
                                            </h3>
                                        </div>

                                        <div className="space-y-5">
                                            {comb.objectives.map((obj, idx) => (
                                                <div key={idx} className="flex gap-4 items-start group">

                                                    <div className="mt-0.5 flex-shrink-0 h-8 w-8 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 flex items-center justify-center">
                                                        <BarChart3 className="h-4 w-4 text-brand-gold" />
                                                    </div>

                                                    <p className="text-white text-sm lg:text-base font-bold leading-relaxed italic font-display">
                                                        {obj}
                                                    </p>

                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </motion.div>
                            </motion.section>
                        ))}
                    </div>
                </div>

                {/* Admissions CTA Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-16 overflow-hidden relative border-b-[8px] border-brand-gold shadow-xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 text-center lg:text-left space-y-10">
                        <div className="space-y-4">
                            <motion.h3 variants={itemVariants} className="text-2xl lg:text-5xl font-black font-display tracking-tight uppercase italic leading-none text-blue-100">Enquiry  for <br /><span className="text-brand-gold">Admissions</span></motion.h3>
                            <motion.p variants={itemVariants} className="text-blue-100/80 text-sm lg:text-lg font-bold max-w-2xl italic font-display">
                                Begin your journey towards excellence. Explore our admission process or reach out to our counselors today.
                            </motion.p>
                        </div>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <motion.div variants={itemVariants}>
                                <Link
                                    to="/admissions"
                                    className="px-8 py-4 bg-brand-gold text-brand-navy rounded-xl font-black text-[10px] tracking-[0.3em] uppercase flex items-center gap-3 transition-all font-display active:scale-95 shadow-xl shadow-yellow-900/40 hover:bg-white"
                                >
                                    Admission Desk <ArrowRight className="h-4 w-4" />
                                </Link>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Link
                                    to="/contact"
                                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-black text-[10px] tracking-[0.3em] uppercase flex items-center gap-3 transition-all font-display active:scale-95 hover:bg-white hover:text-brand-navy shadow-lg shadow-black/20"
                                >
                                    Contact Us <ArrowRight className="h-4 w-4" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default Puc;
