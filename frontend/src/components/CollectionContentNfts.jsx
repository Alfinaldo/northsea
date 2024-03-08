import ContentNfts from "./ContentNfts";
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import Footer from "./section/footer/Footer";
import { darkMode } from "@/context/ContextProvider";
import ToTop from "./section/to-top/ToTop";

const CollectionContentNfts = () => {
  const datas = useSelector((state) => state.datas_Nft.data);
  const { isDarkMode } = useContext(darkMode);

  const [selectToken, setSelectToken] = useState("all-token");
  const [sortBy, setSortBy] = useState("default");
  const [filteredData, setFilteredData] = useState([]);

  const newdatas = datas.slice(0, 50) || [];

  const handleTokenChange = (event) => {
    setSelectToken(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  useEffect(() => {
    if (selectToken === "all-token") {
      setFilteredData(newdatas);
    } else {
      const filtered = newdatas.filter(
        (item) => item.chain?.name === selectToken
      );

      let sorted;
      switch (sortBy) {
        case "a-b":
          sorted = filtered.slice().sort((a, b) => a.identifier - b.identifier);
          break;
        case "b-a":
          sorted = filtered.slice().sort((a, b) => b.identifier - a.identifier);
          break;

        default:
          sorted = filtered;
          break;
      }

      setFilteredData(sorted);
    }
  }, [selectToken, sortBy]);

  return (
    <>
      <div className=" p-5">
        <h1
          className={
            isDarkMode
              ? "text-center font-semibold text-2xl sm:text-3xl text-[#f9f9f9]"
              : " text-center font-semibold text-2xl sm:text-3xl text-[#363636]"
          }
        >
          Collection
        </h1>
        <p
          className={
            isDarkMode
              ? " text-center text-xs sm:text-sm text-[#f9f9f99d]"
              : " text-center text-xs sm:text-sm"
          }
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          voluptate fuga sed neque est facilis distinctio iste eveniet nemo
          cupiditate!
        </p>
        <div className=" mt-4 flex items-center justify-between">
          <div className="">
            <select
              className={
                isDarkMode
                  ? "bg-[#252525] py-1 px-3 text-[#f9f9f9] text-xs sm:text-sm sm:px-4 sm:py-2 outline-none rounded-sm"
                  : " bg-slate-100 py-1 px-3 text-[#363636] text-xs sm:text-sm sm:px-4 sm:py-2 outline-none rounded-sm "
              }
              value={selectToken}
              onChange={handleTokenChange}
            >
              <option value="all-token">All Token</option>
              <option value="ripple">ripple</option>
              <option value="cardano">cardano</option>
              <option value="dogecoin">dogecoin</option>
              <option value="tron">tron</option>
              <option value="uniswap">uniswap</option>
              <option value="fantom">fantom</option>
              <option value="decentraland">decentraland</option>
            </select>
          </div>
          <div className="">
            <select
              className={
                isDarkMode
                  ? "bg-[#252525] py-1 px-3 text-[#f9f9f9] text-xs sm:text-sm sm:px-4 sm:py-2 outline-none rounded-sm"
                  : " bg-slate-100 py-1 px-3 text-[#363636] text-xs sm:text-sm sm:px-4 sm:py-2 outline-none rounded-sm "
              }
              value={sortBy}
              onChange={handleSortChange}
            >
              <option value="default">Sort By</option>
              <option value="a-b">a-b</option>
              <option value="b-a">b-a</option>
            </select>
          </div>
        </div>
        <ToTop />
        <ContentNfts filteredData={filteredData} newdatas={newdatas} />
      </div>
      <Footer />
    </>
  );
};

export default CollectionContentNfts;
