//@ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/basketSlice";

export const ShoppingCard = () => {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.items);

  const AddingToBasket = () => {
    const newItem = {
      id: Date.now(),
      name: `name: ${Math.floor(Math.random() * 100)}`,
      price: Math.floor(Math.random() * 100),
    };
    dispatch(addItem(newItem));
  };

  const DeleteOfBasket = (id: number) => {
    dispatch(removeItem(id));
  };
  return (
    <div>
      <h2>my shopping card</h2>
      <ul>
        {basket.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => DeleteOfBasket(item.id)}>delete</button>
          </li>
        ))}
      </ul>
      <button onClick={AddingToBasket}>add</button>
    </div>
  );
};
