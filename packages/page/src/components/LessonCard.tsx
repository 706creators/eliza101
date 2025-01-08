import React from 'react';
import { Link } from 'react-router-dom';
import { Lesson } from '../types/lesson';

interface LessonCardProps {
  lesson: Lesson;
}

export function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Link 
      to={`/lesson/${lesson.id}`}
      className="block backdrop-blur-md bg-white/80 rounded-lg shadow-lg p-6 mb-4 transition-all hover:transform hover:scale-[1.02]"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">
          <span className="mr-2">{lesson.emoji}</span>
          {lesson.title}
        </h2>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <p className="text-gray-700 mt-2">{lesson.content}</p>
    </Link>
  );
}