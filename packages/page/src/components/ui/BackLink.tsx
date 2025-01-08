import React from 'react';
import { Link } from 'react-router-dom';

export function BackLink() {
  return (
    <Link to="/" className="inline-block mb-6 text-white hover:underline">
      ← Back to lessons
    </Link>
  );
}