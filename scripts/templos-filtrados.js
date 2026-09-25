const menuToggle = document.getElementById('menu');
const menuLinks = document.getElementById('menuLinks');

menuToggle.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

//document.getElementById('currentyear').textContent = new Date().getFullYear();

//document.getElementById('ultimaModificacao').textContent =
//    `Última modificação: ${document.lastModified}`;



//document.querySelector('#all').addEventListener('click', () => {
//    toggleActive(document.querySelector('#all'));
//    createTempleCard(templos);
//});

//document.querySelector('#old').addEventListener('click', () => {
    toggleActive(document.querySelector('#old'));
    createTempleCard(templos.filter(templo => new Date(templo.dedication) < new Date('1950-01-01')));
//});

//document.querySelector('#new').addEventListener('click', () => {
//    toggleActive(document.querySelector('#new'));
//    createTempleCard(templos.filter(templo => new Date(templo.dedication) >= new Date('1950-01-01')));
//});

//document.querySelector('#large').addEventListener('click', () => {
//    toggleActive(document.querySelector('#large'));
//    createTempleCard(templos.filter(templo => templo.area > 50000));
//});

//document.querySelector('#small').addEventListener('click', () => {
//    toggleActive(document.querySelector('#small'));
//    createTempleCard(templos.filter(templo => templo.area < 50000));
//});

const cutoffDate = new Date('1950-01-01');
const largeArea = 50000;

function setFiler(seletor, filterFunction) {
    const element = document.querySelector(seletor);

    element.addEventListener('click', () => {
        toggleActive(element);
        createTempleCard(templos.filter(filterFunction));
    });
}

setFiler('#all', () => templos);
setFiler('#old', templo => new Date(templo.dedication) < cutoffDate);
setFiler('#new', templo => new Date(templo.dedication) > cutoffDate);
setFiler('#large', templo => templo.area > largeArea);
setFiler('#small', templo => templo.area < largeArea);

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005-08-07",
        area: 11500,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888-05-21",
        area: 74792,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015-06-07",
        area: 96630,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020-05-02",
        area: 6861,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974-19-11",
        area: 156558,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986-01-10",
        area: 9600,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México, México",
        localizacao: "Cidade do México, México",
        consagracao: "1983-12-02",
        area: 116642,
        urlDaImagem:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Adicione mais objetos de templos aqui...
    {
        nomeDoTemplo: "Templo de Recife, Basil",
        localizacao: "Brasil, Recife",
        consagracao: "1995-01-01",
        area: 37200,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778.jpg"
    },

    {
        nomeDoTemplo: "Templo de São Paulo, Basil",
        localizacao: "Brasil, São Paulo",
        consagracao: "1978-10-30",
        area: 37200,
        urlDaImagem:
            "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-9671-thumb.jpg"
    },


];

createTempleCard(templos); 

function createTempleCard(templos) {
    document.querySelector('.galeria').innerHTML = '';

    templos.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.nomeDoTemplo; 
        location.innerHTML = `<span class="label">Localização:</span> ${temple.localizacao}`; 
        dedication.innerHTML = `<span class="label">Dedicado:</span> ${temple.consagracao}`;
        area.innerHTML = `<span class="label">Tamanho:</span> ${temple.area} pés²`; 
        img.setAttribute("src", temple.urlDaImagem); 
        img.setAttribute("alt", `Templo ${temple.nomeDoTemplo}`); 
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".galeria").appendChild(card);
    });
}