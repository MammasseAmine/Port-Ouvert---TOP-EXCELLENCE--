// script.js

// --- Countdown Logic ---

// We need to store the interval in a variable so we can stop it later.
let countdownInterval;

function updateCountdown() {
    const jpoDate = new Date('2025-06-22T09:00:00').getTime();
    const now = new Date().getTime();
    const diff = jpoDate - now;

    // --- THIS IS THE NEW PART ---
    // Check if the countdown has finished
    if (diff < 0) {
        // Stop the function from running every second
        clearInterval(countdownInterval);

        // Set the final display to 00 and stop the function here
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        return; // Exit the function so the rest of the code doesn't run
    }
    // --- END OF NEW PART ---

    // This code will only run if the countdown is still active
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}


// --- Back to Top Button Logic (Unchanged) ---
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        // A small improvement: check if class is already there before adding
        if (!backToTop.classList.contains('visible')) {
            backToTop.classList.add('visible');
        }
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// --- Initialization ---
// Start the countdown and store its ID in our variable
countdownInterval = setInterval(updateCountdown, 1000);

// Run it once immediately on page load
updateCountdown();