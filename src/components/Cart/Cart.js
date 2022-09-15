import { useEffect, useState } from "react";
import { cleanCart, deleteCartProduct, listCartProducts } from "../../services/axiosService";
import { TemplateButton } from "../../shared/styles";
import { useNavigate } from "react-router-dom";
import { CartWrapper } from "./style";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Cart () {
    const [products, setProducts] = useState([]);
    const [itemsDeleted, setItemsDeleted] = useState(0);
    let totalPrice = 0;

    const navigate = useNavigate();

    useEffect(() => {
        const promise = listCartProducts();

        promise
            .then(r => setProducts(r.data))
            .catch(e => console.log(e.message));
    }, [itemsDeleted]);

    function removeAllProducts() {
        confirmAlert({
            title: 'Confirme para deletar',
            message: `Deseja mesmo deletar todos os produtos do carrinho?`,
            buttons: [
                {
                label: 'Confirmar',
                onClick: () => {
                        const promise = cleanCart();

                        promise
                            .then(() => alert(`Todos os produtos foram deletados com sucesso`))
                            .catch(e => console.log(e.message));

                        setItemsDeleted(itemsDeleted + 1);
                    }
                },
                {
                label: 'Cancelar',
                onClick: () => {return}
                }
            ]
        });        
    }

    return (
        <CartWrapper>
            <header>
                <ion-icon name="arrow-back-outline" onClick={() => navigate('/home')}></ion-icon>
                <h1 onClick={() => navigate('/home')}>CinemaTopy</h1>
                <ion-icon name="trash-outline" onClick={removeAllProducts}></ion-icon>
            </header>
            {
                products.length === 0 ?
                "" :
                <main>
                    <h2>Carrinho</h2>
                    {
                        products.length === 0 ?
                        "" :
                        products.map(product => {
                            totalPrice += product.productDetails.price * product.amount;

                            return <CartProduct key={product.productDetails._id} product={product} itemsDeleted={itemsDeleted} setItemsDeleted={setItemsDeleted} />
                        })
                    }
                    <div className="total">
                        <span>Total</span>
                        <strong>R$ {String((totalPrice/100).toFixed(2)).replace('.', ',')}</strong>
                    </div>
                </main>
            }
            
            <TemplateButton disabled={false} spaced={true} height="45" width="300" 
            onClick={() => products.length === 0 ? navigate('/home') : navigate('/endereço')}>
                {
                    products.length === 0 ?
                    <>
                        Comprar
                        <ion-icon name="cart-outline"></ion-icon>
                    </> :
                    <>
                        Endereço
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </>
                }
            </TemplateButton>
        </CartWrapper>
    )
}

function CartProduct ({ product, itemsDeleted, setItemsDeleted }) {
    function remove() {
        confirmAlert({
            title: 'Confirme para deletar',
            message: `Deseja mesmo deletar o produto "${product.productDetails.name}" do carrinho?`,
            buttons: [
                {
                label: 'Confirmar',
                onClick: () => {
                        const promise = deleteCartProduct({ productId: product.productDetails._id });

                        promise
                            .then(() => alert(`Produto "${product.productDetails.name}" deletado com sucesso`))
                            .catch(e => console.log(e.message));

                        setItemsDeleted(itemsDeleted + 1);
                    }
                },
                {
                label: 'Cancelar',
                onClick: () => {return}
                }
            ]
        });        
    }

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
                    <ion-icon name="create-outline"></ion-icon>
                </div>
            </div>
            <div className="delete">
                <ion-icon name="trash-outline" onClick={remove}></ion-icon>
            </div>
        </div>
    )
}