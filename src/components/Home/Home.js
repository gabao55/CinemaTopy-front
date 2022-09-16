import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProduct, listProducts } from "../../services/axiosService";
import { HomeBG, Itens } from "./style";

export default function Home() {

  const navigate = useNavigate();
  const auth = JSON.parse(localStorage.getItem("CinemaTopy"));
  const [itens, setItens] = useState([]);

  useEffect(() => {
    const promise = listProducts();
        promise
            .then(r => setItens(r.data))
            .catch(e => console.log(e.message));
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
            .catch(e => console.log(e.message)); 
    }else {
      alert("Faça o login para poder adicionar o item");
    }  
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
            {itens.map( (e, index) => {
              let stars = [];
              for(let i=0; i<e.rating; i++){
                stars.push("gambiarra"); // mudar isso!
              }
              return (
                <Itens key={index} >
                  <h2>{e.name}</h2>
                  <img src={e.image} alt={e.name} />
                  <div>
                    <div>
                      <h3>R$ {(e.price/100).toFixed(2)}</h3>
                      <p>{stars.map((el, i) => {
                        return <ion-icon key={i} name="star"></ion-icon>;
                      })}</p>
                    </div>
                    <ion-icon onClick={() => addToCart(e._id)} name="add-circle"></ion-icon>
                  </div>
                  
                </Itens>
              );
            })}
      </HomeBG>
    );
}