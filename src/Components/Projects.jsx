import React from "react";

const projects = [
    {
        name: "HobbyHub",
        description:
            "HobbyHub is a platform where people can discover and join local hobby-based groups or create their own. It encourages social engagement through shared interests, helping people build communities around their passions.",
        features: [
            "Interactive UI with Lottie animations & typewriter effects",
            "Group join by hobby",
            "Toast & Alert system",
            "Responsive Carousels"
        ],
        tech: [
            "React",
            "Firebase",
            "Node JS",
            "Vite",
            "MongoDB"
        ],
        live: "https://hobby-hub-fc4c7.web.app",
        github: "https://github.com/mustakim67/HobbyHub",
        image: "https://i.ibb.co/vxr4SvMp/hobby.png"
    },
    {
        name: "CareForce",
        description:
            "A web application designed to connect volunteers with community initiatives. Users can view, request, and participate in meaningful social projects.",
        features: [
            "Volunteer Request & Post System",
            "Post Management (CRUD)",
            "MongoDB Integration",
            "Real-time Notifications"
        ],
        tech: [
            "React",
            "Firebase",
            "Node JS",
            "Vite",
            "MongoDB",
            "Framer Motion"
        ],
        live: "https://careforce-20259.web.app",
        github: "https://github.com/your-careforce-repo",
        image: "https://i.ibb.co/1tkLvfGm/careforce.png"
    },
    {
        name: "English Janala",
        description:
            "A simple yet effective JavaScript-based learning app where users can log in and access card-based English lessons with voice pronunciation.",
        features: [
            "JavaScript-only app",
            "Voice pronunciation",
            "Card-based lessons",
            "Simple login feature"
        ],
        tech: ["JavaScript", "HTML", "CSS", "SpeechSynthesis API"],
        live: "https://engjanala.netlify.app/?fbclid=IwY2xjawLOTt9leHRuA2FlbQIxMABicmlkETFReDRpRnNFUVVIZW41YXl4AR5-fulH9F6aniKnLgbeVz_UhcBzuBderIEdvr_oNMcNrkEOjvytm2SlGoedaA_aem_5ZyRr2gKNpdHo5HkyCxb2A",
        github: "https://github.com/your-englishjanala-repo",
        image: "https://i.ibb.co/SD5Z7mzz/english.png"
    }
];

const Projects = () => {
    return (
        <section id="project" className="bg-[#161b22] text-white md:pt-30 pt-15 pb-20 px-[10%]">
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-500">Projects</h2>
                <p className="text-gray-400 mt-2">Showcasing my best works</p>
            </div>

            <div className="space-y-16">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col lg:flex-row bg-[#161b22] rounded-2xl overflow-hidden shadow-lg"
                    >
                        <div className="lg:w-1/2">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="p-8 lg:w-1/2 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-semibold text-orange-500">
                                    {project.name}
                                </h3>
                                <p className="text-gray-300 mt-2 mb-4">{project.description}</p>

                                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1 mb-4">
                                    {project.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 mt-4">
                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="bg-orange-500 btn text-white px-4 py-2 rounded shadow"
                                >
                                    Live Site
                                </a>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded shadow"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;