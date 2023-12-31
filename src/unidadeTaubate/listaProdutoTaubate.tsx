import React, { Component } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../estilos/styles.module.css';
import { Link } from 'react-router-dom';


type Produto = {
    nome: string;
    preco: number;
}

type State = {
    produtos: Produto[];
    produtoModal: Produto;
    showModal: boolean;
    filtroProduto: string;
    
}

export default class ListaProdutoTaubate extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            produtos: [],
            produtoModal: { nome: '', preco: 0 },
            showModal: false,
            filtroProduto: '',
            
        };
    }

    componentDidMount() {
        let produtos: Produto[] = [
        { nome: "Shampoo", preco: 100 },
        { nome: "Condicionador", preco: 110 },
        { nome: "Óleo secante", preco: 12 },
        { nome: "Esmalte", preco: 10 },
        { nome: "Máscara capilar", preco: 140 },
        { nome: "Máscara facial", preco: 150 },
        { nome: "Secador de cabelo", preco: 160 },
        { nome: "Algodão", preco: 10 },
        { nome: "Lixa", preco: 5 },
        { nome: "Alicate", preco: 20 },
        { nome: "Pente", preco: 15 },
        { nome: "Escova de cabelo", preco: 30 },
        { nome: "Creme de pentear", preco: 50 },
        { nome: "Gel", preco: 20 },
        { nome: "Pomada", preco: 25 },
        { nome: "Cera", preco: 30 },
        { nome: "Spray", preco: 40 },
        { nome: "Mousse", preco: 45 },
        { nome: "Gloss", preco: 30 },
        { nome: "Batom", preco: 50 },
        { nome: "Base", preco: 60 }
        ];

        produtos = produtos.sort((a, b) => a.nome.localeCompare(b.nome));

    this.setState({ produtos });
}

    handleEditarClick = (produto: Produto) => {
      this.setState({ produtoModal: produto, showModal: true });
  };
  
    handleSalvarClick = () => {
    
    this.setState({ showModal: false });
};

handleNomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState(prevState => ({
      produtoModal: {
          ...prevState.produtoModal,
          nome: event.target.value || prevState.produtoModal.nome
      }
  }));
};

handlePrecoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState(prevState => ({
      produtoModal: {
          ...prevState.produtoModal,
          preco: parseFloat(event.target.value) || prevState.produtoModal.preco
      }
  }));
};

handleCloseModal = () => {
  this.setState({ showModal: false });
};
    
handleExcluirClick = (produto: Produto) => {
      this.setState(state => ({
          produtos: state.produtos.filter(p => p !== produto)
      }));
  };
 
 handleFiltroProdutoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ filtroProduto: event.target.value });
}
    

    render() {
      const { produtos, produtoModal, showModal, filtroProduto } = this.state;
      const produtosFiltrados = produtos.filter(produto => produto.nome.toLowerCase().includes(filtroProduto.toLowerCase()));
        return (
          <>
            <div className={styles['container-lista']}>
              <div className={styles['wrap-lista']}>
                <div className={styles['titulo-tabela']}>
                  <h1>Lista de Produtos</h1>
                </div>
                <div className={styles['titulo-tabela2']}>                           
                    <input type="text" value={this.state.filtroProduto} onChange={this.handleFiltroProdutoChange} placeholder="Buscar por serviço" />
                    <Link to="/cadastroSJC">
                        <button>Cadastrar </button>
                    </Link>
                </div>
                <div className={styles['table-responsive']}>
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Alterar</th>
                        <th>Excluir</th>
                      </tr>
                    </thead>
                    <tbody>
                    {produtosFiltrados.map((produto, index) => (
                        <tr key={index} >
                          <td>{produto.nome}</td>
                          <td>{produto.preco}</td>
                          <td><button onClick={() => this.handleEditarClick(produto)}>Editar</button></td>
                          <td><button onClick={() => this.handleExcluirClick(produto)}>Excluir</button></td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
                    
            </div>
            <Modal show={showModal} onHide={this.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Produto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form>
                  <div className="form-group">
                      <label htmlFor="produtoNome">Nome</label>
                      <input type="text" className="form-control" id="produtoNome" value={produtoModal?.nome} onChange={this.handleNomeChange} />
                  </div>
                  <div className="form-group">
                      <label htmlFor="produtoPreco">Preço</label>
                      <input type="number" className="form-control" id="produtoPreco" value={produtoModal?.preco} onChange={this.handlePrecoChange} />
                  </div>
                </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleCloseModal}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={this.handleSalvarClick}>
                        Salvar Alterações
                    </Button>
                </Modal.Footer>
            </Modal>                    
            </>
        );
    }
}