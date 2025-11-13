
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40">
       <div className="absolute inset-0 -z-10 h-full w-full bg-gray-900 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Launch Your Future with AI-Powered Business
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Master the art of creating digital assets, building automated income streams, and scaling your online business with the power of artificial intelligence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-sky-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition-colors"
            >
              Explore Courses
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
