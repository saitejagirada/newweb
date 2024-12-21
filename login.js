function login(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (in real app, you'd want proper authentication)
    if (username === "admin" && password === "password") {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        // Redirect to main page
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password! Try admin/password');
    }
} 