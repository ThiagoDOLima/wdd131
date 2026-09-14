/* =========================================================
   RODAPÉ — Ano atual e última modificação do documento
========================================================= */

document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("ultimaModificacao").textContent =
    `Última modificação: ${document.lastModified}`;


/* =========================================================
SEÇÃO CLIMA — Sensação térmica
========================================================= */

// Valores estáticos (nesta etapa do curso).
// No futuro, virão de uma API de clima em tempo real.
const temperaturaAtual = 5;        // °C
const velocidadeVentoAtual = 20;   // km/h
const unidade = "C";               // "C" para métrico, "F" para imperial


/**
 * Calcula o fator de sensação térmica (wind chill).
 * Usa a fórmula correspondente à unidade adotada pelo local:
 * - Métrico (°C, km/h): fórmula do Environment Canada
 * - Imperial (°F, mph): fórmula do National Weather Service (EUA)
 *
 * @param {number} temperatura - temperatura no ar
 * @param {number} velocidadeVento - velocidade do vento
 * @param {string} unidade - "C" (métrico) ou "F" (imperial)
 * @returns {number} sensação térmica, arredondada a 1 casa decimal
 */
function calcularSensacaoTermica(temperatura, velocidadeVento, unidade) {
    return unidade === "F"
        ? Math.round((35.74 + 0.6215 * temperatura - 35.75 * Math.pow(velocidadeVento, 0.16) + 0.4275 * temperatura * Math.pow(velocidadeVento, 0.16)) * 10) / 10
        : Math.round((13.12 + 0.6215 * temperatura - 11.37 * Math.pow(velocidadeVento, 0.16) + 0.3965 * temperatura * Math.pow(velocidadeVento, 0.16)) * 10) / 10;
}


/**
 * Verifica se as condições mínimas para o cálculo de sensação
 * térmica são atendidas e exibe o resultado (ou "N/A") na tela.
 *
 * Condições para o cálculo ser considerado viável:
 *   Métrico:   temperatura <= 10°C   E   vento > 4.8 km/h
 *   Imperial:  temperatura <= 50°F   E   vento > 3 mph
 */
function exibirSensacaoTermica() {
    const sensacaoTermicaEl = document.querySelector("#sensacaoTermica");
    if (!sensacaoTermicaEl) return;

    const limiteTemperatura = unidade === "F" ? 50 : 10;
    const limiteVento = unidade === "F" ? 3 : 4.8;

    const condicoesAtendidas =
        temperaturaAtual <= limiteTemperatura &&
        velocidadeVentoAtual > limiteVento;

    if (condicoesAtendidas) {
        const resultado = calcularSensacaoTermica(temperaturaAtual, velocidadeVentoAtual, unidade);
        sensacaoTermicaEl.textContent = `${resultado}°${unidade}`;
    } else {
        sensacaoTermicaEl.textContent = "N/A";
    }
}