const progresso = document.getElementById("progresso");
const ant = document.getElementById("ant");
const prox = document.getElementById("prox");
const circulos = document.querySelectorAll(".circulos");

let ativoAtual = 1;

prox.addEventListener("click", () => {
    ativoAtual++;

    if (ativoAtual > circulos.length) {
        ativoAtual = circulos.length;
    }

    update();
});

ant.addEventListener("click", () => {
    ativoAtual--;

    if (ativoAtual < 1) {
        ativoAtual = 1;
    }

    update();
});

function update() {
    circulos.forEach((circulos, idx) => {
        if (idx < ativoAtual) {
            circulos.classList.add("ativo");
        } else {
            circulos.classList.remove("ativo");
        }
    });

    const ativos = document.querySelectorAll(".ativo");
    
    progresso.style.width = ((ativos.length -1) / (circulos.length -1)) * 100 + "%";

    if (ativoAtual === 1) {
        ant.disabled = true;
    } else if (ativoAtual === circulos.length) {
        prox.disabled = true;
    } else {
        ant.disabled = false;
        prox.disabled = false;
    }

}





