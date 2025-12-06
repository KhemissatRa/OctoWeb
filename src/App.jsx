import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./compenents/Nav";
import Home from "./pages/Home";
import ProductDetais from "./pages/ProductDetais"
import ShoppingCart from "./pages/shopingCart";
import Checkout from "./pages/Checkout";
import Fouter from './compenents/Fouter'

function App() {

  return (
<div className="bg-white">
<BrowserRouter>
<Nav/>
      <Routes >
        
    <Route path="/" element={<Home/>}/>
    <Route path="/productDetais/:id" element={<ProductDetais/>}/>
         <Route path="/cart" element={<ShoppingCart/>}/>
         <Route path="/checkout" element={<Checkout/>}/>

      </Routes>
         
   <Fouter/>

    </BrowserRouter>
</div>
  )
}

export default App;

