import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface TypewriterCodeProps {
  code: string;
}

export default function TypewriterCode({ code }: TypewriterCodeProps) {
  const [displayedCode, setDisplayedCode] = useState('');
  const ref = useRef(null);
  // Trigger when 20% of the element is in view, and only once.
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isInView && !isFinished) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < code.length) {
          // Use functional update to avoid stale closures
          setDisplayedCode(code.substring(0, index + 1));
          index++;
        } else {
          setIsFinished(true);
          clearInterval(interval);
        }
      }, 3); // Slightly faster for better UX
      return () => clearInterval(interval);
    }
  }, [isInView, isFinished, code]);

  return (
    <div ref={ref} className="font-mono text-[10px] md:text-xs leading-relaxed text-blue-300/90 whitespace-pre-wrap relative">
      {displayedCode}
      {!isFinished && (
        <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse align-middle"></span>
      )}
    </div>
  );
}
