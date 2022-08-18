import { STORAGE_KEYS } from "../../../storage/storageHandlers/config";
import { removeFromLocalStorage } from "../../../storage/storageHandlers/operations";

const authErrorInterceptor = (axiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },(error) => {
      if (error?.response?.status === 401) {
        removeFromLocalStorage(STORAGE_KEYS.TOKEN);
        window.location.pathname = '/';
      }
    }
  );
};

export default authErrorInterceptor;
