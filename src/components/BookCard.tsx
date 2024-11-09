import React from 'react';
import { Book } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  imageUrl: string;
  amazonLink: string;
}

export default function BookCard({ title, author, description, imageUrl, amazonLink }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">by {author}</p>
        <p className="text-gray-700 flex-1">{description}</p>
        <a
          href={amazonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          <Book className="h-4 w-4 mr-2" />
          View on Amazon
        </a>
      </div>
    </div>
  );
}