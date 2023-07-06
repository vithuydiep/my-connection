import React, { useState } from "react";
import useLoginFormStyle from "./LoginFormStyle";
import logoX from "../../assets/images/logoX.png";
import FormInput from "../../Components/FormInput/FormInput";
import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../Routings/constant";

const USER_NAME = "admin123";
const PASSWORD = "admin321";

interface FormValueProps {
  username: string;
  password: string;
}

function LoginFormPage() {
  const { wrapper, content, header, formWrapper } = useLoginFormStyle();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formValue: FormValueProps = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().trim().required("Username is required"),
    password: Yup.string().trim().required("Password is required"),
  });

  const onHandleSubmit = (values: FormValueProps) => {
    if (values.username === USER_NAME && values.password === PASSWORD) {
      setError("");
      navigate(ROUTE_PATHS.connectionPage)
    } else {
      setError("Username or password is incorrect");
    }
  };

  return (
    <div className={wrapper}>
      <div className={content}>
        <div className={header}>
          <img src={logoX} alt="log" />
          <p>An all-in-one analytics solution</p>
        </div>
        <h2>Login to continue</h2>
        {error && <p>{error}</p>}
        <Formik
          initialValues={formValue}
          onSubmit={onHandleSubmit}
          validationSchema={validationSchema}
        >
          {(formik: FormikProps<FormValueProps>) => (
            <Form className={formWrapper}>
              <FormInput
                name="username"
                label="Email Address"
                value={formik.values.username}
                error={formik.errors.username}
              />
              <FormInput
                name="password"
                label="Password"
                value={formik.values.password}
                type="password"
                error={formik.errors.password}
              />
              <button role="button">Login</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default LoginFormPage;
