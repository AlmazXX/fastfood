import React from "react";
import "./Total.css";

interface Props {
  total: number;
}

const Total: React.FC<Props> = ({ total }) => {
  return (
    <p className="total">
      Total: <span>{total} KGS</span>
    </p>
  );
};

export default Total;