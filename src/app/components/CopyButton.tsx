'use client';

import React from 'react';

interface CopyButtonProps {
  textToCopy: string;
  description: string;
}

export default function CopyButton({ textToCopy, description }: CopyButtonProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      aria-label={`Copy ${description} format`}
    >
      Copy
    </button>
  );
} 