const inputCPF = document.getElementById("cpf");

inputCPF.addEventListener("input", function (e) {
    // Remove qualquer caractere que não seja número
    let valor = e.target.value.replace(/\D/g, "");
    e.target.value = valor;
});