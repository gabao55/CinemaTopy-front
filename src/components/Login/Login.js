import { Auth, TemplateInput, TemplateButton } from "../../shared/styles.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/axiosService";
import { ThreeDots } from  'react-loader-spinner';
import { useForm } from "../../shared/useForm.js";

export default function Login() {

  const navigate = useNavigate();
  const [form, handleForm] = useForm({
    initState: {
      email: "",
      password: "",
    }
  });
  const [disabled, setDisabled] = useState(false);

  function sendForm(e){
    e.preventDefault();
    setDisabled(true);
    const promise = login(form);
    promise
      .then((r) => {
        const obj = {token: r.data.token, user: r.data.user};
        localStorage.setItem("CinemaTopy", JSON.stringify(obj));
        navigate("/");
      })
      .catch(() => {
        alert("Erro ao logar!");
        setDisabled(false);
      });  
  }
  
    return (
      <>
        <Auth disabled={disabled}>
          <h1>CinemaTopy</h1>
          <form onSubmit={sendForm}>
            <TemplateInput required type="email" name="email" value={form.email}
              placeholder="E-mail" disabled={disabled}
              onChange={handleForm}
            />
            <TemplateInput required type="password" name="password" value={form.password}
              placeholder="Senha" disabled={disabled}
              onChange={handleForm}
            />
            <TemplateButton disabled={disabled} height="45" width="300" type="submit" >
              {disabled? <ThreeDots color="#ffffff" height={20} width={50}/> : "Entrar"}
            </TemplateButton>
          </form>
          <p onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</p>
        </Auth>
      </>
    );
}