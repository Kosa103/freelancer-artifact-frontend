import React from 'react';
import { STORAGE_KEYS } from '../../../storage/storageHandlers/config';
import { getLocalStorage } from '../../../storage/storageHandlers/operations';
import DropdownMenu from '../ui/DropdownMenu';
import './index.scss';

const MenuBar = () => {
  const isLoggedIn = !!getLocalStorage(STORAGE_KEYS.TOKEN);

  return (
    <div className="menu-bar panel">
      {isLoggedIn && (
        <DropdownMenu />
      )}
    </div>
  );
};

export default MenuBar;
