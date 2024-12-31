export interface LessonDetail {
  title: string;
  content: string;
}

export interface Lesson {
  id: number;
  title: string;
  content: string;
  emoji: string;
  details: LessonDetail[];
}