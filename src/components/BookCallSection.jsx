import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiVideo } from "react-icons/fi";

function BookCallSection() {
  return (
    <section className="bg-transparent py-16 px-6" id="book-call">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#112240] to-[#1a2940] dark:from-[#112240] dark:to-[#1a2940] light:from-white light:to-gray-50 border border-[#f9cb80]/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f9cb80]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-[#f9cb80]/10 rounded-full flex items-center justify-center mx-auto">
                <FiCalendar className="text-[#f9cb80]" size={32} />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
              Let's Build Something Great Together
            </h2>

            <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              If you've read this far, you might be interested in what I do.
              Book a free 15-minute call to discuss your project, ask questions,
              or just chat about web development.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-700">
                <FiClock className="text-[#f9cb80]" size={18} />
                <span>15 Minutes</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-700">
                <FiVideo className="text-[#f9cb80]" size={18} />
                <span>Google Meet / Zoom</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300 dark:text-gray-300 light:text-gray-700">
                <FiCalendar className="text-[#f9cb80]" size={18} />
                <span>Free Consultation</span>
              </div>
            </div>

            <motion.a
              href="https://cal.eu/samstickz/15min"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#f9cb80] text-[#020c1b] font-semibold px-8 py-4 rounded-full hover:bg-[#f4c36b] transition-all duration-300 shadow-lg shadow-[#f9cb80]/20"
            >
              <FiCalendar size={20} />
              Book a Free Call
            </motion.a>

            <p className="text-xs text-gray-500 dark:text-gray-500 light:text-gray-400 mt-6">
              No sales pitch, just a friendly conversation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BookCallSection;
