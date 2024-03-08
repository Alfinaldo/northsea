import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className=" bg-slate-700 mt-5 p-4 h-auto">
      <div className=" flex items-center justify-between sm:justify-evenly md:justify-evenly lg:justify-evenly">
        <div className=" text-[#f9f9f9] text-sm">
          &copy; {year} <span className=" font-semibold">Northsea</span> all
          right reverse
        </div>
        <div className=" text-[#f9f9f9] text-xl flex gap-2 sm:gap-3 md:gap-3 lg:gap-3">
          <FaInstagram />
          <FaWhatsapp />
          <FaLinkedin />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default Footer;
