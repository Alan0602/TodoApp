import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../../components/Formik/FormikComponents';
import { userLogin } from './loginApi';


type Props = {}

const Login = (props: Props) => {
    const loginValidationSchema = Yup.object({
        userName: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Required'),
      })

    const handleSubmit = (values:any) => {
        userLogin(values.userName, values.password)
        console.log(values)
    }

  return (
    <div>
       <h1>Login</h1>
       <Formik
         initialValues={{
           userName: '',
           password: '',
         }}
         validationSchema={loginValidationSchema}
         onSubmit={values =>{handleSubmit(values)}}
       >
         <Form>
           <MyTextInput
             label="Username"
             name="userName"
             type="text"
             placeholder="username"
           />
 
           <MyTextInput
             label="Password"
             name="password"
             type="password"
             placeholder="password"
           />
           <button type="submit">Login</button>
         </Form>
       </Formik>
    </div>
  )
}

export default Login