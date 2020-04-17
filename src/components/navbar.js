import React from 'react';

const Navbar = props => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" href="/">NOMBRE</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link active" href="/quienessomos">Quienes Somos<span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/blogs">Blog</a>
                        <a className="nav-item nav-link" href="/ourwork">Nuestros Tramites</a>
                        <a className="nav-item nav-link" href="pricing">Precios</a>
                        <a className="nav-item nav-link" href="#" data-toggle="modal" data-target="#exampleModalCenter">Entrar</a>
                        <a className="nav-item nav-link" href="/register">Registrate</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;