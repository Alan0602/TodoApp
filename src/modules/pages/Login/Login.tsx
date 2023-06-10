import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../../components/Formik/FormikComponents';
import { userLogin } from './loginApi';
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { loading } from '../../components/Common/Tostify';


const Login = () => {
  const navigate = useNavigate()

  

    const loginValidationSchema = Yup.object({
        userName: Yup.string()
          .max(25, 'Must be 25 characters or less')
          .required('Required'),
        password: Yup.string()
          .max(10, 'Must be 10 characters or less')
          .required('Required'),
      })
    
    const handleSubmit = (values:any) => {
        userLogin(values.userName, values.password, navigate)
        console.log(values)
        loading()
    }


  return (
    <div className={styles.container}>
      <div className={styles.head}>
       <h1>Login</h1>
      </div>
      <div className={styles.input}>
       <Formik
         initialValues={{
           userName: '',
           password: '',
          }}
          validationSchema={loginValidationSchema}
          onSubmit={values =>{handleSubmit(values)}}
          >
         <Form >
          <br />
           <MyTextInput
             label="Username :  "
             name="userName"
             type="text"
             placeholder="username"
             />
          <br />
           <MyTextInput
             label="Password :  "
             name="password"
             type="password"
             placeholder="password"
             />
             <br />
           <button className={styles.button} type="submit">Login</button>
           <br />
           <p>Don't have account? <a href="/signup">Signup Now</a></p>
         </Form>
       </Formik>
      </div>
          <ToastContainer/>
    </div>
  )
}

export default Login