import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../store/appContext';
import { useEffect } from 'react';

const Navbar = props => {
    const { store, actions } = useContext(Context);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand" to="/">NOMBRE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link" to="/quienessomos">Quienes Somos<span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/blogs">Blog</Link>

                        {
                            store.currentUser !== null && (
                                <li className="nav-item active">
                                    <Link className="nav-item nav-link" to="/dashboard">Nuestros Trámites</Link>
                                </li>
                            )
                        }
                        <Link className="nav-item nav-link" to="pricing">Precios</Link>
                        {
                            store.currentUser === null && (
                                <>
                                    {/* <Link className="nav-item nav-link" to="#" data-toggle="modal" data-target="#ModalLogin">Entrar</Link> */}
                                    <Link className="nav-item nav-link" to="/login">Entrar</Link>
                                    <Link className="nav-item nav-link" to="/register">Registro</Link>
                                </>
                            )
                        }
                        {
                            store.currentUser !== null && (
                                <>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Opciones                                      {
                                                !!store.currentUser && (
                                                    <img src={store.path + "/users/avatar/" + store.currentUser.user.avatar} className="rounded-circle" width="30" height="30"></img>
                                                )
                                            }</Link>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link className="dropdown-item" to="/view-profile">Ver Perfil</Link>
                                            <Link className="dropdown-item" to="/update-profile" onClick={actions.setProfile}>Editar Perfil</Link>
                                            <Link className="dropdown-item" to="/change-pass">Cambiar contraseña</Link>
                                            <Link className="dropdown-item" to="/" onClick={actions.logout}>Salir</Link>
                                        </div>
                                    </li>
                                </>
                            )
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;