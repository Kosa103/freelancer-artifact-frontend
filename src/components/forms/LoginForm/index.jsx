import React from 'react';
import { useIntl } from 'react-intl';
import { Formik } from 'formik';
import { loginSchema } from '../../../utils/validationSchemas';
import InputTextField from '../../common/ui/InputTextField';
import Button from '../../common/ui/Buttons/Button';
import './index.scss';

const LoginForm = (props) => {
  const { onSubmit } = props;

  const intl = useIntl();

  const initialValues = {
    email: '',
    password: ''
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema(intl)}
      onSubmit={(values, formikBag) => onSubmit(values, formikBag)}
    >
      {({ values, touched, errors, handleChange, handleSubmit, handleBlur, isSubmitting }) => (
        <form className="login-form" onSubmit={handleSubmit}>
          <InputTextField
            className="login-form__input"
            placeholder={intl.messages.common?.email}
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
          />
          <InputTextField
            className="login-form__input"
            placeholder={intl.messages.common?.password}
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            error={touched.password && errors.password}
          />

          <div className="login-form__button-container">
            <Button
              className='login-form__button'
              label={intl.messages.pages?.login.login}
              type='submit'
              onSubmit={handleSubmit}
              disabled={isSubmitting || Object.keys(errors).length}
            />
          </div>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
