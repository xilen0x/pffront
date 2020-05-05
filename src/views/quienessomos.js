import React from 'react';
import '../styles/quienessomos.css'

const QuienesSomos = props => {
    return (
        <>
            <section className="section padding-lg">
                <div className="container">
                    <div className="row heading heading-icon">
                        <h2>Nuestro Equipo</h2>
                    </div>
                    <ul className="row">
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight">
                                <figure><img src="http://www.webcoderskull.com/img/team4.png" className="img-responsive" alt="" /></figure>
                                <h3>Jonathan Monroy</h3>
                                <p>Project leader</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight">
                                <figure><img src="http://www.webcoderskull.com/img/team1.png" className="img-responsive" alt="" /></figure>
                                <h3>Jerónimo Santa Maria</h3>
                                <p>Web Developer</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight">
                                <figure><img src="http://www.webcoderskull.com/img/team4.png" className="img-responsive" alt="" /></figure>
                                <h3>Jose Carvallo</h3>
                                <p>Web Developer</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="col-12 col-md-6 col-lg-3">
                            <div className="cnt-block equal-hight">
                                <figure><img src="http://www.webcoderskull.com/img/team2.png" className="img-responsive" alt="" /></figure>
                                <h3>Carlos Astorga</h3>
                                <p>Web Developer</p>
                                <ul className="follow-us clearfix">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section padding-lg>
                <div class="banner"><p><strong>Bienvenido a NOMBRE!!!!:</strong> Somos un equipo que se encarga de centralizar toda la informacion de los tramites que puedes llegar a hacer para venir a Chile, asi como la de ayudarte en tu proceso para realizarlos!
                Queremos ser tu compañia en tu visita al país y que te preocupes de lo mas importante... 
                <br></br><h3>Disfrutar de tu viaje!!!</h3></p>
            </div>
            </section>
        </>
    )
}

export default QuienesSomos;