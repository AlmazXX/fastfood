import React from "react";
import './Wrapper.css';

interface Props extends React.PropsWithChildren {}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
