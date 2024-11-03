document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Dummy credentials for demonstration
    const validUsername = 'user';
    const validPassword = 'pass';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const messageElement = document.getElementById('message');

    if (username === validUsername && password === validPassword) {
        messageElement.textContent = 'Login successful!';
        messageElement.style.color = 'green';
    } else {
        messageElement.textContent = 'Invalid username or password.';
        messageElement.style.color = 'red';
    }
});
