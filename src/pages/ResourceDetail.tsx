import React from 'react';
import { useParams } from 'react-router-dom';
import FeedbackForm from '../components/FeedbackForm';

const resources = {
  depression: {
    title: "Understanding Depression",
    description: "Depression is more than just feeling sad. It's a complex mental health condition that affects millions worldwide.",
    symptoms: [
      "Persistent sad, anxious, or empty mood",
      "Loss of interest in activities once enjoyed",
      "Difficulty sleeping or oversleeping",
      "Changes in appetite or weight",
      "Thoughts of death or suicide"
    ],
    relatedPosts: [
      {
        title: "Coping with Depression During Isolation",
        link: "/blog/coping-depression-isolation"
      },
      {
        title: "Natural Remedies for Depression",
        link: "/blog/natural-remedies-depression"
      }
    ],
    helplineNumber: "1-800-273-8255"
  },
  anxiety: {
    title: "Managing Anxiety",
    description: "Anxiety disorders are the most common mental health concern in the United States.",
    symptoms: [
      "Excessive worrying",
      "Restlessness",
      "Difficulty concentrating",
      "Sleep problems",
      "Physical symptoms like rapid heartbeat"
    ],
    relatedPosts: [
      {
        title: "5 Breathing Exercises for Anxiety",
        link: "/blog/breathing-exercises-anxiety"
      },
      {
        title: "Understanding Panic Attacks",
        link: "/blog/understanding-panic-attacks"
      }
    ],
    helplineNumber: "1-800-950-6264"
  },
  adhd: {
    title: "Living with ADHD",
    description: "ADHD affects both children and adults, impacting daily life, work, and relationships.",
    symptoms: [
      "Difficulty focusing",
      "Hyperactivity",
      "Impulsiveness",
      "Disorganization",
      "Time management struggles"
    ],
    relatedPosts: [
      {
        title: "ADHD in the Workplace",
        link: "/blog/adhd-workplace"
      },
      {
        title: "ADHD Management Strategies",
        link: "/blog/adhd-management"
      }
    ],
    helplineNumber: "1-866-200-8098"
  }
};

export default function ResourceDetail() {
  const { condition } = useParams<{ condition: keyof typeof resources }>();
  const resource = resources[condition || 'depression'];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{resource.title}</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <p className="text-lg text-gray-700 mb-6">{resource.description}</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Symptoms</h2>
          <ul className="list-disc list-inside mb-6 space-y-2">
            {resource.symptoms.map((symptom) => (
              <li key={symptom} className="text-gray-700">{symptom}</li>
            ))}
          </ul>

          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Need immediate help?</h3>
            <p className="text-red-700">
              Call {resource.helplineNumber} - Available 24/7
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related Articles</h2>
          <div className="space-y-4">
            {resource.relatedPosts.map((post) => (
              <a
                key={post.link}
                href={post.link}
                className="block p-4 border rounded-md hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-medium text-indigo-600">{post.title}</h3>
              </a>
            ))}
          </div>
        </div>

        <FeedbackForm />
      </div>
    </div>
  );
}