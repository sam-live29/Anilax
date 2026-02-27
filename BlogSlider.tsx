import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const blogs = [
  {
    id: 1,
    title: "API-Driven Architecture in Fintech",
    desc: "In the fast-moving world of financial technology, speed, flexibility, and reliability are everything. Learn how modular APIs are becoming the backbone of modern banking systems.",
    image: "https://ais-pre-7cy25n3ncezj66srzrrtcp-256655942443.asia-east1.run.app/screenshot_13_1.png"
  },
  {
    id: 2,
    title: "Transforming E-Commerce Payments",
    desc: "E-commerce is more than just an online store; it's an experience. Anilax Software develops innovative payment solutions that reduce friction and increase conversion rates.",
    image: "https://ais-pre-7cy25n3ncezj66srzrrtcp-256655942443.asia-east1.run.app/screenshot_14_1.png"
  },
  {
    id: 3,
    title: "Building Scalable Mobile & Web Applications",
    desc: "Mobile and web applications are the backbone of modern businesses. Anilax Software specializes in creating high-performance applications that drive user engagement.",
    image: "https://picsum.photos/seed/scalable-apps/800/450"
  },
  {
    id: 4,
    title: "How Fintech is Revolutionizing Digital Payments",
    desc: "Fintech has transformed the way we pay, send, and receive money. From UPI to QR-based payments, the industry is enabling seamless transactions across the globe.",
    image: "https://ais-pre-7cy25n3ncezj66srzrrtcp-256655942443.asia-east1.run.app/screenshot_11_1.png"
  },
  {
    id: 5,
    title: "AI-Powered Fraud Detection",
    desc: "Learn how machine learning models are identifying suspicious transactions in real-time to protect users and financial institutions from increasingly sophisticated cyber threats.",
    image: "https://ais-pre-7cy25n3ncezj66srzrrtcp-256655942443.asia-east1.run.app/screenshot_16_1.png"
  },
  {
    id: 6,
    title: "Blockchain's Impact on Modern Banking",
    desc: "Blockchain technology is revolutionizing the banking sector by enabling decentralized, secure, and transparent transactions. It's changing payments, lending, and cross-border transfers globally.",
    image: "https://ais-pre-7cy25n3ncezj66srzrrtcp-256655942443.asia-east1.run.app/screenshot_18_1.png"
  }
];

interface BlogSliderProps {
  onOpenBlog: (id: number) => void;
}

export default function BlogSlider({ onOpenBlog }: BlogSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      {/* Navigation Arrows */}
      <button 
        onClick={() => scroll('left')}
        className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-slate-800 hover:text-primary hover:scale-110 transition-all border border-slate-100"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-slate-800 hover:text-primary hover:scale-110 transition-all border border-slate-100"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slider Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 px-4 -mx-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="flex-shrink-0 w-[80vw] md:w-[320px] snap-center"
          >
            <div className="card-shadow p-0 overflow-hidden flex flex-col h-[450px] md:h-[550px] hover:shadow-2xl transition-all duration-500 bg-white border border-slate-100 group/card hover:-translate-y-2">
              <div className="w-full h-44 md:h-64 flex-shrink-0 overflow-hidden">
                <ImagePlaceholder text={blog.title} className="w-full h-full rounded-none border-none" aspectRatio="aspect-auto" />
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <div className="text-primary font-bold text-[9px] uppercase tracking-widest mb-2">Fintech Insights</div>
                  <h3 className="text-lg md:text-xl font-bold mb-3 line-clamp-3 leading-tight text-slate-900">{blog.title}</h3>
                  <p className="text-slate-500 text-xs md:text-sm line-clamp-[8] leading-relaxed">{blog.desc}</p>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <button 
                    onClick={() => onOpenBlog(blog.id)}
                    className="text-primary font-bold flex items-center gap-2 text-sm md:text-base group/link"
                  >
                    Learn more 
                    <ArrowRight size={20} className="group-hover/link:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Navigation Dots (Optional but helpful) */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {blogs.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
        ))}
      </div>
    </div>
  );
}
