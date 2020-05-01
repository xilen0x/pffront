import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const Tiempo = props => {

    const { store, actions } = useContext(Context);


    return (
        <>
            <div className="row col-12 mt-4 justify-content-center">
                <h1>Weather Forecast</h1>
            </div>

            <div className="row col-12 mt-4  bg-dark border border-white justify-content-center">
                <div className="seccion col-2 text-white mt-3">
                    {
                        !!store.temperatura && (
                            <h3>{store.temperatura.location.country}</h3>
                        )
                    }
                </div>
                <div className="seccion col-3 text-white mt-3">
                    {
                        !!store.temperatura && (
                            <h3>{store.temperatura.location.name}</h3>
                        )
                    }
                </div>
                <div className="seccion col-3 text-white mt-3">
                    {
                        !!store.temperatura && (
                            <h3>{store.temperatura.location.region}</h3>
                        )
                    }
                </div>
                <div className="seccion col-3 text-white mt-3">
                    {
                        !!store.temperatura && (
                            <h3>{store.temperatura.location.localtime}</h3>
                        )
                    }
                </div>
            </div>

            <div className="row col-12  bg-dark border border-white justify-content-center">
                <div className="seccion col-2">
                    {
                        !!store.temperatura && (
                            <div className="card bg-dark">
                                <img src={store.temperatura.current.condition.icon} className="icono" id="ictemps" alt="..." />
                            </div>
                        )
                    }
                </div>
                <div className="seccion col-2 text-white mt-3">
                    {
                        !!store.temperatura && (
                            <h3>{store.temperatura.current.condition.text} </h3>
                        )
                    }
                </div>
                <div className="seccion col-2 text-white mt-3 ml-2">
                    {
                        !!store.temperatura && (
                            <h3>Temperature: {store.temperatura.current.temp_c}°C </h3>
                        )
                    }
                </div>
                <div className="seccion col-2 text-white mt-3">
                    {
                        !!store.temperatura && (
                            <h3>Humidity: {store.temperatura.current.humidity}% </h3>
                        )
                    }
                </div>
                <div className="seccion col-2 text-white mt-3">
                    {
                        !!store.temperatura && (
                            <h3>Wind dir: {store.temperatura.current.wind_dir} {store.temperatura.current.wind_kph}Kph</h3>
                        )
                    }
                </div>

            </div>

            <div className="row col-12  bg-dark text-white border border-white justify-content-center">
                <h3>3 day forecast</h3>
            </div>

            <div className="row col-12  bg-dark text-white border border-white justify-content-center">
                {
                    !!store.temperatura && (
                        store.temperatura.forecast.forecastday.map((dia, i) => {
                            return (

                                <div className="seccion col-3 text-white ml-4 mt-2" key={i}>

                                    <div className="card text-white text-center bg-dark">
                                        <h3>{dia.date}</h3>
                                        <img src={dia.day.condition.icon} className="icono" id="ictemps" alt="..." />
                                        <div className="card-body">
                                            <h3 className="card-title">{dia.day.condition.text}</h3>
                                            <h5 className="card-desciption">Temp max: {dia.day.maxtemp_c}°C</h5>
                                            <h5 className="card-desciption">Temp min: {dia.day.mintemp_c}°C</h5>
                                            <h5 className="card-desciption">Humidity: {dia.day.avghumidity}%</h5>
                                            {/* <p className="card-text">{people.opening_crawl}</p>*/}

                                        </div>
                                    </div>

                                </div>
                            )
                        }))
                }
            </div>

        </>
    )
}
export default Tiempo;