import VisitorCounter from "./VisitorCounter";

function Footer() {
  return (
    <footer className="bg-[#020c1b] py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Top section - Copyright */}
        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm">
            Design & Developed by Samuel Adeleye
          </p>
          <p className="text-gray-500 text-xs mt-1">
            © 2026. All rights reserved.
          </p>
        </div>

        {/* Visitor Counter - Centered */}
        <div className="flex justify-center">
          <VisitorCounter />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
