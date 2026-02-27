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
  Utensils,
  Truck,
  Layout,
  MessageSquare,
  Globe,
  Scale,
  Users
} from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

export default function RestaurantFoodDeliveryPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Restaurant/Food Delivery Software?",
      answer: "It is a platform that manages orders, inventory, kitchens, deliveries, and customer interactions for restaurants and food delivery businesses."
    },
    {
      question: "Can it manage delivery tracking and route optimization?",
      answer: "Yes, our software includes real-time delivery tracking and route optimization tools to ensure fast and efficient food delivery."
    },
    {
      question: "Is inventory management included?",
      answer: "Absolutely. You can monitor ingredient usage, track stock levels in real-time, and automate replenishment to ensure uninterrupted operations."
    },
    {
      question: "Can it be used for multiple outlets or cloud kitchens?",
      answer: "Yes, our platform is designed to handle multiple outlets and cloud kitchens from a single centralized dashboard."
    },
    {
      question: "Is it suitable for startups?",
      answer: "Our software is ideal for startups and new businesses, providing the necessary tools to grow efficiently without extensive infrastructure."
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
              RESTAURANT/FOOD DELIVERY SOFTWARE
            </p>
            <h1 className="text-4xl md:text-7xl font-display font-black text-slate-950 mb-8 leading-tight">
              From Kitchen to<br />Customer, Simplified!
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Our Restaurant and Food Delivery Software streamlines operations from order management to delivery, enhancing efficiency, reducing errors, and improving customer satisfaction.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-slate-200/50 transition-all"
            >
              Request a Demo
            </motion.button>
            
            <div className="mt-20">
              <ImagePlaceholder text="Restaurant/Food Delivery Software" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* All-in-One Section */}
      <section className="section-container py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black text-slate-950 mb-8">
            All-in-One Restaurant Management
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Manage orders, inventory, kitchens, deliveries, and customer feedback in one unified platform designed for restaurants, cafes, and delivery businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Order Management</h3>
            <p className="text-slate-500 leading-relaxed">
              Receive, track, and manage orders in real-time, whether from dine-in, takeaway, or online delivery platforms, ensuring accurate and timely fulfillment.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Inventory & Kitchen Management</h3>
            <p className="text-slate-500 leading-relaxed">
              Automate inventory tracking, monitor stock levels, reduce waste, and manage kitchen workflows efficiently to ensure smooth operations.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Delivery & Customer Experience</h3>
            <p className="text-slate-500 leading-relaxed">
              Optimize delivery routes, track orders in real-time, and enhance customer satisfaction with accurate updates and smooth service.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50/50 border-l-4 border-[#ff5722] p-10 rounded-r-3xl">
            <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed mb-6">
              "With Anilax Software, our restaurant chain integrated delivery, inventory, and kitchen management seamlessly, boosting efficiency and customer satisfaction."
            </p>
            <p className="font-bold text-slate-900">— Owner, Multi-Outlet Restaurant</p>
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
            Our software is ideal for restaurants, cafes, cloud kitchens, and food delivery platforms seeking to simplify operations and enhance customer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Restaurants & Cafes", desc: "Manage dine-in and takeaway orders efficiently, track inventory, and ensure smooth kitchen workflows for timely service." },
            { title: "Cloud Kitchens", desc: "Coordinate multiple delivery orders, optimize kitchen operations, and maintain accurate stock levels across multiple outlets." },
            { title: "Delivery Platforms", desc: "Streamline order aggregation, delivery assignments, route optimization, and real-time tracking to enhance efficiency and reliability." },
            { title: "Restaurant Chains", desc: "Centralize operations across multiple locations, track inventory, manage employees, and monitor order fulfillment for consistent quality." },
            { title: "Food Trucks & Quick Service", desc: "Manage mobile operations, accept online orders, and monitor inventory and delivery for seamless service on the go." },
            { title: "Startups & New Businesses", desc: "Quickly implement order management, delivery tracking, and inventory systems without extensive infrastructure to grow efficiently." }
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
              Platform Capabilities<br />& Advantages
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Our Restaurant/Food Delivery Software ensures operational efficiency, customer satisfaction, and real-time management of orders and inventory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Truck, title: "Order & Delivery Management", desc: "Track orders from placement to delivery, optimize routes, and provide customers with accurate updates for timely service." },
              { icon: Utensils, title: "Inventory & Stock Control", desc: "Monitor ingredient usage, reduce waste, and automate stock replenishment to ensure uninterrupted operations." },
              { icon: Users, title: "Kitchen & Staff Coordination", desc: "Streamline kitchen workflows, assign tasks, and improve staff efficiency with real-time order tracking and notifications." },
              { icon: MessageSquare, title: "Customer Experience", desc: "Enhance service quality with accurate order fulfillment, feedback management, and loyalty programs." },
              { icon: BarChart3, title: "Analytics & Reporting", desc: "Generate insights on sales, popular dishes, delivery times, and operational performance for smarter decision-making." },
              { icon: Scale, title: "Scalable & Reliable", desc: "Our platform grows with your business, supporting multiple outlets, high order volumes, and complex delivery operations seamlessly." }
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
