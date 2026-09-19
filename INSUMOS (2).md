# Insumos - Interface React: Minha Estante

## 1. Referências visuais

> Tire o print de cada uma (tela cheia da página principal ou da tela de
> biblioteca/estante) e salve como imagem, ex: `insumos/ref-goodreads.png`.

### Referência 1 — Goodreads (goodreads.com)
- **O que aproveitar:** o conceito de "estante" com capa, título, nota em estrelas e visual em grid de cards.
- **O que NÃO copiar:** o layout específico da marca, as cores, os textos.
- Print: `insumos/ref-goodreads.png`

### Referência 2 — Skoob (skoob.com.br)
- **O que aproveitar:** a organização por status de leitura e a busca simples no topo.
- **O que NÃO copiar:** o layout específico da marca, as cores, os textos.
- Print: `insumos/ref-skoob.png`

### Referência 3 — The StoryGraph (thestorygraph.com)
- **O que aproveitar:** os filtros visuais (chips/tags clicáveis) e a ordenação por nota.
- **O que NÃO copiar:** o layout específico da marca, as cores, os textos.
- Print: `insumos/ref-storygraph.png`

## 2. Paleta de cores

Sugestão para uma estante de livros de fantasia/ficção: tom acolhedor, remetendo a papel e capa de livro, sem parecer infantil.

| Cor | Hex | Uso |
|---|---|---|
| Vinho | `#6B2D3C` | Cor principal, cabeçalho, destaques |
| Dourado envelhecido | `#C9A24B` | Nota, detalhes, bordas de destaque |
| Bege papel | `#F5F0E6` | Fundo principal |
| Cinza-grafite | `#2E2A26` | Texto |
| Verde-musgo | `#5C7A5C` | Botão/filtro ativo (cor de contraste) |

## 3. De onde vieram os dados

O `dados.json` foi digitado por Pedro, a partir da própria lista de livros já lidos (72 títulos, organizados em 13 sagas: Harry Potter, O Senhor dos Anéis, As Crônicas de Gelo e Fogo, Percy Jackson e os Olimpianos, Os Heróis do Olimpo, Magnus Chase e os Deuses de Asgard, As Crônicas dos Kane, Jogos Vorazes, Divergente, O Mochileiro das Galáxias, Diário de um Banana, As Crônicas de Nárnia, Deixados para Trás). As notas são a avaliação pessoal de cada livro, numa escala de 0 a 10.

## 4. Restrições (o que a IA NÃO pode fazer)

1. Não inventar livro, saga, gênero ou nota que não esteja no `dados.json`.
2. Não usar TypeScript, Tailwind, router ou gerenciador de estado (regra do material da aula 3).
3. Não usar biblioteca de componentes prontos (ex: Material UI, Bootstrap React).
4. Não colocar estilo dentro do JSX; CSS sempre em arquivo separado, com `className`.
5. Não usar capas de livro reais sem licença; se usar imagem de capa, usar apenas ilustração genérica ou ícone, não a capa oficial protegida por direito autoral.
