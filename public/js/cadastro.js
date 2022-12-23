function cadastrar() {
    var senha = document.getElementById('password').value
    var confirmarSenha = document.getElementById('confirm-password').value
    console.log(senha, confirmarSenha)

    if (senha === confirmarSenha) {
        Swal.fire({
            title: 'Cadastro feito com sucesso!',
            icon: 'success',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "user.html"
            }
        })
    } else {
        Swal.fire({
            title: 'Senhas Diferentes!',
            icon: 'error',
        });
    }
}