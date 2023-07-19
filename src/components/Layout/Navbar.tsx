import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
interface NavProps {
  title: string;
}

function Navbar({ title }: NavProps) {
  return (
    <nav className="flex items-center bg-neutral shadow-lg text-neutral-content ">
      <div className="container p-5">
        <FaGithub size={"40px"} className="inline pr-2" />
        <Link to={"/"} className="text-[1.4rem]">
          {title}
        </Link>
      </div>
      <div className="flex p-4 gap-5">
        <Link
          to={"/"}
          className="btn btn-ghost btn-sm rounded-sm text-[1.6rem]"
        >
          Home
        </Link>
        <Link
          to={"/about"}
          className="btn btn-ghost btn-sm rounded-sm text-[1.6rem]"
        >
          about
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
