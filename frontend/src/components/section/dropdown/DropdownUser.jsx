import { FaHamburger } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Switch } from "@radix-ui/react-switch";
import { darkMode } from "@/context/ContextProvider";
import { useContext, useState } from "react";
import axios from "axios";

const DropdownUser = ({ auth, user }) => {
  const { isDarkMode } = useContext(darkMode);
  const [message, setMessage] = useState("");

  const split = user.split("");
  const userr = split.shift();

  console.log(message);

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://northsea-server.vercel.app/api/logout",
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      localStorage.removeItem("user");
      window.location.reload();
      setMessage(response.data.message);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {auth && (
          <div className=" bg-gray-300 font-bold py-1 px-2 text-sm rounded-full text-[#363636]">
            {userr?.toUpperCase()}
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className={
          isDarkMode
            ? "w-[200px] h-[100px] mt-2 p-3 bg-[#121212] border border-stone-600"
            : "w-[200px] h-[100px] mt-2 p-3 bg-[#ffffff] border"
        }
      >
        <div className=" flex items-center gap-3">
          <div className=" bg-gray-300 rounded-full py-2 px-3 font-bold text-[#363636]">
            {userr?.toUpperCase()}
          </div>
          <div className=" text-sm ">
            <div className={isDarkMode ? "text-[#f7f7f7] italic" : " italic"}>
              welcome
            </div>
            <div className=" font-medium text-red-400">{user + 1234}</div>
          </div>
        </div>

        <div
          onClick={handleLogout}
          className=" flex items-center justify-between border-t-[1px] mt-2 py-2 cursor-pointer"
        >
          <div
            className={
              isDarkMode
                ? "text-center text-sm text-[#f7f7f7] font-normal"
                : " text-center text-sm text-[#363636] font-normal "
            }
          >
            Logout
          </div>
          <MdLogout style={isDarkMode ? { color: "#f7f7f7" } : {}} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownUser;
