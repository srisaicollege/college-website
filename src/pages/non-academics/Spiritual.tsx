import { CheckCircle2} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";

const SpiritualLife = () => {
    return (
        <PageWrapper>
            <div className="space-y-24 py-10">

                {/* HERO (Calm + Minimal) */}
                <section className="relative h-[65vh] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                    <img
                        src="/spiritual/spiritual-1.jpeg"
                        alt="Sai Baba Temple"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div className="absolute bottom-10 left-10 text-white space-y-4">
                        <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold font-black italic">
                            Inner Growth
                        </p>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white italic uppercase">
                            Spiritual <span className="text-brand-gold">Life</span>
                        </h1>

                        <p className="max-w-xl text-blue-100/80 text-sm md:text-lg">
                            Nurturing peace, values, and purpose beyond academics.
                        </p>
                    </div>
                </section>

                {/* INTRO (Centered for calm feel) */}
                <section className="container mx-auto px-6 max-w-4xl text-center space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic uppercase">
                        A Journey Within
                    </h2>

                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                        The institution places great emphasis on nurturing not only academic excellence but also inner peace, values, and spiritual well-being.
                    </p>

                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                        Spiritual development is an essential part of holistic education, helping students build character, discipline, and a positive outlook towards life.
                    </p>
                </section>

                {/* TEMPLE SECTION (Image + Text) */}
                <section className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* IMAGE */}
                        <div className="rounded-[2rem] overflow-hidden shadow-xl border-4 border-white">
                            <img
                                src="/spiritual/spiritual-2.jpeg"
                                alt="Temple"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* TEXT */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic uppercase">
                                A Sacred <span className="text-brand-gold">Space</span>
                            </h2>

                            <p className="text-slate-600 text-base leading-relaxed">
                                At the heart of the campus lies a serene and sacred temple of Sri Sai Baba, serving as a center of peace and devotion.
                            </p>

                            <p className="text-slate-500 text-sm leading-relaxed">
                                The temple provides a calm and inspiring space where students and staff can reflect, seek guidance, and experience spiritual harmony.
                            </p>
                        </div>

                    </div>
                </section>

                {/* VISION + MISSION (Premium Card) */}
                <section className="container mx-auto px-6">
                    <div className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-14 space-y-10 relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full" />

                        {/* Vision */}
                        <div className="space-y-4 text-center">
                            <h3 className="text-xl md:text-3xl font-black text-brand-gold uppercase italic">
                                Vision
                            </h3>
                            <p className="text-blue-100/80 text-sm md:text-base max-w-3xl mx-auto">
                                To cultivate a spiritually enriched environment that fosters inner strength, moral values, and a sense of peace and purpose.
                            </p>
                        </div>

                        {/* Mission */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                "Promote spiritual awareness and values",
                                "Encourage participation in devotional activities",
                                "Support mental and emotional well-being",
                                "Instill compassion, humility, and respect"
                            ].map((item, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <CheckCircle2 className="h-5 w-5 text-brand-gold mt-1" />
                                    <p className="text-blue-100/80 text-sm">{item}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* ACTIVITIES */}
                <section className="container mx-auto px-6 text-center space-y-12">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-navy italic uppercase">
                        Spiritual <span className="text-brand-gold">Activities</span>
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            "Daily Shloka Recitation",
                            "Bhajans & Devotional Sessions",
                            "Special Poojas & Celebrations",
                            "Meditation & Reflection"
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition"
                            >
                                <CheckCircle2 className="h-5 w-5 text-brand-gold mb-3 mx-auto" />
                                <p className="text-sm font-bold text-brand-navy">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FINAL PEACE SECTION */}
                <section className="container mx-auto px-6 pb-10">
                    <div className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden border-b-[6px] border-brand-gold shadow-xl">

                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full" />

                        <div className="text-center space-y-6">
                            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black italic text-blue-100 leading-relaxed">
                                “A place where <span className="text-brand-gold">knowledge meets peace</span>,
                                and <span className="text-brand-gold">success is guided by wisdom</span>.”
                            </h2>

                            <p className="text-blue-100/70 text-sm max-w-2xl mx-auto">
                                The Sai Baba temple stands as a symbol of faith, unity, and harmony,
                                guiding students towards a balanced and meaningful life.
                            </p>
                        </div>

                    </div>
                </section>

            </div>
        </PageWrapper>
    );
};

export default SpiritualLife;