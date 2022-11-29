import { FC } from "react";
import { IItemData } from "../../types";
import Detail from "../Detail/Detail";
import Total from "../Total/Total";
import "./Wrapper.css";

interface Props {
  itemData: IItemData[];
  total: number;
  deleteItem: (name: string) => void;
}

const Details: FC<Props> = ({ itemData, total, deleteItem }) => {
  const conditionalRender = itemData.some((item) => item.count) ? (
    <>
      {itemData
        .filter((item) => item.count)
        .map((item) => (
          <Detail
            key={item.name + item.count}
            name={item.name}
            count={item.count}
            price={item.price}
            deleteItem={() => deleteItem(item.name)}
          />
        ))}
      <Total total={total}/>
    </>
  ) : (
    <p>
      Order is empty<br/>Please add some items!
    </p>
  );

  return <div className="details wrapper">{conditionalRender}</div>;
};

export default Details;