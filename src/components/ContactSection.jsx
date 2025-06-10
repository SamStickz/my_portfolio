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
          const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const res = await fetch("https://formspark.io/f/4pHbQyZXm", {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    alert("Message sent!");
  } else {
    alert("Error sending message.");
  }
};

// in your form
<form onSubmit={handleSubmit} className="...">
  {/* input fields */}
</form>

        </div>
      </motion.div>
    </section>
  );
}

export default ContactSection;
