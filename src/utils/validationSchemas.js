import * as Yup from 'yup';

export const loginSchema = (intl) => {
  return Yup.object().shape({
    email: Yup.string()
      .required(intl.messages.errors?.emailEmpty)
      .email(intl.messages.errors?.emailRequired),
    password: Yup.string()
      .required(intl.messages.errors?.fieldRequired),
  });
};
