import './App.css'
import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { Carrousel } from "./components/Carrousel/Carrousel";
import {useEffect,useState} from "react";
import TableCoins from "./components/TableCoins";
import { Routes,Route } from "react-router-dom";
import axios from "axios";


import { Home } from './components/pages/Home';
import { Pp2 } from './components/pages/pp2';


function App() {

  const [coins,setCoins]=useState([])
  const getData = async () => {
      const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
      console.log(res.data)
      setCoins(res.data)
    }
    
    useEffect(() => {
      getData()
    }, []) 

  return (
    
    <div className="container">
      <div className="row">
        <NavBar></NavBar>
        <Carrousel/>
        <TableCoins coins={coins}/>  
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/pp2" element={<Pp2/>}/>
        </Routes>

      <Footer></Footer>
      </div>
      </div>
  );
}

export default App;