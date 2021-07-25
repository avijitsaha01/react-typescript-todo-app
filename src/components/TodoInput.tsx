import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import { Todo } from '../App';

const TodoInput = () => {
    const submitTodo = (event: any) => {
        event.preventDefault();
        console.log("todo", todo)
        setTodo(todoObj) 
    }
    const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, description: event.target.value })
    }
    const todoObj: Todo = new Todo();
    
    const [todo, setTodo] = useState(todoObj)
    return (
        <form id="todo-input" onSubmit={submitTodo}>
            <TextField id="standard-basic" label="Add Todo" name="todo" value={todo.description} onChange={handleTodoChange} />
            <Button onClick={submitTodo} variant="contained" color="secondary">
                Add
            </Button>
        </form>
    );
};

export default TodoInput;