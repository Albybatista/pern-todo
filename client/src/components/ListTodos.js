import React, { Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import Edit from './EditTodo';

    const ListTodos = () => {
        const [todos, setTodos] = useState([]);
    
    const getAllTodos = async () => {
        try {
             const response = await axios.get("http://localhost:5000/todos");
             const data = response.data;
             setTodos(data);
        } catch (err) {
            console.error(err.message);
        }


    }


    const deleteTodo = async (deleteId) => {
        try {
            await axios.delete(`http://localhost:5000/todos/${deleteId}`);
            setTodos(todos.filter(todo => todo.todo_id !== deleteId));
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getAllTodos();
    }, []);

    return(
       <Fragment>
          <ul>
              List of All Todos
              {todos.map(todo => (
                  <li key={todo.todo_id}>
                      {todo.description}
                      <Edit todo={todo} />
                      <button onClick={() => deleteTodo(todo.todo_id)}>
                          Delete
                      </button>
                  </li>
              ))}
          </ul>
        </Fragment>
    )

}

export default ListTodos;