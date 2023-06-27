import React, { useEffect, useState } from 'react';

const TypewriterExample = () => {
  const Name = "Hi, I'm Eniko Valko "
  const Multimedia = "Multimedia Designer"
  const Frontend = "Front-end Developer"
  const [texts, setTexts] = useState([]);
  const sentences = [Name, Multimedia, Frontend];
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  

  useEffect(() => {
    let currentIndex = 0;
    let currentText = '';

    const interval = setInterval(() => {
      if (currentIndex === sentences.length) {
        clearInterval(interval);
        setAnimationComplete(true);
        return;
      }

      const sentence = sentences[currentIndex];
      currentText += sentence[currentText.length];

      setTexts((prevTexts) => {
        const updatedTexts = [...prevTexts];
        updatedTexts[currentIndex] = currentText;
        return updatedTexts;
      });

      if (currentText === sentence) {
        currentIndex++;
        currentText = '';
        setCurrentSentenceIndex(currentIndex);
        setShowCursor(false);
        setTimeout(() => {
          setShowCursor(true);
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {texts.map((text, index) => (
        <h1 key={index}>
          {text}
          {showCursor && !animationComplete && index === currentSentenceIndex && <span className="cursor">|</span>}
        </h1>
      ))}
    </div>
  );
};

export default TypewriterExample;