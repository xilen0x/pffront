import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { withRouter } from 'react-router-dom';
import '../styles/login.css'


const Login = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            {
                !!store.errors && (
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-warning" role="alert">{store.errors.msg} </div>
                        </div>
                    </div>
                )
            }
            <section className="our-webcoderskull padding-lg">
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2>Bienvenido!</h2>
                    </div>
                    <div className="container">
                        <br></br>
                        <div className="row">
                            <div className="col-md-4 offset-4">
                                <form onSubmit={e => actions.login(e, props.history)}>
                                    <div className="form-group">
                                        <label htmlFor="email">Ingrese su e-mail</label>
                                        <input type="text" className="form-control" id="email" name="email"
                                            value={store.email}
                                            onChange={actions.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Contraseña</label>
                                        <input type="password" className="form-control" id="password" name="password"
                                            value={store.password}
                                            onChange={actions.handleChange} />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default withRouter(Login);