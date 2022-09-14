import { Auth, TemplateInput, TemplateButton } from "../../shared/styles.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/axiosService";
import { ThreeDots } from  'react-loader-spinner';

export default function Login() {

  const navigate = useNavigate();
  const [formInf, setFormInf] = useState({email:"", password:""});
  const [disabled, setDisabled] = useState(false);

  function updateInfs(e){
    setFormInf({
      ...formInf,
      [e.target.name] : e.target.value 
    });
  }

  function handleForm(e){
    e.preventDefault();
    setDisabled(true);
    const promise = login(formInf);
    promise
      .then((r) => {
        const obj = {token: r.data.token, user: r.data.user};
        localStorage.setItem("CinemaTopyUser", JSON.stringify(obj));
        navigate("/home");
      })
      .catch(() => {
        alert("Erro ao logar!");
        setDisabled(false);
      });  
  }

  /* function handleForm(e){
    e.preventDefault();
    const promise = login({...});
    promise 
      .then((r) => {
        const obj = {token: r.data.token, user: r.data.user};
        localStorage.setItem("CinemaTopy", JSON.stringify(obj));
      })
      .catch(() => {
        alert("Erro ao logar!");
      });  
  } */

  // coloquei aqui só pra ter um direcionamento do localStorage
  
    return (
      <>
        <Auth disabled={disabled}>
          <h1>CinemaTopy</h1>
          <form onSubmit={handleForm}>
            <TemplateInput required type="email" name="email" value={formInf.email}
              placeholder="E-mail" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateInput required type="password" name="password" value={formInf.password}
              placeholder="Senha" disabled={disabled}
              onChange={updateInfs}
            />
            <TemplateButton disabled={disabled} height="45" width="300" type="submit" >
              {disabled? <ThreeDots color="#ffffff" height={40} width={50}/> : "Entrar"}
            </TemplateButton>
          </form>
          <p onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</p>
        </Auth>
      </>
    );
}