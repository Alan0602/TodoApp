export const todoCreate = async (todo: string) => {
  localStorage.setItem("todo", todo);
}

export const todoGet = async () => {
  const todo = localStorage.getItem("todo");
  return todo;
}

export const todoUpdate = async (id: string) => {
  try {
    const todo = localStorage.getItem("todo");
    return true; 
  } catch (error) {
    console.error("Error updating todo status:", error);
    throw error;
  }
}

export const todoDelete = async (id: string) => {
  try {
    const todo = localStorage.getItem("todo");
    return true; 
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
}
