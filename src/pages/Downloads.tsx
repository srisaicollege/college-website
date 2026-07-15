import { motion } from "framer-motion";
import { FileText, ArrowUpRight, GraduationCap } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/button";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const Downloads = () => {
    const syllabusLink = "https://drive.google.com/drive/folders/1pTrx5TNpmmeDKDoSzb4awg8SRgYAsS3m?usp=drive_link";
    const questionPapersLink = "https://drive.google.com/drive/folders/1Jkvr8pfPAXv-B7i60RkaBuSRy0zrwdmV?usp=drive_link";

    return (
        <PageWrapper>
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12 lg:space-y-16">
                
                {/* Section Header */}
                <div className="relative">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl opacity-50 pointer-events-none" />
                    
                    <SectionHeader
                        badge="Student Resources"
                        title="Academic Downloads"
                        highlight="Downloads"
                        subtitle="Access and download course syllabi and previous years' question papers to assist with your studies and exam preparation."
                        centered={true}
                    />
                </div>

                {/* Cards Container */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    {/* Card 1: Syllabus */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between items-center text-center relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]" />
                        
                        <div className="space-y-6 relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform duration-500">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            
                            <div className="space-y-3">
                                <h3 className="text-xl lg:text-2xl font-black text-brand-navy uppercase font-display italic">
                                    Download <span className="text-brand-gold">Syllabus</span>
                                </h3>
                                <p className="text-sm text-slate-500 font-medium font-sans max-w-sm">
                                    Get the detailed academic syllabus, course guidelines, curriculum structure, and elective options for all offered courses.
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 w-full relative z-10">
                            <a
                                href={syllabusLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full"
                            >
                                <Button className="w-full bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-white py-6 rounded-xl font-black text-[10px] tracking-widest uppercase transition-all duration-300 shadow-lg font-display italic">
                                    Get Syllabus
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Card 2: Question Papers */}
                    <motion.div
                        variants={itemVariants}
                        className="bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-between items-center text-center relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2.5rem]" />
                        
                        <div className="space-y-6 relative z-10 flex flex-col items-center">
                            <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform duration-500">
                                <FileText className="w-8 h-8" />
                            </div>
                            
                            <div className="space-y-3">
                                <h3 className="text-xl lg:text-2xl font-black text-brand-navy uppercase font-display italic">
                                    Question <span className="text-brand-gold">Papers</span>
                                </h3>
                                <p className="text-sm text-slate-500 font-medium font-sans max-w-sm">
                                    Access a comprehensive repository of previous years' university and model question papers to boost your exam practice.
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 w-full relative z-10">
                            <a
                                href={questionPapersLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full"
                            >
                                <Button className="w-full bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-white py-6 rounded-xl font-black text-[10px] tracking-widest uppercase transition-all duration-300 shadow-lg font-display italic">
                                    Get Question Papers
                                    <ArrowUpRight className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default Downloads;
