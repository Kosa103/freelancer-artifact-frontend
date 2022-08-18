import * as Yup from 'yup';

export const loginSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    email: Yup.string()
      .required(ERROR_MESSAGES.EMAIL_EMPTY)
      .email(ERROR_MESSAGES.EMAIL_FORMAT),
    password: Yup.string()
      .required(ERROR_MESSAGES.PASSWORD_EMPTY)
      .min(8, ERROR_MESSAGES.PASSWORD_SHORT),
  });
};

export const registerSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    name: Yup.string()
      .required(ERROR_MESSAGES.REQUIRED_FIELD),
    email: Yup.string()
      .required(ERROR_MESSAGES.EMAIL_EMPTY)
      .email(ERROR_MESSAGES.EMAIL_FORMAT),
    phone: Yup.string()
      .required(ERROR_MESSAGES.REQUIRED_FIELD),
    password: Yup.string()
      .required(ERROR_MESSAGES.PASSWORD_EMPTY)
      .min(8, ERROR_MESSAGES.PASSWORD_SHORT),
    acceptTerms: Yup.boolean()
      .oneOf([true], ERROR_MESSAGES.ACCEPT_TERMS_REQUIRED),
  });
};

export const forgotPasswordSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    email: Yup.string()
      .required(ERROR_MESSAGES.EMAIL_EMPTY)
      .email(ERROR_MESSAGES.EMAIL_FORMAT),
  });
}; 

export const resetPasswordSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    password: Yup.string()
      .required(ERROR_MESSAGES.PASSWORD_EMPTY)
      .min(8, ERROR_MESSAGES.PASSWORD_SHORT),
    passwordConfirmation: Yup.string()
      .required(ERROR_MESSAGES.REQUIRED_FIELD)
      .oneOf([Yup.ref('password'), null], ERROR_MESSAGES.PASSWORD_MISMATCH),
  });
};

export const resendVerifyMailSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    email: Yup.string()
      .required(ERROR_MESSAGES.EMAIL_EMPTY)
      .email(ERROR_MESSAGES.EMAIL_FORMAT),
  });
}; 

export const myCandidateStartSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    userEmail: Yup.string()
      .required(ERROR_MESSAGES.EMAIL_EMPTY)
      .email(ERROR_MESSAGES.EMAIL_FORMAT),
  });
};

export const myCandidateNameSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    name: Yup.string()
      .required(ERROR_MESSAGES.REQUIRED_FIELD)
      .max(256, ERROR_MESSAGES.TOO_LONG),
  });
};

export const myCandidateEducationSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    educationText: Yup.string()
      .max(4000, ERROR_MESSAGES.TOO_LONG),
  });
};

export const myCandidateExperienceSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    experienceText: Yup.string()
      .max(4000, ERROR_MESSAGES.TOO_LONG),
  });
};

export const myCandidateSpecialsSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    specialsText: Yup.string()
      .max(4000, ERROR_MESSAGES.TOO_LONG),
  });
};

export const myCandidateCertificationsSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    certificationsText: Yup.string()
      .max(4000, ERROR_MESSAGES.TOO_LONG),
  });
};

export const myCandidateLanguagesSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    languagesText: Yup.string()
      .max(4000, ERROR_MESSAGES.TOO_LONG),
  });
};

export const myCandidateProjectSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    projectStart: Yup.string()
      .max(256, ERROR_MESSAGES.TOO_LONG),
    projectDuration: Yup.string()
      .max(256, ERROR_MESSAGES.TOO_LONG),
    projectDescription: Yup.string()
      .max(4000, ERROR_MESSAGES.TOO_LONG),
  });
};

export const profileEditSchema = (ERROR_MESSAGES) => {
  return Yup.object().shape({
    name: Yup.string()
      .required(ERROR_MESSAGES.REQUIRED_FIELD),
    phone: Yup.string()
      .required(ERROR_MESSAGES.REQUIRED_FIELD),
    password: Yup.string()
      .min(8, ERROR_MESSAGES.PASSWORD_SHORT),
    passwordConfirmation: Yup.string().when('password', {
      is: (password) => !!password,
      then: Yup.string()
        .required(ERROR_MESSAGES.REQUIRED_FIELD)
        .oneOf([Yup.ref('password'), null], ERROR_MESSAGES.PASSWORD_MISMATCH),
      otherwise: Yup.string()
        .oneOf([Yup.ref('password'), null], ERROR_MESSAGES.PASSWORD_MISMATCH),
    }),
  });
};
