import React , { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
const Cards = props => {

    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        var: [],
    });
    return (
        <>
            <div className="row blog">
                {
                    !!store.blog ?(
                        state.var=store.blog.slice(0,6),
                        state.var.map((blogs, i) => {
                            
                            return (
                                
                                    <div className=" col-md-4 mt-5" key={i}>
                                        <Link to={"/blogs/" + blogs.e_titulo} className="btn">
                                        <div className="card text-white bg-dark">
                                            <img src={"http://localhost:5000/static/images/blogs/" + blogs.e_imagen} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title text-white">{blogs.e_titulo}</h5>
                                                <p className="card-desciption">{blogs.e_cuerpo}</p>
                                                {/* <p className="card-text">{people.opening_crawl}</p>*/}

                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                
                            )
                        })
                        ) : (
                            <div className="col-md-12 text-center">
                                <div className="spinner-grow" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        )
                }
            </div>
        </>
    )
}

export default Cards;