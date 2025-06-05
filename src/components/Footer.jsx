import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import signature from "../assets/signature.png"; // 

function Footer() {
  return (
    <footer className="bg-[#101d2e] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* LEFT SIDE */}
        <div className="space-y-2">
          <div className="flex items-center space-x-3">
            <img
              src={signature}
              alt="Signature"
              className="h-8 w-auto bg-[#101d2e] p-1 rounded-md"
            />
            <span className="text-2xl font-bold text-[#f9cb80] tracking-wide">
              Samuel Adeleye
            </span>
          </div>
          <p className="text-sm text-gray-400">Frontend Developer</p>
          <p className="text-sm text-gray-500">
            Building clean and expressive UI
          </p>
          <p className="text-xs mt-4 text-gray-600">
            &copy; {new Date().getFullYear()} Samuel Adeleye. All rights
            reserved.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex space-x-6">
          <motion.a
            href="https://github.com/SamStickz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f9cb80] transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub size={22} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/samuel-adeleye-0b25b9241/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_conversation_detail%3BnIhMADfeSDqWQpnjdZgflQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f9cb80] transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin size={22} />
          </motion.a>
          <motion.a
            href="https://twitter.com/samstickzzz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f9cb80] transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <FaTwitter size={22} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
