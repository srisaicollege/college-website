import { Search, Book, Monitor, Globe, Clock, ShieldCheck, Library as LibraryIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback, useState } from "react";

const heroImages = [
    {
        url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1500",
        title: "Knowledge Sanctuary",
        subtitle: "A World of Wisdom Awaiting Your Discovery"
    },
    {
        url: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1500",
        title: "Digital Archives",
        subtitle: "Instant Access to Global Research Databases"
    },
    {
        url: "https://images.unsplash.com/photo-1507730129329-da430e372138?auto=format&fit=crop&q=80&w=1500",
        title: "Reference Hall",
        subtitle: "Dedicated Spaces for Deep Focused Study"
    },
    {
        url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1500",
        title: "Reading Zone",
        subtitle: "Comfortable Environment for Academic Growth"
    },
    {
        url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1500",
        title: "Resource Centre",
        subtitle: "Supporting Every Learner's Academic Journey"
    }
];

const Library = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();

        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 6000);

        return () => clearInterval(interval);
    }, [emblaApi, onSelect]);

    // const facilities = [
    //     {
    //         title: 'Digital Repository',
    //         category: 'E-Resources',
    //         desc: 'Our Information Centre provides seamless access to prestigious international research databases including IEEE, JSTOR, and the N-LIST program. Students can access millions of journals and articles for their research work.',
    //         icon: Globe,
    //         image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
    //         features: ['N-LIST Access', 'IEEE/JSTOR Journals', 'Remote Access Hub', 'E-Thesis Support']
    //     },
    //     {
    //         title: 'Reference Section',
    //         category: 'Physical Collection',
    //         desc: 'The heart of our library houses a comprehensive collection of textbooks, reference guides, rare manuscripts, and encyclopedias across diverse academic disciplines, from Humanities to Advanced Computing.',
    //         icon: Book,
    //         image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200",
    //         features: ['25,000+ Volumes', 'Research Journals', 'Archival Material', 'Subject Encyclopedias']
    //     },
    //     {
    //         title: 'E-Learning Zone',
    //         category: 'Technology',
    //         desc: 'Equipped with high-performance systems and dedicated high-speed internet, this zone is designed for intensive research, project documentation, and accessing online certification courses.',
    //         icon: Monitor,
    //         image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
    //         features: ['Workstation Access', 'Suraj (Digital Repository)', 'Video Lecture Library', 'Printing Facility']
    //     }
    // ];

    return (
        <div className="flex flex-col space-y-24 pb-24 bg-white">

            {/* Hero Carousel */}
            <section className="relative h-screen w-full overflow-hidden">
                <div className="absolute inset-0" ref={emblaRef}>
                    <div className="flex h-full">
                        {heroImages.map((slide, index) => (
                            <div key={index} className="min-w-full h-full relative">
                                <img
                                    src={slide.url}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-brand-navy/60" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white pointer-events-none">
                    <p className="text-brand-gold font-black text-xs md:text-sm tracking-[0.4em] uppercase mb-6 animate-in slide-in-from-bottom duration-700 font-display">
                        Information Centre
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black font-display mb-8 leading-tight tracking-tight">
                        {heroImages[selectedIndex].title}
                    </h1>
                    <div className="max-w-xl text-gray-200 text-lg md:text-xl font-bold uppercase tracking-[0.2em] opacity-80 flex items-center justify-center gap-4 font-display">
                        <div className="h-px w-8 bg-brand-gold" />
                        {heroImages[selectedIndex].subtitle}
                        <div className="h-px w-8 bg-brand-gold" />
                    </div>
                </div>

                {/* Carousel Controls */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 lg:left-auto lg:right-20 lg:translate-x-0 z-20 flex items-center gap-6">
                    <div className="flex gap-2.5">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => emblaApi?.scrollTo(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${selectedIndex === index
                                    ? "w-12 bg-white"
                                    : "w-4 bg-white/30 hover:bg-white/50"
                                    }`}
                            />
                        ))}
                    </div>
                    <div className="hidden lg:flex gap-3 ml-4">
                        <button onClick={scrollPrev} className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition group">
                            <ChevronLeft className="w-5 h-5 text-white/70 group-hover:text-white" />
                        </button>
                        <button onClick={scrollNext} className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition group">
                            <ChevronRight className="w-5 h-5 text-white/70 group-hover:text-white" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats & Search */}
            <section className="py-12 bg-blue-50">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex gap-12">
                        <div>
                            <div className="text-3xl font-black font-display text-brand-navy">25,000+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest font-display">Volumes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black font-display text-brand-navy">100+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest font-display">Journals</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black font-display text-brand-navy">5,000+</div>
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest font-display">E-Books</div>
                        </div>
                    </div>
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search library catalog..."
                            className="w-full h-14 pl-12 pr-4 rounded-2xl border border-gray-100 shadow-sm focus:ring-2 focus:ring-brand-gold transition-all font-bold"
                        />
                    </div>
                </div>
            </section>

            {/* Facilities */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { title: 'Digital Repository', desc: 'Access to international research databases like IEEE, JSTOR, and N-LIST.', icon: Globe },
                            { title: 'Reference Section', desc: 'Quiet zones with a vast collection of encyclopedias, dictionaries, and rare manuscripts.', icon: Book },
                            { title: 'E-Learning Zone', desc: 'High-end computer systems for browsing, research, and technical project work.', icon: Monitor },
                            { title: 'Current Affairs', desc: 'Dedicated space for latest newspapers, monthly magazines, and competitive exam guides.', icon: Clock },
                            { title: 'Borrowing Services', desc: 'Seamless automated system for issuing and returning books with student IDs.', icon: ShieldCheck },
                            { title: 'Reading Halls', desc: 'Spacious, well-lit reading halls designed for deep focus and group study sessions.', icon: LibraryIcon }
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-3xl border border-slate-100 bg-white space-y-6 hover:border-brand-gold hover:shadow-xl transition-all group">
                                <div className="h-14 w-14 bg-yellow-50 text-brand-gold rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-all">
                                    <item.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-2xl font-black font-display text-brand-navy">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rules */}
            <section className="py-24 bg-blue-50">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 w-full">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=1000"
                                alt="Library Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="lg:w-1/2 space-y-8">
                        <h2 className="text-3xl lg:text-5xl font-black font-display text-brand-navy">Library Rules & Ethics</h2>
                        <div className="space-y-4">
                            {[
                                'Maintain absolute silence inside the library premises.',
                                'Student ID card is mandatory for entry and borrowing.',
                                'Handle books and equipment with utmost care.',
                                'Bags and personal belongings must be kept in the property counter.',
                                'Food and beverages are strictly prohibited.'
                            ].map((rule, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="h-6 w-6 rounded-full bg-brand-navy text-brand-gold flex items-center justify-center text-[10px] font-black shrink-0 mt-1 font-display">
                                        {i + 1}
                                    </div>
                                    <p className="text-slate-700 font-medium">{rule}</p>
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <Button className="h-14 px-10 bg-brand-navy hover:bg-brand-gold text-white hover:text-brand-navy font-black rounded-xl shadow-xl transition-all active:scale-95 font-display">
                                DOWNLOAD LIBRARY HANDBOOK
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Library;
