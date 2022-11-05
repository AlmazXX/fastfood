import React, { useState } from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import './App.css';

function App() {
  const [items, setItems] = useState([]);


  return (
    <div className="App">
      <Wrapper>Hello</Wrapper>
      <Wrapper>World</Wrapper>
    </div>
  );
}

export default App;
