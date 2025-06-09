import { motion } from "framer-motion";

function AboutSection() {
  return (
    <motion.section
      className="bg-[#020c1b] text-[#f5f5f5] py-20 px-6 md:px-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#f9cb80] mb-6 font-outfit">
          About Me
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed font-outfit">
          I’m a frontend developer with a passion for crafting beautiful,
          responsive, and high-performance web applications. I specialize in
          React, Tailwind CSS, and building immersive user experiences with
          modern tools and frameworks.
        </p>
      </div>
    </motion.section>
  );
}

export default AboutSection;
