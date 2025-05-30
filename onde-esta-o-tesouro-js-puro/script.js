const tabuleiro = document.getElementById('tabuleiro');
const btnReiniciar = document.getElementById('reiniciar');
let tentativas = document.querySelector('.tentativas span');

const linhas = 5;
const colunas = 5;
let totalTentativas = 5;

let posicaoTesouro = {
    linha: Math.floor(Math.random() * linhas),
    coluna: Math.floor(Math.random() * colunas),
};
console.log(posicaoTesouro);
criarTabuleiro();

function handleClickCelula(e) {
    const celulaClicadaElement = e.currentTarget;
    const linhaClicada = parseInt(celulaClicadaElement.dataset.linha);
    const colunaClicada = parseInt(celulaClicadaElement.dataset.coluna);

    if (
        linhaClicada === posicaoTesouro.linha &&
        colunaClicada === posicaoTesouro.coluna
    ) {
        celulaClicadaElement.classList.add('tesouro');
        setTimeout(() => {
            alert('Parabéns! Você encontrou o tesouro!');
        }, 1000);

        desabilitarCliques();
    } else {
        const distanciaTesouro =
            Math.abs(linhaClicada - posicaoTesouro.linha) +
            Math.abs(colunaClicada - posicaoTesouro.coluna);

        if (distanciaTesouro >= 6) {
            this.classList.add('frio');
            this.textContent = distanciaTesouro;
        } else if (distanciaTesouro >= 4) {
            this.classList.add('morno');
            this.textContent = distanciaTesouro;
        } else if (distanciaTesouro >= 2) {
            this.classList.add('quente');
            this.textContent = distanciaTesouro;
        } else if (distanciaTesouro === 1) {
            this.classList.add('muito-quente');
            this.textContent = distanciaTesouro;
        }
    }

    totalTentativas--;
    tentativas.textContent = totalTentativas;

    if (totalTentativas === 0) {
        const tesouroNaCelula = document.querySelector(
            `[data-linha="${posicaoTesouro.linha}"][data-coluna="${posicaoTesouro.coluna}"]`
        );

        tesouroNaCelula.style.backgroundColor = 'gold';

        setTimeout(() => {
            alert(
                `Você perdeu! O tesouro estava em: 
            Linha: ${posicaoTesouro.linha} 
            Coluna: ${posicaoTesouro.coluna}`
            );
            desabilitarCliques();
        }, 300);
    }
}

function desabilitarCliques() {
    const todasAsCelulas = document.querySelectorAll('.celula');
    todasAsCelulas.forEach((celula) => {
        celula.removeEventListener('click', handleClickCelula);
        celula.style.cursor = 'not-allowed';
    });
}

function reiniciarJogo() {
    // Reiniciar o tabuleiro
    tabuleiro.innerHTML = '';

    totalTentativas = 5;

    // Reposicionar o tesouro
    posicaoTesouro = {
        linha: Math.floor(Math.random() * linhas),
        coluna: Math.floor(Math.random() * colunas),
    };

    // Iniciar o tabuleiro novamente
    criarTabuleiro();
}

function criarTabuleiro() {
    for (let linha = 0; linha < linhas; linha++) {
        for (let coluna = 0; coluna < colunas; coluna++) {
            const celulaHTML = document.createElement('div');
            celulaHTML.classList.add('celula');
            celulaHTML.dataset.linha = linha;
            celulaHTML.dataset.coluna = coluna;
            tabuleiro.appendChild(celulaHTML);

            celulaHTML.addEventListener('click', handleClickCelula);
        }
    }

    // Adicionar tentativas dinamicamente
    tentativas.innerHTML = totalTentativas;
}

btnReiniciar.addEventListener('click', reiniciarJogo);
