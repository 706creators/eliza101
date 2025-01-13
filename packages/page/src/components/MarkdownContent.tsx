import { ReactNode, type ReactElement, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

const baseUrl = "https://github.com/CreatorsDAO/eliza101/blob/main/docs/";

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({
  content,
}: MarkdownContentProps): ReactElement {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // 检查 HTML 根元素是否有 dark 类
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    // 初始检查
    checkDarkMode();

    // 使用 MutationObserver 监听类变化
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

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
    code: ({ inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={isDark ? oneDark : oneLight}
          language={match[1]}
          PreTag="div"
          customStyle={{
            background: isDark ? "#282c34" : "#f5f5f5",
          }}
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
