// Show loading screen on page load and hide it when fully loaded
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.style.display = 'none';
});

// Scroll animation effect
const fadeInElements = document.querySelectorAll('.stat, .service');

const scrollAnimation = () => {
    fadeInElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', scrollAnimation);
window.addEventListener('load', scrollAnimation); // Run animation on load for elements in view

// Modal functionality
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const closeLogin = document.getElementById('close-login');
const closeSignup = document.getElementById('close-signup');

// Open and close Login modal
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'block';
});

closeLogin.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Open and close Signup modal
signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'block';
});

closeSignup.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Close modals when clicking outside of the content
window.addEventListener('click', (e) => {
    if (e.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target == signupModal) {
        signupModal.style.display = 'none';
    }
});
