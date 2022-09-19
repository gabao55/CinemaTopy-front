import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { listPurchases } from "../../services/axiosService";
import { HomeBG} from "./style";

export default function Purchase() {

  const [purchases, setPurchases] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    list();
  },[]);

  function list() {
    const promise = listPurchases();
        promise
            .then(r => setPurchases(r.data))
            .catch(e => console.log(e.message));
  }

  function logout(){
    localStorage.clear("CinemaTopy");
    navigate("/");
  }

  /* async function  imageProduct(id){
    const promise = productDetails(id); 
    let aux;
        await promise
            .then(r => aux = r.data)
            .catch(e => console.log(e.message));
        return aux;
  } */

  if(!purchases){
    return <>Você ainda não possui compras</>;
  }

  console.log(purchases)

    return (
        <HomeBG>
            <header>
                <ion-icon name="cart" onClick={() => navigate("/carrinho") } ></ion-icon> 
                <h1 onClick={() => navigate('/')}>CinemaTopy</h1>
                <ion-icon name="log-out-outline" onClick={logout} ></ion-icon> 
            </header>
            <div>
                <h2><span>Nome:</span> {purchases.name}</h2>
                <h2><span>E-mail:</span> {purchases.email}</h2>
                <h2><span>Pagamento:</span> {purchases.paymentMethod}</h2>
                <br />
                <h2><span>Endereço:</span></h2>
                <h2>{purchases.address.street}, nº {purchases.address.number}</h2>
                <h2>{purchases.address.complement}</h2>
                <h2>{purchases.address.state}</h2>
                <br />
                <h2><span>Compras:</span></h2>
                


            </div>
            
            
        </HomeBG>
    );
}