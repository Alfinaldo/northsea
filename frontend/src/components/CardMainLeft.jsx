import { darkMode } from "@/context/ContextProvider";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardMainLeft = () => {
  const datas1 = useSelector((state) => state.datas_goblin?.data);
  const datas2 = useSelector((state) => state.datas_pararel?.data);
  const datas3 = useSelector((state) => state.datas_plooshies?.data);
  const datas4 = useSelector((state) => state.datas_lilpudgy?.data);
  const datas5 = useSelector((state) => state.datas_sappy?.data);

  // let arrays = Array(5).fill()

  const { isDarkMode } = useContext(darkMode);

  return (
    <>
      <br />
      <tr className="">
        <td className={isDarkMode ? "text-[#f9f9f99d]" : " text-[#363636]"}>
          1
        </td>
        <td className=" py-3 px-3">
          <Link
            to={`/collection/${datas1?.collection}`}
            className=" flex items-center gap-2 w-full"
          >
            <img
              src={datas1?.image_url}
              className=" w-16 sm:w-20 md:w-20 lg:w-20 rounded-md"
            />
            <p
              className={
                isDarkMode
                  ? "font-bold text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                  : " font-bold text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm"
              }
            >
              {datas1?.collection?.toString().slice(0, 6) +
                "-" +
                datas1?.collection?.toString().slice(6, 10)}
            </p>
          </Link>
        </td>
        <td
          className={
            isDarkMode
              ? "text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#f9f9f99d]"
              : " text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#363636]"
          }
        >
          1.24 ETH
        </td>
        <td
          className={
            isDarkMode
              ? "text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#f9f9f99d]"
              : " text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#363636]"
          }
        >
          {datas1?.total_supply?.toString().slice(2)}&nbsp;ETH
        </td>
      </tr>
      <tr>
        <td className={isDarkMode ? "text-[#f9f9f99d]" : " text-[#363636]"}>
          2
        </td>
        <td className=" py-3 px-3">
          <Link
            to={`/collection/${datas2?.collection}`}
            className=" flex items-center gap-2 w-full"
          >
            <img
              src={datas2?.image_url}
              className=" w-16 sm:w-20 md:w-20 lg:w-20 rounded-md "
            />
            <p
              className={
                isDarkMode
                  ? "font-bold text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                  : " font-bold text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm"
              }
            >
              {datas2?.collection?.toString().slice(0, 8) +
                "-" +
                datas2?.collection?.toString().slice(8, 18)}
            </p>
          </Link>
        </td>
        <td
          className={
            isDarkMode
              ? "text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#f9f9f99d]"
              : " text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#363636]"
          }
        >
          0.07 ETH
        </td>
        <td
          className={
            isDarkMode
              ? "text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#f9f9f99d]"
              : " text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#363636]"
          }
        >
          {datas2?.total_supply?.toString().slice(2)}&nbsp;ETH
        </td>
      </tr>

      <tr>
        <td className={isDarkMode ? "text-[#f9f9f99d]" : " text-[#363636]"}>
          3
        </td>
        <td className=" py-3 px-3">
          <Link
            to={`/collection/${datas3?.collection}`}
            className=" flex items-center gap-2 w-full"
          >
            <img
              src={datas3?.image_url}
              className=" w-16 sm:w-20 md:w-20 lg:w-20 rounded-md"
            />
            <p
              className={
                isDarkMode
                  ? "font-bold text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                  : " font-bold text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm"
              }
            >
              {datas3?.collection?.toString().slice(0, 3) +
                "-" +
                datas3?.collection?.toString().slice(3, 12)}
            </p>
          </Link>
        </td>
        <td
          className={
            isDarkMode
              ? "text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#f9f9f99d]"
              : " text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#363636]"
          }
        >
          0.67 ETH
        </td>
        <td
          className={
            isDarkMode
              ? "text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#f9f9f99d]"
              : " text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#363636]"
          }
        >
          {datas3?.total_supply?.toString().slice(2)}&nbsp;ETH
        </td>
      </tr>

      <tr>
        <td className={isDarkMode ? "text-[#f9f9f99d]" : " text-[#363636]"}>
          4
        </td>
        <td className=" py-3 px-3">
          <Link
            to={`/collection/${datas4?.collection}`}
            className=" flex items-center gap-2 w-full"
          >
            <img
              src={datas4?.image_url}
              className=" w-16 sm:w-20 md:w-20 lg:w-20 rounded-md"
            />
            <p
              className={
                isDarkMode
                  ? "font-bold text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                  : " font-bold text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm"
              }
            >
              {datas4?.collection}
            </p>
          </Link>
        </td>
        <td
          className={
            isDarkMode
              ? "text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#f9f9f99d]"
              : " text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#363636]"
          }
        >
          0.90 ETH
        </td>
        <td
          className={
            isDarkMode
              ? "text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#f9f9f99d]"
              : " text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#363636]"
          }
        >
          {datas4?.total_supply?.toString().slice(2)}&nbsp;ETH
        </td>
      </tr>
      <tr>
        <td className={isDarkMode ? "text-[#f9f9f99d]" : " text-[#363636]"}>
          5
        </td>
        <td className=" py-3 px-3">
          <Link
            to={`/collection/${datas5?.collection}`}
            className=" flex items-center gap-2 w-full"
          >
            <img
              src={datas5?.image_url}
              className=" w-16 sm:w-20 md:w-20 lg:w-20 rounded-md"
            />
            <p
              className={
                isDarkMode
                  ? "font-bold text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                  : " font-bold text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm"
              }
            >
              {datas5?.collection}
            </p>
          </Link>
        </td>
        <td
          className={
            isDarkMode
              ? "text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#f9f9f99d]"
              : " text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#363636]"
          }
        >
          1.15 ETH
        </td>
        <td
          className={
            isDarkMode
              ? "text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#f9f9f99d]"
              : " text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-[#363636]"
          }
        >
          {datas5?.total_supply?.toString().slice(2)}&nbsp;ETH
        </td>
      </tr>
    </>
  );
};

export default CardMainLeft;
