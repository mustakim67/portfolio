import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from './variant';

const About = () => {
    return (
        <section id="about" className="px-[10%] py-20 md:py-40">
            <div className="mx-auto space-y-12">
                <motion.div
                    variants={fadeIn('left', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }}
                    className="text-center">
                    <h2 className="text-4xl font-bold text-orange-500 mb-4">About Me</h2>
                    <p className="text-lg">
                        Crafting elegant solutions with code, creativity, and a touch of curiosity.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left*/}
                    <motion.div
                        variants={fadeIn('right', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className=''>
                        <h3 className="text-2xl font-semibold text-orange-500 mb-8">My Story</h3>
                        <p className=" leading-relaxed mb-8">
                            Hi, I'm <span className="font-medium text-orange-500">Md. Mustakim</span>, a developer with a deep passion for turning ideas into interactive digital experiences. My programming journey began during my college years when I stumbled upon a simple HTML tutorial—curiosity turned into a full-blown obsession.
                        </p>
                        <p className=" leading-relaxed mb-8">
                            Since then, I’ve immersed myself in full-stack web development, constantly exploring the latest technologies and frameworks. I love building intuitive interfaces, solving tricky logic problems, and creating applications that feel delightful to use. Whether it's crafting responsive UIs or designing backend APIs, I find joy in every line of clean, purposeful code.
                        </p>
                        <p className=" leading-relaxed">
                            Beyond coding, I’m a huge fan of football (playing and watching!), enjoy painting abstract art when I need a mental reset, and love hiking trails that offer a scenic escape from the screen. I believe great developers aren't just good at logic—but also bring their unique personality and life experiences into what they create.
                        </p>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        variants={fadeIn('left', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="space-y-8 ">

                        {/*Facts */}
                        <div>
                            <h3 className="text-xl font-semibold text-orange-500 mb-5">Quick Facts</h3>
                            <ul className="space-y-2  list-disc list-inside">
                                <li>Started coding in 2020 — still as excited as day one!</li>
                                <li>Most comfortable with React, Node.js & MongoDB.</li>
                                <li>Lover of minimalist UI and meaningful UX.</li>
                                <li>Weekly painter and occasional football striker ⚽</li>
                                <li>Currently learning TypeScript and GraphQL.</li>
                            </ul>
                        </div>

                        {/* Traits */}
                        <div>
                            <h3 className="text-xl font-semibold text-orange-500 mb-3">Core Traits</h3>
                            <div className="flex flex-wrap gap-3">
                                {['Creative Thinker', 'Lifelong Learner', 'Team Player', 'Detail-Oriented', 'Problem Solver'].map(trait => (
                                    <span
                                        key={trait}
                                        className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm"
                                    >
                                        {trait}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
