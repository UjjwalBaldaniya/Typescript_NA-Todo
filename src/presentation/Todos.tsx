"use client";

import { useSearchParams } from "next/navigation";

import { useTodos } from "@/store/todos";

import styles from "../styles/todos.module.css";

const Todos = () => {
  const { todos, handleCheckboxChange, handleDeleteCheckbox } = useTodos();

  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  let todosClone;

  if (query === "active") {
    todosClone = todos.filter((item) => item.completed === false);
  } else if (query === "completed") {
    todosClone = todos.filter((item) => item.completed === true);
  } else {
    todosClone = todos;
  }

  return (
    <div>
      {todosClone &&
        todosClone.map((element, index) => (
          <div key={index} className={styles.todoContainer}>
            <div className={styles.todoItem}>
              <input
                type="checkbox"
                id={element.id}
                name=""
                checked={element.completed}
                onChange={() => handleCheckboxChange(element.id)}
                className={styles.checkbox}
              />
              <label className={styles.label}>{element.task}</label>
              {element.completed && (
                <button
                  onClick={() => handleDeleteCheckbox(element.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Todos;
