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
  SmartphoneCharging,
  RefreshCw,
  Layers,
  Monitor,
  Lock,
  Heart,
  GraduationCap,
  ShoppingBag,
  Plane
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function B2CSoftwarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the B2C Software platform?",
      answer: "Our B2C Software helps businesses engage and retain customers through an integrated platform for sales, payments, marketing, and analytics — designed for global scalability."
    },
    {
      question: "Can it integrate with my existing systems?",
      answer: "Yes, our B2C platform is designed with a modular architecture that allows seamless integration with your existing CRM, ERP, or payment infrastructure."
    },
    {
      question: "Does it support multi-currency and localization?",
      answer: "Absolutely. The platform supports multiple currencies, languages, and regional tax regulations to help you scale your business globally."
    },
    {
      question: "Is it suitable for startups and enterprises alike?",
      answer: "Yes, our solution is highly scalable, making it perfect for both growing startups and large-scale enterprises looking for a unified customer engagement platform."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer end-to-end technical support, including implementation guidance, regular updates, and 24/7 monitoring to ensure your platform's success."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center pt-20 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-sm md:text-base font-black text-slate-900 uppercase tracking-[0.3em] mb-8">
              B2C SOFTWARE
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-10 leading-[1.1] tracking-tight">
              Spend Smart and Scale Faster with Our B2C Platform
            </h1>
            <p className="text-lg md:text-2xl text-slate-600 mb-14 leading-relaxed max-w-3xl mx-auto">
              Deliver personalized digital experiences with our end-to-end B2C Software solution. From e-commerce to fintech, manage customer engagement, payments, and analytics in one unified platform designed for scalability and performance.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-12 py-5 rounded-full font-bold text-xl shadow-xl shadow-slate-200/50 transition-all mb-20"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-10">
              <ImagePlaceholder text="B2C Software Platform" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-container py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ImagePlaceholder text="B2C Engagement" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
                All-in-One B2C Management Platform
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                Our B2C Software helps you engage customers, manage digital transactions, and analyze performance seamlessly. Designed to empower businesses across industries, it integrates marketing automation, analytics, and secure payment infrastructure.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Personalized Customer Experiences
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Deliver tailored products, offers, and content to your customers with AI-driven analytics and behavior tracking. Boost engagement and retention across all touchpoints — web, app, or POS.
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-6">
                Payments, Loyalty & Analytics Unified
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed">
                Accept payments globally with multi-currency support, reward users through integrated loyalty programs, and measure success with real-time performance dashboards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "With Anilax Software's B2C platform, we grew our customer base by 250% while reducing operational overhead by 40%."
            </p>
            <p className="font-bold text-slate-900">— CEO, E-commerce Retail Brand</p>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8">
            Who Can Benefit?
          </h2>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            Our B2C Software empowers businesses of all scales to enhance customer engagement, streamline operations, and drive sustainable growth in the digital marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Retail & E-commerce", desc: "Manage your entire online retail ecosystem — from inventory and payments to personalized offers and customer loyalty programs — all in one place." },
            { title: "Fintech & Digital Wallets", desc: "Enable secure transactions, instant onboarding, and cashback features to increase retention. Integrate payment gateways and wallets for seamless financial experiences." },
            { title: "Travel & Hospitality", desc: "Automate bookings, handle payments, and deliver personalized travel packages. Provide loyalty rewards and improve customer satisfaction through digital engagement tools." },
            { title: "Subscription-Based Businesses", desc: "Manage recurring payments, renewals, and billing cycles effortlessly. Integrate smart analytics to predict churn and enhance customer lifetime value." },
            { title: "Healthcare & Wellness Platforms", desc: "Engage patients or users through appointment scheduling, subscription plans, and health tracking while maintaining data privacy and compliance." },
            { title: "Educational & Learning Apps", desc: "Provide secure course access, manage student subscriptions, and monitor engagement metrics to enhance digital learning outcomes." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-50/30 p-10 rounded-[2.5rem] border border-slate-100 text-center">
              <h3 className="text-2xl font-black text-slate-950 mb-6">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="bg-black text-white py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem]">
        <div className="section-container">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <h2 className="text-4xl md:text-8xl font-display font-black mb-10">
              Why Choose Our B2C Platform?
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Built for speed, scalability, and customer-centricity, our B2C Software helps businesses automate growth and create seamless digital experiences from acquisition to retention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Omnichannel Engagement", desc: "Unify customer interactions across web, mobile, and in-store platforms for a consistent and connected experience." },
              { title: "Data-Driven Insights", desc: "Leverage analytics dashboards to monitor customer behavior, sales trends, and engagement performance in real time." },
              { title: "Secure Payment Integrations", desc: "Support for multiple gateways, wallets, and currencies ensures fast and secure transactions for global audiences." },
              { title: "Marketing Automation", desc: "Design and launch targeted campaigns with dynamic segmentation, behavioral triggers, and automated notifications." },
              { title: "White-Label Ready", desc: "Deploy your brand's personalized version of the platform, complete with your logo, colors, and domain." },
              { title: "Enterprise-Grade Security", desc: "Protect user data with encrypted transactions, GDPR-compliant data handling, and advanced fraud detection systems." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-colors text-center">
                <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="section-container max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-display font-black text-slate-950 text-center mb-24">
            Frequently<br />Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 ${openFaq === i ? 'border-[#ff5722] shadow-2xl shadow-orange-500/10' : 'border-slate-100 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left"
                >
                  <span className={`text-xl md:text-2xl font-bold transition-colors ${openFaq === i ? 'text-slate-950' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}>
                    {openFaq === i ? (
                      <Minus className="text-[#ff5722]" size={28} />
                    ) : (
                      <Plus className="text-[#ff5722]" size={28} />
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
                      <div className="px-10 pb-10 text-slate-500 text-xl leading-relaxed border-t border-slate-50 pt-6">
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
