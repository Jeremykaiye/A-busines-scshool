import React from 'react';
import { COURSES } from '../constants';
import CourseCard from './CourseCard';

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">Our Curriculum</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything You Need to Succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our courses are designed to take you from foundational concepts to advanced strategies, equipping you with the skills to thrive in the new AI-driven economy.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;