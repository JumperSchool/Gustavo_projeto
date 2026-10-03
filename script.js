function mostrarMensagem() {
    alert("Olá! Esta mensagem veio do JavaScript 😄");
}

document.getElementById("formContato")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById(email).value;

    alert(
        "Obrigado pelo contato, " + nome + "!\n" +
        "Responderemos no email : " + email
    )
    });

