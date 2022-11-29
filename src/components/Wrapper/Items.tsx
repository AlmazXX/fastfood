import { FC } from "react";
import { IItem } from "../../types";
import Item from "../Item/Item";
import "./Wrapper.css";

interface Props {
  items: IItem[];
  addItem: (name: string) => void;
}

const Items: FC<Props> = ({ items, addItem }) => {
  return (
    <div className="items wrapper">
      {items.map((item) => (
        <Item
          key={item.name + item.img}
          name={item.name}
          price={item.price}
          img={item.img}
          addItem={() => addItem(item.name)}
        />
      ))}
    </div>
  );
};

export default Items;