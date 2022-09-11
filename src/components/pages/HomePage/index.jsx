import React from 'react';
import { useIntl } from 'react-intl';
import './index.scss';

export const HomePage = () => {
  const intl = useIntl();
  
  return (
    <div className="home-page">
      <div className="home-page__message-container">
        <h2 className="home-page__welcome-message">{intl.messages.pages?.home.welcomeTo}</h2>
        <h1 className="home-page__title">FREELANCER ARTIFACT</h1>
      </div>
    </div>
  );
};

export default HomePage;