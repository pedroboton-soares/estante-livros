import Card from "./Card";

function ListaEstante({ livros }) {
  if (livros.length === 0) {
    return (
      <section className="lista-vazia">
        <div className="lista-vazia__icone" aria-hidden="true">
          ◌
        </div>

        <h2>Nenhum livro encontrado</h2>

        <p>
          Tente alterar a busca ou selecionar outra saga para encontrar
          algum livro da sua estante.
        </p>
      </section>
    );
  }

  return (
    <section className="lista-estante" aria-label="Livros da estante">
      {livros.map((livro) => (
        <Card key={livro.id} livro={livro} />
      ))}
    </section>
  );
}

export default ListaEstante;
