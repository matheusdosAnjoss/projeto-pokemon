const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagembotaoTrocadetema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {

        imagembotaoTrocadetema.setAttribute("src", "./src/imagens/sun.png")

    } else {

        imagembotaoTrocadetema.setAttribute("src", "./src/imagens/moon.png")
    }

});

