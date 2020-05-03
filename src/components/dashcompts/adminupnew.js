import React from 'react';
import VertNavbar from '../../components/dashcompts/vertnavbar';
import { Link } from 'react-router-dom';

const AdminUpNew = props => {
    return (
        <>
            <div className="row" id="dashbody">
                <div className="col-md-3">
                    <VertNavbar />
                </div>
                <div className="col-md-9 d-flex justify-content-center" id="contentdash">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="p-3 mb-2 bg-info text-white d-flex justify-content-center" id="uploadtitle">SUBIR UNA NUEVA NOTICIA</h1>
                            <form>
                                <div className="form-group">
                                    <label for="exampleFormControlFile1">Subir Foto 1</label>
                                    <input type="file" className="form-control-file" id="PhotoUpload1" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlFile1">Subir Foto 2</label>
                                    <input type="file" className="form-control-file" id="PhotoUpload2" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlFile1">Subir Foto 3</label>
                                    <input type="file" className="form-control-file" id="PhotoUpload3" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Titulo</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Texto Basico</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Texto Pro</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button type="button" className="btn btn-success">Subir</button>
                            </form>

                            <h1 className="p-3 mb-5 bg-warning text-white" id="uploadtitle">NOTICIAS ACTUALES</h1>
                            <div className="list-group d-flex justify-content-center overflow-auto" id="scrollablecorps">
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between mt-5">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                                <Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Noticia N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUpNew;