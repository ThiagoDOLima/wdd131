// Galeria de Bolos para Festas

const bolosFesta = [
    {
        nomeDoBolo: "Bolo de Aniversário",
        descricao: "Bolo especial para comemorações de aniversário, com recheio cremoso e decoração delicada.",
        sabor: "Chocolate com brigadeiro",
        tamanho: "2 kg",
        urlDaImagem:
            "https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg"
    },

    {
        nomeDoBolo: "Bolo de Morango",
        descricao: "Bolo decorado com morangos frescos, chantilly e recheio cremoso.",
        sabor: "Baunilha com morango",
        tamanho: "2 kg",
        urlDaImagem:
            "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg"
    },

    {
        nomeDoBolo: "Bolo de Casamento",
        descricao: "Bolo elegante de vários andares, perfeito para casamentos e celebrações especiais.",
        sabor: "Baunilha com frutas vermelhas",
        tamanho: "3 kg",
        urlDaImagem:
            "https://images.pexels.com/photos/1028718/pexels-photo-1028718.jpeg"
    },

    {
        nomeDoBolo: "Bolo Decorado",
        descricao: "Bolo personalizado com decoração especial para deixar sua comemoração ainda mais bonita.",
        sabor: "Chocolate com brigadeiro",
        tamanho: "2,5 kg",
        urlDaImagem:
            "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg"
    },

    {
        nomeDoBolo: "Bolo de Festa Infantil",
        descricao: "Bolo colorido e divertido, preparado especialmente para festas infantis.",
        sabor: "Baunilha com chocolate",
        tamanho: "2 kg",
        urlDaImagem:
            "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
    },

    {
        nomeDoBolo: "Bolo Red Velvet",
        descricao: "Bolo red velvet macio com recheio cremoso e decoração sofisticada.",
        sabor: "Red velvet com cream cheese",
        tamanho: "2 kg",
        urlDaImagem:
            "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg"
    },

    {
        nomeDoBolo: "Bolo de Chocolate Especial",
        descricao: "Bolo de chocolate com cobertura cremosa e decoração especial para comemorações.",
        sabor: "Chocolate com brigadeiro",
        tamanho: "2,5 kg",
        urlDaImagem:
            "https://images.pexels.com/photos/39192452/pexels-photo-39192452.jpeg"
    },

    {
        nomeDoBolo: "Bolo de Flores",
        descricao: "Bolo delicado decorado com flores, ideal para aniversários e ocasiões especiais.",
        sabor: "Baunilha com doce de leite",
        tamanho: "2 kg",
        urlDaImagem:
            "https://images.pexels.com/photos/29388913/pexels-photo-29388913.jpeg"
    }
];


createBoloFestaCard(bolosFesta);


function createBoloFestaCard(bolos) {

    const galeria = document.querySelector(".galeria-festa");

    galeria.innerHTML = "";

    bolos.forEach(bolo => {

        let card = document.createElement("section");

        let name = document.createElement("h3");

        let descricao = document.createElement("p");

        let sabor = document.createElement("p");

        let tamanho = document.createElement("p");

        let img = document.createElement("img");

        let botao = document.createElement("a");


        // Nome do bolo
        name.textContent = bolo.nomeDoBolo;


        // Descrição
        descricao.innerHTML =
            `<span class="label" > Descrição:</span > ${ bolo.descricao } `;


        // Sabor
        sabor.innerHTML =
            `<span class="label" > Sabor:</span > ${ bolo.sabor } `;


        // Tamanho
        tamanho.innerHTML =
            `<span class="label" > Tamanho:</span > ${ bolo.tamanho } `;


        // Imagem
        img.setAttribute("src", bolo.urlDaImagem);

        img.setAttribute(
            "alt",
            bolo.descricao
        );

        img.setAttribute("loading", "lazy");


        // Botão de encomenda
        botao.textContent = "Encomendar este bolo";

        botao.setAttribute(
            "href",
            `encomendas.html ? bolo = ${ encodeURIComponent(bolo.nomeDoBolo) } `
        );

        botao.classList.add("botao-encomenda");


        // Monta o card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(descricao);
        card.appendChild(sabor);
        card.appendChild(tamanho);
        card.appendChild(botao);


        // Adiciona o card na galeria
        galeria.appendChild(card);

    });
}


