import React from 'react';
import './App.css';
import TodoApplication from './todo-application/component/TodoApplication';

function App() {
  return (
    <div className="container">
        <h1 align="center">Todo Tracker Application</h1>
        <TodoApplication />
      </div>
  );
}

export default App;
