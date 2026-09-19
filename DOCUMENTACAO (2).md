# Documentação, Interface React: Minha Estante

## 1. O que é a interface

Interface que mostra minha coleção pessoal de 72 livros já lidos, em cards, com busca por título, filtro por saga e ordenação por nota ou título.

## 2. Como instalar e rodar

```
npm install
npm run dev
```
Abre no navegador em `http://localhost:5173/` (ou a porta que o terminal mostrar, se a 5173 estiver ocupada).

## 3. Tecnologias, com as versões instaladas, e o que cada uma faz

Saída de `npm list --depth=0`, rodado dentro da pasta do projeto:
```
├── @vitejs/plugin-react@6.1.1
├── oxlint@1.83.0
├── react-dom@19.3.0
├── react@19.3.0
└── vite@8.3.0
```

| Tecnologia | Versão | O que faz |
|---|---|---|
| Node | v24.16.0 | Ambiente que roda o JavaScript fora do navegador, necessário pro npm/Vite funcionarem |
| react | 19.3.0 | Biblioteca que monta a interface em componentes |
| react-dom | 19.3.0 | Conecta os componentes React à página no navegador |
| vite | 8.3.0 | Serve o projeto localmente e traduz o JSX para JavaScript |
| @vitejs/plugin-react | 6.1.1 | Plugin que permite o Vite entender arquivos .jsx |
| oxlint | 1.83.0 | Linter: aponta erros de escrita no código enquanto edito (instalado por padrão pelo `npm create vite`) |

## 4. Estilo arquitetural e padrões declarados à IA

Declarei, antes de pedir qualquer código: árvore de componentes, com os dados descendo por props numa direção só, e nenhum componente mexendo direto em outro. Também declarei a separação entre contêiner (`ListaEstante`, que decide o que mostrar) e apresentação (`Card`, que só desenha um livro). Isso evitou que a IA escolhesse um gerenciador de estado global (Redux, Context API) ou misturasse a lógica de filtro dentro do próprio `Card`.

## 5. Lista dos componentes, e o que cada um faz

- **Cabecalho.jsx:** mostra o título "Minha Estante" e a contagem de livros exibidos no momento (muda conforme busca/filtro).
- **BarraBusca.jsx:** campo de texto que busca por título, em tempo real.
- **Filtros.jsx:** dois seletores, um de saga (13 sagas + "Todas") e um de ordenação (nota ou título).
- **Card.jsx:** desenha um livro (título, saga, gênero, nota). **É o componente reaproveitado**, usado uma vez para cada um dos 72 livros.
- **ListaEstante.jsx:** contêiner. Recebe a lista já filtrada/ordenada, desenha os Cards num grid responsivo, ou a mensagem de "nenhum livro encontrado".

## 6. Ambiente de desenvolvimento

- Sistema operacional: Windows
- Editor de texto: Visual Studio Code
- Navegador usado para testar: Chrome
- Versão do Node: v24.16.0

## 7. Qual IA foi usada, com a versão

- Código (App.jsx, componentes e CSS): ChatGPT, modelo 1.2026.244 (33940143573), setembro/2026.
- Revisão: Gemini, em conversa separada da que gerou o código.
