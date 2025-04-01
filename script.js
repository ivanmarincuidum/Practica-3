let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450, 
    reset: true
})

sr.reveal('.hero-text', {delay:200, origin: 'top'});
sr.reveal('.hero-img', {delay:450, origin: 'top'});
sr.reveal('.icons', {delay:500, origin: 'left'});
sr.reveal('.scroll-down', {delay:500, origin: 'right'});

// Cuando el documento se cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.querySelector('a[href="#contact-form"]');
    const contactSection = document.getElementById('contact-form');

    contactLink.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar que el enlace haga un desplazamiento normal

        // Mostrar la sección de contacto
        contactSection.style.display = 'block';

        // Desplazarse hacia el formulario (esto ayudará a que la vista se desplace hacia el formulario)
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});