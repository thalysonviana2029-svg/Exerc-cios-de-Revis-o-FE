function verificarLogin() {

    const usuario = document.getElementById("user").value
    const senha = document.getElementById("pass").value

    console.log(usuario, senha)
    const userCorreto = "Thalyson"
    const passCorreta = "1234"

    let situacao;

    if (usuario == userCorreto && senha == passCorreta){
        situacao = "Login feito com sucesso!"   
    } else {
        situacao = "Usuario ou Senha Invalidos!"
    }

    document.getElementById("resultado").textContent =
        "Situação: " + situacao
}