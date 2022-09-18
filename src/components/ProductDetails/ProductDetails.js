import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productDetails, addProduct } from "../../services/axiosService";
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

  function addToCart(id){
    if(auth){
      const promise = addProduct({productId: id, amount: 1});
        promise
            .then( () => alert("Produto adicionado!"))
            .catch(() => alert("Produto já está no carrinho!")); 
    }else {
      alert("Faça o login para poder adicionar o item");
    }  
  } 

  let stars = [];
  for(let i=0; i<product.rating; i++){
  stars.push("star");
  }
  
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
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name} />
                <div>
                    <div>
                        <p>{stars.map((el, i) => {
                            return <ion-icon key={i} name="star"></ion-icon>;
                        })}</p>
                    </div>
                    <h3>R$ {(product.price/100).toFixed(2)}</h3>
                </div>
                <h4>Adicionar ao Carrinho</h4>
                <ion-icon onClick={() => addToCart(product._id)} name="add-circle"></ion-icon>
                <h4>Fabricante</h4>
                <p>{product.producer}</p>
                <h4>Descrição</h4>
                <p>{product.description}</p>
            </Item>
    </HomeBG>
    );
}