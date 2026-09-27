import { motion } from "motion/react";
import { useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "2ce435a5-abf1-4eeb-86c1-b2e87621d7e1"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        alert("Thank you for your submission!");
        event.target.reset();
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 100;

    const y =
      ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  return (
    <section
    
      id="contact"
      className="
      bg-[#070711]
        relative
        min-h-screen
        !mt-0
        overflow-hidden
        flex
        items-center
        py-24
        px-4
        sm:px-6
        lg:px-8
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Large purple glow */}
      <motion.div
        className="
          absolute
          -top-32
          -left-32
          w-[350px]
          h-[350px]
          sm:w-[500px]
          sm:h-[500px]
          rounded-full
          bg-purple-600/10
          blur-[120px]
          pointer-events-none
        "
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blue glow */}
      <motion.div
        className="
          absolute
          -bottom-40
          -right-40
          w-[400px]
          h-[400px]
          sm:w-[550px]
          sm:h-[550px]
          rounded-full
          bg-blue-500/10
          blur-[130px]
          pointer-events-none
        "
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative curved glow */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[80%]
          h-[60%]
          rounded-full
          border
          border-purple-500/10
          pointer-events-none
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center mb-14"
        >
          <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-white/50 mb-3">
            Get In Touch
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-semibold
              tracking-tight
              text-white
            "
          >
            Let's{" "}
            <span
              className="
                bg-gradient-to-r
                from-purple-400
                via-fuchsia-400
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              Connect.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/45 max-w-xl mx-auto">
            Have an opportunity, project, or internship in mind?
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* =====================================================
            CONTACT GRID
        ====================================================== */}

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12 items-stretch">
          
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
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
              duration: 0.7,
            }}
            className="
              relative
              rounded-3xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              backdrop-blur-2xl
              p-6
              sm:p-8
              overflow-hidden
            "
          >
            {/* Moving light */}
            <motion.div
              className="
                pointer-events-none
                absolute
                inset-0
              "
              animate={{
                background: `
                  radial-gradient(
                    250px circle at
                    ${mousePosition.x}%
                    ${mousePosition.y}%,
                    rgba(168,85,247,0.13),
                    transparent 70%
                  )
                `,
              }}
              transition={{
                duration: 0.25,
              }}
            />

            {/* Border glow */}
            <div
              className="
                absolute
                inset-0
                rounded-3xl
                border
                border-transparent
                bg-gradient-to-br
                from-purple-500/10
                via-transparent
                to-blue-500/10
                pointer-events-none
              "
            />

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-purple-300/70 mb-3">
                Contact
              </p>

              <h3
                className="
                  text-3xl
                  sm:text-4xl
                  font-semibold
                  text-white
                  leading-tight
                "
              >
                Let's
                <br />

                <span
                  className="
                    bg-gradient-to-r
                    from-purple-400
                    via-fuchsia-400
                    to-blue-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  Connect.
                </span>
              </h3>

              <p className="mt-5 text-sm text-white/50 leading-7 max-w-sm">
               Have a project idea, internship opportunity, or just want to connect? Feel free to reach out - I'd be happy to hear from you 
              </p>

              {/* Contact options */}
              <div className="mt-8 space-y-4">

                {/* EMAIL */}
                <motion.a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mohdzaid10feb@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    hover:bg-white/[0.06]
                    hover:border-purple-400/20
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-purple-500/10
                      border
                      border-purple-400/20
                      text-purple-300
                      group-hover:bg-purple-500/20
                      transition-all
                    "
                  >
                    <MdOutlineEmail size={21} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-white/40">
                      Email
                    </p>

                    <p className="text-sm text-white/80 truncate">
                      mohdzaid10feb@gmail.com
                    </p>
                  </div>

                  <FiArrowUpRight
                    className="
                      ml-auto
                      text-white/30
                      group-hover:text-white
                      transition
                    "
                  />
                </motion.a>

                {/* LINKEDIN */}
                <motion.a
                  href="https://www.linkedin.com/in/mohd-zaid-web/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    hover:bg-white/[0.06]
                    hover:border-blue-400/20
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-blue-500/10
                      border
                      border-blue-400/20
                      text-blue-300
                      group-hover:bg-blue-500/20
                      transition-all
                    "
                  >
                    <ImLinkedin size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-white/40">
                      LinkedIn
                    </p>

                    <p className="text-sm text-white/80">
                      LinkedIn profile
                    </p>
                  </div>

                  <FiArrowUpRight
                    className="
                      ml-auto
                      text-white/30
                      group-hover:text-white
                      transition
                    "
                  />
                </motion.a>

                {/* WHATSAPP */}
                <motion.a
                  href="https://wa.me/916396546520"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    x: 6,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    p-3
                    rounded-2xl
                    border
                    border-white/[0.06]
                    bg-white/[0.02]
                    hover:bg-white/[0.06]
                    hover:border-green-400/20
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className="
                      w-11
                      h-11
                      shrink-0
                      rounded-xl
                      flex
                      items-center
                      justify-center
                      bg-green-500/10
                      border
                      border-green-400/20
                      text-green-300
                      group-hover:bg-green-500/20
                      transition-all
                    "
                  >
                    <BsWhatsapp size={19} />
                  </div>

                  <div>
                    <p className="text-xs text-white/40">
                      WhatsApp
                    </p>

                    <p className="text-sm text-white/80">
                      +916396546520
                    </p>
                  </div>

                  <FiArrowUpRight
                    className="
                      ml-auto
                      text-white/30
                      group-hover:text-white
                      transition
                    "
                  />
                </motion.a>
              </div>

              {/* Decorative line */}
              <motion.div
                className="
                  mt-8
                  h-px
                  w-full
                  bg-gradient-to-r
                  from-transparent
                  via-purple-400/30
                  to-transparent
                "
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </div>
          </motion.div>

          {/* =================================================
              RIGHT SIDE FORM
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
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
              duration: 0.7,
              delay: 0.1,
            }}
            onMouseMove={handleMouseMove}
            className="
              relative
              rounded-3xl
              border
              border-white/[0.08]
              bg-[#090b14]/70
              backdrop-blur-2xl
              p-6
              sm:p-8
              lg:p-10
              overflow-hidden
              shadow-[0_30px_80px_rgba(0,0,0,0.35)]
            "
          >
            {/* Mouse light */}
            <motion.div
              className="
                pointer-events-none
                absolute
                inset-0
              "
              animate={{
                background: `
                  radial-gradient(
                    280px circle at
                    ${mousePosition.x}%
                    ${mousePosition.y}%,
                    rgba(139,92,246,0.12),
                    transparent 70%
                  )
                `,
              }}
              transition={{
                duration: 0.2,
              }}
            />

            {/* Top border light */}
            <div
              className="
                absolute
                top-0
                left-[10%]
                right-[10%]
                h-px
                bg-gradient-to-r
                from-transparent
                via-purple-400/50
                to-transparent
              "
            />

            {/* Form */}
            <form
              onSubmit={onSubmit}
              className="relative z-10 flex flex-col gap-5"
            >
              {/* Name */}
              <div className="group">
                <label
                  className="
                    block
                    text-xs
                    font-medium
                    text-white/60
                    mb-2
                  "
                >
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.035]
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    placeholder:text-white/25
                    outline-none
                    transition-all
                    duration-300
                    focus:border-purple-400/50
                    focus:bg-white/[0.06]
                    focus:shadow-[0_0_25px_rgba(168,85,247,0.08)]
                  "
                />
              </div>

              {/* Email */}
              <div className="group">
                <label
                  className="
                    block
                    text-xs
                    font-medium
                    text-white/60
                    mb-2
                  "
                >
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.035]
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    placeholder:text-white/25
                    outline-none
                    transition-all
                    duration-300
                    focus:border-purple-400/50
                    focus:bg-white/[0.06]
                    focus:shadow-[0_0_25px_rgba(168,85,247,0.08)]
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  className="
                    block
                    text-xs
                    font-medium
                    text-white/60
                    mb-2
                  "
                >
                  Message
                </label>

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Type your message..."
                  required
                  className="
                    w-full
                    rounded-xl
                    border
                    border-white/[0.08]
                    bg-white/[0.035]
                    px-4
                    py-3.5
                    text-sm
                    text-white
                    placeholder:text-white/25
                    outline-none
                    resize-none
                    transition-all
                    duration-300
                    focus:border-purple-400/50
                    focus:bg-white/[0.06]
                    focus:shadow-[0_0_25px_rgba(168,85,247,0.08)]
                  "
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.015,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  relative
                  overflow-hidden
                  w-full
                  rounded-xl
                  py-3.5
                  text-sm
                  font-semibold
                  text-white

                  bg-gradient-to-r
                  from-purple-600
                  via-fuchsia-500
                  to-blue-500

                  shadow-[0_10px_35px_rgba(139,92,246,0.25)]

                  transition-all
                  duration-300

                  hover:shadow-[0_10px_45px_rgba(139,92,246,0.4)]

                  cursor-pointer
                "
              >
                {/* Button shine */}
                <motion.span
                  className="
                    absolute
                    top-0
                    -left-full
                    w-1/2
                    h-full
                    bg-gradient-to-r
                    from-transparent
                    via-white/25
                    to-transparent
                    skew-x-[-20deg]
                  "
                  animate={{
                    left: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                />

                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <FiArrowUpRight size={16} />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

