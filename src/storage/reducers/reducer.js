const setStorage = (state, { storage }) => {
  if (storage) {
    state.storage = storage;
    state.isSet = true;
  }
  return { ...state };
};

const setErrorModal = (state, { errorModal }) => {
  state.errorModal = errorModal;
  return { ...state };
};

const setIsLoading = (state, { isLoading }) => {
  state.isLoading = isLoading;
  return { ...state };
};

const setModalData = (state, { modalData }) => {
  if (modalData) {
    state.modalData = modalData;
  }
  return { ...state };
};

const setToken = (state, { token }) => {
  if (token) {
    state.token = token;
  }
  return { ...state };
};

const setSelectedLanguage = (state, { selected }) => {
  if (selected) {
    state.selectedLanguage = selected;
  }
  return { ...state };
};

const setHelpers = (state, { helpers }) => {
  if (helpers) {
    state.helpers = helpers;
  }
  return { ...state };
};

const setUser = (state, { user }) => {
  if (user) {
    state.user = user;
  }
  return { ...state };
};

const nullErrorModal = (state) => {
  state.errorModal = null;
  return { ...state };
};

const nullModalData = (state) => {
  state.modalData = {};
  return { ...state };
};

const nullToken = (state) => {
  state.token = '';
  nullErrorModal(state, {});
  return { ...state };
};

const nullUser = (state) => {
  state.user = {};
  return { ...state };
};

const actions = {
  setStorage,
  setErrorModal,
  setIsLoading,
  setModalData,
  setToken,
  setSelectedLanguage,
  setHelpers,
  setUser,
  nullErrorModal,
  nullModalData,
  nullToken,
  nullUser,
};

export const reducer = (state, action) => {
  if (action && action.type && actions[action.type]) {
    return actions[action.type](state, action);
  }
  return { ...state };
};
