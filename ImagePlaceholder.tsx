import React from 'react';
import { Image } from 'lucide-react';

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
  aspectRatio?: string;
}

export default function ImagePlaceholder({ className = '', text = 'Image', aspectRatio = 'aspect-video' }: ImagePlaceholderProps) {
  return (
    <div className={`bg-slate-100 rounded-3xl flex flex-col items-center justify-center border-2 border-dashed border-slate-200 text-slate-400 ${aspectRatio} ${className}`}>
      <Image size={48} strokeWidth={1} className="mb-4 opacity-50" />
      <span className="text-sm font-medium uppercase tracking-wider opacity-50">{text}</span>
    </div>
  );
}
