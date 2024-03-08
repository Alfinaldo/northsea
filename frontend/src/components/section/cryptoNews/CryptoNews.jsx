import { darkMode } from "@/context/ContextProvider";
import { useContext } from "react";
import { useSelector } from "react-redux";

const CryptoNews = () => {
  const { data } = useSelector((state) => state.datas_CyptoNews);
  const { isDarkMode } = useContext(darkMode);

  const newDatas = data.slice(7, 14);

  function formatDateToIndonesian(dateTimeString) {
    const date = new Date(dateTimeString);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("id-ID", options);
  }

  return (
    <>
      <div className=" px-5 h-full mt-14">
        <div
          className={
            isDarkMode
              ? "font-bold text-xl text-[#f9f9f9]"
              : " font-bold text-xl text-[#363636]"
          }
        >
          Latest Crypto News
        </div>
        <div className=" mt-3 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 sm:gap-x-5 md:grid-cols-3 md:gap-x-5 md:gap-y-10 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-12">
          {newDatas.map((item, index) => (
            <div
              className=" border border-slate-50/20 rounded-[8px] overflow-hidden shadow-md max-w-80 h-[245px] lg:h-[275px] md:h-[245px] "
              key={index}
            >
              <div className=" h-[120px] lg:h-[150px] md:-[150px] w-full bg-[#f9f9f9] relative">
                <img
                  src={item.urlToImage}
                  className=" w-full h-full block absolute"
                />
              </div>
              <div
                className={
                  isDarkMode
                    ? "py-2 px-4 text-[#f9f9f99d] text-sm truncate"
                    : " py-2 px-4 text-[#363636] text-sm truncate "
                }
              >
                {item.content?.substring(0, 100)}
              </div>
              <div
                className={
                  isDarkMode
                    ? "text-[#f9f9f99d] text-xs mt-1 px-4 font-semibold lg:text-sm md:text-sm"
                    : " text-[#363636] text-xs mt-1 px-4 font-semibold lg:text-sm md:text-sm"
                }
              >
                {item.source?.name}
              </div>
              <div
                className={
                  isDarkMode
                    ? "text-[#f9f9f99d] text-xs mt-1 px-4 lg:text-sm md:text-sm"
                    : " text-[#363636] text-xs mt-1 px-4 lg:text-sm md:text-sm"
                }
              >
                {formatDateToIndonesian(item.publishedAt)}
              </div>
              <div className=" text-blue-500 text-xs float-right px-4 mt-4 lg:text-sm md:text-sm lg:mt-2 md:mt-2">
                <a href={item.url}>Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CryptoNews;
