const tabuleiro = document.getElementById('tabuleiro');
const linhas = 5;
const colunas = 5;
const posicaoTesouro = {
    linha: Math.floor(Math.random() * linhas),
    coluna: Math.floor(Math.random() * colunas),
};

console.log(posicaoTesouro);

for (let linha = 0; linha < linhas; linha++) {
    for (let coluna = 0; coluna < colunas; coluna++) {
        const celulaHTML = document.createElement('div');
        celulaHTML.classList.add('celula');
        celulaHTML.dataset.linha = linha;
        celulaHTML.dataset.coluna = coluna;
        tabuleiro.appendChild(celulaHTML);

        celulaHTML.addEventListener('click', function () {
            const linhaClicada = parseInt(this.dataset.linha);
            const colunaClicada = parseInt(this.dataset.coluna);

            if (
                linhaClicada === posicaoTesouro.linha &&
                colunaClicada === posicaoTesouro.coluna
            ) {
                this.classList.add('tesouro');
                setTimeout(() => {
                    alert('Parabéns! Você encontrou o tesouro!');
                }, 1000);
            } else {
                const distanciaTesouro =
                    Math.abs(linhaClicada - posicaoTesouro.linha) +
                    Math.abs(colunaClicada - posicaoTesouro.coluna);

                if (distanciaTesouro >= 6) {
                    this.classList.add('frio');
                } else if (distanciaTesouro >= 4) {
                    this.classList.add('morno');
                } else if (distanciaTesouro >= 2) {
                    this.classList.add('quente');
                } else if (distanciaTesouro === 1) {
                    this.classList.add('muito-quente');
                }
                console.log(distanciaTesouro);
            }
        });
    }
}
