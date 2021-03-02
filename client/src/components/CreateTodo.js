import React, { Fragment, useState } from 'react';
import axios from 'axios';

const CreateTodo = () => {
    const [description, setDescription] = useState("");
    
    const createNewTodo = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/todos", 
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
           <h1>Create New Todos</h1>
           <input type="text" value={description} onChange={(e) => setDescription(e.value.target)}/>
           <button onClick={createNewTodo}>
               Add
           </button>
        </Fragment>
    )
}

export default CreateTodo;