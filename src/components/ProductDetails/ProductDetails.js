import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productDetails } from "../../services/axiosService";
import { HomeBG, Item } from "./style";

export default function ProductDetails() {

  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("CinemaTopy"));
  const [product, setProduct] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    const promise = productDetails(id);
        promise
            .then(r => setProduct(r.data))
            .catch(e => console.log(e.message));
    // eslint-disable-next-line
  },[]);

  function logout(){
    localStorage.clear("CinemaTopy");
    navigate("/");
  }

  /* function addToCart(id){
    if(auth){
      const promise = addProduct({productId: id, amount: 1});
        promise
            .then( () => alert("Produto adicionado!"))
            .catch(() => alert("Produto já está no carrinho!")); 
    }else {
      alert("Faça o login para poder adicionar o item");
    }  
  } */

  console.log(product);
  
    return (
      <HomeBG>
            <header>
                {auth? <ion-icon name="cart" onClick={() => navigate("/carrinho") } ></ion-icon> 
                : <ion-icon name="add-circle-outline" onClick={() => navigate("/cadastro")} ></ion-icon>
                }
                <h1 onClick={() => navigate('/')}>CinemaTopy</h1>
                {auth? <ion-icon name="log-out-outline" onClick={logout} ></ion-icon> 
                : <ion-icon name="log-in-outline" onClick={() => navigate("/login")} ></ion-icon>
                }
            </header>
            <Item>
                <img src={product.image} alt={product.name} />
            </Item>
    </HomeBG>
    );
}