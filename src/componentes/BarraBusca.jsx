function BarraBusca({ busca, onBuscaChange }) {
  return (
    <div className="busca">
      <label htmlFor="campo-busca">Buscar livro</label>

      <div className="busca__campo">
        <span className="busca__icone" aria-hidden="true">
          ⌕
        </span>

        <input
          id="campo-busca"
          type="search"
          placeholder="Digite o título..."
          value={busca}
          onChange={(evento) => onBuscaChange(evento.target.value)}
        />
      </div>
    </div>
  );
}

export default BarraBusca;
