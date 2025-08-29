import React from "react";

function Navbar() {
  return (
    <nav className="bg-sage_green text-white flex justify-center py-4">
      <ul className="flex space-x-6">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li className="relative group">
          <a href="#projects" className="cursor-not-allowed opacity-70">Projects</a>
          <span className="absolute scale-0 -bottom-8 left-1/2 rounded bg-black px-2 py-1 text-xs text-white group-hover:scale-100 transition-all">
            Coming Soon
          </span>
        </li>
        <li className="relative group">
          <a href="#projects" className="cursor-not-allowed opacity-70">Memes</a>
          <span className="absolute scale-0 -bottom-8 left-1/2 rounded bg-black px-2 py-1 text-xs text-white group-hover:scale-100 transition-all">
            Coming Soon
          </span>
          </li>
        <li><a href="/ShwetaMisra_Resume.pdf">Resume</a></li>
        <li><a href="https://kth.diva-portal.org/smash/record.jsf?aq2=%5B%5B%5D%5D&c=1&af=%5B%5D&searchType=SIMPLE&sortOrder2=title_sort_asc&query=nested+noun&language=en&pid=diva2%3A1824001&aq=%5B%5B%5D%5D&sf=all&aqe=%5B%5D&sortOrder=author_sort_asc&onlyFullText=false&noOfRows=50&dswid=5884">Thesis</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
