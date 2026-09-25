import { motion } from "motion/react";
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
  FiCode,
} from "react-icons/fi";

const data = [
  {
    id: 1,
    image: "/Ecommerce.png",
    title: "React E-Commerce Platform",
    github: "https://github.com/mohdzaid-web/React-ecommerce-website",
    demo: "https://zaid-ecommerce-website.netlify.app",

    technologies: [
      "React",
      "JavaScript",
      "Bootstrap",
      "React Bootstrap",
      "Firebase",
      "React Router",
      "Swiper",
      "React CountUp",
      "Popper.js",
      "REST API",
      "Fetch API",
      "Vite",
    ],
  },

  {
    id: 2,
    image: "/Gemini.png",
    title: "AI-Powered Chat Assistant",
    github: "https://github.com/mohdzaid-web/Google-Gemini-project",
    demo: "https://zaid-gemini.netlify.app",

    technologies: [
      "React",
      "JavaScript",
      "Google Gemini API",
      "@google/genai",
      "React Markdown",
      "Vite",
      "API Integration",
    ],
  },

  {
    id: 3,
    image: "/Demo.png",
    title: "Responsive React Web Experience",
    github: "https://github.com/mohdzaid-web/React-website",
    demo: "https://zaid-demo-website.netlify.app",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Motion",
      "React Hot Toast",
      "Vite",
      "Responsive Design",
    ],
  },

  {
    id: 4,
    image: "/Myntra.png",
    title: "Fashion E-Commerce Clone",
    github: "https://github.com/mohdzaid-web/redux-myntra-project",
    demo: "https://zaid-myntr.netlify.app",

    technologies: [
      "React",
      "JavaScript",
      "Redux Toolkit",
      "React Redux",
      "Bootstrap",
      "Motion",
      "React Icons",
      "React Router DOM",
      "Firebase",
      "REST API",
      "Fetch API",
      "Vite",
    ],
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050816] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-180px] top-[35%] h-[450px] w-[450px] rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-200px] left-[35%] h-[400px] w-[400px] rounded-full bg-pink-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0px" }}
            whileInView={{ opacity: 1, letterSpacing: "5px" }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="mb-3 text-xs font-semibold uppercase text-cyan-400 sm:text-sm"
          >
            My Recent Work
          </motion.p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Some{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 90 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-5 h-[3px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
          >
            A collection of projects where I worked with modern frontend
            technologies, APIs, state management, responsive design and
            interactive user experiences.
          </motion.p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {data.map(
            ({ id, image, title, github, demo, technologies }, index) => (
              <motion.article
                key={id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Outer Glow */}
                <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-purple-500/0 opacity-0 blur-md transition duration-500 group-hover:from-cyan-500/50 group-hover:via-blue-500/40 group-hover:to-purple-500/50 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition-all duration-500 group-hover:border-cyan-400/30 group-hover:bg-white/[0.055] sm:p-5">

                  {/* Project Number */}
                  <div className="absolute right-6 top-6 z-20">
                    <span className="rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs font-semibold text-slate-400 backdrop-blur-md">
                      0{id}
                    </span>
                  </div>

                  {/* ================= IMAGE ================= */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/30">

                    <motion.img
                      src={image}
                      alt={title}
                      className="h-[230px] w-full object-cover sm:h-[270px]"
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-70" />

                    {/* Hover Gradient */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/20"
                    />

                    {/* Image Hover Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="rounded-full border border-white/20 bg-black/50 p-4 backdrop-blur-md">
                        <FiArrowUpRight className="text-2xl text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* ================= TITLE ================= */}
                  <div className="mt-6">
                    <div className="mb-2 flex items-center gap-2">
                      <FiCode className="text-cyan-400" />

                      <span className="text-xs font-medium uppercase tracking-[3px] text-slate-500">
                        Project 0{id}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold sm:text-2xl">
                      <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent transition-all duration-300 group-hover:from-cyan-300 group-hover:via-white group-hover:to-purple-300">
                        {title}
                      </span>
                    </h3>
                  </div>

                  {/* ================= TECHNOLOGIES ================= */}
                  <div className="mt-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-slate-500">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {technologies.map((technology) => (
                        <motion.span
                          key={technology}
                          whileHover={{
                            y: -3,
                            scale: 1.04,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                          className="cursor-default rounded-full border border-white/10 bg-white/[0.045] px-3 py-1.5 text-[11px] font-medium text-slate-300 shadow-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 sm:text-xs"
                        >
                          {technology}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* ================= BUTTONS ================= */}
                  <div className="mt-7 flex flex-wrap gap-3">

                    {/* Github */}
                    <motion.a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="group/github relative flex items-center gap-2 overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                    >
                      <FiGithub className="text-base" />

                      <span>Github</span>

                      <FiArrowUpRight className="text-xs opacity-50 transition-transform duration-300 group-hover/github:translate-x-1 group-hover/github:-translate-y-1" />

                      {/* Shine */}
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover/github:translate-x-full" />
                    </motion.a>

                    {/* Live Demo */}
                    <motion.a
                      href={demo}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.97,
                      }}
                      className="group/demo relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:from-blue-500 hover:to-purple-600 hover:shadow-purple-500/30"
                    >
                      <FiExternalLink className="text-base" />

                      <span>Live Demo</span>

                      <FiArrowUpRight className="text-xs transition-transform duration-300 group-hover/demo:translate-x-1 group-hover/demo:-translate-y-1" />

                      {/* Shine */}
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/demo:translate-x-full" />
                    </motion.a>
                  </div>

                  {/* Bottom Accent */}
                  <motion.div
                    initial={{ width: "20%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="mt-6 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
                  />
                </div>
              </motion.article>
            )
          )}
        </div>

        {/* ================= BOTTOM TEXT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[5px] text-slate-600 sm:text-sm">
            Build • Create • Innovate
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;