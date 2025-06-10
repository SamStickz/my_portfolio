import { motion } from "framer-motion";
import { useState } from "react";

function ContactSection() {
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 4000); // Auto-hide after 4 seconds
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form submitted");

    const formData = new FormData(e.target);

    // Log form data for debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      console.log("Sending email via Formspree...");

      // Using Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
      const res = await fetch("https://formspree.io/f/movweblb", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData, // Using FormData instead of JSON
      });

      console.log("Response status:", res.status);
      console.log("Response ok:", res.ok);

      if (res.ok) {
        showNotification(
          "🎉 Message sent successfully! I'll get back to you soon.",
          "success"
        );
        e.target.reset();
      } else {
        const errorText = await res.text();
        console.error("Server error:", errorText);
        showNotification(
          "❌ Error sending message. Please try again.",
          "error"
        );
      }
    } catch (error) {
      console.error("Network/Fetch error:", error);
      showNotification(
        "❌ Network error. Please check your connection.",
        "error"
      );
    }
  };

  return (
    <section className="bg-[#020c1b] relative">
      {/* Custom Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-60 max-w-md w-full mx-4"
        >
          <div
            className={`
            px-6 py-4 rounded-lg shadow-2xl border backdrop-blur-sm
            ${
              notification.type === "success"
                ? "bg-green-900/90 border-green-500 text-green-100"
                : "bg-red-900/90 border-red-500 text-red-100"
            }
          `}
          >
            <div className="flex items-center justify-between">
              <p className="font-medium">{notification.message}</p>
              <button
                onClick={() => setNotification(null)}
                className="ml-4 text-xl hover:opacity-70 transition-opacity"
              >
                ×
              </button>
            </div>
          </div>
        </motion.div>
      )}

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
          <div className="flex-1 max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#f9cb80] font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-[#112240] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#f9cb80] transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[#f9cb80] font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-[#112240] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#f9cb80] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-[#f9cb80] font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-[#112240] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#f9cb80] transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#f9cb80] font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-[#112240] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#f9cb80] transition-colors resize-vertical"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f9cb80] text-[#020c1b] font-semibold py-3 px-6 rounded-lg hover:bg-[#f4c36b] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
