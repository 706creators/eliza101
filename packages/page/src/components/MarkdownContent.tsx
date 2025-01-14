import { type ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { funky } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Loading } from "./Loading";

const baseUrl = "https://github.com/CreatorsDAO/eliza101/blob/main/docs/";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({
  content,
}: MarkdownContentProps): ReactElement {
  if (!content) {
    return <Loading />;
  }

  const components: Partial<Components> = {
    img: ({ src, alt, ...props }) => (
      <img
        src={src?.startsWith("http") ? src : `${baseUrl}${src}?raw=true`}
        alt={alt || "Image"}
        loading="lazy"
        {...props}
      />
    ),

    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");

      return !inline && match ? (
        <SyntaxHighlighter
          style={funky}
          PreTag="div"
          language={match[1]}
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <article className="prose prose-gray dark:prose-invert max-w-4xl mx-auto px-4 py-8">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </article>
  );
}
