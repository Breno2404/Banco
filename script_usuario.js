const usuarios = JSON.parse(localStorage.getItem("usuarios"))

for (let index = 0; index < usuarios.lenght; index++){
    const usuario = usuarios[index];
    console.log(usuario.id, usuario.email, usuario.senha)

    const linha = `
        <tr>
            <th>id</th>
            <td>email</td>
            <td>senha</td>
        </tr>
    `

    console.log(linha)
}