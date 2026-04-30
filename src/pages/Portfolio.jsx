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
  title: "Blush&Glow",
  desc: "Beauty and cosmetics e-commerce website with modern UI.",
  img: "BlushAndGlow.png",
  details: "Blush&Glow is a fully responsive beauty and cosmetics e-commerce website. It features a modern UI with product categories, shopping cart functionality, wishlist, and user authentication. The app provides a smooth browsing experience with product filtering, search functionality, and detailed product pages.",
  tech: ["React", "Tailwind CSS", "Framer Motion"],
  demo: "https://blush-and-glow.vercel.app/",
}, 
{
  title: "Weather App",
  desc: "Real-time weather updates with 5-day forecast.",
  img: "weather.png",
  details: "A feature-rich weather application that provides current weather conditions and 5-day forecast for any city. It displays temperature, humidity, wind speed, pressure, and visibility. The app also shows dynamic weather icons based on conditions and supports search by city name or current location.",
  tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  demo: "https://weather-app-zeta-liart-phco1akr5b.vercel.app/",
},
{
  title: "Material Tailwind",
  desc: "UI components library built with Tailwind CSS.",
  img: "materialTailwind.png",
  details: "A comprehensive UI component library that combines Google's Material Design principles with the utility-first approach of Tailwind CSS. It provides ready-to-use components like buttons, cards, modals, navbars, and forms that are highly customizable and responsive.",
  tech: ["React", "Tailwind CSS", "Material Design"],
  demo: "https://material-tailwind-pi.vercel.app/",
},
{
  title: "Currency Converter",
  desc: "Real-time currency conversion with live exchange rates.",
  img: "currencyConverter.png",
  details: "This Currency Converter app allows users to convert amounts between different currencies in real time. It fetches live exchange rates from a reliable API and supports over 50 currencies worldwide. The app features a clean interface with swap functionality, amount input, and automatic conversion on value change.",
  tech: ["HTML", "CSS", "JavaScript"],
  demo: "https://currency-converto.vercel.app/",
},
{
  title: "Portfolio",
  desc: "Personal portfolio website showcasing my projects.",
  img: "porto.png",
  details: "A modern, responsive portfolio website designed to showcase my skills, projects, and professional journey as a developer. It features project cards with live demos, skills section, contact form, and smooth animations.",
  tech: ["React", "Tailwind CSS", "Vite"],
  demo: "https://personal-portfolio-swart-iota.vercel.app/",
},
{
  title: "Map State",
  desc: "Interactive map application with state-wise information.",
  img: "stateMap.png",
  details: "An interactive map application that allows users to explore different states with detailed information. Click on any state to view its capital, population, language, culture, and tourist attractions. The app features an intuitive interface with search functionality and state highlighting.",
  tech: ["React", "Leaflet", "Map API"],
  demo: "https://map-state.vercel.app/",
},
  ];

  const backendProjects = [
    {
      title: "Craving",
      desc: "Full-stack food delivery platform.",
      img: "craving.png",
      details:
        "Craving is a full-stack MERN food delivery platform that connects users with local restaurants. It features user and restaurant authentication, real-time menu browsing with location-based filtering, cart functionality, seamless order placement, and order tracking system. Built with React.js for interactive UI, Node.js with Express.js for robust APIs, and MongoDB for efficient data storage.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      demo: "https://craving-app.netlify.app/",
    },
    {
      title: "HealthNexus",
      desc: "AI-powered health & wellness platform.",
      img: "HealthNexus.png",
      details:
        "HealthNexus is an AI-driven health platform. It provides BMI analysis, personalized diet plans, fitness recommendations, and wellness tracking. The platform uses MERN stack with interactive dashboards and integrates basic ML algorithms to deliver personalized health insights helping users achieve their fitness goals effectively.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "AI/ML"],
      demo: "https://vermillion-griffin-998a4f.netlify.app/",
    },
    {
      title: "College Portal",
      desc: "MERN-based college management system.",
      img: "CollegePortal.png",
      details:
        "College Portal is a comprehensive MERN-based management system handling 500+ users with role-based authentication for Admin, Faculty, and Students. It manages student records, course enrollment, faculty assignments, attendance tracking, and grade management. Features include normalized MongoDB schemas, aggregation pipelines for optimized queries, responsive React dashboard with Context API for seamless state management and real-time data updates.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      demo: "https://collegefrontendpro.netlify.app/",
    },
    {
      title: "Chatty",
      desc: "Real-time messaging application.",
      img: "chatty.jpeg",
      details:
        "Chatty is a real-time chat application enabling instant messaging between users with features like private and group chats, typing indicators, read receipts, and online status. Built with Socket.io for bidirectional communication, React.js for dynamic frontend, Node.js with Express.js for backend APIs, and MongoDB for storing chat history and user profiles with seamless real-time message synchronization.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      demo: "https://chatty-chatting.netlify.app/",
    },
    {
      title: "The diva Look",
      desc: "Fashion & beauty recommendation platform.",
      img: "TheDivaLook.png",
      details:
        "The Diva Look is an AI-based fashion and beauty recommendation platform that provides personalized style and makeup suggestions based on user preferences, skin tone, and face shape analysis. It features virtual try-on, product recommendations, trend alerts, and expert tips. Built with React.js for frontend, Node.js for backend APIs, Python for AI/ML models, and MongoDB for user data storage.",
      tech: ["React", "Node.js", "Python", "MongoDB"],
      demo: "https://thedivalook.netlify.app/",
    },
    {
      title: "AI-Invoice",
      desc: "Automated invoice generation system.",
      img: "AI-Invoice.png",
      details:
        "AI-Invoice is an intelligent invoice generation and management system that automates billing, expense tracking, and payment reminders. It features multi-company support, tax calculation, PDF generation, email automation, and real-time analytics dashboard. Built with React.js for modern UI, Node.js with Express.js for RESTful APIs, MongoDB for data management, and JWT authentication for secure multi-user access.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://ai-invoice-project.netlify.app/",
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
                   text-center text-purple-400 mt-10"
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
              <h3 className="text-base sm:text-lg font-bold">{p.title}</h3>

              <p className="text-gray-400 text-xs sm:text-sm mt-2">{p.desc}</p>

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
