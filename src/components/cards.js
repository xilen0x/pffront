import React from 'react';
import { Link } from 'react-router-dom';

const Cards = props => {
    return (
        <>
            <div className="row blog">
                {
                    !!props.conte ?
                        props.conte.map((blog, i) => {
                            const img = blog.title.split(" ").join("-").toLowerCase() + ".jpg";
                            return (
                                
                                    <div className=" col-md-4 mt-5" key={i}>
                                        <Link to={"/blogs/" + blog.name} className="btn">
                                        <div className="card text-white bg-dark">
                                            <img src={blog.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title text-white">{blog.title}</h5>
                                                <p className="card-desciption">{blog.requsitos}</p>
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

export default Cards;