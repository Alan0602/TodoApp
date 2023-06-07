import { Formik } from "formik";
import { Form, useNavigate } from "react-router-dom";
import { MyTextInput } from "../../components/Formik/FormikComponents";
import { signup } from "./signupApi";
import * as Yup from "yup";

type Props = {};

function Signup(props: Props) {
  // const navigate = useNavigate();

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
      signup(values.userName, values.password);
      console.log(values);
      // setTimeout(() => {
      //   navigate("/login");
      // }, 3000);
    
  };
  return (
    <div>
      <h1>Signup</h1>
      <Formik
        initialValues={{
          userName: "",
          password: "",
          password1: "",
        }}
        validationSchema={signupValidationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
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

          <MyTextInput
            label="Confirm Password"
            name="password1"
            type="password"
            placeholder="Confirm password"
          />
          <button type="submit">SignIn</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Signup;
