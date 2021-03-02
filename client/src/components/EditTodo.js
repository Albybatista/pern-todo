import React, { Fragment, useState } from 'react';
import axios from 'axios';

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description);

    const updateTodo = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/todos/${todo.todo_id}`, 
            {
                description: description
            })
        } catch (err) {
            console.error(err.message);
        }
        window.location = '/'
    }

    return(
        <Fragment>
            <h1>Edit To Do</h1>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={updateTodo}>
                Edit
            </button>
        </Fragment>
    );
};

export default EditTodo;