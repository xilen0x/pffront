import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
const Coment = props => {
    
    const { store, actions } = useContext(Context)
    const [state, setState] = useState({
        var: [],
    });

    return (
        <>
            <div className="row title justify-content-center mt-4">
                <h1>Commentary</h1>
            </div>
            <div className="rowcomentuser justify-content-center bg-dark mt-4">
                <div className="row justify-content-center">
                    {
                        !!store.comentary ? (
                             state.var=store.comentary.slice(0,3),
                                state.var.map((comen, i) => {
                                return (
                                    <div className="mycard bg-transparent text-dark col-md-3 mt-4 ml-5 rounded-circle " key={i}>
                                        <img src={"http://localhost:5000/static/images/avatars/" + comen.users.avatar} className="card-img rounded-circle" alt="..." />
                                         
                                        <div className="card-img-overlay text-center font-weight-bolder col-md-9 mt-3 ml-5">
                                            <h5 className="card-title text-danger">{comen.users.nombre} {comen.users.apellido}</h5>
                                            <p className="card-text ">{comen.c_cuerpo}</p>
                                            <p className="card-text">{comen.c_fecha}</p>
                                        </div>
                                    </div>
                                )
                            }
                            )                                   
                        ) : (
                                <div class="spinner-border text-light" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            )
                    }

                </div>

            </div>
        </>
    )

}
export default Coment;
{/* <div className="rowcomentuser bg-dark mt-4">
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
                  


                <div className="row d-flex justify-content-center">
                    {
                        store.comentary.length > 6 ? (<div className="btn btn-outline-success font-weight-bold col-2" >More...</div>) : null
                    }
                </div>
                slice
                </div>*/}
        


