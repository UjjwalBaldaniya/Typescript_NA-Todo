"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export interface Todo {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoContext {
  todos: Todo[];
  handleAddTodo: (todo: string) => void;
  handleCheckboxChange: (id: string) => void;
  handleDeleteCheckbox: (id: string) => void;
}

export const todoContext = createContext<TodoContext | null>(null);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string) => {
    setTodos((prev) => {
      const newTodo: Todo[] = [
        {
          id: Math.random().toString(),
          task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newTodo;
    });
  };

  const handleCheckboxChange = (id: string) => {
    setTodos((prev) => {
      const updatedTodos = prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return updatedTodos;
    });
  };

  const handleDeleteCheckbox = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <todoContext.Provider
      value={{
        todos,
        handleAddTodo,
        handleCheckboxChange,
        handleDeleteCheckbox,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export const useTodos = () => {
  const todoContextValue = useContext(todoContext);
  if (!todoContextValue) {
    throw new Error("Error");
  }
  return todoContextValue;
};
