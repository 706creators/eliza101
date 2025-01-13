import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "../components/layout/Container";
import { BackLink } from "../components/ui/BackLink";
import { LessonDetail } from "../components/lessons/LessonDetail";
import { lessons } from "../data/lessons";

export function LessonPage() {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === Number(id));

  if (!lesson) {
    return (
      <Container className="py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Lesson not found
          </h1>
          <BackLink />
        </div>
      </Container>
    );
  }

  return (
    <Container className="py-8">
      <BackLink />
      <div className="backdrop-blur-md bg-white/80 rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">
          <span className="mr-2">{lesson.emoji}</span>
          {lesson.title}
        </h1>
        <p className="text-gray-700 text-lg mb-8">{lesson.content}</p>

        <div className="space-y-8">
          {lesson.details.map((detail, index) => (
            <LessonDetail key={index} detail={detail} />
          ))}
        </div>
      </div>
    </Container>
  );
}
