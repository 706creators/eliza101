import React from 'react';
import { LessonCard } from './LessonCard';
import { Lesson } from '../../types/lesson';

interface LessonListProps {
  lessons: Lesson[];
}

export function LessonList({ lessons }: LessonListProps) {
  return (
    <div className="max-w-3xl mx-auto">
      {lessons.map(lesson => (
        <LessonCard key={lesson.id} lesson={lesson} />
      ))}
    </div>
  );
}