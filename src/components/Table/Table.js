import React from "react";
import "./table.css";



export const Table = () => {
    return (
        <table class="table" id="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Moneda</th>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Precio</th>
            <th scope="col">Capitalizacion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td><a href="data\btc\btc.html">Bitcoin (BTC)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$20.000</td>
            <td>$383.550.517.200 </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td><a href="data\eth\eth.html">Ethereum (ETH)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$1491</td>
            <td>$179.575.511.475 </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td><a href="data\usdt\usdt.html">Tether (USDT)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
         
            <td>$1</td>
            <td>$67.573.063.162 </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td><a href="data\usdc\usdc.html">USD Coin (USDC) </a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$1</td>
            <td>$52.173.100.246 </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td><a href="data\bnb\bnb.html">BNB (BNB)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$282</td>
            <td>$46.112.587.047 </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td><a href="data\busd\busd.html">Binance USD (BUSD)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$1</td>
            <td>$19.174.330.946 </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td><a href="data\xrp\xrp.html">XRP (XRP)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$0,337</td>
            <td>$16.704.132.935 </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td><a href="data\ada\ada.html">Cardano (ADA)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$0,445</td>
            <td>$15.102.395.322 </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td><a href="data\sol\sol.html">Solana (SOL)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$31,89</td>
            <td>$11.154.828.836 </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td><a href="data\doge\doge.html">Dogecoin (DOGE)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$0,064</td>
            <td>$8.548.241.819 </td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td><a href="data\dot\dot.html">Polkadot (DOT)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$7,09</td>
            <td>$8.138.120.753 </td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td><a href="data\matic\matic.html">Polygon (MATIC)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$0,82</td>
            <td>$6,495,857,669 </td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td><a href="data\dai\dai.html">Dai (DAI)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$1</td>
            <td>$6,873,459,640</td>
          </tr>
          <tr>
            <th scope="row">14</th>
            <td><a href="data\shib\shib.html">Shiba inu (SHIB)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$0.000001169</td>
            <td>$5,898,150,109

            </td>
          </tr>
          <tr>
            <th scope="row">15</th>
            <td><a href="data\trx\trx.html">TRON (TRX)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$0,062</td>
            <td>$5,542,007,083

            </td>
          </tr>
          <tr>
            <th scope="row">16</th>
            <td><a href="data\avax\avax.html">Avalanche (AVAX)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$18,23</td>
            <td>$4,975,455,661

            </td>
          </tr>
          <tr>
            <th scope="row">17</th>
            <td><a href="data\wbtc\wbtc.html">Wrapped Bitcoin (WBTC)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$19.925,25</td>
            <td>$4,761,419,626

            </td>
          </tr>
          <tr>
            <th scope="row">18</th>
            <td><a href="data\etc\etc.html"> Ethereum Classic (ETC)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$33,28</td>
            <td>$4,004,820,631

            </td>
          </tr>
          <tr>
            <th scope="row">19</th>
            <td><a href="data\atom\atom.html">Cosmos (ATOM)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$15,61</td>
            <td>$4,247,233,568

            </td>
          </tr>
          <tr>
            <th scope="row">20</th>
            <td><a href="data\uni\uni.html">Uniswap (UNI)</a></td>
            <td><div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-success">Buy</button>
            <button type="button" class="btn btn-danger">Sell</button>
            </div></td>
            <td>$5,88</td>
            <td>$4,122,799,395

            </td>
          </tr>
        </tbody>
      </table>
    )
}