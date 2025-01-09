import { ReactNode, type ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";

const baseUrl = "https://github.com/CreatorsDAO/eliza101/blob/main/docs/";

interface MarkdownContentProps {
  content: string;
}

const components: Partial<Components> = {
  img: ({ src, alt, ...props }) => (
    <img
      src={`${baseUrl}${src}?raw=true`}
      alt={alt || "Image"}
      className="w-full h-auto"
      loading="lazy"
      {...props}
    />
  ),
};

export function MarkdownContent({
  content,
}: MarkdownContentProps): ReactElement {
  return (
    <article className="prose prose-gray dark:prose-invert max-w-4xl mx-auto px-4 py-8">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
}
