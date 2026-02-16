import { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());
  const [status, setStatus] = useState("ONLINE");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const getTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  return (
    <div className="bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-green-500 uppercase tracking-wider">
            {status}
          </span>
        </div>
      </div>

      <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900 font-mono">
        {formatTime(time)}
      </div>

      <div className="text-xs text-gray-400 dark:text-gray-400 light:text-gray-600 mt-1 uppercase tracking-wide">
        {getTimezone().replace("_", " ")}
      </div>
    </div>
  );
}

export default LiveClock;
