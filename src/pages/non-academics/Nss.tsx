import { motion } from "framer-motion";
import { Heart, Users, Globe, CheckCircle2 } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const Nss = () => {
    const highlights = [
        { 
            title: 'Blood Donation Camps', 
            desc: 'Critical life-saving drives in collaboration with regional blood banks and hospitals.', 
            icon: Heart 
        },
        { 
            title: 'Rural Development', 
            desc: 'Sustainable village adoption programs focusing on hygiene, literacy, and health awareness.', 
            icon: Globe 
        },
        { 
            title: 'Swachh Bharat', 
            desc: 'Intensive cleanliness drives and environmental sustainability projects across Bengaluru.', 
            icon: CheckCircle2 
        }
    ];

    return (
        <PageWrapper>
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24 py-8 sm:py-10 lg:py-12">

                {/* HERO SECTION */}
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
                                    Service Above Self
                                </p>
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-display text-brand-navy leading-tight tracking-tight italic uppercase"
                            >
                                NSS <span className="text-brand-gold">Unit</span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-slate-600 text-base sm:text-lg leading-relaxed font-display max-w-xl mx-auto lg:mx-0"
                            >
                                "Not Me, But You." Our National Service Scheme (NSS) unit is dedicated to fostering social responsibility, 
                                community engagement, and character building through active service.
                            </motion.p>
                        </div>

                        {/* IMAGE */}
                        <motion.div
                            variants={itemVariants}
                            className="w-full max-w-md lg:max-w-xl mx-auto"
                        >
                            <div className="aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-6 lg:border-8 border-white relative group">
                                <img
                                    src="/nss/nss-1.jpeg"
                                    alt="NSS Volunteers"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* HIGHLIGHTS SECTION */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    variants={containerVariants}
                    className="space-y-10"
                >
                    <motion.div variants={itemVariants} className="text-center space-y-4">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display text-brand-navy uppercase italic">
                            Our Community <span className="text-brand-gold">Impact</span>
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto">
                            Bridging the gap between academic learning and grassroots community needs.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                    </div>
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
                            Service <span className="text-brand-gold">Moments</span>
                        </h2>
                        <p className="text-slate-500 max-w-xl mx-auto font-display italic text-center">
                            Capturing the spirit of volunteering and community service.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {/* BIG IMAGE */}
                        <motion.div
                            variants={itemVariants}
                            className="relative group overflow-hidden rounded-[2rem] lg:rounded-[3rem]"
                        >
                            <img
                                src="/nss/nss-2.jpeg"
                                alt="NSS Activity 1"
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
                                    src="/nss/nss-3.jpeg"
                                    alt="NSS Activity 2"
                                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white font-black text-sm uppercase italic font-display">Community Outreach</p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="relative group overflow-hidden rounded-[2rem]"
                            >
                                <img
                                    src="/nss/nss-4.jpg"
                                    alt="NSS Activity 3"
                                    className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-white font-black text-sm uppercase italic font-display">Student Volunteers</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* JOIN THE MOVEMENT / MISSION SECTION */}
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
                            <Users className="h-6 w-6 text-brand-gold" />
                        </motion.div>

                        {/* TEXT */}
                        <div className="space-y-4">
                            <motion.h2
                                variants={itemVariants}
                                className="text-2xl sm:text-3xl lg:text-5xl text-blue-100 font-black font-display tracking-tight uppercase italic leading-none"
                            >
                                Join the <br />
                                <span className="text-brand-gold">Movement</span>
                            </motion.h2>

                            <motion.p
                                variants={itemVariants}
                                className="text-blue-100/80 font-medium font-display text-sm lg:text-base leading-relaxed max-w-xl mx-auto lg:mx-0"
                            >
                                Become part of a legacy of service. NSS offers a platform to develop 
                                leadership skills while making a tangible difference in society.
                            </motion.p>
                        </div>

                    </div>
                </motion.div>

            </div>
        </PageWrapper>
    );
};

export default Nss;
