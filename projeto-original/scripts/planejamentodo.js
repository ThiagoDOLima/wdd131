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
// FORMULÁRIO DE ENCOMENDA
// =====================================================


// -----------------------------------------------------
// 1. IMPEDIR DATAS PASSADAS
// -----------------------------------------------------

const campoData = document.getElementById("data-entrega");


// Só executa se estiver na página do formulário
if (campoData && campoData.tagName === "INPUT") {

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
// 3. LER OS DADOS DA URL
// -----------------------------------------------------

const params = new URLSearchParams(window.location.search);


// -----------------------------------------------------
// 4. FORMATAR DATA
// -----------------------------------------------------

function formatarData(data) {

    if (!data) {

        return "";

    }

    const partes = data.split("-");

    const ano = partes[0];
    const mes = partes[1];
    const dia = partes[2];

    return `${dia}/${mes}/${ano}`;

}


// -----------------------------------------------------
// 5. PREENCHER RESUMO DO PEDIDO
// -----------------------------------------------------

if (params.has("nome")) {

    // Recupera os dados enviados pelo formulário

    const nome = params.get("nome");

    const telefone = params.get("telefone");

    const produto = params.get("produto");

    const quantidade = params.get("quantidade");

    const dataEntrega = params.get("data-entrega");

    const observacoes = params.get("observacoes");


    // -------------------------------------------------
    // NOME
    // -------------------------------------------------

    const campoNome = document.getElementById("nome");

    if (campoNome) {

        campoNome.textContent = nome || "Cliente";

    }


    // -------------------------------------------------
    // BOLO
    // -------------------------------------------------

    const campoProduto = document.getElementById("produto");

    if (campoProduto) {

        campoProduto.textContent =
            nomesDosBolos[produto] || "Bolo não informado";

    }


    // -------------------------------------------------
    // QUANTIDADE
    // -------------------------------------------------

    const campoQuantidade =
        document.getElementById("quantidade");

    if (campoQuantidade) {

        campoQuantidade.textContent =
            quantidade || "Não informado";

    }


    // -------------------------------------------------
    // DATA
    // -------------------------------------------------

    const campoDataResumo =
        document.getElementById("data-entrega");

    if (campoDataResumo) {

        campoDataResumo.textContent =
            formatarData(dataEntrega);

    }


    // -------------------------------------------------
    // TELEFONE
    // -------------------------------------------------

    const campoTelefone =
        document.getElementById("telefone");

    if (campoTelefone) {

        campoTelefone.textContent =
            telefone || "Não informado";

    }


    // -------------------------------------------------
    // OBSERVAÇÕES
    // -------------------------------------------------

    const campoObservacoes =
        document.getElementById("observacoes");

    if (campoObservacoes) {

        campoObservacoes.textContent =
            observacoes || "Nenhuma";

    }

    // =====================================================
    // REDIRECIONAMENTO AUTOMÁTICO
    // =====================================================

    const contador = document.getElementById("contador");

    if (contador) {

        let segundos = 10;

        const intervalo = setInterval(() => {

            segundos--;

            contador.textContent = segundos;

            if (segundos <= 0) {

                clearInterval(intervalo);

                window.location.href = "index.html";

            }

        }, 1000);

    }

    // =====================================================
    // CARROSSEL DO BANNER PRINCIPAL
    // =====================================================

    const slides =
        document.querySelectorAll(".hero-slide");

    const dots =
        document.querySelectorAll(".hero-dots .dot");

    let slideAtual = 0;


    // Só executa se existirem imagens
    if (slides.length > 0) {

        function mostrarSlide(numero) {

            slides.forEach((slide) => {

                slide.classList.remove("ativo");

            });


            dots.forEach((dot) => {

                dot.classList.remove("ativo");

            });


            slides[numero].classList.add("ativo");


            if (dots[numero]) {

                dots[numero].classList.add("ativo");

            }


            slideAtual = numero;

        }


        // =============================================
        // CLIQUE NOS PONTINHOS
        // =============================================

        dots.forEach((dot, index) => {

            dot.addEventListener("click", () => {

                mostrarSlide(index);

            });

        });


        // =============================================
        // TROCA AUTOMÁTICA
        // =============================================

        if (slides.length > 1) {

            setInterval(() => {

                slideAtual++;

                if (slideAtual >= slides.length) {

                    slideAtual = 0;

                }

                mostrarSlide(slideAtual);

            }, 5000);

        }

    }
}