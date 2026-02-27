import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

interface BlogPostBlockchainPageProps {
  onBack: () => void;
  onHome: () => void;
}

export default function BlogPostBlockchainPage({ onBack, onHome }: BlogPostBlockchainPageProps) {
  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <nav className="flex items-center gap-2 text-sm font-medium">
          <button onClick={onHome} className="text-[#2563eb] hover:underline">Home</button>
          <span className="text-slate-400">/</span>
          <button onClick={onBack} className="text-[#2563eb] hover:underline">Blogs</button>
          <span className="text-slate-400">/</span>
          <span className="text-slate-500 truncate">Blockchain's Impact on Modern Banking</span>
        </nav>
      </div>

      {/* Article Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1c23] leading-tight mb-6">
          Blockchain's Impact<br />on Modern Banking
        </h1>
        
        <div className="w-full border-t border-slate-100 mb-6"></div>

        {/* Hero Image */}
        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-8 relative">
          <ImagePlaceholder text="Blockchain in Banking" className="w-full h-full rounded-none border-none" aspectRatio="aspect-auto" />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
             <h2 className="text-white text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase">Blockchain</h2>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl">
          <div className="space-y-6">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-8">
              Blockchain technology is revolutionizing the banking sector by enabling decentralized, secure, and transparent transactions. It's changing payments, lending, and cross-border transfers globally.
            </p>

            <div className="pt-2">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Understanding Blockchain
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Blockchain is a decentralized ledger technology that records transactions securely. Every transaction is verified by a network of nodes, making it immutable and transparent. This foundational technology is disrupting traditional banking operations.
              </p>
            </div>

            <div className="w-full border-t border-slate-100 pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Blockchain in Payments and Transfers
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Blockchain enables instant, secure, and low-cost international transfers. Cross-border payments that used to take days now settle in minutes. Smart contracts also automate payment processes, reducing operational overhead and errors.
              </p>
            </div>

            <div className="w-full border-t border-slate-100 pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Decentralized Finance (DeFi) and Lending
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                DeFi platforms leverage blockchain to provide financial services without traditional banks. Users can lend, borrow, or invest using smart contracts. This reduces intermediaries, increases accessibility, and empowers users globally.
              </p>
            </div>

            <div className="w-full border-t border-slate-100 pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Security and Transparency in Banking
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Blockchain enhances trust by providing an immutable record of all transactions. Banks can trace funds, prevent fraud, and maintain compliance more efficiently. Transparency improves customer confidence in digital financial services.
              </p>
            </div>

            <div className="w-full border-t border-slate-100 pt-6">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Integration Challenges and Solutions
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                Implementing blockchain in traditional banks faces challenges like scalability, regulation, and interoperability. However, hybrid solutions and consortium blockchains are bridging the gap between legacy systems and decentralized finance.
              </p>
            </div>

            <div className="w-full border-t border-slate-100 pt-6 pb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#1a1c23] mb-3">
                Future Prospects
              </h2>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                The future of banking will involve increased blockchain adoption for payments, identity verification, and asset management. Banks investing in blockchain now will gain operational efficiency, reduced costs, and competitive advantages in the digital economy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
