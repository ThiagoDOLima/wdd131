const menuToggle = document.getElementById('menu');
const menuLinks = document.getElementById('menuLinks');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('ultimaModificacao').textContent =
    `Última modificação: ${document.lastModified}`;



// =====================================================
// FORMULÁRIO DE ENCOMENDA - BOLOS DA VOVÓ
// =====================================================


// -----------------------------------------------------
// 1. IMPEDIR DATAS PASSADAS
// -----------------------------------------------------

const campoData = document.getElementById("data-entrega");

if (campoData) {
    const hoje = new Date().toISOString().split("T")[0];

    campoData.min = hoje;
}


// -----------------------------------------------------
// 2. NOMES DOS BOLOS
// -----------------------------------------------------

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


// -----------------------------------------------------
// 3. LER OS DADOS ENVIADOS PELO FORMULÁRIO
// -----------------------------------------------------

const params = new URLSearchParams(window.location.search);


// -----------------------------------------------------
// 4. FUNÇÃO PARA FORMATAR A DATA
// -----------------------------------------------------

function formatarData(data) {

    if (!data) {
        return "";
    }

    const partes = data.split("-");

    const ano = partes[0];
    const mes = partes[1];
    const dia = partes[2];

    return `${ dia } /${mes}/${ ano } `;
}


// -----------------------------------------------------
// 5. PREENCHER A PÁGINA DE CONFIRMAÇÃO
// -----------------------------------------------------

if (params.has("nome")) {

    const nome = params.get("nome");
    const telefone = params.get("telefone");
    const email = params.get("email");
    const produto = params.get("produto");
    const quantidade = params.get("quantidade");
    const dataEntrega = params.get("data-entrega");
    const observacoes = params.get("observacoes");


    // Nome
    const campoNome = document.getElementById("confirmacao-nome");

    if (campoNome) {
        campoNome.textContent = nome || "";
    }


    // Telefone
    const campoTelefone = document.getElementById("confirmacao-telefone");

    if (campoTelefone) {
        campoTelefone.textContent = telefone || "";
    }


    // E-mail
    const campoEmail = document.getElementById("confirmacao-email");

    if (campoEmail) {

        campoEmail.textContent = email || "Não informado";
    }


    // Produto
    const campoProduto = document.getElementById("confirmacao-produto");

    if (campoProduto) {

        campoProduto.textContent =
            nomesDosBolos[produto] || "Bolo não informado";
    }


    // Quantidade
    const campoQuantidade =
        document.getElementById("confirmacao-quantidade");

    if (campoQuantidade) {

        campoQuantidade.textContent = quantidade || "";
    }


    // Data
    const campoDataConfirmacao =
        document.getElementById("confirmacao-data");

    if (campoDataConfirmacao) {

        campoDataConfirmacao.textContent =
            formatarData(dataEntrega);
    }


    // Observações
    const campoObservacoes =
        document.getElementById("confirmacao-observacoes");

    if (campoObservacoes) {

        campoObservacoes.textContent =
            observacoes || "Nenhuma observação.";
    }
}
