import { REDUCER_TYPES } from "../storage/reducers/utils";

export const isInViewport = element => {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight &&
      rect.right <= window.innerWidth
  );
};

export const getUrlParams = search => {
  if (!search || typeof search !== 'string') {
    return {};
  }
  
  const searchParams = {};
  search
    .split('')
    .filter((elem, i) => i !== 0)
    .join('')
    .split('&')
    .forEach(param => {
      const [key, value] = param.split('=');
      searchParams[key] = value;
    });

    return searchParams;
};

export const showLoadingLayer = dispatch => {
  dispatch({
    type: REDUCER_TYPES.SET_IS_LOADING,
    isLoading: true,
  });
};

export const hideLoadingLayer = dispatch => {
  dispatch({
    type: REDUCER_TYPES.SET_IS_LOADING,
    isLoading: false,
  });
};

export const comparePrimitiveObjectsWithSameStructure = (object1, object2) => {
  if (!object1 || !object2) {
    return false;
  }
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key of Object.keys(object1)) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

export const objectHasOnlyFalsyValues = object => {
  if (!object) {
    return false;
  }
  
  Object.keys(key => {
    if (object[key]) {
      return false;
    }
  });

  return true;
};

export const createDoubleDigitPositiveIntegerString = inputNumber => {
  if (!inputNumber) {
    return null;
  }

  const number = Number(inputNumber);
  if (!number || number < 0 || number >= 100 || number % 1) {
    return null;
  }

  if (number >= 0 && number < 10) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
};
