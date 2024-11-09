import React from 'react';
import BookCard from '../components/BookCard';

const books = [
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    description: "Explores how trauma affects the body and mind, and innovative treatments for recovery.",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800",
    amazonLink: "https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "Learn how to build good habits and break bad ones through proven strategies.",
    imageUrl: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800",
    amazonLink: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299"
  },
  {
    title: "Lost Connections",
    author: "Johann Hari",
    description: "Uncovering the real causes of depression and anxiety, and unexpected solutions.",
    imageUrl: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&w=800",
    amazonLink: "https://www.amazon.com/Lost-Connections-Uncovering-Depression-Unexpected/dp/163286830X"
  }
];

export default function Books() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Recommended Books</h1>
          <p className="mt-4 text-xl text-gray-600">
            Curated readings for mental health awareness and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </div>
  );
}