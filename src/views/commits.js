import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import VertNavbar from '../components/dashcompts/vertnavbar';
import { Link } from 'react-router-dom';


const Commits = props => {
    const { store, actions } = useContext(Context)
    
    return (
        <>
            <div className="row" id="dashbody">
                <div className="col-md-3">
                    <VertNavbar />
                </div>
                <div className="col-md-9 d-flex justify-content-center" id="contentdash">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="p-3 mb-2 bg-info text-white" id="uploadtitle">SUBIR UN NUEVO COMMITS</h1>
                            <form onSubmit={e => actions.setCommit(e, props.history)}>


                                <div className="form-group">
                                    <label htmlFor="c_cuerpo">COMMITS</label>
                                    <textarea className="form-control" id="c_cuerpo" name="c_cuerpo" rows="3" value={store.c_cuerpo} onChange={actions.handleChange}></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-success ">Subir Commits</button>

                            </form>

                            <h1 className="p-3 mb-5 bg-warning text-white" id="uploadtitle">COMMITS ACTUALES</h1>
                            <div className="rowcomentuser justify-content-center bg-dark mt-4">
                                <div className="row justify-content-center">
                                    {
                                        !!store.comentary ? (
                                            store.comentary.map((comen, i) => {
                                                return (
                                                    <div className="mycard bg-transparent text-dark col-md-3 mt-4 ml-5 rounded-circle " key={i}>
                                                        <img src={"http://localhost:5000/static/images/avatars/" + comen.users.avatar} className="card-img rounded-circle" alt="..." />

                                                        <div className="card-img-overlay text-center font-weight-bolder col-md-9 mt-3 ml-5">
                                                            <h5 className="card-title text-danger">{comen.users.nombre} {comen.users.apellido}</h5>
                                                            <p className="card-text ">{comen.c_cuerpo}</p>
                                                            <p className="card-text">{comen.c_fecha}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            )
                                        ) : (
                                                <div class="spinner-border text-light" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>
                                            )
                                    }

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                
            </div >



        </>
    )
}

export default Commits;