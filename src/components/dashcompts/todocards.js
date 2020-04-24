import React from 'react';

const TodoCards = props => {
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="card text-white bg-danger mb-3 mx-3 col-md-4 col-xs-12" id="todocard">
                    <div className="card-header">Tramites por hacer?</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-white bg-warning mb-3 mx-3 col-md-4 col-xs-12" id="todocard">
                    <div className="card-header">Tramites en proceso?</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div className="card text-white bg-success mb-3 mx-3 col-md-4 " id="todocard">
                    <div className="card-header">Tramites terminados!</div>
                    <div className="card-body">
                        <h5 className="card-title">Primary card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoCards;