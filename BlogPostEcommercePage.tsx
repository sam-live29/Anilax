import React from 'react';
import { motion } from 'motion/react';
import ImagePlaceholder from './ImagePlaceholder';

interface BlogPostEcommercePageProps {
  onBack: () => void;
  onHome: () => void;
}

export default function BlogPostEcommercePage({ onBack, onHome }: BlogPostEcommercePageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="section-container pt-8 pb-4">
        <nav className="flex items-center gap-2 text-sm font-medium">
          <button onClick={onHome} className="text-blue-600 hover:underline">Home</button>
          <span className="text-slate-400">/</span>
          <button onClick={onBack} className="text-blue-600 hover:underline">Blogs</button>
          <span className="text-slate-400">/</span>
          <span className="text-slate-500 truncate max-w-[200px] md:max-w-none">Transforming E-Commerce with Innovative Software Solutions</span>
        </nav>
      </div>

      {/* Article Header */}
      <section className="section-container pt-8 pb-12">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-12">
          Transforming E-Commerce with Innovative Software Solutions
        </h1>
        
        <div className="w-full border-t border-slate-100 mb-12"></div>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-100 shadow-2xl mb-16 relative">
          <ImagePlaceholder text="The Future of Ecommerce" className="w-full h-full rounded-none border-none" aspectRatio="aspect-auto" />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-16">
              E-commerce is more than just an online store; it's an experience. Anilax Software develops innovative solutions that enhance the e-commerce journey.
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              Introduction to Modern E-Commerce
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-16">
              E-commerce has evolved beyond simple storefronts. Customers expect fast, secure, and personalized experiences. Innovative software solutions help businesses meet these expectations efficiently.
            </p>

            <div className="w-full border-t border-slate-100 my-16"></div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              Custom E-Commerce Platform Development
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-16">
              Tailored platforms allow unique features such as subscription models, multi-vendor marketplaces, and loyalty programs. Customization ensures that the platform aligns with business goals and target audience.
            </p>

            <div className="w-full border-t border-slate-100 my-16"></div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              Secure Payment Gateway Integration
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-16">
              Integrating reliable payment gateways ensures smooth transactions. Features like UPI, net banking, wallets, and cards provide customers with flexibility and trust.
            </p>

            <div className="w-full border-t border-slate-100 my-16"></div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              Inventory and Order Management Systems
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-16">
              Automated inventory tracking, real-time stock updates, and order processing improve operational efficiency. Integration with logistics and delivery partners ensures timely fulfillment.
            </p>

            <div className="w-full border-t border-slate-100 my-16"></div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              Personalization and User Experience
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-16">
              AI-driven recommendations, dynamic content, and targeted marketing enhance user engagement. Personalization increases conversions, customer satisfaction, and repeat purchases.
            </p>

            <div className="w-full border-t border-slate-100 my-16"></div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              Analytics and Business Intelligence
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-16">
              Real-time dashboards, sales reports, and customer behavior analytics help businesses make informed decisions and optimize marketing strategies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
