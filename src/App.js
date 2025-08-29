import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <div className="flex w-full overflow-hidden">
        <Hero />
        <div className="w-2/3">
        <About />
        <Skills />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;