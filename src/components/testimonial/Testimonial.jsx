import { motion } from "motion/react";

import {
  FaArrowRight,
  FaCheckCircle,
  FaGraduationCap,
  FaReact,
  FaStar,
} from "react-icons/fa";

import { SiNodedotjs, SiGooglecloud } from "react-icons/si";

import { HiOutlineSparkles } from "react-icons/hi2";
import { TbBrain } from "react-icons/tb";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";


const Testimonial = () => {

  /* ============================================================
     CERTIFICATE DATA
  ============================================================ */

   const certificates = [
    {
      id: 1,
      image: "/react-redux.webp",
      platform: "KnowledgeGate",
      title: "React and Redux Certification",
      skills: "React, Redux, Components, State Management",
      year: "2026",
      verified: true,
    },

    {
      id: 2,
      image: "/certificate1.webp",
      platform: "freeCodeCamp",
      title: "Responsive Web Design Developer Certification",
      skills: "HTML, CSS, Responsive Web Design",
      year: "2026",
      verified: true,
    },

    {
      id: 3,
      image: "/react-redux.webp",
      platform: "KnowledgeGate",
      title: "React and Redux Certification",
      skills: "React, Redux, Components, State Management",
      year: "2026",
      verified: true,
    },

    {
      id: 4,
      image: "/certificate2.webp",
      platform: "freeCodeCamp",
      title: "JavaScript Developer Certification",
      skills: "JavaScript, ES6, DOM, Algorithms",
      year: "2026",
      verified: true,
    },
  ];

  /* ============================================================
     LEARNING DATA
  ============================================================ */

  const learning = [
    {
      icon: <FaReact />,
      title: "React.js",
      subtitle: "Advanced Concepts",
      className: "text-cyan-400",
    },

    {
      icon: <SiNodedotjs />,
      title: "Node.js",
      subtitle: "Backend Development",
      className: "text-green-400",
    },

    {
      icon: <SiGooglecloud />,
      title: "Cloud & DevOps",
      subtitle: "Deployment & Scaling",
      className: "text-blue-400",
    },

    {
      icon: <TbBrain />,
      title: "AI Integration",
      subtitle: "Modern Web Apps",
      className: "text-purple-400",
    },
  ];


  return (
    <section
      id="certificates"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        bg-[#060a14]
        px-4
        py-20
        text-white
        sm:px-6
        lg:px-10
      "
    >

      {/* ============================================================
          BACKGROUND EFFECTS
      ============================================================ */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

        {/* Top Blue Glow */}
        <motion.div
          className="
            absolute
            -right-40
            -top-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Purple Glow */}
        <motion.div
          className="
            absolute
            -bottom-60
            -left-40
            h-[550px]
            w-[550px]
            rounded-full
            bg-purple-700/10
            blur-[150px]
          "
          animate={{
            x: [0, 70, 0],
            y: [0, -50, 0],
            opacity: [0.2, 0.45, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small Blue Glow */}
        <motion.div
          className="
            absolute
            left-[45%]
            top-[40%]
            h-40
            w-40
            rounded-full
            bg-blue-500/10
            blur-[90px]
          "
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Decorative Rings */}
        <motion.div
          className="
            absolute
            -right-32
            top-10
            h-72
            w-72
            rounded-full
            border
            border-blue-500/20
          "
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="
            absolute
            -right-20
            top-20
            h-52
            w-52
            rounded-full
            border
            border-purple-500/20
          "
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      </div>


      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}

      <div className="mx-auto max-w-7xl">


        {/* ============================================================
            SECTION HEADER
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.8,
          }}
          className="max-w-2xl"
        >

          {/* Small Heading */}

          <div className="mb-4 flex items-center gap-4">

            <span
              className="
                text-xs
                font-medium
                tracking-[0.35em]
                text-blue-400
              "
            >
              04
            </span>

            <span
              className="
                h-px
                w-12
                bg-gradient-to-r
                from-blue-400
                to-transparent
              "
            />

            <span
              className="
                text-xs
                font-semibold
                tracking-[0.35em]
                text-indigo-400
              "
            >
              CERTIFICATES
            </span>

          </div>


          {/* Main Heading */}

          <h2
            className="
              text-4xl
              font-semibold
              leading-tight
              tracking-tight
              sm:text-5xl
              lg:text-6xl
            "
          >
            My{" "}

            <span
              className="
                bg-gradient-to-r
                from-purple-400
                via-blue-400
                to-indigo-400
                bg-clip-text
                text-transparent
              "
            >
              Certifications
            </span>
          </h2>


          {/* Description */}

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            I believe in continuous learning and self-improvement.
            Here are the certificates I've earned to enhance my
            skills and stay up to date with modern technologies.
          </p>

        </motion.div>


        {/* ============================================================
            DECORATIVE TEXT
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            absolute
            right-8
            top-28
            hidden
            rotate-[-8deg]
            text-right
            lg:block
          "
        >

          <p
            className="
              font-serif
              text-xl
              italic
              text-indigo-400/80
            "
          >
            Better Skills
          </p>

          <p
            className="
              font-serif
              text-xl
              italic
              text-purple-400/80
            "
          >
            Bigger Dreams
          </p>

          <motion.div
            animate={{
              x: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
              mt-1
              text-right
              text-xl
              text-blue-400
            "
          >
            ↗
          </motion.div>

        </motion.div>


        {/* ============================================================
            CERTIFICATE + SIDE PANEL
        ============================================================ */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-8
            lg:grid-cols-[1fr_270px]
            lg:items-center
          "
        >


          {/* ==========================================================
              CERTIFICATE SWIPER
          ========================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: false,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
            }}
            className="relative min-w-0"
          >

            <Swiper
              modules={[
                Navigation,
                Pagination,
                Autoplay,
                EffectCoverflow,
              ]}
              effect="coverflow"
              centeredSlides={true}
              spaceBetween={24}
              slidesPerView={1}
              slidesPerGroup={1}
              loop={false}
              speed={900}

              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}

              navigation={{
                nextEl: ".certificate-next",
                prevEl: ".certificate-prev",
              }}

              pagination={{
                el: ".certificate-pagination",
                clickable: true,
              }}

              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 130,
                modifier: 1.2,
                slideShadows: false,
              }}

              breakpoints={{
                640: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },

                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },

                1024: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
              }}

              className="!overflow-visible"
            >

              {/* ======================================================
                  CERTIFICATE SLIDES
              ====================================================== */}

              {certificates.map((certificate) => (

                <SwiperSlide key={certificate.id}>

                  {({ isActive }) => (

                    <motion.div
                      animate={{
                        scale: isActive ? 1 : 0.84,
                        opacity: isActive ? 1 : 0.45,
                      }}
                      transition={{
                        duration: 0.6,
                      }}
                      className="relative"
                    >

                      {/* =================================================
                          CERTIFICATE CARD
                      ================================================= */}

                      <div
                        className={`
                          relative
                          overflow-hidden
                          rounded-2xl
                          border
                          bg-[#0b1222]/90
                          p-3
                          backdrop-blur-xl
                          transition-all
                          duration-500

                          ${
                            isActive
                              ? "border-blue-400/50 shadow-[0_0_50px_rgba(59,130,246,0.22)]"
                              : "border-white/[0.06]"
                          }
                        `}
                      >

                        {/* Animated Border Glow */}

                        {isActive && (
                          <motion.div
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              rounded-2xl
                              border
                              border-purple-400/30
                            "
                            animate={{
                              opacity: [0.3, 0.8, 0.3],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                            }}
                          />
                        )}


                        {/* Verified Badge */}

                        {isActive && certificate.verified && (

                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.8,
                            }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            className="
                              absolute
                              right-5
                              top-5
                              z-10
                              flex
                              items-center
                              gap-1.5
                              rounded-full
                              border
                              border-blue-400/20
                              bg-[#101a31]/90
                              px-3
                              py-1.5
                              text-[10px]
                              font-medium
                              text-blue-300
                              backdrop-blur-md
                            "
                          >
                            <FaCheckCircle />
                            Verified
                          </motion.div>

                        )}


                        {/* =================================================
                            CERTIFICATE IMAGE
                        ================================================= */}

                        <div
                          className="
                            relative
                            aspect-[1.5/1]
                            overflow-hidden
                            rounded-xl
                            bg-slate-900
                          "
                        >

                          <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="
                              h-full
                              w-full
                              object-contain
                              transition-transform
                              duration-700
                            "
                          />

                          {/* Image Overlay */}

                          <div
                            className="
                              pointer-events-none
                              absolute
                              inset-0
                              bg-gradient-to-t
                              from-[#07101e]/50
                              via-transparent
                              to-transparent
                            "
                          />

                        </div>


                        {/* =================================================
                            CERTIFICATE INFORMATION
                        ================================================= */}

                        <div
                          className="
                            mt-3
                            flex
                            flex-col
                            gap-4
                            rounded-xl
                            border
                            border-white/[0.06]
                            bg-[#070d19]/90
                            p-4
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                          "
                        >

                          {/* Certificate Details */}

                          <div className="flex items-center gap-3">

                            <div
                              className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-blue-400/20
                                bg-blue-500/10
                                text-blue-400
                              "
                            >
                              <FaGraduationCap />
                            </div>

                            <div>

                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                  opacity: isActive ? 1 : 0.7,
                                  y: isActive ? 0 : 4,
                                }}
                                transition={{ duration: 0.45, delay: 0.05 }}
                                className="text-[10px] text-slate-500"
                              >
                                {certificate.platform}
                              </motion.p>

                              <motion.h3
                                initial={{ opacity: 0, y: 12 }}
                                animate={{
                                  opacity: isActive ? 1 : 0.7,
                                  y: isActive ? 0 : 4,
                                }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="
                                  text-sm
                                  font-semibold
                                  text-slate-200
                                "
                              >
                                {certificate.title}
                              </motion.h3>

                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                  opacity: isActive ? 1 : 0.7,
                                  y: isActive ? 0 : 4,
                                }}
                                transition={{ duration: 0.45, delay: 0.15 }}
                                className="
                                  mt-1
                                  text-[10px]
                                  text-slate-500
                                "
                              >
                                {certificate.skills}
                              </motion.p>

                            </div>

                          </div>


                          {/* Issued + Credential */}

                          <div
                            className="
                              flex
                              items-center
                              gap-5
                              text-xs
                            "
                          >

                            <div>

                              <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{
                                  opacity: isActive ? 1 : 0.7,
                                  y: isActive ? 0 : 3,
                                }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="text-[9px] text-slate-600"
                              >
                                ISSUED
                              </motion.p>

                              <motion.p
                                initial={{ opacity: 0, y: 8 }}
                                animate={{
                                  opacity: isActive ? 1 : 0.7,
                                  y: isActive ? 0 : 3,
                                }}
                                transition={{ duration: 0.4, delay: 0.25 }}
                                className="mt-1 text-slate-300"
                              >
                                {certificate.year}
                              </motion.p>

                            </div>

                            <div
                              className="
                                h-8
                                w-px
                                bg-white/10
                              "
                            />

                            <button
                              className="
                                text-xs
                                text-blue-400
                                transition
                                hover:text-blue-300
                              "
                            >
                              View Credential ↗
                            </button>

                          </div>

                        </div>

                      </div>

                    </motion.div>

                  )}

                </SwiperSlide>

              ))}

            </Swiper>


            {/* ==========================================================
                PREVIOUS BUTTON
            ========================================================== */}

            <motion.button
              whileHover={{
                scale: 1.1,
                x: -3,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="
                certificate-prev
                absolute
                left-1
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-[#0a1325]/90
                text-slate-300
                shadow-[0_0_25px_rgba(0,0,0,0.3)]
                backdrop-blur-md
                transition-all
                hover:border-blue-400/40
                hover:text-blue-400
                sm:left-4
              "
            >
              ←
            </motion.button>


            {/* ==========================================================
                NEXT BUTTON
            ========================================================== */}

            <motion.button
              whileHover={{
                scale: 1.1,
                x: 3,
              }}
              whileTap={{
                scale: 0.9,
              }}
              className="
                certificate-next
                absolute
                right-1
                top-1/2
                z-20
                flex
                h-11
                w-11
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-[#0a1325]/90
                text-slate-300
                shadow-[0_0_25px_rgba(0,0,0,0.3)]
                backdrop-blur-md
                transition-all
                hover:border-blue-400/40
                hover:text-blue-400
                sm:right-4
              "
            >
              →
            </motion.button>


            {/* ==========================================================
                PAGINATION
            ========================================================== */}

            <div
              className="
                certificate-pagination
                mt-7
                flex
                justify-center
                gap-2
              "
            />

          </motion.div>


          {/* ============================================================
              RIGHT INFORMATION CARD
          ============================================================ */}

          <motion.aside
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#0a1120]/70
              p-6
              shadow-[0_20px_70px_rgba(0,0,0,0.25)]
              backdrop-blur-xl
            "
          >

            {/* Certificates Earned */}

            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-400/20
                  bg-blue-500/10
                  text-xl
                  text-blue-400
                "
              >
                <FaGraduationCap />
              </div>

              <div>

                <p className="text-xl font-semibold">
                  {certificates.length}
                </p>

                <p className="text-xs text-slate-500">
                  Certificates Earned
                </p>

              </div>

            </div>


            <div className="my-6 h-px bg-white/[0.08]" />


            {/* Areas of Expertise */}

            <div>

              <div className="mb-4 flex items-center gap-3">

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-purple-400/20
                    bg-purple-500/10
                    text-purple-400
                  "
                >
                  <FaStar />
                </div>

                <p className="text-sm font-medium text-slate-200">
                  Areas of Expertise
                </p>

              </div>


              <div className="flex flex-wrap gap-2">

                {[
                  "Web Development",
                  "Frontend",
                  "Problem Solving",
                ].map((skill) => (

                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-blue-400/10
                      bg-blue-500/[0.06]
                      px-3
                      py-1.5
                      text-[10px]
                      text-blue-200
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>


            <div className="my-6 h-px bg-white/[0.08]" />


            {/* Quote */}

            <div>

              <HiOutlineSparkles
                className="
                  mb-3
                  text-xl
                  text-blue-400
                "
              />

              <p
                className="
                  text-xs
                  italic
                  leading-6
                  text-slate-400
                "
              >
                "Small steps in learning today,
                big opportunities tomorrow."
              </p>

            </div>

          </motion.aside>

        </div>


        {/* ============================================================
            WHAT I'M LEARNING NEXT
        ============================================================ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            duration: 0.8,
          }}
          className="
            mt-16
            overflow-hidden
            rounded-2xl
            border
            border-white/[0.07]
            bg-[#090f1d]/80
            shadow-[0_20px_80px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
          "
        >

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[1.4fr_3fr_180px]
            "
          >

            {/* ========================================================
                LEARNING INTRODUCTION
            ======================================================== */}

            <div className="p-6 sm:p-8">

              <div
                className="
                  mb-4
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-blue-400/20
                  bg-blue-500/10
                  text-blue-400
                "
              >
                <HiOutlineSparkles />
              </div>


              <h3
                className="
                  text-xl
                  font-semibold
                  sm:text-2xl
                "
              >
                What I'm{" "}

                <span
                  className="
                    bg-gradient-to-r
                    from-purple-400
                    to-blue-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  Learning Next?
                </span>
              </h3>


              <p
                className="
                  mt-3
                  max-w-sm
                  text-xs
                  leading-6
                  text-slate-500
                "
              >
                I'm always exploring new technologies and
                improving my skills to build better, faster
                and more creative web experiences.
              </p>

            </div>


            {/* ========================================================
                TECHNOLOGIES
            ======================================================== */}

            <div
              className="
                grid
                grid-cols-2
                border-t
                border-white/[0.06]
                sm:grid-cols-4
                lg:border-l
                lg:border-t-0
              "
            >

              {learning.map((item, index) => (

                <motion.div
                  key={item.title}
                  whileHover={{
                    backgroundColor:
                      "rgba(255,255,255,0.025)",
                  }}
                  className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    border-b
                    border-white/[0.06]
                    p-5
                    text-center
                    transition-all
                    duration-300
                    sm:border-r
                    lg:border-b-0
                  "
                >

                  <motion.div
                    animate={{
                      y: [0, -4, 0],
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`text-3xl ${item.className}`}
                  >
                    {item.icon}
                  </motion.div>


                  <p
                    className="
                      mt-3
                      text-xs
                      font-medium
                      text-slate-200
                    "
                  >
                    {item.title}
                  </p>


                  <p
                    className="
                      mt-1
                      text-[9px]
                      text-slate-500
                    "
                  >
                    {item.subtitle}
                  </p>

                </motion.div>

              ))}

            </div>


            {/* ========================================================
                PROJECTS BUTTON
            ======================================================== */}

            <div
              className="
                flex
                items-center
                justify-center
                border-t
                border-white/[0.06]
                p-6
                lg:border-l
                lg:border-t-0
              "
            >

              <motion.a
                href="#portfolio"
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 0 30px rgba(99,102,241,0.25)",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-purple-400/40
                  bg-purple-500/[0.04]
                  px-5
                  py-3
                  text-xs
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-purple-400
                  hover:text-white
                  sm:w-auto
                "
              >
                View My Projects

                <FaArrowRight
                  className="text-purple-400"
                />

              </motion.a>

            </div>

          </div>

        </motion.div>

      </div>


      {/* ============================================================
          CUSTOM SWIPER PAGINATION STYLE
      ============================================================ */}

      <style>
        {`
          .certificate-pagination .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            opacity: 0.3;
            background: #64748b;
            transition: all 0.3s ease;
          }

          .certificate-pagination .swiper-pagination-bullet-active {
            width: 28px;
            border-radius: 999px;
            opacity: 1;
            background: linear-gradient(
              90deg,
              #60a5fa,
              #a78bfa
            );
          }

          @media (max-width: 640px) {
            .certificate-pagination {
              margin-top: 20px;
            }
          }
          `}
      </style>

    </section>
  );
};


export default Testimonial;