import { STORAGE_KEYS } from '../../../storage/storageHandlers/config';
import { getLocalStorage } from '../../../storage/storageHandlers/operations';

const authHeaderInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.request.use(
    (request) => {
      const token = getLocalStorage(STORAGE_KEYS.TOKEN) || '';
      request.headers["x-access-token"] = token;
      return request;
    },
    (error) => {
      console.error(error);
    },
  );
};

export default authHeaderInterceptor;
