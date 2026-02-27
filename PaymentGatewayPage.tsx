import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function PaymentGatewayPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the Payment Gateway & Wallet platform?",
      answer: "Our platform provides secure, scalable payment gateways and digital wallets, enabling businesses to process transactions, manage wallets, and ensure compliance effortlessly."
    },
    {
      question: "How secure is the platform?",
      answer: "The platform is built with enterprise-grade security, including PCI-DSS compliance, encryption, and real-time fraud detection to protect every transaction."
    },
    {
      question: "Can I integrate with my existing systems?",
      answer: "Yes, our developer-friendly REST APIs and SDKs allow for seamless integration with your existing applications and workflows."
    },
    {
      question: "Does it support international payments?",
      answer: "Yes, our infrastructure is designed to handle global transactions with support for multiple currencies and international payment methods."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive technical support, dedicated account management, and detailed documentation to ensure your success."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-black text-white min-h-[80vh] flex flex-col justify-center px-6 py-20 relative overflow-hidden">
        {/* Sea green glow diverging from the left - broad and circular */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_50%,rgba(16,185,129,0.4)_0%,rgba(16,185,129,0.1)_40%,transparent_80%)] pointer-events-none"></div>
        {/* Circular rays effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_270deg_at_0%_50%,transparent_0deg,rgba(16,185,129,0.1)_5deg,transparent_10deg,rgba(16,185,129,0.1)_15deg,transparent_20deg)] opacity-30 pointer-events-none"></div>
        {/* Extra black side on the right and bottom */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto w-full z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight"
          >
            Secure Payment Gateway & Digital Wallet Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base md:text-lg mb-10 max-w-2xl leading-relaxed"
          >
            Enable fast, secure, and seamless online payments with a powerful payment gateway and digital wallet infrastructure designed for scalability and reliability.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#ff5722] hover:bg-[#e64a19] text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-lg shadow-orange-500/20 active:scale-95"
          >
            Get started
          </motion.button>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-10 text-slate-950 leading-[0.85] tracking-tighter uppercase">
            Payment<br />Gateway &<br />Wallet<br />Infrastructure
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Accept and manage payments across cards, UPI, net banking, and digital wallets through a single unified platform.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border border-slate-200 rounded-[24px] p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Multiple Payment Methods</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Support cards, UPI, net banking, and wallet payments with high transaction success rates.
            </p>
          </div>

          <div className="bg-slate-50/50 border border-slate-100 rounded-[24px] p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Digital Wallet System</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Enable user wallets with instant top-ups, balance tracking, and seamless transfers.
            </p>
          </div>

          <div className="border border-slate-200 rounded-[24px] p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-black mb-3 text-slate-950">Smart Routing & Failover</h3>
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Intelligent routing across banks and PSPs to minimize failures and maximize payment success.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-4xl font-serif italic text-slate-800 leading-relaxed mb-12">
            "The payment gateway and wallet solution improved our transaction reliability, settlement speed, and customer experience significantly."
          </blockquote>
          <cite className="text-slate-500 text-lg not-italic">— Founder, Digital Payments Company</cite>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 px-6 bg-slate-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-8xl font-black mb-8 text-slate-950 leading-tight">
              Enterprise-Grade Payment Platform
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              One secure infrastructure for payment processing, wallet management, settlements, and compliance.
            </p>
          </div>

          <div className="space-y-32">
            {/* Secure Payment Processing */}
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Secure Payment Processing</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                PCI-DSS compliant architecture with encryption, tokenization, and fraud detection to protect every transaction.
              </p>
              <a href="#" className="text-[#ff5722] font-bold text-lg hover:underline flex items-center gap-2">
                Explore security →
              </a>
              <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <ImagePlaceholder text="Secure Payment Processing" />
              </div>
            </div>

            {/* Wallet & Settlement Management */}
            <div className="max-w-2xl ml-auto text-right">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Wallet & Settlement Management</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Manage digital wallets, settlements, refunds, and chargebacks with real-time reporting and automation.
              </p>
              <a href="#" className="text-[#ff5722] font-bold text-lg hover:underline flex items-center gap-2 justify-end">
                Explore wallets →
              </a>
              <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <ImagePlaceholder text="Wallet Management" />
              </div>
            </div>

            {/* Developer-Friendly APIs */}
            <div className="max-w-2xl">
              <h3 className="text-3xl md:text-4xl font-black mb-6 text-slate-950">Developer-Friendly APIs</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                REST APIs, SDKs, and webhooks allow fast integration and smooth communication with your applications.
              </p>
              <a href="#" className="text-[#ff5722] font-bold text-lg hover:underline flex items-center gap-2">
                Explore APIs →
              </a>
              <div className="mt-12 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <ImagePlaceholder text="Payment API Integration" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-6">⚡</div>
            <h3 className="text-2xl font-black mb-4 text-slate-950">High Performance</h3>
            <p className="text-slate-500 leading-relaxed">
              Built to handle high transaction volumes with low latency and enterprise reliability.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-6">🔐</div>
            <h3 className="text-2xl font-black mb-4 text-slate-950">Compliance & Security</h3>
            <p className="text-slate-500 leading-relaxed">
              Integrated KYC, AML, and fraud prevention systems to meet regulatory standards.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-6">🧩</div>
            <h3 className="text-2xl font-black mb-4 text-slate-950">Customizable & White-Label</h3>
            <p className="text-slate-500 leading-relaxed">
              Fully customizable payment gateway and wallet solutions aligned with your brand.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-8xl font-black mb-8 text-slate-950 leading-tight">
              Build Faster.<br />Accept Payments
            </h2>
            <p className="text-slate-500 text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed">
              Launch a secure payment gateway and digital wallet system that scales with your business and delivers seamless user experiences.
            </p>
            <a href="#" className="text-[#ff5722] font-bold text-xl hover:underline flex items-center gap-2">
              Talk to our experts →
            </a>
          </div>
          <div className="bg-white rounded-[40px] p-12 border border-slate-100 shadow-xl">
            <ImagePlaceholder text="Digital Payments Platform" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-16 text-center text-slate-950">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-[32px] overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-[#ff5722] shadow-lg' : 'border-slate-200'}`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 text-left"
                >
                  <span className="text-xl md:text-2xl font-bold text-slate-900 pr-8">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="text-[#ff5722] flex-shrink-0" size={24} />
                  ) : (
                    <Plus className="text-[#ff5722] flex-shrink-0" size={24} />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-8">
                    <p className="text-slate-500 text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
