import { ShieldAlert, Scale, Users, PhoneCall, Heart, Eye, Target, AlertTriangle, FileText, XCircle, UserX, UserMinus, Ban, DoorOpen, GraduationCap, AlertOctagon } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

const AntiRagging = () => {
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

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-16 pb-20"
        >
            {/* Hero Section */}
            <motion.div variants={itemVariants} className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                    </span>
                    <p className="text-red-600 font-bold text-[10px] tracking-[0.2em] uppercase">Zero Tolerance Policy</p>
                </div>
                <h1 className="text-5xl lg:text-7xl font-black text-[#101828] leading-[1.1] tracking-tight italic">
                    Anti-Ragging <br />
                    <span className="text-red-600">Committee</span>
                </h1>
                <p className="text-gray-500 text-lg lg:text-xl max-w-3xl leading-relaxed font-medium">
                    Ensuring a safe, respectful, and ragging-free campus environment in accordance with UGC Regulations.
                </p>
            </motion.div>

            {/* Preamble Card */}
            <motion.div variants={itemVariants} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-amber-600 rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative p-8 lg:p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
                    <h2 className="text-2xl font-black text-[#101828] flex items-center gap-3">
                        <FileText className="text-red-600 h-8 w-8" />
                        Preamble
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                        The Anti-Ragging Committee is a vital statutory body of the institution established in accordance with the UGC Regulations on Curbing the Menace of Ragging in Higher Educational Institutions, 2009, under the UGC Act, 1956.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">
                        The Committee is committed to ensuring a safe, respectful, and ragging-free campus environment. Ragging in any form is strictly prohibited and will invite stringent disciplinary and legal action.
                    </p>
                </div>
            </motion.div>

            {/* What is Ragging Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div variants={itemVariants} className="p-10 bg-[#101828] text-white rounded-[2.5rem] flex flex-col justify-between space-y-8">
                    <div className="space-y-4">
                        <div className="h-16 w-16 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg shadow-red-900/20">
                            <ShieldAlert className="h-8 w-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tight text-red-200 italic">What is Ragging?</h2>
                        <p className="text-gray-400 text-lg font-medium leading-relaxed">
                            Ragging is a punishable offence and will not be tolerated under any circumstances. It includes any act that results in:
                        </p>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            "Mental, Physical, or Sexual Abuse",
                            "Verbal Harassment",
                            "Criminal Intimidation",
                            "Undermining Human Dignity",
                            "Financial Exploitation",
                            "Use of Force or Coercion"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-bold text-gray-300">
                                <span className="h-1.5 w-1.5 bg-red-600 rounded-full" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Vision Container */}
                    <motion.div variants={itemVariants} className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 flex gap-6">
                        <div className="h-12 w-12 bg-amber-600 text-white rounded-xl flex items-center justify-center shrink-0">
                            <Eye className="h-6 w-6" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-black text-[#101828] italic">Our Vision</h3>
                            <p className="text-gray-600 text-sm font-medium leading-relaxed">
                                To cultivate a safe, inclusive, and respectful academic environment where every student—especially newcomers—feels secure, valued, and empowered.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission Container */}
                    <motion.div variants={itemVariants} className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex gap-6">
                        <div className="h-12 w-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0">
                            <Target className="h-6 w-6" />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-black text-[#101828] italic">Our Mission</h3>
                            <ul className="space-y-2">
                                {[
                                    "Prevent through awareness & strict enforcement",
                                    "Provide confidential reporting platforms",
                                    "Ensure timely inquiry & investigation",
                                    "Educate about legal consequences"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-xs font-bold text-gray-600">
                                        <Heart className="h-3 w-3 text-blue-600" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Objectives Section */}
            <motion.div variants={itemVariants} className="space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-black text-[#101828] italic">Committee <span className='text-brand-gold'>Objectives</span> </h2>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto">Our primary focus is the holistic well-being and security of our students.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Continuous monitoring and prevention",
                        "Prompt action against offenders",
                        "Sensitizing dehumanizing effects",
                        "Maintaining 100% ragging-free campus",
                        "Clear message: Zero tolerance",
                        "Empowering student voice"
                    ].map((objective, i) => (
                        <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl hover:border-amber-200 transition-colors shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="h-8 w-8 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 font-black text-[#101828] text-sm">
                                    0{i + 1}
                                </div>
                                <p className="text-sm font-bold text-[#101828] leading-snug">{objective}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Acts Constituting Ragging */}
            <motion.div variants={itemVariants} className="space-y-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-black text-[#101828] italic">Acts <span className='text-brand-gold'>Constituting</span>  Ragging</h2>
                        <p className="text-gray-500 font-medium max-w-xl">The following activities are strictly monitored and classified as ragging under institutional policy.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { icon: Users, text: "Teasing or humiliating freshers rudely", color: "bg-orange-50 text-orange-600" },
                        { icon: AlertTriangle, text: "Rowdy or undisciplined activities", color: "bg-red-50 text-red-600" },
                        { icon: UserX, text: "Forced embarrassing or humiliating acts", color: "bg-rose-50 text-rose-600" },
                        { icon: Ban, text: "Disrupting regular academic activities", color: "bg-yellow-50 text-yellow-600" },
                        { icon: Heart, text: "Physical or sexual abuse of any kind", color: "bg-pink-50 text-pink-600" },
                        { icon: Scale, text: "Financial extortion or forced expense", color: "bg-emerald-50 text-emerald-600" },
                        { icon: Target, text: "Online harassment and public insults", color: "bg-indigo-50 text-indigo-600" },
                        { icon: Heart, text: "Any act affecting mental health", color: "bg-slate-50 text-slate-600" }
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-white border border-gray-100 rounded-3xl space-y-4 hover:shadow-md transition-shadow">
                            <div className={`h-12 w-12 ${item.color} rounded-2xl flex items-center justify-center`}>
                                <item.icon className="h-6 w-6" />
                            </div>
                            <p className="text-sm font-black text-[#101828] leading-tight">{item.text}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Disciplinary Actions Section - HIGHER PRIORITY/VISIBILITY */}
            <motion.div variants={itemVariants} className="bg-red-600 rounded-[3rem] p-8 lg:p-16 text-white relative overflow-hidden shadow-2xl shadow-red-900/20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10 space-y-12">
                    <div className="space-y-6 max-w-4xl">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/20 rounded-full backdrop-blur-md">
                            <AlertOctagon className="h-5 w-5" />
                            <span className="text-xs font-black uppercase tracking-widest">Immediate Actions</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-[1.1] italic">Disciplinary Actions</h2>
                        <div className="h-1 w-32 bg-white rounded-full opacity-30" />
                        <p className="text-xl lg:text-2xl font-black text-red-50 leading-relaxed italic">
                            "Every incident of ragging will lead to the filing of an FIR with the local police authorities without exception."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: UserMinus, label: "Cancellation of admission" },
                            { icon: XCircle, label: "Suspension from classes" },
                            { icon: GraduationCap, label: "Debarring from exams" },
                            { icon: DoorOpen, label: "Expulsion from hostel/institution" },
                        ].map((action, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-colors">
                                <action.icon className="h-8 w-8 mb-4 opacity-80" />
                                <p className="font-bold text-sm text-red-100 leading-tight">{action.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="p-6 bg-black/20 rounded-2xl border border-white/10">
                        <p className="text-sm font-medium text-red-100">
                            * In case of unidentified offenders, collective punishment may be applied to the group or batch involved. Offenders may also be debarred from admission to any other institution.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Commitment & Contact */}
            <motion.div variants={itemVariants} className="bg-[#101828] text-white p-12 lg:p-20 rounded-[4rem] relative overflow-hidden text-center space-y-10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#101828] via-[#101828] to-red-950/30 opacity-50" />
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl lg:text-5xl text-blue-100 italic ">Our <span className='text-brand-gold'>Commitment</span> </h2>
                    <p className="text-gray-400 text-lg leading-relaxed font-medium">
                        The institution is fully committed to safeguarding the dignity, safety, and well-being of every student. We encourage students to report any incident without fear. Together, we ensure a campus built on respect, discipline, and mutual trust.
                    </p>
                </div>

                <div className="relative z-10 flex flex-col items-center gap-8">
                    <p className="text-amber-500 font-black text-sm uppercase tracking-widest">Report an incident (24/7 Confidential Helpline)</p>
                    <a href="tel:18001805522" className="group/btn flex items-center gap-6 bg-red-600 px-10 py-6 rounded-[2.5rem] font-black text-2xl lg:text-3xl hover:bg-white hover:text-red-600 transition-all shadow-2xl shadow-red-900/40 active:scale-95">
                        <PhoneCall className="h-8 w-8 group-hover/btn:animate-bounce" />
                        +91 9886771063
                    </a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AntiRagging;
