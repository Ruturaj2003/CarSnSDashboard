import React, { useState } from "react";
import "./component.css";

const Sidebar = () => {
  // State to track the active link
  const [activeLink, setActiveLink] = useState(0);

  // Function to handle link click
  const handleLinkClick = (index) => {
    setActiveLink(index);
  };
  const linkTexts = [
    "Losade",
    "Losade",
    "Losade",
    "Losade",
    "Losade",
    "Losade",
  ];
  return (
    <div
      id='sidebar'
      className=' sidebar w-[20%] h-[600px] bg-blue-300 flex items-center flex-col mt-5'
    >
      {linkTexts.map((text, index) => (
        <a
          key={index}
          href='#'
          className={`m-3 text-2xl ${index === activeLink ? "active" : ""}`}
          onClick={() => handleLinkClick(index)}
        >
          {text}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
