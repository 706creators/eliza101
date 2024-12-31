import React, { useEffect, useState, type ReactElement } from "react";
import { useParams } from "react-router-dom";
import { MarkdownContent } from "../components/MarkdownContent";

export function ModulePage(): ReactElement {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadContent() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://raw.githubusercontent.com/CreatorsDAO/eliza101/main/docs/${id}.md`
        );
        if (!response.ok) {
          throw new Error("Content not found");
        }
        const text = await response.text();
        setContent(text);
        setError("");
      } catch (err) {
        setError("Failed to load content");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadContent();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-white bg-red-500/20 backdrop-blur-sm rounded-lg p-4">
          {error}
        </div>
      </div>
    );
  }

  return <MarkdownContent content={content} />;
}
