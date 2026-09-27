

import { motion } from "motion/react";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";

const HeaderSocials = () => {
  const socials = [
    {
      icon: <ImLinkedin />,
      link: "https://www.linkedin.com/in/mohd-zaid-web/",
      label: "LinkedIn",
    },
    {
      icon: <BsGithub />,
      link: "https://github.com/mohdzaid-web/",
      label: "GitHub",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/zaid._.malik__/?hl=en-in",
      label: "Instagram",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-3 lg:justify-start">
      {socials.map((social, index) => (
        <motion.a
          key={social.label}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          aria-label={social.label}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.85 + index * 0.1,
          }}
          whileHover={{
            y: -4,
            scale: 1.08,
          }}
          whileTap={{ scale: 0.95 }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/50 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
        >
          {social.icon}
        </motion.a>
      ))}

      <div className="ml-2 h-px w-12 bg-gradient-to-r from-white/20 to-transparent" />
    </div>
  );
};

export default HeaderSocials;
