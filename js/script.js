// Fade & Scale Header

const header = document.querySelector('.header');
const headerPosition = 260;

window.addEventListener('load', () => {
  header.classList.add('fade-in');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > headerPosition) {
    header.classList.remove('fade-in');
    header.classList.add('fade-out');
  } else {
    header.classList.remove('fade-out');
    header.classList.add('fade-in');
  }
});

// Define all the sections
const sections = document.querySelectorAll("section");

// Define the function to change the opacity of sections
const changeOpacity = () => {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset;

    // Check if the section is in the viewport
    if (window.matchMedia("(max-width: 767px)").matches) {
      // Condition for small screens
      if (
        scrollTop >= sectionTop - windowHeight + sectionHeight / 6.4 &&
        scrollTop < sectionTop + sectionHeight
      ) {
        section.classList.add("is-visible");
      } else {
        section.classList.remove("is-visible");
      }
    } else {
      // Condition for larger screens
      if (
        scrollTop >= sectionTop - windowHeight + sectionHeight / 3.2 &&
        scrollTop < sectionTop + sectionHeight
      ) {
        section.classList.add("is-visible");
      } else {
        section.classList.remove("is-visible");
      }
    }
  });
};

// Register the scroll event listener
window.addEventListener("scroll", changeOpacity);

// Initialize the section visibility when the page loads
changeOpacity();

const body = document.querySelector("body");

window.addEventListener("scroll", () => {
  if (window.scrollY < sections[0].offsetTop) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else if (window.scrollY >= sections[sections.length - 1].offsetTop) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else if (window.scrollY > sections[sections.length - 2].offsetTop) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else if (window.scrollY > 360) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
});