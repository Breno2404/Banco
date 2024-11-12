const emailInputLogin = document.getElementById("email")
const senhaInputLogin = document.getElementById("senha")
const formulario_login = document.getElementById("formulario_login")

formulario_login.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailDigitado = emailInputLogin.value
    const senhaDigitada = senhaInputLogin.value

    const usuarios = JSON.parse(localStorage.getItem("usuarios"))
    const usuarioEncontrado = usuarios.find((usuario) => {
        return (
            usuario.email == emailDigitado &&
            usuario.senha == senhaDigitada
        )
    })

    if (usuarioEncontrado) {
        console.log(usuarioEncontrado)
        console.log("Pode acessar")
        Swal.fire({
            title: "Logado com sucesso!",
            text: "Aproveite o sistema",
            timer: 1500,
            showConfirmButton: false,
            icon: "success"
        });

    } else {
        console.log("Email ou senha incorretos")
        let timerInterval;
        Swal.fire({
            title: "algo deu errado!",
            html: "Vou fechar em <b></b> milisegundos.",
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    }
})

