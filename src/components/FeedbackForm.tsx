import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {submitted ? (
        <div className="text-center text-green-600">
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p>Your feedback has been submitted successfully.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Share Your Feedback</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              How helpful was this resource?
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`p-1 ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  <Star className="h-8 w-8 fill-current" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              Your Comments
            </label>
            <textarea
              id="comment"
              rows={4}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}