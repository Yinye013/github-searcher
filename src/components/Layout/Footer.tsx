import React from "react";
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-neutral shadow-lg text-neutral-content">
      <div className="p-5">
        <p className="text-center text-[1.5rem] font-bold tracking-wider">
          All Rights Reserved. Copyright &copy; Yinye, {year}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
