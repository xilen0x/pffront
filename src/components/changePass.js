import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';

const ChangePass = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
        if (!store.isAuthenticated) props.history.push('/login');//en caso que el usuario ingrese a este componente y no esté logeado, lo redirecciono a login.
    }, []);
    return (
        <>
            {
                !!store.errors && (
                    <div className="row">
                        <div className="col-md-12">
                            <div className="alert alert-warning" role="alert">{store.errors.msg} </div>
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
                                <h4 className="card-title mt-2">Actualice su Contraseña aquí:</h4>
                            </header>
                            <article className="card-body">
                                <form onSubmit={e => actions.changePassword(e, props.history)}>
                                    <div className="form-group">
                                        <label>Contraseña actual</label>
                                        <input className="form-control" type="password" id="oldpassword" name="oldpassword"
                                            value={store.oldpassword}
                                            onChange={actions.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label>Nueva contraseña</label>
                                        <input className="form-control" type="password" id="password" name="password"
                                            value={store.password}
                                            onChange={actions.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary"> Guardar</button>
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
export default ChangePass;