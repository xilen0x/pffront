import React from 'react';
import '../styles/modallogin.css'

const ModalLogin = props => {
  return (
    <>
      <div className="modal fade" id="ModalLogin" role="dialog" aria-labelledby="ModalLoginTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="ModalLoginTitle">Ingrese sus datos</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <small id="emailHelp" className="form-text text-muted">Debe ingresar un email válido.</small>
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label">Recordarme</label>
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Entrar</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalLogin;