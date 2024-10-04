const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("appear-animation", entry.isIntersecting);
    });
};

const observer = new IntersectionObserver(startAnimation);
const options = { root: null, rootMargin: '0px', threshold: 1 }; 

const elements = document.querySelectorAll('section');
    elements.forEach(el => {
    observer.observe(el, options);
});