import React, { useState } from "react";
import "./App.css";
import MyTodo from "./MyTodo";

const Todo = () => {
  const [data, setdata] = useState();
  const [list, newlist] = useState([]);

  const handlelist = (event) => {
    setdata(event.target.value);
  };
  const add = () => {
    newlist((olditems) => {
      return [...olditems, data];
    });
    setdata("");
  };
  const deleteItem = (id) => {
    newlist((olditems) => {
      return olditems.filter((arrelement, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="todo-app">
        <div className="todo-form">
          <input
            type="text"
            name=""
            className="mx-3 my-3 "
            placeholder="Add Item..."
            value={data}
            onChange={handlelist}
          />
          <button className="btn btn-outline-success add-btn" onClick={add}>
            Add
          </button>
          <ol className="list-unstyled mylists">
            <li>
              {list.map((myitems, index) => {
                return (
                  <MyTodo
                    key={index}
                    text={myitems}
                    id={index}
                    onSelect={deleteItem}
                  />
                );
              })}
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Todo;
