import { ReactNode, type ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown/lib/ast-to-react";

interface MarkdownContentProps {
  content: string;
}

const components: Partial<Components> = {
  img: ({
    node,
    src,
    alt,
    ...props
  }: {
    node: any;
    src: string;
    alt: string;
    props: any;
  }) => (
    <img
      src={`https://github.com/CreatorsDAO/eliza101/blob/main/docs/${src}?raw=true`}
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
