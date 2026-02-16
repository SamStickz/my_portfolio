import { useState, useEffect } from "react";

function RotatingGreeting() {
  const greetings = [
    { text: "Hello", lang: "English" },
    { text: "مرحبا", lang: "Arabic" },
    { text: "Hola", lang: "Spanish" },
    { text: "Bonjour", lang: "French" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "안녕하세요", lang: "Korean" },
    { text: "Hallo", lang: "German" },
    { text: "Ciao", lang: "Italian" },
    { text: "Привет", lang: "Russian" },
    { text: "你好", lang: "Chinese" },
    { text: "Olá", lang: "Portuguese" },
    { text: "Namaste", lang: "Hindi" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <div className="inline-block">
      <span
        className={`text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{
          background: "linear-gradient(135deg, #f9cb80 0%, #fcdca5 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {greetings[currentIndex].text}
      </span>
    </div>
  );
}

export default RotatingGreeting;
