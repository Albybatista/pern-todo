import './App.css';
import React, { Fragment } from 'react';
import CreateTodo from './components/CreateTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <Fragment>
      <div className="container">
        <CreateTodo />
        <ListTodos />
      </div>
    </Fragment>

  );
}

export default App;
