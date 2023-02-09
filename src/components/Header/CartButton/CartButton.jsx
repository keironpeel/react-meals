import { useContext } from "react";
import BasketContext from "../../../store/basket-context";

const CartButton = ({ openModal }) => {
  const basketContext = useContext(BasketContext);

  return (
    <div className="flex cursor-pointer select-none gap-4 rounded-full bg-red-900 py-4 px-8 font-bold hover:bg-red-900/80">
      <span>Your Cart</span>
      <span>{basketContext.itemCount}</span>
    </div>
  );
};

export default CartButton;
