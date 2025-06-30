import React from "react";

const Education = () => {
    return (
        <section id="education" className="bg-[#0d1117] text-white px-[10%] md:pb-40 pb-20 pt-10">
            <div className="mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center text-orange-500 mb-14">
                    Educational Qualification
                </h2>

                <div className="bg-[#161b22] rounded-xl shadow-lg p-10 space-y-6">
                    <div>
                        <h3 className="text-2xl font-semibold text-white">
                            <span className="text-orange-500">B.Sc. in Computer Science & Engineering</span>
                        </h3>
                        <p className="text-gray-300 mt-1 font-medium">
                            Bangladesh University
                        </p>
                        <p className="text-gray-400 mt-2">Ongoing — 2nd/3rd Year</p>
                        <p className="text-gray-300 mt-1">
                          CGPA: 3.9 out of 4.0
                        </p>
                    </div>

                    <div>
                        <p className="text-gray-400 leading-relaxed">
                            As a dedicated undergraduate student at Bangladesh University, I am actively building a strong foundation in data structures, algorithms, software development, and modern web technologies. I’m passionate about hands-on projects, collaborative learning, and solving real-world problems through code.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
