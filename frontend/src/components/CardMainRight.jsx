import { darkMode } from "@/context/ContextProvider";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardMainRight = () => {
  const datas6 = useSelector((state) => state.datas_dinosty?.data);
  const datas7 = useSelector((state) => state.datas_shrapnel?.data);
  const datas8 = useSelector((state) => state.datas_wassies?.data);
  const datas9 = useSelector((state) => state.datas_pudgypenguins?.data);
  const datas10 = useSelector((state) => state.datas_rocks?.data);

  const { isDarkMode } = useContext(darkMode);

  return (
    <>
      <br />
      <tr>
        <td className={isDarkMode ? " text-[#f9f9f99d]" : " text-[#363636]"}>
          6
        </td>
        <td className=" py-3 px-3">
          <Link
            to={`/northsea/collection/${datas6?.collection}`}
            className=" flex items-center gap-2 w-full"
          >
            <img
              src={datas6?.image_url}
              className=" w-16 sm:w-20 md:w-20 lg:w-20 rounded-md"
            />
            <p
              className={
                isDarkMode
                  ? "font-bold text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                  : " font-bold text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm"
              }
            >
              {datas6?.collection}
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
          {datas6?.total_supply?.toString().slice(2)}&nbsp;ETH
        </td>
      </tr>

      <tr>
        <td className={isDarkMode ? " text-[#f9f9f99d]" : " text-[#363636]"}>
          7
        </td>
        <td className=" py-3 px-3">
          <Link
            to={`/northsea/collection/${datas7?.collection}`}
            className=" flex items-center gap-2 w-full"
          >
            <img
              src={datas7?.image_url}
              className=" w-16 sm:w-20 md:w-20 lg:w-20 rounded-md"
            />
            <p
              className={
                isDarkMode
                  ? "font-bold text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                  : " font-bold text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm"
              }
            >
              {datas7?.collection}
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
          {datas7?.total_supply?.toString().slice(2)}&nbsp;ETH
        </td>
      </tr>

      <tr>
        <td className={isDarkMode ? " text-[#f9f9f99d]" : " text-[#363636]"}>
          8
        </td>
        <td className=" py-3 px-3">
          <Link
            to={`/northsea/collection/${datas8?.collection}`}
            className=" flex items-center gap-2 w-full"
          >
            <img
              src={datas8?.image_url}
              className=" w-16 sm:w-20 md:w-20 lg:w-20 rounded-md"
            />
            <p
              className={
                isDarkMode
                  ? "font-bold text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                  : " font-bold text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm"
              }
            >
              {datas8?.collection?.toString().slice(0, 7) +
                "-" +
                datas8?.collection?.toString().slice(7, 9) +
                "-" +
                datas8?.collection?.toString().slice(9, 16)}
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
          {datas8?.total_supply?.toString().slice(2)}&nbsp;ETH
        </td>
      </tr>

      <tr>
        <td className={isDarkMode ? " text-[#f9f9f99d]" : " text-[#363636]"}>
          9
        </td>
        <td className=" py-3 px-3">
          <Link
            to={`/northsea/collection/${datas9?.collection}`}
            className=" flex items-center gap-2 w-full"
          >
            <img
              src={datas9?.image_url}
              className=" w-16 sm:w-20 md:w-20 lg:w-20 rounded-md"
            />
            <p
              className={
                isDarkMode
                  ? "font-bold text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                  : " font-bold text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm"
              }
            >
              {datas9?.collection?.toString().slice(0, 5) +
                "-" +
                datas9?.collection?.toString().slice(5, 13)}
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
          {datas9?.total_supply?.toString().slice(2)}&nbsp;ETH
        </td>
      </tr>
      <tr>
        <td className={isDarkMode ? " text-[#f9f9f99d]" : " text-[#363636]"}>
          10
        </td>
        <td className=" py-3 px-3">
          <Link
            to={`/northsea/collection/${datas10?.collection}`}
            className=" flex items-center gap-2 w-full"
          >
            <img
              src={datas10?.image_url}
              className=" w-16 sm:w-20 md:w-20 lg:w-20 rounded-md"
            />
            <p
              className={
                isDarkMode
                  ? "font-bold text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                  : " font-bold text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm"
              }
            >
              {datas10?.collection}
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
          {datas10?.total_supply?.toString().slice(2)}&nbsp;ETH
        </td>
      </tr>
    </>
  );
};

export default CardMainRight;
