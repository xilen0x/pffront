import React from 'react';
import '../styles/pricing.css'
import { Link } from 'react-router-dom';


const Pricing = props => {
  return (
    <>
      <section className="our-webcoderskull padding-lg">
        <div className="container">
          <div className="row heading heading-icon">
            <h2>Nuestros Precios</h2>
          </div>
          <div className="pricing card-deck flex-column flex-md-row mb-3">
            <div className="card card-pricing text-center px-3 mb-4">
              <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-danger text-white shadow-sm">Normal</span>
              <div className="bg-transparent card-header pt-4 border-0">
                <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15"><span className="price">Free</span><span className="h6 text-muted ml-2"></span></h1>
              </div>
              <div className="card-body pt-0">
                <ul className="list-unstyled mb-4">
                  <li>Accede a los artículos de interes</li>
                  <li>Consulta los trámites que puedes realizar</li>
                  <li>Guarda tu perfil</li>
                </ul>
                <Link type="button" className="btn btn-outline-secondary mb-3" to="/">Comenzar</Link>
              </div>
            </div>
            <div className="card card-pricing popular shadow text-center px-3 mb-4">
              <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-danger text-white shadow-sm">Premium</span>
              <div className="bg-transparent card-header pt-4 border-0">
                <h1 className="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">$<span className="price">1000</span><span className="h6 text-muted ml-2">/ anual</span></h1>
              </div>
              <div className="card-body pt-0">
                <ul className="list-unstyled mb-4">
                  <li>Accede a los artículos de interes</li>
                  <li>Consulta los trámites que puedes realizar</li>
                  <li>Guarda tu perfil</li>
                  <li>Accede a nuestros artículos con contenido Premium</li>
                  <li>Guarda tus datos y documentos en nuestro portafolio para acceder a ellos cuando los necesites.</li>
                </ul>
                <Link type="button" className="btn btn-outline-secondary mb-3" to="/login">Registrarme</Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing;