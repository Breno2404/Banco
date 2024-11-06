const email = "teste@teste.com"
const senha = "123456"
localStorage.setItem(email, senha)

const emailInput = document.getElementById("email")
const senhaInput = document.getElementById("senha")
const formulario = document.getElementById("formulario_login")

formulario.addEventListener("submit", (event) =>  {
    event.preventDefault()
    console.log(emailInput.value)
    console.log(senhaInput.value)
})