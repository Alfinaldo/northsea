import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartByIdentifier,
  incerementQuantity,
  decrementQuantity,
  removeFromCheckoutByIdentifier,
} from "../app/features/DatasNftsSlice";

import MenuCartMapping from "./MenuCartMapping";
import MenuCartTotal from "./MenuCartTotal";

const MenuCartContent = () => {
  const dispatch = useDispatch();

  const { data, cart } = useSelector((state) => state.datas_Nft);

  const handleDeleteCart = (identifier) => {
    dispatch(deleteCartByIdentifier(identifier));
    dispatch(removeFromCheckoutByIdentifier(identifier));
  };

  const handleIncrementQuantity = (itemIdentifier) => {
    // Memanggil fungsi incrementQuantity dengan payload itemIdentifier
    dispatch(incerementQuantity({ identifier: itemIdentifier }));
  };

  const handleDecrementQuantity = (identifier) => {
    const payload = {
      identifier: identifier,
    };
    dispatch(decrementQuantity(payload));
  };

  return (
    <div>
      <div className=" px-4 h-[450px] overflow-auto">
        {cart.map((item, index) => (
          <MenuCartMapping
            item={item}
            key={index}
            handleDeleteCart={handleDeleteCart}
            handleIncrementQuantity={handleIncrementQuantity}
            handleDecrementQuantity={handleDecrementQuantity}
          />
        ))}
      </div>
      {/* <MenuCartTotal /> */}
    </div>
  );
};

export default MenuCartContent;
