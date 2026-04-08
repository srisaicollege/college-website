import { useState } from 'react';
import { Search } from 'lucide-react';

const Faculty = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const facultyMembers = [
        {
            name: 'Prof. Ramanjneya T',
            qualification: 'M.Com, MBA, PhD',
            designation: 'Principal',
            achievements: 'Principal with 35+ years of experience in commerce, specializing in core accounting and taxation subjects. BOE member and paper setter for Bengaluru City University, and recipient of Best Teacher and Best Principal awards.',
            image: '/teachers/principal.jpeg'
        },
        {
            name: 'Mrs. D.Anitha',
            qualification: 'M.Com,M.Phil.',
            designation: 'HOD, IQAC Coordinator',
            achievements: 'HOD of Commerce and IQAC Coordinator with 20+ years of teaching experience. Served as a valuer, reviewer, and paper setter, and contributed to national academic conferences.',
            image: '/teachers/fact-18.jpeg'
        },
        {
            name: 'Mrs. Shobha G N ',
            qualification: ' BE, M.Tech ',
            designation: 'HOD, DEPT OF Computer Application',
            achievements: 'Head of Computer Applications with 14+ years of teaching experience, BE and M.Tech qualified, focused on academic excellence and fostering a strong learning environment.',
            image: '/teachers/fact-12.jpeg'
        },
        {
            name: 'Ms. Nisha Kumari ',
            qualification: 'M.A., (B.Ed.) ',
            designation: 'Lecturer',
            achievements: 'Hindi lecturer with M.A. and B.Ed. qualification, focused on developing language skills and fostering interest in literature.',
            image: '/teachers/fact-3.jpeg'
        },
        {
            name: 'Mrs. H .V. Pooja Murthy ',
            qualification: 'M.sc (CS), B.Ed ',
            designation: 'Lecturer ',
            achievements: 'Computer Science lecturer with 6+ years of experience, M.Sc. and B.Ed. qualified, focused on academic excellence and preparing students for the tech industry.',
            image: '/teachers/fact-13.jpeg'
        }, {
            name: 'Mrs. Sandhya H S',
            qualification: 'M.Com., B.Ed',
            designation: 'Lecturer',
            achievements: 'Business Studies lecturer with 12 years of experience, M.Com. and B.Ed. qualified, focused on building strong business fundamentals and critical thinking skills.',
            image: '/teachers/fact-14.jpeg'
        }, {
            name: 'Mrs. Sannidhi B S',
            qualification: 'M.Sc., B.Ed.',
            designation: 'Lecturer',
            achievements: 'Biology lecturer with M.Sc. and B.Ed. qualification, focused on building strong understanding and interest in biological sciences.',
            image: '/teachers/fact-15.jpeg'
        }, {
            name: 'Mrs. Komala ',
            qualification: 'B.Ed., PGDIB, M.com ',
            designation: 'Lecturer',
            achievements: 'Accounting lecturer with 12 years of experience, B.Ed. and PGDIB qualified, focused on building strong conceptual and practical financial skills.',
            image: '/teachers/fact-4.jpeg'
        }, {
            name: 'Mrs. Lakshmi P',
            qualification: 'M.Sc., B.Ed.',
            designation: 'Lecturer',
            achievements: 'Lecturer with M.Sc. and B.Ed. qualification, focused on creating an engaging learning environment and supporting student academic growth.',
            image: '/teachers/fact-7.jpeg'
        }, {
            name: 'Ms. Divya G ',
            qualification: 'M.Sc. B.Ed ',
            designation: 'Lecturer',
            achievements: 'Chemistry lecturer with 5 years of experience, M.Sc. and B.Ed. qualified, recognized with a university rank and focused on simplifying concepts and fostering interest in science.',
            image: '/teachers/fact-8.jpeg'
        }, {
            name: 'Mrs. Ramya M G',
            qualification: 'M.A, N.E.T',
            designation: 'Lecturer',
            achievements: 'Kannada lecturer with 12+ years of experience and N.E.T qualified, focused on effective teaching of language and literature.',
            image: '/teachers/fact-9.jpeg'
        }, {
            name: 'Ms. Granthana',
            qualification: 'M.sc (Mathematics), KSET ',
            designation: 'Lecturer ',
            achievements: 'Mathematics lecturer with M.Sc. and KSET qualification, focused on building strong foundations and student excellence in mathematics.',
            image: '/teachers/fact-10.jpeg'
        },
        {
            name: 'Mr. Srinivas Rao',
            qualification: ' M.A., B.Ed Alankarvidwan in Sanskrit.',
            designation: 'Assistant Professor',
            achievements: 'Sanskrit faculty with 20+ years of teaching experience. BOE and BOS member associated with BCU, BU, BNU, and autonomous colleges, contributing as a paper setter and textbook editor in curriculum development.',
            image: '/teachers/fact-5.jpeg'
        }, {
            name: 'Mrs. Pooja A Kadagave',
            qualification: 'BE, M.Tech  ',
            designation: 'Assistant Professor ',
            achievements: 'Computer Science faculty, M.Tech qualified, focused on building a strong academic foundation and contributing to a positive learning environment.',
            image: '/teachers/fact-6.jpeg'
        }, {
            name: 'Ms. Preethi. M ',
            qualification: 'M.Com',
            designation: 'Assistant Professor ',
            achievements: 'Assistant Professor in Commerce, M.Com. qualified, specializing in Commerce, Management, and Statistics, with international conference publication and academic distinction as Best Outgoing Student.',
            image: '/teachers/fact-11.jpeg'
        }, {
            name: 'Mrs. Sujata Reddy ',
            qualification: 'M.A., B.Ed ',
            designation: 'Assistant Professor ',
            achievements: 'Assistant Professor of English with 3 years of experience, M.A. and B.Ed. qualified, focused on developing students’ interest in language and literature.',
            image: '/teachers/fact-16.jpeg'
        }, {
            name: 'Mrs. Poornima F H ',
            qualification: 'M.Com., B.Ed ',
            designation: 'Assistant Professor',
            achievements: 'Commerce lecturer with 6 years of experience, M.Com. and B.Ed. qualified, with contributions as Chairperson and Co-Paper Setter at Karnataka University, focused on academic excellence.',
            image: '/teachers/fact-17.jpeg'
        }, {
            name: 'Mrs. Sudha K',
            qualification: 'BE, M.Tech',
            designation: 'Assistant Professor',
            achievements: 'Computer Science faculty with 4 years of experience, M.Tech qualified and pursuing Ph.D., specializing in AI/ML with focus on Federated Learning and Explainable AI.',
            image: '/teachers/fact-1.jpeg'
        }, {
            name: 'Mrs. Gayathri K',
            qualification: 'M.A, B.Ed',
            designation: 'Assistant Professor',
            achievements: 'Kannada lecturer with 12 years of experience, serving as NSS Coordinator and promoting student development through academic, cultural, and community initiatives.',
            image: '/teachers/fact-19.jpeg'
        },
        {
            name: 'Ms. Sushma T Y ',
            qualification: 'M.Sc (CS). ',
            designation: 'Assistant Professor ',
            achievements: 'Computer Science faculty with 2 years of industry experience, recognized for academic excellence with 3rd rank in M.Sc. (Computer Science).',
            image: '/teachers/fact-2.jpeg'
        },

    ];

    const filteredFaculty = facultyMembers.filter(f =>
        f.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col">
            {/* Header */}
            <section className="bg-brand-navy text-white py-24 px-4 overflow-hidden relative">
                <div className="container mx-auto text-center space-y-6 relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-display tracking-tight text-white">Our Faculty</h1>
                    <p className="text-xl text-brand-gold max-w-2xl mx-auto font-bold uppercase tracking-widest text-sm font-display">
                        Meet the exceptional educators and industry experts dedication to building the leaders of tomorrow.
                    </p>
                </div>
            </section>

            {/* Filters & Directory */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    {/* Controls */}
                    <div className="flex justify-center mb-16">
                        <div className="relative w-full max-w-xl mx-auto">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search faculty by name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full h-14 pl-12 pr-4 rounded-2xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 shadow-sm transition-all font-bold text-lg"
                            />
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredFaculty.map((f, i) => (
                            <div key={i} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">

                                {/* IMAGE */}
                                <div className="aspect-[4/5] bg-slate-200 relative overflow-hidden">
                                    <img
                                        src={f.image}
                                        alt={f.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />

                                    {/* NAME + ROLE */}
                                    <div className="absolute bottom-6 left-6 right-6 space-y-1">
                                        <div className="text-white text-xl font-black font-display tracking-tight">
                                            {f.name}
                                        </div>
                                        <div className="text-brand-gold text-xs font-black uppercase tracking-[0.2em]">
                                            {f.designation}
                                        </div>
                                    </div>
                                </div>

                                {/* DETAILS BELOW */}
                                <div className="p-6 space-y-5 flex-grow">

                                    {/* QUALIFICATION */}
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-brand-gold font-black mb-1">
                                            Qualification
                                        </p>
                                        <p className="text-sm font-bold text-brand-navy">
                                            {f.qualification}
                                        </p>
                                    </div>

                                    {/* ACHIEVEMENTS */}
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-brand-gold font-black mb-1">
                                            Highlights
                                        </p>
                                        <p className="text-sm text-slate-600 leading-relaxed italic">
                                            {f.achievements}
                                        </p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faculty;
