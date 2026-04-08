import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const DirectorOfStudies = () => {
    return (
        <PageWrapper>
            <div className="space-y-20 py-10 max-w-6xl mx-auto">
                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="px-4 lg:px-12"
                >
                    <div className="space-y-8 relative overflow-hidden max-w-4xl mx-auto">
                        <motion.div variants={itemVariants} className="flex items-center gap-3">
                            <div className="h-0.5 w-8 bg-brand-gold rounded-full" />
                            <p className="text-brand-navy font-bold text-[10px] tracking-[0.3em] uppercase font-display italic">Commitment to Excellence</p>
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-3xl lg:text-5xl font-black font-display text-brand-navy leading-tight italic uppercase">
                            Academic <span className="text-brand-gold">Leadership</span> & Professional Growth
                        </motion.h1>

                        <motion.div variants={itemVariants} className="relative mt-8">
                            <Quote className="absolute -top-8 -left-8 h-16 w-16 text-gray-100 opacity-30 -z-10 animate-pulse" />
                            <div className="space-y-6 text-sm lg:text-base text-slate-600 leading-loose font-medium font-display pr-4 lg:pr-8">
                                <p>
                                    Mr. A. Sai Prasad is a distinguished legal and finance professional, currently practicing as an Advocate. A commerce graduate from Vijaya College, he pursued his Chartered Accountancy training under the mentorship of Sri B. P. Rao, Chartered Accountant and former President of the Institute of Chartered Accountants of India (ICAI).
                                </p>
                                <p>
                                    He qualified as a Chartered Accountant in 2006 and later completed his law qualification in 2009 while working under his senior, Sri K. S. Ravi Shankar. In 2012, Mr. Sai Prasad began his independent legal practice and has since been actively representing trade and industry before various departmental authorities and judicial forums including the CESTAT, Revisionary Authority, and the High Court of Karnataka.
                                </p>
                                <p>
                                    Demonstrating a strong commitment to professional excellence, he has also completed prestigious post-qualification certifications such as the Diploma in Information Systems Audit (DISA) from ICAI and Certified Information Systems Auditor (CISA) from ISACA, USA.
                                </p>
                                <p>
                                    Mr. Sai Prasad has contributed significantly to academic and professional forums. He has presented research papers at both national and state-level conferences and regularly contributed articles to the Bangalore Branch of the ICAI Journal. He was also a member of the Research Committee – GST Sub Group of SIRC of ICAI, which worked on recommendations for transitional provisions under GST, and was part of the Bangalore Study Group on GST constituted by the Indirect Tax Committee of ICAI, New Delhi.
                                </p>
                                <p>
                                    In addition to his professional practice, Mr. Sai Prasad actively contributes to academic development as a faculty member for the Post Qualification Course in Indirect Taxes conducted by ICAI, New Delhi. He has also trained departmental officials from Customs, Excise, and Service Tax departments across India, as well as students pursuing CA and ICWA qualifications.
                                </p>
                                <p>
                                    Through his extensive expertise in taxation, law, and professional education, Mr. Sai Prasad continues to contribute significantly to academic excellence and professional development.
                                </p>
                                <div className="pt-6 mt-6 border-t border-gray-200">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center font-bold text-brand-navy">
                                            SP
                                        </div>

                                        <div>
                                            <p className="text-lg font-bold text-brand-navy italic">
                                                Mr. A. Sai Prasad
                                            </p>
                                            <p className="text-xs text-brand-gold uppercase tracking-widest font-semibold">
                                                Director of Studies
                                            </p>
                                            <p className="text-xs text-slate-500">
                                                Sri Sai College for Women
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>


                {/* Final Welcome Banner */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="bg-brand-navy rounded-[3rem] p-8 lg:p-12 overflow-hidden border-b-8 border-brand-gold shadow-xl text-center relative mx-4 lg:mx-12"
                >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                        <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl font-black font-display text-blue-100 italic uppercase leading-tight">
                            Empowering the Next Generation of <br /><span className="text-brand-gold">Professional Leaders</span>
                        </motion.h2>
                        <motion.div variants={itemVariants} className="pt-2">
                            <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default DirectorOfStudies;
