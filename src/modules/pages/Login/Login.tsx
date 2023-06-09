import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../../components/Formik/FormikComponents';
import { userLogin } from './loginApi';
import styles from './login.module.css'

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
          <div className={styles.text}>
           <MyTextInput
             label="Username :  "
             name="userName"
             type="text"
             placeholder="username"
             />
            </div>
          <br />
          <div className={styles.text}>
           <MyTextInput
             label="Password :  "
             name="password"
             type="password"
             placeholder="password"
             />
            </div>
             <br />
           <button type="submit">Login</button>
         </Form>
       </Formik>
      </div>
    </div>
  )
}

export default Login