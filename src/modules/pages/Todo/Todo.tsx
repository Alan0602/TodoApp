import { useState, useEffect } from "react";
import styles from "./todo.module.css";
import { useNavigate } from "react-router-dom";
import { RiCheckboxBlankCircleLine, RiCheckboxCircleFill, RiDeleteBin6Line, RiPlayListAddLine } from "react-icons/ri";

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
  updated: string;
  created: string;
  host: number;
}

const Todo = () => {
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    todoGet();
  }, []);

  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const inputValue = event.currentTarget.todo.value;
    todoCreate(inputValue);
    todoGet();
    event.currentTarget.reset();
  }

  function handleLogout() {
    localStorage.setItem("loggedin", "false");
    navigate("/login");
  }

  function handleUpdate(id: string) {
    todoUpdate(id);
    todoGet();
  }

  function handleDelete(id: string) {
    todoDelete(id);
    todoGet();
  }

  function todoGet() {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    setData(todos);
  }

  function todoCreate(todo: string) {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const newTodo = {
      id: String(Math.random()),
      title: todo,
      isCompleted: false,
      updated: new Date().toISOString(),
      created: new Date().toISOString(),
      host: 1,
    };
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function todoUpdate(id: string) {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);
    if (todoIndex !== -1) {
      todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;
      todos[todoIndex].updated = new Date().toISOString();
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }

  function todoDelete(id: string) {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    const filteredTodos = todos.filter((todo: Todo) => todo.id !== id);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  }

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>TODO</h1>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className={styles.input}>
        <form onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <input className={styles.imp}name="todo" type="text" placeholder="Todolist Title" />
            <div className={styles.gap}></div>
            <button className={styles.btn} type="submit">
              <RiPlayListAddLine/>
            </button>
          </div>
        </form>
        <br />
      </div>
      <div className={styles.user1}>
        {data &&
          data.map((todo: Todo) => (
            <div className={styles.user} key={todo.id}>
              <button
                className={styles.checkContainer}
                onClick={() => handleUpdate(todo.id)}
              >
                {todo.isCompleted ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleLine />}
              </button>
              <span className={todo.isCompleted ? styles.completed : ""}>{todo.title}</span>
              <button className={styles.delete} onClick={() => handleDelete(todo.id)}>
                <RiDeleteBin6Line />
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Todo;
