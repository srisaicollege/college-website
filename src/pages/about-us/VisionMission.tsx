import { motion } from "framer-motion";
import {
  Target,
  Award,
  ShieldCheck,
  Heart,
  Rocket,
  Lightbulb,
  Users,
  Star,
  Sparkles,
  ArrowRight
} from "lucide-react";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const missionPoints = [
  {
    icon: Award,
    title: "Academic Excellence",
    desc: "To provide exceptional quality education through advanced infrastructure, innovative teaching methodologies, and industry-relevant knowledge that prepares students for successful careers."
  },
  {
    icon: Lightbulb,
    title: "Innovation & Growth",
    desc: "To cultivate a culture of innovation, critical thinking, and creativity that enables students to confidently navigate and lead in a dynamic global landscape."
  },
  {
    icon: ShieldCheck,
    title: "Ethical Values",
    desc: "To instill a deep sense of ethical values, social commitment, and civic responsibility, shaping socially conscious citizens."
  },
  {
    icon: Heart,
    title: "Holistic Development",
    desc: "To nurture moral, spiritual, and cultural values through thoughtfully designed programs that promote holistic development."
  },
  {
    icon: Users,
    title: "Empowered Leadership",
    desc: "To develop strong leadership qualities, empowering students to take initiative, influence change, and contribute to society."
  },
  {
    icon: Rocket,
    title: "Entrepreneurial Spirit",
    desc: "To encourage entrepreneurial mindset and self-reliance, inspiring students to become innovators and creators of opportunity."
  },
  {
    icon: Star,
    title: "Distinguished Model",
    desc: "To establish our college as a distinguished model institution in women's education, recognized for academic excellence and societal impact."
  }
];

const VisionMission = () => {
  return (
    <PageWrapper>
      <div className="space-y-24 py-10">
        {/* Immersive Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={itemVariants}
          className="text-center space-y-4 max-w-2xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
            <div className="h-0.5 w-8 bg-brand-gold rounded-full" />
            <p className="text-brand-navy font-bold text-[10px] tracking-[0.3em] uppercase font-display italic">Our Ethical North Star</p>
            <div className="h-0.5 w-8 bg-brand-gold rounded-full" />
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-3xl lg:text-4xl font-black font-display text-brand-navy leading-tight italic uppercase">
            Vision & <span className="text-brand-gold">Mission</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-slate-500 text-sm lg:text-base font-bold italic font-display leading-relaxed">
            Empowering women through transformative education and character building.
          </motion.p>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="bg-brand-navy rounded-[3rem] p-8 lg:p-16 overflow-hidden border-b-4 border-brand-gold shadow-xl relative max-w-5xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6">
              <div className="h-16 w-16 bg-brand-gold rounded-2xl flex items-center justify-center shadow-lg shadow-brand-gold/20 rotate-6">
                <Target className="h-8 w-8 text-brand-navy" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black font-display text-white italic uppercase leading-tight">
                Our <br /><span className="text-brand-gold">Vision</span>
              </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <p className="text-sm lg:text-base xl:text-lg font-medium font-display text-blue-50/90 italic leading-loose">
                "To emerge as a premier institution of excellence dedicated to empowering women through transformative education, fostering intellectual growth, integrity, and lifelong learning in an inspiring and progressive academic environment."
              </p>
              <div className="mt-6 h-0.5 w-16 bg-brand-gold rounded-full opacity-50" />
            </motion.div>
          </div>
        </motion.div>

        {/* Mission Section */}
        <div className="relative overflow-hidden py-20 lg:py-28 rounded-[60px] lg:rounded-t-[80px]">

          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="/background/bg1.jpeg"
              alt="Background"
              className="w-full h-full object-cover blur-sm scale-110 "
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-white/20" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 space-y-16 max-w-6xl mx-auto px-6">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={itemVariants}
              className="text-center space-y-3"
            >
              <div className="flex justify-center mb-4">
                <Sparkles className="h-6 w-6 text-brand-gold animate-pulse" />
              </div>

              <h3 className="text-2xl lg:text-3xl font-black font-display text-brand-navy uppercase italic">
                Strategic <span className="text-brand-gold">Mission</span>
              </h3>

              <p className="text-slate-400 font-bold italic font-display uppercase tracking-[0.2em] text-[10px]">
                Our roadmap to empowering the next generation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {missionPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  variants={containerVariants}
                  className={`relative group ${i === 6 ? "lg:col-span-3 lg:max-w-xl lg:mx-auto" : ""}`}
                >
                  <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col gap-6 relative overflow-hidden">

                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/10 transition-colors" />

                    {/* Icon */}
                    <div className={`h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 ${i === 6 ? "mx-auto" : ""}`}>
                      <point.icon className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <div className={`space-y-2 ${i === 6 ? "text-center" : ""}`}>
                      <h4 className="text-lg font-black font-display text-brand-navy italic uppercase tracking-tight">
                        {point.title}
                      </h4>
                      <p className="text-slate-500 text-sm font-medium font-display leading-relaxed">
                        {point.desc}
                      </p>
                    </div>

                    {/* Bottom Strip */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-[10px] font-black font-display text-brand-gold uppercase tracking-[0.2em] italic">
                        Mission {i + 1}
                      </span>

                      <ArrowRight className="h-4 w-4 text-brand-gold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Commitment Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="bg-brand-navy rounded-[3rem] p-8 lg:p-12 overflow-hidden border-b-8 border-brand-gold shadow-xl text-center relative max-w-4xl mx-auto"
        >

          {/* Glow background */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto space-y-4 relative z-10"
          >

            <h4 className="text-xl lg:text-2xl font-black font-display text-blue-100 italic uppercase leading-tight">
              A Legacy of <span className="text-brand-gold">Transformation</span>
            </h4>

            <p className="text-blue-100/80 font-medium font-display text-sm lg:text-base leading-relaxed">
              Every initiative, program, and facility at Sri Sai College is aligned with
              this vision, ensuring our students transition from learners to leaders.
            </p>

            {/* gold divider */}
            <div className="pt-2">
              <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
            </div>

          </motion.div>

        </motion.div>
      </div>
    </PageWrapper>
  );
};

export default VisionMission;

