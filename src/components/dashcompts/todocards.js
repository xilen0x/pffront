import React, { useContext, useEffect } from 'react';
import { Context } from "../../store/appContext";
import { Link } from 'react-router-dom';
import VertNavbar from './vertnavbar';

const TodoCards = props => {
    const { store, actions } = useContext(Context);
    const tram = props.match.params.id;
    return (
        <>
            <div className="row">
                <div className="col-md-3">
                    <VertNavbar />
                </div>
                <div className="col-md-7 offset-1">
                    <div className="row d-flex justify-content-center">
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                        <div className="card text-white bg-danger mb-3 mx-3 col-md-4 col-xs-12" id="todocard">
                            <div className="card-header">Tareas por hacer?</div>
                            <div className="card-body overflow-auto">
                                <div className="list-group">
                                    {
                                        store.tramits != null ?
                                            (
                                                store.tramits.map((tramit, i) => {
                                                    if (JSON.stringify(tramit.tramit) === JSON.stringify(tram)) {
                                                        return (
                                                            < div className="dropdown">
                                                                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    {tramit.tasks_details.task01}
                                                                </button>
                                                                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    {tramit.tasks_details.task02}
                                                                </button>
                                                                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    {tramit.tasks_details.task03}
                                                                </button>
                                                                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    {tramit.tasks_details.task04}
                                                                </button>
                                                                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    {tramit.tasks_details.task05}
                                                                </button>
                                                                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    {tramit.tasks_details.task06}
                                                                </button>
                                                                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    {tramit.tasks_details.task07}
                                                                </button>
                                                                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    {tramit.tasks_details.task08}
                                                                </button>
                                                                <button className="btn btn-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    {tramit.tasks_details.task09}
                                                                </button>
                                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                    <Link className="dropdown-item" to="#">Realizando</Link>
                                                                    <Link className="dropdown-item" to="#">Realizada</Link>
                                                                </div>
                                                            </div>
                                                        )
                                                    }
                                                })
                                            )
                                            : (
                                                <div className="text-center" id="undefined">
                                                    <div className="spinner-grow text-light" role="status">
                                                    </div>
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="card text-white bg-success mb-3 mx-3 col-md-4 " id="todocard">
                            <div className="card-header">Tareas terminados!</div>
                            <div className="card-body overflow-auto">
                                <div className="list-group">
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-success">...</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-success">...</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-success">...</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-success">...</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-success">...</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-success">...</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-success">...</Link>
                                    <Link to="#" className="list-group-item list-group-item-action list-group-item-success">...</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {
                                        store.tramits != null ?
                                            (
                                                store.tramits.map((tramit, i) => {
                                                    if (JSON.stringify(tramit.tramit) === JSON.stringify(tram)) {
                                                        return (
                                                            <div className="text-justify">
                                                                {tramit.description}
                                                            </div>
                                                        )
                                                    }
                                                })
                                            )
                                            : (
                                                <div className="text-center" id="undefined">
                                                    <div className="spinner-grow text-light" role="status">
                                                    </div>
                                                </div>
                                            )
                                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoCards;