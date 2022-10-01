import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

function App() {

  // siblings er moddhe data pass korte hole, state ta k higher order a rakhte hbe
  const [count, setCount] = useState(0)

  return (
    <div >
      <Header
        count={count}
        setCount={setCount}
      ></Header>

      <Home
        count={count}
        setCount={setCount}
      ></Home>

      <Shipment></Shipment>
    </div>
  );
}

export default App;
