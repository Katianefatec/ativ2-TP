import React, { Component } from 'react';
import { Table, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles.module.css';


type Cliente = {
    nome: string;
    nomeSocial: string;
    cpf: string;
    rgs: string[];
    genero: string;
    dataCadastro: string;
    telefones: string[];
}

type State = {
    clientes: Cliente[];
    modalShow: boolean;
    clienteModal: Cliente | null;
}

export default class ListaClientes extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            clientes: [],
            modalShow: false,
            clienteModal: null
        };
    }

    componentDidMount() {
        
        const clientesFicticios: Cliente[] = [
            {
                nome: 'João',
                nomeSocial: 'Jonh',
                cpf: '22222222222',
                rgs: ['222222222'],
                genero: 'Masculino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(11) 111111111']
            },
            {
                nome: 'Maria',
                nomeSocial: 'Mary',
                cpf: '33333333333',
                rgs: ['333333333'],
                genero: 'Feminino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(22) 222222222']
            },
            
            {
                nome: 'Fabio',
                nomeSocial: 'Fab',
                cpf: '34343434343',
                rgs: ['343434343'],
                genero: 'Masculino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(31) 313131313']
            },

            {
                nome: 'Ana',
                nomeSocial: 'Ana',
                cpf: '44444444444',
                rgs: ['444444444'],
                genero: 'Feminino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(44) 444444444']
            },

            {
                nome: 'Joaquim',
                nomeSocial: 'Joaq',
                cpf: '55555555555',
                rgs: ['555555555'],
                genero: 'Masculino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(55) 555555555']
            },

            {
                nome: 'Pedro',
                nomeSocial: 'Ped',
                cpf: '66666666666',
                rgs: ['666666666'],
                genero: 'Masculino',
                dataCadastro: new Date().toISOString(),
                telefones: ['(66) 666666666']
            }

            
        ];
    
        this.setState({ clientes: clientesFicticios });
    }

    handleRowClick = (cliente: Cliente) => {
        this.setState({
            modalShow: true,
            clienteModal: cliente
        });
    }

    // componentDidMount() {
    //     // Substitua 'http://localhost:3000/clientes' pela URL do seu servidor
    //     fetch('http://localhost:3000/clientes')
    //         .then(response => response.json())
    //         .then(clientes => this.setState({ clientes }));
    // }

    render() {
        const { clientes, modalShow, clienteModal } = this.state;
        return (
            <>
            <div className={styles['container-login']}>
            <h1>Lista de Clientes</h1>
            <div className={styles['wrap-lista']}>
            <Table striped hover>
                <thead>
                    <tr>
                        <th colSpan={2}>Nome</th>
                        <th colSpan={2}>Telefone</th>
                        <th colSpan={1}>Gênero</th>
                        <th colSpan={1}>Consumo</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.clientes.map((cliente, index) => (
                        <tr key={index} onClick={() => this.handleRowClick(cliente)}>
                            <td colSpan={2}>{cliente.nome}</td>                            
                            <td colSpan={2}>{cliente.telefones.join(', ')}</td>                            
                            <td colSpan={1}>{cliente.genero}</td>
                            <td colSpan={1}></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
            <Modal show={this.state.modalShow} onHide={() => this.setState({ modalShow: false })}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.clienteModal?.nome}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Nome Social: {this.state.clienteModal?.nomeSocial}</p>
                    <p>CPF: {this.state.clienteModal?.cpf}</p>
                    <p>RGs: {this.state.clienteModal?.rgs.join(', ')}</p>
                    <p>Gênero: {this.state.clienteModal?.genero}</p>
                    <p>Data de Cadastro: {this.state.clienteModal?.dataCadastro ? new Date(this.state.clienteModal.dataCadastro).toLocaleDateString('pt-BR') : ''}</p>
                    <p>Telefones: {this.state.clienteModal?.telefones.join(', ')}</p>
                </Modal.Body>
            </Modal>
            </div>
        </>
        );
    }
}