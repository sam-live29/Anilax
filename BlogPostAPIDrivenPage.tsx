import React from 'react';
import { motion } from 'motion/react';
import ImagePlaceholder from './ImagePlaceholder';

interface BlogPostAPIDrivenPageProps {
  onBack: () => void;
  onHome: () => void;
}

export default function BlogPostAPIDrivenPage({ onBack, onHome }: BlogPostAPIDrivenPageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="section-container pt-8 pb-4">
        <nav className="flex items-center gap-2 text-sm font-medium">
          <button onClick={onHome} className="text-blue-600 hover:underline">Home</button>
          <span className="text-slate-400">/</span>
          <button onClick={onBack} className="text-blue-600 hover:underline">Blogs</button>
          <span className="text-slate-400">/</span>
          <span className="text-slate-500 truncate max-w-[200px] md:max-w-none">How API-Driven Architecture Accelerates Fintech Innovation</span>
        </nav>
      </div>

      {/* Article Header */}
      <section className="section-container pt-8 pb-12">
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-12">
          How API-Driven Architecture Accelerates Fintech Innovation
        </h1>
        
        <div className="w-full border-t border-slate-100 mb-12"></div>

        {/* Hero Image */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden bg-slate-100 shadow-2xl mb-16">
          <ImagePlaceholder text="API-Driven Architecture" className="w-full h-full rounded-none border-none" aspectRatio="aspect-auto" />
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-10">
              In the fast-moving world of financial technology, speed, flexibility, and reliability are everything. Customers expect seamless payment experiences, instant notifications, robust security, and integration with other platforms—all without delays. To meet these demands, fintech companies are embracing API-driven architecture.
            </p>

            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-16">
              Unlike monolithic systems, API-driven platforms allow different parts of your system to interact via well-defined interfaces, enabling faster development, better scalability, and easier maintenance. In this post, we take a deep dive into what API-driven architecture means for fintech, the benefits it brings, common pitfalls, and how Anilax Software can help you build a top-tier API infrastructure.
            </p>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              What is API-Driven Architecture?
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-10">
              API-driven architecture refers to software systems organized around services (often microservices) that communicate primarily through Application Programming Interfaces (APIs). Each service is responsible for one piece of functionality—like payment processing, user authentication, transaction reporting, fraud detection, etc. Key characteristics include: Modular design: components are loosely coupled. Clear contracts: APIs define what data is accepted and returned. Scalability: you can scale individual services separately. Interoperability: services can plug in third-party APIs; it's easier to integrate new partners.
            </p>

            <div className="w-full border-t border-slate-100 my-16"></div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
              Why Fintech Needs API-Driven Architecture
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed mb-8">
              Here's why fintech companies benefit especially from API-driven design:
            </p>
            
            <div className="space-y-8 text-xl text-slate-700 leading-relaxed">
              <p>
                <span className="font-bold text-slate-900">Faster time-to-market</span> You can build or upgrade a single service (say, payment gateway) without touching the rest of the system.
              </p>
              <p>
                <span className="font-bold text-slate-900">Better reliability & fault isolation</span> If one service has a problem (e.g., fraud detection), it doesn't necessarily bring down the payments or user login.
              </p>
              <p>
                <span className="font-bold text-slate-900">Easier compliance and auditing</span> With well-defined APIs, you can more easily track data flows, log actions, enforce validation and security checks.
              </p>
              <p>
                <span className="font-bold text-slate-900">Partner integrations become simpler</span> Want to plug in a KYC provider, or switch payment gateway providers? If you have a clean API layer, that's much faster and lower risk.
              </p>
              <p>
                <span className="font-bold text-slate-900">Scalability and performance</span> As transaction volume grows, you can scale out specific services without re-architecting the whole system.
              </p>
              <p>
                <span className="font-bold text-slate-900">Security</span> With APIs, you can enforce strong authentication, encryption, versioning, and isolate sensitive functions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
