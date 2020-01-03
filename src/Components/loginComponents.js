import React, { Component } from 'react';
import '../css/loginComponents.css';

import { Formik } from "formik";
// import * as EmailValidator from "email-validator";

const loginComponents = () => (
  
  <Formik
    initialValues={{ Phone: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}


    validate={values => {
      let errors = {};
      const phoneRegex=/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!values.Phone) {
        errors.Phone = "Required";}
        else if (values.Phone.length < 10) {
          errors.Phone = "Phone number must be 10 characters long.";
      }  else if (!phoneRegex.test(values.Phone)) {
        errors.Phone = "Enter 10 digits";
      }

      const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters long.";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "Invalid password. Must contain one small letter,a number, a special charcter";
      }

      return errors;
    }}
    //********Using Yum for validation********/

    // validationSchema={Yup.object().shape({
    //   email: Yup.string()
    //     .email()
    //     .required("Required"),
    //   password: Yup.string()
    //     .required("No password provided.")
    //     .min(8, "Password is too short - should be 8 chars minimum.")
    //     .matches(/(?=.*[0-9])/, "Password must contain a number.")
    // })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <div className="body">
        <form className="loginform" onSubmit={handleSubmit}>
          <label className="loginlabel" htmlFor="email">Phone Number</label>
          <input
            name="Phone"
            type="number"
            placeholder="Enter your Phone Number"
            value={values.Phone}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.Phone && touched.Phone} 
            className="logininput"
          />
          {errors.Phone && touched.Phone && (
            <div className="input-feedback">{errors.Phone}</div>
          )}
          <label className="loginlabel"  htmlFor="Phone">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"} 
            className="logininput"/>
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button className="loginbutton" type="submit" disabled={isSubmitting}>
            Login
          </button>
        </form>
        </div>
      );
     
    }}
  </Formik>
);



export default loginComponents;
