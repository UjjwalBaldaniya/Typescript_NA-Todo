"use client";

import { FormEvent, useState } from "react";

import { useTodos } from "@/store/todos";

import styles from "../styles/addTodo.module.css";

const AddTodo = () => {
  const { handleAddTodo } = useTodos();
  const [todo, setTodo] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Input..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className={styles.addButton} type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
