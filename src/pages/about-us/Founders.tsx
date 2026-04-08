import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const Founders = () => {
  return (
    <PageWrapper>
      <div className="space-y-20 py-10 max-w-6xl mx-auto">
        {/* Hero Section - Portrait & Headline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="px-4 lg:px-12"
        >
          <div className="space-y-8 relative overflow-hidden max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="h-0.5 w-8 bg-brand-gold rounded-full" />
              <p className="text-brand-navy font-bold text-[10px] tracking-[0.3em] uppercase font-display italic">A Legacy of Excellence</p>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl lg:text-5xl font-black font-display text-brand-navy leading-tight italic uppercase">
              Sri. Y. <span className="text-brand-gold">Ramachandra</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="relative mt-8">
              <Quote className="absolute -top-8 -left-8 h-16 w-16 text-gray-100 opacity-30 -z-10 animate-pulse" />
              <div className="space-y-6 text-sm lg:text-base text-slate-600 leading-loose font-medium font-display pr-4 lg:pr-8">
                <p className="text-brand-navy font-bold italic text-base lg:text-lg">
                  Sri. Y. Ramachandra was one of the distinguished pioneers in the field of education in Karnataka. A visionary educationist, statesman, and administrator of exceptional ability, he dedicated his life to the advancement of society through quality education.
                </p>
                <p>
                  He held several prestigious positions during his illustrious career, including Minister in the Government of Karnataka, Mayor of the Corporation of the City of Bangalore, and Member of the Senate, Syndicate, and Academic Council of Mysore and Bangalore Universities. He also served as a Member of the Board of Pre-University Education, Government of Karnataka. In every capacity, he rendered exemplary service marked by integrity, foresight, and rare distinction.
                </p>
                <p>
                  A global thinker with progressive ideals, Sri. Y. Ramachandra travelled extensively to the United States, United Kingdom, Europe, South-East Asia, and other countries at the invitation of foreign governments. He visited internationally reputed universities and studied their academic systems with a vision to strengthen and modernize educational institutions in Karnataka.
                </p>
                <p>
                  Endowed with remarkable vision and administrative acumen, he founded institutions that have continued to serve generations of students with dedication and excellence. Each institution stands as a testament to his selfless service, unwavering commitment, and deep devotion to the noble cause of education.
                </p>
                <p>
                  The enduring success and reputation of these institutions reflect his inspiring legacy. The torch of learning he lit continues to shine brightly, illuminating the path of countless young minds and shaping responsible citizens and future leaders.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final Legacy Banner */}
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
              Continuing the <br /><span className="text-brand-gold">Noble Legacy</span> of Education
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

export default Founders;
