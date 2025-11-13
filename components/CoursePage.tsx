import React from 'react';
import type { Course } from '../types';

interface CoursePageProps {
  course: Course;
  onEnrollClick: (courseTitle: string) => void;
}

const CoursePage: React.FC<CoursePageProps> = ({ course, onEnrollClick }) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <a href="/#courses" className="text-sky-400 hover:text-sky-300 mb-8 inline-block">&larr; Back to all courses</a>
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
          <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700 flex-shrink-0">
            {/* FIX: Cast course.icon to a more specific ReactElement type that includes the className prop to satisfy TypeScript's type checking for React.cloneElement. */}
            {React.cloneElement(course.icon as React.ReactElement<{ className?: string }>, { className: "h-12 w-12 text-sky-400" })}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{course.title}</h1>
        </div>
        
        <div className="flex flex-wrap gap-2 my-6">
          {course.tags.map(tag => (
            <span key={tag} className="text-xs font-semibold bg-gray-700 text-sky-300 px-3 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="prose prose-invert prose-lg max-w-none text-gray-300 mt-8 border-t border-gray-700 pt-8">
          <p>{course.description}</p>
        </div>

        <div className="mt-12 p-8 bg-gray-800/50 rounded-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>Core principles of leveraging AI in business.</li>
                <li>How to use specific AI tools for content and asset creation.</li>
                <li>Strategies for automating marketing and sales funnels.</li>
                <li>Hands-on techniques through real-world case studies.</li>
                <li>How to build and scale passive income streams.</li>
            </ul>
        </div>
        
        <div className="mt-8 p-8 bg-gray-800/50 rounded-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Interactive Case Study</h3>
            <p className="text-gray-300 mb-4">This course includes an in-depth look at a successful AI-driven dropshipping store that generated over $50,000 in its first three months. We'll break down the exact strategies, tools, and ad campaigns used.</p>
            <a href="#" className="font-semibold text-sky-400 hover:text-sky-300">Preview the case study &rarr;</a>
        </div>

        <div className="mt-16 text-center">
            <button 
              onClick={() => onEnrollClick(course.title)}
              className="rounded-md bg-sky-500 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 transition-colors"
            >
              Enroll in this Course
            </button>
        </div>

      </div>
    </div>
  );
};

export default CoursePage;