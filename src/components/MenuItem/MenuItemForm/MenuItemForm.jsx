import { useContext, useState } from "react";
import BasketContext from "../../../store/basket-context";

const MenuItemForm = ({ id }) => {
  const basketContext = useContext(BasketContext);
  const [amount, setAmount] = useState(1);

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    basketContext.addItems(parseInt(amount), id);
    setAmount(1);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex items-center gap-4">
        <label className="font-bold">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          className="w-14 rounded-md border p-2"
          value={amount}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-fit self-end rounded-full bg-red-900 py-3 px-6 font-bold text-white hover:bg-red-900/80"
      >
        + Add
      </button>
    </form>
  );
};

export default MenuItemForm;
