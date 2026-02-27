import React from 'react';
import { motion } from 'motion/react';
import ImagePlaceholder from './ImagePlaceholder';

interface OurInsightsPageProps {
  onOpenBlog: (id: number) => void;
}

export default function OurInsightsPage({ onOpenBlog }: OurInsightsPageProps) {
  const blogs = [
    {
      id: 1,
      title: "How API-Driven Architecture Accelerates Fintech Innovation",
      excerpt: "In the fast-moving world of financial technology, speed, flexibility, and reliability are everything. Customers expect seamless payment experiences,... Unlike monolithic systems, API-driven platforms allow different parts of your system to interact via well-defined interfaces, enabling faster development, bett...",
      image: "https://ais-pre-7cy25n3ncezj66srzrrtcp-256655942443.asia-east1.run.app/screenshot_11_1.png", // Reusing an existing relevant image
      category: "NEW COMES"
    },
    {
      id: 2,
      title: "Transforming E-Commerce with Innovative Software Solutions",
      excerpt: "E-commerce is more than just an online store; it's an experience. Anilax Software develops innovative solutions that enhance the e-commerce journey.",
      image: "https://picsum.photos/seed/ecommerce-future/800/450",
      category: "DNA"
    },
    {
      id: 3,
      title: "Building Scalable Mobile & Web Applications",
      excerpt: "Mobile and web applications are the backbone of modern businesses. Anilax Software specializes in creating high-performance applications that drive us...",
      image: "https://picsum.photos/seed/scalable-apps/800/450",
      category: "A Step-by-Step Guide"
    },
    {
      id: 4,
      title: "Blockchain's Impact on Modern Banking",
      excerpt: "Blockchain technology is revolutionizing the banking sector by enabling decentralized, secure, and transparent transactions. It's changing payments, lending, and cross-border transfers globally.",
      image: "https://ais-pre-7cy25n3ncezj66srzrrtcp-256655942443.asia-east1.run.app/screenshot_18_1.png",
      category: "BLOCKCHAIN"
    },
    {
      id: 5,
      title: "How Fintech is Revolutionizing Digital Payments",
      excerpt: "Fintech has transformed the way we pay, send, and receive money. From UPI to QR-based payments, the industry is enabling seamless transactions across th...",
      image: "https://ais-pre-7cy25n3ncezj66srzrrtcp-256655942443.asia-east1.run.app/screenshot_11_1.png",
      category: "FINTECH"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="section-container pt-16 md:pt-24 pb-12">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-[#ff5722] mb-6 leading-tight"
          >
            Our Latest<br />Insights & Blogs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-xl"
          >
            Stay up to date on how Anilax is transforming the IT market, helping teams align, act with precision, and make every opportunity count.
          </motion.p>
        </div>

        {/* Featured Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-slate-50 rounded-[2rem] p-6 md:p-12 border border-slate-100 shadow-sm"
        >
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
              Close faster and grow smarter with AI-powered solutions
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
              Discover how Anilax is transforming IT services by helping businesses automate workflows, improve efficiency, and deliver results faster. Stay ahead with technology that accelerates growth and maximizes impact.
            </p>
            <div className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-200">
              <ImagePlaceholder text="Featured Blog Highlight" className="w-full h-full rounded-none border-none" aspectRatio="aspect-auto" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Blog List Section */}
      <section className="section-container py-20">
        <div className="text-center mb-16">
          <p className="text-sm font-black text-[#ff5722] uppercase tracking-[0.3em]">
            NEW COMES
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {blogs.map((blog, index) => (
            <motion.div 
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 cursor-pointer group"
              onClick={() => onOpenBlog(blog.id)}
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
                {blog.category && (
                  <div className="absolute top-6 right-6 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest z-10">
                    {blog.category}
                  </div>
                )}
                <ImagePlaceholder text={blog.title} className="w-full h-full rounded-none border-none" aspectRatio="aspect-auto" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-3xl font-black text-slate-950 mb-4 leading-tight group-hover:text-[#ff5722] transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBlog(blog.id);
                  }}
                  className="text-[#ff5722] font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Read More <span className="text-xl">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
