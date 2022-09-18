import { useLocation, useNavigate } from "react-router-dom";
import { TemplateButton } from "../../shared/styles";
import { CartWrapper } from "../Cart/style";

export default function ThankYouPage() {
    const navigate = useNavigate();
    const { state } = useLocation();

    return (
        <CartWrapper>
            <header>
                <p></p>
                <h1 onClick={() => navigate('/')}>CinemaTopy</h1>
                <p></p>
            </header>
            <main>
                <h2>Obrigado por comprar, {state.name}. Informações da compra serão enviadas ao email registrado.</h2>
            </main>            
            <TemplateButton disabled={false} height="45" width="300" 
            onClick={() => navigate('/')}>
                Home
            </TemplateButton>
        </CartWrapper>
    )
}