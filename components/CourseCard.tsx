import React from 'react';
import type { Course } from '../types';
import { slugify } from '../constants';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const slug = slugify(course.title);
  return (
    <a
      href={`/course/${slug}`}
      className="block bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex items-center gap-4 mb-4">
        {course.icon}
        <h3 className="text-xl font-bold text-white">{course.title}</h3>
      </div>
      <p className="text-gray-400 mb-4 text-sm">{course.description}</p>
      <div className="flex flex-wrap gap-2">
        {course.tags.map(tag => (
          <span key={tag} className="text-xs font-semibold bg-gray-700 text-sky-300 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default CourseCard;