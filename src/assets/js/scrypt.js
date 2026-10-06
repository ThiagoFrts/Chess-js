const tabuleiroDiv = document.querySelector(".tabuleiro");

for (let linha = 0; linha < 8; linha++) {
    for (let coluna = 0; coluna < 8; coluna++) {
        const casa = document.createElement("div");

        if ((linha + coluna) % 2 == 0) {
            casa.classList.add("branco");
        }
        else {
            casa.classList.add("preto")
        }
        tabuleiroDiv.appendChild(casa);
    }
}

const posicaoInicialPreta = [
    { tipo: "torre", cor: "p" },
    { tipo: "cavalo", cor: "p" },
    { tipo: "bispo", cor: "p", },
    { tipo: "rainha", cor: "p", },
    { tipo: "rei", cor: "p" },
    { tipo: "bispo", cor: "p" },
    { tipo: "cavalo", cor: "p" },
    { tipo: "torre", cor: "p" },


]
