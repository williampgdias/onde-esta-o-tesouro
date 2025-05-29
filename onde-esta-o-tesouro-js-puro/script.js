const tabuleiro = document.getElementById('tabuleiro');
const linhas = 5;
const colunas = 5;
const posicaoTesouro = {
    linha: 2,
    coluna: 3,
};

for (let linha = 0; linha < linhas; linha++) {
    for (let coluna = 0; coluna < colunas; coluna++) {
        const celulaHTML = document.createElement('div');
        celulaHTML.classList.add('celula');

        tabuleiro.appendChild(celulaHTML);
    }
}
