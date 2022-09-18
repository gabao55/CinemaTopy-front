import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { checkout, cleanCart, listCartProducts } from "../../services/axiosService";
import { TemplateButton } from "../../shared/styles";
import { CartWrapper } from "../Cart/style";
import { UserData } from "./style";

export default function Checkout() {
    const [products, setProducts] = useState([]);
    const { state } = useLocation();
    let totalPrice = 0;

    const navigate = useNavigate();

    useEffect(() => {
        const promise = listCartProducts();

        promise
            .then(r => setProducts(r.data))
            .catch(e => console.log(e.message));
    }, []);

    function finishPurchase() {

        const productIds = [];

        products.forEach(product => {
            productIds.push({
                productId: product.productDetails._id,
                amount: product.amount,
            });
        });

        const body = {
            userId: state._id,
            products: productIds,
        };

        const promise = checkout(body);

        promise
            .then(res => {
                const promise = cleanCart();

                promise
                    .then(() => navigate("/obrigado", { state: state }))
                    .catch(e => console.log(e.message));
            })
            .catch(error => {
                alert("Erro ao finalizar compra, tente novamente");
                console.log(error);
            });
    }
    
    return (
        <CartWrapper>
            <header>
                <ion-icon name="arrow-back-outline" onClick={() => navigate('/')}></ion-icon>
                <h1 onClick={() => navigate('/')}>CinemaTopy</h1>
                <p></p>
            </header>
            <main>
                <h2>Produtos</h2>
                {
                    products.map(product => {
                    totalPrice += product.productDetails.price * product.amount;

                    return <CartProduct key={product.productDetails._id} product={product} />
                    })
                }
                <div className="total">
                    <span>Total</span>
                    <strong>R$ {String((totalPrice/100).toFixed(2)).replace('.', ',')}</strong>
                </div>
                <UserData>
                    <h2>Dados de entrega</h2>
                    <p>Nome: {state.name}</p>
                    <p>E-mail: {state.email}</p>
                    <p>Endereço: {`${state.address.street}, ${state.address.number} ${state.address.complement} - ${state.address.state}`}</p>
                    <p>Método de pagamento: {state.paymentMethod}</p>
                </UserData>
            </main>            
            <TemplateButton disabled={false} height="45" width="300" 
            onClick={finishPurchase}>
                Finalizar compra
            </TemplateButton>
        </CartWrapper>
    )
}

function CartProduct ({ product }) {

    return (
        <div className="product">
            <img src={product.productDetails.image} alt="" />
            <div className="product-specs">
                <p>{product.productDetails.name}</p>
                <span>{product.productDetails.description}</span>
            </div>
            <div className="product-costs">
                <p>R$ {String((product.productDetails.price / 100).toFixed(2)).replace(".", ",")}</p>
                <div>
                    <span>{product.amount}</span>
                </div>
            </div>
        </div>
    )
}