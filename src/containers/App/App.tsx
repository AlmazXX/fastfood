import React, { useMemo, useState } from "react";
import "./App.css";
import drink from "../../assets/icons8-cafe-48.png";
import food from "../../assets/icons8-restaurant-64.png";
import Details from "../../components/Wrapper/Details";
import Items from "../../components/Wrapper/Items";
const ITEMS = [
  { name: "Hamburger", price: 80, img: food, count: 0 },
  { name: "Cheeseburger", price: 90, img: food, count: 0 },
  { name: "Fries", price: 45, img: food, count: 0 },
  { name: "Coffee", price: 70, img: drink, count: 0 },
  { name: "Tea", price: 50, img: drink, count: 0 },
  { name: "Cola", price: 40, img: drink, count: 0 },
];

function App() {
  const [itemData, setItemCount] = useState([
    { name: "Hamburger", price: 0, count: 0 },
    { name: "Cheeseburger", price: 0, count: 0 },
    { name: "Fries", price: 0, count: 0 },
    { name: "Coffee", price: 0, count: 0 },
    { name: "Tea", price: 0, count: 0 },
    { name: "Cola", price: 0, count: 0 },
  ]);

  const total = useMemo(
    () => itemData.reduce((acc, item) => acc + item.price, 0),
    [itemData]
  );

  const addItem = (name: string) => {
    setItemCount((prev) =>
      prev.map((item) => {
        const itemCopy = { ...item };
        if (item.name === name) {
          itemCopy.count = item.count + 1;
          itemCopy.price =
            itemCopy.count *
            ITEMS.reduce((acc, i) => {
              if (i.name === name) {
                return acc + i.price;
              }
              return acc;
            }, 0);
        }
        return itemCopy;
      })
    );
  };

  const deleteItem = (name: string) => {
    setItemCount((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, count: 0, price: 0 } : item
      )
    );
  };

  return (
    <div className="App">
      <Details itemData={itemData} deleteItem={deleteItem} total={total} />
      <Items items={ITEMS} addItem={addItem} />
    </div>
  );
}

export default App;