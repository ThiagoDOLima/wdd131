
// Seleciona o botão e o menu
const menuToggle = document.getElementById("menu");
const menuLinks = document.getElementById("menuLinks");

// Abre e fecha o menu
menuToggle.addEventListener("click", () => {
    const aberto = menuLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", aberto);
    menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu" : "Abrir menu"
    );
});

// Atualiza o ano automaticamente
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

// Exibe a última modificação
document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${ document.lastModified } `;

