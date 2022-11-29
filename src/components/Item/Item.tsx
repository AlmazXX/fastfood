import { FC } from "react";
import "./Item.css";

interface Props {
  name: string;
  price: number;
  img: string;
  addItem: (name: string) => void;
}

const Item: FC<Props> = ({ name, price, img, addItem }) => {
  return (
    <div className="item" onClick={() => addItem(name)}>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <p>{name}</p>
        <span>Price: {price} som</span>
      </div>
    </div>
  );
};

export default Item;