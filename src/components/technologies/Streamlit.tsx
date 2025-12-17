import React from 'react';

export default function Streamlit({ className }: { className?: string }) {
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
        d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.2 4.8L16.8 12l-6 7.2L4.8 12l6-7.2z"
        fill="#FF4B4B"
      />
      <path
        d="M10.8 4.8v14.4L4.8 12l6-7.2z"
        fill="#FF6B6B"
      />
      <path
        d="M10.8 4.8L16.8 12l-6 7.2V4.8z"
        fill="#FF2B2B"
      />
    </svg>
  );
}