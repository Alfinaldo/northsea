import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useState, useEffect, useContext } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { darkMode } from "@/context/ContextProvider";
import { Link } from "react-router-dom";

// import { Button } from "@/components/ui/button";

const ListCheckout = () => {
  const { checkout, total } = useSelector((state) => state.datas_Nft);
  const { auth } = useContext(darkMode);

  const { isDarkMode } = useContext(darkMode);

  const formattingIdr = (value) => {
    const formattedValue = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "idr",
    }).format(value);
    const trimmedValue = formattedValue.substring(0, formattedValue.length - 4);

    return trimmedValue;
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <FiShoppingBag
            style={
              isDarkMode
                ? { width: "18px", height: "18px", color: "#f9f9f99d" }
                : { width: "18px", height: "18px" }
            }
          />
        </AlertDialogTrigger>
        <AlertDialogContent className="overflow-auto">
          <AlertDialogHeader className=" h-[250px] overflow-auto">
            {checkout.map((item, index) => (
              <div
                key={index}
                className=" border flex  py-3 px-3 justify-between items-center"
              >
                <div className=" flex gap-2 items-center">
                  <img src={item.image} className=" w-12 h-12" />
                  <div>
                    <div className=" text-xs bg-slate-800 py-1 px-2 text-[#f8f8f8] rounded-[2px]">
                      # {item.identifier}
                    </div>
                    <div className=" text-sm mt-2 text-[#363636] font-semibold">
                      qty{" "}
                      <span className=" font-normal text-sm">
                        : {item.quantity}x
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" text-sm mt-2 text-[#363636]">
                    $ {item.price_usd.toFixed(4)}
                  </div>
                  <div className=" text-sm mt-2 text-[#363636]">
                    {formattingIdr(item.price_idr)}
                  </div>
                </div>
              </div>
            ))}
          </AlertDialogHeader>
          <div className="border-t-[1px]">
            <div className="  flex justify-between items-center px-2  mt-2">
              <div>Total :</div>
              <div>{formattingIdr(total)}</div>
            </div>
          </div>

          <AlertDialogFooter>
            {!auth ? (
              <div className="flex justify-end items-center gap-3 ">
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Link to="/login">
                  <button className=" bg-slate-900 text-[#ffffff] font-medium text-sm py-2 px-4 rounded-md">
                    Continue
                  </button>
                </Link>
              </div>
            ) : (
              <>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </>
            )}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ListCheckout;
