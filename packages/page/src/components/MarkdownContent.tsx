import {
  ReactNode,
  type ReactElement,
  useState,
  useEffect,
  useRef,
} from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Loading } from "./Loading";
import rehypeRaw from "rehype-raw";
import mermaid from "mermaid";

const baseUrl = "https://github.com/CreatorsDAO/eliza101/blob/main/docs/";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({
  content,
}: MarkdownContentProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      themeCSS: `
        .mermaid .label {
          color: #ffffff;
        }
        .mermaid .edgePath .path {
          stroke: #4ade80;
          stroke-width: 2px;
        }
        .mermaid .arrowheadPath {
          fill: #4ade80;
        }
        .mermaid .cluster rect {
          fill: #1e293b;
          stroke: #334155;
        }
        .mermaid rect, .mermaid circle, .mermaid polygon {
          fill: #1e293b;
          stroke: #4ade80;
        }
      `,
      fontFamily: "inherit",
    });

    // 手动触发 Mermaid 渲染
    if (containerRef.current) {
      try {
        mermaid.run({
          querySelector: ".mermaid",
          nodes: containerRef.current.querySelectorAll(".mermaid"),
        });
      } catch (error) {
        console.error("Error rendering Mermaid diagrams:", error);
      }
    }
  }, [content]);

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

      if (match?.[1] === "mermaid") {
        return (
          <div className="mermaid">{String(children).replace(/\n$/, "")}</div>
        );
      }

      return !inline && match ? (
        <SyntaxHighlighter
          style={atomDark}
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
    <article
      ref={containerRef}
      className="prose prose-gray dark:prose-invert max-w-4xl mx-auto px-4 py-8"
    >
      <ReactMarkdown rehypePlugins={[rehypeRaw]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
