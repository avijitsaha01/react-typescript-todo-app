import { Checkbox} from '@material-ui/core';
import React from 'react';
import {v4 as uuid} from 'uuid';

const TodoList = () => {
    const [dense, setDense] = React.useState(false);

    
    return (
        <div >
            <h2>Todo List</h2>
            <ul>
                {
                    todos.map((todo)=>{
                        return(
                            <li key={todo.id}><Checkbox checked={todo.isDone} onChange={(event) => setDense(event.target.checked)} /> {todo.description}</li>
                        )
                    })
                }
                
            </ul>
        </div>
    );
};

export default TodoList;