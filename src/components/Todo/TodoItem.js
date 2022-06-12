//
import { BsTrash } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

const TodoItem = (props) => (
  <div key={props.todo.id}>
    <div className="todo-container">
      <div className="todo-header">
        <button onClick={props.handleEdit}>
          <FiEdit />
        </button>
        <button onClick={props.handleDelete}>
          <BsTrash />
        </button>
      </div>

      {props.editModes[props.todo.id] ? (
        <textarea
          onChange={props.handleEditChange}
          value={props.todoBodies[props.todo.id]}
          className="todo-textarea"
        />
      ) : (
        <div className="todo-body">{props.todoBodies[props.todo.id]}</div>
      )}
    </div>
  </div>
);

export default TodoItem;
