import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

function QualificationSection() {
  const qualifications = [
    {
      title: "B.Agric in Agricultural Extension and Rural Development",
      institution: "Federal University of Agriculture, Abeokuta",
      year: "2018 - 2023",
    },
    {
      title: "Front-End Development Certification",
      institution: "FreeCodeCamp / Udemy",
      year: "2023",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      institution: "FreeCodeCamp",
      year: "2023",
    },
  ];

  return (
    <section id="qualification" className="bg-[#020c1b] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-[#f9cb80]">
          <FaGraduationCap className="inline-block mr-2 mb-1" size={28} />
          Qualification
        </h2>

        <div className="relative border-l-2 border-[#f9cb80] pl-6">
          {qualifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 relative"
            >
              <div className="absolute w-4 h-4 bg-[#f9cb80] rounded-full -left-[0.5rem] top-1.5 border-2 border-white" />
              <h3 className="text-xl font-semibold text-[#fcdca5]">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.institution}</p>
              <p className="text-sm text-gray-500 mt-1">{item.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default QualificationSection;
