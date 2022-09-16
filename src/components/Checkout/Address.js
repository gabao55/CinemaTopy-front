import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { addUserPurchaseDetails } from "../../services/axiosService";
import { Auth, TemplateButton, TemplateInput } from "../../shared/styles";
import { useForm } from "../../shared/useForm";
import { CartWrapper } from "../Cart/style";
import { SelectTemplate } from "./style";

export default function Address() {
    const navigate = useNavigate();
    const [disabled, setDisabled] = useState();
    const [form, handleForm, resetForm] = useForm({
        initState: {
            state: "",
            street: "",
            number: "",
            paymentMethod: "",
            complement: "",
        }
    })

    function sendForm(e) {
        e.preventDefault();
        setDisabled(true);
        
        const promise = addUserPurchaseDetails(form);

        promise
            .then((res) => {
                navigate('/checkout', { state: res.data });
            })
            .catch(e => {
                alert('Erro ao processar dados de compra');
                console.log(e);
            });

        setDisabled(false);
    }
    
    return (
        <CartWrapper>
            <header>
                <ion-icon name="arrow-back-outline" onClick={() => navigate('/carrinho')}></ion-icon>
                <h1 onClick={() => navigate('/')}>CinemaTopy</h1>
                <ion-icon name="trash-outline" onClick={resetForm}></ion-icon>
            </header>
            <Auth disabled={disabled}>
                <form onSubmit={sendForm}>
                    <TemplateInput required type="text" name="state" value={form.state}
                    placeholder="Estado" disabled={disabled}
                    onChange={handleForm}
                    />
                    <TemplateInput required type="text" name="street" value={form.street}
                    placeholder="Rua" disabled={disabled}
                    onChange={handleForm}
                    />
                    <TemplateInput required type="number" name="number" value={form.number}
                    placeholder="Número" disabled={disabled}
                    onChange={handleForm}
                    />
                    <TemplateInput type="text" name="complement" value={form.complement}
                    placeholder="Complemento" disabled={disabled}
                    onChange={handleForm}
                    />
                    <SelectTemplate required name="paymentMethod" value={form.paymentMethod}
                    disabled={disabled} onChange={handleForm}>
                        <option value="" disabled selected>Método de pagamento</option>
                        <option value="Cartão de crédito">Cartão de crédito</option>
                        <option value="PIX">PIX</option>
                        <option value="Boleto bancário">Boleto bancário</option>
                    </SelectTemplate>
                    <TemplateButton spaced={true} disabled={disabled} height="45" width="300" type="submit" >
                        {disabled? <ThreeDots color="#ffffff" height={20} width={50}/> : 
                            <>
                                Confirmar pedido
                                <ion-icon name="chevron-forward-outline"></ion-icon>
                            </>
                        }
                    </TemplateButton>
                </form>
            </Auth>
            <p></p>
        </CartWrapper>
    )
}