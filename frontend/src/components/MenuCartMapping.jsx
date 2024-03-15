import axios from "axios";
import { useEffect, useState, useContext } from "react";
// import MenuCartTotal from "./MenuCartTotal";
import { IoTrashOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import MenuCartTotal from "./MenuCartTotal";
import { addNewObject, UpdateTotal } from "@/app/features/DatasNftsSlice";
import pulse from "@/assets/pulse.gif";
import { darkMode } from "@/context/ContextProvider";

const MenuCartMapping = ({
  item,
  handleDeleteCart,
  handleIncrementQuantity,
  handleDecrementQuantity,
}) => {
  const dispatch = useDispatch();

  const checkoutArray = useSelector((state) => state.datas_Nft.checkout);
  const { isDarkMode } = useContext(darkMode);

  const {
    chain: { name, logo, symbol },
    price,
    quantity,
  } = item;

  const handleClick = (identifier) => {
    const existingItemIndex = checkoutArray.findIndex(
      (item) => item.identifier === identifier
    );

    if (existingItemIndex !== -1) {
      // jika di dalam vaiabel checkoutArray ada identifier yang sama lakukan ini
      const updatedCheckoutArray = [...checkoutArray];
      const updatedItem = { ...updatedCheckoutArray[existingItemIndex] }; // Klona objek
      updatedItem.quantity += quantity;
      updatedItem.price_usd += usd;
      updatedItem.price_idr += idr;
      updatedCheckoutArray[existingItemIndex] = updatedItem;

      dispatch(addNewObject(updatedCheckoutArray));
      dispatch(UpdateTotal(idr));
    } else {
      // jika identifier tidak ada yang sama di dalam variable checkoutArray tampilkan ini dan buat object baru
      const newObject = {
        identifier: identifier,
        order_id: item.order_id,
        name: item.collection,
        price_usd: usd,
        price_idr: idr,
        image: item.image_url,
        quantity: quantity,
        chain_name: name,
        chain_logo: logo,
        chain_symbol: symbol,
      };

      dispatch(addNewObject([...checkoutArray, newObject]));
    }

    dispatch(UpdateTotal(idr));
    handleDisableButton(identifier);
  };

  const [crypto, setCrypto] = useState(symbol);
  const [usd, setUsd] = useState(0);

  const idrRate = parseFloat(15740432);
  const idr = usd * idrRate;

  const fetchCrypto = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/convert/${crypto}/${price}`,
        {
          withCredentials: true,
        }
      );
      setCrypto(response.data.crypto_symbol);
      setUsd(response.data.usd);
    } catch (error) {
      return error;
    }
  };

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState([]);

  const handleDisableButton = (identifier) => {
    setButtonDisabled((prev) => [...prev, identifier]);
  };

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

  return (
    <>
      <div
        className={
          isDarkMode
            ? "border border-[#f9f9f973] p-2 mb-4 shadow-sm"
            : " border p-2 mb-4 shadow-sm"
        }
      >
        <div className=" flex justify-between items-center">
          <div className=" flex items-center gap-2 ">
            <img
              src={item.image_url}
              style={{ width: "50px", height: "50px" }}
            />
            <div>
              <div
                className={
                  isDarkMode
                    ? "text-[#f9f9f99d] font-medium text-sm"
                    : " text-sm text-[#363636] font-medium"
                }
              >
                #{item.identifier}
              </div>
              <div
                className={
                  isDarkMode
                    ? " text-sm text-[#f9f9f99d] font-medium"
                    : " text-sm text-[#363636] font-medium"
                }
              >
                {item.collection}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              className={isDarkMode ? "text-[#f9f9f99d]" : ""}
              onClick={() => handleDecrementQuantity(item.identifier)}
            >
              -
            </button>
            <button
              className={
                isDarkMode
                  ? "border py-[1px] px-3 text-sm text-[#f9f9f99d]"
                  : " border py-[1px] px-3 text-sm text-[#363636]"
              }
            >
              {item.quantity}
            </button>
            <button
              className={isDarkMode ? "text-[#f9f9f99d]" : ""}
              onClick={() => {
                handleIncrementQuantity(item.identifier);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className=" flex justify-end">
          <IoTrashOutline
            style={
              isDarkMode
                ? {
                    width: "14px",
                    height: "14px",
                    color: "#f9f9f99d",
                    cursor: "pointer",
                    display: "block",
                  }
                : { color: "null", width: "14px", height: "14px" }
            }
            onClick={() => {
              handleDeleteCart(item.identifier);
            }}
          />
        </div>
        <div>
          <div
            className={
              isDarkMode
                ? "flex justify-between mt-2 text-xs text-[#f9f9f99d]"
                : " flex justify-between mt-2 text-xs text-[#363636]"
            }
          >
            <div>
              {item.price?.toFixed(2)}
              {item.chain?.name}
            </div>
            <div>
              {errorMessage ? (
                <>
                  <img src={pulse} className=" h-7 " />
                  <img src={pulse} className=" h-7 " />
                </>
              ) : (
                <>
                  <div>$ {usd.toFixed(5)}</div>
                  <div className=" mt-1">{formattingIdr(idr)}</div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className=" mb-2 mt-2">
          <MenuCartTotal
            idr={idr}
            handleClick={handleClick}
            item={item}
            buttonDisabled={buttonDisabled}
          />
        </div>
      </div>
    </>
  );
};

export default MenuCartMapping;
