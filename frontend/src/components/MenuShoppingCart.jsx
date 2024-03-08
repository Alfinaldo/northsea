import MenuCartContent from "./MenuCartContent";
import { useSelector, useDispatch } from "react-redux";
import { GiShoppingCart } from "react-icons/gi";
import { clearAllCartItem } from "../app/features/DatasNftsSlice";
import { darkMode } from "@/context/ContextProvider";
import { useContext, useEffect, useState } from "react";
import ListCheckout from "./section/listCheckout/ListCheckout";

const MenuShoppingCart = () => {
  const dispatch = useDispatch();
  const { data, cart, checkout } = useSelector((state) => state.datas_Nft);
  const { isDarkMode } = useContext(darkMode);

  const handleClearAllItems = () => {
    dispatch(clearAllCartItem());
  };

  return (
    <>
      <div className=" flex items-center justify-between p-5 mt-3 ">
        <div
          className={
            isDarkMode
              ? "font-semibold text-xl text-[#f9f9f99d]"
              : "font-semibold text-xl text-[#363636]"
          }
        >
          Your cart
        </div>
        <div className=" relative">
          <ListCheckout />
          {checkout.length > 0 ? (
            <div className=" absolute -top-[12px] -right-[8px] w-[14px] h-[14px] ">
              <div className=" bg-blue-500 text-center text-xs rounded-full font-semibold text-[#ffffff] ">
                {checkout.length}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <hr style={isDarkMode ? { backgroundColor: "#212121" } : null} />
      {cart.length > 0 ? (
        <>
          <div className=" flex items-center justify-between p-5 ">
            <div
              className={
                isDarkMode
                  ? " font-medium text-sm text-[#f9f9f99d]"
                  : " font-medium text-sm text-[#363636]"
              }
            >
              {cart.length} Items
            </div>
            <div
              className={
                isDarkMode
                  ? "font-medium text-sm text-[#f9f9f99d] cursor-pointer"
                  : " font-medium text-sm text-[#363636] cursor-pointer"
              }
              onClick={handleClearAllItems}
            >
              Clear all
            </div>
          </div>
          <MenuCartContent />
        </>
      ) : (
        <div className=" text-center mt-20">
          <p className={isDarkMode ? "text-[#f9f9f99d]" : " text-[#3636368f]"}>
            Add items to get started.
          </p>
          <div className=" mt-5 inline-block p-4 border rounded-full">
            <GiShoppingCart
              style={{ color: "#3636368f", width: "36px", height: "36px" }}
              className=" block mx-auto"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuShoppingCart;
