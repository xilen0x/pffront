import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Blogs = props => {

    const { store, actions } = useContext(Context);

    return (
        <>   

            

            <div className="row">
                <div className="col text-center text-dark mt-4">
                    <h1>BLOGS!!!</h1>
                </div>
            </div>
            


            <div className="row blog">
                {
                    !!store.blog ?
                        store.blog.map((card, i) => {

                            return (

                                <div className=" col-md-4 mt-3" key={i}>
                                    <Link to={"/blogs/" + card.e_titulo} className="btn">
                                        <div className="card text-white bg-dark">
                                            <img src={"http://localhost:5000/static/images/blogs/" + card.e_imagen} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title text-white">{card.e_titulo}</h5>
                                                <p className="card-desciption">{card.e_cuerpo}</p>
                                                {/* <p className="card-text">{people.opening_crawl}</p>*/}

                                            </div>
                                        </div>
                                    </Link>
                                </div>

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
            </div>

        </>
    )
}

export default Blogs;