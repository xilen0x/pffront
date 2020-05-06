import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';



const BlogView = props => {
    const { store, actions } = useContext(Context);
    const blog = props.match.params.blog
    return (
        <>
            <div className="row">
                <div className="col text-center text-dark mt-4">
                    <h1>{blog}</h1>
                </div>
            </div>

            <div className="row justify-content-center">
                {
                    !!store.blog ?
                        store.blog.map((card, i) => {
                            if (JSON.stringify(card.e_titulo) === JSON.stringify(blog)) {
                                return (
                                    <div className=" col-md-8 mt-5 " key={i}>
                                        <div className="card text-white bg-dark">
                                            <img src={"http://localhost:5000/static/images/blogs/" + card.e_imagen} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title text-white">{card.e_titulo}</h5>
                                                <p className="card-desciption">{card.e_cuerpopro}</p>
                                                {/* <p className="card-text">{people.opening_crawl}</p>*/}
                                                <Link to={"/blogs"} className="btn btn-primary float-right col-3 ">Return</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
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

export default BlogView;