import { Checkbox } from '@material-ui/core';
import React from 'react';
import {v4 as uuid} from 'uuid';
const DoneList = () => {
    const Done  = [
        {
            id: uuid(),
            description: 'wasdasd',
            isDone: true
        },
        {
            id: uuid(),
            description: 'sdfsdfsadf',
            isDone: false
        }
    ]
    return (
        <div >
            <h2>Done List</h2>
            <ul>
                {
                    Done.map((todo)=>{
                        return(
                            <li key={todo.id}> {todo.description}</li>
                        )
                    })
                }
                
            </ul>
        </div>
    );
};

export default DoneList;