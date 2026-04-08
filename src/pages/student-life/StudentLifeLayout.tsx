import { NavLink, Outlet } from "react-router-dom";
import { ShieldCheck, Users, GraduationCap } from "lucide-react";

const StudentLifeLayout = () => {
    const navItems = [
        { path: "/student-life", label: "Overview", end: true, icon: Users },
        { path: "/student-life/anti-ragging", label: "Anti-Ragging", icon: ShieldCheck },
        { path: "/student-life/placement", label: "Placement Cell", icon: GraduationCap },
    ];

    return (
        <div className="relative flex min-h-screen overflow-hidden ">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-navy border-r border-white/5 p-6 hidden lg:block overflow-y-auto relative z-20 shadow-2xl">
                <div className="sticky top-24 space-y-8">
                    <div className="space-y-4">
                        <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
                        <p className="text-brand-gold font-black text-xs tracking-[0.4em] uppercase font-display italic">Holistic Development</p>
                        <h2 className="font-black text-3xl text-white tracking-tight font-display italic uppercase">STUDENT <span className="text-brand-gold">LIFE</span></h2>
                    </div>

                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end={item.end}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 py-3 px-4 rounded-2xl transition-all font-black text-[11px] uppercase tracking-wide font-display italic ${isActive
                                        ? "bg-brand-gold text-brand-navy shadow-xl shadow-brand-gold/20 scale-105"
                                        : "hover:bg-white/5 text-gray-400 hover:text-white"
                                    }`
                                }
                            >
                                <item.icon className={`h-4 w-4 ${(({ isActive }: { isActive: boolean }) => isActive ? "text-brand-navy" : "text-brand-gold")}`} />
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="pt-12">
                        <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-4 italic">
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em]">Support Center</p>
                            <div className="space-y-2">
                                <a href="/contact" className="block text-xs text-white/60 hover:text-brand-gold transition-colors font-black">Help Desk</a>
                                <a href="tel:+91 9886771063" className="block text-xs text-white/60 hover:text-brand-gold transition-colors font-black">Emergency Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Content area */}
            <main className="flex-1 p-6 lg:p-16 relative z-10 overflow-y-auto">
                <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02] pointer-events-none" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default StudentLifeLayout;
