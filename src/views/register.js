import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/register.css'

const Register = props => {
    return (
        <>
            <div className="fcontainer">
                <br />  <p className="text-center">Bienvenido!, Ingrese los siguientes datos para su registro:</p>
                <hr />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <header className="card-header bg-secondary text-white">
                                <h4 className="card-title mt-2">Registro</h4>
                            </header>
                            <article className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col form-group">
                                            <label>Nombre </label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                        <div className="col form-group">
                                            <label>Apellido</label>
                                            <input type="text" className="form-control" placeholder=" " />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="" />
                                        <small className="form-text text-muted">Debe ingresar un email válido.</small>
                                    </div>
                                    <div className="form-group">
                                        <label>Crear contraseña</label>
                                        <input className="form-control" type="password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary btn-block"> Registrarse  </button>
                                    </div>
                                    <small className="text-muted">Al hacer clic en el botón 'Registrarse', confirma que acepta nuestros términos de uso y política de privacidad.</small>
                                </form>
                            </article>
                            <div className="border-top card-body text-center">Ya posse una cuenta? <Link to="">Ingresar</Link></div>
                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}

export default Register;