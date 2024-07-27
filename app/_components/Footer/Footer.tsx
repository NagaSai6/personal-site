import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className="relative bg-gradient-to-r from-white/20 to-white/10 text-gray-900 p-6 mt-8  shadow-lg backdrop-filter backdrop-blur-lg border border-gray-200 ">
  <div className="absolute inset-0 bg-gradient-to-r from-green-500/60 to-blue-500/60 opacity-20 rounded-lg"></div>
  <div
    className="absolute inset-0 border border-white/20 rounded-lg"
    style={{ boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.5)" }}
  ></div>
  <div className="relative container mx-auto flex flex-col md:flex-row justify-between items-center z-10">
    <p className="mb-4 md:mb-0 font-secondaryFont font-secondaryFontWeight">
      © {currentYear} <span className="text-green-500">nagasai.in</span>
    </p>
    <div className="flex space-x-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-green-500 transition-colors duration-200 hover:bg-white p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/20 hover:border-green-500"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-green-500 transition-colors duration-200 hover:bg-white p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/20 hover:border-green-500"
      >
        <FaTwitter />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-green-500 transition-colors duration-200 hover:bg-white p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/20 hover:border-green-500"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl hover:text-green-500 transition-colors duration-200 hover:bg-white p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/20 hover:border-green-500"
      >
        <FaGithub />
      </a>
    </div>
  </div>
</footer>
);

export default Footer;
