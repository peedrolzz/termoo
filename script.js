const palavras = ["artur", "feliz", "corte", "mundo", "praga", "mouse", "assar", "colar", "aneis", "cabos"];
let palavracorreta = palavras[Math.floor(Math.random() * palavras.length)];
let tentativas = 0;
let gameOver = false;

function tabela() {
    const grade = document.getElementById("grade");
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
            const celula = document.createElement("div");
            celula.className = "celula";
            grade.appendChild(celula);
        }
    }
}

function atualizarTentativas() {
    const tentativasr = document.getElementById("tentativas");
    tentativasr.innerText = `Tentativas: ${tentativas} de 6`;
}

function mostrarResultado(mensagem, cor) {
    const card = document.getElementById("card");
    const status = document.getElementById("status");
    const palavrac = document.getElementById("palavrac");
    const tentativac = document.getElementById("tentativac");

    status.textContent = mensagem;
    status.style.color = cor;
    tentativac.textContent = `Tentativas usadas: ${tentativas} de 6`;
    palavrac.textContent = `Palavra correta: ${palavracorreta}`;
    card.style.display = "block";
    document.getElementById("entrada").disabled = true;
    gameOver = true;
}

function reiniciar() {
    tentativas = 0;
    gameOver = false;
    palavracorreta = palavras[Math.floor(Math.random() * palavras.length)];

    const celulas = document.querySelectorAll(".celula");
    celulas.forEach((celula) => {
        celula.classList.remove("correto", "presente", "ausente");
        celula.textContent = "";
    });

    const card = document.getElementById("card");
    card.style.display = "none";

    const entradaElement = document.getElementById("entrada");
    entradaElement.disabled = false;
    entradaElement.value = "";
    entradaElement.focus();

    atualizarTentativas();
}

function enviar(event) {
    event.preventDefault();

    if (gameOver) {
        return;
    }

    const entradaElement = document.getElementById("entrada");
    const entrada = entradaElement.value.trim().toLowerCase();

    if (entrada.length !== 5) {
        alert("A palavra digitada precisa ter 5 letras.");
        return;
    }

    const celulas = document.getElementsByClassName("celula");

    for (let i = 0; i < 5; i++) {
        const celula = celulas[tentativas * 5 + i];
        const letra = entrada[i];

        if (letra === palavracorreta[i]) {
            celula.classList.add("correto");
        } else {
            let letrapresente = false;

            for (let j = 0; j < palavracorreta.length; j++) {
                if (palavracorreta[j] === letra) {
                    letrapresente = true;
                    break;
                }
            }

            if (letrapresente) {
                celula.classList.add("presente");
            } else {
                celula.classList.add("ausente");
            }
        }

        celula.textContent = letra;
    }

    tentativas++;
    atualizarTentativas();

    if (entrada === palavracorreta) {
        mostrarResultado("Você acertou!", "green");
    } else if (tentativas === 6) {
        mostrarResultado("Você errou!", "red");
    }

    entradaElement.value = "";
}

tabela();
atualizarTentativas();
