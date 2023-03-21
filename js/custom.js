// Define all the sections
const sections = document.querySelectorAll('section');

// Define the function to change the opacity of sections
const changeOpacity = () => {
sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    // Check if the section is in the viewport
    if (scrollTop >= sectionTop - windowHeight + (sectionHeight / 2) && scrollTop < sectionTop + sectionHeight) {
    section.classList.add('is-visible');
    } else {
    section.classList.remove('is-visible');
    }
});
};

// Register the scroll event listener
window.addEventListener('scroll', changeOpacity);

// Initialize the section visibility when the page loads
changeOpacity();
