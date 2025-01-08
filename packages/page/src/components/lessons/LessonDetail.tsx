import React from 'react';
import { LessonContent } from './LessonContent';
import { LessonDetail as LessonDetailType } from '../../types/lesson';

interface LessonDetailProps {
  detail: LessonDetailType;
}

export function LessonDetail({ detail }: LessonDetailProps) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{detail.title}</h2>
      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6">
        <LessonContent content={detail.content} />
      </div>
    </div>
  );
}