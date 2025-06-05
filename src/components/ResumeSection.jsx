function ResumeSection() {
  return (
    <section className="bg-[#020c1b] py-12 md:py-16 lg:py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl font-manrope text-white mb-4">Resume</h2>
        <p className="text-gray-400 mb-4">
          Download my resume below to learn more about my skills and experience.
        </p>
        <a
          href="/your-resume.pdf"
          download
          className="px-6 py-2 bg-[#f9cb80] text-black rounded hover:opacity-80 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default ResumeSection;
