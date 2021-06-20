import React from "react";

const MyTodo = (props) => {
  return (
    <>
      <li>
        <button
          className="btn btn-outline-danger m-2"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        {props.text}
      </li>
    </>
  );
};

export default MyTodo;
