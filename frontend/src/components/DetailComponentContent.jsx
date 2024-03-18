import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  decrementQuantity,
  incerementQuantity,
} from "../app/features/DatasNftsSlice";
// import Test from "./Test";
import CheckOut from "./CheckOut";
import Footer from "./section/footer/Footer";
import { darkMode } from "@/context/ContextProvider";

const DetailComponentContent = () => {
  const order_id = uuidv4();
  const { id } = useParams();
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.datas_Nft?.data);

  const newDatas = datas.find((data) => data.identifier === id);

  const { isDarkMode } = useContext(darkMode);
  const [like, setLike] = useState(0);
  const [views, setViews] = useState(0);

  useEffect(() => {
    setViews((prevViews) => prevViews + 1);
  }, []);

  const handleClickLike = () => {
    setLike(like + 1);
  };

  const handleIncrementQuantity = (identifier) => {
    const payload = {
      identifier: identifier,
    };
    dispatch(incerementQuantity(payload));
  };

  const handleDecrementQuantity = (identifier) => {
    const payload = {
      identifier: identifier,
    };
    dispatch(decrementQuantity(payload));
  };

  const {
    chain: { name, symbol },
    price,
    quantity,
  } = newDatas;

  const [crypto, setCrypto] = useState(symbol);
  const [usd, setUsd] = useState(0);

  const idrRate = parseFloat(15740432);
  const idr = usd * idrRate;

  const fetchCrypto = async () => {
    try {
      const response = await axios.get(
        `https://northsea-server.vercel.app/api/convert/${crypto}/${price}`,
        {
          withCredentials: true,
        }
      );
      console.log(response.data);
      setCrypto(response.data.crypto_symbol);
      setUsd(response.data.usd);
    } catch (error) {
      return error;
    }
  };

  // const fakeUsd = price;
  // const fakeIdr = fakeUsd * idrRate;

  // //? Membuat object Baru
  // const newObject = {
  //   order_id: order_id,
  //   usd: usd,
  //   idr: idr,
  //   fakeUsd: fakeUsd,
  //   fakeIdr: fakeIdr,
  // };

  // //? Menggabungkan object yang baru di bikin dengan object newDatas
  // const updateDatas = {
  //   ...newDatas,
  //   newObject: newObject,
  // };

  const formattingIdr = (value) => {
    const formattedValue = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "idr",
    }).format(value);
    const trimmedValue = formattedValue.substring(0, formattedValue.length - 4);

    return trimmedValue;
  };

  useEffect(() => {
    fetchCrypto();
    // fetchUsdToIdr();
  }, [price]);

  const utcDateTimeString = "2022-07-28T07:14:25.831951";
  const utcDate = new Date(utcDateTimeString);

  // Menyesuaikan waktu UTC ke waktu Indonesia
  const options = { year: "numeric", month: "long", day: "numeric" };
  const indonesiaDateTimeString = utcDate.toLocaleString("id-ID", options);

  return (
    <>
      <div
        className={
          isDarkMode
            ? " mt-[63px] p-5 bg-[#121212] sm:mt[63px] md:mt-[73px]"
            : " mt-[63px] p-5 sm:mt[63px] md:mt-[73px]  "
        }
      >
        <div
          className={
            isDarkMode
              ? " detail-collection p-4 border border-stone-700 flex justify-between gap-4 items-center"
              : " detail-collection p-4 border flex justify-between gap-4 items-center"
          }
        >
          <div className="left w-1/2 object-contain">
            <img
              src={newDatas?.image_url}
              className=" rounded-md h-[450px] w-full"
            />
          </div>
          <div className="right w-1/2">
            <div className=" flex items-center justify-between py-3 px-4 gap-2">
              <div
                className={
                  isDarkMode
                    ? "font-medium text-[#f9f9f99d]"
                    : " font-medium text-[#363636]"
                }
              >
                {newDatas?.collection}
              </div>
              <div className=" bg-red-600 py-1 px-3 text-[#f9f9f9] text-xs rounded-md font-medium">
                # {newDatas.identifier}
              </div>
            </div>
            <div className="flex items-center py-2 px-4 gap-4">
              <img
                src={newDatas?.chain?.logo}
                style={{ width: "20px", height: "20px", color: "red" }}
              />
              <i
                className={
                  isDarkMode
                    ? "flex items-center text-xs gap-[4px] text-[#f9f9f99d]"
                    : " flex items-center text-xs gap-[1px]"
                }
              >
                <IoEyeOutline style={{ width: "20px", height: "20px" }} />
                {views} views
              </i>
              <i
                className={
                  isDarkMode
                    ? "flex items-center text-xs gap-[1px] cursor-pointer text-[#f9f9f99d]"
                    : "flex items-center text-xs gap-[1px] cursor-pointer"
                }
              >
                {like > 0 ? (
                  <i className="flex items-center text-xs gap-[1px]">
                    <IoMdHeart
                      onClick={handleClickLike}
                      style={{ width: "18px", height: "18px", color: "red" }}
                    />
                    {like}
                  </i>
                ) : (
                  <i className="flex items-center text-xs gap-[1px]">
                    <IoMdHeartEmpty
                      onClick={handleClickLike}
                      style={{ width: "18px", height: "18px" }}
                    />
                    {like}
                  </i>
                )}
              </i>
            </div>
            <div
              className={
                isDarkMode
                  ? "py-3 px-4 text-xs sm:text-sm md:text-sm lg:text-sm text-[#f9f9f99d]"
                  : " py-3 px-4 text-xs sm:text-sm md:text-sm lg:text-sm "
              }
            >
              {newDatas?.desc?.substring(0, 70)}
            </div>
            <div
              className={
                isDarkMode
                  ? "border border-stone-700 shadow-sm rounded-md"
                  : " border border-[#eceaea] shadow-sm rounded-md"
              }
            >
              <div
                className={
                  isDarkMode
                    ? "border-b-[1px] border-stone-700 p-4 text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm"
                    : " border-b-[1px] p-4 text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm "
                }
              >
                Last update : {indonesiaDateTimeString}
              </div>
              <div className=" pt-4 pb-3 px-4 flex justify-between items-center">
                <div
                  className={
                    isDarkMode
                      ? "text-[#f9f9f99d] font-normal text-xs sm:text-sm md:text-sm lg:text-sm"
                      : " text-slate-400 font-normal text-xs sm:text-sm md:text-sm lg:text-sm"
                  }
                >
                  Curent Price
                </div>
                <div className=" flex items-center gap-3">
                  <button
                    onClick={() =>
                      handleDecrementQuantity(newDatas?.identifier)
                    }
                    className={
                      isDarkMode
                        ? "text-md sm:text-xl md:text-xl lg:text-xl text-[#f9f9f9]"
                        : " text-md sm:text-xl md:text-xl lg:text-xl text-[#363636]"
                    }
                  >
                    -
                  </button>
                  <button
                    className={
                      isDarkMode
                        ? "border py-[1px] px-3 text-xs sm:text-sm md:text-sm lg:text-sm text-[#f9f9f9]"
                        : " border py-[1px] px-3 text-xs sm:text-sm md:text-sm lg:text-sm text-[#363636]"
                    }
                  >
                    {newDatas?.quantity}
                  </button>
                  <button
                    onClick={() =>
                      handleIncrementQuantity(newDatas?.identifier)
                    }
                    className={
                      isDarkMode
                        ? "text-md sm:text-xl md:text-xl lg:text-xl text-[#f9f9f9]"
                        : " text-md sm:text-xl md:text-xl lg:text-xl text-[#363636]"
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <div
                className={
                  isDarkMode
                    ? "text-[#f9f9f9] font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl pb-2 px-4"
                    : " text-[#363636] font-bold text-2xl sm:text-4xl md:text-4xl lg:text-4xl pb-2 px-4"
                }
              >
                {newDatas?.price?.toFixed(2)}{" "}
                <span className=" text-xs sm:text-sm md:text-sm lg:text-sm font-bold opacity-40">
                  {newDatas.chain.name}
                </span>
              </div>
              <div
                className={
                  isDarkMode
                    ? "pb-2 px-4 text-[#f9f9f99d] font-bold text-lg sm:text-xl md:text-xl lg:text-xl"
                    : " pb-2 px-4 text-[#36363686] font-bold text-lg sm:text-xl md:text-xl lg:text-xl"
                }
              >
                $ {usd.toFixed(4)}{" "}
                <span
                  className={
                    isDarkMode
                      ? "text-[#f9f9f99d] text-xs sm:text-sm md:text-sm lg:text-sm font-bold pl-2"
                      : " text-[#363636] text-xs sm:text-sm md:text-sm lg:text-sm font-bold pl-2"
                  }
                >
                  {formattingIdr(idr)}
                </span>
              </div>
              {/* <div className=" pb-2 px-4 text-[#363636]">
                {formattingIdr(idr)}
              </div> */}
              <CheckOut newDatas={newDatas} />
              <div
                className={
                  isDarkMode
                    ? "text-[#f9f9f99d] py-3 px-4 text-xs sm:text-sm md:text-sm lg:text-sm"
                    : " text-[#363636] py-3 px-4 text-xs sm:text-sm md:text-sm lg:text-sm"
                }
              >
                Supports creator This listing is paying the collection.
              </div>
            </div>
          </div>
        </div>
        {/* <Test /> */}
      </div>
    </>
  );
};

export default DetailComponentContent;
