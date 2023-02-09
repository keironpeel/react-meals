import React, { useState, useEffect } from "react";
import { menuItems } from "../data";

const BasketContext = React.createContext({
  contents: [],
  itemCount: 0,
  addItems: () => {},
});

export const BasketContextProvider = (props) => {
  const [cartContents, setCartContents] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const addItems = (amount, itemId) => {
    setItemCount((prevState) => {
      return prevState + amount;
    });

    setCartContents((prevState) => {
      if (prevState.filter((item) => item.id === itemId).length > 0) {
        const itemIndex = prevState.findIndex((item) => item.id === itemId);
        const newItem = {
          id: itemId,
          amount: prevState[itemIndex].amount + amount,
        };
        const newArray = prevState.map((item) =>
          item.id === itemId ? newItem : item
        );
        return newArray;
      } else {
        return [...prevState, { id: itemId, amount: amount }];
      }
    });
  };

  return (
    <BasketContext.Provider
      value={{
        contents: cartContents,
        itemCount: itemCount,
        addItems: addItems,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
