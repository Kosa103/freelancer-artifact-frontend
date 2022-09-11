import React from 'react';
import * as classnames from 'classnames';
import './index.scss';

const DropdownMenuItem = props => {
  const { className, label, onClick } = props;

  return (
    <div
      className={classnames(
        'dropdown-menu-item',
        className && className
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default DropdownMenuItem;
