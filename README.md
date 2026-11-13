# Cirrus: site

Página única e estática do jogo Cirrus, feita pra ir pro GitHub Pages.

- `index.html`: todo o conteúdo (textos, links, galeria)
- `style.css`: visual
- `script.js`: só abre os prints ampliados
- `img/`: prints convertidos pra webp (os originais ficam em `Pictures\prints`)
- `fonts/`: fonte Free Cheese, de GGBotNet (CC0), a mesma do jogo

## Alterações comuns

- **Ligar o itch.io ou a Steam:** em `index.html`, na seção "Jogar / seguir",
  troque o `href` do botão e apague a palavra `hidden`.
- **Trocar prints:** coloque o arquivo novo em `img/` e ajuste o `<button class="foto">`
  da galeria.
- **Texto pessoal:** substitua o parágrafo `rascunho` na seção "Por que eu faço o Cirrus".
- **Prévia no X:** o `og:image` usa o endereço completo
  (`https://konbeda.github.io/cirrus/img/og.jpg`). Se o endereço do site mudar, troque ali.

No ar em https://konbeda.github.io/cirrus/ (GitHub Pages, branch `main`, raiz).
Qualquer push na `main` atualiza o site em 1 ou 2 minutos.
