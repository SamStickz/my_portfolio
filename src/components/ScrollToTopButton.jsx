import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-5 z-[60] p-3 rounded-full bg-[#f9cb80] text-[#020c1b] hover:bg-[#d2a860] transition-all hover:scale-110 shadow-lg"
        aria-label="Scroll to top"
      >
        <FiArrowUp size={20} />
      </button>
    )
  );
}

export default ScrollToTopButton;
