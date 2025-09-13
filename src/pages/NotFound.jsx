import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gradient">404</h1>
        </div>
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved, deleted, 
          or you entered the wrong URL.
        </p>
        <Link to="/" className="btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
