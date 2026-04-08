import { motion } from "framer-motion";
import { Quote, User, Briefcase, Globe, GraduationCap } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const ChairmanMessage = () => {
  return (
    <PageWrapper>
      <div className="space-y-20 py-10 max-w-6xl mx-auto">
        {/* Hero Section - Message & Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="px-4 lg:px-12"
        >
          {/* Letter / Message Column */}
          <div className="space-y-8 relative overflow-hidden max-w-4xl mx-auto">

            {/* Background Quote */}
            <Quote
              className="absolute right-[-120px] top-[-80px] w-[420px] h-[420px] opacity-[0.06] pointer-events-none"
              style={{
                background: "linear-gradient(135deg,#eab308,#1e293b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            />

            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="h-0.5 w-8 bg-brand-gold rounded-full" />
              <p className="text-brand-navy font-bold text-[10px] tracking-[0.3em] uppercase font-display italic">
                From the Chairman's Desk
              </p>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl lg:text-5xl font-black font-display text-brand-navy leading-tight italic uppercase relative z-10"
            >
              The Foundation of <br />
              <span className="text-brand-gold">Progressive Societies</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="relative mt-8 z-10">
              <Quote className="absolute -top-8 -left-8 h-16 w-16 text-gray-100 opacity-30 -z-10 animate-pulse" />

              <div className="space-y-6 text-sm lg:text-base text-slate-600 leading-loose font-medium font-display pr-4 lg:pr-8">
                <p>
                  Education is the foundation upon which strong individuals and progressive societies are built. At our institution, we are committed to nurturing young minds through academic excellence, value-based learning, and holistic development.
                </p>

                <p>
                  Inspired by the visionary ideals of our Founder, we strive to create an environment that empowers women with confidence, competence, and character. Our focus extends beyond classroom learning — we aim to develop leadership qualities, professional skills, and a strong sense of social responsibility.
                </p>

                <p>
                  We believe that every student carries immense potential. With the right guidance, discipline, and encouragement, that potential transforms into success.
                </p>

                <p>
                  I warmly welcome you to be a part of our journey towards excellence and meaningful achievement.
                </p>

                <div className="pt-6 mt-6 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center font-bold text-brand-navy">
                      RA
                    </div>

                    <div>
                      <p className="text-lg font-bold text-brand-navy italic">
                        Sri. R. Ananda
                      </p>

                      <p className="text-xs text-brand-gold uppercase tracking-widest font-semibold">
                        Chairman
                      </p>

                      <p className="text-xs text-slate-500">
                        Sri Sai College for Women
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="px-4 lg:px-12"
        >
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-xl border border-slate-100 p-10 lg:p-14 space-y-12 group">


            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-gold font-bold italic font-display">
                Leadership Profile
              </p>

              <h2 className="text-3xl lg:text-4xl font-black text-brand-navy font-display italic uppercase">
                About <span className="text-brand-gold">Sri. R. Ananda</span>
              </h2>

              <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
            </motion.div>


            {/* Biography */}
            <motion.div variants={itemVariants} className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm group-hover:bg-brand-navy transition-colors">
                  <User className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-black font-display text-brand-navy uppercase italic">
                  Personal <span className="text-brand-gold">Background</span>
                </h3>
              </div>

              <div className="grid gap-4">
                {[
                  "Born on 3rd November 1952, Sri. R. Ananda is a respected academic administrator and Chartered Accountant.",
                  "Son of Sri. Y. Ramachandra — freedom fighter, former Mayor of Bangalore and Minister in the Government of Karnataka.",
                  "Raised in a values-driven family environment that emphasized discipline, education, and public service.",
                  "Inspired by his mother Smt. Saroja Ramachandra who played a vital role in shaping his character."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group/item">
                    <div className="mt-1.5 flex-shrink-0 h-2 w-2 rounded-full bg-brand-gold group-hover/item:scale-150 transition-transform" />
                    <p className="text-slate-600 text-sm font-bold leading-relaxed group-hover/item:text-brand-navy transition-colors italic font-display">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>


            {/* Professional Leadership */}
            <motion.div variants={itemVariants} className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm group-hover:bg-brand-navy transition-colors">
                  <Briefcase className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-black font-display text-brand-navy uppercase italic">
                  Professional <span className="text-brand-gold">Leadership</span>
                </h3>
              </div>

              <div className="grid gap-4">
                {[
                  "Chairman, Bangalore Branch of Southern India Regional Council, ICAI",
                  "President, Karnataka State Chartered Accountants Association",
                  "Member, Tax Advisory Committee, Government of Karnataka",
                  "Member, Taxation Committee, Federation of Karnataka Chambers of Commerce and Industry",
                  "Member, University Liaison, Public Relations and IT Committees of ICAI"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group/item">
                    <div className="mt-1.5 flex-shrink-0 h-2 w-2 rounded-full bg-brand-gold group-hover/item:scale-150 transition-transform" />
                    <p className="text-slate-600 text-sm font-bold leading-relaxed group-hover/item:text-brand-navy transition-colors italic font-display">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>


            {/* Global Representation */}
            <motion.div variants={itemVariants} className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm group-hover:bg-brand-navy transition-colors">
                  <Globe className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-black font-display text-brand-navy uppercase italic">
                  Global <span className="text-brand-gold">Representation</span>
                </h3>
              </div>

              <div className="bg-slate-50 italic border border-slate-100 rounded-2xl p-6 text-sm text-slate-600 leading-relaxed font-display">
                As an official delegate of ICAI, he represented India internationally
                in Australia, China, Sri Lanka, Hong Kong, Malaysia, Singapore,
                and the Middle East studying global corporate practices and
                economic systems that enriched his administrative vision.
              </div>
            </motion.div>


            {/* Education Contribution */}
            <motion.div variants={itemVariants} className="space-y-6">

              <div className="flex items-center gap-4">
                <div className="h-10 w-10 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm group-hover:bg-brand-navy transition-colors">
                  <GraduationCap className="h-5 w-5" />
                </div>

                <h3 className="text-xl font-black font-display text-brand-navy uppercase italic">
                  Contribution to <span className="text-brand-gold">Education</span>
                </h3>
              </div>

              <div className="grid gap-4">
                {[
                  "Director, Modern Institute of Management and Business Administration",
                  "Chairman, Finance Sub-Committee & Senate Member, Bangalore University",
                  "Member, Board of Management of various colleges under Bangalore University",
                  "Member, Board of Studies & Faculty of Commerce and Management",
                  "Member, Fee Fixation Committee for Professional Courses, Government of Karnataka"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 group/item">
                    <div className="mt-1.5 flex-shrink-0 h-2 w-2 rounded-full bg-brand-gold group-hover/item:scale-150 transition-transform" />
                    <p className="text-slate-600 text-sm font-bold leading-relaxed group-hover/item:text-brand-navy transition-colors italic font-display">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>


          </div>
        </motion.section>



        {/* Final Welcome Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="bg-brand-navy rounded-[3rem] p-8 lg:p-12 overflow-hidden border-b-8 border-brand-gold shadow-xl text-center relative mx-4 lg:mx-12"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <motion.h2 variants={itemVariants} className="text-2xl lg:text-3xl font-black font-display text-blue-100 italic uppercase leading-tight">
              Join a Community of <br /><span className="text-brand-gold">Empowered Achievers</span>
            </motion.h2>
            <motion.div variants={itemVariants} className="pt-2">
              <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default ChairmanMessage;
