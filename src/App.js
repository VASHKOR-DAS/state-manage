import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';

// Context Api
export const CatergoryContext = createContext();

function App() {

  // siblings er moddhe data pass korte hole, state ta k higher order a rakhte hbe
  const [category, setCategory] = useState(0)

  return (

    <>

      <CatergoryContext.Provider value={[category, setCategory]}>

        <Header></Header> <br />


        <Home></Home>


        <Shipment></Shipment>

      </CatergoryContext.Provider>

    </>
  );
}

export default App;
