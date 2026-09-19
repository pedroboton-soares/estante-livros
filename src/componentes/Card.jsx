function Card({ livro }) {
  const notaValida = typeof livro.nota === "number" && !Number.isNaN(livro.nota);

  return (
    <article className="card">
      <div className="card__topo">
        <span className="card__saga">{livro.saga}</span>

        <span className="card__nota" aria-label={`Nota ${livro.nota}`}>
          ★ {notaValida ? livro.nota.toFixed(1) : "-"}
        </span>
      </div>

      <div className="card__conteudo">
        <h2>{livro.titulo}</h2>
        <p>{livro.genero}</p>
      </div>
    </article>
  );
}

export default Card;
