// Animation for search bar placeholder
const searchInput = document.querySelector('main input');
const placeholderTexts = [
    "Search for Restaurants...",
    "Try 'Pizza' near you",
    "Find Cafes, Bars & More"
];
let placeholderIndex = 0;

function changePlaceholder() {
    searchInput.setAttribute("placeholder", placeholderTexts[placeholderIndex]);
    placeholderIndex = (placeholderIndex + 1) % placeholderTexts.length;
}
setInterval(changePlaceholder, 3000);

// Smooth scroll animation for links
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
});

// Fade-in animation on scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('main p, main img, main input').forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (position < windowHeight - 50) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
});
