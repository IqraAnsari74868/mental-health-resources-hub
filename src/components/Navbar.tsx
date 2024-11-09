import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, User, BookOpen } from 'lucide-react';

export default function Navbar({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8" />
            <span className="font-bold text-xl">MindfulHealth Hub</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link to="/resources/depression" className="hover:text-indigo-200">Resources</Link>
            <Link to="/books" className="flex items-center space-x-1 hover:text-indigo-200">
              <BookOpen className="h-5 w-5" />
              <span>Books</span>
            </Link>
            {isLoggedIn ? (
              <Link to="/profile" className="flex items-center space-x-1 hover:text-indigo-200">
                <User className="h-5 w-5" />
                <span>Profile</span>
              </Link>
            ) : (
              <Link to="/login" className="hover:text-indigo-200">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}