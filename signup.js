function toggleSignup(type) {
    const emailSection = document.getElementById('emailSection');
    const mobileSection = document.getElementById('mobileSection');
    const buttons = document.querySelectorAll('.toggle-btn');
    
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (type === 'email') {
        emailSection.style.display = 'block';
        mobileSection.style.display = 'none';
        buttons[0].classList.add('active');
        document.getElementById('email').required = true;
        document.getElementById('mobile').required = false;
    } else {
        emailSection.style.display = 'none';
        mobileSection.style.display = 'block';
        buttons[1].classList.add('active');
        document.getElementById('email').required = false;
        document.getElementById('mobile').required = true;
    }
}

function signup(event) {
    event.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email && !isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (mobile && !isValidMobile(mobile)) {
        alert('Please enter a valid mobile number');
        return false;
    }

    // Store user data (in real app, you'd send this to a server)
    const userData = {
        fullname,
        email: email || null,
        mobile: mobile || null,
        password
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('isLoggedIn', 'true');
    
    // Redirect to main page
    window.location.href = 'main.html';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidMobile(mobile) {
    return /^\d{10}$/.test(mobile);
} 