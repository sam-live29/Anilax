import React from 'react';
import { motion } from 'motion/react';

interface BlogPostScalableAppsPageProps {
  onBack: () => void;
  onHome: () => void;
}

export default function BlogPostScalableAppsPage({ onBack, onHome }: BlogPostScalableAppsPageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <nav className="flex items-center gap-2 text-sm font-medium">
          <button onClick={onHome} className="text-[#2563eb] hover:underline">Home</button>
          <span className="text-slate-400">/</span>
          <button onClick={onBack} className="text-[#2563eb] hover:underline">Blogs</button>
          <span className="text-slate-400">/</span>
          <span className="text-slate-500 truncate">Building Scalable Mobile & Web Applications</span>
        </nav>
      </div>

      {/* Article Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1c23] leading-tight mb-6">
          Building Scalable Mobile<br />& Web Applications
        </h1>
        
        <div className="w-full border-t border-slate-100 mb-6"></div>

        {/* Hero Image - Recreating the diagram from the screenshot */}
        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden bg-[#1a1c23] shadow-2xl mb-8 relative flex items-center justify-center p-4 md:p-8">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          </div>
          
          <div className="relative z-10 w-full h-full flex flex-col items-center">
            <div className="text-center mt-4 md:mt-8 mb-8 md:mb-16">
              <p className="text-[#3b82f6] font-bold uppercase tracking-[0.2em] mb-2 text-[10px] md:text-sm">A Step-by-Step Guide to</p>
              <h2 className="text-xl md:text-4xl lg:text-5xl font-bold text-white">Building Scalable Web Apps</h2>
            </div>

            {/* Diagram */}
            <div className="relative w-full max-w-4xl flex-grow hidden md:block">
              {/* Connecting Dotted Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 400">
                <path d="M100,100 L250,280 L400,100 L550,280 L700,100 L850,280 L950,100" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="8,8" opacity="0.6" />
              </svg>

              {/* Node 1 */}
              <div className="absolute top-0 left-[5%] text-center w-40">
                <p className="text-[11px] text-white font-medium mb-3 leading-tight">Define your goals<br/>and expectations</p>
                <div className="w-14 h-14 rounded-full bg-[#3b82f6] mx-auto flex items-center justify-center text-white font-bold text-xl shadow-[0_0_25px_rgba(59,130,246,0.6)]">1</div>
              </div>

              {/* Node 2 */}
              <div className="absolute bottom-0 left-[18%] text-center w-40">
                <div className="w-14 h-14 rounded-full bg-[#3b82f6] mx-auto flex items-center justify-center text-white font-bold text-xl shadow-[0_0_25px_rgba(59,130,246,0.6)]">2</div>
                <p className="text-[11px] text-white font-medium mt-3 leading-tight">Monitor the<br/>key metrics</p>
              </div>

              {/* Node 3 */}
              <div className="absolute top-0 left-[35%] text-center w-40">
                <p className="text-[11px] text-white font-medium mb-3 leading-tight">Turn to cloud<br/>computing</p>
                <div className="w-14 h-14 rounded-full bg-[#3b82f6] mx-auto flex items-center justify-center text-white font-bold text-xl shadow-[0_0_25px_rgba(59,130,246,0.6)]">3</div>
              </div>

              {/* Node 4 */}
              <div className="absolute bottom-0 left-[50%] -translate-x-1/2 text-center w-48">
                <div className="w-14 h-14 rounded-full bg-[#3b82f6] mx-auto flex items-center justify-center text-white font-bold text-xl shadow-[0_0_25px_rgba(59,130,246,0.6)]">4</div>
                <p className="text-[11px] text-white font-medium mt-3 leading-tight">Take advantage of<br/>microservices architecture</p>
              </div>

              {/* Node 5 */}
              <div className="absolute top-0 left-[65%] text-center w-40">
                <p className="text-[11px] text-white font-medium mb-3 leading-tight">Choose the right<br/>database solution</p>
                <div className="w-14 h-14 rounded-full bg-[#3b82f6] mx-auto flex items-center justify-center text-white font-bold text-xl shadow-[0_0_25px_rgba(59,130,246,0.6)]">5</div>
              </div>

              {/* Node 6 */}
              <div className="absolute bottom-0 left-[80%] text-center w-40">
                <div className="w-14 h-14 rounded-full bg-[#3b82f6] mx-auto flex items-center justify-center text-white font-bold text-xl shadow-[0_0_25px_rgba(59,130,246,0.6)]">6</div>
                <p className="text-[11px] text-white font-medium mt-3 leading-tight">Use the best<br/>scaling methods</p>
              </div>

              {/* Node 7 */}
              <div className="absolute top-0 left-[90%] -translate-x-1/2 text-center w-40">
                <p className="text-[11px] text-white font-medium mb-3 leading-tight">Select robust<br/>technologies</p>
                <div className="w-14 h-14 rounded-full bg-[#3b82f6] mx-auto flex items-center justify-center text-white font-bold text-xl shadow-[0_0_25px_rgba(59,130,246,0.6)]">7</div>
              </div>
            </div>

            {/* Mobile Diagram */}
            <div className="md:hidden grid grid-cols-4 gap-4 mt-4">
              {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full bg-[#3b82f6] flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-8">
              Mobile and web applications are the backbone of modern businesses. Anilax Software specializes in creating high-performance applications that drive user engagement.
            </p>

            <div className="pt-2">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Introduction to Scalable Applications
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Scalability ensures that applications can handle increasing users, transactions, and data without performance degradation. Planning for scalability from day one prevents technical debt and improves user experience.
              </p>
            </div>

            <div className="w-full border-t border-slate-100 pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Cross-Platform Development Benefits
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Using frameworks like Flutter or React Native, developers can create applications that run on multiple platforms with a single codebase. This reduces development time, cost, and ensures consistent user experience across devices.
              </p>
            </div>

            <div className="w-full border-t border-slate-100 pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                User-Centric Design and UI/UX
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Intuitive navigation, responsive design, and visually appealing interfaces increase engagement. User testing and iterative design ensure that applications are accessible, usable, and enjoyable.
              </p>
            </div>

            <div className="w-full border-t border-slate-100 pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Backend Architecture and Database Design
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Designing robust backend architecture is key for scalability. Using cloud databases, microservices, and API-driven development ensures the app can handle high traffic and complex data interactions efficiently.
              </p>
            </div>

            <div className="w-full border-t border-slate-100 pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Performance Optimization Techniques
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Reducing app load time, implementing caching strategies, and optimizing queries enhances user experience. Performance monitoring tools help identify bottlenecks before they impact users.
              </p>
            </div>

            <div className="w-full border-t border-slate-100 pt-6 pb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Continuous Updates and Maintenance
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Regular updates improve functionality, fix bugs, and introduce new features. Maintenance plans ensure long-term app performance and user satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
