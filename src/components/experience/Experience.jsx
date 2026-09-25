import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";

const Experience = () => {
  const skills = [
    {
      name: "HTML",
      level: "Hands-on",
      icon: <FaHtml5 />,
      color: "text-orange-500",
      glow: "group-hover:shadow-orange-500/20",
      border: "group-hover:border-orange-500/40",
    },
    {
      name: "CSS",
      level: "Hands-on",
      icon: <FaCss3Alt />,
      color: "text-blue-500",
      glow: "group-hover:shadow-blue-500/20",
      border: "group-hover:border-blue-500/40",
    },
    {
      name: "JavaScript",
      level: "Hands-on",
      icon: <FaJs />,
      color: "text-yellow-400",
      glow: "group-hover:shadow-yellow-400/20",
      border: "group-hover:border-yellow-400/40",
    },
    {
      name: "React",
      level: "Hands-on",
      icon: <FaReact />,
      color: "text-cyan-400",
      glow: "group-hover:shadow-cyan-400/20",
      border: "group-hover:border-cyan-400/40",
    },
    {
      name: "Redux",
      level: "Hands-on",
      icon: <SiRedux />,
      color: "text-purple-400",
      glow: "group-hover:shadow-purple-400/20",
      border: "group-hover:border-purple-400/40",
    },
    {
      name: "Bootstrap",
      level: "Hands-on",
      icon: <FaBootstrap />,
      color: "text-violet-400",
      glow: "group-hover:shadow-violet-400/20",
      border: "group-hover:border-violet-400/40",
    },
    {
      name: "Tailwind CSS",
      level: "Hands-on",
      icon: <SiTailwindcss />,
      color: "text-cyan-300",
      glow: "group-hover:shadow-cyan-300/20",
      border: "group-hover:border-cyan-300/40",
    },
    {
      name: "Git & GitHub",
      level: "Hands-on",
      icon: (
        <span className="flex items-center gap-1.5">
          <FaGitAlt />
          <FaGithub />
        </span>
      ),
      color: "text-orange-400",
      glow: "group-hover:shadow-orange-400/20",
      border: "group-hover:border-orange-400/40",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#070711] px-4 py-24 text-white sm:px-6 sm:py-28 lg:px-8 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* top glow */}
        <div className="absolute left-1/2 top-[-180px] h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

        {/* left glow */}
        <div className="absolute left-[-200px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

        {/* right glow */}
        <div className="absolute right-[-200px] top-[30%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1200px]">

        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-blue-400" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-blue-300/70">
              02
            </span>

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/40">
              Skills
            </span>

            <span className="h-px w-8 bg-gradient-to-l from-transparent to-blue-400" />
          </div>

          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/40 sm:text-base"
          >
            Technologies and tools I use to build modern, responsive and
            interactive .
          </motion.p>
        </motion.div>

        {/* ================= SKILLS GRID ================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.15,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
              className={`group relative cursor-default overflow-hidden rounded-xl border border-white/[0.08] bg-[#10111f]/80 p-5 shadow-lg backdrop-blur-xl transition-all duration-300 ${skill.border} ${skill.glow} hover:bg-[#15172a] hover:shadow-2xl`}
            >

              {/* animated top line */}

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.08,
                }}
                className={`absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-transparent via-current to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${skill.color}`}
              />

              {/* hover glow */}

              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-current opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10 ${skill.color}`}
              />

              <div className="relative z-10 flex items-center gap-4">

                {/* ICON */}

                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: 4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-2xl transition-all duration-300 group-hover:bg-white/[0.08] ${skill.color}`}
                >
                  {skill.icon}
                </motion.div>

                {/* NAME */}

                <div className="min-w-0">
                  <h3 className="truncate text-sm font-semibold text-white/90 sm:text-base">
                    {skill.name}
                  </h3>

                  {/* proficiency */}

                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 transition-colors duration-300 group-hover:text-white/55">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </div>

              {/* bottom hover arrow */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -5,
                }}
                whileHover={{
                  opacity: 1,
                  x: 0,
                }}
                className="absolute bottom-3 right-4 text-xs text-white/20 transition-colors group-hover:text-white/50"
              >
                →
              </motion.div>
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >
          <span className="h-px w-10 bg-white/10" />

          <p className="text-xs tracking-wide text-white/30">
            Always learning • Always building • Always improving
          </p>

          <span className="h-px w-10 bg-white/10" />
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;