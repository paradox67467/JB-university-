document.addEventListener('DOMContentLoaded', () => {
    // If already logged in, redirect straight to the app
    if (localStorage.getItem('jbu_auth') === 'true') {
        window.location.href = 'index.html';
    }

    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMsg = document.getElementById('error-msg');
    const loginBtn = document.getElementById('login-btn');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop page refresh
        
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        errorMsg.innerText = '';

        if (!email || !password) {
            errorMsg.innerText = 'Please enter both your email and password.';
            return;
        }

        // Simulate a "backend login check" (without actually needing a backend)
        loginBtn.classList.add('btn-loading');
        
        // Wait 1.5 seconds so it looks cool and authentic
        setTimeout(() => {
            // Fake authentication success! Set the token.
            localStorage.setItem('jbu_auth', 'true');
            
            // Visual green success feedback
            loginBtn.classList.remove('btn-loading');
            loginBtn.innerHTML = 'Success!';
            loginBtn.style.background = '#22c55e'; // Green color
            
            // Redirect back to main page after 1 second
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 800);
            
        }, 1500); 
    });
});
