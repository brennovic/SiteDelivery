document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (email && password) {
        // Here you would typically make an API call to authenticate
        alert('Login realizado com sucesso!');
        window.location.href = 'index.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});