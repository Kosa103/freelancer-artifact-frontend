import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as classnames from 'classnames';
import './index.scss';

const Tabs = props => {
  /* tabsData: {
  *    id: number,
  *    label: string,
  *    route: string,
  *    component: React.FunctionComponent
  *  }[]
  */
  const {
    className,
    tabsData,
  } = props;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={classnames(
        'tabs',
        className && className,
      )}
    >
      <div className="tabs__tab-container">
        {tabsData.map(tab => (
          <div
            key={tab.id}
            className={classnames(
              'tabs__tab-border',
              tab.route === pathname && '-active',
            )}
            onClick={() => navigate(tab.route)}
          >
            <div
              className={classnames(
                'tabs__tab',
                tab.route === pathname && '-active',
              )}
            >
              {tab.label}
            </div>
          </div>
        ))}
      </div>
      <div className="tabs__content-container">
        {tabsData.find(tab => tab.route === pathname)?.component || <></>}
      </div>
    </div>
  );
};

export default Tabs;
