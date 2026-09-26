

import { motion } from "motion/react";
import CV from "./CV";
import HeaderSocials from "./HeaderSocials";

const Header = () => {

  const handleProjectsClick = (e) => {
    e.preventDefault();

    const portfolioSection = document.getElementById("portfolio");

    if (portfolioSection) {
      portfolioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="relative min-h-screen w-full overflow-hidden bg-[#070711] text-white">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[-10%] top-[-10%] h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute bottom-[-15%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[100px]" />

        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ================= MAIN HERO ================= */}
      <div className="relative z-10 mx-auto flex min-h-screen w-[90%] max-w-[1200px] items-center justify-center px-4 pb-20 pt-28 sm:w-[86%]">

        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">

          {/* ================= LEFT CONTENT ================= */}
          <div className="order-2 text-center lg:order-1 lg:text-left">

            {/* Small intro */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-sm font-medium uppercase tracking-[0.3em] text-white/50">
                Hello, I'm
              </span>

              <span className="h-px w-8 bg-cyan-400 lg:hidden" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.2rem]"
            >
              Mohd{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-200 bg-clip-text text-transparent">
                Zaid
              </span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-5"
            >
              <h2 className="text-xl font-medium text-white/80 sm:text-2xl">
                Frontend Developer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mx-auto mt-6 max-w-[580px] text-sm leading-7 text-white/50 sm:text-base lg:mx-0"
            >
              Building modern, responsive web experience with React,
              JavaScript & creative UI.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              {/* CV BUTTON */}
              <CV />

              {/* VIEW PROJECTS BUTTON */}
              <motion.a
                href="#portfolio"
                onClick={handleProjectsClick}
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="group relative overflow-hidden rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects

                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-block"
                  >
                    →
                  </motion.span>
                </span>

                {/* Hover shine */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-10"
            >
              <HeaderSocials />
            </motion.div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="order-1 flex justify-center lg:order-2"
          >
            <div className="relative">

              {/* Outer glow */}
              <div className="absolute inset-0 scale-90 rounded-full bg-cyan-400/20 blur-[80px]" />

              {/* Decorative ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-5 rounded-full border border-dashed border-cyan-400/20"
              />

              {/* Image frame */}
              <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border border-white/10 bg-white/[0.03] p-3 shadow-[0_0_80px_rgba(34,211,238,0.12)] backdrop-blur-xl sm:h-[360px] sm:w-[360px] md:h-[400px] md:w-[400px]">

                <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-b from-cyan-400/10 to-transparent">

                  <img
                    src="/me.webp"
                    alt="Mohd Zaid"
                    width="896"
                    height="1195"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />

                  {/* Image gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070711]/40 via-transparent to-cyan-300/5" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-2 -left-5 rounded-2xl border border-white/10 bg-[#10101d]/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-8"
              >
                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />

                  <span className="text-xs font-medium text-white/80">
                    Available for opportunities
                  </span>

                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= SCROLL DOWN ================= */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-white/30 transition-colors hover:text-cyan-300 sm:flex"
      >
        <span>Scroll</span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-10 w-px bg-gradient-to-b from-cyan-400 to-transparent"
        />
      </motion.a>

    </header>
  );
};

export default Header;

