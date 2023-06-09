import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { MyTextInput } from "../../components/Formik/FormikComponents";
import { signup } from "./signupApi";
import * as Yup from "yup";
import styles from "./signup.module.css"

type Props = {};

function Signup(props: Props) {
  const navigate = useNavigate();

  const signupValidationSchema = Yup.object({
    userName: Yup.string()
      .max(25, "Must be 25 characters or less")
      .required("Required"),
    password: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
    password1: Yup.string()
      .max(10, "Must be 10 characters or less")
      .required("Required"),
  });

  const handleSubmit = (values: any) => {
    if(values.password1 === values.password){
      signup(values.userName, values.password);
      console.log(values);
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
    else{
      console.log(values,'password is not matching');
    }
    
  };
  return (
    <div className={styles.container}>
      <div className={styles.head}>
       <h1>SignUp</h1>
      </div>
      <div className={styles.input}>
      <Formik
        initialValues={{
          userName: "",
          password: "",
          password1: "",
        }}
        validationSchema={signupValidationSchema}
        onSubmit={values =>{handleSubmit(values)}}
      >
        <Form>
        <br />
          <MyTextInput
            label="Username"
            name="userName"
            type="text"
            placeholder="username"
          />
  <br />
          <MyTextInput
            label="Password"
            name="password"
            type="password"
            placeholder="password"
          />
<br />
          <MyTextInput
            label="Confirm Password"
            name="password1"
            type="password"
            placeholder="Confirm password"
          />
          <br />
          <button type="submit">SignIn</button>
          <br />
        </Form>
      </Formik>
      </div>
    </div>
  );
}

export default Signup;
