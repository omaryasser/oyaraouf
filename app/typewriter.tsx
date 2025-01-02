'use client'

import { useEffect, useRef, useState } from 'react';

function Typewriter({
  text,
  speed,
}: {
  text: string;
  speed: number;
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text.charAt(currentIndex));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(intervalId);
      }
    }, 100-speed);

    return () => clearInterval(intervalId);
  });

  return <>{displayedText}</>;
}

export default Typewriter;
