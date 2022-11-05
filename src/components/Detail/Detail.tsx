import React from 'react';
import './Detail.css';

interface Props {
  name: string;
  count: number;
  price: number;
  deleteItem: (name: string) => void;
}

const Detail: React.FC<Props> = (props) => {
  return (
    <div className='detail'>
      <p>{props.name}</p>
      <div className='detailData'>
        <span>x {props.count}</span>
        <span>{props.price} KGS</span>
        <button onClick={() => props.deleteItem(props.name)}>X</button>
      </div>
    </div>
  );
};

export default Detail;