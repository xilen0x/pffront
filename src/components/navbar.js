import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
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
                        <Link className="nav-item nav-link" to="/ourwork">Nuestros Tramites</Link>
                        <Link className="nav-item nav-link" to="pricing">Precios</Link>
                        <Link className="nav-item nav-link" to="#" data-toggle="modal" data-target="#ModalLogin">Entrar</Link>
                        {/* <Link className="nav-item nav-link" to="#" data-toggle="modal" data-target="#ModalRegister">Regístrate</Link> */}
                        <Link className="nav-item nav-link" to="/register">Registro</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;