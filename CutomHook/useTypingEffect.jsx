import { useState, useEffect } from 'react';

export const useTypingEffect = (titles, typingSpeed = 150, pauseTime = 2000) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[loopNum % titles.length];
      const updatedText = isDeleting
        ? currentTitle.substring(0, charIndex - 1)
        : currentTitle.substring(0, charIndex + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    };

    const typingInterval = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [displayedText, isDeleting, loopNum, charIndex, titles, typingSpeed, pauseTime]);

  return displayedText;
};
