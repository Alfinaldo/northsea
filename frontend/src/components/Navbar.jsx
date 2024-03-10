import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdOutlineModeNight } from "react-icons/md";
import ShoppingCart from "./ShoppingCart";
import { useContext } from "react";
import { darkMode } from "../context/ContextProvider";
import { Switch } from "@/components/ui/switch";
import DropdownUser from "./section/dropdown/DropdownUser";
import axios from "axios";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(darkMode);
  const { auth, setAuth } = useContext(darkMode);
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const [isToggle, setIsToggle] = useState(window.innerWidth > 500);

  useEffect(() => {
    const handleResize = () => {
      setIsToggle(window.innerWidth > 500);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const fetchCheckAuth = async () => {
    try {
      const response = await axios.get(
        "https://northsea-server.vercel.app/api/checked-auth",
        {
          withCredentials: true,
        }
      );

      if (response.data.auth) {
        setMessage(response.data.message);
        setAuth(response.data.auth);
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    fetchCheckAuth();
  }, []);

  return (
    <div
      className={
        isDarkMode
          ? " bg-[#121212] fixed w-full top-0 z-10 border-b-[1px] border-[#363636bd]"
          : " border-b-[1px] bg-[#ffffff] fixed w-full top-0 z-10 "
      }
    >
      <div className="nav-group px-4 py-4 flex items-center justify-between">
        <div className="left">
          <div
            className={
              isDarkMode
                ? " font-bold text-3xl sm:text-4l md:text-4xl lg:text-4xl text-[#f9f9f9]"
                : " font-bold text-3xl sm:text-4l md:text-4xl lg:text-4xl text-[#363636]"
            }
          >
            Northsea
          </div>
        </div>

        <div className="dark-mode flex item-center gap-3">
          <ShoppingCart />
          <div className=" flex items-center gap-2">
            {auth ? (
              <>
                <Switch />
                <DropdownUser auth={auth} user={user} />
              </>
            ) : (
              <>
                <Switch />
                {isDarkMode ? (
                  <MdOutlineModeNight
                    className={
                      isDarkMode
                        ? "text-xl font-bold text-[#f9f9f9]"
                        : " text-xl font-bold text-[#363636]"
                    }
                  />
                ) : (
                  <CiLight className=" text-xl font-bold text-[#363636]" />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
