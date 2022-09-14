import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../shared/globalStyles";
import PrivatePage from "../PrivatePage/PrivatePage";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Home from "../Home/Home";

export default function App() {
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home"
            element={
              <PrivatePage>
                <Home />
              </PrivatePage>
            }
          /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}
