import { useEffect, useMemo, useState } from "react";
import Cabecalho from "./componentes/Cabecalho";
import BarraBusca from "./componentes/BarraBusca";
import Filtros from "./componentes/Filtros";
import ListaEstante from "./componentes/ListaEstante";
import "./App.css";

function App() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erroCarregamento, setErroCarregamento] = useState(null);
  const [busca, setBusca] = useState("");
  const [sagaSelecionada, setSagaSelecionada] = useState("Todas");
  const [ordenacao, setOrdenacao] = useState("nota");

  useEffect(() => {
    fetch("/dados.json")
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error("Não foi possível carregar os dados.");
        }

        return resposta.json();
      })
      .then((dados) => setLivros(dados))
      .catch((erro) => {
        console.error("Erro ao carregar dados.json:", erro);
        setErroCarregamento(
          "Não foi possível carregar sua estante agora. Tente recarregar a página."
        );
      })
      .finally(() => setCarregando(false));
  }, []);

  const sagas = useMemo(() => {
    return [...new Set(livros.map((livro) => livro.saga))].sort((a, b) =>
      a.localeCompare(b, "pt-BR")
    );
  }, [livros]);

  const livrosFiltrados = useMemo(() => {
    const resultado = livros.filter((livro) => {
      const correspondeBusca = livro.titulo
        .toLowerCase()
        .includes(busca.toLowerCase());

      const correspondeSaga =
        sagaSelecionada === "Todas" || livro.saga === sagaSelecionada;

      return correspondeBusca && correspondeSaga;
    });

    return [...resultado].sort((a, b) => {
      if (ordenacao === "nota") {
        return b.nota - a.nota;
      }

      return a.titulo.localeCompare(b.titulo, "pt-BR");
    });
  }, [livros, busca, sagaSelecionada, ordenacao]);

  return (
    <div className="app">
      <main className="container">
        <Cabecalho quantidade={livrosFiltrados.length} />

        <section className="controles">
          <BarraBusca
            busca={busca}
            onBuscaChange={setBusca}
          />

          <Filtros
            sagas={sagas}
            sagaSelecionada={sagaSelecionada}
            onSagaChange={setSagaSelecionada}
            ordenacao={ordenacao}
            onOrdenacaoChange={setOrdenacao}
          />
        </section>

        {carregando && <p className="estado-info">Carregando sua estante...</p>}

        {!carregando && erroCarregamento && (
          <p className="estado-info estado-info--erro">{erroCarregamento}</p>
        )}

        {!carregando && !erroCarregamento && (
          <ListaEstante livros={livrosFiltrados} />
        )}
      </main>
    </div>
  );
}

export default App;
