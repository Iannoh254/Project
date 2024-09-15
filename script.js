document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('header-login-btn');
    const signupButton = document.getElementById('header-signup-btn');
    const loginModal = document.getElementById('login-modal');
    const signupModal = document.getElementById('signup-modal');
    const loginClose = document.getElementById('login-close');
    const signupClose = document.getElementById('signup-close');
    const videoSlide = document.getElementById('video-slide');
    const playVideoButton = document.getElementById('play-video-btn');
    const bookNowButton = document.getElementById('book-now-btn');
    const bookingModal = document.getElementById('booking-modal');
    const bookingClose = document.getElementById('booking-close');

    // Open Login modal
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            loginModal.style.display = 'flex';
        });
    }

    // Open Sign Up modal
    if (signupButton) {
        signupButton.addEventListener('click', () => {
            signupModal.style.display = 'flex';
        });
    }

    // Close Login modal
    if (loginClose) {
        loginClose.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }

    // Close Sign Up modal
    if (signupClose) {
        signupClose.addEventListener('click', () => {
            signupModal.style.display = 'none';
        });
    }

    // Play Video on slide
    if (playVideoButton) {
        playVideoButton.addEventListener('click', () => {
            videoSlide.style.display = 'block';
            videoSlide.src = 'https://www.youtube.com/embed/vql05Oo5GEE?autoplay=1';
        });
    }

    // Book Now button
    if (bookNowButton) {
        bookNowButton.addEventListener('click', () => {
            bookingModal.style.display = 'flex';
        });
    }

    // Close Booking modal
    if (bookingClose) {
        bookingClose.addEventListener('click', () => {
            bookingModal.style.display = 'none';
        });
    }

    // Close modals when clicking outside the modal content
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
        root: null, // viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes when the element comes into view
                entry.target.classList.add('fade-in');
                
                if (entry.target.classList.contains('zoom-in')) {
                    entry.target.classList.add('zoom-in');
                }
                
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    }, observerOptions);

    // Apply observer to all elements with the 'animated' class
    document.querySelectorAll('.animated').forEach(element => {
        observer.observe(element);
    });
});
