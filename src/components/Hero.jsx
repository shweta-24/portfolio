import React from "react";
import profilePic from "../assets/profile.jpg";
import '../App.css'; 

function Hero() {
  return (
    <div className="w-1/3 flex justify-center py-10">
      <div className="clear-fix">
        <div className="framed-picture">
          <img 
          className="h-60"
          src={profilePic} 
          alt="Profile"
          />
      </div>
      <h2 className="text-2xl text-gray-800 font-bold">Shweta Misra</h2>
      <p className="text-gray-800">AI/ML Engineer & Software Developer</p>
      </div>   
    </div>
  );
}

export default Hero;
