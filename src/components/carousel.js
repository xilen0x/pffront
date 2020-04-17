import React from 'react';

const Carousel = props => {
    return (
        <>
            <div className="row carousel">
                <div id="carouselContainer" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">

                        {
                            !!props.slide &&

                            props.slide.map((elem, i) => {
                                return (
                                    <li key={i} data-target="#carouselContainer"
                                        data-slide-to={i}
                                        className={(i === 0 ? "active" : "")}></li>
                                )
                            }
                            )
                        }
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        {
                            !!props.slide &&
                            props.slide.map((elem, i) => {
                                return (
                                    <div key={i} className={"carousel-item" + (i === 0 ? " active" : "")}
                                        style={{ "backgroundImage": "url('" + elem.image + "')" }}>
                                        <div className="carousel-caption text-light d-none d-md-block">
                                            <h3>{elem.title}</h3>
                                            <p>{elem.description}</p>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carouselContainer" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselContainer" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </>
    )
}

export default Carousel;