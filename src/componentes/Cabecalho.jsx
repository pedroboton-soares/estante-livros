function Cabecalho({ quantidade }) {
  return (
    <header className="cabecalho">
      <div>
        <p className="cabecalho__eyebrow">MINHA COLEÇÃO</p>
        <h1>Minha Estante</h1>
      </div>

      <div className="cabecalho__contagem">
        <strong>{quantidade}</strong>
        <span>{quantidade === 1 ? "livro" : "livros"}</span>
      </div>
    </header>
  );
}

export default Cabecalho;
