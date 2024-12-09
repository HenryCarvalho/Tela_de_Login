document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.textContent = '🔑👁️‍🗨️'; // Alterne o ícone
    } else {
        passwordInput.type = 'password';
        eyeIcon.textContent = '🔑👁️';
    }
});
