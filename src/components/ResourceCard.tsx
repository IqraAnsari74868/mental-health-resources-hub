import React from 'react';

interface ResourceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export default function ResourceCard({ title, description, imageUrl, category }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">
          {category}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}