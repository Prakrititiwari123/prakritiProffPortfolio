import { useState } from "react";
import { Code, Database } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [selectedProject, setSelectedProject] = useState(null);

  const fadeIn = (direction = "up", delay = 0) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -60 : direction === "right" ? 60 : 0,
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    },
  });

  const directions = ["left", "right", "up", "down"];

  const frontendProjects = [
    {
      title: "Currency Converter",
      desc: "Real-time currency conversion with live exchange rates.",
      img: "/CURR.png",
      details:
        "This Currency Converter app allows users to convert amounts between different currencies in real time.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://amanpatel8982.github.io/CurrencyConvertor/",
    },
    {
      title: "Furni",
      desc: "A furniture marketplace UI.",
      img: "/furni.png",
      details: "Furniture Marketplace built using HTML & CSS.",
      tech: ["HTML", "CSS"],
      demo: "https://github.com/amanpatel8982/FURNI.git",
    },
    {
      title: "Rock Paper Scissors",
      desc: "Interactive game with JS logic.",
      img: "/rock.png",
      details: "Classic Rock Paper Scissors game.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://amanpatel8982.github.io/Rock-paper-Scissors/",
    },
   
  ];

  const backendProjects = [
   {
  title: "Craving",
  desc: "Full-stack food delivery platform.",
  img: "craving.png",
  details: "Food delivery app with cart & order placement.",
  tech: ["React", "Node.js", "Express.js", "MongoDB"],
  demo: "https://craving-app.netlify.app/",
  video: "/craving.mp4",
},
{
  title: "HealthNexus",
  desc: "AI-powered health & wellness platform.",
  img: "HealthNexus.png",
  details: "BMI analysis, diet plans & fitness tracking.",
  tech: ["React", "Node.js", "Express.js", "MongoDB", "AI/ML"],
  demo: "https://vermillion-griffin-998a4f.netlify.app/",
  video: "/healthnexus.mp4",
},
{
  title: "College Portal",
  desc: "MERN-based college management system.",
  img: "CollegePortal.png",
  details: "Role-based portal for 500+ users.",
  tech: ["React", "Node.js", "Express.js", "MongoDB"],
  demo: "https://collegefrontendpro.netlify.app/",
  video: "/collegeportal.mp4",
},
{
  title: "Chatty",
  desc: "Real-time messaging application.",
  img: "chatty.jpeg",
  details: "Instant messaging with socket connections.",
  tech: ["React", "Node.js", "Socket.io", "MongoDB"],
  demo: "https://chatty-chatting.netlify.app/login",
  video: "/chatty.mp4",
},
{
  title: "The diva Look",
  desc: "Fashion & beauty recommendation platform.",
  img: "TheDivaLook.png",
  details: "Personalized style and makeup suggestions.",
  tech: ["React", "Node.js", "Python", "MongoDB"],
  demo: "https://thedivalook.netlify.app/",
  video: "/thedivalook.mp4",
},
{
  title: "AI-Invoice",
  desc: "Automated invoice generation system.",
  img: "AI-Invoice.png",
  details: "Smart billing and expense tracking.",
  tech: ["React", "Node.js", "PostgreSQL", "Express.js"],
  demo: "https://ai-invoice-demo.netlify.app/",
  video: "/aiinvoice.mp4",
},
  ];

  const tabs = [
    { id: "frontend", label: "Front-End", icon: <Code size={18} /> },
    { id: "backend", label: "Back-End", icon: <Database size={18} /> },
  ];

  const displayedProjects =
    activeTab === "frontend" ? frontendProjects : backendProjects;

  return (
    <section className="pt-12 sm:pt-16 md:pt-20 pb-16 px-4 md:px-12 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      
      {/* Heading */}
      <motion.h2
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif 
                   text-center text-purple-400"
      >
        Portfolio Showcase
      </motion.h2>

      {/* Subheading */}
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center text-gray-400 text-xs sm:text-sm md:text-base 
                   mt-4 max-w-2xl mx-auto"
      >
        Explore my journey through projects and real-world applications.
      </motion.p>

      {/* Tabs */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center gap-2 sm:gap-4 mt-6 
                   bg-gray-800 p-2 rounded-xl w-fit mx-auto"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 sm:px-6 py-2 rounded-lg flex items-center gap-2 
              text-sm sm:text-base transition
              ${
                activeTab === tab.id
                  ? "bg-purple-700 text-white"
                  : "bg-gray-700 hover:bg-gray-600"
              }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((p, i) => (
          <motion.div
            key={i}
            variants={fadeIn(directions[i % 4], i * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />

            <div className="p-4">
              <h3 className="text-base sm:text-lg font-bold">
                {p.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-2">
                {p.desc}
              </p>

              <div className="flex gap-4 mt-4 text-sm">
                <a
                  href={p.demo}
                  target="_blank"
                  className="text-purple-400 hover:underline"
                >
                  Live Demo
                </a>
                <button
                  onClick={() => setSelectedProject(p)}
                  className="text-gray-300 hover:text-white"
                >
                  Details →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl p-4 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 bg-red-500 px-3 py-1 rounded text-white"
            >
              ✕
            </button>

            {selectedProject.video ? (
              <video
                src={selectedProject.video}
                controls
                autoPlay
                muted
                className="w-full h-56 sm:h-72 object-cover rounded-lg"
              />
            ) : (
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-56 sm:h-72 object-cover rounded-lg"
              />
            )}

            <h2 className="mt-4 text-xl font-bold text-purple-400">
              {selectedProject.title}
            </h2>

            <p className="mt-2 text-gray-300 text-sm">
              {selectedProject.details}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-purple-700/40 rounded text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
