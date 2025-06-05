import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "UI/UX Design",
    short: "Beautiful and user-centric web designs",
    details:
      "Crafting interfaces that are not only visually appealing but also provide an intuitive user experience, focusing on usability, accessibility, and engagement.",
  },
  {
    title: "Frontend Development",
    short: "Responsive, scalable and fast",
    details:
      "Building modern frontend applications using React, TailwindCSS, and other best practices to ensure clean code and responsive design across all devices.",
  },
  {
    title: "Website Optimization",
    short: "Performance and SEO enhancements",
    details:
      "Improving site speed, mobile friendliness, and search engine visibility to give your website a competitive edge and better user experience.",
  },
];

export default function ServicesSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 px-4 bg-[#020c1b]" id="services">
      <div className="max-w-6xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f9cb80]">
          Services
        </h2>
        <p className="text-gray-400 mb-12">
          Here’s what I can help you with professionally
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-[#112240] rounded-xl p-6 shadow-md hover:shadow-lg transition min-h-[260px] flex flex-col justify-between group"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#f9cb80] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.short}</p>
              </div>
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setSelected(service)}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full border border-[#f9cb80] text-[#f9cb80] hover:bg-[#cfa85f] hover:text-[#020c1b] transition"
                >
                  Show More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#112240] p-6 rounded-lg max-w-lg w-full text-white relative"
          >
            <h3 className="text-2xl font-bold mb-3 text-[#f9cb80]">
              {selected.title}
            </h3>
            <p className="text-gray-300 text-sm">{selected.details}</p>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-[#f9cb80] hover:text-white text-xl font-bold"
            >
              &times;
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
