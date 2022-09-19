import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../shared/globalStyles";
import PrivatePage from "../PrivatePage/PrivatePage";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Address from "../Checkout/Address";
import ProductDetails from "../ProductDetails/ProductDetails";
import ThankYouPage from "../Checkout/ThankYouPage";
import Purchase from "../Purchase/Purchase";

export default function App() {
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/produto/:id" element={<ProductDetails />} /> 
          <Route path="/carrinho"
            element={
              <PrivatePage>
                <Cart />
              </PrivatePage>
            }
          /> 
          <Route path="/compras"
            element={
              <PrivatePage>
                <Purchase />
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
          <Route path="/obrigado"
            element={
              <PrivatePage>
                <ThankYouPage />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
