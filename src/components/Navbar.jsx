import React from "react";
import logo from "../assets/logo4.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-[50px] rounded-[30px]" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-3xl">
            <a href="https://www.linkedin.com/in/svetlana-tasić-65529818b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700">
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/SvetlanaTasic"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
            >
                <FaGithub />
            </a>
        </div>

    </nav>

}

export default Navbar
