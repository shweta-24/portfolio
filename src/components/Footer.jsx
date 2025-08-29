import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex justify-center space-x-6 py-4 bg-gray-900 text-white mt-20">
      <a href="https://www.linkedin.com/in/shweta-misra-430875148/"><FaLinkedin size={24} /></a>
      <a href="https://github.com/shweta-24"><FaGithub size={24} /></a>
      <a href="mailto:shwetamisra24@gmail.com"><FaEnvelope size={24} /></a>
    </footer>
  );
}

export default Footer;
