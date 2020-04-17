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
                        <a className="nav-item nav-link active" href="#">Quienes Somos<span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Nuestros Tramites</a>
                        <a className="nav-item nav-link" href="#">Precios</a>
                        <a className="nav-item nav-link" href="#">Entrar</a>
                        <a className="nav-item nav-link" href="#">Registrate</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;