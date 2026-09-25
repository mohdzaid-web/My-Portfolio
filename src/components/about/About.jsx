import { motion } from "motion/react";
import {
  FiUsers,
  FiTarget,
  FiBookOpen,
  FiArrowRight,
  FiCode,
} from "react-icons/fi";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
const About = () => {
  const cards = [
    {
      icon: <FiBookOpen />,
      title: "Education",
      text: "BCA Student",
      subtext: "3rd Year",
      iconStyle: "from-blue-500/30 to-cyan-500/20 text-cyan-300",
      borderStyle: "hover:border-cyan-400/40",
    },
    {
      icon: <FiUsers />,
      title: "Projects",
      text: "10+ Build & Deployed",
      subtext: "Real-world projects",
      iconStyle: "from-purple-500/30 to-violet-500/20 text-purple-300",
      borderStyle: "hover:border-purple-400/40",
    },
    {
      icon: <FiTarget />,
      title: "Current Focus",
      text: "Frontend Development",
      subtext: "React & Modern UI",
      iconStyle: "from-emerald-500/30 to-teal-500/20 text-emerald-300",
      borderStyle: "hover:border-emerald-400/40",
    },
  ];

 const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "text-orange-400",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "text-blue-400",
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "text-yellow-400",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "text-cyan-400",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "text-purple-400",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    color: "text-violet-400",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-300",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#070711] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-15%] top-[10%] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute right-[-10%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-[1250px] sm:w-[86%]">

        {/* ================= SECTION TITLE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-blue-500" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              01
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300/80">
              About Me
            </span>
          </div>
        </motion.div>

        {/* ================= MAIN ABOUT ================= */}

        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

          {/* ================= LEFT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[470px]"
          >

            {/* glow */}

            <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[80px]" />

            {/* decorative shapes */}

            <motion.div
              animate={{
                rotate: [0, 4, 0, -4, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[8%] top-[10%] h-[72%] w-[75%] rotate-[-7deg] rounded-[2rem] border border-blue-400/30 bg-blue-500/10"
            />

            <motion.div
              animate={{
                rotate: [0, -3, 0, 3, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[10%] right-[7%] h-[70%] w-[72%] rotate-[7deg] rounded-[2rem] border border-purple-400/20 bg-purple-500/10"
            />

            {/* main image */}

            <div className="relative z-10 mx-auto w-[82%] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 via-[#10152b] to-purple-500/20 p-3 shadow-[0_0_80px_rgba(59,130,246,0.12)] backdrop-blur-xl">

              <div className="relative overflow-hidden rounded-[1.5rem]">

                <img
                  src="/meto.jpeg"
                  alt="Mohd Zaid"
                  className="h-[420px] w-full object-cover object-top transition-transform duration-700 hover:scale-105 sm:h-[500px]"
                />

                {/* image overlay */}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070711]/60 via-transparent to-blue-400/10" />
              </div>
            </div>

            {/* floating badge */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-6 left-0 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111426]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-blue-300">
                <FiCode size={20} />
              </div>

              <div>
                <p className="text-xs font-medium text-white">
                  Turning Ideas
                </p>

                <p className="text-xs text-white/50">
                  Into Reality
                </p>
              </div>
            </motion.div>

            {/* small decorative square */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[3%] top-[18%] h-12 w-12 rounded-xl border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-md"
            />
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}

          <div>

            {/* heading */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl lg:text-[3.6rem]">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mohd Zaid
                </span>
              </h2>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/60 sm:text-base">
                <span>BCA Student</span>

                <span className="h-1 w-1 rounded-full bg-cyan-400" />

                <span>Aspiring Frontend Developer</span>
              </div>
            </motion.div>

            {/* description */}

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-7 space-y-4 text-sm leading-7 text-white/55 sm:text-base"
            >
              <p>
                I'm a BCA student and aspiring Frontend Developer passionate
                about building modern, responsive, and user-friendly web
                applications. I work with React, Redux & Router, JavaScript,
                HTML, CSS, Bootstrap, and Tailwind, with a little knowledge of
                backend and how frontend and backend work together.
              </p>

              <p>
                I enjoy turning ideas into interactive web experiences and
                solving problems through code. I have worked on many projects
                including e-commerce websites, AI-powered applications and
                many more. I'm currently looking for a Frontend Development
                Internship where I can contribute to real-world projects and
                grow as a developer.
              </p>
            </motion.div>

            {/* ================= INFO CARDS ================= */}

            <div className="mt-8 grid gap-3 sm:grid-cols-3">

              {cards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + index * 0.12,
                  }}
                  whileHover={{
                    y: -7,
                  }}
                  className={`group rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.05] ${card.borderStyle}`}
                >
                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.iconStyle}`}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-sm font-semibold text-white sm:text-base">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/80">
                    {card.text}
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    {card.subtext}
                  </p>
                </motion.article>
              ))}

            </div>

            {/* ================= LET'S TALK ================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: 0.5,
              }}
              className="mt-8"
            >
              <motion.button
                onClick={scrollToContact}
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(59,130,246,0.35)]"
              >
                Let's Talk

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* =========================================================
                         SKILLS STRIP
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/[0.08] pt-8 lg:mt-24"
        >

          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-blue-400/60" />

            <span className="text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              Technologies I Work With
            </span>

            <span className="h-px w-10 bg-gradient-to-l from-transparent to-blue-400/60" />
          </div>

          <div className="grid grid-cols-3 gap-5 sm:grid-cols-5 lg:grid-cols-9">

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
                whileHover={{
                  y: -7,
                  scale: 1.04,
                }}
                className="group flex flex-col items-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] text-2xl shadow-lg backdrop-blur-md transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]">
                  <span className={skill.color}>
                    {skill.icon}
                  </span>
                </div>

                <span className="mt-3 text-[11px] font-medium text-white/40 transition-colors duration-300 group-hover:text-white/80 sm:text-xs">
                  {skill.name}
                </span>
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;

