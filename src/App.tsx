import React from 'react';
import Header from './components/Header';
import DoneList from './components/DoneList';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';
import {v4 as uuid} from 'uuid';
import { useState } from 'react';

export interface ITodo{
  id: string;
  description: string;
  isDone: boolean;
}

export class Todo implements ITodo{
  id: string;
  description: string;
  isDone: boolean;

  constructor(description: string = '', isDone: boolean = false){
    this.id = uuid();
    this.description = description;
    this.isDone = isDone;

  }
}

function App() {

  const newTodos  = [
    new Todo('wash the dish'),
    new Todo ('watch a movie')
]

const [todos, setTodos] = useState(newTodos);
  return (
    <div className="main">
      <Header />
      <TodoInput />
      <TodoList todos={todos}/>
      <DoneList todos={todos}/>
    </div>
  );
}

export default App;
