import React, { useContext } from 'react';
import { Context } from "../../store/appContext";
import { Link } from 'react-router-dom';



const VertNavbar = props => {
    const { store, actions } = useContext(Context);
    // const tram = props.match.params.id;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="leftnav">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-dark"><Link className="text-white bg-dark" to="/dashboard/adminhome">Administración General (Admin)</Link></button>
                                <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/dashboard/adminupblog">Administración de Blogs</Link>
                                    <Link className="dropdown-item" to="/dashboard/adminupnew">Administración de Noticias</Link>
                                    <Link className="dropdown-item" to="/dashboard/adminuptramit">Administración de Trámites</Link>
                                    <Link className="dropdown-item" to="/dashboard/adminuptask">Administración de Tareas</Link>
                                </div>
                            </div>
                        </li>
                        {
                            !!store.tramites ?
                                store.tramites.map((tramite, i) => {
                                    // if (JSON.stringify(tramit.tramit) === JSON.stringify(tram)) {
                                    return (
                                        <>
                                            <li className="nav-item">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-dark"><Link className="text-white bg-dark" to={"dashboard/"+tramite.titulo}>{tramite.titulo}</Link></button>
                                                    <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span className="sr-only">Toggle Dropdown</span>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <Link className="dropdown-item" to="/dashboard/#infointroduccion">Introducción</Link>
                                                        <Link className="dropdown-item" to="/dashboard/#infoinformacion">Información</Link>
                                                        <Link className="dropdown-item" to="/dashboard/#infoconclusiones">Conclusiones</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </>
                                    )
                                })
                                : (
                                    <div className="text-center" id="undefined">
                                        <div className="spinner-grow text-light" role="status">
                                        </div>
                                    </div>
                                )
                        }
                        {/* <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-dark">Renovar CI</button>
                                <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-dark">Tramite para Turistas</button>
                                <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div className="btn-group">
                                <button type="button" className="btn btn-dark">Tramite de Nacionalización</button>
                                <button type="button" className="btn btn-dark dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="sr-only">Toggle Dropdown</span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dashboard/todotramite">Todo Pruebas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default VertNavbar;