import React, { useContext } from "react";
import { checkPropTypes } from "prop-types";
import Context from "../context";

// Использование инлайн-стилей

const style = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
};

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Context);

  const classes = [];

  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li style={style.li}>
      <span className={classes.join(" ")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={style.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm" onClick={removeTodo.bind(null, todo.id)}>
        &#10006;
      </button>
    </li>
  );
}

TodoItem.checkPropTypes = {
  todo: checkPropTypes.object,
  index: checkPropTypes.number,
  onChange: checkPropTypes.func,
};

export default TodoItem;
