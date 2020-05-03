import React, { useContext } from 'react';
import { Context } from '../../store/appContext';
import VertNavbar from './vertnavbar';

const TodoTarea = props => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <VertNavbar />
            <button type="button" className="list-group-item list-group-item-action">
            <span onClick={()=>{actions.checkTodos(props.pos,store)}} >{props.todo.label}</span>
            
            {
                props.todo.done ?
                    (
                        <span className="badge badge-success" onClick={()=>{actions.checkTodos(props.pos,store)}} >Ready</span>
                    ) : (
                        <span className="badge badge-warning" onClick={()=>{actions.checkTodos(props.pos,store)}} >Not Ready</span>
                    )
            }
            <i className="fa fa-trash float-right" onClick={()=>{actions.handleTrashCan(props.pos,store)}} ></i>
        </button>
        </>
    )
}

export default TodoTarea;