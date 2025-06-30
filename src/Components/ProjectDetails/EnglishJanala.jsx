import React from 'react';

const EnglishJanala = () => {
    const project = {
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
        live: "https://engjanala.netlify.app",
        github: "https://github.com/mustakim67/English-Janala",
        image: "https://i.ibb.co/SD5Z7mzz/english.png",
        challenges: [
            "Working with the SpeechSynthesis API for smooth pronunciation",
            "Building a responsive card-based UI without frameworks",
            "Maintaining lesson state without complex state managers"
        ],
        futurePlans: [
            "Add progress tracking and quiz modules",
            "Include more lesson categories (Grammar, Vocabulary, Listening)",
            "Improve accessibility and voice control"
        ]
    };

    return (
        <section className="bg-[#0d1117] text-white py-40 px-[10%] min-h-screen">
            <div className="max-w-6xl mx-auto space-y-12">
                <h2 className="text-4xl text-center font-bold text-orange-500">{project.name}</h2>

                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full rounded-xl shadow-lg border border-gray-700"
                />

                <div>
                    <h3 className="text-2xl font-semibold text-orange-400 mb-2">Project Description</h3>
                    <p className="text-gray-300">{project.description}</p>
                </div>


                <div>
                    <h3 className="text-2xl font-semibold text-orange-400 mb-2">Technology Stack</h3>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>


                <div>
                    <h3 className="text-2xl font-semibold text-orange-400 mb-2">Key Features</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {project.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                        ))}
                    </ul>
                </div>


                <div className="flex flex-wrap gap-4">
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded shadow"
                    >
                        🔗 Live Site
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#24292e] hover:bg-black text-white px-5 py-2 rounded shadow"
                    >
                        💻 GitHub (Client)
                    </a>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-orange-400 mb-2">Challenges Faced</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {project.challenges.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-orange-400 mb-2">Future Improvements</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        {project.futurePlans.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default EnglishJanala;
