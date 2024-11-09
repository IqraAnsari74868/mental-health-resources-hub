import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Your Journey to
            <span className="text-indigo-600"> Mental Wellness</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover resources, support, and information about mental health. Your well-being matters, and we're here to help.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link
              to="/resources"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Explore Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Depression</h3>
            <img
              src="https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&w=800"
              alt="Depression"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">Understanding and managing depression through professional guidance and self-care.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Anxiety</h3>
            <img
              src="https://images.unsplash.com/photo-1474418397713-7ede21d49118?auto=format&fit=crop&w=800"
              alt="Anxiety"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">Learn about anxiety disorders and effective coping strategies.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">ADHD</h3>
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800"
              alt="ADHD"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-gray-600">Resources and support for managing ADHD in daily life.</p>
          </div>
        </div>
      </div>
    </div>
  );
}