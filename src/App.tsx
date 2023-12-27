import React from 'react';
import Header from './components/Header';
import DoneList from './components/DoneList';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

export interface ITodo {
  id: any;
  description: string;
  isDone: boolean;
}

export class Todo implements ITodo {
  id: any;
  description: string;
  isDone: boolean;

  constructor(description: string = '', isDone: boolean = false) {
    this.id = uuid();
    this.description = description;
    this.isDone = isDone;

  }
}

function App() {

  const newTodos = [
    new Todo('Have to Drink a cup of coffee...!!!'),
    new Todo('Need to go Tension Mukto tea house...!')
  ]

  const [todos, setTodos] = useState(newTodos);
  function addTodo(todo: Todo) {
    setTodos([todo, ...todos])
  }
  return (
    <div className="main">
      <Header />
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} setTodos={setTodos} />
      <DoneList todos={todos}/>
    </div>
  );
}

export default App;
