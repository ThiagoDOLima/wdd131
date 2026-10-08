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

    // Bolos tradicionais
    cenoura: "Bolo de Cenoura",
    fuba: "Bolo de Fubá",
    formigueiro: "Bolo Formigueiro",
    laranja: "Bolo de Laranja",
    milho: "Bolo de Milho",
    ninho: "Bolo de Leite Ninho",
    floresta: "Bolo Floresta Negra",
    brigadeiro: "Bolo de Brigadeiro",

    // Bolos para festas
    aniversario: "Bolo de Aniversário",
    morango: "Bolo de Morango",
    casamento: "Bolo de Casamento",
    decorado: "Bolo Decorado",
    festaInfantil: "Bolo de Festa Infantil",
    redVelvet: "Bolo Red Velvet",
    chocolateEspecial: "Bolo de Chocolate Especial",
    flores: "Bolo de Flores"

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
}
    
// =====================================================
// CARROSSEL DO BANNER PRINCIPAL
// =====================================================

const slides =
    document.querySelectorAll(".hero-slide");

console.log("Quantidade de slides:", slides.length);

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

// =====================================================
// GALERIA DE BOLOS
// =====================================================

const bolos = [

    {
        nomeDoBolo: "Bolo de Cenoura",
        descricao: "Bolo caseiro de cenoura, macio e coberto com uma deliciosa calda de chocolate.",
        sabor: "Cenoura com chocolate",
        tamanho: "1 kg",
        urlDaImagem:
            "https://images.pexels.com/photos/37711037/pexels-photo-37711037.jpeg"
    },

    {
        nomeDoBolo: "Bolo de Chocolate",
        descricao: "Bolo de chocolate fofinho e saboroso, perfeito para acompanhar um café.",
        sabor: "Chocolate",
        tamanho: "1 kg",
        urlDaImagem:
            "https://images.mrcook.app/recipe-image/0193b68d-05a3-7f4c-a6a3-a2272bc44371?cacheKey=U3VuLCAxMiBKYW4gMjAyNSAwMzozODoyNCBHTVQ%3D"
    },

    {
        nomeDoBolo: "Bolo de Fubá",
        descricao: "Bolo de fubá tradicional, fofinho e dourado, perfeito para o café da tarde.",
        sabor: "Fubá",
        tamanho: "1 kg",
        urlDaImagem:
            "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/bolo_de_fuba.jpg"
    },

    {
        nomeDoBolo: "Bolo Formigueiro",
        descricao: "Bolo branco fofinho com deliciosos pedacinhos de chocolate.",
        sabor: "Baunilha com chocolate",
        tamanho: "1 kg",
        urlDaImagem:
            "https://d2qcpt1idvpipw.cloudfront.net/recipes/2020/10/bolo-formigueiro-5.jpg"
    },

    {
        nomeDoBolo: "Bolo de Laranja",
        descricao: "Bolo caseiro de laranja, leve, aromático e preparado para acompanhar um café.",
        sabor: "Laranja",
        tamanho: "1 kg",
        urlDaImagem:
            "https://www.cairo24.com/Upload/libfiles/74/8/595.jpg"
    },

    {
        nomeDoBolo: "Bolo de Milho",
        descricao: "Bolo de milho cremoso e saboroso, inspirado nas receitas tradicionais da família.",
        sabor: "Milho",
        tamanho: "1 kg",
        urlDaImagem:
            "https://img0.didiglobal.com/static/soda_public/do1_8wb9ZakZPFBKANYLvBjb225094176"
    },

    {
        nomeDoBolo: "Bolo de Leite Ninho",
        descricao: "Bolo macio preparado com leite Ninho, ideal para momentos especiais.",
        sabor: "Leite Ninho",
        tamanho: "1 kg",
        urlDaImagem:
            "https://images.cooknenjoy.com/uploads/2023/09/Bolo-de-Leite-Ninho-de-Liquidificador-02-1200x676.jpg"
    },

    {
        nomeDoBolo: "Bolo Floresta Negra",
        descricao: "Bolo especial de chocolate com recheio cremoso, cerejas e cobertura de chantilly.",
        sabor: "Chocolate com cereja",
        tamanho: "1,5 kg",
        urlDaImagem:
            "https://tzgmgztvdcwfbqivozai.supabase.co/storage/v1/object/public/blog-images/05e40e3d-63e6-4440-99e9-30a5bd7a4ce1/41e27e63-4ef8-46d8-801b-060b09d4d256.png"
    },

    {
        nomeDoBolo: "Bolo de Brigadeiro",
        descricao: "Bolo de chocolate recheado e coberto com brigadeiro cremoso e granulado.",
        sabor: "Chocolate e brigadeiro",
        tamanho: "1,5 kg",
        urlDaImagem:
            "https://www.guiadasemana.com.br/contentFiles/image/2022/11/FEA/69403_bolo-brigadeiro-1.jpg"
    }

];


createBoloCard(bolos);


// =====================================================
// CRIAR CARDS DOS BOLOS
// =====================================================

function createBoloCard(bolos) {

    const galeria =
        document.querySelector(".galeria");

    if (!galeria) {

        return;

    }

    galeria.innerHTML = "";


    bolos.forEach(bolo => {

        const card =
            document.createElement("section");

        const name =
            document.createElement("h3");

        const descricao =
            document.createElement("p");

        const sabor =
            document.createElement("p");

        const tamanho =
            document.createElement("p");

        const img =
            document.createElement("img");

        const botao =
            document.createElement("a");


        // Nome
        name.textContent =
            bolo.nomeDoBolo;


        // Descrição
        descricao.innerHTML =
            `<span class="label">Descrição:</span> ${bolo.descricao}`;


        // Sabor
        sabor.innerHTML =
            `<span class="label">Sabor:</span> ${bolo.sabor}`;


        // Tamanho
        tamanho.innerHTML =
            `<span class="label">Tamanho:</span> ${bolo.tamanho}`;


        // Imagem
        img.setAttribute(
            "src",
            bolo.urlDaImagem
        );

        img.setAttribute(
            "alt",
            bolo.descricao
        );

        img.setAttribute(
            "loading",
            "lazy"
        );


        // Botão
        botao.textContent =
            "Encomendar este bolo";

        botao.setAttribute(
            "href",
            "encomendas.html"
        );

        botao.classList.add(
            "botao-encomenda"
        );


        // =================================================
        // LOCALSTORAGE
        // =================================================

        botao.addEventListener("click", () => {

            localStorage.setItem(
                "boloEscolhido",
                bolo.nomeDoBolo
            );

        });


        // Monta o card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(descricao);
        card.appendChild(sabor);
        card.appendChild(tamanho);
        card.appendChild(botao);


        galeria.appendChild(card);

    });

}
