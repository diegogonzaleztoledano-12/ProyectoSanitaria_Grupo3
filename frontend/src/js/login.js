const form = document.getElementById("form");


document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const loginSection = document.getElementById('login-section');
    const forgotSection = document.getElementById('forgot-section');
    const mainTitle = document.getElementById('main-title');
    
    // Botones/Enlaces
    const forgotBtn = document.getElementById('forgot-btn');
    const backLoginBtn = document.getElementById('back-login-btn');

    // Evento Click
    forgotBtn.addEventListener('click', () => {
        // Ocultar login, mostrar recuperación
        loginSection.classList.add('d-none');
        forgotSection.classList.remove('d-none');
        
        // Cambiar título
        mainTitle.textContent = 'Recuperar Contraseña';
    });

    // Evento: Clic en "Volver al login"
    backLoginBtn.addEventListener('click', () => {
        // Ocultar recuperación, mostrar login
        forgotSection.classList.add('d-none');
        loginSection.classList.remove('d-none');
        
        // Restaurar título
        mainTitle.textContent = 'Login';
    });
})

const validarFormulario = (event) => {
  let valido = true;
 event.preventDefault();

  const form = event.target; 
  const formData = new FormData(form);

    //ahora tengo que sacar cada elemento del form, creo que era un fromObjetcs o algo asi
    



  if (valido) {
    form.submit();
  }
}; 


form.addEventListener("submit", validarFormulario);