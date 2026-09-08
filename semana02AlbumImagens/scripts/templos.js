const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('_______', () => {
    navigation._______.toggle('_______');
    hamButton.classList.toggle('open');
});

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;