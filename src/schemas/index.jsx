import * as Yup from 'yup';

export const registerSchema = Yup.object({
  name: Yup.string().min(3).max(15).required('please enter your name'),
  email: Yup.string().email().required('please enter your email'),
  password: Yup.string().min(6).required('please enter your password'),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required('enter your email'),
  password: Yup.string().min(6).required('enter your password'),
});

export const forgetPasswordSchema = Yup.object({
  email: Yup.string().email().required('enter your email'),
});

export const changePasswordSchema = Yup.object({
  old_password: Yup.string().min(6).required('enter your old password'),
  new_password: Yup.string()
    .required()
    .oneOf([Yup.ref('old_password'), null], 'password must be same'),
});
