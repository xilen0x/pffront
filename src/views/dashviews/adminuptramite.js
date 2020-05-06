import React, { useContext, useEffect, useState } from 'react';
import { Context } from "../../store/appContext";
import TodoTarea from '../../components/dashcompts/todotarea';
import { Link } from 'react-router-dom';
import VertNavbar from '../../components/dashcompts/vertnavbar';
import { TramitModal } from '../../components/dashcompts/tramitmodal'

const AdminUpTramit = props => {

    const { store, actions } = useContext(Context);
    const [state, setState] = useState({
        deletemodal_id: null,
        showModal: false
    })

    return (
        <>
            <div className="row" id="dashbody">
                <div className="col-md-3">
                    <VertNavbar />
                </div>
                <div className="col-md-6 mx-auto">
                    <h1 className="p-3 mb-2 bg-info text-white d-flex justify-content-center" id="uploadtitle">AGREGAR UN NUEVO TRAMITE</h1>
                    <form onSubmit={e => actions.addTramit(e, props.history)}>
                        <div className="form-group mt-5">
                            <label htmlFor="titulo">Titulo del Tramite (Obligatorio):</label>
                            <input type="text" className="form-control" id="titulo" rows="1" name="titulo" value={store.titulo} onChange={actions.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="infointro">Descripción de la Introducción:</label>
                            <textarea className="form-control" id="infointro" rows="10" name="infointro" value={store.infointro} onChange={actions.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="infocorps">Descripción del Cuerpo:</label>
                            <textarea type="text" className="form-control" id="infocorps" rows="10" name="infocorps" value={store.infocorps} onChange={actions.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="infofoot">Descripción de la Conclusión:</label>
                            <textarea className="form-control" id="infofoot" rows="10" name="infofoot" value={store.infofoot} onChange={actions.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar Nuevo</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                actions.setTramite('http://localhost:5000/tramites/', store.tramiteactual)
                            }}>Guardar Cambio</button>
                        {/* <button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={(e) => {
                                e.preventDefault();
                                actions.setTramite('http://localhost:5000/tramites/', store.tramitectual)
                                }}>Guardar Cambio</button> */}
                    </form>
                    <h1 className="p-3 mb-5 bg-warning text-white" id="uploadtitle">TRAMITES ACTUALES</h1>
                    <div className="list-group d-flex justify-content-center overflow-auto my-5" id="scrollablecorps">
                        <ul>
                            {
                                !!store.tramites ?
                                    store.tramites.map((tramit, i) => {
                                        return (

                                            <li
                                                to="#"
                                                className="list-group-item list-group-item-action d-flex justify-content-between"
                                                onClick={() => {
                                                    actions.getActualTramites('http://localhost:5000/tramites', i)
                                                    actions.setCurrentTramite(i)
                                                }}>{tramit.titulo}
                                                <i
                                                    className="fas fa-trash"
                                                    id="icons"
                                                    onClick={() => {
                                                        setState({ showModal: true, deletemodal_id: tramit.id })
                                                    }}>
                                                </i>
                                            </li>
                                        )
                                    })
                                    : (
                                        <div className="text-center" id="undefined">
                                            <div className="spinner-grow text-light" role="status">
                                            </div>
                                        </div>
                                    )
                            }
                        </ul>
                    </div>
                </div>
                <TramitModal
                    tramitmodal_id={state.tramitmodal_id}
                    show={state.showModal}
                    onClose={() => setState({ showModal: false, tramitmodal_id: null })}
                />
            </div>
        </>
    )
}

export default AdminUpTramit;