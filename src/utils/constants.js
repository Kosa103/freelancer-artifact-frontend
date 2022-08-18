export const API_BASE_URL = process.env.REACT_APP_URL;
export const API_URL = `${API_BASE_URL}/api`;

export const TOKEN = 'token';
export const USER = 'user';
export const USERNAME = 'username';
export const LANGUAGE = 'language';
export const STORAGE = 'storage';
export const MENU = 'menu';
export const INTL = 'intl';

export const TWO_WEEKS_MS = 12096e5;
export const EXP_DATE = 'token-expiration-date'

//eslint-disable-next-line no-useless-escape
export const TRANSLATE_REGEXP = /[^\x20-\x7E]|[\s-\/()-]/g;

export const PATHS = {
  root: '/',
  notFound: '/not-found',
  login: '/login',
  home: '/home',
  params: {
    playerId: '/:playerId',
  },
};

export const UNPROTECTED_PATHS = [
  PATHS.root,
  PATHS.notFound,
  PATHS.register,
  PATHS.registerSuccess,
  PATHS.forgotPassword,
  PATHS.resetPassword,
  PATHS.resendVerifyMail,
  PATHS.login,
  PATHS.privacyPolicy,
];

export const LANGUAGES = {
  EN: 'en',
  SE: 'se',
};

export const DATA_TYPES = {
  BOOLEAN: 'boolean',
  STRING: 'string',
  NUMBER: 'number',
  ARRAY: 'array',
  OBJECT: 'object',
};
