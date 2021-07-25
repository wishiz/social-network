import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { setAuthData } from '../../redux/reducers/authReducer';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder='Username' name={'login'} component={'input'} />
      <Field placeholder='Password' name={'password'} component={'input'} />
      <Field type={'checkbox'} name={'rememberMe'} component={'input'} />{' '}
      remember me
      <button>Log in</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(`formData`, formData);
    setAuthData();
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
