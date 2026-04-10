import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { MessageCircle, Instagram, Linkedin, Plus, X } from "lucide-react"

const socialLinks = [
    {
        name: "WhatsApp",
        icon: <MessageCircle className="w-5 h-5" />,
        href: "https://wa.me/919986408779?text=Hello%20I%20am%20interested%20in%20your%20college",
        color: "bg-[#25D366]",
        label: "Chat"
    },
    {
        name: "Instagram",
        icon: <Instagram className="w-5 h-5" />,
        href: "https://www.instagram.com/srisaicollegeforwomen?igsh=MWk2YzJqbHkydzdyMw==",
        color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
        label: "Follow"
    },
    {
        name: "LinkedIn",
        icon: <Linkedin className="w-5 h-5" />,
        href: "https://www.linkedin.com/company/sri-sai-college-for-women/",
        color: "bg-[#0A66C2]",
        label: "Connect"
    }
]

const SocialFloatingActions = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed bottom-28 lg:bottom-10 right-6 lg:right-10 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="flex flex-col items-end gap-3 mb-2"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group flex items-center gap-3 no-underline"
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest text-brand-navy shadow-xl border border-gray-100">
                                    {link.label}
                                </span>
                                <div className={`w-12 h-12 ${link.color} text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300`}>
                                    {link.icon}
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-[2rem] flex items-center justify-center shadow-[0_15px_30px_rgba(0,0,0,0.2)] transition-all duration-500 active:scale-90 relative overflow-hidden group ${isOpen ? "bg-brand-navy text-white rotate-90" : "bg-brand-gold text-brand-navy hover:bg-brand-navy hover:text-white"
                    }`}
            >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <motion.div
                    animate={{ rotate: isOpen ? 0 : 0 }}
                    className="relative z-10"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Plus className="w-7 h-7" />}
                </motion.div>

                {!isOpen && (
                    <div className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
                    </div>
                )}
            </button>
        </div>
    )
}

export default SocialFloatingActions
