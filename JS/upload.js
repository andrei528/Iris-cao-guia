import { criarCadastro } from "./fetchApi.js";

const addFormEvent = () => {
  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        const dataNascimento = document.getElementById("data-nascimento").value;
        const optForm = document.getElementById("options-form").value;

        const form = {
            nome,
            cpf,
            email,
            telefone,
            dataNascimento,
            optForm
        };

        await criarCadastro(form);
    });
  }
};

document.addEventListener("DOMContentLoaded", addFormEvent);