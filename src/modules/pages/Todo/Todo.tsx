import { Form, Formik } from "formik"
import { MyTextInput } from "../../components/Formik/FormikComponents"
import { todoCreate } from "./todoApi"


type Props = {}

const Todo = (props: Props) => {
  function handleSubmit(values: {todo: string }) {
    todoCreate(values.todo)
  }

  return (
    <div>
        <h1>Todo</h1>
        <div>
        <Formik
         initialValues={{
           todo: '',
         }}
         onSubmit={values =>{handleSubmit(values)}}
       >
         <Form>
           <MyTextInput
             label="Title"
             name="todo"
             type="text"
             placeholder="Todolist Title"
           />
 
           <button type="submit">Login</button>
         </Form>
       </Formik>
        </div>
    </div>
  )
}

export default Todo