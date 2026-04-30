import { FiDownload } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import { GraduationCap, BookOpen, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const education = [
    {
      icon: GraduationCap,
      title: "Electronics & Communication Engineering",
      text: "B.Tech in ECE with strong core engineering knowledge, combined with hands-on expertise as a full-stack web developer building modern and scalable applications.",
    },
    {
      icon: BookOpen,
      title: "Full Stack Development",
      text: "Skilled in building scalable applications using React.js, Node.js, Express.js, MongoDB along with REST APIs and modern UI/UX practices.",
    },
    {
      icon: Award,
      title: "Career Goal",
      text: "Aspiring to become a top-tier software developer focused on creating impactful, user-centric, and real-world digital solutions.",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-transparent px-4 py-24 text-white sm:px-6 lg:px-10"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -45 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mx-auto mt-4 mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/10 px-5 py-2 text-xs font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)] backdrop-blur-xl sm:text-sm">
            <Sparkles size={16} />
            My Journey
          </p>

          <h2 className="font-serif text-4xl font-black sm:text-5xl md:text-6xl">
            About{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(168,85,247,0.5)]">
              Me
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_25px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-8 md:p-10"
        >
          <p className="mx-auto max-w-4xl text-center font-serif text-sm leading-8 text-slate-300 sm:text-base md:text-lg">
            Hello, I'm{" "}
            <span className="font-bold text-white">Prakriti Tiwari</span>, a MERN Stack Developer and B.Tech ECE student at University Institute of Technology, RGPV Bhopal. I specialize in building scalable web applications using React.js, Node.js, Express.js, and MongoDB.
I've interned at Landmine Soft, delivering production-ready full-stack solutions with secure authentication and RESTful APIs. My notable projects include HealthNexus (AI-powered health platform — Top 5 at Navkalpana Hackathon 2026), College Portal Management System (managing 500+ users), and Craving Food Delivery App.
I'm a TCS CodeVita Global Qualifier and have solved 500+ DSA problems on LeetCode and GeeksforGeeks. I'm passionate about building impactful, user-centric digital solutions

          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.a
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              href="/resume.pdf"
              download="Prakriti-Resume.pdf"
              className="rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 p-[1.5px]"
            >
              <span className="flex items-center gap-2 rounded-2xl bg-slate-950 px-7 py-3 font-bold text-white">
                <FiDownload />
                Download Resume
              </span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/portfolio")}
              className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-7 py-3 font-bold text-white backdrop-blur-xl transition hover:border-cyan-300/40 hover:text-cyan-200"
            >
              <BiCodeAlt />
              View Projects
            </motion.button>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {education.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.18 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/10 p-6 text-center shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  <Icon size={30} />
                </div>

                <h3 className="relative z-10 mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="relative z-10 text-sm leading-7 text-slate-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}