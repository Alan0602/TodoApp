export const todoCreate = async (todo: string) => {
  localStorage.setItem("todo", todo);
}

export const todoGet = async () => {
  const todo = localStorage.getItem("todo");
  return todo;
}

