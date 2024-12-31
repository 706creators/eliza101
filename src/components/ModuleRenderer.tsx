import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ModuleRendererProps {
  content: string;
}

export function ModuleRenderer({ content }: ModuleRendererProps) {
  return (
    <div className="prose prose-lg max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}