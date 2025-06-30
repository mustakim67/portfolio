import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_ala2i16",      
                "template_h745ep3",      
                formRef.current,        
                "FCTrb40E4wz1ZrjWv"       
            )
            .then(() => {
                Swal.fire({
                    title: "Message Sent!",
                    text: "Thanks for reaching out. I'll get back to you soon.",
                    icon: "success",
                    confirmButtonColor: "#f97316",
                });
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: "Failed to Send",
                    text: "Please try again later.",
                    icon: "error",
                    confirmButtonColor: "#ef4444",
                });
            });
    };

    return (
        <section id="contact" className="bg-[#0d1117] text-white py-20 px-[10%]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">
                    Contact Me
                </h2>

                <div className="bg-[#161b22] rounded-2xl shadow-xl border border-gray-700 p-8 md:p-14 flex flex-col md:flex-row gap-10">
                    {/* Contact Info */}
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-4 bg-[#0d1117] p-5 rounded-xl border border-gray-700 shadow-md">
                            <FaEnvelope className="text-orange-400 text-3xl" size={25} />
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <p className="text-lg font-medium text-white">
                                    mustakim.dev01@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 bg-[#0d1117] p-5 rounded-xl border border-gray-700 shadow-md">
                            <FaPhone className="text-orange-400 text-3xl" size={25}/>
                            <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <p className="text-lg font-medium text-white">
                                    +880 1234-567890
                                </p>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm">
                            I'm always open to discussing new projects or opportunities.
                            Feel free to reach out!
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="flex-1 space-y-5"
                    >
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full px-4 py-3 rounded bg-[#0d1117] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full px-4 py-3 rounded bg-[#0d1117] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-3 rounded bg-[#0d1117] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded transition duration-300 w-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
