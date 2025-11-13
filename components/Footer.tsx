
import React from 'react';
import { BrainCircuitIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800/40 border-t border-gray-700">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
             <a href="#" className="flex-shrink-0 flex items-center gap-2 text-white font-bold text-xl">
              <BrainCircuitIcon className="h-8 w-8 text-sky-400" />
              AI Business Academy
            </a>
            <p className="text-sm text-gray-400">
              Empowering the next generation of entrepreneurs with AI.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Marketing</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Analytics</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Commerce</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Insights</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Pricing</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Documentation</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Guides</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">API Status</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">About</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Jobs</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Press</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Claim</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">&copy; {new Date().getFullYear()} AI Business Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
