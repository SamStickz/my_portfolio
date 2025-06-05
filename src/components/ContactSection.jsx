import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section className="bg-[#020c1b]">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="py-12 md:py-16 lg:py-20 px-6 flex flex-col md:flex-row items-start justify-between gap-12 max-w-6xl mx-auto">
          {/* LEFT: Contact Info / Message */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-[#f9cb80] mb-4">
              Let's Connect
            </h2>
            <p className="text-gray-400 mb-6">
              I'm open to freelance projects, collaborations, or just a friendly
              chat. Feel free to reach out using the form or through my contact
              links.
            </p>

            <div className="space-y-3 text-gray-300">
              <p>
                Email:{" "}
                <a
                  href="mailto:sadeleye437@gmail.com"
                  className="text-[#f9cb80] hover:underline"
                >
                  sadeleye437@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+2348024067191"
                  className="text-[#f9cb80] hover:underline"
                >
                  +234 802 406 7191
                </a>
              </p>
              <p>Location: Lagos, Nigeria</p>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <form
            action="https://formspree.io/f/mbjbzwro"
            method="POST"
            className="flex-1 w-full max-w-md space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-2 bg-transparent border border-gray-600 rounded text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-2 bg-transparent border border-gray-600 rounded text-white"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
              className="w-full p-2 bg-transparent border border-gray-600 rounded text-white"
            />
            <button
              type="submit"
              className="w-full bg-[#f9cb80] text-black py-2 rounded hover:opacity-80 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
