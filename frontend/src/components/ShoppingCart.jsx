import { darkMode } from "@/context/ContextProvider";
import { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import MenuShoppingCart from "./MenuShoppingCart";
import { useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetHeader,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ShoppingCart = () => {
  const { isDarkMode } = useContext(darkMode);
  const { cart } = useSelector((state) => state.datas_Nft);

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <div className=" relative">
            <FiShoppingCart
              className={
                isDarkMode
                  ? "text-xl font-bold text-[#f9f9f9]"
                  : " text-xl font-bold text-[#363636]"
              }
            />
            {cart.length > 0 ? (
              <div className=" bg-blue-500 leading-[14px] font-semibold text-xs w-[14px] h-[14px] rounded-full text-[#ffffff] absolute -top-[10px] -right-2">
                {cart.length}
              </div>
            ) : null}
          </div>
        </SheetTrigger>
        <SheetContent>
          <MenuShoppingCart />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ShoppingCart;
