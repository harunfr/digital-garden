import React, { useRef, useState } from "react";
import { MdOutlineLibraryAdd } from "react-icons/md";

import { todoFromDb } from "./todoData";
import TodoItem from "./TodoItem";

const Todo = () => {
  const newId = useRef(1000);
  const [currentTodos, setCurrentTodos] = useState(todoFromDb);
  const [editModes, setEditModes] = useState(
    currentTodos.reduce((editsMap, todo) => {
      editsMap[todo.id] = false;
      return editsMap;
    }, {})
  );
  const [todoBodies, setTodoBodies] = useState(
    currentTodos.reduce((bodies, todo) => {
      bodies[todo.id] = `${todo.body}
                  Date: ${todo.date}`;
      return bodies;
    }, {})
  );

  /** Event Listeners */

  const handleEdit = (id) => {
    const editModesCopy = { ...editModes };
    editModesCopy[id] = !editModes[id];
    setEditModes(editModesCopy);
  };

  const handleDelete = (id) =>
    setCurrentTodos(currentTodos.filter((todo) => todo.id !== id));

  const handleEditChange = (id, e) => {
    setTodoBodies({ ...todoBodies, [id]: e.target.value });
  };
  const handleAddTodo = () => {
    const newTodo = {
      body: "",
      date: new Date().toDateString(),
      id: ++newId.current,
    };
    setCurrentTodos([...currentTodos, newTodo]);
  };

  const todos = currentTodos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      handleEdit={(e) => handleEdit(todo.id, e)}
      handleDelete={(e) => handleDelete(todo.id, e)}
      handleEditChange={(e) => handleEditChange(todo.id, e)}
      todoBodies={todoBodies}
      editModes={editModes}
    />
  ));

  return (
    <div className="todo-app">
      <button onClick={handleAddTodo} className="add-todo-btn">
        <MdOutlineLibraryAdd className="add-todo-icon" />
        Add Todo
      </button>
      {todos}
    </div>
  );
};

export default Todo;
