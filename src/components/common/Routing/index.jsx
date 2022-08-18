import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { STORAGE_KEYS } from '../../../storage/storageHandlers/config';
import { getLocalStorage } from '../../../storage/storageHandlers/operations';
import { PATHS } from '../../../utils/constants';

const ProtectedRoute = (props) => {
  const { children } = props;

  const token = getLocalStorage(STORAGE_KEYS.TOKEN) || '';

  if (!token) {
    return <Navigate replace to={`${PATHS.admin}${PATHS.root}`} />;
  }

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
