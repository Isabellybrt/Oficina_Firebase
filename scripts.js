function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'teste@gmail.com' && password === '12345678') {
        window.location.href = 'index.html';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function logout() {
    window.location.href = 'login.html';
}
