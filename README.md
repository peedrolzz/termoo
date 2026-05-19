# PedroWords

Live demo: https://termoo-peedrolzz.netlify.app/

PedroWords é um jogo simples inspirado no Wordle, criado com HTML, CSS e JavaScript puros. O objetivo é adivinhar uma palavra de 5 letras em até 6 tentativas.

## Como jogar

1. Digite uma palavra de 5 letras no campo de entrada.
2. Clique em `Enviar` ou pressione Enter.
3. Cada letra será avaliada e colorida:
   - Verde: letra correta na posição correta.
   - Amarelo: letra presente na palavra, mas em posição diferente.
   - Cinza: letra não está na palavra.
4. Continue tentando até acertar a palavra ou até esgotar as 6 tentativas.

## Recursos

- Interface leve com layout responsivo.
- Verificação simples de letras e posicionamento.
- Feedback visual claro por cor.
- Palavra aleatória selecionada a cada carregamento.
- Bloqueio de novas tentativas após vitória ou derrota.
- Envio por botão ou Enter sem recarregar a página.

## Arquivos principais

- `index.html` — estrutura da página.
- `style.css` — estilos e layout.
- `script.js` — lógica do jogo e controle de tentativas.

## Como executar localmente

1. Abra o arquivo `index.html` em um navegador moderno.
2. Ou inicie um servidor local simples (opcional):

```bash
python3 -m http.server 8000
```

3. Acesse `http://localhost:8000` no navegador.

## Sobre

Este projeto é uma versão caseira de um jogo de palavras, ideal para praticar DOM, eventos e lógica em JavaScript.
