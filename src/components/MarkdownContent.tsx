import { type ReactElement } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({
  content,
}: MarkdownContentProps): ReactElement {
  return (
    <article className="prose prose-invert mx-auto px-4 py-8">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
