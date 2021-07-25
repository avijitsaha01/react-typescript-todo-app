import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { Todo } from '../App';
interface TodoInputProps{
    addTodo: any
}

const TodoInput = ({addTodo}: TodoInputProps) => {
    const submitTodo = (event: any) => {
        event.preventDefault();
        console.log("todo", todo);
        addTodo(todo);
        setTodo(todoObj);
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