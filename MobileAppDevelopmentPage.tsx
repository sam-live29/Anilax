import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Rocket, 
  Settings, 
  ChevronRight, 
  Plus, 
  Minus,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function MobileAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is mobile app development?",
      answer: "It is the process of creating applications for mobile devices, providing users with functionality and access to services on smartphones and tablets."
    },
    {
      question: "Can you develop cross-platform apps?",
      answer: "Yes, we specialize in both native (iOS & Android) and cross-platform development using frameworks like React Native and Flutter to ensure broad reach with a single codebase."
    },
    {
      question: "How do you ensure app security?",
      answer: "We implement industry-standard security protocols, including data encryption, secure API integrations, and regular security audits to protect user data and ensure compliance."
    },
    {
      question: "Can apps integrate with existing systems?",
      answer: "Absolutely. We build robust APIs and middleware to seamlessly integrate your mobile application with existing ERPs, CRMs, and other backend systems."
    },
    {
      question: "What platforms do you develop for?",
      answer: "We develop for iOS (Apple), Android (Google), and also provide PWA (Progressive Web App) solutions for web-based mobile experiences."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-[#0a0f1a] overflow-hidden">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1a1a] to-[#0a0f1a] opacity-80"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-8xl font-display font-black text-white mb-8 leading-[1.1] tracking-tight">
              Mobile App<br />Development Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 leading-relaxed max-w-2xl">
              Build powerful, scalable, and secure mobile applications for iOS and Android that accelerate user engagement and enhance business growth.
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

      {/* End-to-End Section */}
      <section className="section-container py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight"
          >
            End-to-End<br />Mobile App<br />Development
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-500 leading-relaxed"
          >
            From conceptualization to launch and continuous support, we craft mobile applications tailored to your goals and user expectations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "iOS & Android Development",
              desc: "Build native or cross-platform apps that deliver smooth, high-performance experiences on iOS and Android devices."
            },
            {
              title: "UI/UX Focused Design",
              desc: "Intuitive, user-centered design that enhances usability and drives engagement."
            },
            {
              title: "App Testing & Deployment",
              desc: "End-to-end QA, performance testing, and seamless deployment to App Store and Google Play."
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
              "Their mobile app development team delivered a robust, intuitive app that boosted engagement and user satisfaction across our global audience."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-slate-300"></div>
              <p className="text-slate-500 font-medium">Product Head, Digital Services Company</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-container py-24 md:py-32">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
            Complete Mobile App<br />Development Process
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            Strategy, design, development, and ongoing support tailored for your target audience and business objectives.
          </p>
        </div>

        <div className="space-y-32">
          {[
            {
              title: "Concept & Strategy",
              desc: "Define your app vision, target users, and key metrics for success with expert strategy sessions and planning.",
              link: "Explore strategy",
              img: "https://picsum.photos/seed/mobile1/1200/800",
              alt: "Mobile App Concept & Strategy"
            },
            {
              title: "Design & Prototyping",
              desc: "User interface and experience design with interactive prototypes for user feedback and testing.",
              link: "Explore design",
              img: "https://picsum.photos/seed/mobile2/1200/800",
              alt: "Mobile App UI Design"
            },
            {
              title: "Development & Support",
              desc: "High-quality code, ongoing updates, bug fixes, and performance monitoring post-launch.",
              link: "Explore development",
              img: "https://picsum.photos/seed/mobile3/1200/800",
              alt: "Mobile App Development Team"
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
                <ImagePlaceholder text={item.title} />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* Features with Icons */}
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
                <Smartphone size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 mb-4">User-Centric Mobile Apps</h4>
              <p className="text-slate-500 leading-relaxed">Built for performance, accessibility, and immersive experience.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-8 text-slate-900">
                <Rocket size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 mb-4">Fast Delivery & Support</h4>
              <p className="text-slate-500 leading-relaxed">Efficient development cycles and reliable post-release support.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-lg mb-8 text-slate-900">
                <Settings size={40} />
              </div>
              <h4 className="text-2xl font-bold text-slate-950 mb-4">Flexible Technology Stack</h4>
              <p className="text-slate-500 leading-relaxed">Native, cross-platform, and hybrid app frameworks supported.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-8xl font-display font-black text-slate-950 mb-8 leading-[1.1] tracking-tight">
              Bring Your<br />Mobile App<br />Vision to Life
            </h2>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              Build scalable, secure, and user-focused mobile applications that elevate your digital presence and business growth.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-[#ff5722] font-bold text-xl hover:gap-4 transition-all">
              Talk to our experts <ArrowRight size={24} />
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ImagePlaceholder text="Mobile App Development" />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-24 md:py-32">
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
