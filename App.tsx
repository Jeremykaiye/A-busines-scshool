import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoursesSection from './components/CoursesSection';
import AIBusinessIdeaGenerator from './components/AIBusinessIdeaGenerator';
import TestimonialsSection from './components/TestimonialsSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import { COURSES, slugify } from './constants';
import BlogPage from './components/BlogPage';
import CoursePage from './components/CoursePage';
import NotFoundPage from './components/NotFoundPage';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedCourse, setPreselectedCourse] = useState('');

  const handleGetStartedClick = (courseTitle?: string) => {
    if (courseTitle) {
      setPreselectedCourse(courseTitle);
    } else {
      // When a generic 'Get Started' is clicked, we don't want a sticky preselection.
      setPreselectedCourse(''); 
    }
    setIsModalOpen(true);
  };

  const renderPage = () => {
    const { pathname } = window.location;
    
    // Course Page Route
    if (pathname.startsWith('/course/')) {
      const slug = pathname.split('/course/')[1];
      const course = COURSES.find(c => slugify(c.title) === slug);
      if (course) {
        return <CoursePage course={course} onEnrollClick={handleGetStartedClick} />;
      } else {
        return <NotFoundPage />;
      }
    }
    
    // Blog Page Route
    if (pathname === '/blog') {
      return <BlogPage />;
    }
    
    // Home Page Route
    return (
      <>
        <HeroSection />
        <CoursesSection />
        <AIBusinessIdeaGenerator />
        <TestimonialsSection />
        <NewsletterSection />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      <Header onGetStartedClick={() => handleGetStartedClick()} />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        courses={COURSES}
        preselectedCourse={preselectedCourse}
      />
    </div>
  );
};

export default App;