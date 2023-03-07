import { useContext } from "react";
import { menuItems } from "../../../data";
import BasketContext from "../../../store/basket-context";

const ModalRow = ({ id, amount }) => {
  const determineItem = () => {
    const item = menuItems.filter((menuItem) => menuItem.id === id);
    return { ...item[0] };
  };

  const item = determineItem();

  const itemCostString = (itemCost, amount) => {
    const [euros, cents] = itemCost.split(",");
    const newEuros = euros * amount;
    const newCents = (cents * amount) / 100;
    return (newEuros + newCents).toString();
  };

  const cost = itemCostString(item.cost, amount);

  const basketContext = useContext(BasketContext);

  const handleIncrement = () => {
    basketContext.addItems(1, id);
  };

  const handleDecrement = () => {
    basketContext.removeItems(1, id);
  };

  return (
    <div className="flex items-center justify-between border-b py-6 first-of-type:pt-0">
      <div>
        <span className="text-2xl font-bold">{item.name}</span>
        <div className="flex items-center gap-4">
          <span className="font-bold text-red-900">€{cost}</span>
          <span className="rounded-xl border px-2 py-1 font-bold">
            x{amount}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="rounded-full border-2 border-red-900 py-1 px-6 font-bold text-red-900"
          onClick={handleDecrement}
        >
          -
        </button>
        <button
          className="rounded-full border-2 border-red-900 py-1 px-6 font-bold text-red-900"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ModalRow;
