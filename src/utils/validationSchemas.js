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

export const playerSchema = (intl) => {
  return Yup.object().shape({
    id: Yup.number()
      .integer()
      .required(intl.messages.errors?.fieldRequired),
    name: Yup.string()
      .required(intl.messages.errors?.fieldRequired),
    updatedAtDate: Yup.string()
      .required(intl.messages.errors?.fieldRequired),
    level: Yup.number()
      .integer(intl.messages.errors?.mustBeWhole)
      .min(0, intl.messages.errors?.tooLow)
      .max(90, intl.messages.errors?.tooHigh),
    description: Yup.string()
      .max(500, intl.messages.errors?.textTooLong)
  });
};
