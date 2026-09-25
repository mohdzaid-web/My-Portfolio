import { motion } from "motion/react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    {
      icon: <FaFacebookF />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/zaid._.malik__/?hl=en-in",
      label: "Instagram",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com",
      label: "Twitter",
    },
  ];

  // Smooth movement between sections
  const handleNavigation = (e, href) => {
    e.preventDefault();

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Back to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-blue-500/10
        bg-[#050b16]
        px-4
        pt-16
        pb-8
        sm:px-6
        lg:px-8
      "
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[350px]
          w-[350px]
          rounded-full
          bg-blue-600/10
          blur-[120px]
        "
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[350px]
          w-[350px]
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* =================================================
            TOP LINE
        ================================================= */}

        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="
            mb-12
            h-px
            origin-center
            bg-gradient-to-r
            from-transparent
            via-blue-500/40
            to-transparent
          "
        />

        {/* =================================================
            BRAND
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{
              scale: 1.05,
            }}
            className="
              inline-block
              cursor-pointer
              text-3xl
              font-bold
              tracking-[0.15em]
            "
          >
            <span
              className="
                bg-gradient-to-r
                from-blue-400
                via-indigo-400
                to-purple-500
                bg-clip-text
                text-transparent
              "
            >
              Mohd Zaid
            </span>
          </motion.button>

          <p
            className="
              mx-auto
              mt-3
              max-w-md
              text-xs
              leading-6
              text-slate-500
              sm:text-sm
            "
          >
            Building modern and responsive digital experiences
            with clean and creative interfaces.
          </p>

          {/* Availability */}
          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              text-xs
              text-slate-400
              sm:text-sm
            "
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-green-400
                  opacity-75
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2.5
                  w-2.5
                  rounded-full
                  bg-green-400
                "
              />
            </span>

            Available for opportunities
          </div>
        </motion.div>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <motion.ul
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-10
            flex
            max-w-4xl
            flex-wrap
            items-center
            justify-center
            gap-x-7
            gap-y-4
            sm:gap-x-9
          "
        >
          {links.map((link) => (
            <motion.li
              key={link.name}
              whileHover={{
                y: -3,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
            >
              <a
                href={link.href}
                onClick={(e) =>
                  handleNavigation(e, link.href)
                }
                className="
                  group
                  relative
                  text-xs
                  font-medium
                  text-slate-400
                  transition-colors
                  duration-300
                  hover:text-white
                  sm:text-sm
                "
              >
                {link.name}

                {/* Animated underline */}
                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-px
                    w-0
                    -translate-x-1/2
                    bg-gradient-to-r
                    from-blue-400
                    to-purple-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* =================================================
            EXTRA INFORMATION
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="
            mx-auto
            mt-10
            grid
            max-w-3xl
            grid-cols-1
            gap-3
            sm:grid-cols-3
          "
        >
          {/* Focus */}
          <div
            className="
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.02]
              px-5
              py-4
              text-center
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-blue-400/20
              hover:bg-blue-500/[0.04]
            "
          >
            <p className="text-xs text-slate-500">
              Focus
            </p>

            <p className="mt-1 text-sm font-medium text-slate-200">
              Frontend Development
            </p>
          </div>

          {/* Technologies */}
          <div
            className="
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.02]
              px-5
              py-4
              text-center
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-purple-400/20
              hover:bg-purple-500/[0.04]
            "
          >
            <p className="text-xs text-slate-500">
              Technologies
            </p>

            <p className="mt-1 text-sm font-medium text-slate-200">
              React · JavaScript · Tailwind
            </p>
          </div>

          {/* Availability */}
          <div
            className="
              rounded-2xl
              border
              border-white/[0.06]
              bg-white/[0.02]
              px-5
              py-4
              text-center
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-blue-400/20
              hover:bg-blue-500/[0.04]
            "
          >
            <p className="text-xs text-slate-500">
              Currently
            </p>

            <p className="mt-1 text-sm font-medium text-slate-200">
              Open to Opportunities
            </p>
          </div>
        </motion.div>

        {/* =================================================
            SOCIAL ICONS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3
          "
        >
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.03]
                text-slate-400
                shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                transition-all
                duration-300
                hover:border-blue-400/40
                hover:bg-blue-500/10
                hover:text-blue-400
                hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)]
              "
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* =================================================
            SEPARATOR
        ================================================= */}

        <div className="relative my-10">
          <div
            className="
              h-px
              w-full
              bg-gradient-to-r
              from-transparent
              via-white/[0.08]
              to-transparent
            "
          />

          <motion.div
            className="
              absolute
              left-1/2
              top-1/2
              h-1
              w-1
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-400
              shadow-[0_0_12px_rgba(59,130,246,0.8)]
            "
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.5, 0.8],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* =================================================
            COPYRIGHT + BACK TO TOP
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-5
            sm:flex-row
          "
        >
          <small
            className="
              text-center
              text-xs
              text-slate-500
              sm:text-left
              sm:text-sm
            "
          >
            &copy; Mohd Zaid. All rights reserved.
          </small>

          <motion.button
            onClick={scrollToTop}
            whileHover={{
              y: -4,
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              text-xs
              text-slate-400
              backdrop-blur-md
              transition-all
              duration-300
              hover:border-blue-400/40
              hover:bg-blue-500/10
              hover:text-blue-400
            "
          >
            Back to top

            <FaArrowUp
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-1
              "
            />
          </motion.button>
        </motion.div>

        {/* Bottom animated glow */}
        <motion.div
          className="
            pointer-events-none
            mx-auto
            mt-8
            h-px
            w-40
            bg-gradient-to-r
            from-transparent
            via-blue-500/50
            to-transparent
          "
          animate={{
            width: [120, 220, 120],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;