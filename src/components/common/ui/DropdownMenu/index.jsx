import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import * as classnames from 'classnames';
import { MENU_BAR_ITEMS, PATHS } from '../../../../utils/constants';
import Button from '../Buttons/Button';
import DropdownMenuItem from '../DropdownMenuItem';
import './index.scss';

const DropdownMenu = props => {
  const [isMenuOpen, setIsMenuOpen] = React.useState();

  const { className } = props;

  const navigate = useNavigate();
  const intl = useIntl();

  const menuElement = React.useRef(null);

  const selectMenuItem = item => {
    switch (MENU_BAR_ITEMS[item]) {
      case MENU_BAR_ITEMS.PLAYERS:
        setIsMenuOpen(!isMenuOpen);
        navigate(PATHS.players);
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    if (menuElement?.current) {
      if (isMenuOpen) {
        menuElement.current.style.height = `${54 + (Object.keys(MENU_BAR_ITEMS).length - 1) * 52}px`;
        menuElement.current.style.borderWidth = '2px';
      } else {
        menuElement.current.style.height = '0px';
        setTimeout(() => {
          menuElement.current.style.borderWidth = '0px';
        }, 500);
      }
    }
  }, [isMenuOpen]);

  return (
    <div className={classnames(
      'dropdown-menu',
      className && className,
    )}>
      <Button
        label={intl.messages.common?.menu}
        handleClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <div
        className="dropdown-menu__menu"
        ref={menuElement}
      >
        {Object.keys(MENU_BAR_ITEMS).map((item, i) => (
          <DropdownMenuItem
            key={i}
            label={MENU_BAR_ITEMS[item]}
            onClick={() => selectMenuItem(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
