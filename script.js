// ============================================
// CONFIGURAÇÃO DO CARROSSEL
// ============================================

const imagens = [
    "./img/lab/exec_1_des.png",
    "./img/lab/exec_1_lig.png",
];

const textos = [
    "Teste",
    "Teste 2"
];


// ============================================
// FUNCIONAMENTO DO CARROSSEL
// ============================================

let indice = 0;

const imagem = document.getElementById("imagem");
const texto = document.getElementById("texto");

const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");


function atualizar() {

    imagem.src = imagens[indice];

    texto.textContent = textos[indice];

}


proximo.addEventListener("click", () => {

    indice++;

    if (indice >= imagens.length) {
        indice = 0;
    }

    atualizar();

});


anterior.addEventListener("click", () => {

    indice--;

    if (indice < 0) {
        indice = imagens.length - 1;
    }

    atualizar();

});
