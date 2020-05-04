import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const ViewProfile = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        if (!store.isAuthenticated) props.history.push('/login');//en caso que el usuario ingrese a este componente y no esté logeado, lo redirecciono a login.
    }, []);
    return (
        <>
            {
                !!store.success && (
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-success" role="alert">{store.success.success} </div>
                        </div>
                    </div>
                )
            }
            <div className="fcontainer">
                <br />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header bg-secondary text-white">
                                <h4 className="card-title mt-2">Mi perfil:</h4>
                            </header>
                            <article className="card-body">
                                <div className="row mr-2 mb-4">
                                    {
                                        !!store.currentUser && (
                                            <img src={store.path + "/users/avatar/" + store.currentUser.user.avatar} alt="" width="100" height="100"></img>
                                        )
                                    }
                                </div>
                                <form >
                                    <div className="form-row">
                                        <div className="col">
                                            <label>Nombre </label>
                                            <input type="text" className="form-control" name="nombre" value={store.currentUser.user.nombre} disabled/>
                                        </div>
                                        <div className="col">
                                            <label>Apellido</label>
                                            <input type="text" className="form-control" name="apellido" value={store.currentUser.user.apellido}disabled/>
                                        </div>
                                        <div className="col">
                                            <label>Rut</label>
                                            <input type="text" className="form-control" name="rut" value={store.currentUser.user.rut} disabled/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" name="email" value={store.currentUser.user.email}disabled/>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Pais</label>
                                            <input type="text" className="form-control" name="pais" value={store.currentUser.user.pais}disabled/>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Ciudad</label>
                                            <input type="text" className="form-control" name="ciudad" value={store.currentUser.user.ciudad}disabled/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <>
                                        <Link to="/update-profile" onClick={actions.setProfile} className="btn btn-warning mt-2 btn-block"> Editar Perfil</Link><br></br> 
                                        <Link to="/change-pass" className="btn btn-warning mt-2 btn-block"> Cambiar contraseña</Link>
                                        </>
                                    </div>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ViewProfile;

