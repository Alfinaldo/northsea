import { darkMode } from "@/context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardMainLeft from "./CardMainLeft";
import CardMainRight from "./CardMainRight";
import SkeletonLoader from "./SkeletonLoader";

const CardMenu = () => {
  const statusSelectors = [
    "datas_goblin",
    "datas_pararel",
    "datas_plooshies",
    "datas_lilpudgy",
    "datas_mutant",
    "datas_dinosty",
    "datas_otherdeed",
    "datas_degods",
    "datas_pudgypenguins",
    "datas_boredape",
  ].map((selector) => useSelector((state) => state[selector]?.status));

  // Memeriksa apakah ada setidaknya satu status yang 'pending'
  const isLoading = statusSelectors.some((status) => status === "pending");

  const [showLoader, setShowLoader] = useState(isLoading);
  const { isDarkMode } = useContext(darkMode);

  useEffect(() => {
    if (isLoading) {
      const timeoutId = setTimeout(() => {
        setShowLoader(false);
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
    setShowLoader(false);
  }, []);

  return (
    <div className=" mt-5 overflow-auto">
      <h3
        className={
          isDarkMode
            ? "font-bold text-[#f9f9f9] px-4 text-2xl"
            : " font-bold text-[#363636] px-4 text-2xl"
        }
      >
        Collection Nfts
      </h3>
      <div className="wrapper">
        {showLoader ? (
          <SkeletonLoader />
        ) : (
          <div className="header-table flex items-center w-full mt-4 px-4 gap-5">
            <div className=" w-full">
              <table className=" table-auto w-full relative">
                <thead className=" after:border-b-[1px] after:absolute after:content-[''] after:w-full after:mt-2">
                  <tr
                    className={
                      isDarkMode
                        ? "w-full py-3 text-[#f9f9f99d]"
                        : " w-full py-3 text-[#363636]"
                    }
                  >
                    <th className=" font-bold ">#</th>
                    <th className=" font-bold ">Collection</th>
                    <th className=" font-bold ">Floor Price</th>
                    <th className=" font-bold ">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  <CardMainLeft />
                </tbody>
              </table>
            </div>
            <div className=" w-full">
              <table className=" table-auto w-full relative">
                <thead className=" after:border-b-[1px] after:absolute after:content-[''] after:w-full after:mt-2">
                  <tr
                    className={
                      isDarkMode
                        ? "w-full py-3 text-[#f9f9f99d]"
                        : " w-full py-3 text-[#363636]"
                    }
                  >
                    <th className=" font-bold ">#</th>
                    <th className=" font-bold ">Collection</th>
                    <th className=" font-bold ">Floor Price</th>
                    <th className=" font-bold ">Volume</th>
                  </tr>
                </thead>
                <tbody>
                  <CardMainRight />
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardMenu;
