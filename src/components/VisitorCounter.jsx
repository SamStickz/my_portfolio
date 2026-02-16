import { useState, useEffect } from "react";
import { FiEye } from "react-icons/fi";

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get visitor count from localStorage or initialize
    const getVisitorCount = () => {
      const stored = localStorage.getItem("portfolioVisitors");
      if (stored) {
        const data = JSON.parse(stored);
        return data.count;
      }
      return 0;
    };

    // Increment visitor count
    const incrementVisitor = () => {
      const lastVisit = localStorage.getItem("lastVisit");
      const now = new Date().getTime();

      // Only increment if it's been more than 24 hours since last visit
      if (!lastVisit || now - parseInt(lastVisit) > 24 * 60 * 60 * 1000) {
        const currentCount = getVisitorCount();
        const newCount = currentCount + 1;

        localStorage.setItem(
          "portfolioVisitors",
          JSON.stringify({ count: newCount }),
        );
        localStorage.setItem("lastVisit", now.toString());

        return newCount;
      }

      return getVisitorCount();
    };

    // Simulate a small delay for realism
    setTimeout(() => {
      const count = incrementVisitor();
      setVisitorCount(count);
      setLoading(false);
    }, 500);
  }, []);

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="inline-flex items-center gap-2 bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50">
      <FiEye className="text-[#f9cb80]" size={16} />
      <div className="flex items-baseline gap-1">
        <span className="text-sm font-semibold text-white dark:text-white light:text-gray-900">
          {loading ? "..." : formatNumber(visitorCount)}
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600">
          visitors
        </span>
      </div>
    </div>
  );
}

export default VisitorCounter;
