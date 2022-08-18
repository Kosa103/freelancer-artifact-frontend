import { DATA_TYPES } from '../../utils/constants';

export const STORAGE_KEYS = {
  LANGUAGE: 'language',
  TOKEN: 'token',
  USER: 'user',
};

export const STORAGE_SCHEMA = {
  language: DATA_TYPES.STRING,
  token: DATA_TYPES.STRING,
  user: DATA_TYPES.OBJECT,
};