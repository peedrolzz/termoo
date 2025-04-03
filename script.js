const palavras = ["artur", "feliz", "corte", "mundo", "praga", "mouse", "assar", "colar", "aneis", "cabos"]; //array com palavras de 5 letras
const palavracorreta = palavras[Math.floor(Math.random() * palavras.length)]; //gerador de um numero de array aleatorio, para aleatorizar a palavra, peguei em um artigo da alura: https://www.alura.com.br/artigos/funcao-math-random-javascript-numeros-pseudoaleatorios?utm_term=&utm_campaign=%5BSearch%5D+%5BPerformance%5D+-+Dynamic+Search+Ads+-+Artigos+e+Conteúdos&utm_source=adwords&utm_medium=ppc&hsa_acc=7964138385&hsa_cam=11384329873&hsa_grp=164068847699&hsa_ad=703853174125&hsa_src=g&hsa_tgt=dsa-2273097816642&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAu8W6BhC-ARIsACEQoDCRRSz6RI-0asPpVNkPsGMzuWhC1EkL6mz4vBtMZflohGmG8SmR0zcaAuWAEALw_wcB

let tentativas = 0;

function tabela() {
    const grade = document.getElementById("grade");
    for (let i = 0; i < 6; i++) { //cria as colunas, 6 de altura
        for (let j = 0; j < 5; j++) { //cria as linha, 5 de comprimento
            const celula = document.createElement("div");
            celula.className = "celula";
            grade.appendChild(celula);
        }
    }
}

function enviar() {
    event.preventDefault(); //tive que pesquisar essa funcao para funcionar o codigo, pois optei por usar fomulario pois assim da para enviar clicando enter, porem quando enviava o pagina recarregava, isso impede que o formulario quando vazio recarregue a pagina, alura salvando https://cursos.alura.com.br/forum/topico-submit-form-sem-refresh-e-sem-preventdefault-109794
    const entrada = document.getElementById("entrada").value;

    if (entrada.length != 5) {
        alert("A palavra digitada nao contem 5 letras");
       return;
    }

    const celulas = document.getElementsByClassName("celula");

    for (let i = 0; i < 5; i++) { //testa a letra
        const celula = celulas[tentativas * 5 + i]; // pega a celula que sera testada
        const letra = entrada[i]; // pega a letra digitada
    
        if (letra === palavracorreta[i]) { // testa se a letra está na posição correta
            celula.classList.add("correto");
        } else {
            let letrapresente = false;
            for (let j = 0; j < palavracorreta.length; j++) { // testa se a letra esta presente
                if (palavracorreta[j] == letra) { //testa todas as letras da palavra correta com a letra que esta sendo testada
                    letrapresente = true;
                }
            }

            if (letrapresente == true) {
                celula.classList.add("presente");
            } else {
                celula.classList.add("ausente");
            }
        }
        celula.textContent = letra; //adiciona a letra testada a celula
    }
    tentativas++; //aumenta tentativa, em qual tentativa ta

    const tentativasr = document.getElementById("tentativas");
    tentativasr.innerText = "Tentativas: " + tentativas + " de 6";

    if (entrada === palavracorreta) { //se acertou
        const card = document.getElementById("card");
        const status = document.getElementById("status");
        const palavrac = document.getElementById("palavrac");
        const tentativac = document.getElementById("tentativac");

        status.textContent = "Você acertou!";
        status.style.color = "green"; 
        tentativac.textContent = "Tentativas usadas: " + tentativas + " de 6";
        palavrac.textContent = "Palavra correta: " + palavracorreta;
        card.style.display = "block";

    }

    if (tentativas == 6) { // se acabou as tentativas
        const card = document.getElementById("card");
        const status = document.getElementById("status");
        const palavrac = document.getElementById("palavrac");
        const tentativac = document.getElementById("tentativac");

        status.textContent = "Você errou!";
        status.style.color = "red";
        tentativac.textContent = "Tentativas usadas: " + tentativas + " de 6";
        palavrac.textContent = "Palavra correta: " + palavracorreta;
        card.style.display = "block"; 
    }

    document.getElementById("entrada").value = ""; //limpa o input
}

tabela(); //chama a funcao da criacao da tabela (linhas e colunas)
