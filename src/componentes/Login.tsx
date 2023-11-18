import React, { Component, ChangeEvent } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import wbimg from '../assets/logo.png';
import styles from '../styles.module.css';

interface State {
    email: string;
    password: string;
    error?: string;
    tela?: string;
}

class Login extends Component<RouteComponentProps, State> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    setEmail = (email: string) => {
        this.setState({ email });
    }

    setPassword = (password: string) => {
        this.setState({ password });
    }

    handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setEmail(event.target.value);
    }

    handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setPassword(event.target.value);
    }

    handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.history.push('/clientes');
}

    render() {
        return (
            <div className={styles.container}>
                <div className={styles['container-login']}>
                    <div className={styles['wrap-login']}>
                        <form className={styles['login-form']} onSubmit={this.handleLogin}>
                        <span className={styles['login-form-title']}>
                                <img src={wbimg} alt="logo"/> 
                            </span>                                                         
                            <div className={styles['wrap-input']}>
                                <input className={this.state.email !== "" ? styles['has-val'] + ' ' + styles.input : styles.input} 
                                type="email" 
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                required/>
                                <span className={styles['focus-input']} data-placeholder="Email"></span>
                            </div>
                            <div className={styles['wrap-input']}>
                                <input className={this.state.password !== "" ? styles['has-val'] + ' ' + styles.input : styles.input} 
                                type="password" 
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                required/>
                                <span className={styles['focus-input']} data-placeholder="Password"></span>                                
                            </div>   
                            <div className={styles['container-login-form-btn']}>
                                <button className={styles['login-form-btn']} type="submit">Entrar</button>
                            </div>
                            
                        </form>                         
                    </div>
                </div>
            </div>                
        );
    }
}

export default withRouter(Login);