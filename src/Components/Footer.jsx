import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
            <aside>
                <p className="font-bold">
                    <span className='text-orange-500'>MD_</span>MUSTAKIM
                    <br />
                    Providing reliable web services since 2025
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.linkedin.com/in/md-mustakim-04601b203' target='_blank' className='hover:text-orange-500'>
                        <FaLinkedin size={30} />
                    </a>
                    <a href='https://twitter.com/Md_Mustakim_' target='_blank' className='hover:text-orange-500'>
                        <FaTwitter size={30} />
                    </a>
                    <a href='https://github.com/mustakim67' target='_blank' className='hover:text-orange-500'>
                        <FaGithub size={30} />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;