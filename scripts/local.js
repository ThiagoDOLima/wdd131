/* =========================================================
   RODAPÉ — Ano atual e última modificação do documento
========================================================= */

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;


/* ============================================================
   RODAPÉ - Ano atual e data da última modificação do documento
   ============================================================ */
const anoAtualEl = document.getElementById('currentyear');
if (anoAtualEl) {
    anoAtualEl.textContent = new Date().getFullYear();
}

const ultimaModificacaoEl = document.getElementById('lastModified');
if (ultimaModificacaoEl) {
    ultimaModificacaoEl.textContent = 'Última atualização: ' + document.lastModified;
}

/* ============================================================
   CLIMA - Sensação térmica (Wind Chill)
   ============================================================ */

// Valores estáticos (nas próximas etapas do curso serão substituídos
// por dados dinâmicos vindos de uma API de terceiros)
const temperatura = 5;       // °C
const velocidadeVento = 20;  // km/h

/**
 * Calcula a sensação térmica (wind chill) com base na temperatura
 * e na velocidade do vento, usando a fórmula métrica (°C / km/h)
 * adotada por Environment Canada / Serviço Meteorológico.
 *
 * Fórmula:
 * SensaçãoTérmica = 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
 *
 * @param {number} temp - temperatura em °C
 * @param {number} vento - velocidade do vento em km/h
 * @returns {number} sensação térmica em °C
 */
function calcularSensacaoTermica(temp, vento) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16);
}

// Elemento da página onde o resultado será exibido
const sensacaoTermicaEl = document.getElementById('sensacaoTermica');

// A função só é chamada se as condições de viabilidade forem atendidas:
// Temperatura <= 10 °C  E  Velocidade do vento > 4.8 km/h
let resultadoSensacaoTermica;

if (temperatura <= 10 && velocidadeVento > 4.8) {
    resultadoSensacaoTermica = calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1) + ' °C';
} else {
    resultadoSensacaoTermica = 'N/A';
}

if (sensacaoTermicaEl) {
    sensacaoTermicaEl.textContent = resultadoSensacaoTermica;
}