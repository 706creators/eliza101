import React from 'react';
import { Lesson } from '../types/lesson';

interface LessonDetailsProps {
  lesson: Lesson;
}

export function LessonDetails({ lesson }: LessonDetailsProps) {
  return (
    <div className="mt-4 pt-4 border-t border-gray-200">
      <div className="prose prose-sm max-w-none">
        {lesson.details.map((detail, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{detail.title}</h3>
            <p className="text-gray-600">{detail.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}