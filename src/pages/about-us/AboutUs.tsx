import { Target, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const AboutUs = () => {
    return (
        <PageWrapper>
            <div className="flex flex-col">
                {/* Header Section */}
                <section className="bg-brand-navy text-white py-12 px-4 relative overflow-hidden">
                    <div className="container mx-auto text-center space-y-8 relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-3xl lg:text-5xl font-black font-display tracking-tight"
                        >
                            About Sri Sai College <br />
                            <span className="text-brand-gold italic">for Women</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-xs lg:text-sm text-gray-400 max-w-xl mx-auto font-bold uppercase tracking-widest font-display italic"
                        >
                            Empowering Women, Envisioning Future through excellence in education and leadership.
                        </motion.p>
                    </div>
                </section>

                {/* Legacy Section */}
                <section id="legacy" className="py-20 bg-white">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="container max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12"
                    >
                        <motion.div variants={itemVariants} className="lg:w-1/2 space-y-8">
                            <h2 className="text-2xl lg:text-3xl font-black font-display text-brand-navy italic">
                                Legacy of <span className="text-brand-gold">Quality Education</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-slate-600 leading-relaxed text-sm lg:text-base font-medium">
                                    Sri Sai College for Women has been a cornerstone of academic excellence in Bangalore. We believe in holistic development, combining rigorous curriculum with practical exposure to empower women as global leaders of tomorrow.
                                </p>
                                <p className="text-slate-600 leading-relaxed text-sm lg:text-base font-medium">
                                    Our institution is dedicated to creating an environment where intellectual curiosity meets social responsibility, ensuring our students are prepared for the complexities of the modern world.
                                </p>
                            </div>
                            <div className="flex items-center gap-4 pt-4 uppercase tracking-[0.2em] font-display">
                                <div className="text-4xl lg:text-5xl font-black text-brand-gold italic">20+</div>
                                <div className="text-sm font-black text-slate-400 leading-tight">
                                    Years of Academic<br />Excellence
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="lg:w-1/2">
                            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl group border-[6px] border-gray-50 relative">
                                <img
                                    src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000"
                                    alt="College Campus"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-brand-navy/10" />
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Vision & Mission */}
                <section id="vision-mission" className="py-20 bg-gray-50/50">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="container max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        <motion.div variants={itemVariants} className="p-6 lg:p-8 bg-white rounded-3xl shadow-xl shadow-blue-900/5 space-y-4 border border-gray-100 group hover:border-brand-gold transition-colors duration-500">
                            <div className="h-14 w-14 lg:h-16 lg:w-16 bg-brand-navy text-brand-gold rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Eye className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-black font-display text-brand-navy italic uppercase">Our <span className="text-brand-gold">Vision</span></h3>
                            <p className="text-slate-600 leading-relaxed text-xs lg:text-sm font-medium">
                                To be a premier institution of higher education for women, fostering excellence in academics, character building, and social empowerment to create leaders who shape a better world.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="p-6 lg:p-8 bg-white rounded-3xl shadow-xl shadow-blue-900/5 space-y-4 border border-gray-100 group hover:border-brand-gold transition-colors duration-500">
                            <div className="h-14 w-14 lg:h-16 lg:w-16 bg-brand-navy text-brand-gold rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Target className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-black font-display text-brand-navy italic uppercase">Our <span className="text-brand-gold">Mission</span></h3>
                            <p className="text-slate-600 leading-relaxed text-xs lg:text-sm font-medium">
                                To provide quality education through innovative teaching-learning processes, and to nurture talent by providing a supportive environment for personal and professional growth.
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Principal's Message Brief */}
                <section id="principal-message" className="py-20 bg-white">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={viewportConfig}
                        variants={containerVariants}
                        className="container mx-auto px-4 max-w-4xl"
                    >
                        <div className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
                            <motion.div variants={itemVariants} className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-slate-200 shrink-0 border-[6px] border-brand-gold/10 shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                                    alt="Principal"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div variants={itemVariants} className="space-y-8">
                                <div className="text-brand-gold font-black uppercase tracking-[0.4em] text-xs font-display">Principal's Address</div>
                                <blockquote className="text-lg lg:text-xl font-black text-brand-navy leading-tight italic font-display">
                                    "Our mission is to foster an environment where intellectual curiosity meets social responsibility, ensuring our students are prepared for the complexities of the modern world."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="h-px w-12 bg-brand-gold" />
                                    <div>
                                        <div className="font-black text-base lg:text-lg text-brand-navy uppercase font-display italic">Dr. Samuel Joseph</div>
                                        <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Principal, Sri Sai College for Women</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default AboutUs;
