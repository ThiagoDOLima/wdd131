const menuToggle = document.getElementById('menu');
const menuLinks = document.getElementById('menuLinks');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('ultimaModificacao').textContent =
    `Última modificação: ${document.lastModified}`;



// Impede datas passadas
document.getElementById("data-entrega").min = new Date().toISOString().split("T")[0];

// Se a página voltou do envio (GET), mostra a confirmação
const params = new URLSearchParams(window.location.search);
if (params.has("nome")) {
    document.getElementById("confirmacao-nome").textContent = params.get("nome");
    document.getElementById("form-encomenda").hidden = true;
    document.getElementById("confirmacao").hidden = false;
}    

// Só roda na página de retorno da encomenda
if (document.getElementById("form-encomenda")) {

    const params = new URLSearchParams(window.location.search);

    const nomesDosBolos = {
        cenoura: "Bolo de Cenoura",
        fuba: "Bolo de Fubá",
        formigueiro: "Bolo Formigueiro",
        laranja: "Bolo de Laranja",
        milho: "Bolo de Milho",
        ninho: "Bolo de Leite Ninho",
        floresta: "Bolo Floresta Negra",
        brigadeiro: "Bolo de Brigadeiro"
    };

    function preencher(id, valor) {
        if (valor) {
            document.getElementById(id).textContent = valor;
        }
    }

    // 2026-10-15 vira 15/10/2026
    function formatarData(iso) {
        if (!iso) return "";
        const [ano, mes, dia] = iso.split("-");
        return `${dia}/${mes}/${ano}`;
    }

    preencher("nome", params.get("nome"));
    preencher("produto", nomesDosBolos[params.get("produto")]);
    preencher("quantidade", params.get("quantidade"));
    preencher("data-entrega", formatarData(params.get("data-entrega")));
    preencher("telefone", params.get("telefone"));
    preencher("observacoes", params.get("observacoes"));
}