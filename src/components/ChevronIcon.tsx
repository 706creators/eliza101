import React from 'react';

interface ChevronIconProps {
  isExpanded: boolean;
}

export function ChevronIcon({ isExpanded }: ChevronIconProps) {
  return (
    <svg
      className={`w-6 h-6 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}