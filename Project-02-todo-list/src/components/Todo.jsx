//import React from "react";
import { useEffect, useRef, useState } from "react";
import todoIcon from "../assets/todo_icon.png";
import TodoTask from "./TodoTask";

const Todo = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList") || "[]"),
  );
  const inputRef = useRef();
  const addTodo = () => {
    const inputText = inputRef.current.value.trim();
    if (!inputText) {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      todo: inputText,
      isComplete: false,
    };

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const toggle = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-tertiary place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-137.5 rounded-[20px]">
      {/*----title----*/}
      <div className="flex items-centern mt-7 gap-2">
        <img className="w-7.5 h-7.5" src={todoIcon} alt="" />
        <h1 className="text-3xl font-semibold text-primary">Todo List</h1>
      </div>
      {/*----add box----*/}
      <div className="flex items-center my-7 bg-[#ecdfc5] rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1  h-12 pl-6 pr-2 text-primary placeholder:text-secondary font-medium"
          type="text"
          name="todo"
          placeholder="Add your task"
        />
        <button
          onClick={addTodo}
          className="border-none rounded-full bg-secondary w-28 h-12 text-tertiary font-medium cursor-pointer"
        >
          Add +
        </button>
      </div>
      {/*----todo list----*/}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoTask
              key={index}
              todo={item.todo}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
