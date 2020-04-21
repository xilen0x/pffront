import React from 'react';
import { Link } from 'react-router-dom';

const Coment = props => {
    return (
        <>
            <div className="row title justify-content-center mt-4">
                <h1>Commentary</h1>
            </div>

            <div className="row coment">
                {
                    !!props.conte ?
                        props.conte.map((user, i) => {
                            return (
                                <div className="mycard bg-transparent text-dark col-md-3 mt-4 ml-5 rounded-circle " key={i}>
                                    <img src={user.image} className="card-img rounded-circle" alt="..." />
                                    <div className="card-img-overlay text-center col-md-9 mt-3 ml-5">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                    </div>
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
            <div className="rowcomentuser bg-dark mt-4">
                <div className="row  justify-content-center">

                    <div className="form-row text-white mt-2">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
                    </div>
                </div>
                <div className="row ">
                    <div className="form-row justify-content-center col-12  mt-2">
                        <div className="name col-3">
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className=" lastname col-3">
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="form-row text-white col-sm-12 col-md-6 col-lg-6">
                        <label for="inputmessege">commentary</label>
                        <textarea name="opinion" id="opinion" cols="" rows="6" className="form-control" ></textarea>
                        <small id="passwordHelpBlock" className="form-text text-white">
                            Adds any notes hear
                                  </small>
                    </div>
                </div>
                <div className="row justify-content-center">
                     <Link to="" className="btn btn-outline-success font-weight-bold col-2">Send</Link>
                </div>
                
            </div>
        </>
    )

}
export default Coment;