import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";

export default function SocialLinks() {
  return (
    <div>
      <div className="flex mb-4">
        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaXTwitter className="bg-blue-500 p-2 text-white h-10 rounded-sm me-2 w-10" />
        </a>
        <a
          href="https://github.com/wongiro"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub className="bg-blue-500 p-2 text-white h-10 rounded-sm me-2 w-10" />
        </a>
        <a
          href="https://www.linkedin.com/in/robinson-rubangakene/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedinIn className="bg-blue-500 p-2 text-white h-10 rounded-sm me-2 w-10" />
        </a>
        <a
          href="mailto:sonrobin2018@gmail.com"
          className="hover:text-red-400 transition-colors duration-300"
        >
          <LuMail className="bg-blue-500 text-white p-2 h-10 rounded-sm me-2 w-10" />
        </a>
      </div>
    </div>
  );
}
