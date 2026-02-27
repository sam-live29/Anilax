import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Video,
  ChevronRight, 
  Plus, 
  Minus,
  CheckCircle2,
  ArrowRight,
  Globe,
  Zap,
  ShieldCheck
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function EdTechLearningPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is EdTech & Learning Software?",
      answer: "EdTech refers to the use of technology to enhance teaching and learning. Our software solutions include Learning Management Systems (LMS), virtual classrooms, and interactive educational tools."
    },
    {
      question: "Can you build custom LMS platforms?",
      answer: "Yes, we build fully customized Learning Management Systems tailored to the specific needs of schools, universities, and corporate training programs."
    },
    {
      question: "Does your software support virtual classrooms?",
      answer: "Absolutely. We integrate high-quality video conferencing, real-time whiteboards, and collaborative tools to create immersive virtual learning environments."
    },
    {
      question: "How do you handle student data privacy?",
      answer: "We prioritize data security and comply with global standards like GDPR and FERPA to ensure that student and institutional data is always protected."
    },
    {
      question: "Can your platforms integrate with existing school systems?",
      answer: "Yes, our solutions are designed to integrate seamlessly with existing Student Information Systems (SIS), ERPs, and other educational databases."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-[#0a0f1a] overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#1a1a2e] to-[#0a0f1a] opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8 leading-[1.1] tracking-tight">
              EdTech & Learning<br />Software Solutions
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
              Education powered by technology. We build innovative platforms that transform the way knowledge is shared and acquired globally.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-orange-500/20"
            >
              Get started
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Core Solutions Section */}
      <section className="section-container py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight"
          >
            Empowering<br />Modern Education
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 leading-relaxed"
          >
            Comprehensive digital tools designed to enhance the learning experience for students, teachers, and administrators alike.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Learning Management Systems",
              desc: "Scalable LMS platforms for course management, student tracking, and automated grading systems."
            },
            {
              title: "Virtual Classroom Software",
              desc: "Real-time interactive learning with video, whiteboards, and collaborative document editing."
            },
            {
              title: "Adaptive Learning Tools",
              desc: "AI-driven platforms that personalize the educational journey based on individual student performance."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{card.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-slate-50/50 py-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-2xl md:text-4xl font-serif italic text-slate-800 leading-relaxed mb-10">
              "The custom LMS developed by Anilax has completely transformed our online training programs, making them more engaging and easier to manage."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-slate-300"></div>
              <p className="text-slate-500 font-medium">Director of Innovation, Global Education Group</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-container py-24 md:py-32">
        <div className="space-y-32">
          {[
            {
              title: "Interactive Content Delivery",
              desc: "Engage students with rich multimedia content, interactive quizzes, and gamified learning modules.",
              link: "Explore content tools",
              img: "https://picsum.photos/seed/edtech1/1200/800",
              alt: "Interactive Learning"
            },
            {
              title: "Data-Driven Insights",
              desc: "Comprehensive analytics dashboards for teachers and parents to monitor progress and identify areas for improvement.",
              link: "Explore analytics",
              img: "https://picsum.photos/seed/edtech2/1200/800",
              alt: "Educational Analytics"
            },
            {
              title: "Seamless Integration",
              desc: "Connect your learning platform with existing ERPs, payment gateways, and communication tools.",
              link: "Explore integrations",
              img: "https://picsum.photos/seed/edtech3/1200/800",
              alt: "System Integration"
            }
          ].map((item, i) => (
            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={i % 2 === 0 ? "order-1" : "order-1 lg:order-2"}
              >
                <h3 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6">{item.title}</h3>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">{item.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-[#ff5722] font-bold text-lg hover:gap-4 transition-all">
                  {item.link} <ArrowRight size={20} />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={i % 2 === 0 ? "order-2" : "order-2 lg:order-1"}
              >
                <ImagePlaceholder text={item.alt} />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Icons */}
      <section className="bg-slate-50 py-24 md:py-32">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-8 text-slate-900">
                <Globe size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 mb-4">Global Reach</h4>
              <p className="text-slate-500 leading-relaxed">Scalable platforms that support learners across different time zones and languages.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-8 text-slate-900">
                <Zap size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 mb-4">Real-Time Interaction</h4>
              <p className="text-slate-500 leading-relaxed">Low-latency video and collaborative tools for seamless virtual classrooms.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-8 text-slate-900">
                <ShieldCheck size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 mb-4">Secure & Compliant</h4>
              <p className="text-slate-500 leading-relaxed">Built with privacy in mind, ensuring full compliance with educational data standards.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="section-container max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 text-center mb-20">
            Frequently<br />Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl overflow-hidden border transition-all duration-300 ${openFaq === i ? 'border-[#ff5722] shadow-xl shadow-orange-500/5' : 'border-slate-100 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors ${openFaq === i ? 'text-slate-950' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    {openFaq === i ? (
                      <Minus className="text-[#ff5722]" size={24} />
                    ) : (
                      <Plus className="text-[#ff5722]" size={24} />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-slate-500 text-lg leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
