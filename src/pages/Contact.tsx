import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send, Clock, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";
import { useState } from 'react';
import { sendInquiry } from '@/api/api.contact';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [status, setStatus] = useState<{
        type: 'idle' | 'loading' | 'success' | 'error';
        message: string;
    }>({ type: 'idle', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending your inquiry...' });

        try {
            await sendInquiry(formData);
            setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'General Inquiry',
                message: ''
            });
        } catch (error: any) {
            console.error('Submission error:', error);
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'Something went wrong. Please try again later.'
            });
        }
    };

    return (
        <PageWrapper>
            <div className="flex flex-col">
                {/* Main Contact Section */}
                <section className="pt-8 lg:pt-12 pb-20 lg:pb-32 relative overflow-hidden ">
                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={viewportConfig}
                            variants={containerVariants}
                            className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[4rem] p-6 lg:p-16 border border-gray-100 shadow-2xl  backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 -z-10 opacity-[0.14] mix-blend-multiply pointer-events-none">
                                <img
                                    src="/background/bg5.jpg"
                                    alt="Institutional Texture"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative z-10 items-start">
                                {/* Left Side: Inquiry Form (Now on the left) */}
                                <motion.div
                                    variants={itemVariants}
                                    className="order-1 lg:order-1 bg-white/60 backdrop-blur-xl p-8 lg:p-10 rounded-[3rem] border border-white/40 shadow-2xl shadow-blue-900/10 space-y-8 relative overflow-hidden group"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    <div className="space-y-2 relative z-10">
                                        <h3 className="text-xl lg:text-2xl font-black text-brand-navy italic tracking-tight">Send <span className="text-brand-gold">Inquiry</span></h3>
                                        <p className="text-xs text-slate-500 font-bold italic opacity-80">We'll get back to you within 24 hours.</p>
                                    </div>

                                    <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-brand-navy/60 uppercase tracking-widest ml-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your name"
                                                    className="w-full h-12 px-5 rounded-2xl border border-slate-200/60 bg-white/70 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all text-xs font-bold placeholder:text-slate-300 shadow-sm"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-brand-navy/60 uppercase tracking-widest ml-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="your@email.com"
                                                    className="w-full h-12 px-5 rounded-2xl border border-slate-200/60 bg-white/70 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all text-xs font-bold placeholder:text-slate-300 shadow-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-brand-navy/60 uppercase tracking-widest ml-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    placeholder="+91 00000 00000"
                                                    className="w-full h-12 px-5 rounded-2xl border border-slate-200/60 bg-white/70 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all text-xs font-bold placeholder:text-slate-300 shadow-sm"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black text-brand-navy/60 uppercase tracking-widest ml-1">Subject</label>
                                                <select
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    className="w-full h-12 px-5 rounded-2xl border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all bg-white/70 text-xs font-bold shadow-sm"
                                                >
                                                    <option value="General Inquiry">General Inquiry</option>
                                                    <option value="Admission Inquiry">Admission</option>
                                                    <option value="Academics">Academics</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-black text-brand-navy/60 uppercase tracking-widest ml-1">Your Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={3}
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message here..."
                                                className="w-full p-5 rounded-2xl border border-slate-200/60 bg-white/70 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all resize-none text-xs font-bold placeholder:text-slate-300 shadow-sm"
                                            />
                                        </div>

                                        <AnimatePresence mode="wait">
                                            {status.type !== 'idle' && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className={`p-4 rounded-xl flex items-center gap-3 font-bold italic text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' :
                                                        status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-100' :
                                                            'bg-brand-navy/5 text-brand-navy border border-brand-navy/10'
                                                        }`}
                                                >
                                                    {status.type === 'success' && <CheckCircle2 className="h-4 w-4" />}
                                                    {status.type === 'error' && <AlertCircle className="h-4 w-4" />}
                                                    {status.type === 'loading' && <Loader2 className="h-4 w-4 animate-spin" />}
                                                    {status.message}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <Button
                                            type="submit"
                                            disabled={status.type === 'loading'}
                                            className="w-full h-12 bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy font-black text-sm rounded-2xl shadow-2xl shadow-brand-navy/20 transition-all active:scale-[0.98] font-display italic disabled:opacity-70 group/btn"
                                        >
                                            {status.type === 'loading' ? 'PROCESSING...' : 'SEND MESSAGE'}
                                            {status.type !== 'loading' && <Send className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                                        </Button>
                                    </form>
                                </motion.div>

                                {/* Right Side: Simplified Contact Information (Now on the right) */}
                                <div className="space-y-10 order-2 lg:order-2 lg:py-4">
                                    <motion.div variants={itemVariants} className="space-y-6">
                                        <h2 className="text-2xl lg:text-4xl font-black font-display text-brand-navy italic leading-none">
                                            Reach <span className="text-brand-gold">Us</span>
                                        </h2>
                                        <p className="text-slate-600 text-sm leading-relaxed font-semibold italic opacity-90 max-w-md">
                                            Have questions? We're here to help you navigate your academic journey.
                                        </p>
                                    </motion.div>

                                    <div className="grid gap-6">
                                        {[
                                            { icon: MapPin, title: "Campus", value: <>No. 1839, Sri Sai Mandir Road <br/> 3rd Cross 'D' Block, 2nd Stage <br /> Rajajinagar, Bengaluru - 560010</> },
                                            { icon: Phone, title: "Contact", value: <> +91 9986408779<br /> +91 9886771063</> },
                                            { icon: Mail, title: "Email", value: <>srisaicollegeforwomen@gmail.com</> },
                                            { icon: Clock, title: "Hours", value: <>Mon-Fri: 9AM - 5PM<br />Sat: 9AM - 1PM</> }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                variants={itemVariants}
                                                className="flex gap-5 p-4 rounded-3xl hover:bg-white/50 transition-colors duration-300 group"
                                            >
                                                <div className="h-12 w-12 bg-white backdrop-blur-md text-brand-gold rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-gray-200/50 group-hover:bg-brand-navy group-hover:text-white group-hover:scale-110 transition-all duration-500">
                                                    <item.icon className="h-5 w-5" />
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="font-bold text-xs text-brand-navy/60 font-display uppercase tracking-widest italic">{item.title}</h4>
                                                    <p className="text-brand-navy text-sm font-black italic leading-snug">
                                                        {item.value}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </section>
            </div>
        </PageWrapper>
    );
};

export default Contact;
