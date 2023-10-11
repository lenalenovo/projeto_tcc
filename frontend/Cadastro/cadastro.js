//const { response } = require("../../backend/src/app");

let tipoUsuario = "Usuario";
let nome = null;
let usuario = null;
let email = null;
let endereco = null;
let senha = null;
let confirmSenha = null;

async function cadastrar() {
  endereco = document.getElementById("endereco").value;

  if (endereco === null || endereco === "") {
    tipoUsuario = "Usuario";
  } else {
    tipoUsuario = "Empresa";
  }

  if (tipoUsuario === "Usuario") {
    nome = document.getElementById("nome_c").value;
    usuario = document.getElementById("usuario_c").value;
    email = document.getElementById("email_c").value;
    senha = document.getElementById("senha_c").value;
    confirmSenha = document.getElementById("confirmSenha_c").value;
  } else {
    nome = document.getElementById("nome").value;
    usuario = document.getElementById("usuario").value;
    email = document.getElementById("email").value;
    endereco = document.getElementById("endereco").value;
    senha = document.getElementById("senha").value;
    confirmSenha = document.getElementById("confirmSenha").value;
  }

  //validar senhas iguais

  document.getElementById("endereco").value = null;

  console.log(nome);
  console.log(usuario);
  console.log(senha);
  console.log(email);
  console.log(endereco);
  console.log(confirmSenha);
  console.log(tipoUsuario);

  const data = {
    nome,
    usuario,
    senha,
    email,
    endereco,
    tipoUsuario,
  };
  console.log(data);
  const response = await fetch("http://localhost:3008/api/user/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response);
      const nome = response.data.nome;
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(response);
}
