import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";

const Formulario = (props) => {

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");
  const [emailDeConfirmacao, setEmailDeConfirmacao] = useState("");
  var emailMessage = ""

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome, 
      cargo, 
      imagem,
      time, 
      email
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
    setEmail('')
    setEmailDeConfirmacao('')
  };

  const validaEmail = (valor) => {
    if(!valor.includes("@")) {
      emailMessage = "Email inválido"
      console.log(emailMessage)
    } else {
      emailMessage = "Email válido"
      console.log(emailMessage)
    }
    setEmail(valor)
  };

  const confirmaEmail = (valor) => {
    if(valor === email) {
      console.log("Email igual")
    } else {
      console.log("Email diferente")
    }
    setEmailDeConfirmacao(valor)
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        {/* <CampoTexto
          obrigatorio={true}
          label="Email"
          placeholder="Digite seu email"
          valor={email}
          aoAlterado={validaEmail}
        />
        <CampoTexto
          obrigatorio={true}
          label="Digite novamente seu email"
          placeholder="Digite novamente seu email"
          valor={emailDeConfirmacao}
          aoAlterado={confirmaEmail}
        /> */}
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa 
        obrigatorio={true} 
        label="Time" 
        itens={props.times}
        valor={time}
        aoAlterado={(valor => setTime(valor))}
        />
        <Botao texto="Criar card" />
      </form>
    </section>
  );
};

export default Formulario;
