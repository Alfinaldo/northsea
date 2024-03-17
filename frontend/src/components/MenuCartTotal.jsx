import { darkMode } from "@/context/ContextProvider";
import { useContext } from "react";

const MenuCartTotal = ({ handleClick, buttonDisabled, item }) => {
  const { isDarkMode } = useContext(darkMode);

  return (
    <>
      <button
        onClick={() => handleClick(item.identifier)}
        disabled={buttonDisabled.includes(item.identifier)}
        className={
          isDarkMode
            ? buttonDisabled.includes(item.identifier)
              ? "block mx-auto mt-3 w-[70%] bg-gray-500 text-sm py-2 px-4 rounded-md text-[#f9f9f9]"
              : "block mx-auto mt-3 w-[70%] bg-gray-800 text-sm py-2 px-4 rounded-md text-[#f9f9f9]"
            : buttonDisabled.includes(item.identifier)
            ? "block mx-auto mt-3 w-[70%] bg-gray-300 text-sm py-2 px-4 rounded-md text-[#f9f9f9]"
            : "block mx-auto mt-3 w-[70%] bg-gray-600 text-sm py-2 px-4 rounded-md text-[#f9f9f9]"
        }
      >
        Checkout
      </button>
    </>
  );
};

export default MenuCartTotal;
