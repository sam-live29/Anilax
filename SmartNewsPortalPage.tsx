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
  Newspaper,
  Cpu,
  Share2
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function SmartNewsPortalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the Smart News Portal?",
      answer: "It's a powerful digital publishing platform that enables media organizations and journalists to create, manage, and distribute content seamlessly."
    },
    {
      question: "Can it support multimedia content?",
      answer: "Yes, our portal supports a wide range of multimedia including high-resolution images, videos, podcasts, and interactive graphics."
    },
    {
      question: "Does it include SEO optimization?",
      answer: "Absolutely. We provide AI-powered SEO tools to generate friendly headlines, meta tags, and content recommendations to improve search rankings."
    },
    {
      question: "Can it handle multiple language editions?",
      answer: "Yes, our platform is built for global reach and supports multi-language publishing and localized content delivery."
    },
    {
      question: "Is it scalable for large news networks?",
      answer: "Our cloud-native architecture is designed to handle high traffic volumes and large content databases without performance degradation."
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
              SMART NEWS PORTAL
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              Manage News Smartly,<br />Deliver Stories Faster
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our Smart News Portal empowers media organizations, journalists, and publishers to manage, curate, and distribute news content efficiently across web and mobile platforms with advanced automation, analytics, and monetization features.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="Smart News Portal" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* All-in-One Section */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            Digital-First News Management
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Streamline your newsroom operations with powerful CMS features, AI-driven content categorization, automated publishing tools, and live analytics — all designed for modern digital journalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">AI-Powered News Automation</h3>
            <p className="text-slate-500 leading-relaxed">
              Leverage artificial intelligence to auto-tag stories, generate SEO-friendly headlines, and recommend related content to keep readers engaged and informed.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Multi-Platform Publishing</h3>
            <p className="text-slate-500 leading-relaxed">
              Publish and manage content across websites, mobile apps, and social media platforms seamlessly from one centralized dashboard.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Real-Time Analytics & Monetization</h3>
            <p className="text-slate-500 leading-relaxed">
              Track audience engagement, ad performance, and readership trends with real-time insights to maximize reach and revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "With the Smart News Portal by Anilax Software, we automated content publishing and saw a 40% boost in engagement within the first quarter."
            </p>
            <p className="font-bold text-slate-900">— Editor-in-Chief, National News Network</p>
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
            Our Smart News Portal is built for digital publishers, media houses, and independent journalists who need speed, control, and analytics-driven news delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Media Companies", desc: "Run multiple online channels, manage editorial workflows, and automate publishing for faster and smarter content distribution." },
            { title: "Independent Journalists", desc: "Publish your stories, manage your audience, and monetize content through ads or subscriptions — all in one platform." },
            { title: "News Agencies", desc: "Distribute stories to multiple outlets, manage contributors, and track news performance with centralized reporting tools." },
            { title: "Corporate Publishers", desc: "Create and share press releases, manage media relations, and track coverage across multiple media platforms efficiently." },
            { title: "Educational Institutions", desc: "Run digital newsletters, student news portals, and faculty blogs with integrated moderation and publishing tools." },
            { title: "Government & Public Sector", desc: "Publish official announcements, manage public updates, and ensure transparency through a secure and scalable news system." }
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
              Built for speed, scalability, and storytelling — our Smart News Portal delivers the tools needed to run a digital newsroom efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Cpu, title: "AI-Driven CMS", desc: "Automate categorization, recommendations, and SEO optimizations with machine learning algorithms." },
              { icon: Layout, title: "Customizable Layouts", desc: "Design beautiful, responsive pages using drag-and-drop modules and customizable templates tailored for news publishers." },
              { icon: Zap, title: "Live Content Updates", desc: "Publish and update news in real time with live notifications and automated social media sharing." },
              { icon: BarChart3, title: "Integrated Monetization", desc: "Support ad placements, subscriptions, and sponsored content for diversified revenue streams." },
              { icon: Globe, title: "Real-Time Analytics", desc: "Monitor traffic, engagement, and ad revenue with real-time dashboards and custom reports." },
              { icon: ShieldCheck, title: "Security & Compliance", desc: "Ensure secure publishing with role-based access control, content moderation, and data protection measures." }
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
