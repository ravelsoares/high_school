function entrar() {
    email_correto = 'ravelsoares@gmail.com'
    password_correto = '123123'
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email == email_correto && password == password_correto) {
        Swal.fire({
            title: 'Login feito com sucesso!',
            icon: 'success',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "user.html"
            }
        })
    } else {
        Swal.fire({
            title: 'Impossível fazer login!',
            icon: 'error',
        });
    }
}