import React from "react";
import tickedIcon from "../assets/tick-1.png";
import unTickedIcon from "../assets/not_tick-1.png";
import deleteIcon from "../assets/delete.png";

const TodoTask = ({ todo, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer "
      >
        <img
          className="w-5.5 "
          src={isComplete ? tickedIcon : unTickedIcon}
          alt=""
        />
        <p
          className={`${isComplete ? "line-through" : ""} text-primary ml-3 text-[17px]`}
        >
          {todo}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={deleteIcon}
        alt=""
        className="w-4.5  cursor-pointer"
      />
    </div>
  );
};

export default TodoTask;
