const modalRegister = document.getElementById('modal-register');
const modalButton = document.getElementById('modal-button');

function showDetails() {
    modal.style.display = "Block";
}

function closeModal() {
    modal.style.display = "none";
    modalRegister.innerHTML = "";
    myForm.style.marginTop = "5rem"
}

modalButton.addEventListener("click", function() {
    event.preventDefault();
    modalRegister.innerHTML = "Formulário enviado com sucesso! Brincadeira, não enviei para nenhum lugar kkk, não vou te enviar um email no meu aniversário, fica tranquilo(a).";
    document.getElementById("myForm").reset();
    myForm.style.marginTop = "2rem"
});
