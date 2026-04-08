import { motion } from "framer-motion";
import {
    Trophy,
    Music,
    Heart,
    Sparkles,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const NonAcademicsHome = () => {
    return (
        <PageWrapper>
            <div className="space-y-24 py-8">
                {/* Standardized Hero Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="relative group"
                >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-400/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="space-y-6 relative z-10">
                        <motion.div variants={itemVariants} className="flex items-center gap-3">
                            <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                            <p className="text-brand-navy font-black text-xs tracking-[0.4em] uppercase font-display italic">Extracurricular Excellence</p>
                        </motion.div>
                        <motion.h1 variants={itemVariants} className="text-3xl lg:text-6xl font-black font-display text-brand-navy leading-tight tracking-tight italic">
                            Beyond the <br /><span className="text-brand-gold">Classroom</span>
                        </motion.h1>
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full shadow-sm">
                                <CheckCircle2 className="h-4 w-4 text-blue-600" />
                                <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest italic font-display">Holistic Growth</span>
                            </div>
                            <div className="flex items-center gap-2 px-5 py-2 bg-amber-50 border border-amber-100 rounded-full shadow-sm">
                                <Sparkles className="h-4 w-4 text-amber-500" />
                                <span className="text-[10px] font-black text-gray-700 uppercase tracking-widest italic font-display">Vibrant Campus</span>
                            </div>
                        </motion.div>
                        <motion.p variants={itemVariants} className="text-slate-600 text-base lg:text-sm leading-relaxed max-w-4xl font-medium italic font-display">
                            Life at Sri Sai is a tapestry of cultural gems, athletic discipline, and meaningful service. We provide a platform where passions are ignited and leadership is forged.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Major Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                        {
                            title: 'Sports & Games',
                            desc: 'Fostering athletic discipline and physical well-being through competitive training.',
                            icon: Trophy,
                            path: '/non-academics/sports',
                            image: '/games/game-hero.jpg'
                        },
                        {
                            title: 'Cultural Activities',
                            desc: 'A vibrant stage for creative expression through dance, music, and theater.',
                            icon: Music,
                            path: '/non-academics/cultural',
                            image: '/cultural/cultural-1.jpg'
                        },
                        {
                            title: 'Social Service (NSS)',
                            desc: 'Dedicated to community empowerment and developing social responsibility.',
                            icon: Heart,
                            path: '/non-academics/nss',
                            image: '/nss/nss-4.jpg'
                        },
                        {
                            title: 'Spiritual Life',
                            desc: 'Nurturing inner peace, values, and purpose beyond academic learning.',
                            icon: Sparkles,
                            path: '/non-academics/spiritual',
                            image: '/spiritual/spiritual-1.jpeg'
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            variants={itemVariants}
                        >
                            <Link to={item.path} className="group block space-y-8 bg-white p-6 rounded-[3rem] border border-gray-100 hover:border-brand-gold hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                <div className="aspect-[16/9] md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl border border-white relative">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="space-y-4 px-2">
                                    <div className="flex items-center gap-4">
                                        <div className="h-14 w-14 bg-gray-50 text-brand-gold rounded-2xl flex items-center justify-center border border-gray-100 group-hover:bg-brand-navy transition-all duration-500">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-black text-brand-navy group-hover:text-brand-gold transition-colors font-display italic uppercase leading-tight">{item.title}</h3>
                                    </div>
                                    <p className="text-slate-500 text-sm leading-relaxed font-bold italic font-display">
                                        {item.desc}
                                    </p>
                                    <div className="pt-4 flex items-center justify-between">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-display italic">Explore Activity</span>
                                        <ArrowRight className="h-5 w-5 text-brand-gold transform group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden border-b-[6px] border-brand-gold shadow-xl"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 text-center space-y-6">

                        {/* Quote */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-2xl md:text-4xl lg:text-5xl font-black font-display italic leading-relaxed text-blue-100"
                        >
                            “Education is not just about books, it’s about building
                            <span className="text-brand-gold"> character, confidence,</span> and
                            <span className="text-brand-gold"> community.</span>”
                        </motion.h2>

                        {/* Subtext */}
                        <motion.p
                            variants={itemVariants}
                            className="text-blue-100/70 text-sm lg:text-base font-medium font-display max-w-2xl mx-auto"
                        >
                            At Sri Sai College for Women, we believe in nurturing individuals beyond academics —
                            empowering them to grow, lead, and contribute meaningfully to society.
                        </motion.p>

                    </div>
                </motion.div>
            </div>
        </PageWrapper>
    );
};

export default NonAcademicsHome;
