import { useEffect, useState } from "react";
import TodoContext from "./Todocontext";

const TODOS = "todos";
export function TodoProvider({ children }) {
  const savedTodos = localStorage.getItem(TODOS);

  const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : []); //const que salva

  const [showDialog, setShowDialog] = useState(false);

  const [selectedTodo, setSelectedTodo] = useState();

  const openFormTodoDialog = (todo) => {
    if (todo) {
      setSelectedTodo(todo);
    }
    setShowDialog(true);
  };

  const closeFormTodoDialog = () => {
    setShowDialog(false);
    setSelectedTodo(null);
  };

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (formData) => {
    const description = formData.get("description");
    setTodos((prevState) => {
      const todo = {
        id: prevState.length + 1,
        description: description,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      return [...prevState, todo];
    });
  };

  const toggleTodoCompleted = (todo) => {
    setTodos((prevState) => {
      return prevState.map((t) => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed,
          };
        }
        return t;
      });
    });
  };

  const deleteTodo = (todo) => {
    setTodos((prevState) => {
      return prevState.filter((t) => t.id != todo.id);
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        deleteTodo,
        showDialog,
        closeFormTodoDialog,
        openFormTodoDialog,
        selectedTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
