import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaFigma,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiJavascript,
} from "react-icons/si";

const skillCategories = [
    {
        title: "Frontend",
        color: "text-orange-400",
        skills: [
            { name: "HTML5", icon: <FaHtml5 /> },
            { name: "CSS3", icon: <FaCss3Alt /> },
            { name: "JavaScript", icon: <SiJavascript /> },
            { name: "React", icon: <FaReact /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        ],
    },
    {
        title: "Backend",
        color: "text-white",
        skills: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress /> },
            { name: "MongoDB", icon: <SiMongodb /> },
        ],
    },
    {
        title: "Tools",
        color: "text-orange-400",
        skills: [
            { name: "GitHub", icon: <FaGithub /> },
            { name: "Figma", icon: <FaFigma /> },
            { name: "VS Code", icon: <span className="text-xl">🖥️</span> },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skill" className="bg-[#0d1117] text-white py-10 md:py-40 px-[10%]">
            <div className="mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-500 mb-14">
                    My Skills
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {skillCategories.map((category, idx) => (
                        <div
                            key={idx}
                            className="bg-[#161b22] shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300"
                        >
                            <h3 className={`text-xl font-semibold mb-5 border-b pb-2 ${category.color}`}>
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {category.skills.map((skill, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 p-3 bg-[#1c2128] hover:bg-[#21262d] rounded-lg transition duration-300"
                                    >
                                        <div className="text-2xl">{skill.icon}</div>
                                        <span className="text-gray-200 font-medium">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
