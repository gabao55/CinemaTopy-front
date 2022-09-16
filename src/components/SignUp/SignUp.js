import { Auth, TemplateInput, TemplateButton } from "../../shared/styles.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { singUp } from "../../services/axiosService";
import { ThreeDots } from  'react-loader-spinner';
import { useForm } from "../../shared/useForm.js";

export default function SignUp() {

  const navigate = useNavigate();
  const [form, handleForm] = useForm({
    initState: {
      email: "",
      name: "",
      password: "",
    }
  });
  const [disabled, setDisabled] = useState(false);

  function sendForm(e){
    e.preventDefault();
    setDisabled(true);
    const promise = singUp(form);
    promise
      .then((r) => {
        navigate("/login");
      })
      .catch(() => {
        alert("Erro ao cadastrar!");
        setDisabled(false);
      });  
  }
  
    return (
      <>
        <Auth disabled={disabled}>
          <h1>CinemaTopy</h1>
          <form onSubmit={sendForm}>
            <TemplateInput required type="text" name="name" value={form.name}
              placeholder="Nome" disabled={disabled}
              onChange={handleForm}
            />
            <TemplateInput required type="email" name="email" value={form.email}
              placeholder="E-mail" disabled={disabled}
              onChange={handleForm}
            />
            <TemplateInput required type="password" name="password" value={form.password}
              placeholder="Senha" disabled={disabled}
              onChange={handleForm}
            />
            <TemplateButton disabled={disabled} height="45" width="300" type="submit" >
              {disabled? <ThreeDots color="#ffffff" height={40} width={50}/> : "Cadastrar"}
            </TemplateButton>
          </form>
          <p onClick={() => navigate("/login")}>Já tem uma conta? Entre agora!</p>
        </Auth>
      </>
    );
}