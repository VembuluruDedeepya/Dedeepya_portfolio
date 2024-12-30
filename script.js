// Scroll Animation
const sections = document.querySelectorAll('section');

const revealSection = () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
};

// Ensure sections are visible immediately on page load
window.addEventListener('scroll', revealSection);
window.addEventListener('DOMContentLoaded', revealSection); // Trigger animation on load
