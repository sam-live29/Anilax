import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Minus,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Users,
  Layout,
  Globe,
  Scale,
  Settings,
  Video,
  BookOpen,
  CreditCard,
  Monitor
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function OnlineClassPortalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the Online Class/Tutorial Portal?",
      answer: "It's an all-in-one learning management solution that helps tutors and institutions host, manage, and deliver online classes efficiently."
    },
    {
      question: "Does it support live and recorded sessions?",
      answer: "Yes, our platform allows you to host interactive live classes and upload recorded lessons for students to learn anytime, anywhere."
    },
    {
      question: "Can it be used by individual tutors?",
      answer: "Absolutely. Our portal is designed to scale from individual tutors to large educational institutions."
    },
    {
      question: "Does it include payment and enrollment management?",
      answer: "Yes, we provide integrated tools for managing student enrollments and accepting payments securely through multiple gateways."
    },
    {
      question: "Is it mobile-friendly?",
      answer: "Yes, the portal is fully responsive and optimized for mobile devices, ensuring a seamless learning experience on the go."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-sm md:text-base font-black text-slate-900 uppercase tracking-[0.3em] mb-6">
              ONLINE CLASS / TUTORIAL PORTAL
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Empower Learning with<br />Smart Digital Classrooms
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our Online Class & Tutorial Portal helps educators, institutes, and learners connect through seamless virtual classrooms, live sessions, and interactive learning experiences — all in one platform.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="Online Class Tutorial Portal" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* All-in-One Section */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Transform Learning with Technology
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Deliver high-quality online education through live and recorded sessions, manage courses, assessments, and student progress from one central dashboard designed for modern learning needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">All-in-One Education Platform</h3>
            <p className="text-slate-500 leading-relaxed">
              From live classes to pre-recorded tutorials, our platform enables institutes and tutors to teach efficiently, engage students, and track performance through analytics.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Student-Centric Learning</h3>
            <p className="text-slate-500 leading-relaxed">
              Provide personalized learning paths, interactive quizzes, progress tracking, and certification features to enhance student outcomes.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Seamless Administration</h3>
            <p className="text-slate-500 leading-relaxed">
              Automate enrollments, scheduling, attendance, and payments while maintaining clear communication between teachers and students.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "Anilax Software's tutorial platform made our online classes more engaging and efficient. We scaled to 10,000+ learners within months."
            </p>
            <p className="font-bold text-slate-900">— Founder, EduConnect Academy</p>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-black text-slate-950 mb-8">
            Who Can Benefit?
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Our Online Class & Tutorial Portal is designed for educational institutions, training organizations, and individual tutors who want to deliver efficient, engaging, and scalable learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Schools & Colleges", desc: "Digitize classrooms with attendance, assignments, grading, and student management tools integrated into one platform." },
            { title: "Coaching & Training Centers", desc: "Conduct live and recorded sessions, manage batches, track student progress, and provide online test series efficiently." },
            { title: "Private Tutors", desc: "Build your online presence, host classes, share study materials, and receive payments directly through a secure portal." },
            { title: "Corporate Trainers", desc: "Offer employee training programs with progress tracking, video sessions, and performance analytics to enhance skills." },
            { title: "EdTech Startups", desc: "Launch scalable online education platforms with integrated content management, payments, and learning analytics tools." },
            { title: "Skill Development Institutes", desc: "Deliver government or private training programs with certification, performance dashboards, and compliance reporting." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50/50 p-10 rounded-[2rem] border border-slate-100">
              <h3 className="text-xl font-bold text-slate-950 mb-4">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="bg-black text-white py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-4xl md:text-7xl font-display font-black mb-8">
              Platform Highlights<br />& Benefits
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our platform makes digital education smarter, faster, and more accessible with seamless integrations and powerful management tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Video, title: "Live & Recorded Classes", desc: "Host interactive live classes, upload recorded lessons, and allow students to learn anytime, anywhere." },
              { icon: BookOpen, title: "Smart Assessment Tools", desc: "Create quizzes, assignments, and auto-graded tests with instant feedback and reporting." },
              { icon: Monitor, title: "Student Management System", desc: "Track attendance, performance, payments, and communication — all within one intuitive dashboard." },
              { icon: CreditCard, title: "Payment Integration", desc: "Accept payments securely through multiple gateways and manage subscriptions for courses or sessions." },
              { icon: BarChart3, title: "Analytics & Reports", desc: "Get detailed insights into student engagement, completion rates, and class performance with visual reports." },
              { icon: Scale, title: "Scalable & Customizable", desc: "Scale easily from small tutoring sessions to global learning platforms with branded customization options." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors">
                <item.icon className="text-[#ff5722] mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
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
