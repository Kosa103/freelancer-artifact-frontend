import { useContext, useEffect } from 'react';
import { AppContext } from './context';
import { TOKEN, USER } from '../utils/constants';
import { REDUCER_TYPES } from './reducers/utils';

const StorageHandler = () => {
  const [{ token = '', user = null, error = {}, isSet = false }, dispatch] = useContext(AppContext);

  useEffect(() => {
    const localToken = localStorage.getItem(TOKEN) || '';
    if (error && error.code && (error.code === 401 || error.code === 403)) {
      localStorage.removeItem(TOKEN);
      dispatch({ type: REDUCER_TYPES.NULL_TOKEN, token: '' });
    }
    if (localToken && !token) {
      dispatch({
        type: REDUCER_TYPES.SET_TOKEN,
        token: localToken,
      });
    }
  }, [token, error, isSet, dispatch]);

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem(USER)) || null;
    if (localUser && !user) {
      dispatch({
        type: REDUCER_TYPES.SET_USER,
        user: localUser,
      });
    }
  }, [user, dispatch]);

  return null;
}

export default StorageHandler;
