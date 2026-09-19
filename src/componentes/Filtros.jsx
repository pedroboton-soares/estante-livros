function Filtros({
  sagas,
  sagaSelecionada,
  onSagaChange,
  ordenacao,
  onOrdenacaoChange,
}) {
  return (
    <div className="filtros">
      <div className="filtro">
        <label htmlFor="filtro-saga">Saga</label>

        <select
          id="filtro-saga"
          value={sagaSelecionada}
          onChange={(evento) => onSagaChange(evento.target.value)}
        >
          <option value="Todas">Todas</option>

          {sagas.map((saga) => (
            <option key={saga} value={saga}>
              {saga}
            </option>
          ))}
        </select>
      </div>

      <div className="filtro">
        <label htmlFor="filtro-ordenacao">Ordenar por</label>

        <select
          id="filtro-ordenacao"
          value={ordenacao}
          onChange={(evento) => onOrdenacaoChange(evento.target.value)}
        >
          <option value="nota">Nota: maior para menor</option>
          <option value="titulo">Título: A-Z</option>
        </select>
      </div>
    </div>
  );
}

export default Filtros;
