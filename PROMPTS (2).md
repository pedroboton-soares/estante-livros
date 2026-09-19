# Prompts, Processo de Construção da Interface React

Registro do processo, um trecho por etapa dos 8 passos.

## Etapa 1 - Requisitos

Escrevi os requisitos funcionais e não funcionais antes de abrir qualquer IA, decidindo o tema (coleção de livros já lidos) e os campos de dados. Arquivo: `REQUISITOS.md`.

## Etapa 2 - Componentização, antes do código

Decidi a divisão em 5 componentes antes de pedir qualquer código: `Cabecalho` (título e contagem), `BarraBusca` (campo de busca), `Filtros` (saga e ordenação), `Card` (um livro, componente reaproveitado 72 vezes), `ListaEstante` (contêiner que aplica busca/filtro/ordenação e desenha os Cards ou a mensagem de vazio). O estado mora no `App.jsx` e desce por props.

## Etapa 3 - Insumos

Reuni o `dados.json` (72 livros digitados a partir da minha própria lista de leitura, em 13 sagas), a paleta de cores e as restrições do que a IA não pode fazer (não inventar dado, não usar TypeScript/Tailwind/router, não usar capa de livro protegida por direito autoral). Arquivo: `INSUMOS.md`.

## Etapa 4 - Criar a pasta e rodar antes do primeiro prompt

Rodei `npm create vite@latest` (React, JavaScript), depois `npm install` e `npm run dev`, e confirmei a tela inicial do Vite no navegador antes de mandar qualquer prompt pra IA.

## Etapa 5 - Pedir em pedaços

Prompt usado no ChatGPT, com as cinco partes exigidas (contexto, tarefa, regras, formato da resposta, insumo):
```
# Contexto
Tenho um projeto React criado com npm create vite@latest (React + JavaScript,
sem TypeScript), já rodando com npm run dev. [...]

# Tarefa
Criar a interface "Minha Estante": mostra minha coleção de 72 livros já
lidos em cards, com busca por título, filtro por saga e ordenação.

# Regras
- Só React e Vite, em JavaScript. Nada de TypeScript, Tailwind, router,
  gerenciador de estado ou biblioteca de componentes.
- Estilo arquitetural: árvore de componentes, dados descendo por props em
  uma direção só.
- Um componente por arquivo, dentro de src/componentes/.
- CSS em arquivo separado, com className.
- Não invente campo de dado que eu não te dei.
- Use a paleta: vinho #6B2D3C, dourado #C9A24B, bege #F5F0E6, grafite
  #2E2A26, verde-musgo #5C7A5C.

# Formato da resposta
Um bloco de código por arquivo, com o caminho do arquivo no título do bloco.

# Insumo
[amostra do dados.json, sagas e gêneros existentes]
```
Pedi os 5 componentes, o `App.jsx` e o CSS de uma vez, já que a divisão dos componentes já estava decidida e detalhada na etapa 2 (o que reduziu o risco de ficarem inconsistentes entre si). A resposta veio completa, sem cortar no meio.

## Etapa 6 - Correções

Três problemas reais apareceram ao montar o projeto, nenhum deles no código gerado pela IA:

1. **"A conexão com localhost foi recusada":** o `npm run dev` não estava rodando (o terminal tinha sido fechado). Corrigido rodando `npm run dev` de novo.
2. **`npm error ENOENT... Could not read package.json`:** o terminal estava na pasta errada (uma pasta acima da pasta do projeto, criada pelo `npm create vite`). Corrigido com `cd` até a pasta certa antes de rodar o comando.
3. **Pasta `src/componentes/` não existia:** o Vite não cria essa pasta sozinho, ela precisou ser criada manualmente antes de salvar os 5 arquivos de componente ali dentro.

## Etapa 7 - Revisão em outra conversa/ferramenta

Rodei o prompt de revisão numa conversa nova, colando REQUISITOS.md e os 7 arquivos de código. O retorno marcou os 7 requisitos funcionais e 6 dos 7 não funcionais como cumpridos; o requisito do `.gitignore` ficou marcado como "cumprido pela metade" só porque o arquivo não foi incluído na revisão (na prática ele existe, criado automaticamente pelo `npm create vite`).

Fora dos requisitos, encontrou 5 pontos. Dois corrigidos: falta de estado de carregamento (a interface mostrava "nenhum livro encontrado" por um instante antes dos dados chegarem) e erro de rede silencioso (só aparecia no console, agora aparece uma mensagem pro usuário). Um corrigido por precaução: o `Card` quebraria se algum livro viesse sem nota válida. Um descartado após checagem: o alerta de "chave duplicada nas sagas" não se aplica, porque a lista de sagas já passa por `new Set()` antes de virar `<option>`, o que elimina duplicatas. Um deixado como está, por ser cosmético: o ícone de busca usa um caractere Unicode que pode não renderizar bem em todo sistema.

## Etapa 8 - Teste

Rodei `npm run dev`, a interface subiu e os testes manuais (busca, filtro de saga, sem erro no console) foram feitos e confirmados.

---

**Quem revisou o resultado final:** revisão por IA (conversa separada, prompt de revisão) + revisão sua (teste manual da interface, etapa 8).
