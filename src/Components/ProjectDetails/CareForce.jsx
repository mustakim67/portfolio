import React from 'react';

const CareForce = () => {
    const project = {
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
        github: "https://github.com/mustakim67/CareForce-Client",
        image: "https://i.ibb.co/1tkLvfGm/careforce.png",
        challenges: [
            "Ensuring real-time updates for volunteer request status",
            "Structuring secure user authentication and role-based access",
            "Maintaining performance during heavy CRUD operations"
        ],
        futurePlans: [
            "Add location-based project filtering",
            "Introduce badges for volunteer achievements",
            "Create a dashboard for NGO admins"
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

export default CareForce;
