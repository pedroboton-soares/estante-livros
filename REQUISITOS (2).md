# Requisitos - Interface React: Minha Estante (Livros)

Interface React (Vite, JavaScript) que mostra a coleção de livros já lidos (72 itens, em 13 sagas), em cards, com busca, filtro e ordenação.

## Requisitos Funcionais (o que a interface FAZ)

1. A interface mostra a coleção de livros em cards, um card por item.
2. Cada card exibe: título, saga, gênero e nota pessoal (0 a 10).
3. Existe um campo de busca que filtra a lista pelo título digitado, em tempo real.
4. Existe um filtro por saga (ex: Harry Potter, O Senhor dos Anéis, ou todas).
5. Existe uma forma de ordenar a lista (por nota, do maior pro menor, ou por título, A-Z).
6. Quando a busca ou o filtro não encontram nenhum item, a interface mostra uma mensagem avisando.
7. Os dados da coleção vêm do arquivo `dados.json`, não estão escritos direto no componente.

## Requisitos Não Funcionais (COMO a interface faz)

1. A interface sobe com `npm install` e `npm run dev`, sem erro no console.
2. Pelo menos 4 componentes próprios, um por arquivo, em `src/componentes/`.
3. O componente de card é reaproveitado (usado 72 vezes, uma por livro, com props diferentes).
4. Pelo menos um estado (`useState`) muda o que aparece na tela (busca, filtro por saga ou ordenação).
5. CSS em arquivo separado, usando `className` (nada de estilo dentro do JSX).
6. O texto se lê sem zoom em tela de celular (responsivo, grid que se adapta).
7. `node_modules/` e `dist/` ficam fora do repositório (`.gitignore`).

## Estilo arquitetural declarado

Árvore de componentes, dados descendo por props em uma direção só. Nenhum componente mexe direto em outro. Separação entre quem busca/filtra os dados (contêiner) e quem só desenha o card (apresentação).
