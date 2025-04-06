import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center text-center px-6 py-12 bg-transparent text-white min-h-screen"
    >
      {/* Content Container */}
      <div className="w-full max-w-3xl space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Let's Work Together</h2>
        <p className="text-gray-300 text-base md:text-lg">
          Have a project in mind? Contact me!
        </p>

        <div className="space-y-2 text-base md:text-lg">
          <p className="font-semibold">Phone: +91-8209957671</p>
          <a href="mailto:anujgaur474@gmail.com" className="hover:underline">
            Email: anujgaur474@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center justify-center space-x-6 mt-6">
          <a
            href="https://github.com/AgCode18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/anuj-gour-63a119313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://x.com/AnujGaur322458"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors duration-300"
          >
            <FaTwitter size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
