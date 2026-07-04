/**
 * TypingAnimation — Terminal-style typewriter effect
 * Cycles through an array of strings with delete/retype animation
 */
import { useState, useEffect } from "react";

interface TypingAnimationProps {
  strings: string[];
  className?: string;
  prefix?: string;
}

const TypingAnimation = ({ strings, className = "", prefix = "" }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[stringIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentString.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentString.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 60);
    } else if (!isDeleting && charIndex === currentString.length) {
      // Pause at end
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentString.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 35);
    } else if (isDeleting && charIndex === 0) {
      // Move to next string
      setIsDeleting(false);
      setStringIndex((i) => (i + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex, strings]);

  return (
    <span className={className}>
      {prefix && <span className="text-neon-green font-mono">{prefix}</span>}
      <span>{displayText}</span>
      <span className="animate-neon-pulse text-neon-green">|</span>
    </span>
  );
};

export default TypingAnimation;
