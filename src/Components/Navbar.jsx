import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from 'react-router';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div id='home' className="fixed top-0 left-0 w-full z-50">
            <div className="flex justify-between items-center px-[10%] py-6 md:py-8
        bg-slate-900/70
        backdrop-blur-md shadow-xl border-white dark:border-slate-600/50
        transition-all duration-300
      ">
                <h1 className="text-2xl md:text-3xl font-bold">
                    <Link to="/">
                        <span className="text-orange-500">MD_</span>MUSTAKIM
                    </Link>
                </h1>

                {/* navbar er link */}
                <ul className="hidden md:flex gap-8 items-center text-lg">
                    <li><a href="about" className="hover:text-orange-500"><Link to="about" smooth={true} duration={500}>
                        About
                    </Link></a></li>
                    <li><a href="about" className="hover:text-orange-500"><Link to="skill" smooth={true} duration={500}>
                        Skills
                    </Link></a></li>
                    <li><a href="about" className="hover:text-orange-500"><Link to="education" smooth={true} duration={500}>
                        Education
                    </Link></a></li>
                    <li><a href="about" className="hover:text-orange-500"><Link to="project" smooth={true} duration={500}>
                        Projects
                    </Link></a></li>
                </ul>


                <Link
                    to="contact"
                    className="hidden md:flex items-center gap-2 px-4 py-2 btn btn-outline md:btn-outline rounded-xl hover:bg-orange-600 hover:text-white  transition cursor-pointer" smooth={true} duration={500}
                >
                    <MdOutlineMail /> Contact
                </Link>

                {/* Mobile menu open hobe */}
                <button className="md:hidden text-3xl text-orange-500" onClick={toggleMenu}>
                    {menuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden 
          text-white 
          backdrop-blur-md px-[8%] py-6 space-y-4 
          transition-all duration-300
        ">
                    <ul className="flex flex-col gap-4 text-lg">
                        <li><a href="about" className="hover:text-orange-500"><Link to="about" smooth={true} duration={500}>
                            About
                        </Link></a></li>
                        <li><a href="about" className="hover:text-orange-500"><Link to="skill" smooth={true} duration={500}>
                            Skills
                        </Link></a></li>
                        <li><a href="about" className="hover:text-orange-500"><Link to="education" smooth={true} duration={500}>
                            Education
                        </Link></a></li>
                        <li><a href="about" className="hover:text-orange-500"><Link to="project" smooth={true} duration={500}>
                            Projects
                        </Link></a></li>
                    </ul>

                    <Link
                        to="contact" smooth={true} duration={500}
                        className="flex gap-2 items-center mt-4 w-fit px-4 py-2
            btn btn-outline md:btn-outline rounded-xl hover:bg-orange-600 hover:text-white  transition cursor-pointer"
                    >
                        <MdOutlineMail /> Contact
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
