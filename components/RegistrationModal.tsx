import React, { useState, useEffect } from 'react';
import type { Course } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  preselectedCourse?: string;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, courses, preselectedCourse }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  useEffect(() => {
    // Reset form when modal is opened
    if (isOpen) {
      setStep(1);
      setName('');
      setEmail('');
      // Use preselected course if available, otherwise default to first course
      const defaultCourse = courses.length > 0 ? courses[0].title : '';
      setSelectedCourse(preselectedCourse || defaultCourse);
    }
  }, [isOpen, courses, preselectedCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && selectedCourse) {
      setStep(2);
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-modal-title"
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-xl w-full max-w-md mx-auto p-8 relative border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close registration form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 1 && (
          <div>
            <h2 id="registration-modal-title" className="text-2xl font-bold text-white mb-2">Register for a Course</h2>
            <p className="text-gray-400 mb-6">Start your journey into the world of AI-powered business today.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-2">Select Course</label>
                <select 
                  id="course"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {courses.map(course => (
                    <option key={course.title} value={course.title}>{course.title}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-md transition-colors">
                Proceed to Payment
              </button>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-400 mb-4">Registration Submitted!</h2>
            <p className="text-gray-300 mb-6">
              Thank you, {name}! To complete your enrollment in the "{selectedCourse}" course, please make a payment using the bank details below.
            </p>
            <div className="bg-gray-900/50 p-4 rounded-md text-left text-sm border border-gray-700">
              <p className="text-gray-200 mb-2"><strong className="text-sky-400">Account Name:</strong> AI Business Academy</p>
              <p className="text-gray-200 mb-2"><strong className="text-sky-400">Account Number:</strong> 123-456-7890</p>
              <p className="text-gray-200 mb-2"><strong className="text-sky-400">Bank Name:</strong> Global Digital Bank</p>
              <p className="text-gray-200"><strong className="text-sky-400">Reference:</strong> {email}</p>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Your spot will be confirmed once payment is received. A confirmation email will be sent to you within 24 hours.
            </p>
            <button onClick={onClose} className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;