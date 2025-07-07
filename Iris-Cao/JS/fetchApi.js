const API_URL_CADASTRO = "https://back-end-iris-1.onrender.com/formulario";

export const criarCadastro = async (form) => {
    try{
        const response = await fetch(API_URL_CADASTRO, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        });

        if(!response.ok){
            if(response.status === 409){
                throw new Error("Este CPF já está cadastrado.");
            }
            throw new Error("Erro ao se inscrever");
        }

        const data = await response.json();
        alert("Inscrição completa!");
        window.location.href = "/";
    } catch(error){
        console.error("Error ao guardar inscrição: ", error);
        alert(error.message);
    }
}
