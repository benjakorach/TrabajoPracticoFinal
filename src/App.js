import { VarConstLet } from "./components/fundamentos/01-VarConstLet";
import { TemplateString } from "./components/fundamentos/02-TemplateString";

import './App.css'
import { JsFunction } from "./components/fundamentos/05-JsFunction";
import { ObjetosLiterales } from "./components/fundamentos/03-Object";
import { JsArray } from "./components/fundamentos/04-Array";

import { CardGrid } from "./components/CardGrid/CardGrid";
import { productos } from "./data/productos";
import { DesestObj } from "./components/fundamentos/06-DesestObj";
import { MiPrimerComp } from "./components/MiPrimerComp/MiPrimerComp";
import { DesestArray } from "./components/fundamentos/07-DesestArray";
import { NavBar } from "./components/NavBarPP/NavBar";
import { Footer } from "./components/Footer/Footer";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { Carrousel } from "./components/Carrousel/Carrousel";
import axios from "axios";
import {useEffect,useState} from "react";
import TableCoins from "./components/TableCoins";

function App() {

  const [coins,setCoins] = useState([])

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
        <Carrousel></Carrousel>
      <TableCoins coins={coins}/>
      <Footer></Footer>
      </div>
      </div>
  );
}

export default App;