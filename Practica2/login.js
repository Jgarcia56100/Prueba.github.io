document.getElementById('loginForm').addEventListener('submit', function(event)
{
    event.preventDefault();
    const predefineUser =
    {
        username: 'papuy',
        password: '1234'

    };
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username== predefineUser.username && password == predefineUser.password)
        {
        window.location.href = 'practica2/principal.html';
        }
        else
        {
            document.getElementById('message').textContent = 'Usuario o Contraseña incorrectos';
        }
});
