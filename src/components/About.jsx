import { motion } from "framer-motion";
import React from "react";

const educationData = [
  {
    year: "Inview",
    degree: "Msc Information Technology",
    Institution: "Nigerian Defence Academy",
  },
  {
    year: "2024",
    degree: "Cyber Threat Intelligence",
    Institution: "ISSSI, Cairo",
  },
  { year: "2023", degree: "AICE", Institution: "ALX Africa" },
  { year: "2021", degree: "ICIP", Institution: "OPSWAT" },
  {
    year: "2018",
    degree: "Bsc Computer Science",
    Institution: "Nigerian Defence Academy",
  },
];

const experienceData = [
  {
    role: "Full Stack Web Developer",
    company: "#AlphaDev Team - Nigerian Air Force",
    icon: "💻",
  },
  { role: "Full Stack JS Developer", company: "GoMyCode BootCamp", icon: "🚀" },
  { role: "Remote AI Engineer", company: "ALXHub", icon: "📊" },
  { role: "Cyber Security Analyst", company: "Nigerian Air Force", icon: "🔒" },
  { role: "AI Prompt Engineer", company: "ALXHub", icon: "🔖" },
  { role: "Freelance Web Developer", company: "Self-Employed", icon: "🌍" },
];

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center mx-auto h-auto min-h-[80vh] mt-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8"
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-extrabold border-blue-400 border-b-4 tracking-widest mb-8"
      ></motion.p>

      <div className="w-full max-w-4xl">
        <div className="overflow-hidden shadow-lg rounded-2xl bg-gray-800/80 backdrop-blur-lg p-6">
          <h2 className="text-center text-3xl font-bold text-blue-400 mb-4">
            Education
          </h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-lg text-gray-300 border-b border-gray-600">
                <th className="p-3">Year</th>
                <th className="p-3">Degree</th>
                <th className="p-3">Institution</th>
              </tr>
            </thead>
            <tbody>
              {educationData.map((edu, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-700 transition duration-200"
                >
                  <td className="p-3 text-xl font-medium text-blue-300">
                    {edu.year}
                  </td>
                  <td className="p-3 text-lg">{edu.degree}</td>
                  <td className="p-3 text-lg">{edu.Institution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="overflow-hidden shadow-lg rounded-2xl bg-gray-800/80 backdrop-blur-lg p-6 mt-8">
          <h2 className="text-center text-3xl font-bold text-blue-400 mb-4">
            Experience
          </h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-lg text-gray-300 border-b border-gray-600">
                <th className="p-3">Role</th>
                <th className="p-3">Company</th>
              </tr>
            </thead>
            <tbody>
              {experienceData.map((exp, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-700 transition duration-200"
                >
                  <td className="p-3 text-xl font-medium flex items-center gap-2">
                    <span className="text-2xl">{exp.icon}</span> {exp.role}
                  </td>
                  <td className="p-3 text-lg">{exp.company}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default About;
