import { motion } from "framer-motion";
import {
  Flag,
  TrendingUp,
  Cpu,
  Quote,
  BookOpen,
  GraduationCap,
  Award,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import PageWrapper from "@/components/layout/PageWrapper";
import { containerVariants, itemVariants, viewportConfig } from "@/lib/motion";

const History = () => {
  const milestones = [
    {
      title: "Establishment of the Institution",
      icon: Flag,
      desc: "Founded with a visionary mission to empower women through quality education and value-based learning.",
      step: "Founder's Vision"
    },
    {
      title: "Academic Expansion",
      icon: GraduationCap,
      desc: "Introduction of diverse academic programs in Commerce, Science and Computer Applications.",
      step: "Growth Phase"
    },
    {
      title: "Infrastructure Development",
      icon: BookOpen,
      desc: "Modern classrooms, laboratories, computer facilities and a resource-rich academic library.",
      step: "Excellence"
    },
    {
      title: "Technology Integration",
      icon: Cpu,
      desc: "Adoption of modern technological resources and internet-enabled learning.",
      step: "Modernization"
    },
    {
      title: "Holistic Student Development",
      icon: Award,
      desc: "Extracurricular activities, leadership programs and personality development initiatives.",
      step: "Student First"
    },
    {
      title: "Continuing the Founder’s Vision",
      icon: TrendingUp,
      desc: "Carrying forward the legacy of Sri. Y. Ramachandra through academic excellence and social responsibility.",
      step: "Legacy"
    }
  ];

  return (
    <PageWrapper>
      <div className="space-y-24 py-12 max-w-6xl mx-auto px-4 md:px-0">

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="relative group lg:mb-12"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity" />
          <div className="space-y-6 relative z-10 text-center lg:text-left">
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3">
              <div className="h-1 lg:h-1.5 w-12 bg-brand-gold rounded-full" />
              <p className="text-brand-navy font-black text-[10px] lg:text-xs tracking-[0.4em] uppercase font-display italic">Our Legacy</p>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-3xl lg:text-6xl font-black font-display text-brand-navy leading-tight tracking-tight italic uppercase">
              A Visionary <span className="text-brand-gold">Foundation</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-slate-500 text-sm lg:text-base leading-relaxed max-w-4xl font-medium  font-display mx-auto lg:mx-0">
              The foundation of the institution is deeply rooted in the visionary ideals of Sri. Y. Ramachandra, a distinguished educationist, freedom fighter, and former Mayor of Bangalore.
            </motion.p>
          </div>
        </motion.div>

        {/* Narrative Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="p-8 lg:p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 space-y-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/10 transition-colors" />
            <div className="space-y-4 text-slate-600 leading-relaxed font-bold italic font-display text-sm lg:text-base">
              <p>
                Sri. Y. Ramachandra was a distinguished educationist, freedom fighter, former Mayor of Bangalore,
                and Minister in the Government of Karnataka.
              </p>
              <p>
                With a strong commitment to social progress and educational empowerment,
                he established the institution to create opportunities for young women
                to achieve academic excellence and personal growth.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="p-8 lg:p-10 bg-brand-navy rounded-[2.5rem] border border-white/5 space-y-6 relative overflow-hidden group text-white">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50" />
            <div className="space-y-4 text-white   leading-relaxed font-bold italic font-display text-sm lg:text-base">
              <p>
                Guided by foresight and dedication, the institution was envisioned as
                a center of learning where knowledge, discipline and values shape
                future generations.
              </p>
              <p>
                Today, we continue to uphold these standards, ensuring that every student who walks through our doors is prepared for the challenges of the modern world.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="relative bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-16 overflow-hidden shadow-xl text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.1)_0%,transparent_70%)]" />
          <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
            <motion.div variants={itemVariants} className="flex justify-center">
              <Quote className="h-10 w-10 text-brand-gold opacity-50" />
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-2xl lg:text-4xl font-black font-display italic uppercase leading-tight text-blue-100">
              “Education is the most powerful instrument of <span className="text-brand-gold">social transformation</span>.”
            </motion.h2>
            <motion.div variants={itemVariants} className="space-y-1">
              <div className="h-px w-12 bg-brand-gold mx-auto mb-2" />
              <p className="text-brand-gold font-black text-[10px] tracking-[0.4em] uppercase font-display ">Founder's Philosophy</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative overflow-hidden py-20 lg:py-28 rounded-[60px]">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/background/bg1.jpeg"
              alt="Background"
              className="w-full h-full object-cover blur-sm scale-110 "
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-white/20" />
          </div>

          {/* Content */}
          <div className="relative z-10 space-y-16 max-w-7xl mx-auto px-6">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={containerVariants}
              className="text-center space-y-4"
            >
              <motion.p variants={itemVariants} className="text-brand-gold font-black text-[10px] tracking-[0.4em] uppercase font-display ">
                Decades of Excellence
              </motion.p>

              <motion.h2 variants={itemVariants} className="text-2xl lg:text-4xl font-black font-display text-brand-navy italic uppercase">
                Institutional <span className="text-brand-gold">Milestones</span> 
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {milestones.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  variants={containerVariants}
                  className="relative group"
                >
                  <div className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col gap-6 relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-gold/10 transition-colors" />

                    <div className="h-12 w-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100 text-brand-gold shadow-sm group-hover:bg-brand-navy group-hover:text-white transition-all duration-500">
                      <item.icon className="h-6 w-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-black font-display text-brand-navy italic uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium leading-relaxed font-display">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-[10px] font-black font-display text-brand-gold uppercase tracking-[0.2em] italic">
                        {item.step}
                      </span>

                      <ArrowRight className="h-4 w-4 text-brand-gold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* Final Vision Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={containerVariants}
          className="bg-brand-navy text-white rounded-[2.5rem] p-10 lg:p-16 overflow-hidden relative border-b-[8px] border-brand-gold shadow-xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 text-center lg:text-left space-y-10">
            <div className="space-y-4">
              <motion.h3 variants={itemVariants} className="text-2xl lg:text-5xl text-blue-100 font-black font-display tracking-tight uppercase italic leading-none">Continuing the <br /><span className="text-brand-gold">Legacy</span></motion.h3>
              <motion.p variants={itemVariants} className=" text-blue-100/80 font-medium font-display text-sm lg:text-base leading-relaxed">
                The institution continues to nurture talent, encourage innovation, and provide a learning environment that empowers students to become responsible citizens and future leaders.
              </motion.p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.div variants={itemVariants}>
                <Link
                  to="/academics"
                  className="px-8 py-4 bg-brand-gold text-brand-navy rounded-xl font-black text-[10px] tracking-[0.3em] uppercase flex items-center gap-3 transition-all font-display active:scale-95 shadow-xl shadow-yellow-900/40 hover:bg-white"
                >
                  Explore Our Programs <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
};

export default History;