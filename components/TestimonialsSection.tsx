import React from 'react';
import { TESTIMONIALS } from '../constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="about" className="bg-gray-800/20 py-20 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-400">Don't just take our word for it</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Success Stories from Our Students
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <blockquote className="text-gray-300">
                <p>"{testimonial.quote}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img className="h-10 w-10 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;