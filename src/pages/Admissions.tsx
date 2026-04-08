import { motion } from "framer-motion";
import {
    ArrowRight,
    FileText,
    GraduationCap,
    UserCheck,
    HelpCircle,
    PhoneCall,
    Target,
    CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const steps = [
    {
        step: "01",
        title: "Consultation",
        desc: "Connect with our academic counsellors to explore courses, understand career paths, and experience our campus environment.",
        icon: HelpCircle
    },
    {
        step: "02",
        title: "Application",
        desc: "Submit your admission application with the required academic documents through our streamlined admission process.",
        icon: FileText
    },
    {
        step: "03",
        title: "Evaluation",
        desc: "Our admissions committee reviews your academic records and evaluates eligibility for the selected program.",
        icon: UserCheck
    },
    {
        step: "04",
        title: "Enrollment",
        desc: "Complete the admission formalities and confirm your place in our academic community.",
        icon: GraduationCap
    }
];

const Admissions = () => {
    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-16 lg:space-y-24">

                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative"
                >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl opacity-50" />

                    <div className="space-y-5 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">

                        <motion.div
                            variants={itemVariants}
                            className="flex items-center justify-center lg:justify-start gap-3"
                        >
                            <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                            <p className="text-brand-navy font-black text-[10px] lg:text-xs tracking-[0.35em] uppercase font-display italic">
                                Academic Excellence
                            </p>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl lg:text-6xl font-black font-display text-brand-navy italic uppercase tracking-tight"
                        >
                            Begin Your <span className="text-brand-gold">Journey</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-slate-500 text-sm lg:text-base leading-relaxed font-medium  font-display"
                        >
                            Admissions to the College are conducted in accordance with the statutes, ordinances, rules, and regulations prescribed from time to time by the respective regulatory and affiliating authorities
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 pt-3 justify-center lg:justify-start"
                        >
                            <Link to="/contact">
                                <Button className="bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-white px-7 py-4 rounded-xl font-black text-[10px] tracking-widest uppercase transition-all duration-300 shadow-lg font-display italic">
                                    Apply Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>


                            <a href="tel:+919986408779">
                                <Button
                                    variant="outline"
                                    className="px-7 py-4 rounded-xl font-black text-[10px] tracking-widest uppercase border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-300 font-display italic"
                                >
                                    <PhoneCall className="mr-2 h-4 w-4" />
                                    Talk to Counselor
                                </Button>
                            </a>
                        </motion.div>

                    </div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-5"
                >
                    <h3 className="text-lg font-bold text-brand-navy uppercase tracking-wide">
                        Governed By
                    </h3>

                    <div className="space-y-3">
                        {[
                            "Board of Pre-University Education",
                            "Bangalore University",
                            "Karnataka State Open University",
                            "Kuvempu University"
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100"
                            >
                                <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                                <p className="text-sm text-slate-700 font-medium">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>


                {/* BOTTOM NOTE - Redesigned */}
                <motion.div
                    variants={itemVariants}
                    className="mt-12 relative overflow-hidden rounded-[2rem] border border-brand-gold/20 bg-gradient-to-br from-brand-navy via-brand-navy to-black text-white p-6 lg:p-10 shadow-xl"
                >
                    {/* Glow Effect */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/20 blur-[100px] opacity-60 pointer-events-none" />

                    <div className="relative z-10 space-y-5">

                        {/* Label */}
                        <div className="flex items-center gap-3">
                            <div className="h-1 w-10 bg-brand-gold rounded-full" />
                            <p className="text-brand-gold text-[10px] uppercase tracking-[0.35em] font-black font-display italic">
                                Important Note
                            </p>
                        </div>

                        {/* Content */}
                        <p className="text-blue-100 text-sm lg:text-base leading-relaxed font-medium font-display max-w-2xl">
                            Prospective students are advised to carefully review the eligibility
                            criteria and admission procedures applicable to their chosen program
                            before applying.
                        </p>

                        {/* Highlight Points */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            {[
                                "Check Eligibility",
                                "Review Guidelines",
                                "Follow Official Process"
                            ].map((item, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest font-bold text-blue-100 backdrop-blur-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Admission Process Section */}
                <div className="relative overflow-hidden py-24 lg:py-32 rounded-[3rem] shadow-sm">
                    {/* Background Layer */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/background/bg2.jpg"
                            alt="Background"
                            className="w-full h-full object-cover blur-sm scale-110 opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/60" />                    </div>

                    <div className="relative z-10 container max-w-7xl mx-auto px-6 space-y-16 lg:space-y-20">
                        {/* Header */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            variants={containerVariants}
                            className="text-center space-y-4"
                        >
                            <motion.p
                                variants={itemVariants}
                                className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic"
                            >
                                Simple & Transparent
                            </motion.p>

                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl lg:text-5xl font-black font-display text-brand-navy italic uppercase"
                            >
                                Admission Process
                            </motion.h2>

                            <motion.div variants={itemVariants} className="h-1.5 w-24 bg-brand-gold mx-auto rounded-full" />
                        </motion.div>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={viewportConfig}
                                    variants={containerVariants}
                                    className="h-full"
                                >
                                    <div className="p-8 bg-white/90 backdrop-blur-md border border-white/50 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col gap-6 relative overflow-hidden group">
                                        {/* Glow */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                                        {/* Icon */}
                                        <div className="h-14 w-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center border border-brand-navy/10 text-brand-gold shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-all duration-500">
                                            <step.icon className="h-6 w-6" />
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-black font-display text-brand-navy italic uppercase leading-tight">
                                                {step.title}
                                            </h3>
                                            <p className="text-slate-600 text-sm font-medium leading-relaxed italic font-display">
                                                {step.desc}
                                            </p>
                                        </div>

                                        {/* Bottom */}
                                        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                                            <span className="text-3xl font-black font-display text-brand-navy/60">
                                                {step.step}
                                            </span>
                                            <ArrowRight className="h-5 w-5 text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Eligibility */}
                <div className="relative overflow-hidden py-24 lg:py-32 rounded-[3.5rem] shadow-sm">
                    {/* Background Layer */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/background/home-page-2.jpeg"
                            alt="Background"
                            className="w-full h-full object-cover blur-sm scale-110 opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/20 to-white/50" />
                    </div>

                    <div className="relative z-10 container max-w-7xl mx-auto px-6 space-y-16 lg:space-y-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            variants={containerVariants}
                            className="text-center space-y-4"
                        >
                            <motion.p
                                variants={itemVariants}
                                className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic"
                            >
                                Academic Standards
                            </motion.p>

                            <motion.h2
                                variants={itemVariants}
                                className="text-3xl lg:text-5xl font-black font-display text-brand-navy italic uppercase"
                            >
                                Eligibility Criteria
                            </motion.h2>

                            <motion.div variants={itemVariants} className="h-1.5 w-24 bg-brand-gold mx-auto rounded-full" />
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            <motion.div
                                variants={containerVariants}
                                className="p-8 sm:p-10 lg:p-12 bg-white/95 backdrop-blur-md rounded-[3rem] border border-white/50 space-y-5 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="h-14 w-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center border border-brand-navy/10 text-brand-gold shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-all duration-500">
                                    <Target className="h-6 w-6" />
                                </div>

                                <div className="space-y-3">
                                    <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic">
                                        Pre-University (PUC)
                                    </h4>

                                    <p className="text-slate-600 text-sm lg:text-lg font-bold leading-relaxed italic font-display">
                                        Completion of 10th standard (SSLC / ICSE / CBSE) with a strong academic foundation and commitment to learning.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={containerVariants}
                                className="p-8 sm:p-10 lg:p-12 bg-white/95 backdrop-blur-md rounded-[3rem] border border-white/50 space-y-5 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="h-14 w-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center border border-brand-navy/10 text-brand-gold shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-all duration-500">
                                    <GraduationCap className="h-6 w-6" />
                                </div>

                                <div className="space-y-3">
                                    <h4 className="flex items-center gap-2 text-[10px] font-black text-brand-navy uppercase tracking-[0.3em] italic">
                                        Undergraduate Programs
                                    </h4>

                                    <p className="text-slate-600 text-sm lg:text-lg font-bold leading-relaxed italic font-display">
                                        Completion of 12th standard (PUC / HSC) meeting the eligibility requirements prescribed by the affiliated university.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="bg-brand-navy text-white rounded-[2rem] p-8 sm:p-10 lg:p-16 relative border-b-[6px] border-brand-gold shadow-xl"
                >
                    <div className="space-y-8 text-center lg:text-left">

                        <motion.h3
                            variants={itemVariants}
                            className="text-2xl sm:text-3xl lg:text-5xl font-black font-display uppercase italic text-white"
                        >
                            Start Your <br />
                            <span className="text-brand-gold">Future</span> With Us
                        </motion.h3>

                        <motion.p
                            variants={itemVariants}
                            className="text-blue-100/80 text-sm lg:text-lg font-bold max-w-2xl italic font-display"
                        >
                            Take the first step toward academic excellence and professional success at Sri Sai College for Women.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/contact"
                                className="px-7 py-4 bg-white/5 border border-white/10 rounded-xl font-black text-[10px] tracking-[0.3em] uppercase flex items-center gap-3 transition-all font-display hover:bg-white hover:text-brand-navy"
                            >
                                Contact Admissions <ArrowRight className="h-4 w-4" />
                            </Link>

                        </div>

                    </div>
                </motion.div>

            </div>
        </PageWrapper>
    );
};

export default Admissions;