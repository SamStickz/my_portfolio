import { motion } from "framer-motion";

function GitHubActivity() {
  return (
    <section className="bg-transparent py-12 px-6" id="github-activity">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#f9cb80] mb-6">
            GitHub Activity
          </h2>

          {/* GitHub Contribution Graph */}
          <div className="bg-[#1a1a1a] rounded-xl p-4 border border-gray-800 overflow-x-auto">
            <img
              src="https://ghchart.rshah.org/f9cb80/SamStickz"
              alt="GitHub Contribution Graph"
              className="w-full max-w-4xl mx-auto"
              style={{ minWidth: "600px" }}
            />
            <p className="text-center text-sm text-gray-400 mt-3">
              Contributions in the last year
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default GitHubActivity;
