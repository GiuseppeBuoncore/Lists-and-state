import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Porta il cane fuori' },
    { id: 2, text: 'Cucina' },
    { id: 3, text: 'Lavatrice' }
  ]);

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      {/* Passa l'array dei todo e la funzione per rimuovere un todo come props */}
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
