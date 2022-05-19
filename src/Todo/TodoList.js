import React from "react";
import { checkPropTypes } from "prop-types";
import TodoItem from "./TodoItem";

// Использование инлайн-стилей

const style = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function TodoList(props) {
  return (
    <ul style={style.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            index={index}
            onChange={props.onToggle}
          />
        );
      })}
    </ul>
  );
}

TodoList.checkPropTypes = {
  todos: checkPropTypes.array,
  onToggle: checkPropTypes.func,
};

export default TodoList;
