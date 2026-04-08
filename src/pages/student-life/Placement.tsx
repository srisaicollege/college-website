import { motion, type Variants } from 'framer-motion';
import { Briefcase, Building2, TrendingUp, Users, Star, Target } from 'lucide-react';

const placements = [
    {
        year: "2019-20",
        students: 60,
        companies: ["Accenture", "HP", "EY", "HDFC", "Starbucks"],
        roles: ["Accountant Assistant", "Sales Assistant"]
    },
    {
        year: "2020-21",
        students: 65,
        companies: ["Bajaj Allianz", "SBI", "Cognizant", "Axis Bank"],
        roles: ["Financial Analyst", "Audit Assistant"]
    },
    {
        year: "2021-22",
        students: 70,
        companies: ["Bajaj Allianz", "Future Group"],
        roles: ["Admin Assistant"]
    },
    {
        year: "2022-23",
        students: 56,
        companies: ["TATA Motors", "Muthoot Finance", "Accenture"],
        roles: ["Data Analyst", "Insurance Advisor"]
    },
    {
        year: "2023-24",
        students: 70,
        companies: ["Infosys", "Omega Healthcare", "Piramal Finance"],
        roles: ["Business Development", "Billing Executive"]
    },
    {
        year: "2024-25",
        students: 50,
        companies: ["Quess Corp", "Pentagon Space", "Wintech"],
        roles: ["UI Developer", "System Analyst", "Network Admin"]
    }
];

const stats = [
    { label: "Total Placed", value: "370+", icon: Users, color: "brand-navy" },
    { label: "Top recruiters", value: "50+", icon: Building2, color: "brand-gold" },
    { label: "Growth Trend", value: "15% YOY", icon: TrendingUp, color: "brand-navy" },
    { label: "Highest Role", value: "Analyst", icon: Target, color: "brand-gold" }
];

const allCompanies = Array.from(new Set(placements.flatMap(p => p.companies))).sort();

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
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const
        }
    }
};

const Placement = () => {
    return (
        <section className="relative overflow-hidden rounded-[3.5rem] py-24 lg:py-32">
            {/* Background with Blur & Gradient */}
            <div className="absolute inset-0 z-0 text-[0px]">
                <img
                    src="/background/bg1.jpeg"
                    alt="Background"
                    className="h-full w-full object-cover blur-sm scale-110 opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/20 to-white/50" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-3"
                >
                    <span className="text-xs font-black tracking-[0.4em] uppercase text-brand-navy/60">
                        Career Evolution
                    </span>
                    <h1 className="text-4xl lg:text-5xl font-display font-black uppercase italic tracking-tighter text-brand-navy leading-none">
                        <span className="text-brand-gold">Placements</span> & Career <br className="hidden lg:block" /> Opportunities
                    </h1>
                    <p className="text-lg text-brand-slate max-w-2xl mx-auto font-medium">
                        Empowering students with industry-ready careers through strategic partnerships and excellence.
                    </p>
                </motion.div>

                {/* Highlights Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white/95 backdrop-blur-md border border-white/50 p-6 rounded-[2.5rem] shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <stat.icon size={60} />
                            </div>
                            <stat.icon className={`h-6 w-6 mb-4 ${stat.color === 'brand-gold' ? 'text-brand-gold' : 'text-brand-navy'}`} />
                            <h3 className="text-2xl font-display font-black text-brand-navy mb-1">{stat.value}</h3>
                            <p className="text-[10px] font-black uppercase tracking-widest text-brand-slate/60">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Placement Trend Visual - Bar Graph */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative overflow-hidden mb-24 rounded-[3rem]"
                >
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/90 backdrop-blur-xl" />
                    <div className="absolute -top-32 right-0 w-80 h-80 bg-blue-400/10 rounded-full blur-[120px]" />
                    <div className="absolute -bottom-32 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-[120px]" />

                    {/* Container */}
                    <div className="relative z-10 p-10 lg:p-14 border border-white/50 rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                        <div className="flex flex-col lg:flex-row gap-10 lg:items-end">

                            {/* LEFT SIDE */}
                            <div className="lg:w-1/4 space-y-4">
                                <h2 className="text-3xl lg:text-3xl font-black font-display text-brand-navy uppercase">
                                    Placement <span className="text-brand-gold">Trends</span>
                                </h2>
 
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.25em]">
                                    Annual placement growth
                                </p>

                                <div className="h-1 w-16 bg-gradient-to-r from-brand-gold to-yellow-400 rounded-full" />
                            </div>

                            {/* CHART */}
                            <div className="flex-1 flex relative">

                                {(() => {
                                    const maxStudents = Math.max(...placements.map(p => p.students), 1);
                                    const steps = 5;

                                    const yAxisValues = Array.from({ length: steps + 1 }, (_, i) =>
                                        Math.round((maxStudents / steps) * i)
                                    );

                                    return (
                                        <>
                                            {/* Y AXIS */}
                                            <div className="flex flex-col justify-between mr-4 h-72 text-[11px] font-bold text-brand-navy/60">
                                                {yAxisValues.reverse().map((val, i) => (
                                                    <span key={i}>{val}</span>
                                                ))}
                                            </div>

                                            {/* GRAPH AREA */}
                                            <div className="flex-1 relative border-l-2 border-b-2 border-brand-navy/10 flex items-end justify-around px-4 lg:px-8 h-72">

                                                {/* GRID LINES */}
                                                {yAxisValues.map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className="absolute left-0 right-0 border-t border-brand-navy/[0.05]"
                                                        style={{ bottom: `${(i / steps) * 100}%` }}
                                                    />
                                                ))}

                                                {/* BARS */}
                                                {placements.map((p, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="relative flex-1 flex flex-col items-center justify-end h-full px-2 lg:px-4 group max-w-[100px]"
                                                    >
                                                        {/* BAR */}
                                                        <div className="relative w-full flex items-end justify-center h-full">
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                whileInView={{
                                                                    height: `${(p.students / maxStudents) * 100}%`,
                                                                    opacity: 1
                                                                }}
                                                                transition={{
                                                                    duration: 1,
                                                                    delay: idx * 0.1,
                                                                    ease: [0.22, 1, 0.36, 1]
                                                                }}
                                                                className="w-full relative rounded-t-2xl shadow-lg shadow-brand-gold/10 group-hover:shadow-brand-gold/30 transition-all duration-500 overflow-hidden"
                                                            >
                                                                {/* BAR GRADIENT */}
                                                                <div className="absolute inset-0 bg-gradient-to-b from-brand-gold via-brand-gold/90 to-brand-navy/80" />

                                                                {/* SHINE EFFECT */}
                                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                                            </motion.div>
                                                        </div>

                                                        {/* X AXIS LABEL */}
                                                        <div className="absolute -bottom-10 flex flex-col items-center">
                                                            <div className="h-2 w-0.5 bg-brand-navy/20 mb-1" />
                                                            <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-wider text-brand-navy whitespace-nowrap">
                                                                <span className="md:hidden">{p.year.split('-')[1]}</span>
                                                                <span className="hidden md:inline">{p.year}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}

                                                {/* X AXIS TITLE */}
                                                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 hidden md:block">
                                                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-navy/60">
                                                        Academic Year
                                                    </span>
                                                </div>

                                            </div>
                                        </>
                                    );
                                })()}
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* Placement Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                    {placements.map((yearPlac, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white/95 backdrop-blur-md border border-white/50 p-8 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 relative group"
                        >
                            {/* Top-right glow effect */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 space-y-6">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-1">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-navy text-white text-[9px] font-black tracking-widest uppercase mb-2">
                                            Academic Year {yearPlac.year}
                                        </span>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-3xl font-display font-black text-brand-navy">{yearPlac.students}</span>
                                            <span className="text-[10px] font-bold text-brand-slate uppercase tracking-tighter">Placed</span>
                                        </div>
                                    </div>
                                    <div className="p-2.5 rounded-2xl bg-brand-gold/10 text-brand-gold text-sm">
                                        <Briefcase size={18} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-navy border-b border-brand-navy/5 pb-2">
                                        Top Recruiters
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5">
                                        {yearPlac.companies.map((company, cIdx) => (
                                            <span
                                                key={cIdx}
                                                className="px-2.5 py-1.5 rounded-xl bg-brand-navy/5 border border-brand-navy/10 text-[10px] font-bold text-brand-navy whitespace-nowrap hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-colors cursor-default"
                                            >
                                                {company}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-navy border-b border-brand-navy/5 pb-2">
                                        Roles Offered
                                    </h4>
                                    <div className="space-y-1.5">
                                        {yearPlac.roles.map((role, rIdx) => (
                                            <div key={rIdx} className="flex items-center gap-2.5 text-brand-slate group/item">
                                                <Star size={10} className="text-brand-gold shrink-0 group-hover/item:scale-125 transition-transform" />
                                                <span className="text-xs font-semibold">{role}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* All Recruiters Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-12 mb-12"
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-display font-black uppercase italic tracking-tighter text-brand-navy leading-none">
                            Our Strategic <span className="text-brand-gold">Hiring</span> Partners
                        </h2>
                        <p className="text-sm text-brand-slate max-w-xl mx-auto font-medium">
                            We take pride in our strong industry connections, ensuring diverse opportunities for our graduates.
                        </p>
                    </div>

                    <div className="relative overflow-hidden bg-white/50 backdrop-blur-sm rounded-[3rem] p-10 border border-white/50">
                        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
                            {allCompanies.map((company, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="px-6 py-4 rounded-2xl bg-white shadow-md border border-brand-navy/5 text-sm font-black text-brand-navy hover:text-brand-gold transition-all cursor-default"
                                >
                                    {company}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Placement;
