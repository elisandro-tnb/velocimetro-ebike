codigo de teste f12 navegador

(function iniciarSimulacao() {
    let velSimulada = 0;
    let acelerando = true;

    // Cancela qualquer simulação anterior que já esteja rodando
    if (window.timerSimulacao) clearInterval(window.timerSimulacao);

    console.log("🚀 Simulação iniciada! Digite 'pararSimulacao()' no console para interromper.");

    window.timerSimulacao = setInterval(() => {
        // Acelera de 0.8 em 0.8 km/h até chegar a 48 km/h
        if (acelerando) {
            velSimulada += 0.8;
            if (velSimulada >= 48) acelerando = false; // Começa a frear
        } else {
            // Freia de 1.2 em 1.2 km/h até voltar ao zero
            velSimulada -= 1.2;
            if (velSimulada <= 0) {
                velSimulada = 0;
                acelerando = true; // Volta a acelerar
            }
        }

        // Atualiza a velocidade atual no painel e nos cálculos
        updateSpeed(velSimulada);

    }, 100); // Executa a cada 100ms (10 vezes por segundo)
})();

// Função global para você parar a simulação quando quiser
window.pararSimulacao = function() {
    clearInterval(window.timerSimulacao);
    updateSpeed(0);
    console.log("🛑 Simulação parada e velocímetro zerado.");
};

pararSimulacao();  //para parar