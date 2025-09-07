"use client";

import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  loop?: boolean;
  className?: string;
}

export default function Typewriter({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delay = 2000, 
  loop = true,
  className = "" 
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isComplete && currentTextIndex < texts.length) {
      const fullText = texts[currentTextIndex];
      
      if (!isDeleting && currentText !== fullText) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, speed);
      } else if (!isDeleting && currentText === fullText) {
        if (currentTextIndex === texts.length - 1 && !loop) {
          setIsComplete(true);
        } else {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, delay);
        }
      } else if (isDeleting && currentText !== '') {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        }, deleteSpeed);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, delay, loop, isComplete]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}