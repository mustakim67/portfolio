import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Banner = () => {
    const [text1] = useTypewriter({
        words: ['Programming', 'Problem Solving', 'Development'],
        loop: 0
    });
    const [text2] = useTypewriter({
        words: ['MD. MUSTAKIM'],
        loop: 1
    });
    return (
        <div className=' min-h-[100dvh]  flex flex-col-reverse md:flex-row items-center justify-between px-[10%] py-10 md:gap-10 bg-black'>

            <div className="w-full md:w-1/2 md:space-y-8 space-y-2 text-center md:text-left -mt-35 md:mt-2">
                <div className='space-y-3'>
                    <h1 className='text-xl sm:text-2xl font-bold'>Hello, It's Me ,</h1>
                    <h1 className='text-2xl sm:text-5xl font-bold'>{text2} <Cursor cursorColor='white' /></h1>
                    <div className="flex justify-center md:justify-start gap-4  mt-2">
                        <p className='text-gray-500 sm:text-lg'>MERN Stack Developer |</p>
                        <a
                            href="https://www.linkedin.com/in/md-mustakim-04601b203"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-400 transition pt-1"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="https://twitter.com/Md_Mustakim_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-400 transition pt-1"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="https://github.com/mustakim67"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-orange-400 transition pt-1"
                        >
                            <FaGithub size={20} />
                        </a>
                    </div>
                </div>

                <div className='mt-4'>
                    <h1 className='text-sm sm:text-2xl'>I am a Computer Science & Engineering student</h1>
                    <h1 className='text-xl sm:text-3xl mt-1'>
                        Who is Passionate in <span className='text-orange-500'>{text1}</span>
                        <Cursor cursorColor='white' />
                    </h1>
                </div>

                <div>
                    <a
                        target='_blank'
                        href='https://drive.google.com/file/d/1RASRWpBWONvPpmxLSsAzvBNLRDf_TY1M/view?usp=sharing'
                        rel='noopener noreferrer'
                    >
                        <button className='mt-5 px-6 py-2 btn btn-outline md:btn-outline rounded-xl hover:bg-orange-600 hover:text-white  transition'>
                            Resume
                        </button>
                    </a>
                </div>
            </div>

            <motion.div
                initial={{ boxShadow: '0 0 0 0 rgba(249, 115, 22, 0.5)' }}
                animate={{
                    boxShadow: [
                        '0 0 0 0 rgba(249, 115, 22, 0.4)',
                        '0 0 25px 10px rgba(249, 115, 22, 0.7)',
                        '0 0 0 0 rgba(249, 115, 22, 0.4)',
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full max-w-s md:max-w-xl aspect-square rounded-full overflow-hidden mt-20 md:mt-1"
            >
                <img
                    src="https://i.ibb.co/gZgvVCm5/pic.jpg"
                    alt="Mustakim"
                    className="w-full h-full object-cover"
                />
            </motion.div>

        </div>
    );
};

export default Banner;
