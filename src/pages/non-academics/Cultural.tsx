import { CheckCircle2 } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

const Cultural = () => {
    return (
        <PageWrapper>
            <div className="space-y-24 py-10">

                {/* HERO (Premium + Dynamic) */}
                <section className="relative h-[65vh] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                    <img
                        src="/cultural/cultural-1.jpg"
                        alt="Cultural Excellence"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute bottom-10 left-10 text-white space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black italic">
                            Cultural Excellence
                        </p>

                        <h1 className="text-3xl md:text-5xl lg:text-7xl font-black italic uppercase text-white">
                            Cultural <span className="text-brand-gold">Activities</span>
                        </h1>

                        <p className="max-w-xl text-blue-100/80 text-sm md:text-lg">
                            Shaping creativity, confidence, and personality beyond academics.
                        </p>
                    </div>
                </section>

                {/* INTRO (Centered for premium feel) */}
                <section className="container mx-auto px-6 max-w-4xl text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic uppercase leading-tight">
                        Express. Create. <span className="text-brand-gold">Celebrate.</span>
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
                        The institution strongly believes that education extends beyond academics.
                        Cultural activities play a vital role in shaping creativity, confidence,
                        and personality while encouraging students to express their talents and celebrate diversity.
                    </p>

                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        At our college, cultural life is vibrant, dynamic, and inclusive.
                        Students are encouraged to actively participate in a wide range of
                        programs that foster teamwork and leadership.
                    </p>
                </section>

                {/* VISION + MISSION (Premium Dark Card) */}
                <section className="container mx-auto px-6">
                    <div className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-14 space-y-10 relative overflow-hidden shadow-xl">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full" />

                        {/* Vision */}
                        <div className="space-y-4 text-center">
                            <h3 className="text-xl md:text-3xl font-black text-brand-gold uppercase italic">
                                Vision
                            </h3>
                            <p className="text-blue-100/80 text-sm md:text-base max-w-3xl mx-auto">
                                To nurture creativity and cultural awareness among students while
                                promoting self-expression, confidence, and appreciation of diverse traditions.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-6">
                            {[
                                "Provide a platform to showcase artistic talents",
                                "Encourage participation in cultural events and festivals",
                                "Promote teamwork, confidence, and leadership",
                                "Preserve and celebrate cultural heritage"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <CheckCircle2 className="h-5 w-5 text-brand-gold mt-1" />
                                    <p className="text-blue-100/80 text-sm">{item}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* ACTIVITIES & EVENTS */}
                <section className="container mx-auto px-6 space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic uppercase">
                            Cultural <span className="text-brand-gold">Activities & Events</span>
                        </h2>
                        <p className="text-slate-500 text-sm max-w-2xl mx-auto">
                            A platform where talent meets opportunity through diverse performances and competitions.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Dance and Music Performances",
                            "Drama and Skits",
                            "Traditional and Cultural Festivals",
                            "Talent Shows and Competitions",
                            "Literary Events and Debates",
                            "Inter-collegiate Cultural Fest Participation"
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition group"
                            >
                                <CheckCircle2 className="h-5 w-5 text-brand-gold mb-3 group-hover:scale-110 transition-transform" />
                                <p className="text-sm font-bold text-brand-navy">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* IMAGE SHOWCASE */}
                <section className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="/cultural/cultural-2.jpg"
                                alt="Cultural Event 1"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                        <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="/cultural/cultural-3.jpg"
                                alt="Cultural Event 2"
                                className="w-full h-full object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                    </div>
                </section>

                {/* STUDENT DEVELOPMENT */}
                <section className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-slate-50 rounded-[2.5rem] p-10 lg:p-14 space-y-10 border border-slate-100 shadow-inner">
                        <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic uppercase text-center">
                            Student <span className="text-brand-gold">Development</span>
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                "Build confidence and stage presence",
                                "Enhance creativity and self-expression",
                                "Develop teamwork and coordination",
                                "Strengthen communication and leadership"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-center bg-white p-4 rounded-xl shadow-sm">
                                    <CheckCircle2 className="text-brand-gold h-6 w-6 flex-shrink-0" />
                                    <p className="text-sm font-bold text-brand-navy">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL STATEMENT CARD */}
                <section className="container mx-auto px-6 pb-10">
                    <div className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden border-b-[6px] border-brand-gold shadow-xl">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full" />

                        <div className="text-center space-y-6">
                            <h2 className="text-2xl md:text-4xl font-black italic text-blue-100 leading-relaxed uppercase">
                                Vibrant energy, <span className="text-brand-gold">lasting memories</span>,
                                and a <span className="text-brand-gold">thriving community</span>.
                            </h2>

                            <p className="text-blue-100/70 text-sm max-w-2xl mx-auto">
                                Cultural activities bring energy and enthusiasm to campus life,
                                creating a lively and engaging environment that enriches student life
                                while building a strong sense of unity.
                            </p>
                        </div>

                    </div>
                </section>


            </div>
        </PageWrapper>
    );
};

export default Cultural;