import { useEffect, useState } from "react";
import EtapasPedido from "./EtapasPedido";
import ListaDeProdutos from "./ListaDeProdutos";
import { LocalizacaoDaOrdemData, Produto } from "./types";
import "./styles.css";
import { carregaProdutos } from "../api";
import LocalizacaoOrdem from "./LocalizacaoOrdem";
import ResumoOrdem from "./ResumoOrdem";
import Footer from "../Footer";
import { verificaSeEstaSelecionado } from "./funcoesAuxiliares";

const Ordens = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtosSelecionados, setProdutosSelecionados] = useState<Produto[]>(
    []
  );
  const valorTotal = produtosSelecionados.reduce((soma, atual) => {
    return soma + atual.preco;
  }, 0);

  const [
    localizacaoOrdem,
    setLocalizacaoOrdem,
  ] = useState<LocalizacaoDaOrdemData>();

  useEffect(() => {
    carregaProdutos()
      .then((response) => setProdutos(response.data))
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  //funçao que vai marcar o item como selecionado
  const handleSelecionaProduto = (produto: Produto) => {
    const estaSelecionado = verificaSeEstaSelecionado(
      produtosSelecionados,
      produto
    );

    if (estaSelecionado) {
      const selecionado = produtosSelecionados.filter(
        (item) => item.id !== produto.id
      );
      setProdutosSelecionados(selecionado);
    } else {
      setProdutosSelecionados((produtosJaEscolhidos) => [
        ...produtosJaEscolhidos,
        produto,
      ]); //adiciona o novo aos antigos
    }
  };
  return (
    <>
      <div className="ordens-container">
        <EtapasPedido />
        <ListaDeProdutos
          produtos={produtos}
          aoSelecionarProduto={handleSelecionaProduto}
          produtosSelecionados={produtosSelecionados}
        />
        <LocalizacaoOrdem
          onChangeLocalizacao={(localizacao) =>
            setLocalizacaoOrdem(localizacao)
          }
        />
        <ResumoOrdem
          quantidade={produtosSelecionados.length}
          valorTotal={valorTotal}
        />
      </div>
      <Footer />
    </>
  );
};
export default Ordens;
