import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../shared/globalStyles";
import PrivatePage from "../PrivatePage/PrivatePage";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Address from "../Checkout/Address";

export default function App() {
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/carrinho"
            element={
              <PrivatePage>
                <Cart />
              </PrivatePage>
            }
          /> 
          <Route path="/endereco"
            element={
              <PrivatePage>
                <Address />
              </PrivatePage>
            }
          /> 
          <Route path="/checkout"
            element={
              <PrivatePage>
                <Checkout />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
