document.addEventListener("DOMContentLoaded", function () {
    // Lógica para Login
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMessage = document.getElementById("error-message");

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                alert("Login bem-sucedido!");
                window.location.href = "index.html";
            } else {
                errorMessage.textContent = "Email ou senha incorretos.";
            }
        });
    }

    // Lógica para Registro
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const errorMessage = document.getElementById("register-error");

            let users = JSON.parse(localStorage.getItem("users")) || [];

            if (users.some(u => u.email === email)) {
                errorMessage.textContent = "Email já cadastrado.";
                return;
            }

            users.push({ name, email, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        });
    }

    // Lógica para Recuperação de Senha
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value.trim();
            const errorMessage = document.getElementById("forgot-error");

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(u => u.email === email);

            if (user) {
                alert("Um link de recuperação foi enviado para seu email.");
            } else {
                errorMessage.textContent = "Email não encontrado.";
            }
        });
    }
});
