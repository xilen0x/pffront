import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../store/appContext';
import VertNavbar from '../../components/dashcompts/vertnavbar';
import { Link } from 'react-router-dom';
import { Modaldelete } from "../../components/dashcompts/modalsdelete";

const AdminUpBlog = props => {
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        blogId: null,
        titulo: null,
        blogsact: null,
        showModal: false
    });
    return (
        <>
            <div className="row" id="dashbody">
                <div className="col-md-3">
                    <VertNavbar />
                </div>
                <div className="col-md-9 d-flex justify-content-center" id="contentdash">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="p-3 mb-2 bg-info text-white" id="uploadtitle">SUBIR UN NUEVO BLOG</h1>
                            <form onSubmit={e => actions.setBlog(e, props.history)}>
                                <div className="form-group">
                                    <label htmlFor="e_imagen">Subir Foto 1</label>
                                    <input type="file" className="form-control-file" id="e_imagen" name="e_imagen" onChange={actions.handleChangeFile} />
                                    <img src={"http://localhost:5000/static/images/blogs/" + store.e_imagen} className="card-img rounded-circle" value={store.e_imagen} name="e_imagen" /*onClick={actions.handleFile}*/ alt="..." />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="e_titulo">Titulo</label>
                                    <textarea className="form-control" id="e_titulo" name="e_titulo" rows="3" value={store.e_titulo} onChange={actions.handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="e_cuerpo">Texto Basico</label>
                                    <textarea className="form-control" id="e_cuerpo" name="e_cuerpo" rows="3" value={store.e_cuerpo} onChange={actions.handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="e_cuerpopro">Texto Pro</label>
                                    <textarea className="form-control" id="e_cuerpopro" name="e_cuerpopro" rows="3" value={store.e_cuerpopro} onChange={actions.handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-success ">Subir Blog</button>
                                <button
                                    type="button"
                                    className="btn btn-primary  ml-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        actions.updateblog('http://localhost:5000/blog/' + state.blogsact, props.history)
                                        setState({ blogsact:"" })
                                    }}>Guardar Cambio</button>
                            </form>

                            <h1 className="p-3 mb-5 bg-warning text-white" id="uploadtitle">BLOGS ACTUALES</h1>
                            <div className="list-group d-flex justify-content-center overflow-auto" id="scrollablecorps">
                                <ul className="list-group">
                                    {
                                        !!store.blog ?
                                            store.blog.map((card, i) => {

                                                return (

                                                    <li className="list-group-item list-group-item-action d-flex justify-content-between" key={i}

                                                    >
                                                        {card.e_titulo}
                                                        <div className="iconos float-right col-2">
                                                            <i className="fas fa-edit mr-2" id="icons" onClick={() => {
                                                                actions.getblog('http://localhost:5000/blog', i)

                                                                setState({ blogsact: card.id_entrada })
                                                            }

                                                            }></i>
                                                            <i className="fas fa-trash" id="icons"
                                                                onClick={() => setState({ showModal: true, blogId: card.id_entrada, titulo: card.e_titulo })}>
                                                            </i>
                                                        </div>
                                                    </li>

                                                )
                                            })
                                            : (
                                                <div className="col-md-12 text-center">
                                                    <div className="spinner-grow" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </div>
                                            )
                                    }
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <Modaldelete
                    titulo={state.titulo}
                    blogId={state.blogId}
                    show={state.showModal}
                    onClose={() => setState({ showModal: false, blogId: null, titulo: null })}
                />
            </div >



        </>
    )
}

export default AdminUpBlog;


{/*<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between mt-5">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>
<Link to="#" className="list-group-item list-group-item-action d-flex justify-content-between">Blog N con su titulo respectivo<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>

<button 
                            type="button" 
                            className="btn btn-primary" 
                            onClick={(e) => {
                                e.preventDefault();
                                actions.setTramite('http://localhost:5000/tramits/', store.tramiteactual)
                                }}>Guardar Cambio</button>  
                            
  
                                <div className="list-group d-flex justify-content-center overflow-auto my-5" id="scrollablecorps">
                        {
                            !!store.tramits ?
                                store.tramits.map((tramit, i) => {
                                    return (

                                        <Link 
                                            to="#" 
                                            className="list-group-item list-group-item-action d-flex justify-content-between" 
                                            onClick= {() => {
                                                actions.getTramite('http://localhost:5000/tramits', i)
                                                actions.setCurrentTramite(i)
                                            }}
                                            >{tramit.tramit}<Link to="/#"><i className="fas fa-trash" id="icons"></i></Link></Link>

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
                <ul className="list-group list-group-flush">

                    {
                        tareas.map((tarea, index) => {

                            return (
                                <li key={index} className="list-group-item">{tarea}<i className="fa fa-times float-right" onClick={() => Borrar(index)}></i></li>
                            )
                        })
                    }
                </ul>
            </div>
                
              
       <i class="fas fa-edit"></i> 
        
        */}