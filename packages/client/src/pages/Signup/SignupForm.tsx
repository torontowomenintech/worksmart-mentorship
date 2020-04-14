import React, { ReactElement } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { User } from '../../lib/types';
import * as Yup from 'yup';
import API from '../../lib/API';

interface Props {
  goBack: () => void;
  role: String;
}

export default function SignupForm({ goBack, role }: Props): ReactElement {
  const initialValues: User = {
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters long')
      .required('Required'),
    passwordConfirm: Yup.string()
      .test(
        'Password confirm matches password',
        'Password does not match',
        function(value) {
          const { password } = this.parent;
          return password === value;
        }
      )
      .required('Required')
  });

  const onSubmit = (values: User) => {
    const { fullName, email, password, passwordConfirm } = values;

    API.signup({ fullName, email, password, passwordConfirm, role });
  };

  return (
    <>
      <button className="back" onClick={goBack}>
        Back
      </button>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <label htmlFor="fullName">Full Name</label>
          <Field name="fullName" type="text" />
          <ErrorMessage name="fullName" />
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <Field name="passwordConfirm" type="password" />
          <ErrorMessage name="passwordConfirm" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
