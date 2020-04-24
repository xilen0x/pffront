import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import '../styles/modallogin.css'
import { Context } from '../store/appContext';

/*  function closeModal() {
  $('#ModalLogin').on('shown.bs.modal', function(e) {
      $("#ModalLogin").modal("hide");
  });
} */

const ModalLogin = props => {
  const { store, actions } = useContext(Context);
  return (
    <>
      {
        !!store.errors && (
          <div className="row">
            <div className="col-md-12">
              <div className="alert alert-danger" role="alert">Error! - {store.errors.msg} </div>
            </div>
          </div>
        )
      }
      <form onSubmit={e => actions.login(e, props.history)}>
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
                <div className="form-group">
                  <label>Nombre de Usuario</label>
                  <input type="text" className="form-control" id="username" name="username"
                    value={store.username}
                    onChange={actions.handleChange} />
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input type="password" className="form-control" id="password" name="password"
                    value={store.password}
                    onChange={actions.handleChange} />
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="recordarme" />
                  <label className="form-check-label">Recordarme</label>
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                <button type="button" className="btn btn-danger btn-block" data-dismiss="modal">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default withRouter(ModalLogin);