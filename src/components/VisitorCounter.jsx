import { FiEye } from "react-icons/fi";

function VisitorCounter() {
  // Update this number manually as you get more visitors
  const visitorCount = 14;

  // Get ordinal suffix (1st, 2nd, 3rd, etc.)
  const getOrdinal = (num) => {
    const s = ["th", "st", "nd", "rd"];
    const v = num % 100;
    return num + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800/50 light:bg-gray-200/90 backdrop-blur-sm px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700/50">
      <div className="flex items-center gap-3">
        <FiEye className="text-gray-600 dark:text-[#f9cb80]" size={20} />
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 light:text-gray-600">
            You are the{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              {getOrdinal(visitorCount)}
            </span>{" "}
            visitor
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisitorCounter;
