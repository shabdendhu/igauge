import { useCalculateFontSize } from "@/app/(app)/hooks/use-calculate-font-size";
import React, { useEffect, useState } from "react";
// import "./TypingEffect.css";

const TypingEffect = ({ words, className = "" }) => {
  //   const words = ["Hello", "World", "Typing", "Effect"];
  const fontSize = useCalculateFontSize();
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 200;
  const deletingSpeed = 100;
  const pause = 1000;

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer;

    if (!isDeleting && charIndex < currentWord.length) {
      timer = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => setCharIndex(charIndex - 1), deletingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <span
      style={{
        width: fontSize(350, 200, 1920, 400),
      }}
      className="typing-container"
    >
      <span
        id="typing-text"
        style={{
          color: "#F5A717",
        }}
        className={className}
      >
        {" "}
        {words[wordIndex].substring(0, charIndex)}
      </span>
      <span
        style={{
          color: "#F5A717",
        }}
        className="cursor"
      >
        |
      </span>
    </span>
  );
};

export default TypingEffect;
