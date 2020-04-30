import React, { useContext } from 'react';
import { Context } from "../../store/appContext";
import TodoTarea from '../../components/dashcompts/todotarea';
import { Link } from 'react-router-dom';
import VertNavbar from '../../components/dashcompts/vertnavbar';


const AdminUpTramit = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <VertNavbar />
                </div>
                <div className="col-md-6 mx-auto">
                    <h1 className="p-3 mb-2 bg-info text-white d-flex justify-content-center" id="uploadtitle">AGREGAR UN NUEVO TRAMITE</h1>
                    <div className="form">
                        <div className="form-group mt-5">
                            <label for="tramitName">Nombre del Tramite (Obligatorio):</label>
                            <input type="text" className="form-control" id="tramitName" />
                        </div>
                        <div className="form-group">
                            <label for="tramitDescription">Descripcion del Tramite:</label>
                            <textarea type="text" className="form-control" id="tramitDescription" rows="10" />
                        </div>
                        <div className="form-group">
                            <label for="task01">Tarea 1 (Obligatorio):</label>
                            <input type="text" className="form-control" id="task01" />
                        </div>
                        <div className="form-group">
                            <label for="task02">Tarea 2:</label>
                            <input type="text" className="form-control" id="task02" />
                        </div>
                        <div className="form-group">
                            <label for="task03">Tarea 3:</label>
                            <input type="text" className="form-control" id="task03" />
                        </div>
                        <div className="form-group">
                            <label for="task04">Tarea 4:</label>
                            <input type="text" className="form-control" id="task04" />
                        </div>
                        <div className="form-group">
                            <label for="task05">Tarea 5:</label>
                            <input type="text" className="form-control" id="task05" />
                        </div>
                        <div className="form-group">
                            <label for="task06">Tarea 6:</label>
                            <input type="text" className="form-control" id="task06" />
                        </div>
                        <div className="form-group">
                            <label for="task07">Tarea 7:</label>
                            <input type="text" className="form-control" id="task07" />
                        </div>
                        <div className="form-group">
                            <label for="task08">Tarea 8:</label>
                            <input type="text" className="form-control" id="task08" />
                        </div>
                        <div className="form-group">
                            <label for="task09">Tarea 9:</label>
                            <input type="text" className="form-control" id="task09" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <h1 className="p-3 mb-5 bg-warning text-white" id="uploadtitle">TRAMITES ACTUALES</h1>
                    <div className="list-group d-flex justify-content-center overflow-auto my-5" id="scrollablecorps">
                        {
                            !!store.tramits ?
                                store.tramits.map((tramit, i) => {
                                    return (

                                        <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">{tramit.tramit}<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>

                                    )
                                })
                                : (
                                    <div className="text-center" id="undefined">
                                        <div className="spinner-grow text-light" role="status">
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUpTramit;