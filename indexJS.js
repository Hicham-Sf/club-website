document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('mainNav');

    // Changer l'apparence de la navbar au scroll
    window.onscroll = function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // Fermer le menu mobile après un clic sur un lien
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    
    navLinks.forEach((l) => {
        l.addEventListener('click', () => { 
            if (window.innerWidth < 992) {
                bsCollapse.toggle(); 
            }
        });
    });
});