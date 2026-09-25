import { motion } from "motion/react";
import { FiDownload } from "react-icons/fi";

const CV = () => {
  return (
    <motion.a
      href="#"
      download
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#070711] shadow-[0_0_30px_rgba(34,211,238,0.18)] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
    >
      <FiDownload className="text-base transition-transform duration-300 group-hover:translate-y-0.5" />
      Download CV
    </motion.a>
  );
};

export default CV;

