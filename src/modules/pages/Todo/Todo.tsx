import { Form, Formik } from "formik"
import { MyTextInput } from "../../components/Formik/FormikComponents"
import { todoCreate, todoDelete, todoGet, todoUpdate } from "./todoApi"
import { useEffect, useState } from "react"
import styles from "./todo.module.css"
import { useNavigate } from "react-router-dom"
import {  RiCheckboxBlankCircleLine, RiCheckboxCircleFill, RiDeleteBin6Line } from "react-icons/ri";

interface todo{
  id: string,
  title: string,
  isCompleted: boolean,
  updated: string,
  created: string,
  host: number
}



const Todo = () => {
  const [data, setData] = useState<todo[]>([])
  useEffect(() => {
    todoGet(setData)
  }, [])
  
  const navigate = useNavigate()


  function handleSubmit(values: {todo: string }) {
    todoCreate(values.todo)
    todoGet(setData)
  }

  function handleLogout() {
    localStorage.clear()
    navigate("/login");
  }

  function handleUpdate(id: string) {
    todoUpdate(id);
    todoGet(setData);
  }
  function handleDelete(id: string) {
    todoDelete(id);
    todoGet(setData);
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
        <Formik
         initialValues={{
           todo: '',
         }}
         onSubmit={values =>{handleSubmit(values)}}
       >
         <Form>
         <div className={styles.formRow}>
           <MyTextInput
             name="todo"
             type="text"
             placeholder="Todolist Title"
           />
           <button className={styles.btn} type="submit">
            +
            </button>
            </div>
         </Form>
       </Formik>
<br />
        </div>
        <div className={styles.user1}>
        {data && data.map((todo) => (
        <div className={styles.user}>
            <button
                className={styles.checkContainer}
                onClick={() =>
                  handleUpdate(todo.id)
                }
                >
                {todo.isCompleted ? < RiCheckboxCircleFill/>  : <RiCheckboxBlankCircleLine/> }
              </button>
              <span className={todo.isCompleted ? styles.completed : ""}>
                {todo.title}
              </span>
              <button className={styles.delete}
              onClick={() =>
                handleDelete(todo.id)
              }
              >
                  <RiDeleteBin6Line/>
              </button>
        </div>
      ))}
        </div>
    </div>
  )
}

export default Todo