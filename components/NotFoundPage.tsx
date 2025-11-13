import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] text-center px-4">
      <div>
        <h1 className="text-6xl font-bold text-sky-400">404</h1>
        <p className="mt-4 text-2xl font-semibold text-white">Page Not Found</p>
        <p className="mt-2 text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-6">
          <a
            href="/"
            className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
          >
            Go back home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
