import { TemplateButton } from "../../shared/styles";
import { CartWrapper } from "./style";

export default function Cart () {
    return (
        <CartWrapper>
            <header>
                <ion-icon name="arrow-back-outline"></ion-icon>
                <h1>CinemaTopy</h1>
                <ion-icon name="trash-outline"></ion-icon>
            </header>
            <main>
                <h2>Carrinho</h2>
                <div className="product">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tKpND3LMQf2oI0r1ER6Ek6GcpVGGdusyDQ&usqp=CAU" alt="" />
                    <div className="product-specs">
                        <p>Boneco do harry potter</p>
                        <span>de pano</span>
                    </div>
                    <div className="product-costs">
                        <p>R$ 35,90</p>
                        <div>
                            <span>3</span>
                            <ion-icon name="create-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6tKpND3LMQf2oI0r1ER6Ek6GcpVGGdusyDQ&usqp=CAU" alt="" />
                    <div className="product-specs">
                        <p>Boneco do harry potter</p>
                        <span>de pano</span>
                    </div>
                    <div className="product-costs">
                        <p>R$ 35,90</p>
                        <div>
                            <span>3</span>
                            <ion-icon name="create-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="total">
                    <span>Total</span>
                    <strong>R$ 79,90</strong>
                </div>
            </main>
            <TemplateButton disabled={false} spaced={true} height="45" width="300">
                Endereço
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </TemplateButton>
        </CartWrapper>
    )
}