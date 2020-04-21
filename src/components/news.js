import React from 'react';
import { Link } from 'react-router-dom';

const News = props => {
    return (
        <>
            <div className="row col-12 mt-4 justify-content-center">
               <h1>News</h1>
            </div>
            <div className="row col-12 mt-4 justify-content-end">
                    <Link to="" className="btn btn-primary col-2 mr-3">Link1</Link>
                    <Link to="" className="btn btn-primary col-2 mr-3">Link2</Link>
                    <Link to="" className="btn btn-primary col-2 mr-3">Link3</Link>
                    <Link to="" className="btn btn-primary col-2 mr-5">Link4</Link>
            </div>

            <div className="row col-12 mt-2">                
                <div className="rowlink col-3">
                    <Link to="" className="btn btn-primary col-12">Link1</Link>
                    <Link to="" className="btn btn-primary col-12 mt-3">Link2</Link>
                    <Link to="" className="btn btn-primary col-12 mt-3">Link3</Link>
                    <Link to="" className="btn btn-primary col-12 mt-3">Link4</Link>
                </div>
                <div className="rowlink col-8 justify-content-end">
                    <img src="https://image.shutterstock.com/image-photo/torres-del-paine-chile-260nw-1109019650.jpg" className="card-img-top ml-3" alt="..." />
                </div>
            </div>
        </>
    )
}
export default News;