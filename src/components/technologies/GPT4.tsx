import React from 'react';

export default function GPT4({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
        fill="url(#gpt4-gradient)"
      />
      <path
        d="M12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-4 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
        fill="url(#gpt4-nodes)"
      />
      <defs>
        <linearGradient id="gpt4-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10A37F" />
          <stop offset="100%" stopColor="#1A7F64" />
        </linearGradient>
        <linearGradient id="gpt4-nodes" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#40E0D0" />
          <stop offset="100%" stopColor="#00CED1" />
        </linearGradient>
      </defs>
    </svg>
  );
}