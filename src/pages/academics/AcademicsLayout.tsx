import { NavLink, Outlet } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const AcademicsLayout = () => {
    const navItems = [
        { path: "/academics", label: "Academic Overview", end: true, icon: GraduationCap },
        { path: "/academics/puc", label: "PUC", icon: GraduationCap },
        { path: "/academics/bca", label: "BCA (Computer App)", icon: GraduationCap },
        { path: "/academics/bcom", label: "B.Com", icon: GraduationCap },
        { path: "/academics/bcom-data-analytics", label: "B.Com Data Analytics", icon: GraduationCap },
    ];

    return (
        <div className="relative flex min-h-screen overflow-hidden ">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-navy border-r border-white/5 p-6 hidden lg:block overflow-y-auto relative z-20 shadow-2xl">
                <div className="sticky top-24 space-y-8">

                    {/* Header */}
                    <div className="space-y-2">
                        <div className="h-[2px] w-8 bg-brand-gold rounded-full" />

                        <p className="text-brand-gold font-black text-[9px] tracking-[0.25em] uppercase font-display italic">
                            Academic Excellence
                        </p>

                        <h2 className="font-black text-[15px] text-white tracking-tight font-display italic uppercase whitespace-nowrap">
                            ACADEMIC <span className="text-brand-gold">PROGRAMS</span>
                        </h2>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.end}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 py-3 px-4 rounded-xl transition-all font-black text-[11px] uppercase tracking-wide font-display italic ${isActive
                                        ? "bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/20"
                                        : "hover:bg-white/5 text-gray-400 hover:text-white"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <item.icon className={`h-4 w-4 transition-colors duration-300 ${isActive ? "text-brand-navy" : "text-brand-gold"}`} />
                                        {item.label}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Admission Card */}
                    <div className="pt-8">
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-3 italic">
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.25em]">
                                Quick Links
                            </p>

                            <div className="space-y-1">
                                <a
                                    href="/admissions"
                                    className="block text-[11px] text-white/70 hover:text-brand-gold transition-colors font-black"
                                >
                                    Join SRI SAI COLLEGE
                                </a>

                                <a
                                    href="/contact"
                                    className="block text-[11px] text-white/70 hover:text-brand-gold transition-colors font-black"
                                >
                                    Admission Inquiry
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </aside>

            {/* Content area */}
            <main className="flex-1 p-6 lg:p-16 relative z-10 overflow-y-auto overflow-x-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AcademicsLayout;
