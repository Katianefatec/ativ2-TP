import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../estilos/menu.css";
import sair from "../assets/sair.png";
import wbimg from '../assets/logo.png';

type State = {
  isMenuOpen: boolean;
};

class MenuSJC extends React.Component<{}, State> {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };
  render() {
    return (
      <>
       <div className="MenuSup">
        <div className="hamburger-menu" onClick={this.toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
            <div id="MenuSupItem">          
            </div>
            <div className="item-menu-sup">
              <h5>Unidade SJC</h5>
              <Nav.Link as={Link} to="/">
                <img src={sair} alt="Sair" className="logout-icon" />
              </Nav.Link>
            </div>
        </div>
        
        <div className="sidebar-fixed">
        
          <div className="container-fluid">
            <div className="row">
            <nav id="sidebar" className={this.state.isMenuOpen ? 'open' : ''}>
                <div className="sidebar-header">
                  <img src={wbimg} alt="logo"/> 
                </div>
                <div className="list-unstyled components">
                  <Nav.Link as={Link} to="cadastroSJC"> Cadastro   </Nav.Link> 
                  <Nav.Link as={Link} to="clienteSJC">Clientes </Nav.Link>
                  <Nav.Link as={Link} to="produtoSJC"> Produtos </Nav.Link>
                  <Nav.Link as={Link} to="servicoSJC"> Serviços </Nav.Link>
                  <Nav.Link as={Link} to="relatoriosSJC"> Relatórios </Nav.Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MenuSJC;


