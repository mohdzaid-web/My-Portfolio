// import { useState } from "react";
// import { motion } from "motion/react";
// import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
// import { BiBook } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
// import { FiFolder, FiMail } from "react-icons/fi";

// const Nav = () => {
//   const [activeNav, setActiveNav] = useState("#");

//   const navItems = [
//     { href: "#", label: "Home", icon: <AiOutlineHome /> },
//     { href: "#about", label: "About", icon: <AiOutlineUser /> },
//     { href: "#experience", label: "Skills", icon: <BiBook /> },
//     { href: "#services", label: "Services", icon: <RiServiceLine /> },
//     { href: "#portfolio", label: "Projects", icon: <FiFolder /> },
//     { href: "#contact", label: "Contact", icon: <FiMail /> },
//   ];

//   const handleNavClick = (e, href) => {
//     e.preventDefault();

//     setActiveNav(href);

//     if (href === "#") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//       return;
//     }

//     const section = document.querySelector(href);

//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0, y: 80, scale: 0.8 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{
//         duration: 1,
//         delay: 0.3,
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       }}
//       className="
//         fixed bottom-5 left-1/2 z-[9999]
//         flex -translate-x-1/2
//         items-center justify-center
//         gap-1.5
//         rounded-[3rem]
//         border border-[#e7a1d0]/25
//         bg-gradient-to-r
//         from-[#170d1d]/95
//         via-[#301438]/95
//         to-[#1d1027]/95
//         px-2 py-2
//         shadow-[0_12px_45px_rgba(0,0,0,0.6),0_0_35px_rgba(184,79,145,0.16)]
//         backdrop-blur-[20px]

//         sm:bottom-7
//         sm:gap-2
//         sm:px-3
//         sm:py-3

//         md:gap-2.5
//         md:px-4
//       "
//     >
//       {/* Outer glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           -inset-6
//           -z-10
//           rounded-[4rem]
//           bg-[radial-gradient(ellipse_at_center,rgba(184,79,145,0.20),rgba(113,63,143,0.12),transparent_70%)]
//           blur-2xl
//         "
//       />

//       {/* Left glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-5
//           top-1/2
//           -z-10
//           h-16
//           w-24
//           -translate-y-1/2
//           rounded-full
//           bg-[#713f8f]/20
//           blur-2xl
//         "
//       />

//       {/* Right glow */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-5
//           top-1/2
//           -z-10
//           h-16
//           w-24
//           -translate-y-1/2
//           rounded-full
//           bg-[#e78ab8]/15
//           blur-2xl
//         "
//       />

//       {/* Inner glass */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-[1px]
//           rounded-[3rem]
//           border
//           border-white/[0.07]
//           bg-gradient-to-b
//           from-white/[0.05]
//           via-transparent
//           to-black/[0.15]
//         "
//       />

//       {/* Top shine */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[8%]
//           right-[8%]
//           top-0
//           h-px
//           bg-gradient-to-r
//           from-transparent
//           via-[#fff1fa]/50
//           to-transparent
//         "
//       />

//       {navItems.map((item, index) => {
//         const isActive = activeNav === item.href;

//         return (
//           <motion.a
//             key={item.href}
//             href={item.href}
//             onClick={(e) => handleNavClick(e, item.href)}
//             initial={{
//               opacity: 0,
//               y: 30,
//               scale: 0.7,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               scale: 1,
//             }}
//             transition={{
//               delay: 0.6 + index * 0.1,
//               duration: 0.5,
//               type: "spring",
//               stiffness: 150,
//               damping: 12,
//             }}
//             whileHover={{
//               y: -7,
//               scale: 1.08,
//             }}
//             whileTap={{
//               scale: 0.9,
//             }}
//             className="
//               group
//               relative
//               flex
//               min-w-[54px]
//               flex-col
//               items-center
//               justify-center
//               rounded-[2rem]
//               px-2
//               py-1.5
//               outline-none

//               sm:min-w-[64px]
//               sm:px-2.5
//               sm:py-2

//               md:min-w-[72px]
//             "
//           >
//             {/* Active background */}
//             {isActive && (
//               <motion.div
//                 layoutId="activeNav"
//                 transition={{
//                   type: "spring",
//                   stiffness: 350,
//                   damping: 25,
//                 }}
//                 className="
//                   absolute
//                   inset-0
//                   rounded-[2rem]
//                   border
//                   border-[#e9a7cf]/35
//                   bg-gradient-to-br
//                   from-[#6e3b80]/80
//                   via-[#a94f88]/55
//                   to-[#49245f]/75
//                   shadow-[0_0_20px_rgba(216,148,199,0.25)]
//                   backdrop-blur-md
//                 "
//               />
//             )}

//             {/* Active glow */}
//             {isActive && (
//               <motion.div
//                 animate={{
//                   opacity: [0.2, 0.7, 0.2],
//                   scale: [0.9, 1.15, 0.9],
//                 }}
//                 transition={{
//                   duration: 2.2,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="
//                   pointer-events-none
//                   absolute
//                   inset-1
//                   rounded-[2rem]
//                   bg-gradient-to-r
//                   from-[#d8b4fe]/20
//                   via-[#f08bc1]/20
//                   to-[#b84f91]/20
//                   blur-md
//                 "
//               />
//             )}

//             {/* Icon */}
//             <motion.span
//               animate={
//                 isActive
//                   ? {
//                     scale: [1, 1.12, 1],
//                   }
//                   : {
//                     scale: 1,
//                   }
//               }
//               transition={{
//                 duration: 2,
//                 repeat: isActive ? Infinity : 0,
//                 ease: "easeInOut",
//               }}
//               className={`
//                 relative
//                 z-10
//                 flex
//                 h-9
//                 w-9
//                 items-center
//                 justify-center
//                 rounded-full
//                 text-[21px]
//                 transition-all
//                 duration-300

//                 sm:h-10
//                 sm:w-10
//                 sm:text-[22px]

//                 ${isActive
//                   ? "text-[#fff1fa] drop-shadow-[0_0_10px_rgba(239,186,255,0.9)]"
//                   : "text-[#c9a2cf] group-hover:text-[#f3d4e9] group-hover:drop-shadow-[0_0_10px_rgba(232,151,204,0.75)]"
//                 }
//               `}
//             >
//               {item.icon}
//             </motion.span>

//             {/* Label */}
//             <motion.span
//               animate={{
//                 opacity: isActive ? 1 : 0.75,
//                 y: isActive ? -1 : 0,
//               }}
//               className={`
//                 relative
//                 z-10
//                 mt-0.5
//                 whitespace-nowrap
//                 text-[8px]
//                 font-medium
//                 tracking-wide

//                 sm:text-[9px]

//                 ${isActive
//                   ? "text-[#fff1fa] drop-shadow-[0_0_6px_rgba(239,186,255,0.65)]"
//                   : "text-[#c9a2cf] group-hover:text-[#f3d4e9]"
//                 }
//               `}
//             >
//               {item.label}
//             </motion.span>

//             {/* Hover line */}
//             <motion.span
//               initial={{
//                 width: 0,
//                 opacity: 0,
//               }}
//               whileHover={{
//                 width: "50%",
//                 opacity: 1,
//               }}
//               transition={{
//                 duration: 0.3,
//               }}
//               className="
//                 absolute
//                 bottom-0.5
//                 h-[2px]
//                 rounded-full
//                 bg-gradient-to-r
//                 from-[#a855f7]
//                 via-[#ec8bc4]
//                 to-[#f5b6d8]
//                 shadow-[0_0_8px_rgba(236,139,196,0.7)]
//               "
//             />
//           </motion.a>
//         );
//       })}

//       {/* Moving shine */}
//       <motion.div
//         initial={{
//           x: "-200%",
//         }}
//         animate={{
//           x: "600%",
//         }}
//         transition={{
//           duration: 3,
//           delay: 2,
//           repeat: Infinity,
//           repeatDelay: 5,
//           ease: "easeInOut",
//         }}
//         className="
//           pointer-events-none
//           absolute
//           left-0
//           top-0
//           h-[2px]
//           w-20
//           bg-gradient-to-r
//           from-transparent
//           via-[#fff1fa]/70
//           to-transparent
//           blur-[1px]
//         "
//       />
//     </motion.nav>
//   );
// };

// export default Nav;
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { PiCertificate } from "react-icons/pi";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const navItems = [
    {
      id: "#",
      label: "Home",
      icon: <AiOutlineHome />,
    },
    {
      id: "#about",
      label: "About",
      icon: <AiOutlineUser />,
    },
    {
      id: "#skills",
      label: "Skills",
      icon: <BiBook />,
    },
     {
    id: "#certificates",
    label: "Certificates",
    icon: <PiCertificate />,
  },
    {
      id: "#services",
      label: "Services",
      icon: <RiServiceLine />,
    },
    {
      id: "#contact",
      label: "Contact",
      icon: <BiMessageSquareDetail />,
    },
  ];

  // Detect current section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "#", element: document.body },
        { id: "#about", element: document.querySelector("#about") },
        {
          id: "#experience",
          element: document.querySelector("#experience"),
        },
         {
          id: "#certificates",
        element: document.querySelector("#certificates"),
          },
        {
          id: "#services",
          element: document.querySelector("#services"),
        },
        {
          id: "#contact",
          element: document.querySelector("#contact"),
        },
      ];

      let current = "#";

      sections.forEach((section) => {
        if (section.id === "#") return;

        if (section.element) {
          const rect = section.element.getBoundingClientRect();

          if (rect.top <= window.innerHeight * 0.45) {
            current = section.id;
          }
        }
      });

      setActiveNav(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Moving light effect
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({
      x,
      y,
    });
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      className="
        fixed
        bottom-6
        left-1/2
        -translate-x-1/2
        z-[999]

        flex
        items-center
        gap-1

        px-2
        py-2

        rounded-[22px]

        border
        border-white/[0.12]

        bg-black/55
        backdrop-blur-2xl

        shadow-[0_15px_50px_rgba(0,0,0,0.45)]

        overflow-hidden

        max-w-[calc(100vw-24px)]
      "
    >
      {/* MOVING BACKGROUND LIGHT */}
      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-70
        "
        animate={{
          background: `
            radial-gradient(
              180px circle at ${mousePosition.x}% ${mousePosition.y}%,
              rgba(255,255,255,0.18),
              transparent 70%
            )
          `,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
      />

      {/* TOP GLASS HIGHLIGHT */}
      <div
        className="
          pointer-events-none
          absolute
          top-0
          left-[10%]
          right-[10%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent
        "
      />

      {/* BOTTOM GLOW */}
      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-8
          left-1/2
          -translate-x-1/2
          w-40
          h-12
          rounded-full
          bg-white/10
          blur-2xl
        "
        animate={{
          opacity: [0.25, 0.55, 0.25],
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* NAV ITEMS */}
      <div className="relative flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = activeNav === item.id;

          return (
            <a
              key={item.id}
              href={item.id}
              onClick={() => setActiveNav(item.id)}
              className="relative"
            >
              {/* ACTIVE BACKGROUND */}
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="
                    absolute
                    inset-0
                    rounded-[16px]

                    bg-white/[0.13]

                    border
                    border-white/[0.15]

                    shadow-[0_0_20px_rgba(255,255,255,0.08)]
                  "
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className={`
                  relative
                  z-10

                  flex
                  items-center
                  gap-2

                  px-3
                  py-2.5

                  rounded-[16px]

                  text-[13px]
                  font-medium

                  transition-colors
                  duration-300

                  ${
                    isActive
                      ? "text-white"
                      : "text-white/55 hover:text-white"
                  }
                `}
              >
                {/* ICON */}
                <motion.span
                  animate={{
                    scale: isActive ? 1.1 : 1,
                    rotate: isActive ? 0 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                  }}
                  className="text-[18px]"
                >
                  {item.icon}
                </motion.span>

                {/* LABEL */}
                <span className="whitespace-nowrap">
                  {item.label}
                </span>

                {/* ACTIVE DOT */}
                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className="
                      absolute
                      -bottom-[1px]
                      left-1/2
                      -translate-x-1/2

                      w-1
                      h-1

                      rounded-full

                      bg-white

                      shadow-[0_0_8px_rgba(255,255,255,0.9)]
                    "
                  />
                )}
              </motion.div>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Nav;