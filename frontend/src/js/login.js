document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotForm = document.getElementById('forgot-form');

    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const forgotBtn = document.getElementById('forgot-btn');
    const backToLogin = document.getElementById('back-to-login');

    // Mostrar formulario de registro
    showRegister.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        forgotForm.style.display = 'none';
    });

    // Mostrar formulario de login
    showLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        forgotForm.style.display = 'none';
    });

    // Mostrar formulario de recuperar contraseña
    forgotBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        forgotForm.style.display = 'block';
    });

    // Volver al login desde recuperar contraseña
    backToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        forgotForm.style.display = 'none';
    });

    // Toggle password visibility for login
    const togglePwd = document.getElementById('toggle-pwd');
    const password = document.getElementById('password');
    togglePwd.addEventListener('click', () => {
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        togglePwd.innerHTML = type === 'password' ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';
    });

    // Toggle password visibility for register password
    const togglePwdReg = document.getElementById('toggle-pwd-reg');
    const passwordReg = document.getElementById('password-reg');
    togglePwdReg.addEventListener('click', () => {
        const type = passwordReg.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordReg.setAttribute('type', type);
        togglePwdReg.innerHTML = type === 'password' ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';
    });

    // Toggle password visibility for repeat password
    const togglePwd2 = document.getElementById('toggle-pwd2');
    const password2 = document.getElementById('password2');
    togglePwd2.addEventListener('click', () => {
        const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
        password2.setAttribute('type', type);
        togglePwd2.innerHTML = type === 'password' ? '<i class="fa-regular fa-eye"></i>' : '<i class="fa-regular fa-eye-slash"></i>';
    });
});