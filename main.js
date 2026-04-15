// script.js

// Smooth scrolling for navbar and footer links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight active navbar link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav__links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current){
            link.classList.add('active');
        }
    });
});

// Form validation (basic)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if(name === '' || email === '' || message === ''){
        alert('Please fill out all fields before sending!');
        e.preventDefault();
        return false;
    }

    alert('Message sent successfully!');
});

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);

backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    font-size: 18px;
    background-color: #64ffda;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    z-index: 1000;
`;

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});