import { Checkbox} from '@material-ui/core';
import React from 'react';
import { Todo } from '../App';

interface TodoListProps{
    todos : Todo[],
    setTodos: any
}
const TodoList = ({todos, setTodos}: TodoListProps) => {

    const todoInProgress = todos.filter((todo) => {
        return !todo.isDone;
    })

    function updateState(todo: Todo){
        todo.isDone = !todo.isDone;
        todos[todo.id]  = todo;
        setTodos([...todos])
    }
    return (
        <div >
            <h2>Todo List</h2>
            <ul>
                {
                    todoInProgress.map((todo)=>{
                        return(
                            <li key={todo.id}><Checkbox onChange={(e)=>updateState(todo)} /> {todo.description}</li>
                        )
                    })
                }
                
            </ul>
        </div>
    );
};

export default TodoList;