import React, { useContext, useEffect, setStore, useState } from 'react';
import { Context } from "../../store/appContext";
import { Link } from 'react-router-dom';
import VertNavbar from '../../components/dashcompts/vertnavbar';


const AdminUpTarea = props => {
    const { store, actions } = useContext(Context);
    const [state, setState] = useState({
        currentTask: null
    })
    return (
        <>
            <div className="row" id="dashbody">
                <div className="col-md-3">
                    <VertNavbar />
                </div>
                <div className="col-md-6 mx-auto">
                    <h1 className="p-3 mb-2 bg-info text-white d-flex justify-content-center" id="uploadtitle">AGREGAR UNA NUEVA TAREA</h1>
                    <form onSubmit={e => actions.addTask(e, props.history)}>
                        <div className="form-group">
                            <label htmlFor="selectTramit">Elige el tramite a quien quieres agregarle tareas:</label>
                            <select className="form-control mb-5" id="selectTramit">
                                {
                                    !!store.tramites ?
                                        store.tramites.map((tramit, i) => {
                                            return (
                                                <option onChange={() =>
                                                    {console.log(tramit.id)
                                                    setState({currentTask: tramit.id})}}>
                                                    {tramit.titulo}
                                                    </option>
                                            )
                                        })
                                        : (
                                            <div className="text-center" id="undefined">
                                                <div className="spinner-grow text-light" role="status">
                                                </div>
                                            </div>
                                        )
                                }
                            </select>
                            <div class="form-group">
                                <input type="text" class="form-control form-control-lg " id="tareainput" name="task" placeholder="Ingresa la tarea aqui..." value={store.task} onChange={actions.handleChange} />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Guardar Nuevo</button>
                        {/* <button
                            type="button"
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                actions.setTarea('http://localhost:5000/tareas/', store.tareactual)
                            }}>Guardar Cambio</button> */}
                    </form>
                    <h1 className="p-3 mb-5 bg-warning text-white" id="uploadtitle">TAREAS ACTUALES</h1>
                    <div className="form-group">
                        <label htmlFor="selectTramit">Elige el tramite a la que quieres ver sus tareas:</label>
                        <select className="form-control mb-5" id="selectTramit">
                            {
                                !!store.tramites ?
                                    store.tramites.map((tramit, i) => {
                                        return (
                                            <option>{tramit.titulo}</option>
                                        )
                                    })
                                    : (
                                        <div className="text-center" id="undefined">
                                            <div className="spinner-grow text-light" role="status">
                                            </div>
                                        </div>
                                    )
                            }
                        </select>
                        <div class="form-group">
                            <input type="text" class="form-control form-control-lg " id="tareainput" name="task" placeholder="Ingresa la tarea aqui..." value={store.task} onChange={actions.handleChange} />
                        </div>
                    </div>
                    <div className="list-group d-flex justify-content-center overflow-auto my-5" id="scrollablecorps">
                        <ul>
                            {
                                !!store.tareas ?
                                    store.tareas.map((tarea, i) => {
                                        return (

                                            <li
                                                to="#"
                                                className="list-group-item list-group-item-action d-flex justify-content-between"
                                                onClick={() => {
                                                    actions.getActualTareas('http://localhost:5000/tareas', i)
                                                    actions.setCurrentTareas(i)
                                                }}>{tarea.task}
                                                <i
                                                    className="fas fa-trash"
                                                    id="icons"
                                                    onClick={() => {
                                                        actions.deleteTareas('http://localhost:5000/tareas', i)
                                                        actions.setCurrentTareas(i)
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
            </div>
        </>
    )
}

export default AdminUpTarea;