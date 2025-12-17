import React from 'react';

export default function ComputerVision({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M12 1v6m0 8v6m11-7h-6m-8 0H1" stroke="currentColor" strokeWidth="2"/>
      <path d="M20.49 8.5l-4.24 4.24m0-8.48L20.49 8.5M3.51 8.5l4.24 4.24m0-8.48L3.51 8.5" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="1" fill="currentColor"/>
    </svg>
  );
}