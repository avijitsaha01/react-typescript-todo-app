import { Checkbox } from '@material-ui/core';
import React from 'react';
import { Todo } from '../App';

interface DoneListProps{
    todos : Todo[]
}


const DoneList = ({todos}: DoneListProps) => {

    const todosDone = todos.filter((todo) => {
        return todo.isDone;
    })
    return (
        <div >
            <h2>Done List</h2>
            <ul>
                {
                    todosDone.map((todo)=>{
                        return(
                            <li key={todo.id}>
                               <Checkbox checked={true} /> 
                            {todo.description}</li>
                        )
                    })
                }
                
            </ul>
        </div>
    );
};

export default DoneList;