

import { motion } from "motion/react";

import {
  FiArrowUpRight,
  FiCode,
  FiSmartphone,
  FiDatabase,
  FiCheck,
} from "react-icons/fi";

import { FaReact } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Frontend Development",
      description: "Build Modern Fast and Responsive website",
      image: "/frontend-development.svg",
      icon: <FiCode />,
      accent: "from-cyan-400 to-blue-500",
      glow: "bg-cyan-500",
      border: "hover:border-cyan-400/40",
      points: [
        "Responsive Design",
        "React.js Development",
        "Component Based UI",
        "Bootstrap / Tailwind Css",
      ],
    },

    {
      number: "02",
      title: "Responsive Web Design",
      description: "Create website that work smothly across all devices",
      image: "/responsive-web-design.svg",
      icon: <FiSmartphone />,
      accent: "from-blue-400 to-violet-500",
      glow: "bg-blue-500",
      border: "hover:border-blue-400/40",
      points: [
        "Mobilefirst layouts",
        "Responsive Navigation",
        "Cross-device compatibilty",
        "Clean and modern UI",
      ],
    },

    {
      number: "03",
      title: "React Development",
      description:
        "Develop interactive and reusable web interfaces with react",
      image: "/react-development.svg",
      icon: <FaReact />,
      accent: "from-cyan-300 to-blue-500",
      glow: "bg-cyan-400",
      border: "hover:border-cyan-300/40",
      points: [
        "React Component",
        "React Hooks",
        "React Router",
        "API Intergration",
        "Context API",
      ],
    },

    {
      number: "04",
      title: "API Integration",
      description:
        "Connects web application with APIs to display and manage dynamic data",
      image: "/responsive-web-design.svg",
      icon: <FiDatabase />,
      accent: "from-emerald-400 to-cyan-500",
      glow: "bg-emerald-400",
      border: "hover:border-emerald-400/40",
      points: [
        "Rest APIs",
        "Fetch API",
        "Loading & error handling",
        "Search and filtering",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#070b18] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">

        {/* Main glow */}

        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute left-[-200px] top-[40%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-[-200px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-purple-600/10 blur-[150px]" />

        {/* subtle dots */}

        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1400px]">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          {/* small title */}

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="mb-5 flex items-center justify-center gap-4"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-blue-400" />

            <span className="text-xs font-medium uppercase tracking-[0.35em] text-blue-300">
              My Services
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-blue-400" />
          </motion.div>

          {/* heading */}

          <h2 className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            What I Can{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>

          {/* description */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/45 sm:text-base"
          >
            I build modern, responsive and user-friendly web applications
            using the latest technologies and best practices.
          </motion.p>
        </motion.div>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
              }}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.09] bg-[#0c1224]/80 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-500 hover:bg-[#10182d] hover:shadow-2xl ${service.border}`}
            >

              {/* =================================================
                  CARD TOP GLOW
              ================================================= */}

              <div
                className={`absolute left-1/2 top-0 h-32 w-3/4 -translate-x-1/2 rounded-full ${service.glow} opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-20`}
              />

              {/* =================================================
                  NUMBER
              ================================================= */}

              <div className="absolute right-5 top-5 z-20">
                <span className="text-xs font-medium tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-white/50">
                  {service.number}
                </span>
              </div>

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div className="relative h-[230px] overflow-hidden">

                <motion.img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  initial={{ scale: 1 }}
                  whileHover={{
                    scale: 1.07,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="h-full w-full object-cover"
                />

                {/* image gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1224] via-transparent to-transparent" />

                {/* image glow */}

                <div
                  className={`absolute bottom-0 left-1/2 h-20 w-1/2 -translate-x-1/2 ${service.glow} opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-20`}
                />
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="relative z-10 flex flex-1 flex-col p-6">

                {/* icon */}

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
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-xl text-white shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* title */}

                <div className="flex items-start justify-between gap-3">

                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -5,
                    }}
                    whileHover={{
                      opacity: 1,
                      x: 0,
                    }}
                    className="mt-1 text-white/30 transition-colors group-hover:text-white"
                  >
                    <FiArrowUpRight size={20} />
                  </motion.div>

                </div>

                {/* description */}

                <p className="mt-4 text-sm leading-6 text-white/45">
                  {service.description}
                </p>

                {/* =================================================
                    FEATURE LIST
                ================================================= */}

                <ul className="mt-6 space-y-3">

                  {service.points.map((point, pointIndex) => (
                    <motion.li
                      key={point}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: false,
                      }}
                      transition={{
                        duration: 0.4,
                        delay:
                          0.3 +
                          index * 0.12 +
                          pointIndex * 0.06,
                      }}
                      className="flex items-start gap-3 text-sm text-white/60"
                    >

                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${service.accent} text-[11px] text-white shadow-lg`}
                      >
                        <FiCheck />
                      </span>

                      <span className="transition-colors duration-300 group-hover:text-white/80">
                        {point}
                      </span>

                    </motion.li>
                  ))}

                </ul>

                {/* bottom line */}

                <div className="mt-auto pt-7">

                  <div className="h-px w-full bg-white/[0.07]" />

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                      Service
                    </span>

                    <motion.span
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-white/30"
                    >
                      →
                    </motion.span>

                  </div>
                </div>

              </div>

              {/* =================================================
                  ANIMATED BORDER
              ================================================= */}

              <div
                className={`pointer-events-none absolute inset-0 rounded-[1.5rem] border border-transparent bg-gradient-to-br ${service.accent} opacity-0 [mask-composite:exclude] transition-opacity duration-500 group-hover:opacity-20`}
              />

            </motion.article>
          ))}

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mt-14 flex items-center justify-center gap-4"
        >
          <span className="h-px w-8 bg-white/10 sm:w-16" />

          <span className="text-center text-xs tracking-[0.2em] text-white/25">
            BUILD • CREATE • DELIVER
          </span>

          <span className="h-px w-8 bg-white/10 sm:w-16" />
        </motion.div>

      </div>
    </section>
  );
};

export default Services;

