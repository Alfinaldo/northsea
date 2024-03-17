import { useDispatch, useSelector } from "react-redux";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { addToCart } from "../app/features/DatasNftsSlice";
import Footer from "./section/footer/Footer";
import { darkMode } from "@/context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import ToTop from "./section/to-top/ToTop";

const ContentNfts = ({ filteredData }) => {
  const dispatch = useDispatch();
  const { isDarkMode } = useContext(darkMode);

  const { cart } = useSelector((state) => state.datas_Nft);
  const [buttonDisabled, setButtonDisabled] = useState([]);

  const handleDisabledButton = (identifier) => {
    setButtonDisabled((prev) => [...prev, identifier]);
  };

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
    handleDisabledButton(data);
  };

  return (
    <>
      <div className=" mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-5 lg:gap-4">
        {filteredData.map((data, index) => (
          <div
            className={
              isDarkMode
                ? "card bg-[#252525] max-w-[300px] p-3 rounded-md"
                : " card bg-slate-100 max-w-[300px] p-3 rounded-md"
            }
            key={index}
          >
            <img src={data.image_url} className=" rounded-lg " />
            <div className=" mt-3 flex justify-between items-center ">
              <p
                className={
                  isDarkMode
                    ? "collection text-sm font-medium text-[#f9f9f99d] overflow-hidden overflow-ellipsis"
                    : " collection text-sm font-medium text-[#363636] overflow-hidden overflow-ellipsis"
                }
              >
                {data.collection}
              </p>
              <p className=" btn bg-[#dc143c] py-1 px-2 font-semibold text-[10px] text-[#f9f9f9] rounded-[4px]">
                #{data.identifier}
              </p>
            </div>
            <div className=" mt-2">
              <p
                className={
                  isDarkMode
                    ? "eth text-xs text-[#f9f9f99d] font-medium"
                    : " eth text-xs text-[#363636] font-medium"
                }
              >
                {data.price} {data.chain?.name}
              </p>
            </div>
            <div className=" flex justify-between items-center mt-2 flex-wrap gap-2">
              {buttonDisabled.includes(data) ? (
                <div className="btn-cart flex gap-1 items-center bg-violet-400 opacity-50  py-1 px-3 rounded-[4px]">
                  <i>
                    <MdOutlineShoppingBag className=" text-[#f9f9f9]" />
                  </i>
                  <button
                    className=" text-[10px] sm:text-sm font-medium text-[#f9f9f9] cursor-not-allowed  "
                    onClick={() => handleAddToCart(data)}
                    disabled={buttonDisabled.includes(data)}
                  >
                    Add to cart
                  </button>
                </div>
              ) : (
                <div className="btn-cart flex gap-1 items-center bg-violet-600 py-1 px-3 rounded-[4px]">
                  <i>
                    <MdOutlineShoppingBag className=" text-[#f9f9f9]" />
                  </i>
                  <button
                    className=" text-[10px] sm:text-sm font-medium text-[#f9f9f9]  "
                    onClick={() => handleAddToCart(data)}
                    disabled={buttonDisabled.includes(data)}
                  >
                    Add to cart
                  </button>
                </div>
              )}

              <Link
                to={`/northsea/collection/${data.collection}/detail/${data.identifier}`}
                className=" underline underline-offset-4 text-blue-500 block"
              >
                <p className=" text-[11px] sm:text-sm  text-blue-500 font-normal">
                  View Details
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} /> */}
    </>
  );
};

export default ContentNfts;
