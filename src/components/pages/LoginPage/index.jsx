import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { AppContext } from '../../../storage/context/AppContext';
import { REDUCER_TYPES } from '../../../storage/reducers/utils';
import { STORAGE_KEYS } from '../../../storage/storageHandlers/config';
import { PATHS } from '../../../utils/constants';
import { hideLoadingLayer, showLoadingLayer } from '../../../utils/helpers';
import { setLocalStorage } from '../../../storage/storageHandlers/operations';
import { postLogin } from '../../../api/services/Auth';
import LoginForm from '../../forms/LoginForm';
import './index.scss';

export const LoginPage = () => {
  const dispatch = React.useContext(AppContext)[1];

  const navigate = useNavigate();
  const intl = useIntl();

  const handleLogin = async (values, { setSubmitting }) => {
    const loginData = {
      email: values.email,
      password: values.password,
    };

    try {
      showLoadingLayer(dispatch);
      const response = await postLogin(loginData);
      const { data, status } = response;

      if (status >= 200 && status < 300 && data) {
        const user = data;
        const { token } = user;
  
        if (token) {
          setLocalStorage(STORAGE_KEYS.TOKEN, token);
          setLocalStorage(STORAGE_KEYS.USER, user);
          dispatch({
            type: REDUCER_TYPES.SET_TOKEN,
            token,
          });
          dispatch({
            type: REDUCER_TYPES.SET_USER,
            user,
          });
          dispatch({
            type: REDUCER_TYPES.SET_MODAL_DATA,
            modalData: {
              title: intl.messages.modals?.deleteRequestTitle,
              message: intl.messages.modals?.deleteRequestMessage,
            },
          });
          navigate(PATHS.home);
        }
      }
    } catch (error) {
      dispatch({
        type: REDUCER_TYPES.SET_ERROR_MODAL,
        errorModal: { message: intl.messages.apiErrors?.[error.response?.data?.messageKey || 'messageDefault']},
      });
      console.error(error);
    } finally {
      hideLoadingLayer(dispatch);
    }

    setSubmitting(false);
  };

  return (
    <div className="login-page">
      <div className="login-page__container">
        <div className="login-page__content panel">
          <h2 className="login-page__title">{intl.messages.pages?.login.title}</h2>
          <div className="login-page__form-container">
            <LoginForm onSubmit={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;