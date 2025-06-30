import React from "react";
import { Link } from "react-router";
import { fadeIn } from "./variant";
import {motion} from 'framer-motion';

const projects = [
    {
        name: "HobbyHub",
        route:'hobby-hub',
        description: "hobbyhub",
        image: "https://i.ibb.co/vxr4SvMp/hobby.png",
    },
    {
        name: "CareForce",
        route:'care-force',
        description: "careforce",
        image: "https://i.ibb.co/1tkLvfGm/careforce.png",
    },
    {
        name: "English Janala",
        route:'english-janala',
        description: "english-janala",
        image: "https://i.ibb.co/SD5Z7mzz/english.png",
    },
];

const Projects = () => {
    return (
        <section id="project" className="bg-[#161b22] text-white py-40 px-[10%]">
            <motion.div
             variants={fadeIn('up', 0.1)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{ once: false, amount: 0.7 }}
            >
  <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
                    Projects
                </h2>
                <p className="text-gray-400 mt-2">A few of my featured builds</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#0d1117] border border-gray-700 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5 flex flex-col justify-between h-[180px]">
                            <h3 className="text-xl font-semibold text-orange-400 mb-4">
                                {project.name}
                            </h3>
                            <Link
                                to={`/projects/${project.route}`}
                                className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded-md text-center"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            </motion.div>
          
        </section>
    );
};

export default Projects;
