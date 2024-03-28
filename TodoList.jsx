import React from 'react';

const TodoList = ({ todos, removeTodo }) => {
  const handleRemove = (id) => {
    // Rimuovi l'elemento corrispondente dall'array todos
    removeTodo(id);
  };

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
