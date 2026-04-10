import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronRight, Instagram, Linkedin, MessageCircle, Mail, Phone, ArrowRight, Sparkles, GraduationCap, Users2, Globe, Shield } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { fullMenu, type MenuItem } from "@/lib/menu"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [activeCategory, setActiveCategory] = useState<MenuItem | null>(null)
    const [mobileOpen, setMobileOpen] = useState<string | null>(null)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            // Scrolled effect for styling
            setScrolled(currentScrollY > 20)

            // Headroom logic (Hide on scroll down, show on scroll up)
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }

            setLastScrollY(currentScrollY)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    useEffect(() => {
        setIsMenuOpen(false)
        setMobileOpen(null)
    }, [location.pathname])

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => { document.body.style.overflow = "auto" }
    }, [isMenuOpen])

    const findActiveCategory = (pathname: string): MenuItem | null => {
        for (const item of fullMenu) {
            if (item.path === pathname) return item;
            if (item.children) {
                const hasMatch = item.children.some(child => {
                    if (child.path === pathname) return true;
                    if (child.children) {
                        return child.children.some(grandchild => grandchild.path === pathname);
                    }
                    return false;
                });
                if (hasMatch) return item;
            }
        }
        return null;
    };

    useEffect(() => {
        if (isMenuOpen) {
            setActiveCategory(findActiveCategory(location.pathname));
        }
    }, [isMenuOpen, location.pathname]);

    const getIconForCategory = (label: string) => {
        switch (label.toLowerCase()) {
            case 'about us': return <Users2 className="w-5 h-5 text-blue-500" />;
            case 'academics': return <GraduationCap className="w-5 h-5 text-blue-500" />;
            case 'campus': return <Globe className="w-5 h-5 text-blue-500" />;
            case 'student life': return <Sparkles className="w-5 h-5 text-blue-500" />;
            default: return <Shield className="w-5 h-5 text-blue-500" />;
        }
    }

    return (
        <>
            {/* ================= HEADER NAVIGATION ================= */}
            <header
                className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"
                    } ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg h-16" : "bg-transparent h-24"}`}
            >
                <div className="max-w-[1536px] mx-auto h-full flex justify-between items-center relative px-6 lg:px-12">
                    {/* BRANDING */}
                    <div className={`absolute left-0 top-0 h-full bg-white [clip-path:polygon(0_0,_100%_0,_92%_100%,_0%_100%)] flex items-center transition-all duration-500 shadow-[10px_0_30px_-10px_rgba(0,0,0,0.15)] z-20 ${scrolled ? "pr-10 pl-4 lg:pl-10 h-16" : "pr-20 pl-6 lg:pl-12 h-24 shadow-none"
                        }`}>
                        <Link to="/" className="flex items-center gap-2 lg:gap-4 group">
                            <div className={`transition-all duration-500 ${scrolled ? "h-8 w-8" : "h-10 w-10 lg:h-12 lg:w-12"}`}>
                                <img src="/logo.png" alt="Sri Sai College Logo" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col border-l border-gray-100 pl-3 lg:pl-6 py-1">
                                <h1 className={`font-display font-black text-brand-navy leading-none tracking-tight transition-all duration-500 ${scrolled ? "text-base lg:text-xl" : "text-lg lg:text-3xl"
                                    }`}>
                                    SRI SAI COLLEGE <span className="text-brand-gold">FOR WOMEN</span>
                                </h1>
                                <p className={`font-bold tracking-[0.4em] uppercase mt-1 text-gray-400 transition-all duration-500 ${scrolled ? "text-[6px] lg:text-[8px]" : "text-[8px] lg:text-[10px]"
                                    }`}>
                                    Excellence in Education
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* MENU TRIGGER (Mobile & Desktop) */}
                    <div className="flex-1 flex justify-end items-center relative z-30">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`group flex items-center gap-2 lg:gap-5 px-4 lg:px-6 py-2.5 lg:py-3.5 rounded-full transition-all duration-500 border active:scale-95 ${isMenuOpen
                                ? "bg-brand-navy text-white border-brand-navy"
                                : scrolled
                                    ? "bg-brand-navy text-white border-brand-navy hover:bg-brand-navy/90"
                                    : "bg-white text-brand-navy border-white hover:bg-gray-100 shadow-2xl"
                                }`}
                        >
                            <span className="hidden sm:inline font-black text-[10px] tracking-[0.4em] uppercase">Menu</span>
                            <div className="relative w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center bg-white/10 rounded-full group-hover:rotate-180 transition-transform duration-500">
                                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* ================= MOBILE BOTTOM NAVIGATION ================= */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-md lg:hidden">
                <nav className="bg-[#1b2c47]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-around">
                    <Link to="/" className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${location.pathname === "/" ? "text-brand-gold" : "text-white/60 hover:text-white"}`}>
                        <Globe className="w-5 h-5" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Home</span>
                    </Link>
                    <Link to="/academics" className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${location.pathname.startsWith("/academics") ? "text-brand-gold" : "text-white/60 hover:text-white"}`}>
                        <GraduationCap className="w-5 h-5" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Edu</span>
                    </Link>
                    <Link to="/infrastructure" className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${location.pathname.startsWith("/infrastructure") ? "text-brand-gold" : "text-white/60 hover:text-white"}`}>
                        <Sparkles className="w-5 h-5" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Life</span>
                    </Link>
                    <Link to="/admissions" className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${location.pathname.startsWith("/admissions") ? "text-brand-gold" : "text-white/60 hover:text-white"}`}>
                        <Users2 className="w-5 h-5" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Join</span>
                    </Link>
                    <Link to="/contact" className={`flex flex-col items-center gap-1 px-3 py-2 transition-colors ${location.pathname.startsWith("/contact") ? "text-brand-gold" : "text-white/60 hover:text-white"}`}>
                        <Mail className="w-5 h-5" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Mail</span>
                    </Link>
                </nav>
            </div>

            {/* ================= REFINED MEGA MENU OVERLAY ================= */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.target === e.currentTarget && setIsMenuOpen(false)}
                        className="fixed inset-0 z-[70] bg-brand-navy/70 backdrop-blur-[16px] flex items-end lg:items-center justify-center"
                    >
                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 32, stiffness: 320, mass: 0.8 }}
                            className="w-full h-[92vh] lg:h-[88vh] lg:w-[92vw] lg:max-w-[1400px] bg-white lg:rounded-[3rem] rounded-t-[2.5rem] shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.4)] overflow-y-auto lg:overflow-hidden flex flex-col lg:flex-row relative"
                        >

                            {/* ===== LEFT PANE — Category Selector ===== */}
                            <div className="w-full lg:w-[380px] shrink-0 bg-[#0f1f38] flex flex-col overflow-y-auto custom-scrollbar">

                                {/* Mobile drag handle */}
                                <div className="flex lg:hidden justify-center pt-4 pb-2 cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                                    <div className="w-10 h-1 bg-white/20 rounded-full" />
                                </div>

                                {/* Logo strip */}
                                <div className="hidden lg:flex items-center gap-3 px-8 pt-10 pb-8 border-b border-white/5">
                                    <img src="/logo.png" alt="Logo" className="h-9 w-9 object-contain" />
                                    <div>
                                        <p className="text-white font-display font-black text-sm leading-tight">SRI SAI COLLEGE</p>
                                        <p className="text-brand-gold text-[9px] font-black tracking-[0.3em] uppercase">For Women</p>
                                    </div>
                                </div>

                                {/* Nav items */}
                                <nav className="flex-1 px-4 py-4 lg:py-6 space-y-1">
                                    {/* Home */}
                                    <Link
                                        to="/"
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            setActiveCategory(null);
                                        }}
                                        className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${location.pathname === "/"
                                            ? "bg-white/10 text-white"
                                            : "text-white/50 hover:text-white hover:bg-white/8"
                                            }`}
                                    >
                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${location.pathname === "/" ? "bg-brand-gold" : "bg-white/5 group-hover:bg-[#EAB308]/20"}`}>
                                            <Globe className={`w-4 h-4 ${location.pathname === "/" ? "text-brand-navy" : "text-white/50 group-hover:text-[#EAB308]"}`} />
                                        </div>
                                        <span className="font-bold text-sm tracking-wide">Home</span>
                                    </Link>

                                    {fullMenu.map((item) => {
                                        const isActive = activeCategory?.label === item.label
                                        const IconComp = item.label === 'About Us' ? Users2
                                            : item.label === 'Admissions' ? ArrowRight
                                                : item.label === 'Academics' ? GraduationCap
                                                    : item.label === 'Campus' ? Globe
                                                        : item.label === 'Library' ? Shield
                                                            : item.label === 'Non Academics' ? Sparkles
                                                                : item.label === 'Student Life' ? Sparkles
                                                                    : item.label === 'Faculty' ? Users2
                                                                        : Mail

                                        return (
                                            <div key={item.label}>
                                                {item.children ? (
                                                    <>
                                                        {/* Hover row activates right pane on desktop */}
                                                        <div
                                                            onMouseEnter={() => !window.matchMedia('(max-width: 1024px)').matches && setActiveCategory(item)}
                                                            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${isActive
                                                                ? 'bg-white/10 text-white'
                                                                : 'text-white/50 hover:text-white hover:bg-white/8'
                                                                }`}
                                                        >
                                                            {/* Icon — also toggles mobile accordion */}
                                                            <button
                                                                onClick={() => {
                                                                    setActiveCategory(item)
                                                                    setMobileOpen(prev => prev === item.label ? null : item.label)
                                                                }}
                                                                className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-brand-gold' : 'bg-white/5 group-hover:bg-white/10'
                                                                    }`}
                                                            >
                                                                <IconComp className={`w-4 h-4 ${isActive ? 'text-brand-navy' : 'text-white/50 group-hover:text-white'}`} />
                                                            </button>

                                                            {/* Label — navigates to overview page & closes menu */}
                                                            <Link
                                                                to={item.children[0]?.path || '#'}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="flex-1 text-left font-bold text-sm tracking-wide"
                                                            >
                                                                {item.label}
                                                            </Link>

                                                            {/* Mobile chevron accordion toggle */}
                                                            <button
                                                                onClick={() => {
                                                                    setActiveCategory(item)
                                                                    setMobileOpen(prev => prev === item.label ? null : item.label)
                                                                }}
                                                                className="lg:hidden p-1"
                                                            >
                                                                <ChevronRight className={`w-4 h-4 transition-all ${mobileOpen === item.label ? 'rotate-90 text-white' : 'text-white/20'
                                                                    }`} />
                                                            </button>
                                                            {/* Desktop right-arrow indicator */}
                                                            <ChevronRight className={`hidden lg:block w-4 h-4 transition-all ${isActive ? 'text-white' : 'text-white/20'
                                                                }`} />
                                                        </div>

                                                        {/* Mobile sub-accordon */}
                                                        <div className={`overflow-hidden transition-all duration-400 ease-in-out lg:hidden ${mobileOpen === item.label ? 'max-h-[600px]' : 'max-h-0'}`}>
                                                            <div className="ml-12 mt-1 mb-2 space-y-0.5 border-l border-white/10 pl-4">
                                                                {item.children.flatMap(child =>
                                                                    child.children
                                                                        ? child.children.map(gc => ({ label: `${child.label} – ${gc.label}`, path: gc.path }))
                                                                        : [{ label: child.label, path: child.path }]
                                                                ).map(sub => (
                                                                    <Link
                                                                        key={sub.label}
                                                                        to={sub.path || "#"}
                                                                        onClick={() => setIsMenuOpen(false)}
                                                                        className="block py-2.5 px-3 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                                                                    >
                                                                        {sub.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <Link
                                                        to={item.path || "/"}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        onMouseEnter={() => !window.matchMedia('(max-width: 1024px)').matches && setActiveCategory(item)}
                                                        className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all group ${isActive
                                                            ? 'bg-white/10 text-white'
                                                            : 'text-white/50 hover:text-white hover:bg-white/8'
                                                            }`}
                                                    >
                                                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-brand-gold' : 'bg-white/5 group-hover:bg-white/10'
                                                            }`}>
                                                            <IconComp className={`w-4 h-4 ${isActive ? 'text-brand-navy' : 'text-white/50 group-hover:text-white'}`} />
                                                        </div>
                                                        <span className="flex-1 text-left font-bold text-sm tracking-wide">{item.label}</span>
                                                        <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                                                    </Link>
                                                )}
                                            </div>
                                        )
                                    })}
                                </nav>

                                {/* Left pane footer */}
                                <div className="px-6 py-6 border-t border-white/5 space-y-3">
                                    <Link
                                        to="/admissions"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-3.5 bg-brand-gold text-brand-navy rounded-2xl font-black text-sm tracking-[0.15em] uppercase hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20"
                                    >
                                        <Users2 className="w-4 h-4" />
                                        Apply Now
                                    </Link>
                                    <div className="flex gap-3">
                                        <a href="tel:+919986408779" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl text-xs font-bold transition-all">
                                            <Phone className="w-3.5 h-3.5" /> Call
                                        </a>
                                        <a href="mailto:srisaicollegeforwomen@gmail.com" className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 rounded-xl text-xs font-bold transition-all">
                                            <Mail className="w-3.5 h-3.5" /> Email
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* ===== RIGHT PANE — Content & Sub-links ===== */}
                            <div className="hidden lg:flex flex-1 h-full bg-white relative overflow-hidden flex-col">

                                {/* Subtle background decoration */}
                                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/60 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50/40 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

                                <AnimatePresence mode="wait">
                                    {activeCategory && (
                                        <motion.div
                                            key={activeCategory.label}
                                            initial={{ opacity: 0, y: 16 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -16 }}
                                            transition={{ duration: 0.28, ease: "easeOut" }}
                                            className="h-full flex flex-col px-14 py-14 relative z-10 overflow-y-auto custom-scrollbar"
                                        >
                                            {/* Section header */}
                                            <div className="mb-10">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="h-0.5 w-8 bg-brand-gold rounded-full" />
                                                    <span className="text-brand-gold text-[10px] font-black tracking-[0.5em] uppercase">{activeCategory.label}</span>
                                                </div>
                                                <h2 className="text-3xl lg:text-4xl font-display font-black text-brand-navy tracking-tight leading-tight">
                                                    Explore <span className="text-navy">{activeCategory.label}</span>
                                                </h2>
                                                <p className="text-gray-400 text-sm mt-2 font-medium max-w-sm">
                                                    Browse everything under {activeCategory.label} at Sri Sai College for Women.
                                                </p>
                                            </div>

                                            {activeCategory.children ? (
                                                <div className="grid grid-cols-2 gap-4">
                                                    {activeCategory.children.flatMap((child) =>
                                                        child.children
                                                            ? child.children.map(grandchild => ({ label: `${child.label} – ${grandchild.label}`, path: grandchild.path }))
                                                            : [{ label: child.label, path: child.path }]
                                                    ).map((item, i) => (
                                                        <motion.div
                                                            key={item.label}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: i * 0.04 }}
                                                        >
                                                            <Link
                                                                to={item.path || "#"}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all hover:shadow-sm"
                                                            >
                                                                <div className="w-10 h-10 rounded-xl bg-gray-50 group-hover:bg-blue-600 flex items-center justify-center shrink-0 transition-colors">
                                                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white -rotate-45 group-hover:rotate-0 transition-all" />
                                                                </div>
                                                                <div>
                                                                    <p className="font-bold text-brand-navy text-sm group-hover:text-blue-700 transition-colors leading-snug">{item.label}</p>
                                                                    <p className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-0.5">View Section →</p>
                                                                </div>
                                                            </Link>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            ) : (
                                                <div className="flex-1 flex flex-col justify-center items-center text-center gap-6 rounded-3xl border-2 border-dashed border-gray-100 p-12">
                                                    <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center">
                                                        {getIconForCategory(activeCategory.label)}
                                                    </div>
                                                    <div>
                                                        <h3 className="text-2xl font-display font-black text-brand-navy mb-2">{activeCategory.label}</h3>
                                                        <p className="text-gray-400 text-sm max-w-xs">Explore everything related to {activeCategory.label} at our campus.</p>
                                                    </div>
                                                    <Link
                                                        to={activeCategory.path || "#"}
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-blue-700 transition-colors shadow-xl"
                                                    >
                                                        Visit Page →
                                                    </Link>
                                                </div>
                                            )}

                                            {/* Stats footer */}
                                            <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                                                <div className="flex gap-6">
                                                    {[
                                                        { val: "1996", label: "Established" },
                                                        { val: "NAAC", label: "Accredited" },
                                                    ].map(s => (
                                                        <div key={s.label} className="text-center">
                                                            <p className="text-brand-navy font-black text-lg">{s.val}</p>
                                                            <p className="text-[9px] font-black uppercase text-gray-400 tracking-[0.3em]">{s.label}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex gap-2">
                                                    {[
                                                        {
                                                            Icon: MessageCircle,
                                                            href: "https://wa.me/919986408779?text=Hello%20I%20am%20interested%20in%20your%20college"
                                                        },
                                                        { Icon: Instagram, href: "https://www.instagram.com/srisaicollegeforwomen?igsh=MWk2YzJqbHkydzdyMw==" },
                                                        { Icon: Linkedin, href: "https://www.linkedin.com/company/sri-sai-college-for-women/" }
                                                    ].map((social, i) => (
                                                        <a
                                                            key={i}
                                                            href={social.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className="w-9 h-9 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-brand-navy hover:text-white text-gray-400 transition-all"
                                                        >
                                                            <social.Icon className="w-4 h-4" />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Close button */}
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="absolute top-8 right-8 h-12 w-12 bg-gray-100 hover:bg-brand-navy text-gray-500 hover:text-white rounded-2xl flex items-center justify-center transition-all shadow-sm z-50 group"
                                >
                                    <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}

export default Navbar
