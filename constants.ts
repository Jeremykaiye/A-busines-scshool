import React from 'react';
import type { Course, Testimonial } from './types';
import { BrainCircuitIcon, PaintBrushIcon, MegaphoneIcon, ChartBarIcon, ShoppingCartIcon, VideoCameraIcon } from './components/IconComponents';

export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-');        // Replace multiple - with single -
};

export const COURSES: Course[] = [
  {
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(BrainCircuitIcon, { className: "h-10 w-10 text-sky-400" }),
    title: 'AI-Powered Business Models',
    description: 'Learn to conceptualize and launch online businesses that leverage AI for core operations, from product creation to customer service.',
    tags: ['Business Strategy', 'AI Integration', 'Beginner'],
  },
  {
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(PaintBrushIcon, { className: "h-10 w-10 text-sky-400" }),
    title: 'Digital Asset Creation with AI',
    description: 'Master AI tools like Midjourney and ChatGPT to create stunning visual assets, written content, and unique digital products at scale.',
    tags: ['Content Creation', 'AI Tools', 'Intermediate'],
  },
  {
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(MegaphoneIcon, { className: "h-10 w-10 text-sky-400" }),
    title: 'Automated Marketing & Sales',
    description: 'Build automated marketing funnels and sales processes using AI-powered platforms to reach a wider audience and convert leads.',
    tags: ['Marketing', 'Automation', 'Advanced'],
  },
  {
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(ChartBarIcon, { className: "h-10 w-10 text-sky-400" }),
    title: 'Passive Income Streams',
    description: 'Discover how to build and manage multiple passive income streams through digital products, affiliate marketing, and AI-driven investments.',
    tags: ['Finance', 'Passive Income', 'All Levels'],
  },
  {
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(ShoppingCartIcon, { className: "h-10 w-10 text-sky-400" }),
    title: 'AI-Enhanced E-commerce',
    description: 'Launch and scale a successful e-commerce store by automating product research and running targeted ad campaigns with AI. Includes interactive case studies on profitable dropshipping stores.',
    tags: ['E-commerce', 'AI Tools', 'Case Study'],
  },
  {
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(VideoCameraIcon, { className: "h-10 w-10 text-sky-400" }),
    title: 'Viral Video Content with AI',
    description: 'Go from idea to viral video in record time. Master AI tools for scriptwriting, voice-overs, and video editing for YouTube & TikTok. This course is built around analyzing real-life viral video case studies.',
    tags: ['Video Content', 'Social Media', 'Intermediate'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "This academy completely changed how I view online business. The AI tools I learned have 10x'd my productivity and income.",
        name: 'Julia Chen',
        title: 'Founder, DigitalBloom Co.',
        avatar: 'https://picsum.photos/id/237/100/100'
    },
    {
        quote: "I went from knowing nothing about digital assets to selling my own AI-generated art online. The instructors are fantastic and the content is top-notch.",
        name: 'Marcus Reid',
        title: 'Digital Artist & Entrepreneur',
        avatar: 'https://picsum.photos/id/238/100/100'
    },
    {
        quote: "The course on automated marketing was a game-changer for my startup. We've automated our lead generation and can focus on building great products.",
        name: 'Samantha Vega',
        title: 'CEO, InnovateTech',
        avatar: 'https://picsum.photos/id/239/100/100'
    }
];