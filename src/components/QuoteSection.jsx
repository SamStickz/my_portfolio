import { motion } from "framer-motion";

function QuoteSection() {
  const quotes = [
    {
      text: "Experience is the name everyone gives to their mistakes.",
      author: "Oscar Wilde",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Code is like humor. When you have to explain it, it's bad.",
      author: "Cory House",
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    },
    {
      text: "Man is made by his belief. As he believes, so he is.",
      author: "Bhagavad Gita",
    },
  ];

  // You can randomize or rotate through quotes
  const currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="bg-transparent py-16 px-6" id="quote">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -left-4 top-0 text-6xl text-[#f9cb80]/20 font-serif">
            "
          </div>

          <blockquote className="text-center">
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 dark:text-gray-300 light:text-gray-700 font-light italic leading-relaxed mb-6 px-8">
              {currentQuote.text}
            </p>
            <footer className="text-right">
              <cite className="text-lg text-[#f9cb80] not-italic font-medium">
                — {currentQuote.author}
              </cite>
            </footer>
          </blockquote>

          <div className="absolute -right-4 bottom-0 text-6xl text-[#f9cb80]/20 font-serif">
            "
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default QuoteSection;
