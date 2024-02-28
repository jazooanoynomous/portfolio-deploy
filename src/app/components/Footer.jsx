import React from "react";
import Image from "next/image";

// Adjust the path accordingly, assuming 'Picture1.png' is directly inside the 'public/images/projects/' directory
//import Picture1 from "/public/images/projects/Picture1.png";
import Picture1 from "/public/images/projects/Picture1.jpeg"
const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <div className="brightness-75">
          <Image
            src={Picture1}
            alt="Company Logo"
            width={120}
            height={20}
          />
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
