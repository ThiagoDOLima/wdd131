const menuToggle = document.getElementById('menu');
const menuLinks = document.getElementById('menuLinks');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('ultimaModificacao').textContent =
    `Última modificação: ${document.lastModified}`;