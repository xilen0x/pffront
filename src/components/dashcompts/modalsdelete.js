import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../../store/appContext";

export const Modaldelete = props => {
    const { store, actions } = useContext(Context);
    const [state, setState] = useState({});

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        {props.onClose ? (
                            <button
                                onClick={() => props.onClose()}
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        ) : (
                                ""
                            )}
                    </div>
                    <div className="modal-body">
                        <p>Warning: do you want to delete blog {props.titulo}!</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => {
                                actions.deleteBlog("/" + props.blogId);
                                props.onClose();
                            }}>
                            Do it!
						</button>
                        <button type="button" className="btn btn-secondary" onClick={() => {
                                
                                props.onClose();
                            }}>
                            Oh no!
						</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modaldelete.propTypes = {
    history: PropTypes.object,
    onClose: PropTypes.func,
    show: PropTypes.bool,
    blogId: PropTypes.string,
    titulo: PropTypes.string,
};

/**
 * Define the default values for
 * your component's properties
 **/
Modaldelete.defaultProps = {
    show: false,
    onClose: null
};